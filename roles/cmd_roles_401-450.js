module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["401k_plan", "401k", "401"], "Neutral", "401K Plan", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 401");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player at night to have them put in money to their 401k Plan.");

		e.addField("Attributes:", "- If they have an ability that has a limited charge, they lose a charge of that ability, but gain 2 charges at the end of the next night. You gain a charge of whatever ability they lost.");
		
		e.addField("Goal:", "Give two people an extra charge. You do not need to be alive - you can die the night before completing your goal.");
	});

	register_role(["infested", "402", "402a"], "Neutral", "Infested", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 402");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack 1 player at night\n- Control 1 player at night, you will also learn their role.");

		e.addField("Attributes:", "- Conversion and Control Immunity\n- If someone visits you during the night, they will gain the **Spored** status effect. This can happen up to 3 times.\n- If a player with the **Spored** status effect dies by something other than lynching, they will instead survive and become a Sporetouched (Post 402-B).\n- If a Sporetouched attacks you, their attack will fail and they will learn your identity.\n- If there is a Sporetouched alive, you will be incapable of attacking.");
		
		e.addField("Goal:", "Kill all who oppose you, or have another Sporetouched win the game.");
	});

	register_role(["sporetouched", "spored", "402b"], "Neutral", "Sporetouched", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 402");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack 1 player at night.");

		e.addField("Attributes:", "- Conversion Immunity\n- This role cannot be rolled.");
		
		e.addField("Goal:", "Kill all who oppose you, including other Sporetouched.");
	});

	register_role(["token_vendor", "tokenvendor", "token", "403"], "Neutral", "Token Vendor", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 403\n*Someone's gonna get their butt kicked.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Give one player one token at night.\n- Choose to don a bulletproof vest at night granting yourself Basic Defense. (2 use)\n- If a player with a non-played token dies, choose to give their token to another player. This does not count towards your win condition.");

		e.addField("Attributes:", "- A player with a token may choose to play their token at any point during the day. They may choose to play the token on themselves or another player. When a token is played, its effect persists for the rest of the day that it is played.\n- The identity of the player who plays a token will not be revealed, but the token played will be. If the token has a minus next to it on the token list, the identity of the target will be revealed; if it has a plus, the identity of the target will not be revealed.\n- You have one of each of your tokens to give out. You will receive a list of tokens that you need to give out to fulfill your win condition at the start of each night.\n- You may give yourself one token throughout the game.\n- You may multitask.");
		
		e.addField("Goal:", "Give out one of each of your distinct tokens.");
		
		e.addField("Token List:", "- Immunity Token - Target cannot be voted for.\n- Triple Token - Target's vote counts as three.\n+ Disfranchisement Token - Target cannot vote.\n+ Pressure Token - Player that plays this token controls the votes of target.\n+ Bar Token - Target must acquire 3/4 of the votes to be lynched.");
	});

	register_role(["missingno", "404"], "Town", "MissingNo", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 404");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Delete a non-Town role");

		e.addField("Attributes:", "- Anybody whose role is deleted dies");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wm_revolutionary", "wmrevolutionary", "revolutionary", "405"], "Town", "WM Revolutionary", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 405\n*Who would ever want to be king?*");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hold an anonymous council each night.");

		e.addField("Attributes:", "- Each night you are alive, all other Town members in the game will be able to send a vote to your council. You may also vote in your council.\n- Players may cast their vote for any other living player in the game, or abstain. If a player does not send in a vote, they will abstain.\n- If a majority of the votes are cast for one player, you will attack them. You will know the name of the player you attack.\n- If a majority of the votes abstain, you will attack no one.\n- Votes for you will not count towards the majority in your council.\n- When you attack a player, you will gain roleblock and redirect immunity.\n- If there is a tie, you will be the final deciding vote. If you voted for a target that is not one of the majority votes, you will attack no one.\n- If you kill a member of the Town, you will no longer hold your councils.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["jd", "406"], "Neutral", "Jd", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 406");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Lynch", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Get an Idea. Must be a challenge.");

		e.addField("Attributes:", "- When you get an idea, it is publicly announced to the town.\n- Those who win are granted some form of buff\n- Those who lose get nothing\n- Those who don't participate are RB'd the next night.\n- If you're the first to die, then your attacker is attacked with lynch attack OR everyone who voted guilty is attacked with lynch attack\n- Challenges must be a minigame\n- You choose the minigame and goal of said minigame");
		
		e.addField("Goal:", "Have 5 people win one of your minigames.");
	});

	register_role(["lightkeeper", "407"], "Mafia", "Lightkeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 407");

		e.addField("Alignment", "Unique Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transcend humanity during the day.");

		e.addField("Attributes:", "- Beginning of the night abilites (such as being jailed by the Jailor, pirated by a Pirate, etc.) are immediately canceled.\n- While you are transcending humanity, everything that should happen to you will not. All attacks will fail, all visits will fail, all abilities will fail. This cannot be overidden.\n- At the end of the night, you will recieve a list of everyone who had an ability fail against you. You will also not recieve any notifications that you should've.\n- Commuting will also purge negative effects such as Ice Marks, douses, hexes, etc the first time you do so.\n- You may commute three times.\n- All Immunities (While Transcending)");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["conspirator", "408"], "Neutral", "Conspirator", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 408\n*Pretty soon they'll discover me in the Super Sargasso Sea!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Plan a conspiracy between three players during the night.");

		e.addField("Attributes:", "- If one of the players you planned a conspiracy about mentions the name of any of the other two players, your conspiracy will be proven. This does not trigger upon voting.\n- When your conspiracy is proven, you will force the third player to choose to kill one of the other two players before the day ends. You will deal a Powerful Attack to this player at the end of the day. If they do not choose a player by the end of the day, one will be randomly selected. \n- Your conspiracy only stands that day after you plan it.\n- You may not plan a conspiracy about yourself you nincompoop.");
		
		e.addField("Goal:", "Have your conspiracies proven three times.");
	});

	register_role(["lawnmower", "mower", "409"], "Neutral", "Lawnmower", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 409");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Mow someone's lawn or mow their face off.");

		e.addField("Attributes:", "If you mow someone's lawn, nothing will happen besides you visiting them. They will be happier that their lawn looks nice, but they will get no notification, and you will get no thanks.\n- If you mow their face off, you will do a powerful attack, and their role will not be revealed upon death (I guess you just shred their ID or something).\n- If you die, everyone will have the option to repair you.\n- The first person who tells the host they will repair you will repair you, bringing you back from the dead. You are then on your repairer's team, and join their night chat if they have one.\n- You can only be repaired once.");
		
		e.addField("Goal:", "Kill all who oppose you or win with your repairer.");
	});

	register_role(["yandere", "410"], "Neutral", "Yandere", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 410");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch out for Senpai.\n- **R A M P A G E** at someone's house (only if Senpai is dead)");

		e.addField("Attributes:", "At the beginning of the game, a random player is selected to be Senpai. They will know this and receive 3 names, one of them being yours\n- If Senpai dies, you become violent and able to attack.");
		
		e.addField("Goal:", "You win with town if Senpai is alive. Otherwise, kill everyone.");
	});

	register_role(["wrath", "411"], "Neutral", "Wrath", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 411");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to attack someone at night.");

		e.addField("Attributes:", "- You will learn how many people visit each other at night.\n- If you die at night, you will revive the next day with the goal of killing the player who killed you.\n- You will know the role of the player who killed you.\n- You cannot kill anyone aside from your killer.");
		
		e.addField("Goal:", "Get killed, and get revenge.");
	});

	register_role(["comedian", "412"], "Neutral", "Comedian", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 412\n*You gotta stand up for yourself.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Invite up three people to your nightly comedy show and plan a hilarious joke during the day.\n- Don a bulletproof vest at night. (2 use)");

		e.addField("Attributes:", "- You must send the host the joke you will tell at your show before/at the same time you invite people.\n- All three of your audience members will receive your joke at the start of the night. This will not affect their night action.\n- Your audience members will give either a positive or negative review of your joke. These will be anonymous.\n- You will receive the number of positive and negative reviews you received at the end of the night.\n- You may not put yourself in your own audience you nincompoop.");
		
		e.addField("Goal:", "Receive seven positive reviews.");
	});

	register_role(["less_annoying_chess_grandmaster", "lessannoyingchessgrandmaster", "lagcpimrs", "chess", "413"], "Town", "Less Annoying Grandmaster Chess Player In My Reccomended Section", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 413");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Power", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to duel via. Blitz chess (3m) on lichess.org during the day.");

		e.addField("Attributes:", "- During the following night, you will... well, duel the chosen player in a Blitz chess match (3m) on lichess.org. This somehow takes up the night, roleblocking them.\n> If you win this match, you will deal a Powerful attack to them.\n> If you lose this match, you are yourself dealt a Powerful Attack.\n> If it's a draw, do another match, 5head.\n- The link to the chess match's replay will be sent in the graveyard w/ the message of whomever died in the duel, if any.\n- This role may be rerolled into another Town Killing role for free. You're welcome.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["city_planner", "cityplanner", "planner", "414"], "Mafia", "City Planner", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 414");

		e.addField("Alignment", "Unique Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player and find out what alignment they are. If they are part of the Florae, trample them.- Each night, be notified how many Florae roles are currently alive.");

		e.addField("Attributes:", "- At least one Florae must be in the game for this to roll.\n- Posts 149-166, Daffodil, Hydrangea, Iris, Sage, Thyme, Azalea, Dahila, Nettle, Wisteria, Calendula, Lavender, Lily, Mint, Rosemary, Dicentra, Gardenia, Nightshade and Phlox count as Florae roles.\n- Florae will know that a City Planner is in the game.\n- After eliminating the Florae, the Mafia can make up to two factional kills per night (two members make two kills).");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["voodoo_master", "voodoomaster", "voodoo", "415"], "Coven", "Voodoo Master", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 415");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use your voodoo doll to curse people.");

		e.addField("Attributes:", "- At night, use your voodoo doll to curse someone. This gives them ***any*** non-killing negative effect.\n- You can kill your target, but this has a 2 night cooldown.\n- With the Necronomicon, you can kill a target and curse another target every night.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["landlord", "416"], "Mafia", "Landlord", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 416");

		e.addField("Alignment", "Unique Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player and find out what alignment they are. If they are part of the Town but not the Florae, trample them.\n- Each night, be notified how many non-Florae Town roles are currently alive.");

		e.addField("Attributes:", "- At least one non-Florae Townie must be in the game for this to roll.\n- Posts 149-166, Daffodil, Hydrangea, Iris, Sage, Thyme, Azalea, Dahila, Nettle, Wisteria, Calendula, Lavender, Lily, Mint, Rosemary, Dicentra, Gardenia, Nightshade and Phlox count as Florae roles.\n- Non-Florae Townies will know that a Landlord is in the game.\n- After eliminating the non-Florae Townies, the Mafia can make up to two factional kills per night (two members make two kills).");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["shaharazad", "shaha", "417"], "Neutral", "Shaharazad", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 417");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Start a Grand Idea Mafia subgame every third night. Dead players aren't players in the subgame. Living players have the same roles they have in the main game. The players that win the subgame get a layer of Basic defense that can prevent one attack in the main game. The players that lose the subgame get dealt a Basic attack during the main game.");
		
		e.addField("Goal:", "You win no matter what if it's a subgame. If it's a main game, you must kill 3 players with your subgames or win 3 subgames to win.");
	});

	register_role(["firefighter", "418"], "Town", "Firefighter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 418");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Undouses targets");

		e.addField("Attributes:", "- Can only spawn if there's an Arsonist in the game.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["horse_plinko_flexer", "horseplinkoflexer", "horse_plinko", "horseplinko", "419"], "Neutral", "Horse Plinko Flexer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 419");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Flex your sick Horse Plinko gif during the day.");

		e.addField("Attributes:", "- You may only flex your sick Horse Plinko gif twice, and after you flex your sick Horse Plinko gif, you may not do so for the next two days.\n- When you flex your sick Horse Plinko gif, the host must, before anything else, post the attached gif. They then must immediately end the day phase, closing the channel but otherwise giving no notification in said channel. They may, however, notify the night phase outside of the day channel.");
		
		e.addField("Goal:", "Flex your sick Horse Plinko gif twice.");

		e.setImage("https://cdn.discordapp.com/attachments/970046125065265202/970178559731699722/HorsePlinko.gif");
	});

	register_role(["stoner", "420"], "Neutral", "Stoner", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 420\n*Drop it like it's hot.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to blaze it with someone during the night.");

		e.addField("Attributes:", "- Anyone you blaze with will not be able to visit you at night for the rest of the game.");
		
		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["no_more_game", "nomoregame", "421"], "Neutral", "No More Game!", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 421");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Flex your sick Horse Plinko gif during the night.");

		e.addField("Attributes:", "- You may only flex your sick Horse Plinko gif twice, and after you flex your sick Horse Plinko gif, you may not do so for the next two nights.\n- When you flex your sick Horse Plinko gif, the host must, before anything else, post the attached gif. They then must immediately end the night phase.");
		
		e.addField("Goal:", "Flex your sick Horse Plinko gif twice.");

		e.setImage("https://cdn.discordapp.com/attachments/970046125065265202/970178559731699722/HorsePlinko.gif");
	});

	register_role(["timewalker", "422"], "Coven", "Timewalker", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 422");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You can timewalk during the day or night. If you do, there's an extra day or night after this one. You can only timewalk twice and you can't timewalk during extra days or nights.");

		e.addField("Attributes:", "- If you have the Necronomicon, you can timewalk an infinite number of times and you have a Basic attack during extra nights and your vote counts as three during extra days.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["savior", "423"], "Town", "Savior", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 423");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Save someone at night.");

		e.addField("Attributes:", "- If your target would die at night, you will instantly revive them. You will also learn their role.\n- The town will not know they were revived, but the target and you will know.\n- You cannot target the Town (Power).\n- You cannot target someone you have already revived.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["chronomancer", "chrono", "424"], "Town", "Chronomancer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 424");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a target and delay their death for two nights.");

		e.addField("Attributes:", "- Target will know if their death has been delayed.\n- Attacks coming from roles that imprison their targets cannot be delayed.\n- You may delay your own death once.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["zoltar", "425"], "Town", "Zoltar", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 425\n*Ladies and gentlemen, boys and girls. Let Zoltar the Great read your mind!*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Read the mind of a player at night to discover if they are thinking about something.");

		e.addField("Attributes:", "- You may choose a player to read their mind and a word. You will discover if the player has the given word in their role card's abilities and/or attributes.\n- You may read the minds of five players.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["gargoyle", "426"], "Rock", "Gargoyle", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 426");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Aura (*You have no defense if there's four or more Rocks alive, Basic if there's three, Powerful if there's two, and Invincible if there's only one.*)", true);

		e.addField("Abilities:", "- Go berserk at someone's house each night, dealing a Powerful attack to them and everyone who visits them, including you.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["peashooter", "427"], "Plant", "Peashooter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 427");

		e.addField("Alignment", "Unique Plant Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a pea at someone or produce a sun.");

		e.addField("Attributes:", "- You may deal a basic attack to a player. Costs 1 sun.\n- You may deal a powerful attack to a player. Costs 2 sun.\n- You may upgrade to a Repeater, giving you 1 free basic. You may still use your normal sun-costing attacks. Costs 3 sun.\n- You may upgrade to a Gatling Pea, giving you 2 free powerful attacks. You may still use your normal sun-costing attacks. Costs 4 sun.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["augur", "428"], "Coven", "Augur", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 428");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, choose to enlighten the coven the following night.\n- If not enlightened, attack a player.");

		e.addField("Attributes:", "- When enlightened, coven members temporarily gain effects of the Necronomicon.\n- On nights you attack, you temporarily lose your defense.\n- You may enlighten four times.\n- If you gain the Necronomicon, you may choose a member of the coven to pass it to. You do not gain any benefits from it.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["shade", "429"], "Neutral", "The Shade", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 429");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Shroud someone during the night.");

		e.addField("Attributes:", "A shrouded player will receive a basic attack the next night.\n- You may visit a previously shrouded player to deal a powerful attack.\n- If there are 4 or less players, your attacks become powerful and unstoppable respectively.\n- If every living player had been shrouded, you instantly win and end the game.");
		
		e.addField("Goal:", factions.Neutral.goalNK + " Or shroud all living players.");
	});

	register_role(["blood_finder", "bloodfinder", "430"], "Town", "Blood Finder", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 430");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone at night to see if they have killed someone.");

		e.addField("Attributes:", "- People who kill someone will be covered in blood. It is assumed there is no water to clean off said blood.\n- If someone tried to kill someone but failed for any reason, they will have plans detailing who they wanted to kill lying around.\n- If someone has done an action that negatively impacted someone, they will write about it in their journal, and you will know how many times their visit has negatively impacted someone. You will not read the journal if the target is covered in blood or has plans to kill someone. )Some examples of negative impacts include: roleblocking, stealing feedback, lowering defense, etc.)\n- You will know if someone is covered in blood, or who they planned to kill.\n- Someone can have multiple plans if they fail multiple times.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["shifter", "431"], "Neutral", "The Shifter", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 431");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, choose 1 of 5 roles to turn into at night.");

		e.addField("Attributes:", "- The host will give you 5 roles at the start of every day, and you pick one to transform into. You will gain all of that roles abilities, attributes (not including access to factional kills or factional chats), and attack/defense values.\n- You will keep The Shifter's win condition, and you will revert back to The Shifter at the start of the day. You keep this attribute whenever you shift info another role.");
		
		e.addField("Goal:", "Have the good faction lose (this can win while dead).");
	});

	register_role(["collector", "432"], "Coven", "Collector", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 432");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic (Powerful)", true);

		e.addField("Abilities:", "- During the full moon, you may choose to use a relic on somebody.");

		e.addField("Attributes:", "- Using a relic on a coven member will grant them Powerful defence and Investigation Immunity.\n- Using a relic on a non-coven member will remove their Defence and Roleblock them.\n- You may not use a relic on yourself.\n- With the Necronomicon the relic will deal a basic attack on a non-coven member.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["mutant", "433"], "Neutral", "The Mutant", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 433");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic (Invincible)", true);

		e.addField("Abilities:", "- Choose a form at night and use your form.");

		e.addField("Attributes:", "- You can choose between 4 forms every night.\n- Predator Form: 2 Unstoppable Attacks, you will not be able to act the following night.\n- Precision Form: Unstoppable Attack.\n- Frenzy Form: Powerful Rampage.\n- Shield Form: Basic Attack, Invincible Defense.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["slime", "434"], "Neutral", "Slime", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 434");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Move where you are in the player list.");

		e.addField("Attributes:", "- One-Time Basic Defense\n- Whenever a non-Slime player adjacent to you on the Slime Player List dies, they will become a Slime instead.\n- You can't move your spot two nights in a row.\n- You cannot move your spot if you converted someone last night.\n- You cannot move your spot the night after you are converted.\n- All Slimes have access to a private Slime chat, and all Slimes will be able to see the Slime player list.\n- Conversion Immunity.");
		
		e.addField("Goal:", "Have a majority of living players be a Slime.");
	});

	register_role(["void_manipulator", "voidmanipulator", "void_man", "voidman", "435"], "Neutral", "Void Manipulator", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 435");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Make a black hole at a house.");

		e.addField("Attributes:", "- Making a black hole at someone's house creates a Powerful rampage.\n- Your visit is astral.\n- Making a black hole on yourself gives you Powerful defense, and you deal a Powerful attack to anyone who visits you.\n- Anyone who you kill will have their role and last will lost to the void and it will not be shown.");
		
		e.addField("Goal:", "Kill all who oppose the void.");
	});

	register_role(["congressman", "congress", "436"], "Neutral", "Congressman", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 436");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose assault, fraud, or gay marriage to make illegal each night.\n> *Assault* — Anyone who attacks that night or the following day will be jailed the next night.\n> *Fraud* — Anyone who uses a deceptive, investigative, roleblocking, redirecting, vote-influencing, or speech-influencing ability that night or the following day will be jailed the next night.\n> *Gay marriage* — Anyone who visits someone that stayed at home that night, as well as the person they visited, will be jailed the next night.");

		e.addField("Attributes:", "- Each choice has a two-night cooldown.\n- Lynch Immunity\n- You can't jail yourself if that would somehow happen.");
		
		e.addField("Goal:", "Jail six players.");
	});

	register_role(["conniver", "437"], "Mafia", "Conniver", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 437");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Confuse a player at night.");

		e.addField("Attributes:", "- If a confused player targets someone, they will instead unknowingly target themselves. You will receive any messages they get from performing their action.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["super_ultra_mega_giga_galaxy_word_master", "superultramegagigagalaxywordmaster", "word_master", "wordmaster", "438"], "Neutral", "Super Ultra Mega Giga Galaxy Word Master", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 438");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Challenge a player to duel... in WORDLE.\nhttps://wordletogether.com/\n(First player to get the word in real time wins, regardless of how many attempts/6)");

		e.addField("Attributes:", "- Duels occur publicly at the end of the day.\n- If you lose the duel, you lose your defense for the rest of the game.\n- If you win the duel, you attack the opponent immediately. If they survive this attack, they will be roleblocked the following night.");
		
		e.addField("Goal:", "Win two duels.");
	});

	register_role(["watcher", "439"], "Town", "Watcher", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 439");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch a player at night, granting them invincible defense.");

		e.addField("Attributes:", "- The following day, if 1/3 of living players (rounded up) votes the watched target, the target will be instantly lynched.\n- Targets will be notified that they have been watched.\n- You may watch yourself.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["moss", "440"], "Town", "Moss", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 440");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grow on a player's house, giving them basic defense until they are attacked.");

		e.addField("Attributes:", "- Once you successfully protect against one attack, all your protection is removed.\n- Players that were mossed first receive priority when protecting from attacks.\n- You only visit players when initially first spreading moss.\n- You cannot target yourself.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["clown", "441"], "Neutral", "Clown", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 441");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Basically night jester\n- One of the people who nightkills you gets unstoppable attacked.");
		
		e.addField("Goal:", "Get nightkilled, but not lynched.");
	});

	register_role(["ka", "kingdom_attack", "kingdomattack", "442"], "Neutral", "KA: Made by someone who has never played KA", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 442");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Play cards to defeat your opponents.");

		e.addField("Attributes:", "- At the start of the game, draw 5 cards. You can not have 2 of the same card in your starting hand.\n- You have 2 health. Any action that would kill you (besides lynching) makes you lose 1 health.\n- You can play up to 2 cards per night.\n- At the start of the night, draw a card.\n- Once per game, you can draw 2 cards of your choice at night.");

		e.addField("Cards:", "Attack! - Deal a powerful attack to a player.\n- Block! - Give yourself powerful defense at night.\n- Heal! - Give yourself 1 HP (can only get 2 per game).\n- Investigate! - Find out someone's exact role.\n- Frenzy! - Deal a basic attack to your target and all who visit them.\n- Persuasion! - Add a vote to a player during the day. This vote can not be changed. This vote will be attributed to \"a card.\" This card can only be used during the day.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["reflector", "443"], "Neutral", "Reflector", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 443");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Redirect a kill from one player to another.");

		e.addField("Attributes:", "- Choose 2 players at night. Any kills that happen to one of them during that night or the next day will be switched to the other. This effects lynches.");
		
		e.addField("Goal:", "Swap 2 kills.");
	});

	register_role(["conqueror", "conq", "444"], "Neutral", "Conqueror", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 444");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, the Conqueror can choose two targets: one to kill, and one to heal. He must use both abilities in the same night, or nothing will happen.");

		e.addField("Attributes:", "- The Conqueror's heal is identical to the Doctor's heal; however, he cannot heal himself.\n- If the Conqueror is controlled by a witch, the witch will control his attack but not his heal.");
		
		e.addField("Goal:", "Reduce every other faction to a single member. At least two other factions must survive.");
	});

	register_role(["blast_magician", "blastmagician", "blast", "445"], "Neutral", "Blast Magician", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 445");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Add a charge to your Magical Blast. You may not attack on the same night you perform this action.\n- Attack a player with your Magical Blast, dealing a Powerful attack to them and the number of players adjacent to them equal to twice the amount of charges your Magical Blast has. This will remove all charges from Magical Blast.");

		e.addField("Attributes:", "- You may only carry a maximum of 2 charges at once.\n- A charged Magical Blast will consider the targeted player to be at the center of the attack. For example, a Magical Blast with 1 charge aimed at Player #10 will also attack Player #9 and Player #11.\n- If a player is missing from Magical Blast's attack range, that just means your attack has hit one less player. For example, a Magical Blast with 1 charge aimed at Player #10 will not compensate for a missing #9 or #11 by hitting #8 or #12. Example 2: A Magical Blast with 2 charges aimed at Player #3 while only Player #2 is missing will attack Players #1, #3, #4, and #5.\n- The player with the lowest number will be considered to be adjacent to Player #1.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["barterer", "446"], "Neutral", "Barterer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 446");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone during the day to buy their ability at night.");

		e.addField("Attributes:", "- You start the game with a bartering chip.\n- During the day, select someone. You learn their abilities at the start of the night.\n- You can choose to trade with them, taking their abilities and giving them your original ability.\n- If you take the ability of an informed minority, the informed minority will be informed you are on their team, but you will not join their chat.\n- People who have their ability traded for the bartering chip will keep their original win condition.");
		
		e.addField("Goal:", "Complete the goal of the ability you have.");
	});

	register_role(["butcher", "447"], "Neutral", "Butcher", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 447");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Butcher someone at night to collect meat.");

		e.addField("Attributes:", "- Killing someone gives you a piece of meat.\n- You can use meat to get bonuses.");

		e.addField("Bonuses from meat:", "Upgrade attack by 1 stage for a night = 1 Meat\nUpgrade defense by 1 stage for a night = 1 Meat\nAttack one extra time = 2 Meat\nPermanent +1 Meat per kill = 2 Meat\nPermanent attack upgrade = 3 Meat (Max = Unstoppable)\nPermanent defense upgrade = 3 Meat (Max = Invincible)\nPermanent extra vote = 3 Meat\nPermanent +1 attack per night = 3 Meat");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["plot_twist", "plottwist", "448"], "Neutral", "Plot Twist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 448");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Switch the target of your execution.");

		e.addField("Attributes:", "- If you are lynched, you must swap the kill from yourself to someone who voted guilty on your trial.\n- If you do not choose, a target will be chosen for you.\n- Once you are lynched and swap the kill, you can no longer be voted.\n- You have one-time Powerful Defense");
		
		e.addField("Goal:", "Be lynched and switch the kill to someone else.");
	});

	register_role(["living_statue", "livingstatue", "statue", "449"], "Neutral", "Living Statue", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 449");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "None (Variable)", true);
		e.addField("Defense", "Overprotective (Variable)", true);

		e.addField("Abilities:", "- Wear away to kill people.");

		e.addField("Attributes:", "- You start with overprotective defense.\n- If someone attacks you, you lose a level of defense and gain a level of attack.\n- You can visit yourself to erode yourself. If you erode yourself and someone attacks you, your self-erode will fail.\n- It is assumed that the highest level attacker attacks first.\n- If nobody visits you and you do not attack at night, you will gain a level of defense and lose a level of attack.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["tower", "450"], "Town", "Tower", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 450");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select yourself at night to heal and purge all visitors, or select someone else to shoot them.");

		e.addField("Attributes:", "- Roleblock Immunity\n- You gain a First Aid Kit at the start of every odd-numbered night.\n- Players who visit you will receive one of your held First Aid Kits at the end of the night, but they will not be notified.\n- If someone with a First Aid Kit would die to an attack of Basic or lower, they will be healed by their First Aid Kit, destroying it.\n- First Aid Kits persist even after you die.");
		
		e.addField("Goal:", factions.Town.goal);
	});
};
