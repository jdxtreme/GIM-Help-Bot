module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["deogen", "1301"], "Spirit", "Deogen", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1301");

		e.addField("Alignment", "Spirit Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Watch a player from afar.");

		e.addField("Attributes:", "- You will learn who they visit and who visits them.\n- On full moons, you may choose to watch from up close, scaring them and preventing them from visiting anyone. They will be notified of this, but not if they don't visit.");
		
		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["darth_krayt", "darthkrayt", "krayt", "a'sharad_hett", "a'sharadhett", "hett", "asharad_hett", "asharadhett", "a'sharad", "asharad", "1302"], "Sith", "Darth Krayt", {subCat: "Commanding"}, (e) =>
	{
		e.setDescription("Post 1302");

		e.addField("Alignment", "Unique Sith Commanding", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Convert another player to a random Sith role. You only convert the roles if they are any of the following:\n> Town/City\n> Neutral Benign\n> Neutral Evils/Chaos with the witch wincon of seeing Town/City lose");

		e.addField("Attributes:", "- If you are the last remaining Sith, you gain the ability to convert 2 more players in a desperate attempt until there are at least 3 Sith.\n- Can perform the factional Sith kill\n- Has private chat with the other Sith.\n- Conversion Immune");
		
		e.addField("Goal:", factions.Sith.goal);
	});

	register_role(["obake", "1303"], "Spirit", "Obake", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1303");

		e.addField("Alignment", "Spirit Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- During the day, shapeshift into any role that the host deems balanced. You gain that role's ability, and attributes that apply to the ability. You shapeshift immediately.\n- Use the abilities you have.");

		e.addField("Attributes:", "- The day after shapeshifting, you lose the ability and attributes of the previous role.\n- You may only shapeshift into a specific role once.\n- If you shapeshift into a killing role, the attack appears as that role. However, the attack value is based on the current Spirit attack value, not the role's attack value.");
		
		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["soulbonder", "1304"], "Town", "Soulbonder", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1304");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Link your soul to another player at night. Everything that happens to them on that night will happen to you, and you will receive all night messages they receive. During the next day, every day ability used on them will also be used on you. You will also receive all whispers directed to them, and all whispers they send. If they're lynched, you will be lynched as well.");

		e.addField("Attributes:", "- The player you target will not be notified.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["voidling", "1305"], "Neutral", "Voidling", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1305");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- They're removed from the game entirely, and re-added to the game at the beginning of the next night.\n- All actions that happen to them that night will fail, but won't give notifications that they failed.\n- You may send yourself into the void.\n- Cope, seethe, and mald\n- Spite Rasen\n- You cannot target the same person twice in a row. You're welcome.\n- Also, Town (Power), Any Factional (Head), and other alignments that can be interpreted as faction leads such as Loyalist (Governor) are immune to your ability. You'll be notified if you try to send one of these roles to the void.");

		e.addField("Attributes:", "- The player you target will not be notified.");
		
		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["tooru_saesen", "toorusaesen", "tooru", "saesen", "ultimate_liar", "ultimateliar", "liar", "tsul", "1306"], "Neutral", "Tooru Saesen, Ultimate Liar", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1306");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock and Control Immunity\n- Lie to someone, changing your wincon to theirs.\n- Seduce someone, they will target you for the next two nights because of how fucking sexy you are.\n- Remove your eye with your cap, traumatizing everyone that visits you, roleblocking them and blackmailing them.\n- Enter a bacin, removing you from the game for the day and night after you enter it. Everyone that visits you will also enter a bacin \n- Get fixed, changing your faction and goal to Town. This has a ~60% chance of not working.");

		e.addField("Attributes:", "- You may multitask");
		
		e.addField("Goal:", "Succesfully escape a killing game.");
	});

	register_role(["beekeeper_kami", "beekeeperkami", "kami", "1307"], "Neutral", "Beekeeper Kami", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1307");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "`+1`: You gain roleblock, redirection, and detection immunity for the night. This ability will automatically be used every night.\n`-1`: Stun a player, preventing them from using an ability the following night.\n`-2`: Investigate a player, learning their role.\n`-3`: Deal a Powerful attack to a player.");

		e.addField("Attributes:", "- You may multitask.\n**Divine Bees** — You start with 1 bee. When you use an ability, add or subtract bee according to the ability. You may not use abilities that cost more bees than you have. If you would be attacked, instead the attacker learns that your Defense was too strong and you lose bees equal to the level of the attack. (Basic: 1, Powerful: 2, Unstoppable: 3, Overkill: 4. You still die if you're lynched.)");
		
		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["ultimate_ritualist", "ultimateritualist", "ulrit", "ur", "ritualist", "1308"], "Neutral", "Ultimate Ritualist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1308");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- (Post 817) Attempt to sacrifice someone at night. If they didn't visit and they weren't visited by any other players, they'll be forced to commit suicide and the Town will be informed that it was an unnatural suicide. Your target visiting themself doesn't count for either, nor do Astral or indirect abilities. Your defense increases by a level for each player you sacrifice.\n- (Post 967) During the day, curse a player. If they die tonight, their role and last will will not be revealed to anyone except you.\n- (Post 967) At night, give your target player a false message that they were healed that night. You have 3 uses of this ability.\n- (Post 967) At night, make a Cult member appear as Town to any investigative roles. You have 2 uses of this ability.\n- (Post 1074) Sacrifice a Town member to haunt another player.");

		e.addField("Attributes:", "- You may only use one ability each night.\n- You have a layer of Basic defense that can prevent one attack.");
		
		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["inventor", "1309"], "Town", "Inventor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1309");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Invent an ability at night or use one you have already created.");

		e.addField("Attributes:", "- Whenever you invent an ability, the host gives you an ability from a random role.\n- Once per game you can choose which alignment to invent an ability from.\n- Once per game you may choose a subalignment to invent an ability from.\n- You cannot invent an ability that harms you.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["occult_alchemist", "occultalchemist", "occult", "alchemist", "oa", "1310"], "Coven", "Occult Alchemist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1310");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player and choose either their attack value, defense value or ability to place them into your soup.\n- Make a player consume your soup, and learn their role.");

		e.addField("Attributes:", "- Attack/defense values in a soup will override the taster's current values. Any player that has an attack value above none can make an attack, and attacking abilities will automatically give a player basic attack if they have none.\n- Abilities in a soup will be added onto whatever abilities the taster already has.\n- You may only use one of your abilities per night.\n- You may target yourself.\n- With the Necronomicon, you may choose to attack players when using one of your abilities, this resolves after performing your ability.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["cryptid", "1311"], "Neutral", "Cryptid", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1311");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Attributes:", "- Each night, four of the following abilities are chosen at random, and you may use up to two.");

		e.addField("Potential Abilities:", "- Randomise a player's night feedback.\n- Add a new player to the game named \"Guy\" with a random role.\n- Give a player Powerful And A Half Defense for the night.\n- Remove 25% of the words from a player's role's abilities and attributes at random.\n- Give a player a \"game x winner\" role of your choice.\n- Permanently swap two players' names.\n- Ask a player to face reveal to you. If they don't, they're dealt a Powerful attack.\n- Paripapparapappapparappa a player. (see 733)\n- Kill a player if their role has an ability that's funcionally the same as one from ToS.\n- Delay a player's ability and cause it to resolve at a random time during the next day.\n- Reorder the player list as you wish.\n- Reorder the host queue as you wish.\n- Give yourself a Basic autovest in the next GIM game if that host complies.\n- Add a player to the end of your conga line. (see 630)\n- Add a player to the end of your conga line. (see 1594)\n- Open a resignation vote for the faction of your choice.");

		e.addField("Potential Abilities (cont.):", "- Give yourself twice the number of abilities to choose from the next night.\n- Deal a None attack to a player.\n- Use an ability from a Rasen role not in the roles thread (e.g. Murdercaster Mage, Futurist)\n- Remove from then return a player to the game, resetting all statuses/etc.\n- Disable all players' \"read message history\" permission for the next day chat. \n- Make a player \"Solved 2 by 4\".\n- Make a player permanently appear as 529: WereLion to all investigative effects.\n- Make a player immune to attacks that aren't the lowest tier needed to kill them tonight.");
		
		e.addField("Goal:", "Live to see the Town lose to game.");
	});

	register_role(["summoner", "1312"], "Neutral", "Summoner", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1312");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Summon a new player at night or absorb one of your summoned players.");

		e.addField("Attributes:", "- You get to name this player.\n- This player will have a random role. You will know which role it has. You may specify twice that you want specifically a killing role to be summoned, and once you may specify any type of role to be summoned (assuming it won't break the game).\n- You control this player, and hear all whispers it receives.\n- This player can be made to talk or vote.\n- This player will not enter any factional chats, as it will simply not gain that attribute.\n- If you absorb a player you summoned, you will gain their abilities and attributes that do not harm you (if this prevents the role from working, the absorb will fail and you will waste the night).\n- You may use one ability gained from an absorbed player in addition to your normal ability.\n- If you get to a scenario where only you, people who win with you, and summoned players are alive, the game will end and any summoned player's win con that might go against this will be ignored.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["worker", "1313"], "Neutral", "Worker", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1313");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None (Variable)", true);
		e.addField("Defense", "None (Variable)", true);

		e.addField("Abilities:", "- During the day, choose to work, gaining two dollars.\n- During the night, spend the money you earned. You may spend it on food, shelter, work environment, or luxuries. You can spend as much as you want in any category as long as you have funds.\n- During the night, choose to throw food at someone, which attacks them.");

		e.addField("Buyables:", "- **Food**\n> Carrots - Cost: 1$ - Upgrade your attack to a higher tier. None -> Basic -> Powerful -> Unstoppable, which is the maximum.\n> Melons - Cost: 3$ - Upgrade the amount of people you can attack during the night. One -> Two -> Three, which is the maximum\n- **Shelter**\n> Newspapers - Cost: 2$ - Upgrade your defense to a higher tier. None -> Basic -> Powerful, which is the maximum.\n> Cardboard Box - Cost: 1$ - One time purchase. Every time you're targeted at night, roleblock one random visitor. This is processed before the visit itself.\n- **Work Environment**\n> Raise - Cost: 3$ - Increase the amount of money you earn by working. 2$ -> 3$ -> 4$ -> 5$, which is the maximum.\n- **Luxuries**\n> Lamps - Cost: 6$ - Ease your win condition. \"Be the last player standing. You cannot win until you're the last player in the game, and must specifically kill all other players.\" -> \"Live to see the Town lose the game.\" -> \"Survive until the end of the game.\", which is the maximum.");
		
		e.addField("Goal:", "Be the last player standing. You cannot win until you're the last player in the game, and must specifically kill all other players.");
	});

	register_role(["overclocked", "1314"], "Town", "Overclocked", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1314");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, plan to guard a player. Your target is announced publicly to everybody at the start of the night.\n- At night, optionally abandon your original target and choose a new target to actually guard.");

		e.addField("Attributes:", "- When guarding a player, they are granted powerful defense, and you will attack all players that visit your target.\n- You may target yourself once.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bird", "1315"], "Town", "Bird", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1315");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- In the night, perch yourself on a player's shoulder. You will learn how many times they were visited, but not who visited them. You will peck all of their visitors.\n- In the day, investigate a player to see if you've pecked them. If you have, deal a Basic attack to them, which is processed immediately. You may only use this once a day.");

		e.addField("Attributes:", "- Astral, because birds are out of this world.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["justice_seeker", "justiceseeker", "justice", "js", "1316"], "Neutral", "Justice Seeker", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1316");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check a player at night. If they would be a criminal or evildoer according to their role lore, such as Post 1252, then you will lynch them, which just attacks them.");

		e.addField("Attributes:", "- At the start of the game, the host goes through all the roles and makes a list of what is considered a criminal or evildoer. You do not know this list.\n- Your goal is literal, so you must lynch all criminals and evildoers in the game. However, you can check dead players.\n- You don't need to kill your target, you just need to attack them for it counting.");
		
		e.addField("Goal:", "Lynch all criminals and evildoers. (Not Town Goal)");
	});

	register_role(["shadomancer", "shadowmancer", "shado", "1317"], "Coven", "Shadomancer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1317");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Remove an ally's shadow tonight, making their visit astral.\n- Invoke an eternal night, skipping the next two day phases. It will still count as a new night each time. You may only use this once.");

		e.addField("Attributes:", "- With the Necromonicon, you can use your second ability again if you already used it. This time, it actually will be eternal, and it'll only end if you're killed, roleblocked, or the game ends.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["true_hero", "truehero", "1318"], "Town", "A True Hero", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1318\n*You’re gonna have to try a little harder than THAT!*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hurl a spear at someone at night (3 use).");

		e.addField("Attributes:", "- Hurling a spear at someone deals an Astral Basic attack.\n- The first time you are lethally attacked at night, you will not die but instead be fueled by determination. Your attackers will be notified that you have defense. The night after this happens, you may choose one player to deal an Unstoppable attack to gaining roleblock and redirect immunity. You will then die to the method you would have normally died to at the end of the night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["evil_snake", "evilsnake", "snake", "1319"], "Neutral", "Evil Snake", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1319");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, slither outside someone's house. They will be scared of you and walk back to their own house. In other words, they will be forced to visit themselves. They will know they were scared.\n- Bite a player. Their ability will cease to function for this night and the next two nights, but they will not be notified. You may only use this once.");

		e.addField("Attributes:", "- Slithering outside someone's house is astral, since you're keeping your distance and technically aren't coming inside.");
		
		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["good_snake", "goodsnake", "snake", "1320"], "Town", "Good Snake", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1320");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, slither outside someone's house. They will be scared of you and walk back to their own house. In other words, they will be forced to visit themselves. They will know they were scared.\n- Bite a player. Their ability will cease to function for this night and the next two nights, but they will not be notified. You may only use this once.");

		e.addField("Attributes:", "- Slithering outside someone's house is astral, since you're keeping your distance and technically aren't coming inside.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["no_more_town", "nomoretown", "nmt", "1321"], "Town", "No More Town!", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1321");

		e.addField("Alignment", "(Not) Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn the **original** role a player had at the beginning of the game (Day 1), before it was ever changed.");

		e.addField("Attributes:", "- If you exist, at the beginning of the day, select an alternative uninformed majority faction. All Town roles will become roles of that faction, but keep their alignment. If a certain alignment doesn't exist, it will be any role of that faction.\n- Current options: Florae, City, Sentries\n- Also, cope seethe and mald");
		
		e.addField("Goal:", "Florae/City/Whatever Goal");
	});

	register_role(["soul_reader", "soulreader", "reader", "1322"], "Town", "Soul Reader", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1322");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Compare two souls to discover their compatibility (3-shot)");

		e.addField("Attributes:", "- When discovering two souls' compatibility, you will see if they can win together.\n- You may not check compatibility with any role that is mod confirmed (ie Mayor), even if the mod confirmation is fake. If you are somehow controlled into doing so, you will see that the two are compatible regardless of the truth.\n- Comparing souls is vulnerable to framing effects.\n- When a player dies during the night, they may send a message consisting of up to 10 emojis (and only emojis) to you. These must be sent to you during the next day phase. You will know which player sent which message.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["detector_of_decisiveness", "detectorofdecisiveness", "detector", "decisiveness", "dod", "1323"], "Town", "Detector of Decisiveness", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1323");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Detect the decisiveness of a player at night. You will learn if their role was edited or not in <#970046125065265202>. \n- Decisively attack a player tonight. If their role was edited, it's upgraded to a Powerful attack.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["traitorous_guardian", "traitorousguardian", "tg", "1324"], "Neutral", "Traitorous Guardian", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1324");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect your target at night. They will be healed and cleansed. You may use this while dead. (2 uses)\n- Attack your target at night. You may use this while dead. (1 use)\n- Before Day 4, you may choose to switch your target during the day. You may not use this if your target already died. (1 use)");

		e.addField("Attributes:", "- You will be given a randomly chosen target without any defense. They also can't be yourself.\n- You will know who visits your target if it's the second or more time that they've visited.");
		
		e.addField("Goal:", "Ensure your target lives until Day 4, then ensure they die before the game ends.");
	});

	register_role(["crickets", "1325"], "Town", "Crickets", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1325");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select a target to chirp at. During the next day, if they have less than ten messages when the day ends, you will invade their house, learning their role.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["slightly_less_evil_sk", "slightlylessevilsk", "slesk", "sk", "1326"], "Neutral", "Slightly Less Evil SK", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1326");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target.");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Stab one-fifth of the town. (to death)");
	});

	register_role(["home", "1327"], "Neutral", "Home", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1327");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to bake a pie for during the day.\n- Bake either a butterscotch or cinnamon pie at night.");

		e.addField("Attributes:", "- A butterscotch pie will up your target's Attack value to the next tier while a cinnamon pie will up your target's Defense value to the next tier. If your target has no Attack value and you bake a butterscotch pie for them, they will be able to multitask between their normal ability and a one-shot attack at night.\n- At the start of the night after you choose to bake a pie for someone, they will be told that someone has offered to bake a pie for them and that they must choose whether they want a butterscotch or cinnamon pie. You will bake this pie for them, and they will benefit from its effects. If they do not choose a pie, you will bake the pie that ups their lower statistic. If they are the same, you will default to a butterscotch pie for minority factions and a cinnamon pie for majority factions.\n- You must predict which pie your target wants baked. If you are correct, this will contribute to your win condition.");

		e.addField("Attributes (cont.):", "- Once per game, you may choose to disregard your target's choice and bake them a butterscotch-cinnamon pie which ups both of their Attack and Defense values. This will count towards your win condition.\n- Players that you have made a pie for cannot attack you. If they try, they will be told they tried to attack a familiar friend.\n- You may not bake a pie for a particular player more than once.");
		
		e.addField("Goal:", "Predict three players' pie choices.");
	});

	register_role(["fear-induced_murderer", "fearinducedmurderer", "fear", "fim", "1328"], "Neutral", "Fear-Induced Murderer", {subCat: "Genocidal"}, (e) =>
	{
		e.setDescription("Post 1328");

		e.addField("Alignment", "Neutral Genocidal", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone at night. One use.");

		e.addField("Attributes:", "- You can use your ability up to as many uses as you have left.\n- Gain a use of your ability at the beginning of the night.\n- Gain a use of your ability for each vote you received during the day. This also applies if a vote is retracted. If someone votes for you, retracts their vote, then votes for you again, it counts twice.");
		
		e.addField("Goal:", "Eliminate all other residents who have yet to fulfill their purpose.");
	});

	register_role(["sans_but_he_has_insomnia", "sansbuthehasinsomnia", "sans_insomnia", "sansinsomnia", "sans", "sbhhi", "1329"], "Town", "Sans {But He Has Insomnia}", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1329");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player {and all their visitors} with bones and stuff. {All attacked players have a 10% chance of not dying because determination and stuff.}\n- Use your special attack, roleblocking a player {and yourself every night for the rest of the game. If your target dies at any point, you are no longer roleblocked.}\n- **Cleave** during the day. Infinite uses.");

		e.addField("Attributes:", "- You are {not} roleblock immune. {You do not have roleblock immunity after using your special attack.}");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mailman", "1330"], "Neutral", "Mailman", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1330");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each Night, choose a player (other than yourself) and learn their feedback message.\n- Each Day, submit a full list of each player and the feedback message ypu think they recieved last night.");

		e.addField("Attributes:", "- At the end of each night, you will recieve a randomly ordered list of every player's feedback message, without knowing which player each one belongs to. No effect can prevent you from seeing this list, except for you being dead.\n- If a player would recieve multiple feedback messages that night, they will be combined into a single message on your list.\n- While you live, every player will not see any feedback message that they normally would, and you won't know which message in your list is yours. Your list will be the only source of feedback.\n- At the end of each day you submit a list, you will only learn only the number of guesses that were correct.\n- Regardless of how many were correct, each player will recieve the message you assigned to them. If you instead submit no list, players will recieve nothing.");
		
		e.addField("Goal:", "Submit at least a single list where every feedback message is assigned to the correct player.");
	});

	register_role(["alien", "1331"], "Neutral", "Alien", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1331");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Abduct a player at night. Run tests on a player during the day.");

		e.addField("Attributes:", "- When you abduct someone, they will be unable to access day chat. They will instead access an alien room chat. They will get a clue everyday that points to the aliens identity.\n- Every day abducted players can guess the alien's identity. If they are right, they escape abduction.\n- You can run tests on an abducted player. You learn their role and may take one ability or attribute from them. They will keep the ability/attribute but you will also keep it.\n- After running 2 tests, you gain the ability to deal a powerful attack to a player.\n- The first night you may abduct 2 people.\n- You may multitask.");
		
		e.addField("Goal:", "Kill all who would oppose you. Players who are currently abducted do not oppose you.");
	});

	register_role(["schrodingers_role", "schrödingers_role", "schrodingersrole", "schrödingersrole", "schro", "1332"], "Neutral", "Schrödinger's Role", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1332");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- As long as you're alive, nobody knows who is dead or alive, until you make your guess at the end of the day. Everyone may vote privately, but nobody may talk. You may make a guess on people being either dead or alive");
		
		e.addField("Goal:", "Make 3 accurate predictions, at which point everyone may talk and gameplay continues as normal as if you were not ingame.");
	});

	register_role(["resolution", "1333"], "Neutral", "Resolution", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1333");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player if they have a conflict.");

		e.addField("Attributes:", "- Your Attack value is always 1 stage higher than your target's defense.\n- At the start of the game, you are told how many people's roles have conflict.\n- A player's role has conflict if it shows up on the command =list conflict.\n- Whenever a player with conflict dies, you will be told.\n- This will be rerolled for free if there are no conflicting roles or if all conflicting roles are rerolled.");
		
		e.addField("Goal:", "Resolve all conflict by seeing everyone with a conflicting role die.");
	});

	register_role(["anterograde_amnesiac", "anterogradeamnesiac", "anterograde", "antero", "1334"], "Neutral", "Anterograde Amnesiac", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1334");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, visit another player to give them Anterograde Amnesia. In the following day, they will be notified that their Read Message History permission for this day has been revoked, and they won't get it back, even after it ends.\n- At night, visit another player, and learn of their history. You will learn their alignment and subalignment. You will be able to win with them alive.");

		e.addField("Attributes:", "- It is difficult for you to hold on to new memories. Thus, in public and private chats, you do not have the Read Message History permission. Your Player Channel and the Dead Chat are the only exceptions.\n- You cannot use the same ability two nights in a row, unless your previous attempt was unsuccessful for any reason.\n- You have Basic Defense that only works against people who you have investigated in previous nights.\n- Your investigation ability cannot be decieved or redirected.");
		
		e.addField("Goal:", "Live to ensure that only players whose histories you know are alive. It doesn't matter if those players can win together or not.");
	});

	register_role(["new_game_plus", "newgameplus", "new_game_+", "newgame+", "ngp", "ng+", "1335"], "Neutral", "Resolution", {subCat: "Chaos"}, (e) =>
	{
		e.author.name = "";
		e.setDescription("Post 1335");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Attack a player each night.");

		e.addField("Attributes:", "- At the beginning of the game, you must choose a role that you played in a previous game and hasn't been removed.\n- You will gain the (most recently updated) attributes and abilities of the role you choose, but Attack and Defense will both be increased by a single tier, to a maximum of Overkill/Overprotective.\n- Once you choose a role, you will gain a list of people who lost in the game where you played your role. These are your Enemies.\n- If you don't have any previous role to choose, this will automatically reroll into a different NC.\n- You will not have access to any factional chats your role would normally see, and any ability/attribute you have that refers to a \"factional attack\" will instead refer to your attacking ability.\n- You won't be included in your own list of Enemies and you can't attack yourself unless your chosen role says you can.");
		
		e.addField("Goal:", "Personally kill and/or lynch at least 4 of your enemies. If all of your enemies die before this goal is reached, you may then choose any players to kill, as long as your total kill count is at least 4.");
	});

	register_role(["", "1336"], "Neutral", "‎ ", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1336");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Consume a player's status messages. The host will post \"\\_ \\_\" in their player channel instead of what they normally would've received. This includes potential death messages. If a player dies while affected by your ability, their morning death will be replaced by \"\\_ \\_\". Their role in the graveyard will appear to be \"\\_ \\_\".\n- Once per game, ‎ ‎ ‎ ‎ ‎ ‎ ‎  the entire town. Everyone will effectively be blackmailed, and will only be able to type \"\\_ \\_\". If they try saying something else, you attack them unstoppably. Votes will also cease to exist. This will only last a day.");
		
		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["calculus", "calc", "1337"], "Mathematic", "Calculus", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1337");

		e.addField("Alignment", "Mathematics Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Give a player an Integration or Derivative Mark at night.");

		e.addField("Attributes:", "- You may target Mathematics players with your abilities. Different effects happen based on when a marked player visits another marked player.\n\nIntegration visits Integration: If either of them dies tonight, their role will show up as “Integrated” in the graveyard.\nIntegration visits Derivative: The Derivative loses all Defense tonight and is considered to have been visited twice by the Integration.\nDerivative visits Integration: The Derivative becomes “Solved 3 by 3”.\nDerivative visits Derivative: The second Derivative is redirected to visit the first Derivative.\n\nAt the cost of 20 points, integrate all players with an Integration Mark, forcing all of them to visit a player of your choice. If they are Solved, all of their Solved visits will be forced onto that player.\nAt the cost of 20 points, derive all players with a Derivative Mark, killing any that has received at least 8 visits in the past.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["addition", "add", "1338"], "Mathematic", "Addition", {subCat: "Operation"}, (e) =>
	{
		e.setDescription("Post 1338");

		e.addField("Alignment", "Mathematics Operation", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Add two players together at night.");

		e.addField("Attributes:", "- Any ability that affects one of the players tonight will also affect the other.\n- During the following day, if one of them is lynched, you will learn the role of the other.\n- The faction will gain points equal to the total amount of visitors (excluding you) on both of them.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["subtraction", "sub", "1339"], "Mathematic", "Subtraction", {subCat: "Operation"}, (e) =>
	{
		e.setDescription("Post 1339");

		e.addField("Alignment", "Mathematics Operation", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Subtract from a player at night.");

		e.addField("Attributes:", "- The role effects of all players visiting them tonight will be delayed by one night.\n- All notifications related to them will also be delayed by one night.\n- This includes notifications they receive, others receive from visiting them, or anything that is the result of something they did.\n- The faction will gain points equal to the amount of effects and notifications delayed.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["multiplication", "mult", "1340"], "Mathematic", "Multiplication", {subCat: "Operation"}, (e) =>
	{
		e.setDescription("Post 1340");

		e.addField("Alignment", "Mathematics Operation", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Multiply a player at night, doubling them and all of their visitors.");

		e.addField("Attributes:", "- During the next night, all doubled players will be able to and must use their ability twice.\n- Once per game, you may choose to triple instead of double, which does the same thing but all tripled players must instead use their ability three times instead of two.\n- All Mathematics players are immune to non-beneficial effects caused by doubled or tripled players.\n- Doubled Solved players will have their random visits happen twice and Tripled Solved players will have their random visits happen thrice (ex: a Doubled Solved 1 by 3 will visit 6 random players or 9 if tripled)\n- The faction will gain 2 points whenever a doubled or tripled player targets them.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["division", "div", "1341"], "Mathematic", "Division", {subCat: "Operation"}, (e) =>
	{
		e.setDescription("Post 1341");

		e.addField("Alignment", "Mathematics Operation", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Divide a player at night.");

		e.addField("Attributes:", "- If they die tonight, all of their non-Mathematics visitors that didn’t attack them will be roleblocked the next night.\n- The divided player’s role will flip to be the post that is 1/the amount of visitors they got, rounded down.\n- The faction will gain 3 points whenever you divide a player that dies.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["variable", "var", "1342"], "Mathematic", "Variable", {subCat: "Algebraic"}, (e) =>
	{
		e.setDescription("Post 1342");

		e.addField("Alignment", "Mathematics Algebraic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Solve a player for X at night, at the cost of 4 points.");

		e.addField("Attributes:", "- During the day, choose a player who will be X for tonight.\n- If the player you’re solving for visits X, the faction will gain 8 points.\n- If the player you’re solving for does not visit X, you learn their role, who they visited, roleblock them, and they become “Solved 2 by 1”\n- Roleblock immune");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["constant", "const", "1343"], "Mathematic", "Constant", {subCat: "Algebraic"}, (e) =>
	{
		e.setDescription("Post 1343");

		e.addField("Alignment", "Mathematics Algebraic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make a player constant at night, learning all of the players they’ve visited in the past, at the cost of 5 points.");

		e.addField("Attributes:", "- During the day, choose one of the players you just learned in the previous night. That player becomes “Solved 1 by 1” and the following night, the constant player will be redirected to visit them.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["quadratic", "quad", "1344"], "Mathematic", "Quadratic", {subCat: "Algebraic"}, (e) =>
	{
		e.setDescription("Post 1344");

		e.addField("Alignment", "Mathematics Algebraic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Find the zeroes of a player at night, the list of all players they’ve never visited before, at the cost of 7 points.");

		e.addField("Attributes:", "- If they’ve never visited any member of the Mathematics faction before, including dead ones, they become “Solved 2 by 2”.\n- If they have, they will be added to your square.\n- Once you’ve completed the square, meaning you have four players added to your list, you will redirect them all to visit you the same night you completed it. Additionally, any Mathematics attacks done to these players in the future will cost half as many points.\n- Once all players in the completed square are dead, the faction gains 16 points and you may change your role into any other role within the faction for free.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["square_root", "squareroot", "sqrt", "1345"], "Mathematic", "Square Root", {subCat: "Algebraic"}, (e) =>
	{
		e.setDescription("Post 1345");

		e.addField("Alignment", "Mathematics Algebraic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Test a player’s ability to be rooted at night, roleblocking them, at the cost of 6 points.");

		e.addField("Attributes:", "- If your target attempts to visit a member of the Mathematics faction, they are negative and their world will become imaginary, causing them to be unable to receive night notifications for the rest of the game.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["parametric", "para", "1346"], "Mathematic", "Parametric", {subCat: "Geometric"}, (e) =>
	{
		e.setDescription("Post 1346");

		e.addField("Alignment", "Mathematics Geometric", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Time a player’s death at night, 2 to 4 nights from now, at the cost of 6 points.");

		e.addField("Attributes:", "- If your target dies on that night, all Solved players have their current Y increased by 1 and you also become “Solved Infinity by 3” while your death timing becomes a day ability.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["complex_number", "complexnumber", "complex", "1347"], "Mathematic", "Complex Number", {subCat: "Geometric"}, (e) =>
	{
		e.setDescription("Post 1347");

		e.addField("Alignment", "Mathematics Geometric", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fixate on a complex point at night, by choosing a player, a night, and a target, at the cost of 6 points.");

		e.addField("Attributes:", "- If the player visits (or attempts to visit) the target on that night, you will enter Polar Form the following night.\n- In Polar Form, visit a player, making them and whoever they visit “Solved 1 by 3” while also muting your target the next day.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["unit_circle", "unitcircle", "unit", "1348"], "Mathematic", "Unit Circle", {subCat: "Geometric"}, (e) =>
	{
		e.setDescription("Post 1348");

		e.addField("Alignment", "Mathematics Geometric", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- On the first night, select a Mathematics player to wield the circle and choose a state (Positive or Negative).");

		e.addField("Attributes:", "- You die at the end of the first night but do not have access to dead chat and may still talk in your factional chat.\n- At the end of each night, your wielder learns the names of all of their visitors. If they are a Mathematics player, they learn the roles of any Solved visitors.\n- At the beginning of the day, your wielder will change, going 1 up the player list (passing over dead players) if you’re Positive and going 1 down the player list if you’re Negative.\n- During the day, while dead, you may change your state at the cost of 8 points.\n- During the day, while dead, if your wielder is a Mathematics player, they may fling you, causing you to move three spaces in your current direction\n- Once all Mathematics players have wielded you, once per game, during the day, you may deal a Powerful Attack to any living player and this ends all of your other abilities. You stop talking in your factional chat and now have access to dead chat.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["trigonometry", "trig", "1349"], "Mathematic", "Trigonometry", {subCat: "Geometric"}, (e) =>
	{
		e.setDescription("Post 1349");

		e.addField("Alignment", "Mathematics Geometric", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Angle yourself with another player at night, at the cost of 8 points.");

		e.addField("Attributes:", "- For the rest of the game, all visits on them will give the faction a point as if they were also a Mathematics player. Upon receiving 8 visits, an angled player is “Solved 1 by 4”.\n- If an angled player is lynched, you gain a 1-use copy of their ability along with gaining their Defense state if it's higher than your current one. Also, the next player you angle yourself with costs no points.");
		
		e.addField("Goal:", factions.Mathematic.goal);
	});

	register_role(["adam_ralston", "adamralston", "adam", "ralston", "1350"], "City", "Adam Ralston", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1350");

		e.addField("Alignment", "City Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- At night, Grant powerful defense to another player. You will also purge any negative effects on said player.");

		e.addField("Attributes:", "- You may only heal yourself once.");
		
		e.addField("Goal:", factions.City.goal);
	});
};
