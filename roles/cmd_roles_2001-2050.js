module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["dancer", "2001"], "Neutral", "Dancer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2001");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Dance, roleblocking all your visitors.\n- Perform, roleblocking all of your target's town visitors. Evils will know if they visit your performing target.\n- Participate in the Grand Finale, roleblocking all good faction players.");

		e.addField("Attributes:", "- The first time you would be lynched, you dance out of the way of the execution, living but revealing your role. You will be able to use all your abilities the night after this happens. (You can't participate in the grand finale if you already have)\n- This role can't spawn with Everfrost.\n- You will learn the role of any non-good faction member you roleblock/would roleblock.");
		
		e.addField("Goal:", "Have the good faction lose the game. (You can win while dead)");
	});

	register_role(["start_now", "startnow", "start", "now", "sn", "2003"], "Neutral", "Start Now", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2003");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Start the end of someone's life.\n- Start the night. One use.");

		e.addField("Attributes:", "- Starting the end of someone's life deals a powerful attack to them at the end of the next night.\n- Starting the night is a day ability. Starting the night ends the day and makes night start, nullifying any votes made after this action.");
		
		e.addField("Goal:", "Have the good faction lose the game. (You can win while dead)");
	});

	register_role(["rule_34", "rule34", "r34", "2004"], "Neutral", "Rule 34", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2004\n*Rasen you really should have closed this when you got the chance.*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If this rolls, the host must reroll every player into some kind of role that they would be willing to have... amorous relations with.\n- The host must announce that this role rolled, along with any and all rejected and rerolled roles that would have spawned if this didn't.\n- Finally, reroll this role into one that fits the first attribute.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["unreserved", "2006"], "Neutral", "Unreserved", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2006");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Unreserve a dead person, which revives them for some reason. One use.");

		e.addField("Attributes:", "- You unreserve all slots reserved by Reserved Part 8.");
		
		e.addField("Goal:", "Win with your unreserved player.");
	});

	register_role(["ultimate_sk", "ultimatesk", "ultimate", "sk", "usk", "2007"], "Neutral", "Ultimate SK", {subCat: "Genocidal"}, (e) =>
	{
		e.setDescription("Post 2007");

		e.addField("Alignment", "Neutral Genocidal", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use the ability of another SK.");

		e.addField("Attributes:", "- You may multitask.");

		e.addField("You have the abilities and attributes of the following roles:", "> Serial Killer (95)\n> SK (857)\n> SK with powerful attack (858)\n> SK with unstoppable attack (859)\n> SK with overkill attack (860)\n> SK but with powerful attack, and their goal is only to kill all SKs (863)\n> Amnesiac Serial Killer (1160)\n> SK with no attack (1267)\n> Slightly Less Evil SK (1326)\n> SK but it's actually an army (1441)\n> SK but it's an anarchist (1442)\n> SK with modkill attack (1515)\n> SK that bans people (1516)\n> SK with no defense (1517)\n> SK with powerful defense (1518)\n> SK with invincible defense (1519)\n> SK with overprotective defense (1520)\n> SK that can't be lynched (1521)\n> SK that can't be banned or kicked (1522)\n> The SK to end all SKs (1523)\n> Serial Killer Leader (1525)\n> Thundery Serial Killer (1526)\n> Invisible Serial Killer (1527)\n> Icy Serial Killer (1528)\n> Threatening Serial Killer (1529)\n> Beekeeper Serial Killer (1530)\n> Cereal Killer (1532)\n> SK Traitor (1551)\n> SK but it deals 28 stab wounds (1554)\n> SK with immortal defense (1568)\n> SK that lynches people (1572)");

		e.addField("You have the abilities and attributes of the following roles (cont.):", "> Comedic SK (1574)\n> Poisonous Serial Killer (1613)\n> Combo Serial Killer (1839)\n> Paper Serial Killer (1841)\n> Sleepy Serial Killer (1978)\n> Writer Serial Killer (1979)\n> Grappling Serial Killer (1980)\n> Normal Killer (1981)\n> Medium Serial Killer (1991)");
		
		e.addField("Goal:", "Kill literally everyone, like a true Serial Killer.");
	});

	register_role(["i_hate_all_of_you", "ihateallofyou", "except_viri", "exceptviri", "ihaoyevtoc", "2008"], "Neutral", "I Hate All Of You, Except Viri, That One's Cool", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2008");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone each night. This attack is Powerful is they have a role number greater than 1000, and Unstoppable if they have a role number greater than 1995.");

		e.addField("Attributes:", "- You win with @Viridescent, Leader of the Coven specifically and she can win with you, no matter what her role is.\n- You have a permanent private chat with Viri.\n- Viri must be in the game for this role to roll, but she can't roll this role.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});
};
