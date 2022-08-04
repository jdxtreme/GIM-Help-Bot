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
	Town: {color: "80FF00", icon: "https://cdn.discordapp.com/emojis/974880541348331541.webp", goal: "Lynch every criminal and evildoer."},
	Mafia: {color: "FF0000", icon: "https://cdn.discordapp.com/emojis/974880541298020402.webp", goal: "Kill anyone that will not submit to the Mafia."},
	Coven: {color: "BF5FFF", icon: "https://cdn.discordapp.com/emojis/974880541180575784.webp", goal: "Kill all who would oppose the Coven."},
	Rock: {color: "404040", icon: "https://cdn.discordapp.com/emojis/975690756390010891.webp", goal: "Kill anyone that may oppose the Rocks."},
	Plant: {color: "008000", icon: "https://cdn.discordapp.com/emojis/977636071884087326.webp", goal: "Kill anyone who may oppose the Plants."},
	Underworld: {color: "C51C00", icon: "https://cdn.discordapp.com/emojis/987959165341294592.webp", goal: "Kill all who oppose the Underworld sect."},
	Hallow: {color: "FFC272", icon: "https://cdn.discordapp.com/emojis/993413133597147247.webp", goal: "Kill all who object to the Hallow's will."},
	Stalker: {color: "000000", icon: "https://cdn.discordapp.com/emojis/988001997477269535.webp", goal: "Kill all who object to the presence of the Stalkers."},
	Were: {color: "804000", icon: "https://cdn.discordapp.com/emojis/974886993517490256.webp", goal: "Kill all non-lycanthropes."},
	Vampire: {color: "7B8968", icon: "https://cdn.discordapp.com/emojis/975231005713645618.webp", goal: "Convert or kill everyone who would oppose you."},
	Everfrost: {color: "00FFFF", icon: "https://cdn.discordapp.com/emojis/977636071833759785.webp", goal: "Eliminate all who don't submit to the endless winter."},
	Umbrae: {color: "498080", icon: "https://cdn.discordapp.com/emojis/979822258543550484.webp", goal: "Kill all who would oppose the Umbrae."},
	PaleMoon: {color: "400080", icon: "https://cdn.discordapp.com/emojis/975853561722322944.webp", goal: "Kill anybody who would oppose the Pale Moon."},
	Sith: {color: "800000", icon: "https://cdn.discordapp.com/emojis/974882271783968839.webp", goal: "Eliminate those that do not submit to the Dark Side/Live to see the town lose."},
	Insurgency: {color: "B00B69", icon: "https://cdn.discordapp.com/emojis/993409239764717569.webp", goal: "Eliminate all who oppose the Insurgency."},
	Loyalist: {color: "93C47D", icon: "https://cdn.discordapp.com/emojis/996214205982187681.webp", goal: "Keep the Governor alive the entire game and eradicate those who will not submit to the Governor's rule."},
	SCP: {color: "AAAAAA", icon: "https://cdn.discordapp.com/emojis/976658193323282462.webp", goal: "Kill everyone who is not on the SCP team."},
	Thundercry: {color: "FFFF00", icon: "https://cdn.discordapp.com/emojis/996214265012813944.webp", goal: "Eliminate all who stand against the Thundercry."},
	Crew: {color: "EDC240", icon: "https://cdn.discordapp.com/emojis/980989425137901588.webp", goal: "Kill all main factions. (The Crew can win with all Neutrals.)"},
	Pokemon: {color: "BB2F2F", icon: "https://cdn.discordapp.com/emojis/978766215155707924.webp", goal: "Kill anyone that opposes the Pokemon."},
	Fox: {color: "D67D4D", icon: "https://cdn.discordapp.com/emojis/999505172503994450.webp", goal: "Kill anyone that opposes the Foxes."},
	Cult: {color: "243A5F", icon: "https://cdn.discordapp.com/emojis/981974951756185680.webp", goal: "Eliminate the Town and all other rival factions."},
	Horsemen: {color: "6936DB", icon: "https://cdn.discordapp.com/emojis/998691858207228026.webp", goal: "Kill every other player, including the other Horsemen. / Protect the Harbringer and eliminate all who would oppose the Horsemen. (when recruited)"},
	Biohazard: {color: "1FCF1F", icon: "https://cdn.discordapp.com/emojis/677256057940082691.webp", goal: "Poison all who are not immune to your chemicals."},
	Unseen: {color: "620035", icon: "https://cdn.discordapp.com/emojis/982379114335989831.webp", goal: "Eliminate those you wish to not convert, or those who will not join you."},
	City: {color: "15C59E", icon: "https://cdn.discordapp.com/emojis/985026316506103878.webp", goal: "Protect the city from those that wish to do harm to it."},
	FallenAngel: {color: "FFFFFF", icon: "https://cdn.discordapp.com/emojis/994857702671007854.webp", goal: "Live to crush all who would oppose the Fallen Angels."},
	Agent: {color: "7F5252", icon: "https://cdn.discordapp.com/emojis/999505200236736562.webp", goal: "Eliminate everyone who cannot be subverted by the Agents."},
	Random: {color: "random", icon: "https://cdn.discordapp.com/emojis/994284946225115176.webp", goal: "Kill all who would oppose the Randoms."},
	Last: {color: "376f4E", goal: "See the end brought about, and your enemies erased.", goal: "See the end brought about, and your enemies erased."},
	Spirit: {color: "CEFDFC", icon: "https://cdn.discordapp.com/emojis/1003046177698234388.webp", goal: "Eradicate the living who you seek revenge of. / Eradicate the living who you seek revenge of whilst keeping yourself in your undead form. (Night 7+)"},
	Mathematic: {color: "E8EAEC", icon: "https://cdn.discordapp.com/emojis/1003046176888737864.webp", goal: "Erase all who don’t believe in the power of numbers"},
	Sentry: {color: "4CB9D4", goal: "Rid the town of any dissidents to the Sentries."},
	Toppat: {color: "B01C12", icon: "https://cdn.discordapp.com/emojis/1002935333723328572.webp", goal: "Destroy all who refuse to submit to the Toppats."},
	Koopa: {color: "4D8A45", icon: "https://cdn.discordapp.com/emojis/1003311828283162725.webp", goal: "Kill all who would oppose Lord Bowser"},
	Neutral: {color: "808080", icon: "https://cdn.discordapp.com/emojis/980943261587865650.webp", goalNK: "Kill all who would oppose you.", goalNG: "Eliminate all other residents who have yet to fulfill their purpose."}
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
				+ "\n\nReact:\n➡️ - Next Page" + (menus[sent.id].list.length > 2 ? "\n⏩ - Last Page" : "") + "\n❌ - Close Menu");
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
			conflicts[name][i-1] = {com: newname, title: cmd.title, cat: cmd.cat, subCat: cmd.meta.subCat};
		}
		else
		{
			commands[n1] = commands[name];
			commands[n2] = cmd;
			conflicts[name] = [{com: n1, title: commands[name].title, cat: commands[name].cat, subCat: commands[name].meta.subCat}, {com: n2, title: cmd.title, cat: cmd.cat, subCat: cmd.meta.subCat}]
			categories["Conflict"] = true;

			commands[name] =
			{
				id: "c" + c,
				cat: "Conflict",
				title: PRE + name + " Conflict",
				desc: "This command exists because of a conflict between two role names or numbers. Use it to learn how to specify which individual role you want to see.",
				param: "",
				meta: {},
				func: (chn) =>
				{
					let txt = "Command '" + PRE + name + "' refers to multiple roles. Did you mean:\n";

					for(let c in conflicts[name])
					{
						let con = conflicts[name][c];
						txt = txt + "\n" + PRE + con.com + " - " + con.title + " (" + con.cat + (con.subCat && (" " + con.subCat) || "") + ")";
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
						msg(chn, "-ERROR: Command " + PRE + (typeof name === "string" ? name : name[0]) + " contains a Field which is longer than 1024 characters!");
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
	factions,
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

for(let i = 50; i <= 1500; i+=50)
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

		case "1003685028837994578":
			egg = "What are you talking about?";
			break;
	}

	if(egg !== "null") msg(message.channel, egg, true);
	console.log(egg);
});

function removeReacts(message)
{
	message.reactions.removeAll().catch((error) => {
		console.log(error.message + "\n\n" + error.stack);
		msg(message.channel, "-ERROR: " + error.message + "\n\n" + error.stack);
	});
}

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
			removeReacts(message);
			delete menus[message.id];
		}

		if(edit)
		{
			let etext = menu.list[menu.page-1] + "\n\nPage " + menu.page + " of " + menu.list.length + "\n\nReact:";
			removeReacts(message);

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
bot.on("error", (error) => console.log(error.message + "\n\n" + error.stack));
bot.on("shardError", (error) => console.log(error.message + "\n\n" + error.stack));

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
			removeReacts(message);
			delete menus[mid];
		}
	}
}, 1000)
