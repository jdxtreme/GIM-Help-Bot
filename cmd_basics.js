function help(commands, e, cmd, pre)
{
	let data = commands[cmd];
	
	if(!data)
	{
		e.setAuthor({name: "Command Not Found"});
		e.setColor("#FF0000");
		e.setDescription("The command \"" + pre + cmd + "\" does not exist.");
	}
	else
	{
		e.setAuthor({name: pre + cmd});
		e.setColor("#0000FF");
		e.setDescription(data.desc);
		e.addField("Category", data.cat);
		e.addField("Usage", pre + cmd + " " + data.param);

		let alts = [];
		for(let c in commands)
			if(c !== cmd && commands[c].id === data.id)
				alts[alts.length] = c;

		if(alts.length > 0)
		{
			let forms = pre + alts[0];
			
			for(let i = 1; i < alts.length; i++)
				forms = forms + "\n" + pre + alts[i];
			
			e.addField("Aliases", forms);
		}
	}
}

module.exports = (g) =>
{
	const {PRE, UTILS, add_cmd, commands, roles, aliases, MessageActionRow} = g;
	let i = 0;
	
	function register_cmd(name, param, title, desc, meta, func)
	{
		if(!func)
		{
			func = meta;
			meta = {};
		}
	
		add_cmd(name, {
			id: "b" + i,
			cat: "Basic",
			title,
			desc,
			param,
			meta,
			func
		});

		i = i + 1;
	}

	register_cmd("list", "[category[:subcategory]...]...", "List", "Create a list of all registered commands, organized by category, and when applicable, subcategory. Commands with alternate forms will have each form listed on the same line.\n\nYou may optionally provide category names as parameters. This will limit the created list to only commands from those categories.\n\nYou may also specify a subcategory for each category. This is done using the format of `category:subcategory`. The same category can have more than one listed subcategory, e.g. `category:apple:bannana:cyanide`\n\nPut a - or a ! before specified categories or subcategories to instead exclude them.\n\nSee =categories for a list of categories and subcategories.\n\nExact spelling will be required when specifying categories and subcategories, but they will not be case-sensitive.", (chn, message, e, args) =>
	{
		let list = "Command List:";
		let ordered = {};
		let atLeastOne = false;
		let specs = null;
		let exSpecs = null;
		let showSubs = Object.keys(roles).length > 200;

		if(args.length > 0)
		{
			for(let i = 0; i < args.length; i++)
			{
				let splits = args[i].toLowerCase().split(':');

				switch(args[i].toLowerCase())
				{
					case "tk": splits = ["town", "killing"]; break;
					case "tp": splits = ["town", "protective"]; break;
					case "ti": splits = ["town", "investigative"]; break;
					case "ts": splits = ["town", "support"]; break;
					case "tpo": splits = ["town", "power"]; break;
					case "nk": splits = ["neutral", "killing"]; break;
					case "nc": splits = ["neutral", "chaos"]; break;
					case "ne": splits = ["neutral", "evil"]; break;
					case "nb": splits = ["neutral", "benign"]; break;
					case "mh": splits = ["mafia", "head"]; break;
					case "mk": splits = ["mafia", "killing"]; break;
					case "ms": splits = ["mafia", "support"]; break;
					case "md": splits = ["mafia", "deception"]; break;
					case "me": splits = ["mafia", "espionage"]; break;
					case "ce": splits = ["coven", "evil"]; break;
				}

				let cat = splits[0];
				let exc = false;

				if(UTILS.isNeg(cat))
				{
					cat = cat.substring(1);
					exc = true;
				}

				if(aliases[cat.toLowerCase()])
					cat = aliases[cat.toLowerCase()].toLowerCase();

				if(exc)
				{
					if(!exSpecs)
						exSpecs = {};

					if(!exSpecs[cat])
						exSpecs[cat] = {};

					for(let n = 1; n < splits.length; n++)
					{
						let sub = splits[n];

						if(UTILS.isNeg(sub))
							sub = sub.substring(1);

						exSpecs[cat][sub] = true;
					}
				}
				else
				{
					if(!specs)
						specs = {};

					if(!specs[cat])
						specs[cat] = {};

					for(let n = 1; n < splits.length; n++)
					{
						let sub = splits[n];
						let exs = false;

						if(UTILS.isNeg(sub))
						{
							sub = sub.substring(1);
							exs = true;
						}

						if(exs)
						{
							if(!exSpecs)
								exSpecs = {};

							if(!exSpecs[cat])
								exSpecs[cat] = {};

							exSpecs[cat][sub] = true;
						}
						else
							specs[cat][sub] = true;
					}
				}

				if(splits.length > 1)
					showSubs = true;
			}
		}

		for(let cmd in commands)
		{
			let data = commands[cmd];

			if(specs && !specs[data.cat.toLowerCase()])
				continue;

			if(specs && Object.keys(specs[data.cat.toLowerCase()]).length > 0 && (!data.meta.subCat || !specs[data.cat.toLowerCase()][data.meta.subCat.toLowerCase()]))
				continue;

			if(exSpecs && exSpecs[data.cat.toLowerCase()] && Object.keys(exSpecs[data.cat.toLowerCase()]).length === 0)
				continue;

			if(exSpecs && Object.keys(exSpecs[data.cat.toLowerCase()] || {}).length > 0 && data.meta.subCat && exSpecs[data.cat.toLowerCase()][data.meta.subCat.toLowerCase()])
				continue;

			atLeastOne = true;

			if(!ordered[data.cat])
				ordered[data.cat] = {};

			let subCat = data.meta.subCat;
			if(!subCat)
				subCat = "(none)";

			if(!ordered[data.cat][subCat])
				ordered[data.cat][subCat] = {}

			if(ordered[data.cat][subCat][data.id])
				ordered[data.cat][subCat][data.id] = ordered[data.cat][subCat][data.id] + " " + PRE + cmd;
			else
				ordered[data.cat][subCat][data.id] = (data.meta.adminOnly ? "-" : " ") + PRE + cmd;
		}

		if(!atLeastOne)
		{
			UTILS.msg(chn, "-No commands could be found under those specifications.");
			return;
		}

		if(showSubs)
		{
			for(let cat in ordered)
			{
				for(let sub in ordered[cat])
				{
					if(Object.keys(ordered[cat]).length > 1 || sub !== "(none)")
						list = list + "\n\n" + cat + ' ' + sub;
					else
						list = list + "\n\n" + cat;

					for(let cmd in ordered[cat][sub])
						list = list + "\n" + ordered[cat][sub][cmd];
				}
			}
		}
		else
		{
			for(let cat in ordered)
			{
				list = list + "\n\n" + cat;

				for(let sub in ordered[cat])
					for(let cmd in ordered[cat][sub])
						list = list + "\n" + ordered[cat][sub][cmd];
			}
		}

		UTILS.msg(chn, list);
	});

	register_cmd(["categories", "cats"], "", "Categories", "Retrieve a list of all known categories that contain at least one command, as well as any subcategories within them. They can be used with " + PRE + "list [Category:Subcategory]", (chn) =>
	{
		let output = "List of Categories:\n";
		let cats = {}

		for(let cmd in commands)
		{
			let data = commands[cmd];

			if(!cats[data.cat])
				cats[data.cat] = {};

			if(data.meta.subCat)
				cats[data.cat][data.meta.subCat] = true;
		}

		for(let cat in cats)
		{
			let cstr = cat;

			if(Object.keys(cats[cat]).length > 0)
			{
				cstr = cstr + " - ";

				for(let sub in cats[cat])
					cstr = cstr + sub + ", ";

				cstr = cstr.substring(0, cstr.length-2);
			}

			output = output + '\n' + cstr;
		}

		UTILS.msg(chn, output);
	});

	register_cmd("help", "[command]", "Help", "Recieve extra info about the usage and purpose of a provided command. Use " + PRE + "list to see a list of all commands.", (chn, message, e, args) =>
	{
		if(!args[0])
			help(commands, e, "help", PRE);
		else
			help(commands, e, (args[0] || "").toLowerCase(), PRE);

		UTILS.embed(chn, e);
	});

	register_cmd("meta", "<command>", "Meta", "List a command's meta data. This is primarily used for roles with special spawning conditions.\n\nYou should not include any prefix when specifying the command's name, unless it happens to be separately part of the command's name.", (chn, message, e, args) =>
	{
		let cname = args[0] || "";
		let cmd = commands[cname];

		if(!cmd)
		{
			UTILS.msg(chn, "-ERROR: Command " + PRE + cname + " not found.");
			return;
		}

		let meta = cmd.meta;
		let keys = Object.keys(meta);

		if(keys.length === 0)
		{
			UTILS.msg(chn, "Command " + PRE + cname + " has no meta.");
			return;
		}

		let output = "Meta for command " + PRE + cname + "\n{";

		for(let i = 0; i < keys.length; i++)
			output = output + "\n\t" + keys[i] + ": " + UTILS.display(meta[keys[i]]);

		UTILS.msg(chn, output + "\n}");
	});

	register_cmd("ping", "", "Ping", "Debug; Send a signal to the bot and recieve a response.", (chn) =>
	{
		UTILS.msg(chn, "+Pong!");
	});

	register_cmd("menu", "", "Menu", "Debug; Send a message that tests the bot's menu functions.", (chn) =>
	{
		let options = [];
		let options2 = [];

		for(let i = 1; i <= 25; i++)
			options[i-1] = {label: "Option " + i, description: "Choose option " + i + ".", value: "menu:option_" + i};

		for(let i = 26; i <= 50; i++)
			options2[i-26] = {label: "Option " + i, description: "Choose option " + i + ".", value: "menu:option_" + i};

		let menu1 = new MessageActionRow({components: [
			{type: "BUTTON", customId: "menu:primary", style: "PRIMARY", label: "Primary"},
			{type: "BUTTON", customId: "menu:secondary", style: "SECONDARY", label: "Secondary"},
			{type: "BUTTON", customId: "menu:success", style: "SUCCESS", label: "Success"},
			{type: "BUTTON", customId: "menu:danger", style: "DANGER", label: "Danger"},
			{type: "BUTTON", style: "LINK", label: "Link", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
		]});
		let menu2 = new MessageActionRow({components: [
			{type: "SELECT_MENU", customId: "menu:selector", placeholder: "Selection Menu", options, max_values: 4}
		]});
		let menu3 = new MessageActionRow({components: [
			{type: "SELECT_MENU", customId: "menu:selector2", placeholder: "Selection Menu 2", options: options2}
		]});

		chn.send({components: [menu1, menu2, menu3]});
	});

	UTILS.registerInteraction("menu:primary", (i) => {i.update("```js\n\"Primary!\"\n```"); return true;});
	UTILS.registerInteraction("menu:secondary", (i) => {i.update("```\nSecondary.\n```"); return true;});
	UTILS.registerInteraction("menu:success", (i) => {i.update("```diff\n+Success!!!\n```"); return true;});
	UTILS.registerInteraction("menu:danger", (i) => {i.update("```diff\n-Danger?\n```"); return true;});
	UTILS.registerInteraction("menu:selector", (i) => {i.update("Selected: " + UTILS.display(i.values)); return true;});
	UTILS.registerInteraction("menu:selector2", (i) => {i.update("Selected: " + UTILS.display(i.values)); return true;});

	register_cmd("long", "", "Long", "Debug; Post an embed large enough to warrent being paged.", (chn, message, e) =>
	{
		e.setAuthor({name: "irhogohiyraktpg9hyowrhtgowowhtowjyowyjuhtowyjhtowuyjhaoikwhuyejtiwuyjhaoikwhyuejtokwrheautoikweahuytiokpahuy jioweaghuyio9pairhogohiyraktpg9hyowrhtgowowhtowjyowyjuhtowyjhtowuyjhaoikwhuyejtiwuyjh aoikwhyuejtokwrheautoikweahuytiokpahuyjioweaghuyio9pa i89ho03"});

		e.setDescription("ir cwouqninjw9ev9vnujtewuvtaiofvvyai3wocdtlyfyowf9oiuvtcbwocwcgwoct389ocnlywcow0tj03w4jycgo9w0wy;o0nwio6noupy3tppyt4 bop bv8oyy b38 bv0o byo btuwc0wa3c9j0c9pu;qcn0ocqpocnpy7p8;qcbvtyp80bcvty0cbyo0cuqo0cn0p;cnv0p;cbny0op;cnwop;cnywop;3ir cwouqninjw9ev9vnujtewuvtaiofvvyai3wocdtlyfyowf9oiuvtcbwocwcgwoct389ocnlywcow0tj03w4jycgo9w0wy;o0nwio6noupy3tppyt4 bop bv8oyy b38 bv0o byo btuwc0wa3c9j0c9pu;qcn0ocqpocnpy7p8;qcbvtyp80bcvty0cbyo0cuqo0cn0p;cnv0p;cbny0op;cnwop;cnywop;3ir cwouqninjw9ev9vnujtewuvtaiofvvyai3wocdtlyfyowf9oiuvtcbwocwcgwoct389ocnlywcow0tj03w4jycgo9w0wy;o0nwio6noupy3tppyt4 bop bv8oyy b38 bv0o byo btuwcv0p;cbny0op;cnwop;cnywop;3ir cwouqninjw9ev9vnujtewuvtaiofvvyai3wocdtlyfyowf9oiuvtcbwocwcgwoct389ocnlywcow0tj03w4jycgo9w0wy;o0nwio6noupy3tppyt4 bop bv8oyy b38 bv0o byo btuwc0wa3c9j0c9pu;qcn0ocqpocnpy7p8;qcbvtyp80bcvty0cbyo0cuqo0cn0p;cnv0p;cbny0op;cnwop;cnywop;3ir cwouqninjw9ev9vnujtewuvtaiofvvyai3wocdtlyfyowf9oiuvtcbwocwcgwoct389ocnlywcow0tj03w4jycgo9w0wy;o0nwio6noupy3tppyt4 bop bv8oyy b38 bv0o byo btuwc0wa3c9j0c9pu;qcn0ocqpocnpy7p8;qcbvtyp80bcvty0cbyo0cuqo0cn0p;cnv0p;cbny0op;cnwop;cnywop;3ir cwouqninjw9ev9vnujtewuvtaiofvvyai3wocdtlyfyowf9oiuvtcbwocwcgwoct389ocnlywcow0tj03w4jycgo9w0wy;o0nwio6noupy3tppyt4 bop bv8oyy b38 bv0o byo btuwc0wa3c9j0c9pu;qcn0ocqpocnpy7p8;qcbvtyp80bcvty0cbyo0cuqo0cn0p;cnv0p;cbny0op;cnwop;cnywop;3ir cwouqninjw9ev9vnujtewuvtaiofvvyai3wocdtlyfyowf9oiuvtcbwocwcgwoct389ocnlywcow0tj03w4jycgo9w0wy;o0nwio6noupy3tppyt4 bop bv8oyy b38 bv0o byo btuwc0wa3c9j0c9pu;qcn0ocqpocnpy7p8;qcbvtyp80bcvty0cbyo0cuqo0cn0p;cnv0p;cbny0op;cnwop;cnywop;3ir cwouqninjw9ev9vnujtewuvtaiofvvyai3wocdtlyfyowf9oiuvtcbwocwcgwoct389ocnlywcow0tj03w4jycgo9w0wy;o0nwio6noupy3tppyt4 bop bv8oyy b38 bv0o byo btuwc0wa3c9j0c9pu;qcn0ocqpocnpy7p8;qcbvtyp80bcvty0cbyo0cuqo0cn0p;cnv0p;cbny0op;cnwop;cnywop;3ir cwouqninjw9ev9vnujtewuvtaiofvvyai3wocdtlyfyowf9oiuvtcbwocwcgwoct389ocnlywcow0tj03w4jycgo9w0wy;o0nwio6noupy3tppyt4 bop bv8oyy b38 bv0o byo btuwc0wa3c9j0c9pu;qcn0ocqpocnpy7p8;qcbvtyp80bcvty0cbyo0cuqo0cn0p;cnv0p;cbny0op;cnwop;cnywop;3ir cwouqninjw9ev9vnujtewuvtaiofvvyai3wocdtlyfyowf9oiuvtcbwocwcgwoct389ocnlywcow0tj03w4jycgo9w0wy;o0nwio6noupy3tppyt4 bop bv8oyy b38 bv0o byo btuwc0wa3c9j0c9pu;qcn0ocqpocnpy7p8;qcbvtyp80bcvty0cbyo0cuqo0cn0p;cnv0p;cbny0op;cnwop;cnywop;3irrawe4twaqgwaqtgfqawtfq2wawgtfwaqt wa wa gtfawq tgq2wa4 qaw3 tgqa qa4 tqa t4qa2w4q2 wqr4a tgqa tgqw3a4 3awq4t gqaw3 b");

		e.setFooter({text: "oiuydfyhguijopu7yt6r54etyuio9u8ytr5e4tfyug7io87ytrfyfughiojytgfrdeyughijoytfrdefyughijoyt6r5 uiouy7t6r5e45tyugihoju7y6trteyuio pu8y7t6r5uiopiuytuiopiuytfyguhijoi uyttyuiopiuytreyuiopikujhygtfrdeyguhikjolijuyhgftdretfyguiopkiujyhgtrui opinu98y76t5rrt6y7u8i9oprtfyghujikjhbyvgftoiuydfyhguijopu7yt6r54etyuio9u8ytr5e4tfyug7io87ytrfyfughiojytgfrdeyughijoytfrdefyughijoyt6r5 uiouy7t6r5e45tyugihoju7y6trteyuio pu8y7t6r5uiopiuytuiopiuytfyguhijoi uyttyuiopiuytreyuiopikujhygtfrdeyguhikjolijuyhgftdretfyguiopkiujyhgtrui opinu98y76t5rrt6y7u8i9oprtfyghujikjhbyvgftoiuydfyhguijopu7yt6r54etyuio9u8ytr5e4tfyug7io87ytrfyfughiojytgfrdeyughijoytfrdefyughijoyt6r5 uiouy7t6r5e45tyugihoju7y6trteyuio pu8y7t6r5uiopiuytuiopiuytfyguhijoi uyttyuiopiuytreyuiopikujhygtfrdeyguhikjolijuyhgftdretfyguiopkiujyhgtrui opinu98y76t5rrt6y7u8i9oprtfyghujikjhbyvgftoiuydfyhguijopu7yt6r54etyuio9u8ytr5e4tfyug7io87ytrfyfughiojytgfrdeyughijoytfrdefyughijoyt6r5 uiouy7t6r5e45tyugihoju7y6trteyuio pu8y7t6r5uiopiuytuiopiuytfyguhijoi uyttyuiopiuytreyuiopikujhygtfrdeyguhikjolijuyhgftdretfyguiopkiujyhgtrui opinu98y76t5rrt6y7u8i9oprtfyghujikjhbyvgftoiuydfyhguijopu7yt6r54etyuio9u8ytr5e4tfyug7io87ytrfyfughiojytgfrdeyughijoytfrdefyughijoyt6r5 uiouy7t6r5e45tyugihoju7y6trteyuio pu8y7t6r5uiopiuytuiopiuytfyguhijoi uyttyuiopiuytreyuiopikujhygtfrdeyguhikjolijuyhgftdretfyguiopkiujyhgtrui opinu98y76t5rrt6y7u8i9oprtfyghujikjhbyvgftoiuydfyhguijopu7yt6r54etyuio9u8ytr5e4tfyug7io87ytrfyfughiojytgfrdeyughijoytfrdefyughijoyt6r5 uiouy7t6r5e45tyugihoju7y6trteyuio pu8y7t6r5uiopiuytuiopiuytfyguhijoi uyttyuiopiuytreyuiopikujhygtfrdeyguhikjolijuyhgftdretfyguiopkiujyhgtrui opinu98y76t5rrt6y7u8i9oprtfyghujikjhbyvgftoiuydfyhguijopu7yt6r54etyuio9u8ytr5e4tfyug7io87ytrfyfughiojytgfrdeyughijoytfrdefyughijoyt6r5 uiouy7t6r5e45tyugihoju7y6trteyuio pu8y7t6r5uiopiuytuiopiuytfyguhijoi uyttyuiopiuytreyuiopikujhygtfrdeyguhikjolijuyhgftdretfyguiopkiujyhgtrui opinu98y76t5rrt6y7u8i9oprtfyghujikjhbyvgftopinu98y76t5rrt6y7u8i9oprtfyghujikjhbyvgftopinu98y76t5rrt6y7u8i9oprtfyghujikjhbyvgft2w4tygq	GYT	Q32awe4tgawgtasdfsdf"});

		e.addField("am;feaumewunmcqgqacnmyxmuya;0mugx9uamxng;axu9agmyuc9;wlan; vy;9a yyanv ;acny;o0gnca;lconygao8ycn5avn yg8oe5va  9ne;a90vgnycu98gny;oc5lm9uoi;9ancg90mcn0e0;u9on03anvc3g03e90ca30n;cg90gccg;90cnn9hy4y;vh u9nhv uvu;9u;9vu;9h;uah;9uh;u9h;9uh5;9unh5unhunhvnylhlyn", "890op2f0o;f vty v0u;ntu rfqiw3ajufowrriew34utfgoiruioweiopskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pg hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;nihu] nohuy5beip9ovngfuyoh4wph6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yh");

		e.addField("am;feaumewunmcqgqacnmyxmuya;0mugx9uamxng;axu9agmyuc9;wlan; vy;9a yyanv ;acny;o0gnca;lconygao8ycn5avn yg8oe5va  9ne;a90vgnycu98gny;oc5lm9uoi;9ancg90mcn0e0;u9on03anvc3g03e90ca30n;cg90gccg;90cnn9hy4y;vh u9nhv uvu;9u;9vu;9h;uah;9uh;u9h;9uh5;9unh5unhunhvnylhlyn", "890op2f0o;f vty v0u;ntu rfqiw3ajufowrriew34utfgoiruioweiopskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pg hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;nihu] nohuy5beip9ovngfuyoh4wph6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yh");

		e.addField("am;feaumewunmcqgqacnmyxmuya;0mugx9uamxng;axu9agmyuc9;wlan; vy;9a yyanv ;acny;o0gnca;lconygao8ycn5avn yg8oe5va  9ne;a90vgnycu98gny;oc5lm9uoi;9ancg90mcn0e0;u9on03anvc3g03e90ca30n;cg90gccg;90cnn9hy4y;vh u9nhv uvu;9u;9vu;9h;uah;9uh;u9h;9uh5;9unh5unhunhvnylhlyn", "890op2f0o;f vty v0u;ntu rfqiw3ajufowrriew34utfgoiruioweiopskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pg hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;nihu] nohuy5beip9ovngfuyoh4wph6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yh");

		e.addField("am;feaumewunmcqgqacnmyxmuya;0mugx9uamxng;axu9agmyuc9;wlan; vy;9a yyanv ;acny;o0gnca;lconygao8ycn5avn yg8oe5va  9ne;a90vgnycu98gny;oc5lm9uoi;9ancg90mcn0e0;u9on03anvc3g03e90ca30n;cg90gccg;90cnn9hy4y;vh u9nhv uvu;9u;9vu;9h;uah;9uh;u9h;9uh5;9unh5unhunhvnylhlyn", "890op2f0o;f vty v0u;ntu rfqiw3ajufowrriew34utfgoiruioweiopskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pg hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;nihu] nohuy5beip9ovngfuyoh4wph6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yh");

		e.addField("am;feaumewunmcqgqacnmyxmuya;0mugx9uamxng;axu9agmyuc9;wlan; vy;9a yyanv ;acny;o0gnca;lconygao8ycn5avn yg8oe5va  9ne;a90vgnycu98gny;oc5lm9uoi;9ancg90mcn0e0;u9on03anvc3g03e90ca30n;cg90gccg;90cnn9hy4y;vh u9nhv uvu;9u;9vu;9h;uah;9uh;u9h;9uh5;9unh5unhunhvnylhlyn", "890op2f0o;f vty v0u;ntu rfqiw3ajufowrriew34utfgoiruioweiopskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pg hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;nihu] nohuy5beip9ovngfuyoh4wph6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yh");

		e.addField("am;feaumewunmcqgqacnmyxmuya;0mugx9uamxng;axu9agmyuc9;wlan; vy;9a yyanv ;acny;o0gnca;lconygao8ycn5avn yg8oe5va  9ne;a90vgnycu98gny;oc5lm9uoi;9ancg90mcn0e0;u9on03anvc3g03e90ca30n;cg90gccg;90cnn9hy4y;vh u9nhv uvu;9u;9vu;9h;uah;9uh;u9h;9uh5;9unh5unhunhvnylhlyn", "890op2f0o;f vty v0u;ntu rfqiw3ajufowrriew34utfgoiruioweiopskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pg hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;nihu] nohuy5beip9ovngfuyoh4wph6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yho4iujgo9v pnwu35yop3u4qy;np4miuv5we';imvp4wvb'p4iwv 'pe890op2f0o;f vty v0u;ntu rfqiw3ajufowre34ujftriew34utfgoiruioweu4tiorew34iopsdkjfuaskjgdf;a ljkfds; ajgoira; noir4 o;93p4 qtyhiolujhgekrsygkdtr yh8iwy uk5gue67louj b;/pklo;/ kp['wsao 3]wq oiyw5g hw4p;em hye0'[6 mnihu] nohuy5beip9ovngfuyoh4wp;nyuo'h6p;emiujh6e5p;0ni uo06wemivyuho'ep6;mubi'0[659ibm 0op5eobk'5imu65'vme'y4ewimg'yh");

		UTILS.embed(chn, e);
	});
};
