module.exports = (g) =>
{
	const {register_role, factions, commands, MessageEmbed} = g;

	register_role(["sk_traitor", "sktraitor", "skt", "sk", "1551"], "Town", "SK Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1551");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of the role you get.");

		e.addField("Attributes:", "- You will be given a random SK role. That is your role, but you win with the Town.\n- You will not gain permanent defense, even if your role grants that.\n- You will not gain access to the factional chat, nor will you gain the attribute that allows you to kill roleblockers. You will still be roleblock immune.\n- Yes, this can also be referred to as \"sk\" because we need more than 26 sks to appear with the command =sk.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ice_cream_truck_guy", "icecreamtruckguy", "ice_cream", "icecream", "ictg", "1552"], "Town", "Ice Cream Truck Guy", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1552");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player at night.\n- Freeze a player at night, doubling the length that they're being roleblocked if they're being roleblocked.\n**Really Cold Ice Cream** — Roleblock a player, then coldsnap. *(Coldsnapping causes all roleblocked players to be dealt an Astral Basic attack immediately.)* You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything except this attribute, they're roleblocked for an additional night afterwards as well.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["android_traitor", "androidtraitor", "at", "1553"], "Town", "Android Traitor", {subCat: "Support"}, (e, chn, message, args) =>
	{
		e.setDescription("Post 1553");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of the role you get.");

		e.addField("Attributes:", "- You will be given a randomly generated Android role. That is your role, but you win with the Town.\n- You are 30x more likely to get the Android role number 10074, which gives you:\n> The role name NERPIE\n> The ability to \"Hack a player each Night. You will learn their role.\" and the attributes \"When you use your ability, you will not be able to use it on that target again,\" and \"You cannot be killed by Powerful attacks.\"\n- You will not gain access to the factional chat, you will also not get access to the factional kill.\nTo roll with the modified chance, use this command and add a first parameter. It can be anything. `=androidtraitor a` is an easy-to-type example.");
		
		e.addField("Goal:", factions.Town.goal);

		if(args[0])
		{
			let rng = 10001 + Math.floor(Math.random() * 1053);

			if(rng > 11024)
				rng = 10074;

			let android = new MessageEmbed();
			commands.android_role.func(chn, message, android, [rng.toString()], true);
			chn.send({embeds:[e, android]});
			return true;
		}
	});

	register_role(["sk", "sk_28_stab_wounds", "sk28stabwounds", "1554"], "Neutral", "SK but it deals 28 stab wounds", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1554");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic x28", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every night visit another player. You may deal 28 basic attacks to them and all their visitors, and all your visitors that night.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["in_honour_of_nerpie", "inhonourofnerpie", "nerpie", "ihon", "1555"], "Neutral", "In Honour of NERPIE", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1555");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hack a player each Night. You will grant them death immunity for the phase.");

		e.addField("Attributes:", "- When you use your ability, your defense is lowered by a tier the next night if your target isn't a member of the Town.\n- It takes two more votes to lynch you.\n- You are an Android at heart, and your first attribute doesn't apply if you use your ability on an Android. Additionally, granting death immunity lasts two phases instead of one when used on an Android.\n- Cannot self-target.");
		
		e.addField("Goal:", "Survive until the end of the game. If Androids are in the game, you must ensure they win instead, even if you die in the process.");
	});

	register_role(["archmage_of_thunder", "archmageofthunder", "archmage", "thunder", "aot", "1556"], "Coven", "Archmage of Thunder", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1556");

		e.addField("Alignment", "Coven Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Electrocute 2 people at night.\n- With the Necronomicon, strike thunder on a player's house, killing them and electrocuting all visitors. 2 uses.");

		e.addField("Attributes:", "- Electrocutions are permanent unless removed by something that removes negative effects.\n- If two electrocuted players visit the same target, or one visits the other, they both get indirectly attacked.\n- No mistakes were made in this role.");
		
		e.addField("Goal:", factions.Coven.goal);
	});
};
