//Umbrae: https://www.blankmediagames.com/phpbb/viewtopic.php?f=27&t=120271
//Florae: https://www.blankmediagames.com/phpbb/viewtopic.php?f=27&t=119288

const {Client, Intents, MessageEmbed} = require('discord.js');
const {readFile, writeFile} = require("fs");

const PRE = "=";

const bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS]});

const menus = {};
const categories = {};
const commands = {};
const conflicts = {};
const roles = [];

const PLAYER_DATA = [];

const factions =
{
	Town: {color: "80FF00", icon: "https://cdn.discordapp.com/emojis/974880541348331541.webp"},
	Mafia: {color: "FF0000", icon: "https://cdn.discordapp.com/emojis/974880541298020402.webp"},
	Coven: {color: "BF5FFF", icon: "https://cdn.discordapp.com/emojis/974880541180575784.webp"},
	Rock: {color: "404040", icon: "https://cdn.discordapp.com/emojis/975690756390010891.webp"},
	Plant: {color: "008000", icon: "https://cdn.discordapp.com/emojis/977636071884087326.webp"},
	Underworld: {color: "C51C00", icon: "https://cdn.discordapp.com/emojis/987959165341294592.webp"},
	Hallow: {color: "FFC272", icon: "https://cdn.discordapp.com/emojis/993413133597147247.webp"},
	Stalker: {color: "000000", icon: "https://cdn.discordapp.com/emojis/988001997477269535.webp"},
	Were: {color: "804000", icon: "https://cdn.discordapp.com/emojis/974886993517490256.webp"},
	Vampire: {color: "7B8968", icon: "https://cdn.discordapp.com/emojis/975231005713645618.webp"},
	Everfrost: {color: "00FFFF", icon: "https://cdn.discordapp.com/emojis/977636071833759785.webp"},
	Umbrae: {color: "498080", icon: "https://cdn.discordapp.com/emojis/979822258543550484.webp"},
	PaleMoon: {color: "400080", icon: "https://cdn.discordapp.com/emojis/975853561722322944.webp"},
	Sith: {color: "800000", icon: "https://cdn.discordapp.com/emojis/974882271783968839.webp"},
	Insurgency: {color: "B00B69", icon: "https://cdn.discordapp.com/emojis/993409239764717569.webp"},
	Loyalist: {color: "93C47D"},
	SCP: {color: "AAAAAA", icon: "https://cdn.discordapp.com/emojis/976658193323282462.webp"},
	Thundercry: {color: "FFFF00"},
	Crew: {color: "EDC240", icon: "https://cdn.discordapp.com/emojis/980989425137901588.webp"},
	Pokemon: {color: "BB2F2F", icon: "https://cdn.discordapp.com/emojis/978766215155707924.webp"},
	Fox: {color: "D67D4D"},
	Cult: {color: "243A5F", icon: "https://cdn.discordapp.com/emojis/981974951756185680.webp"},
	Horsemen: {color: "6936DB"},
	Biohazard: {color: "1FCF1F", icon: "https://cdn.discordapp.com/emojis/677256057940082691.webp"},
	Unseen: {color: "620035", icon: "https://cdn.discordapp.com/emojis/982379114335989831.webp"},
	City: {color: "15C59E", icon: "https://cdn.discordapp.com/emojis/985026316506103878.webp"},
	FallenAngel: {color: "FFFFFF"},
	Agent: {color: "7F5252", icon: "https://cdn.discordapp.com/attachments/970041598308134995/990391585344737370/unknown.png"},
	Random: {color: "random", icon: "https://cdn.discordapp.com/emojis/994284946225115176.webp"},
	Neutral: {color: "808080", icon: "https://cdn.discordapp.com/emojis/980943261587865650.webp"}
};

var day = false;
function toggle_day()
{
	day = !day;
}

function is_day()
{
	return day;
}

const FNAME = ".store.json";
var TOKEN;
readFile(FNAME, (err, data) =>
{
	if(err) throw err;

	let store = JSON.parse(data);

	if(store.TOKEN)
		TOKEN = store.TOKEN;
	else
		throw "Error: No TOKEN provided.";

	if(store.day != null)
		day = store.day;

	if(store.PLAYER_DATA)
		for(let i = 0; i < store.PLAYER_DATA.length; i++)
			PLAYER_DATA[i] = store.PLAYER_DATA[i];

	login();
})

function overwrite(chn)
{
	let json = JSON.stringify({TOKEN, day, PLAYER_DATA});

	writeFile(FNAME, json, (err) =>
	{
		if(err) throw err;
		if(chn) msg(chn, "+Data saved successfully.");
	});
}

function msg(chn, txt, nodiff, line, sent)
{
	let size = 1750;
	line = (line || 0);
	txt = (txt || "").toString();

	if(line + size < txt.length)
		while(txt[line+size-1] && txt[line+size-1] != '\n')
			size -= 1;

	if(size <= 0)
		size = 1750;

	let t = txt.substring(line, line + size);
	let message = (nodiff && t || "```diff\n" + t + "```");

	if(!sent)
	{
		chn.send(message).then((sent) =>
		{
			if(line + t.length < txt.length)
			{
				menus[sent.id] = {message: sent, page: 1, list: [message], time: new Date().getTime()};
				msg(chn, txt, nodiff, line + size, sent);
			}
		});
	}
	else
	{
		menus[sent.id].list[menus[sent.id].list.length] = message;

		if(line + t.length < txt.length)
			msg(chn, txt, nodiff, line + size, sent);
		else
		{
			sent.edit(menus[sent.id].list[0] + "\n\nPage 1 of " + menus[sent.id].list.length
				+ "\n\nReact:\n➡️ - Next Page\n⏩ - Last Page\n❌ - Close Menu");
			sent.react("➕");
		}
	}
}

let c = 1;
function add_cmd(name, cmd)
{
	if(name !== name.toLowerCase())
	{
		console.log("WARNING: Command name '" + name + "' is not lowercase!");
		name = name.toLowerCase();
	}

	if(name.match(" "))
	{
		console.log("WARNING: Command name '" + name + "' contains a space!");
		name = name.replace(/ /g, "_");
	}

	if(commands[name])
	{
		let n1 = name + "-" + 1;
		let n2 = name + "-" + 2;

		if(commands[n1])
		{
			let i = 2;
			let newname = "";

			do
			{
				i = i + 1;
				newname = name + "-" + i;
			}
			while(commands[newname]);

			commands[newname] = cmd;
			conflicts[name][i-1] = {com: newname, title: cmd.title, cat: cmd.cat};
		}
		else
		{
			commands[n1] = commands[name];
			commands[n2] = cmd;
			conflicts[name] = [{com: n1, title: commands[name].title, cat: commands[name].cat}, {com: n2, title: cmd.title, cat: cmd.cat}]
			categories["Conflict"] = true;

			commands[name] =
			{
				id: "c" + c,
				cat: "Conflict",
				desc: "This command exists because of a conflict between two role names or numbers. Use it to learn how to specify which individual role you want to see.",
				param: "",
				func: (chn) =>
				{
					let txt = "Command '" + PRE + name + "' refers to multiple roles. Did you mean:\n";

					for(let c in conflicts[name])
					{
						let con = conflicts[name][c];
						txt = txt + "\n" + PRE + con.com + " - " + con.title + " (" + con.cat + ")";
					}

					msg(chn, txt);
				}
			};

			c = c + 1;
		}
	}
	else
		commands[name] = cmd
}

function rHex()
{
	let h = Math.floor(Math.random() * 16);

	if(h >= 10)
		return String.fromCharCode(55 + h);
	else
		return String(h);
}

let r = 1;
function register_role(name, cat, desc, meta, func)
{
	if(!categories[cat])
		categories[cat] = true;

	if(!func)
	{
		func = meta;
		meta = {};
	}

	let cmd = 
	{
		id: "r" + r,
		cat,
		title: desc,
		desc: "View details of the " + desc + " role.",
		param: "",
		meta,
		func: (chn, message, e, args) =>
		{
			let fac = factions[cat] || {color: "808080"};
			let color = fac.color

			if(color === "random")
				color = rHex() + rHex() + rHex() + rHex() + rHex() + rHex();

			e.setAuthor({name: desc, iconURL: fac.icon});
			e.setColor(color || "808080");

			try
			{
				func(e);

				for(let f in e.fields)
				{
					if(e.fields[f].value.length > 1024)
					{
						msg(chn, "-ERROR: That command contains a Field which is longer than 1024 characters!");
						return;
					}
				}

				chn.send({embeds: [e]});
			}
			catch(error)
			{
				console.log(error.message + "\n\n" + error.stack);
				msg(chn, "-ERROR: " + error.message + "\n\n" + error.stack);
			}
		}
	};

	r = r + 1;

	if(typeof name === "string")
		add_cmd(name, cmd);
	else
		for(let i in name)
			add_cmd(name[i], cmd);

	roles[roles.length] = {cmd, rate: cmd.meta.spawnRate || 1};
}

const GLOBAL = {
	PRE,
	
	bot,
	categories,
	commands,
	roles,
	msg,
	register_role,
	overwrite,

	PLAYER_DATA,
	is_day,
	toggle_day,
};

require("./cmd_basics.js")(GLOBAL);
require("./cmd_rng.js")(GLOBAL);
require("./cmd_game.js")(GLOBAL);

for(let i = 50; i <= 1300; i+=50)
	require("./roles/cmd_roles_" + (i-49) + "-" + (i) + ".js")(GLOBAL);



bot.on("ready", () =>
{
	console.log("Logged in as " + bot.user.tag + "!");

	console.log("Guilds:");
	bot.guilds.cache.forEach(g =>
	{
		g.members.fetch(bot.user.id).then(b =>
		{
			g.members.fetch(g.ownerId).then(o =>
			{
				console.log(g.id + " - " + g.name + " - " + g.memberCount + " - " + o.user.tag + " - " + b.permissions.has("CREATE_INSTANT_INVITE") + " - " + b.permissions.has("ADMINISTRATOR"));
			});
		});
	});
});

bot.on("messageCreate", (message) =>
{
	if(message.content.substring(0, PRE.length) === PRE)
	{
		let channel = message.channel;
		let embed = new MessageEmbed();
		let args = message.content.substring(PRE.length).split(" ");
		let cmd = args[0].toLowerCase();
		args = args.splice(1);

		if(commands[cmd])
			commands[cmd].func(channel, message, embed, args);
		else
			msg(channel, "-ERROR: Unknown command: " + PRE + cmd);
	}

	if(message.member.user.id === bot.user.id || Math.floor(Math.random() * 10000) !== 6666)
		return;

	let egg = "null";

	switch(message.guildId)
	{
		case "701906009651675208":
			egg = "pingas";
			break;

		case "883874499139870721":
			egg = "Hmm...";
			break;

		case "976956707118936064":
			egg = "Who are you?";
			break;

		case "986855008840601613":
			egg = "I see you...";
			break;

		case "1000084058698690630":
			egg = "Mwah hah hah...!";
			break;
	}

	if(egg !== "null") msg(message.channel, egg, true);
	console.log(egg);
});

bot.on("messageReactionAdd", (reaction, user) =>
{
	if(user.id === bot.user.id)
		return;

	let message = reaction.message;

	if(menus[message.id])
	{
		let menu = menus[message.id];
		let emoji = reaction.emoji.name;
		let edit = false;

		if(emoji === "⬅️" && menu.page > 1)
		{
			menu.page -= 1;
			edit = true;
		}
		else if(emoji === "⏪" && menu.page > 2)
		{
			menu.page = 1;
			edit = true;
		}
		else if(emoji === "➡️" && menu.page < menu.list.length)
		{
			menu.page += 1;
			edit = true;
		}
		else if(emoji === "⏩" && menu.page < menu.list.length - 1)
		{
			menu.page = menu.list.length;
			edit = true;
		}
		else if(emoji === "❌")
		{
			message.edit(menu.list[menu.page-1]);
			message.reactions.removeAll();
			delete menus[message.id];
		}

		if(edit)
		{
			let etext = menu.list[menu.page-1] + "\n\nPage " + menu.page + " of " + menu.list.length + "\n\nReact:";
			message.reactions.removeAll();

			if(menu.page > 1)
				etext = etext + "\n⬅️ - Previous Page";

			if(menu.page > 2)
				etext = etext + "\n⏪ - First Page";

			if(menu.page < menu.list.length)
				etext = etext + "\n➡️ - Next Page";

			if(menu.page < menu.list.length - 1)
				etext = etext + "\n⏩ - Last Page";

			etext = etext + "\n❌ - Close Menu";

			message.edit(etext);
			message.react("➕");

			menu.time = new Date().getTime();
		}
	}
});

bot.on("guildMemberAdd", (member) =>
{
	if(!member.user.bot && member.guild.id === "970041597590929519")
		member.roles.add("990419145944334366");
});

bot.on("debug", (e) => console.log(e));

function login()
{
	bot.login(TOKEN);
}

setInterval(() =>
{
	let now = new Date().getTime();

	for(let mid in menus)
	{
		let menu = menus[mid];

		if(now - menu.time >= 3600000)
		{
			let message = menu.message;

			message.edit(menu.list[menu.page]);
			message.reactions.removeAll();
			delete menus[mid];
		}
	}
}, 1000)
