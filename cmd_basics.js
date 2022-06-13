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
	const {PRE, categories, commands, msg} = g;
	categories["Basic"] = true;
	let i = 0;
	
	function register_cmd(name, param, title, desc, func)
	{
		let cmd = 
		{
			id: "b" + i,
			cat: "Basic",
			title,
			desc,
			param,
			func
		};

		i = i + 1;

		if(typeof name === "string")
			commands[name] = cmd;
		else
			for(let i in name)
				commands[name[i]] = cmd;
	}

	register_cmd("list", "[category] [subcategory]", "List", "Create a list of all registered commands, organized by category. If a valid category is provided, this will list commands from only that category instead. A subcategory may be provided to further narrow the list. Commands with alternate forms will have each form listed on the same line.", (chn, message, e, args) =>
	{
		if(!args[0] && !message.member.permissions.has("ADMINISTRATOR"))
		{
			msg(chn, "-Error: You require Admin level permissions to use =list without specifying a Category to list. Use `=help list` for more details.");
			return;
		}

		if(args[0] && (args[0].toLowerCase() === "town" || args[0].toLowerCase() === "neutral") && !message.member.permissions.has("ADMINISTRATOR"))
		{
			msg(chn, "-Error: You require Admin level permissions to use =list " + args[0]);
			return;
		}

		let list = "Command List:";
		let ordered = {};
		let atLeastOne = false;

		for(let cmd in commands)
		{
			let data = commands[cmd];

			if(args[0] && args[0].toLowerCase() !== data.cat.toLowerCase())
				continue;

			if(args[1] && (!data.meta.subCat || data.meta.subCat.toLowerCase() !== args[1].toLowerCase()))
				continue;

			atLeastOne = true;

			if(!ordered[data.cat])
				ordered[data.cat] = {};

			if(!ordered[data.cat][data.id])
				ordered[data.cat][data.id] = PRE + cmd;
			else
				ordered[data.cat][data.id] = ordered[data.cat][data.id] + " " + PRE + cmd;
		}

		if(!atLeastOne)
		{
			msg(chn, "-No roles could be found under those specifications.");
			return;
		}

		for(let cat in ordered)
		{
			list = list + "\n\n" + cat;
			
			for(let cmd in ordered[cat])
				list = list + "\n " + ordered[cat][cmd];
		}

		msg(chn, list);
	});

	register_cmd("categories", "", "Categories", "Retrieve a list of all known categories that contain at least one command. They can be used with " + PRE + "list [Category]", (chn) =>
	{
		let output = "List of Categories:\n";

		for(let cat in categories)
			output = output + "\n" + cat;

		msg(chn, output);
	});

	register_cmd("help", "[command]", "Help", "Recieve extra info about the usage and purpose of a provided command. Use " + PRE + "list to see a list of all commands.", (chn, message, e, args) =>
	{
		if(!args[0])
			help(commands, e, "help", PRE);
		else
			help(commands, e, args[0], PRE);

		chn.send({embeds: [e]});
	});

	register_cmd("ping", "", "Ping", "Debug; Send a signal to the bot and recieve a response.", (chn) =>
	{
		msg(chn, "+Pong!");
	});
};
