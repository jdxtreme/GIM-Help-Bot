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

function decToBits(bits, num)
{
	for(let i = 9; i >= 0; i--)
	{
		let n = Math.pow(2, i);
		if(num >= n)
		{
			num -= n;
			bits[9-i] = 1;
		}
		else
			bits[9-i] = 0;
	}
}

const ABILITIES = [
	"deal a Basic attack to them",
	"learn their role",
	"grant them death immunity for the phase",
	"prevent them from taking game actions for the phase",
	"nullify their attributes for the phase",
	"fail all game actions targetting them",
	"reroll their role to one from the same faction",
	"remove them from the next day phase"
];

const ATTRIBUTES_1 = [
	"your target will learn that they were targetted by an Android",
	"you will not be able to use it ability on that target again",
	"your defense is lowered by a tier the next night if your target isn't a member of the Town",
	"a random non-Android will learn five names, at least one of which is an Android",
	"a random non-Anrdoid will gain a one-use Basic attack",
	"the next Android ability that resolves will fail",
	"you will be dealt a Basic attack in seven phases",
	"a random Android's abilites and attributes are revealed to the Town the next day phase"
];

const ATTRIBUTES_2 = [
	"You are immune to effects that would interfere with your abilities",
	"You cannot be killed by Powerful attacks",
	"It takes two more votes to lynch you",
	"You may use your ability once while dead",
	"You will appear as [a random Town role] to all investigative effects",
	"You can talk to the dead at night",
	"You can hear all whispers",
	"You know all Neutral roles in the game"
];

module.exports = (g) =>
{
	const {UTILS, register_role, factions} = g;

	register_role(["not_tos_pirate", "nottospirate", "pirate", "ntp", "3000"], "Neutral", "Not ToS Pirate", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3000");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Shoot someone with your pistol. Unstoppable attack, but blocked by all temporary protections, including Basic defense ones.\n- Pierce someone with your Rapier, dealing a Powerful attack and bypassing temporary defense values\n- Slash someone with your Scimitar, dealing a Basic attack.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

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

			decToBits(bits, num - 10001);
		}
		else
			decToBits(bits, UTILS.randInt(1024));

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

		e.addField("Abilities:", "- Hack a player each " + (bits[0] === 1 ? "Day" : "Night") + ". You will " + ABILITIES[bitsToDec(bits, 1, 3)] + ".");

		e.addField("Attributes:", "- When you use your ability, " + ATTRIBUTES_1[bitsToDec(bits, 4, 6)] + ".\n- " + ATTRIBUTES_2[bitsToDec(bits, 7, 9)] + ".");
		
		e.addField("Goal:", factions.Android.goal);
	};

	register_role(["android", "android_role", "androidrole"], "Android", "Android", {subCat: "Support", spawnRate: 26}, g.androidRole);

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
};
