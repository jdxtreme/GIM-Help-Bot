module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

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

	register_role(["i_hate_all_of_you", "ihateallofyou", "except_viri", "exceptviri", "viri", "ihaoyevtoc", "2008"], "Neutral", "I Hate All Of You, Except Viri, That One's Cool", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2008");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone each night. This attack is Powerful is they have a role number greater than 1000, and Unstoppable if they have a role number greater than 1995.");

		e.addField("Attributes:", "- You win with <@650477420922535946>, Leader of the Coven specifically and she can win with you, no matter what her role is.\n- You have a permanent private chat with Viri.\n- You also win with and have a permanent private chat with 1264: Viri, 1603: Viri, and 2014: Viri, the Sweetest Shade.\n- Viri must be in the game for this role to roll, but she can't roll this role.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["rasen_of_spiralling_heavens", "rasenofspirallingheavens", "rasen", "spiralling_heavans", "spirallingheavans", "rosh", "rsh", "2009"], "Neutral", "Rasen of Spiralling Heavens", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2009");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "**Helix Drive** — Send a player spiralling each day. The next night, they will be offered a new role that the host considers fun, interesting, and/or chaotic. They may choose to convert to this role at the end of the night in addition to their night actions.\n- Choose to host a party during the day. At the beginning of the next night, you will invite three random other players to a night chat with you, and you'll offer them all role conversions. You may only host a party once each game and you can't do so until Day 3.");

		e.addField("Attributes:", "- The roles offered must be reasonably winnable with given the current game state.\n- You will know what roles you offer and whether your targets accept.\n- If your targets convert, they must rate how happy they are with their new role on a scale of 5 to 10. If they don't answer, their answer will automatically be marked as 10.");
		
		e.addField("Goal:", "Amass a total rating of 20 from the players you convert.");
	});

	register_role(["zage_omniscient_equinox", "zageomniscientequinox", "zage", "omniscient_equinox", "omniscientequinox", "zox", "2010"], "Town", "Zage, Omniscient Equinox", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2010");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Abyssal Command** — Choose up to three players each night. The first will be redirected past immunities to the second, the second to the third, and the third to the first.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- You will know what each of your targets does to the target you redirected them to.\n- Your last will will automatically be filled out with all of your actions and feedback, including in between you getting your results and you dying.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["nub_ascendant_vizier", "nubascendantvizier", "nub", "ascendant_vizier", "ascendantvizier", "nav", "2011"], "Coven", "Nub, Ascendant Vizier", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2011");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Oversee the Universe** — Learn up to two players' roles. If you have the Necronomicon, you may deal a Powerful attack to them instead.");

		e.addField("Attributes:", "- At the beginning of the game, one Town role, one Mafia role, one Coven role, one Fallen Angel role, and one Neutral Killing role are each chosen at random. You gain an ability from each of those roles. You may use each of those abilities once.\n- If, at any point, you have learned all non-Coven players' roles, the Coven wins the game and all non-Coven players lose the game.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["noodle_eclipse_orchestrator", "noodleeclipseorchestrator", "noodle", "eclipse_orchestrator", "eclipseorchestrator", "nec", "2012"], "Neutral", "Noodle, Eclipse Orchestrator", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2012");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Repurpose up to two players at night. They are permanently marked as Scions. Whenever a Scion visits someone, that player is repurposed. Whenever a Scion visits another Scion, both players die.\n**Nigh Calamity** — For each Scion, choose up to one player. They are redirected to that player through immunities.");

		e.addField("Attributes:", "- If you would die, a random Scion dies instead.\n- You know who all Scions are at all times.\n- The game cannot end while you're alive.\n- If you win, all other factions lose.");
		
		e.addField("Goal:", "See all other living players be repurposed.");
	});

	register_role(["igu_crystalline_seraph", "igucrystallineseraph", "igu", "crystalline_seraph", "crystallineseraph", "ics", "2013"], "Mafia", "Igu, Crystalline Seraph", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2013");

		e.addField("Alignment", "Unique Mafia Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Unholy Majesty** — Appear before someone in your divine glory during the day. They'll know that Igu, Crystalline Seraph appeared before them, and they'll be so stunned by your beauty that they won't be able to talk for the rest of the day. The next night, you may force them to deal a Basic attack to a player of your choice as their night action.\n- Shine bright like a diamond at someone each night. You'll learn their role and the roles of their closest living neighbours, but you won't know which is which.\n- Dazzle brilliantly at night, roleblocking every non-Mafia player in the game. You may only dazzle brilliantly once.");

		e.addField("Attributes:", "- Each time you use Unholy Majesty, you may also choose to reveal your name to your target. If you do, you will gain a use of dazzling brilliantly.\n- You may not reveal your name until Day 3, because you're uncomfortable with that.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["viri_the_sweetest_shade", "virithesweetestshade", "viri", "sweetest_shade", "sweetestshade", "vtss", "vss", "2014"], "Neutral", "Viri, the Sweetest Shade", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2014");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "**Tainted Allure** — Choose any number each night:\n> - Roleblock someone.\n> - Redirect someone to a player of your choice.\n> - Learn someone's role.\n> - Cause another player to win the game.\n> - Convert a player's goal to \"See the Town lose the game.\"");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- You may only cause three players to win the game.\n- You may only convert two players.\n- You will youKill llDec youIf Will ill youKille uKill lill lll l llDec");
		
		e.addField("Goal:", "See the Town lose the game.");
	});

	register_role(["rokk_crafter_of_storms", "rokkcrafterofstorms", "rokk", "crafter_of_storms", "crafterofstorms", "rcos", "rcs", "2015"], "Neutral", "Rokk, Crafter of Storms", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2015");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "**Tempest's Fury** — Call thunder upon a player each night, attacking and roleblocking them twice. You'll also attack and roleblock all their visitors as well as their target twice.");

		e.addField("Attributes:", "- Roleblock Immune\n- At the start of the game, three players are secretly marked as your enemies. Only you know who your enemies are.\n- Whenever you roleblock someone, you gain a charge. You may spend eight charges at the beginning of each night to be able to call thunder upon an additional player that night.\n- Piercing: If you attack one of your enemies, your attack is one level above their defense value and bypasses all effects that would prevent it. Otherwise, it's Basic.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["squidly_the_unrelenting_shallows", "squidlytheunrelentingshallows", "squidly", "unrelenting_shallows", "unrelentingshallows", "stus", "sus", "2016"], "Town", "Squidly, the Unrelenting Shallows", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2016");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player. You will grant them Basic defense for the night and all Town members who visited them will learn your identity.\n- Choose a role you have won as in a previous game. You may use an ability of that role.\n- Choose two words each night. You will learn the name of every living player who has either of those words in their role's abilities or attributes.\n**Cascade Incantation** — Choose a word at night. You will deal a Powerful attack to every other living player who has that word in their role's abilities or attributes.");

		e.addField("Attributes:", "- You may only use each of your abilities twice.\n- Once you have used three different abilities, you may no longer use the fourth.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vik_shadowed_seer", "vikshadowedseer", "vik", "shadowed_seer", "shadowedseer", "vss", "2017"], "Mafia", "Vik, Shadowed Seer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2017");

		e.addField("Alignment", "Unique Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Predict Impossibility** — Choose a player. You will protect them from anything negative that could possibly effect them tonight, no matter what.\n- Choose a player. You may cause them to receive a night message indicating that something that you could have protected them from happened to them, but you protected them from it (for example, \"You were attacked, but someone protected you!\" or \"Someone tried to roleblock you, but you were immune.\")");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- You may target yourself with Predict Impossibility, but only once.\n- You may multitask.\n- You learn all feedback messages that all other members of the Mafia receive.\n- You may talk to dead Mafia members at night.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["del_master_of_the_hidden_way", "delmasterofthehiddenway", "del", "master_of_the_hidden_way", "masterofthehiddenway", "dmothw", "dmhw", "2018"], "Neutral", "Del, Master of the Hidden Way", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2018");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Realm of Fantasy** — Manipulate reality each night, changing your goal to that of a player of your choice. That player is informed that you now win with them.\n- Manipulate fate each night, redirecting a player to another player of your choice.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- All night abilities targetting you will fail.\n- You may multitask.");
		
		e.addField("Goal:", "Your goal is set to that of a random other player in the game at the beginning of the game, although that player is not informed of this.");
	});

	register_role(["paragon_unwavering_sentinel", "paragonunwaveringsentinel", "paragon", "unwavering_sentinel", "unwaveringsentinel", "pus", "2019"], "Town", "Paragon, Unwavering Sentinel", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2019");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Immortal Aegis** — Watch over someone each night. If they die, you will revive them at the end of the night, and all negative effects on them will be removed.\n- Revive a dead player during the day. You may only use this once each game. If you do, you can't use Immortal Aegis the following night.");

		e.addField("Attributes:", "- You are immune to indirect attacks, roleblocks, and redirections (for example, a rampage at your target's house or someone transporting your target)");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["asew_the_infinite_one", "asewtheinfiniteone", "asew", "infinite_one", "infiniteone", "atio", "aio", "2020"], "Town", "Asew, the Infinite One", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2020");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "**Mystic Design** — At the start of Day 1, you will be informed of all evil factions that are in the game. Then, you may create a Town Power role, and, with host approval, you become that role.\n- Your role must contain at least one mechanic not contained by any other role, as far as you and the host can tell.\n- If the host rejects your role, you may make a new one. If they reject it twice, they have the right to rebalance either of the roles you made suitably and make that your role.\n- When you die, your full role is revealed.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["action_of_stirring_mists", "actionofstirringmists", "action", "stirring_mists", "stirringmists", "nav", "2021"], "Coven", "Action of Stirring Mists", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2021");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Deathlike Precision** — Choose a player each day. At the beginning of the next night, you will learn their role, and you may choose one of their abilities to gain a charge of.");

		e.addField("Attributes:", "- Detection Immune\n- You start with one charge of each of the following abilities:\n> - Roleblock someone.\n> - Deal a Basic attack to someone.\n> - Redirect someone to a player of your choice.\n> - Learn someone's role.\n- If you have the Necronomicon, you have infinite charges of all abilities you have ever had one or more charges of and your ability grants you infinite charges of abilities instead. Additionally, you may use up to two different abilities each night.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["smug_maestro_of_the_depths", "smugmaestroofthedepths", "smug", "maestro_of_the_depths", "maestroofthedepths", "smotd", "smd", "2022"], "Neutral", "Smug, Master of the Hidden Way", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2022");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Siren Sonata** — Redirect a player to another of your choice each night. You may use this ability while dead.\n- Choose an evil faction at night. If that faction is in the game, you will be added to its night chat, and you will only be able to win with it. You may only do this once.");

		e.addField("Attributes:", "- Detection Immune\n- If a player you redirect tries to target you on a later night, their ability will secretly fail.\n- All other players are cleaned when they die. You will learn the roles and be able to read the will of dead players.\n- You have a layer of Basic defense that can prevent one attack.");
		
		e.addField("Goal:", "See the Town lose the game, or win with the faction you sided with.");
	});

	register_role(["a_cursed_look", "acursedlook", "cursed_look", "cursedlook", "cursed", "look", "acl", "2023", "1776u"], "Unseen", "A Cursed Look", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2023\n*The truth is that the fame is where the fiction is.*\nConverted from: Crayon Kid");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cursed Look (Night): Choose two players. You will investigate them and learn information about them based on the current level of your Cursed Look. Cannot target any Unseen members. You will be told the correct names of the players you investigate and what their individual result is.");

		e.addField("Attributes:", "- Your Cursed Look starts at Level 1. Once you take a Cursed Look at four different players per level, you will unlock the next level.\n> Level 1 - Faction\n> Level 2 - Alignment\n> Level 3 - Exact role\n> Level 4 - Exact role, bypassing detection immunity, you will roleblock anyone that cannot win with you.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["back_to_first_base", "backtofirstbase", "first_base", "firstbase", "first", "base", "btfb", "2024", "1558u"], "Unseen", "Back to First Base", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2024\n*Depictions generate a sort of friction, distrorted, dynamic.*\nConverted from: Contrary To");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reduce (Night, 2 use): Choose a target. Their attack and defense values will decrease by one tier for the night. If a player's attack goes below None, it will become \"Weak\" which will cause their ability to fail. If a player's defense goes below Vulnerable, they will die from a heart attack.\n- Revert (Night, 2 uses): Choose a target. Anyone targeting them will instead perform the night ability that they performed last night. This may cause a player to target a dead player that was alive the previous night. This does not apply to Unseen members.");

		e.addField("Attributes:", "- Your abilities will fail if you target yourself.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["to_jade_me", "tojademe", "jade", "tjm", "2025", "1560u"], "Unseen", "To Jade Me", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2025\n*Got used to waking up in darkness, heart all heavy and twisted.*\nConverted from: Weariness");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Overwhelm (Night): Choose a player and two symptoms of anxiety to cause them to suffer from.");

		e.addField("Attributes:", "- The symptoms of anxiety are as follows:\n> - Night ability disabled.\n> - Vote disabled.\n> - Cannot talk or whisper during the day.\n> - Defense set to Vulnerable.\n> - All immunities removed.\n> - Delayed attacks (e.g. poison, bleeding) take effect immediately.\n- Anxiety symptoms will last for a number of day/night cycles equal to the highest number of consecutive nights they have used a night ability OR the highest number of consecutive days they have used a day ability (whichever one is greater), plus one. You learn how many nights your target's anxiety symptoms will last for.\n- Anxiety symptoms will be cured if a player is given at least Powerful defense from another player.\n- You may not cause the same anxiety symptom two nights in a row.\n- All Unseen members are immune to anxiety.\n- Roleblock and control immune.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["accent_crimson_rose", "accentcrimsonrose", "accent", "crimson_rose", "crimsonrose", "acr", "2026"], "Neutral", "Accent, Crimson Rose", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2026");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "**Thorns of Hatred** — Choose a player each night and at the beginning of the game. The last player to vote for the player you chose each day becomes Scorned. If that players has no votes at the end of the day, you may Scorn two players of your choice instead.\n- Attack up to two Scorned players each night.");

		e.addField("Attributes:", "- You will Scorn any players who visit you at night.\n- Your defense increases by a stage for every two Scorned players, including dead players.\n- You know who is Scorned at all times.");
		
		e.addField("Goal:", factions.Neutral.goalNK + " Or see all Scorned players lose the game if you die.");
	});

	register_role(["bionic_hand_of_chaos", "bionichandofchaos", "bionic", "hand_of_chaos", "handofchaos", "bhoc", "bhc", "2027"], "Neutral", "Bionic, Hand of Chaos", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2027");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Will of Madness** — Each night, choose one at random. You may use that ability:\n- Roleblock a player and yourself.\n- Redirect a player to another of your choice.\n- Redirect all players who don't visit tonight to yourself.\n- Attack a player.\n- Use the ability of any Neutral (Killing) role.\n- Choose a player. Whenever someone other than you votes for that player tomorrow, they are lynched immediately, then there's another lynch that day.\n- Choose an evil faction. You join that faction and your goal is changed to its.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything other than this attribute or an Everfrost one, the player directly beneath them in the player list (including dead players) is roleblocked as well. Consider the first player in the player list to be directly beneath the last.\n- You will attack all players who visit you at night.\n- You have a layer of Powerful defense that can prevent one attack.");
		
		e.addField("Goal:", "See the Town lose the game.");
	});

	register_role(["good_king", "goodking", "king", "gk", "2028"], "Other", "Good King", {subCat: "Support", spawnCat: GOOD}, (e) =>
	{
		e.setDescription("Post 2028");

		e.addField("Alignment", "Unique Good Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Royal Finger (Day): Your next vote will count as two, including nightfall votes.\n- Decide Fate (Day, 1 use): Immediately lynch a player, or grant a player lynch immunity for the day. The town will be notified if you did either.\n- Guards! (Night, 2 uses): Grant yourself Powerful defense against all attacks.\n- Safeguard (Night, 4 uses): Astrally grant another player Powerful defense against all attacks.");

		e.addField("Attributes:", "- Cannot be jailed by jailor-type roles. Additionally, if you are lynched, the town cannot lynch anyone the next day.\n- Conversion immune.\n- Cannot be targeted by investigative abilities, all investigative abilities used on you will fail no matter what.\n- Cannot co-exist with Evil King (2030), Neutral King (2031), and Psycho King (2032).\n- You are revealed as the King at the beginning of the game. The town will not be notified of your alignment.\n- You may choose to have a role that shows above the game's players called King, and may choose the role's color.\n- At the beginning of the game, your role is renamed to [your faction] King.\n- Q: Why is this Good Support and not Town Support? A: uhh to prevent an Evil King from spawning in a non-Town role list and being screwed over, look the host has rule 17 if they care that much");

		e.addField("CITY KING CHANGES", "- Decide Fate and Royal Finger are usable at day and night.\n- Decide Fate and Royal Finger also to both the target and a specific role (except the latter when pardoning someone)\n- Always applies when City is in the game, even if you are a different good faction's king.");

		e.addField("ARMY KING CHANGES", "- Gain a use of Decide Fate, Guards!, and Safeguard when the Marshall reveals themself.");
		
		e.addField("Goal:", "Good Faction Goal");
	});

	register_role(["tlhp_the_grey_general", "tlhpthegreygeneral", "tlhp", "grey_general", "greygeneral", "ttgg", "tgg", "2029"], "Town", "TLHP, the Grey General", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2029");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Vivid Monochrome** — Choose another player. They become Astral and gain roleblock and redirect immunity that night. If they would attack someone tonight, they first unknowingly heal that player. If an effect would indirectly attack them, that effect fails.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- Depending on the real-life season, you:\n> - Autumn: Can't be framed or cleaned.\n> - Winter: Are immune to indirect attacks.\n> - Spring: Have a Basic autovest.\n> - Summer: Have highest possible priority.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["evil_king", "evilking", "king", "ek", "2030"], "Other", "Evil King", {subCat: "Espionage", spawnCat: EVIL}, (e) =>
	{
		e.setDescription("Post 2030");

		e.addField("Alignment", "Unique REF Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Royal Finger (Day): Your next vote will count as two, including nightfall votes.\n- Decide Fate (Day, 1 use): Immediately lynch a player, or grant a player lynch immunity for the day. The town will be notified if you did either.\n- Improved Safeguard (Night, 3 uses): Astrally grant yourself or another player Powerful defense against all attacks.\n- Close Allies (Night, 3 uses): Discover a player's subalignment (Support, Killing, etc) and whether they're a member of your faction.");

		e.addField("Attributes:", "- Cannot be jailed by jailor-type roles.\n- Conversion immune.\n- Cannot be targeted by investigative abilities, all investigative abilities used on you will fail no matter what.\n- Cannot co-exist with Good King (2028), Neutral King (2031), and Psycho King (2032).\n- You are revealed as the King at the beginning of the game. The town will not be notified of your alignment.\n- You may choose to have a role that shows above the game's players called King, and may choose the role's color.\n- At the beginning of the game, your role is renamed to [your faction] King.\n- 2028's City King changes also apply to you if City is in the game.");

		e.addField("CITY KING CHANGES", "- Decide Fate and Royal Finger are usable at day and night.\n- Decide Fate and Royal Finger also to both the target and a specific role (except the latter when pardoning someone)");
		
		e.addField("Goal:", "Evil Faction Goal");
	});

	register_role(["neutral_king", "neutralking", "king", "nk", "2031"], "Neutral", "Neutral King", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2031");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Royal Finger (Day): Your next vote will count as two, including nightfall votes.\n- Decide Fate (Day, 1 use): Immediately lynch a player, or grant a player lynch immunity for the day. The town will be notified if you did either.\n- Guards! (Night, 2 uses): Grant yourself Powerful defense against all attacks.");

		e.addField("Attributes:", "- Cannot be jailed by jailor-type roles.\n- Conversion immune.\n- Cannot be targeted by investigative abilities, all investigative abilities used on you will fail no matter what.\n- Cannot co-exist with Good King (2028), Evil King (2030), and Psycho King (2032).\n- You are revealed as the King at the beginning of the game. The town will not be notified of your alignment.\n- You may choose to have a role that shows above the game's players called King, and may choose the role's color.\n- 2028's City King changes also apply to you if City is in the game.");

		e.addField("CITY KING CHANGES", "- Decide Fate and Royal Finger are usable at day and night.\n- Decide Fate and Royal Finger also to both the target and a specific role (except the latter when pardoning someone)");
		
		e.addField("Goal:", "Survive to the end of the game.");
	});

	register_role(["psycho_king", "psychoking", "psycho", "king", "pk", "2032"], "Neutral", "Psycho King", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2032");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Royal Finger (Day): Your next vote will count as two, including nightfall votes.\n- Decide Fate (Day, 1 use): Immediately lynch a player, or grant a player lynch immunity for the day. The town will be notified if you did either.\n- Fatal Guards (Night): Send your guards to astrally attack a player. If you would die from attacking someone (protective, Veteran, etc) your guard will die instead and you'll know what you would've died to.");

		e.addField("Attributes:", "- Cannot be jailed by jailor-type roles.\n- Conversion, poison, and bleed immune.\n- Cannot be targeted by investigative abilities, all investigative abilities used on you will fail no matter what.\n- Cannot co-exist with Good King (2028), Evil King (2030), and Neutral King (2031).\n- You are revealed as the King at the beginning of the game. The town will not be notified of your alignment.\n- You may choose to have a role that shows above the game's players called King, and may choose the role's color.\n- When attacking, you may choose to have the cause of death appear as any other role.\n- 2028's City King changes also apply to you if City is in the game.");

		e.addField("CITY KING CHANGES", "- Decide Fate and Royal Finger are usable at day and night.\n- Decide Fate and Royal Finger also to both the target and a specific role (except the latter when pardoning someone)");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["rasen_of_spiralling_heavens", "rasenofspirallingheavens", "rasen", "spiralling_heavans", "spirallingheavans", "rosh", "rsh", "2033"], "Neutral", "Rasen of Spiralling Heavens", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2033");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "**Spiralling Hell** — Whenever it turns to night, select another player and create a role based off of their current role. This role **has to be** stronger than the one they previously had, but it must take inspiration from the original role (aim for at least around 60%). After doing that, sit back and relax as they're converted into the new role at the beginning of the next day. You will also learn their role, since it'd be pretty damned hard to upgrade a role if you don't know what the hell it is.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- You're the host. You just ain't able to die.");
		
		e.addField("Goal:", "Spiral everyone into hell. To make sure this win condition ain't gonna take 'em 50 years, you only gotta focus on whoever's alive at the time.\nNote: It is also not required that you ugprade your own role.");
	});

	register_role(["noelle", "2034"], "Town", "Noelle", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2034");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal someone, Giving them Basic defense.\n- Freeze someone, attacking them, if they have Roleblock immunity this will fail.");

		e.addField("Attributes:", "- You can only target yourself on N1.\n- Your Heal ability gets upgraded after repeated uses:\n• 2 uses - Upgraded to Powerful defense\n• 3 uses - Now gives Roleblock and Redirect immunity.\n- Your Freeze ability also gets upgraded after repeated uses:\n• 2 uses - Upgraded to Powerful attack\n• 3 uses - If your target dies their action will fail, now Ignores Roleblock immunity.\n- Conversion Immunity.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["nik_of_golden_sacrilege", "nikofgoldensacrilege", "nik", "golden_sacrilege", "goldensacrilege", "nogs", "ngs", "2035"], "Neutral", "Nik of Golden Sacrilege", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2035");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "\"Hellbent\"", true);

		e.addField("Abilities:", "- Roleblock a player each night.\n- Attack a player and roleblock a player each night. You may only use this ability if you've taken 1 or more damage.\n**Usurp the Skies** — Roleblock all players who would visit you tonight and all players you've roleblocked in the past with your first ability, then attack a player. You may only use this ability if you've taken 3 or more damage.");

		e.addField("Attributes:", "- Roleblock immune\n- Hellbent: You can't die at night. Whenever you're visited at night, you take 1 damage. Once you take 5 damage, you die.\n- Whenever you take damage, you'll know whose visit caused you to take that damage and get a generic description of what they did (e.g. investigate, attack, protect, etc.)");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["closing_up_fast", "closingupfast", "closing", "cuf", "2036", "1582u"], "Unseen", "Closing Up Fast", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2036\n*Got used to waking up in darkness, heart all heavy and twisted.*\nConverted from: In My Future");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Impose (Night): Choose two players and a night in the future. The first player's night ability will be performed on the second player on the night that you choose. This ability cannot be stopped for any reason, including roleblocking, ability prevention, or death. If your target has multiple night abilities, the main ability (as determined by the host) will be used.\n- Superimpose (Night, 2 use): Choose a player and a night in the future. You may choose whether they will be redirected to you on that night or have one fo their abilities removed for the rest of the game on that night. You must choose a different effect between both uses of this ability.");

		e.addField("Attributes:", "- Once per game, you may choose to learn the role of the first player and may control which action will be used if their role has multiple abilities when using Impose.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["judge_of_pacifism_and_retribution", "judgeofpacifismandretribution", "judge", "pacifism", "retribution", "jopar", "jpr", "2037"], "Neutral", "Nik of Golden Sacrilege", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2037");

		e.addField("Alignment", "Unique \"True Neutral\" (Other)", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "\"Hellbent\"", true);

		e.addField("Abilities:", "- Just attack a player tonight. They won't know they died until it's too late. This ability will **fail** if the target hasn't voted for another player. You're like Robin Hood; you only kill those who've threatened the lives of others, similar to how Robin Hood only steals from the rich and gives to the poor. As such, if you visit someone who ain't ever voted before, you'll just heal 'em up like a Doctor.\n- You'll do worse than Robin Hood if the target's managed to kill someone in the past. They're dead, no questions asked, and they'll know they died. You'll upgrade your attack to a \"**Modkill**\" if this is the case. In this case, you're more like Batman.");

		e.addField("Attributes:", "- Roleblock immune\n- Hellbent: You can't die at night. Whenever you're visited at night, you take 1 damage. Once you take 8 damage, you die.\n- Anyone who tries to do something **suspicious** at night, such as a murder, poison or framing, will be told that the Judge of Pacifism and Retribution is watching 'em. The role wouldn't be balanced unless the perps knew they were in danger, after all.");
		
		e.addField("Goal:", "Depends. If the town lynches more than three people, you have to eliminate them. Less, and you'll have to eliminate evil factions like the Coven, Mafia or Fallen Angels.");
	});

	register_role(["while_healing_it", "whilehealingit", "healing", "whi", "2038", "1489u"], "Unseen", "While Healing It", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2038\n*Trick my mind into thinking the pain is actually addictive*\nConverted from: To Wander");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal (Night): Choose a player. You will grant them Invincible defense for the night and remove any negative effects from them.\n- Guard (Night): Choose a player. You will grant them Basic defense and deal a Powerful attack to all of their attackers for the night.");

		e.addField("Attributes:", "- Your visits are Astral.\n- You may not target the same player more than once. If you were converted from To Wander, the list of players you have previously targeted is wiped. Additionally, if you targeted a player who is converted to the Unseen after you have converted them, you may target them again.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["sk", "sk_with_basic_attack", "sk_basic", "skwithbasicattack", "skbasic", "2039"], "Neutral", "SK with basic attack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2039");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["all_it_took_was", "allittookwas", "aitw", "2040", "1563u"], "Unseen", "All It Took Was", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2040\n*The foreign phrases and stories of strangers from far away.*\nConverted from: Clearly Fearing");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Decide (Day): You cannot use this ability normally. Instead, you may send the \"=role\" command during the day and claim to be that role. You may then declare an ability to use and a target during the remainder of the day. You will perform the ability of the role that you received on your declared target the following night.\n- Insist (Day, 1 use): During the day, you may threaten to explicitly kill someone. This will override the Assassin's target for the night and will upgrade the Assassin's attack to Unstoppable.");

		e.addField("Attributes:", "- You may not use Decide to use a killing ability or any Unseen Head roles. You may use leader-type roles from other factions, but you may only use a leader-type role once.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["jd_tides_of_invention", "jdtidesofinvention", "jd", "tides_of_invention", "tidesofinvention", "jtot", "jtt", "jdtot", "jdtt", "2041"], "Mafia", "Jd, Titdes of Invention", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2041");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to whirl at night. Each of their night messages will be replaced with a night message from another role chosen at random.\n**Cascade of Imagination** — Scramble all non-Mafia players' night messages at random. Then, make all of those night messages true. You may only use this ability once each game and you can't use it until Night 3.");

		e.addField("Attributes:", "- You have an impenetrable forcefield that prevents the first two attacks that would be dealt to you.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["scp-079", "scp_079", "scp079", "2042"], "SCP", "SCP-079", {subCat: "Euclid"}, (e) =>
	{
		e.setDescription("Post 2042\n*It is not known when SCP-079 gained sentience, but it is known that the software has evolved to a point that its hardware should not be able to handle it, even in the realm of fantasy. SCP-079 realized this and, in 1988, attempted to transfer itself through a land-line modem connection into the Cray supercomputer located at ██████████.*");

		e.addField("Alignment", "SCP Euclid", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible (None)", true);

		e.addField("Abilities:", "- Redirect one player\n- Roleblock one player");

		e.addField("Attributes:", "- Lynchproof\n- When SCP spawns, everyone will learn their name and face, however, SCP-079 may not be killed UNLESS they are the last SCP left standing, in which case, a day where nobody may vote will occur, and at the end of the day, SCP-079 will be killed. (You may only vote for SCP-079 should this occur.)\n- SCP-079 may not perform the factional kill.\n- SCP-079 may not spawn alone.");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["scp-1471-a", "scp_1471_a", "scp1471a", "2043"], "SCP", "SCP-1471-A", {subCat: "Euclid"}, (e) =>
	{
		e.setDescription("Post 2043\n*During the first 24 hours following the installation of SCP-1471, the mobile device will receive images taken at locations commonly frequented by the individual. After 48 hours, the mobile device will receive images taken at locations that were recently visited by the individual.*");

		e.addField("Alignment", "SCP Euclid", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stalk another player");

		e.addField("Attributes:", "- Stalking another player will cause nervousness, resulting in them being unable to vote the next day and RB'd the following night.\n- You cannot stalk the same player two nights in a row");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["scp-939", "scp_939", "scp939", "2044"], "SCP", "SCP939", {subCat: "Keter"}, (e) =>
	{
		e.setDescription("Post 2044\n*SCP-939's primary method of luring prey is the imitation of human speech in the voices of prior victims, though imitation of other species and active nocturnal hunts have been documented. SCP-939 vocalizations often imply significant distress; whether SCP-939 understand their vocalizations or are repeating previously heard phrases is the subject of ongoing study.*");

		e.addField("Alignment", "SCP Keter", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use the ability of a dead player");

		e.addField("Attributes:", "- You may use the ability of a dead player once per player\nYou cannot use abilities of roles that only have day actions or do not visit.\nInvestigative results are shared with the other SCPs.");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["get_pwned_zage", "getpwnedzage", "pwned", "zage", "gpz", "2045"], "Neutral", "Get Pwned Zage", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2045");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- When this role is rolled, the entire game is converted to a Throne of Lies match.\n- The Good faction is converted to Blue Dragon and the Evil faction will become one of Unseen or Cult (any other Evil factions are removed).\n- The player in slot 1 will be rerolled into either Good King (2028 - faction is Blue Dragon), Evil King (2030 - will be the same faction as the Evil faction), or Neutral King (2031). The King's subalignment will be Special as opposed to whatever's listed in the role card.");

		e.addField("Attributes (cont.):", "- For the Blue Dragon, all players who spawned as the Good faction will be rerolled into a Blue Dragon role (the alignments in the role cards should be treated as Blue Dragon as opposed to Town). One leader-type role is rerolled into Prince (1801 - gains conversion immunity) and any other ones are rerolled into a random Blue Dragon role that isn't King or Prince. Investigative roles will be rerolled into either Maid (1796), Observer (1799), Princess (1802), Paladin (2047), or Sheriff (2046). At least one Paladin or Sheriff must spawn depending on the Evil faction. Any Support roles will be rerolled into either Butler (1792), Court Wizard (2048), Drunk (1793), Mystic (1797), or Noble (1798 - is now Blue Dragon Support). Killing roles will be rerolled into either Hunter (1794) or Knight (1795). Protective roles will be rerolled into either Chronomancer (424) or Physician (1800)");

		e.addField("Attributes (stop.):", "- If the Evil faction rolls Unseen, spawn a Mastermind (988) and Assassin (989). If the Evil faction rolls Cult, spawn a Cult Leader (959) and Acolyte (960).\n- All Neutral Killing roles are converted into either Reaper (1787), Possessor (1788), or Sorcerer (1789). All Neutral Benign roles are converted into either Mercenary (471) or Alchemist (1791). All Neutral Evil roles are converted into either Fool (2051) or Sellsword (1790). All Neutral Chaos roles are converted into either Inquisitor (2053) or Scorned (2052).\n- If the King dies, there will be an election for a new King the following day. The first three hours of the following day will be dedicated to players choosing to nominate themselves to become the new King. The following three hours will be dedicated to a vote between the nominated players to become King. The player with the most votes becomes the new King. The new King will keep the alignment of their previous faction except for Neutral Killer roles which become Psycho King (2032).");

		e.addField("Attributes (why.):", "- Reroll this slot into a random Throne of Lies Neutral role.");
		
		e.addField("Goal:", "Have the game become Throne of Lies, and pwn Zage.");
	});

	register_role(["tol_sheriff", "tolsheriff", "sheriff", "2046"], "Town", "ToL Sheriff", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2046");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scout (Day): You will be alerted if the Unseen attempt to visit target player. The scout will stay on the player until you command them to watch someone else.\n- Expert Investigation (Night): Determine if a player is a member of the Unseen faction. Can't target King.\n- Surveillance (Night, 3 uses): If target player is a member of the Unseen faction, you will discover their class. Can't target King.");

		e.addField("Attributes:", "- Can only spawn if the Evil faction is Unseen.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_paladin", "tolpaladin", "paladin", "2047"], "Town", "ToL Paladin", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2047");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Smite (Night, 2 uses): If the Cult tries to convert you or your target, you will kill the Cult Leader. Not usable until Night 3. Unhealable.\n- Test Faith (Night): Determine if target player is member of the Cult faction.");

		e.addField("Attributes:", "- Can only spawn if the Evil faction is Cult.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_court_wizard", "tolcourtwizard", "court_wizard", "courtwizard", "2048"], "Town", "ToL Court Wizard", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2048");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Clear Mind (Day, 3 uses): Focusing your thoughts, make a player immune to conversion tonight.\n- Icy Veins (Day, 2 uses): Intensify will render your target death immune, in addition to its normal effects tonight.\n- Intensify (Night): Fortify runes on target player, allowing them to bypass both occupation and redirection tonight. Your target will know they were intensified if it helped them. Can't target the King. Ability can be enhanced (see day abilities)\n- Tornado (Night, 3 uses): Target 2 players. Redirect all players targeting either of your targets to the other. You will be immune to any occupation or redirection that was swapped to yourself. Target A becomes target B / or the other way. Redirection conflicts may fail. Cannot target the King.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tol_sage", "tolsage", "sage", "2049", "2048u"], "Unseen", "ToL Sage", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2049\nConverted from: ToL Court Wizard");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tornado (Night): Target 2 players. Redirect all players targeting either of your targets to the other. You will be immune to any occupation or redirection that was swapped to yourself. Target A becomes target B / or the other way. Redirection conflicts may fail. Cannot target the King.\n- Wall of Fire (Night, 2 uses): Occupy everyone targeting your target, except the Assassin.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tol_marshal", "tolmarshal", "marshal", "tol_marshall", "tolmarshall", "marshall", "2050", "2046u"], "Unseen", "ToL Marshall", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2050\nConverted from: ToL Sheriff");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Expose (Day, 3 uses): Reveal who the Prince imprisons tonight to your faction.\n- Probe (Night): Determine a player’s class, if they are part of the Blue Dragon. Can't target King.\n- Snoop (Night, 2 uses): Examine a player's logbook.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});
};
