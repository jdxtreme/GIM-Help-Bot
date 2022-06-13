//Umbrae: https://www.blankmediagames.com/phpbb/viewtopic.php?f=27&t=120271
//Florae: https://www.blankmediagames.com/phpbb/viewtopic.php?f=27&t=119288

const {Client, Intents, MessageEmbed} = require('discord.js');
const {readFile} = require("fs");

const PRE = "=";

const bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const categories = {};
const commands = {};
const conflicts = {};
const roles = [];

const factions =
{
	Town: {color: "80FF00", icon: "https://cdn.discordapp.com/emojis/974880541348331541.webp"},
	Mafia: {color: "FF0000", icon: "https://cdn.discordapp.com/emojis/974880541298020402.webp"},
	Coven: {color: "BF5FFF", icon: "https://cdn.discordapp.com/emojis/974880541180575784.webp"},
	Rock: {color: "404040", icon: "https://cdn.discordapp.com/emojis/975690756390010891.webp"},
	Plant: {color: "008000", icon: "https://cdn.discordapp.com/emojis/977636071884087326.webp"},
	Underworld: {color: "C51C00"},
	Hallow: {color: "FFC272"},
	Stalker: {color: "000000"},
	Were: {color: "804000", icon: "https://cdn.discordapp.com/emojis/974886993517490256.webp"},
	Vampire: {color: "7B8968", icon: "https://cdn.discordapp.com/emojis/975231005713645618.webp"},
	Everfrost: {color: "00FFFF", icon: "https://cdn.discordapp.com/emojis/977636071833759785.webp"},
	Umbrae: {color: "498080", icon: "https://cdn.discordapp.com/emojis/979822258543550484.webp"},
	PaleMoon: {color: "400080", icon: "https://cdn.discordapp.com/emojis/975853561722322944.webp"},
	Sith: {color: "800000", icon: "https://cdn.discordapp.com/emojis/974882271783968839.webp"},
	Insurgency: {color: "B00B69"},
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
	Neutral: {color: "808080", icon: "https://cdn.discordapp.com/emojis/980943261587865650.webp"}
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
	txt = (txt || "").toString();

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
			e.setAuthor({name: desc, iconURL: fac.icon});
			e.setColor(fac.color || "808080");

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
};

require("./cmd_basics.js")(GLOBAL);
require("./cmd_rng.js")(GLOBAL);
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
require("./roles/cmd_roles_901-950.js")(GLOBAL);
require("./roles/cmd_roles_951-1000.js")(GLOBAL);
require("./roles/cmd_roles_1001-1050.js")(GLOBAL);



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
