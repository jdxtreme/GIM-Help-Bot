function bitsToDec(bits, start, end)
{
	let dec = 0;
	let bit = 0;

	for(let i = end; i >= start; i--)
	{
		dec += Math.pow(2, bit) * (bits[i] ? bits[i] : 0);
		bit++;
	}

	return dec;
}

function cycle(str, n)
{
	let newstr = "";

	Array.from(str).forEach(function(c) {
		let byte = c.charCodeAt(0) + n;

		if(byte > 90)
			byte -= 26;

		newstr = newstr + String.fromCharCode(byte);
	});

	return newstr;
}

function decToBits(bits, num, base)
{
	let b = base-1;
	for(let i = b; i >= 0; i--)
	{
		let n = Math.pow(2, i);
		if(num >= n)
		{
			num -= n;
			bits[b-i] = 1;
		}
		else
			bits[b-i] = 0;
	}
}

var BASE64 = ["_", "-"];
for(let i = 0; i <= 9; i++) BASE64[BASE64.length] = i;
for(let i = 65; i <= 90; i++) BASE64[BASE64.length] = String.fromCharCode(i);
for(let i = 97; i <= 122; i++) BASE64[BASE64.length] = String.fromCharCode(i);

const AND_ABILITIES = [
	"deal a Basic attack to them",
	"learn their role",
	"grant them death immunity for the phase",
	"prevent them from taking game actions for the phase",
	"nullify their attributes for the phase",
	"fail all game actions targetting them",
	"reroll their role to one from the same faction",
	"remove them from the next day phase"
];

const AND_ATTRIBUTES_1 = [
	"your target will learn that they were targetted by an Android",
	"you will not be able to use it ability on that target again",
	"your defense is lowered by a tier the next night if your target isn't a member of the Town",
	"a random non-Android will learn five names, at least one of which is an Android",
	"a random non-Anrdoid will gain a one-use Basic attack",
	"the next Android ability that resolves will fail",
	"you will be dealt a Basic attack in seven phases",
	"a random Android's abilites and attributes are revealed to the Town the next day phase"
];

const AND_ATTRIBUTES_2 = [
	"You are immune to effects that would interfere with your abilities",
	"You cannot be killed by Powerful attacks",
	"It takes two more votes to lynch you",
	"You may use your ability once while dead",
	"You will appear as [a random Town role] to all investigative effects",
	"You can talk to the dead at night",
	"You can hear all whispers",
	"You know all Neutral roles in the game"
];

const MI_ABILITIES_1 = [
	"a player",
	"two players",
	"two different players",
	"up to 3 players",
	"any amount of players",
	"both of a player's neighbors",
	"a player you have not targeted",
	"a random player (you know who your target is)"
];

const MI_ABILITIES_2 = [
	"perform a Sheriff (948) check on them",
	"perform a Sheriff (20) check on them",
	"perform an Investigator (35) check on them",
	"learn their role",
	"perform an Investicreator (6) check on them",
	"perform an Investiletter (37) check on them",
	"bug (62) them",
	"learn their subalignment (not faction)"
];

const MI_ATTRIBUTES_1 = [
	"your visitors",
	"your target's visitors",
	"your target's target",
	"a random Mainframe variant that exists",
	"a random evil role that exists",
	"a random Neutral that exists",
	"all roles that visited you",
	"all roles that visited your target"
];

const MI_ATTRIBUTES_2 = [
	"learn your name and role",
	"are roleblocked",
	"are redirected to themself",
	"require two extra votes to be lynched the next day"
];

const MK_ATTACK_TIER = [
	"Basic",
	"Powerful",
	"Unstoppable",
	"Overkill"
];

const MK_ABILITIES = [
	"attack a player",
	"rampage attack a player",
	"attack all your visitors",
	"attack a player's target",
	"attack a player and their target",
	"rampage attack a player and their target",
	"attack all your visitors and gain Basic defense",
	"attack all your visitors and rampage attack a player"
];

const MK_ATTRIBUTES_1 = [
	"learn all whispers your target sent",
	"learn all whispers your target received",
	"hide your target's will from everyone else",
	"hide your target's role from everyone else",
	"hide your target's role and will from everyone else",
	"randomize your target's role and will on death",
	"hide that a player died (acts like archmage of ice without win condition attribute)",
	"remove your target's goal"
];

const MK_ATTRIBUTES_2 = [
	"do nothing",
	"roleblock yourself the next night",
	"randomize your target the next night",
	"target yourself the next night"
];

const MP_ABILITIES = [
	"grant Basic defense",
	"grant Powerful defense",
	"grant Invincible defense",
	"Heal them",
	"Purge them",
	"Purge them and grant Powerful defense",
	"Purge them, grant Invincible defense, and lynch immunity for the next day",
	"increase their permanent defense by 1"
];

const MP_ATTACK_TIER = [
	"None",
	"Basic",
	"Powerful",
	"Unstoppable"
];

const MP_ATTRIBUTES = [
	"learn who visited your target",
	"learn all roles that visited your target",
	"learn who attacked your target",
	"learn your target's role",
	"give your target your name",
	"protect your target automatically tomorrow night",
	"allow your target to act twice tomorrow",
	"redirect your target to their attacker"
];

module.exports = (g) =>
{
	const {UTILS, register_role, factions, commands} = g;

	register_role(["unexpected_trio", "unexpectedtrio", "unexpected", "trio", "3333", "3u"], "Unseen", "Unexpected Trio", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3333\n*What happens when you mix random abilities from a faction where nobody knows the abilities? Let's find out!*\nConverted from: Power of Three");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hidden Power (Night): Choose a player and an Unseen alignment. You will use the ability of three random Unseen roles in that alignment on that player. Day abilities are not considered. If a role has multiple night abilities, a random one will be chosen.");

		e.addField("Attributes:", "- You may not use Unseen Head roles.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role("6969", "Other", "GIM or something, I wouldn't know, I never played it", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 6969\nThis role explicitly either immediately wins or is unable to win. I'm pretty sure either case is not allowed.");
	});

	g.androidRole = (e, chn, message, args) =>
	{
		let bits = [];

		if(args[0])
		{
			let num = parseInt(args[0], 10);

			if(!UTILS.isInt(args[0]) || num < 10001 || num > 11024)
			{
				UTILS.msg(chn, "-ERROR: The provided parameter must be a post number within 10001 and 11024.");
				return true;
			}

			decToBits(bits, num - 10001, 10);
		}
		else
			decToBits(bits, UTILS.randInt(1024), 10);

		let basename = bits[0] === 1 ? "ANDROI" : "NDROID";

		let cyclename = cycle(basename.substring(0, 1), bitsToDec(bits, 1, 2)) //0
						+ cycle(basename.substring(1, 2), bitsToDec(bits, 2, 3)) //1
						+ cycle(basename.substring(2, 3), bitsToDec(bits, 4, 5)) //0
						+ cycle(basename.substring(3, 4), bitsToDec(bits, 5, 6)) //1
						+ cycle(basename.substring(4, 5), bitsToDec(bits, 7, 8)) //0
						+ cycle(basename.substring(5, 6), bitsToDec(bits, 8, 9)); //1


		e.author.name = cyclename;
		e.setDescription("Post " + (10001 + bitsToDec(bits, 0, 9)));

		e.addField("Alignment", "Android Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hack a player each " + (bits[0] === 1 ? "Day" : "Night") + ". You will " + AND_ABILITIES[bitsToDec(bits, 1, 3)] + ".");

		e.addField("Attributes:", "- When you use your ability, " + AND_ATTRIBUTES_1[bitsToDec(bits, 4, 6)] + ".\n- " + AND_ATTRIBUTES_2[bitsToDec(bits, 7, 9)] + ".");
		
		e.addField("Goal:", factions.Android.goal);
	};

	register_role(["android", "android_role", "androidrole"], "Android", "Android", {subCat: "Support", spawnRate: 16}, g.androidRole);

	register_role(["le0n", "leon", "11037"], "Neutral", "LE0N", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 11037\n*11037? What's that supposed to mean?*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Kill a player at night.");

		e.addField("Attributes:", "- Whenever you kill someone, the host will give a hint towards your identity at the start of the following day.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["blackstoner", "bs", "69420"], "Neutral", "Blackstoner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 69420");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- 69: Blackmailer\n- 420: Stoner");

		e.addField("Attributes:", "- You have a layer of Basic defense that can prevent one attack.");
		
		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["progenitor_horse", "progenitorhorse", "progenitor", "horse", "ph", "100000"], "Neutral", "Progenitor Horse", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1(00,000)");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Roleblock someone each night.\n- Redirect someone each night.");

		e.addField("Attributes:", "- Roleblock, redirect, detection, and conversion immune\n- Players you roleblock will roleblock the next player that they visit, and that player will roleblock the next player that they visit, and so on.\n- Players you redirect will redirect the next player they visit (not counting the one they're redirected to) to you, and that player will redirect the next player they visit to you, and so on.");
		
		e.addField("Goal:", "Live to see no kills occur on any given night other than Night 1.");
	});
	
	register_role(["hex_saver", "hexsaver", "hs", "7033973561"], "Neutral", "Hex Saver", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 7033973561\n*”that would be very funny”*");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player at night. You may swap the placement of 2 letters in their role’s name. They will also gain the ability and attributes of the Hex Saver. Functionally, every mechanic in the game will act as though their role’s name has not been changed, except for any mechanic that would display its name. They will be notified that their role’s name has changed and that they have gained the ability and attributes.‎");

		e.addField("Attributes:", "- If you would receive an attack from a player that has been affected by the Hex Saver’s ability, that player’s attack value will be treated as None for all attacks they have performed during this phase.\n- If all remaining players alive have been affected by the Hex Saver’s ability, the game ends in the victory of all affected players.\n- You may self-target.\n- Your visits are Astral.‎");

		e.addField("Goal:", "Cause the game to end with all living players having been affected by your ability");
	});

	register_role("lorenzo", "Town", "Lorenzoromanoamedeocarloavogadrocountofquaregnaandcerreto", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 602214076000000000000000");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Study a player each night. You'll learn the Xth digit of their role's post number, where X is the number of times you've studied them.");

		e.addField("Attributes:", "- No abbreviations for this role's command are to be put in the bot. Its only aliases should be =602214076000000000000000 and =lorenzoromanoamedeocarloavogadrocountofquaregnaandcerreto.\n- Sorry Rasen, you cannot tell me what to do.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["m.i.", "mi"], "Mainframe", "M.I.", {subCat: "Investigative", spawnRate: 5}, (e, chn, message, args) =>
	{
		let bits = [];

		if(args[0])
		{
			let num = parseInt(args[0], 10);

			if(!UTILS.isInt(args[0]) || num < 1000001 || num > 1004096)
			{
				UTILS.msg(chn, "-ERROR: The provided parameter must be a post number within 1000001 and 1004096.");
				return true;
			}

			decToBits(bits, num - 1000001, 12);
		}
		else
			decToBits(bits, UTILS.randInt(4096), 12);

		e.author.name += BASE64[bitsToDec(bits, 0, 5)] + BASE64[bitsToDec(bits, 6, 11)];
		e.setDescription("Post " + (1000001 + bitsToDec(bits, 0, 11)));

		e.addField("Alignment", "Mainframe Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select " + MI_ABILITIES_1[bitsToDec(bits, 0, 2)] + ". You will " + MI_ABILITIES_2[bitsToDec(bits, 3, 5)] + ".");

		e.addField("Attributes:", "- When using your ability, you learn " + MI_ATTRIBUTES_1[bitsToDec(bits, 6, 8)] + ".\n- If your target is " + (bits[9] === 1 ? "good" : "evil") + ", they " + MI_ATTRIBUTES_2[bitsToDec(bits, 10, 11)] + ".");
		
		e.addField("Goal:", factions.Mainframe.goal);
	});

	register_role(["m.k.", "mk"], "Mainframe", "M.K.", {subCat: "Killing", spawnRate: 5}, (e, chn, message, args) =>
	{
		let bits = [];

		if(args[0])
		{
			let num = parseInt(args[0], 10);

			if(!UTILS.isInt(args[0]) || num < 1004097 || num > 1008182)
			{
				UTILS.msg(chn, "-ERROR: The provided parameter must be a post number within 1004097 and 1008182.");
				return true;
			}

			decToBits(bits, num - 1004097, 12);
		}
		else
			decToBits(bits, UTILS.randInt(4096), 12);

		e.author.name += BASE64[bitsToDec(bits, 0, 5)] + BASE64[bitsToDec(bits, 6, 11)];
		e.setDescription("Post " + (1004097 + bitsToDec(bits, 0, 11)));

		e.addField("Alignment", "Mainframe Killing", true);
		e.addField("Attack", MK_ATTACK_TIER[bitsToDec(bits, 0, 1)], true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At " + (bits[2] === 1 ? "day" : "night") + ", you may " + MK_ABILITIES[bitsToDec(bits, 3, 5)] + ".");

		e.addField("Attributes:", "- You will also " + MK_ATTRIBUTES_1[bitsToDec(bits, 6, 8)] + ".\n- If you kill " + (bits[9] === 1 ? "an ally" : "a Mainframe") + ", you will " + MK_ATTRIBUTES_2[bitsToDec(bits, 10, 11)] + ".");
		
		e.addField("Goal:", factions.Mainframe.goal);
	});

	register_role(["m.p.", "mp"], "Mainframe", "M.P.", {subCat: "Protective", spawnRate: 5}, (e, chn, message, args) =>
	{
		let bits = [];

		if(args[0])
		{
			let num = parseInt(args[0], 10);

			if(!UTILS.isInt(args[0]) || num < 1008183 || num > 1012288)
			{
				UTILS.msg(chn, "-ERROR: The provided parameter must be a post number within 1004097 and 1008182.");
				return true;
			}

			decToBits(bits, num - 1008183, 12);
		}
		else
			decToBits(bits, UTILS.randInt(4096), 12);

		e.author.name += BASE64[bitsToDec(bits, 0, 5)] + BASE64[bitsToDec(bits, 6, 11)];
		e.setDescription("Post " + (1008183 + bitsToDec(bits, 0, 11)));

		let attack = MP_ATTACK_TIER[bitsToDec(bits, 0, 1)];
		let targets = 1 + bitsToDec(bits, 2, 3);

		e.addField("Alignment", "Mainframe Protective", true);
		e.addField("Attack", attack, true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, you may select " + targets + (targets > 1 ? " people" : " person") + " (you can" + (bits[4] === 1 ? "not" : "") + " self target) to protect. You will " + MP_ABILITIES[bitsToDec(bits, 5, 7)] + ".");

		e.addField("Attributes:", "- You'll also deal " + (attack === 3 ? "an " : "a ") + attack + " attack to " + (bits[8] === 1 ? "an attacker" : "a random visitor") + ".\n- If your target is attacked, you will " + MP_ATTRIBUTES[bitsToDec(bits, 9, 11)] + ".");
		
		e.addField("Goal:", factions.Mainframe.goal);
	});

	register_role(["every_role", "everyrole"], "Everything", "Every Role", {spawnRate: 10}, (e, chn, message, args) =>
	{
		let role = false;

		if(args[0])
		{
			let cmd = commands[args[0]];

			if(cmd && cmd.isRole)
			{
				cmd.func(chn, message, e, [], true);
				role = cmd;
			}
			else
			{
				if(cmd.cat === "Conflict")
					cmd.func(chn);
				else
					UTILS.msg(chn, "-ERROR: The provided command is not that of a role!");

				return true;
			}
		}
		else
			role = g.randomRole(chn, message, e, [], true);

		if(role)
		{
			e.author.name += " (Everything Version)";
			e.setColor(factions.Everything.color);

			if(factions.Everything.icon)
				e.author.iconURL = factions.Everything.icon;
			else
				e.author.iconURL = null;

			for(let i = 0; i < e.fields.length; i++)
				if(e.fields[i].name === "Goal:")
					e.fields[i].value = factions.Everything.goal;
		}
		else
			UTILS.msg(chn, "-ERROR: No role could be rolled. This is probably a bug.");
	});
};
