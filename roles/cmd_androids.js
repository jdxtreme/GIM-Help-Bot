console.log("Z".charCodeAt(0))

function rbit()
{
	return Math.random() >= 0.5 ? 1 : 0;
}

function bitsToDec(bits, start, end)
{
	let dec = 0;
	let bit = 0;

	for(let i = start; i < end; i++)
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
	const {register_role, factions} = g;

	register_role(["android"], "Android", "Android", {subCat: "Support"}, (e) =>
	{
		let bits = [];

		for(let i = 0; i < 10; i++)
			bits[i] = rbit();

		let basename = bits[0] === 1 ? "ANDROI" : "NDROID";

		let cyclename = cycle(basename.substring(0, 1), bitsToDec(bits, 1, 2))
						+ cycle(basename.substring(1, 2), bitsToDec(bits, 2, 3))
						+ cycle(basename.substring(2, 3), bitsToDec(bits, 4, 5))
						+ cycle(basename.substring(3, 4), bitsToDec(bits, 5, 6))
						+ cycle(basename.substring(4, 5), bitsToDec(bits, 7, 8))
						+ cycle(basename.substring(5, 6), bitsToDec(bits, 8, 9));


		e.author.name = cyclename;
		e.setDescription("Post " + (10001 + bitsToDec(bits, 0, 9)));

		e.addField("Alignment", "Android Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hack a player each " + (bits[0] === 1 ? "Day" : "Night") + ". You will " + ABILITIES[bitsToDec(bits, 1, 3)] + ".");

		e.addField("Attributes:", "- When you use your ability, " + ATTRIBUTES_1[bitsToDec(bits, 4, 6)] + ".\n- " + ATTRIBUTES_2[bitsToDec(bits, 7, 9)] + ".");
		
		e.addField("Goal:", factions.Android.goal);
	});
};
