//Umbrae: https://www.blankmediagames.com/phpbb/viewtopic.php?f=27&t=120271
//Florae: https://www.blankmediagames.com/phpbb/viewtopic.php?f=27&t=119288

const {Client, Intents, MessageEmbed} = require('discord.js');
const {readFile} = require("fs");

const PRE = "=";

const bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const categories = {};
const commands = {};
const conflicts = {};

const colors =
{
	Town: "80FF00",
	Mafia: "FF0000",
	Coven: "BF5FFF",
	Rock: "404040",
	Plant: "008000",
	Underworld: "C51C00",
	Hallow: "FFBB60",
	Stalker: "000000",
	Were: "804000",
	Vampire: "7B8968",
	Everfrost: "00FFFF",
	Umbrae: "498080",
	PaleMoon: "400080",
	Sith: "800000",
	Insurgency: "B00B69",
	Loyalist: "93C47D",
	SCP: "AAAAAA",
	Thundercry: "FFFF00",
	Neutral: "808080"
};

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

	login();
})

function msg(chn, txt, nodiff, line)
{
	let size = 1950;
	line = (line || 0);

	if(line + size < txt.length)
		while(txt[line+size-1] && txt[line+size-1] != '\n')
			size -= 1;

	if(size < 0)
		size = 1950;

	let t = txt.substring(line, line + size);
	let message = (nodiff && t || "```diff\n" + t + "```");

	chn.send(message);

	if(line + t.length < txt.length)
		msg(chn, txt, nodiff, line + size);
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

let r = 1;
function register_role(name, cat, desc, func)
{
	if(!categories[cat])
		categories[cat] = true;

	let cmd = 
	{
		id: "r" + r,
		cat,
		title: desc,
		desc: "View details of the " + desc + " role.",
		param: "",
		func: (chn, message, e, args) =>
		{
			e.setAuthor({name: desc});
			e.setColor(colors[cat] || "808080");
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
	};

	r = r + 1;

	if(typeof name === "string")
		add_cmd(name, cmd);
	else
		for(let i in name)
			add_cmd(name[i], cmd);
}

const GLOBAL = {
	PRE,
	
	bot,
	categories,
	commands,
	msg,
	register_role,
};

require("./cmd_basics.js")(GLOBAL);
require("./roles/cmd_roles_1-50.js")(GLOBAL);
require("./roles/cmd_roles_51-100.js")(GLOBAL);
require("./roles/cmd_roles_101-150.js")(GLOBAL);
require("./roles/cmd_roles_151-200.js")(GLOBAL);
require("./roles/cmd_roles_201-250.js")(GLOBAL);
require("./roles/cmd_roles_251-300.js")(GLOBAL);
require("./roles/cmd_roles_301-350.js")(GLOBAL);
require("./roles/cmd_roles_351-400.js")(GLOBAL);
require("./roles/cmd_roles_401-450.js")(GLOBAL);
require("./roles/cmd_roles_451-500.js")(GLOBAL);
require("./roles/cmd_roles_501-550.js")(GLOBAL);
require("./roles/cmd_roles_551-600.js")(GLOBAL);
require("./roles/cmd_roles_601-650.js")(GLOBAL);
require("./roles/cmd_roles_651-700.js")(GLOBAL);
require("./roles/cmd_roles_701-750.js")(GLOBAL);
require("./roles/cmd_roles_751-800.js")(GLOBAL);
require("./roles/cmd_roles_801-850.js")(GLOBAL);
require("./roles/cmd_roles_851-900.js")(GLOBAL);



bot.on("ready", () =>
{
	console.log("Logged in as " + bot.user.tag + "!");
});

bot.on("messageCreate", message =>
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
});

bot.on("debug", (e) => console.log(e));

function login()
{
	bot.login(TOKEN);
}
