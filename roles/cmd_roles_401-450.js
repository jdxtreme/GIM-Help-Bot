module.exports = (g) =>
{
	const {register_role} = g;

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

	register_role(["infested", "402"], "Neutral", "Infested", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 402");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic (None)", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Attack a player at night\n- Roleblock a player at night.");

		e.addField("Attributes:", "- Conversion and Control Immunity\n- If someone visits you during the night, they will gain the Spored status effect. This can happen up to 3 times.\n- If a player with the Spored status effect dies by something other than lynching, they will instead survive and become a Sporetouched (Post 402-B).\n- You know the identities of all Sporetouched, and may send them anonymous messages at any time. They will know that the Infested sent them this message.\n- If there is a Sporetouched alive, you will be incapable of attacking.");
		
		e.addField("Goal:", "Kill all who oppose you, or have another Sporetouched win the game.");
	});

	register_role(["token_vendor", "tokenvendor", "token", "403"], "Neutral", "Token Vendor", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 403");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Give a player a token each night.\n- Choose to don a bulletproof vest.");

		e.addField("Attributes:", "- A player with a token may choose to play their token at any point during the day. They may choose to play the token on themselves or another player.\n- The identity of the player who plays a token will not be revealed, but the fact that a token has been played will be revealed.\n- If a player dies with a non-played token, you may choose to give the token to another player, but this will not count towards your win condition.\n- You will receive a list of tokens that you need to give out to fulfill your win condition at the start of each night.\n- You have two bulletproof vests to use throughout the game. You may don a vest the same night you give out a token.\n- You may give yourself one token throughout the game.");
		
		e.addField("Goal:", "Give out one of each of your distinct tokens.");
		
		e.addField("Token List:", "Immunity Token - Target cannot be voted for the rest of the day.\nDisfranchisement Token - Target cannot vote for the rest of the day.\nTriple Token - Target's vote counts as 3 for the rest of the day.\nPressure Token - Control the votes of another player for the rest of the day.\n(Used in games w/ trial system) Acquittal Token - Target will immediately be voted innocent (can only be played when someone is on the stand).\n(Used in games w/ plurality system) Bar Token - In order to be lynched, target must acquire 3/4 of the votes. If target has majority at the end of the day, but does not reach 3/4 of the votes, then the person with the second-most votes will be lynched instead.");
	});

	register_role(["missingno", "404"], "Town", "MissingNo", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 404");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Delete a non-Town role");

		e.addField("Attributes:", "- Anybody whose role is deleted dies");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["wm_revolutionary", "wmrevolutionary", "revolutionary", "405"], "Town", "WM Revolutionary", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 405");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hold an anonymous council each night.");

		e.addField("Attributes:", "- Each night you are alive, all other players in the game will be able to send a vote to your council. You may also vote in your council.\n- Players may cast their vote for any other living player in the game, or they may abstain.\n- If a majority of the votes are cast for one player, you will attack them. You will know the name of the player you attack.\n- If a majority of the votes abstain, you will attack no one.\n- Votes for you will not count for or against the majority in your council.\n- When you attack a player, you will gain control and roleblock immunity.\n- If a player does not send in a vote, they will automatically abstain.\n- If there is a tie, you will be the final deciding vote. If you voted for a target that is not one of the majority votes, you will attack no one.\n- If you kill a member of the Town, you will no longer hold your councils.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["late_bloomer", "latebloomer", "406"], "Neutral", "Late Bloomer", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 406");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- On day 4, you will become your actual role. This will be announced to the town.\n- You may choose to don one bulletproof vest granting you Basic Defense before you become your actual role.");
		
		e.addField("Goal:", "Become your actual role and fulfill its win condition.");
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
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["conspirator", "408"], "Neutral", "Conspirator", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 408");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Plan a conspiracy between three players during the night.");

		e.addField("Attributes:", "- If one of the players mentions the name of any of the other players you planned a conspiracy about, you will become frantic. This does not trigger upon voting.\n- When you are frantic, you will force the third player to choose to kill by the end of the day. This player will be dealt a Powerful attack at the end of the day. If they do not choose a player, one will be randomly selected.\n- Your conspiracy only stands that day after you plan it.\n- You may not plan a conspiracy about yourself.");
		
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
		e.setDescription("Post 412");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Invite up three people to your nightly comedy show during the day.\n- Tell a hilarious joke.");

		e.addField("Attributes:", "- Each day, you may choose three players to invite to your comedy show at night.\n- You must send the moderator the joke you will tell at your show before/at the same time as you invite people.\n- All three of your audience members will receive your joke at the start of the night. This will not affect their night action.\n- Your audience members will give either a positive or negative review about your joke. These will be anonymous.\n- You will receive the number of positive and negative reviews you received at the end of the night.\n- You have two bulletproof vests that grant you Basic Defense that you may use throughout the game.\n- You may not put yourself in your own audience.");
		
		e.addField("Goal:", "Receive eight positive reviews.");
	});

	register_role(["less_annoying_chess_grandmaster", "lessannoyingchessgrandmaster", "lagcpimrs", "chess", "413"], "Town", "Less Annoying Grandmaster Chess Player In My Reccomended Section", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 413");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Power", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to duel via. Blitz chess (3m) on lichess.org during the day.");

		e.addField("Attributes:", "- During the following night, you will... well, duel the chosen player in a Blitz chess match (3m) on lichess.org. This somehow takes up the night, roleblocking them.\n> If you win this match, you will deal a Powerful attack to them.\n> If you lose this match, you are yourself dealt a Powerful Attack.\n> If it's a draw, do another match, 5head.\n- The link to the chess match's replay will be sent in the graveyard w/ the message of whomever died in the duel, if any.\n- This role may be rerolled into another Town Killing role for free. You're welcome.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["city_planner", "cityplanner", "planner", "414"], "Mafia", "City Planner", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 414");

		e.addField("Alignment", "Unique Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player and find out what alignment they are. If they are part of the Florae, trample them.- Each night, be notified how many Florae roles are currently alive.");

		e.addField("Attributes:", "- At least one Florae must be in the game for this to roll.\n- Posts 149-166, Daffodil, Hydrangea, Iris, Sage, Thyme, Azalea, Dahila, Nettle, Wisteria, Calendula, Lavender, Lily, Mint, Rosemary, Dicentra, Gardenia, Nightshade and Phlox count as Florae roles.\n- Florae will know that a City Planner is in the game.\n- After eliminating the Florae, the Mafia can make up to two factional kills per night (two members make two kills).");
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["voodoo_master", "voodoomaster", "voodoo", "415"], "Coven", "Voodoo Master", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 415");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use your voodoo doll to curse people.");

		e.addField("Attributes:", "- At night, use your voodoo doll to curse someone. This gives them ***any*** non-killing negative effect.\n- You can kill your target, but this has a 2 night cooldown.\n- With the Necronomicon, you can kill a target and curse another target every night.");
		
		e.addField("Goal:", "Coven Goal");
	});

	register_role(["landlord", "416"], "Mafia", "Landlord", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 416");

		e.addField("Alignment", "Unique Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player and find out what alignment they are. If they are part of the Town but not the Florae, trample them.\n- Each night, be notified how many non-Florae Town roles are currently alive.");

		e.addField("Attributes:", "- At least one non-Florae Townie must be in the game for this to roll.\n- Posts 149-166, Daffodil, Hydrangea, Iris, Sage, Thyme, Azalea, Dahila, Nettle, Wisteria, Calendula, Lavender, Lily, Mint, Rosemary, Dicentra, Gardenia, Nightshade and Phlox count as Florae roles.\n- Non-Florae Townies will know that a Landlord is in the game.\n- After eliminating the non-Florae Townies, the Mafia can make up to two factional kills per night (two members make two kills).");
		
		e.addField("Goal:", "Mafia Goal");
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
		
		e.addField("Goal:", "Town Goal");
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
		e.setDescription("Post 420");

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
		
		e.addField("Goal:", "Coven Goal");
	});

	register_role(["savior", "423"], "Town", "Savior", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 423");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convince someone to abandon their evil ways and join the Town.");

		e.addField("Attributes:", "- You may visit someone at night and convert them to the town. They will keep their abilities.\n- You may only do this twice.\n- If you target someone who has already won, or someone with a permanent night chat, your ability will fail and you will get your charge back.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["chronomancer", "chrono", "424"], "Town", "Chronomancer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 424");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a target and delay their death for two nights.");

		e.addField("Attributes:", "- Target will know if their death has been delayed.\n- Attacks coming from roles that imprison their targets cannot be delayed.\n- You may delay your own death once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["clairvoyant", "clair", "425"], "Town", "Clairvoyant", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 425");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Read the mind of a player at night to discover if they are thinking about something.");

		e.addField("Attributes:", "- You may choose a player to read their mind and a word. You will discover if the player has the given word in their role card's abilities and attributes.\n- You may read the minds of the players five times.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["gargoyle", "426"], "Rock", "Gargoyle", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 426");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Aura (*You have no defense if there's four or more Rocks alive, Basic if there's three, Powerful if there's two, and Invincible if there's only one.*)", true);

		e.addField("Abilities:", "- Take flight each full moon.\n- Plummet someone after you've taken flight, dealing them a Basic attack.");

		e.addField("Attributes:", "- You gain one charge of plummet each time you take flight.\n- You may multitask, and you may plummet as many times in one night as you have charges.");
		
		e.addField("Goal:", "Rock Goal");
	});

	register_role(["peashooter", "427"], "Plant", "Peashooter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 427");

		e.addField("Alignment", "Unique Plant Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a pea at someone or produce a sun.");

		e.addField("Attributes:", "- You may deal a basic attack to a player. Costs 1 sun.\n- You may deal a powerful attack to a player. Costs 2 sun.\n- You may upgrade to a Repeater, giving you 1 free basic. You may still use your normal sun-costing attacks. Costs 3 sun.\n- You may upgrade to a Gatling Pea, giving you 2 free powerful attacks. You may still use your normal sun-costing attacks. Costs 4 sun.");
		
		e.addField("Goal:", "Plant Goal");
	});

	register_role(["augur", "428"], "Coven", "Augur", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 428");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, choose to enlighten the coven the following night.\n- If not enlightened, attack a player.");

		e.addField("Attributes:", "- When enlightened, coven members temporarily gain effects of the Necronomicon.\n- On nights you attack, you temporarily lose your defense.\n- You may enlighten four times.\n- If you gain the Necronomicon, you may choose a member of the coven to pass it to. You do not gain any benefits from it.");
		
		e.addField("Goal:", "Coven Goal");
	});

	register_role(["shade", "429"], "Neutral", "The Shade", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 429");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Shroud someone during the night.");

		e.addField("Attributes:", "- A shaded player will receive a basic attack the next night.\n- You may visit a previously shaded player to deal a powerful attack.\n- If there are 4 or less players, your attacks become powerful and unstoppable respectively.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["blood_finder", "bloodfinder", "430"], "Town", "Blood Finder", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 430");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone at night to see if they have killed someone.");

		e.addField("Attributes:", "- People who kill someone will be covered in blood. It is assumed there is no water to clean off said blood.\n- If someone tried to kill someone but failed, they will have plans detailing who they wanted to kill lying around.\n- You will know if someone is covered in blood, or who they planned to kill.\n- Someone can have multiple plans if they fail multiple times.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["guardian", "431"], "Neutral", "Guardian", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 431");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Variable)", true);

		e.addField("Abilities:", "- Protect someone at night.");

		e.addField("Attributes:", "- People you protect will have Powerful defense.\n- If you protect someone, you then get 1 extra vote, 1 level of defense, and can defend 1 more person per night.");
		
		e.addField("Goal:", "Successfully protect someone.");
	});

	register_role(["collector", "432"], "Coven", "Collector", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 432");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic (Powerful)", true);

		e.addField("Abilities:", "- During the full moon, you may choose to use a relic on somebody.");

		e.addField("Attributes:", "- Using a relic on a coven member will grant them Powerful defence and Investigation Immunity.\n- Using a relic on a non-coven member will remove their Defence and Roleblock them.\n- You may not use a relic on yourself.\n- With the Necronomicon the relic will deal a basic attack on a non-coven member.");
		
		e.addField("Goal:", "Coven Goal");
	});

	register_role(["mutant", "433"], "Neutral", "The Mutant", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 433");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Kill someone at night and protect yourself.");

		e.addField("Attributes:", "- You can choose between 3 forms every night.\n> Assault Form: Unstoppable Attack, Basic Defense, you will be unable to act the next night. You will have Basic Defense the day you rest.\n> Dual Form: Powerful Attack, Basic Defense.\n> Shield Form: No Attack, Invincible Defense.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["slime", "434"], "Neutral", "Slime", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 434");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Move where you are in the player list.");

		e.addField("Attributes:", "- Whenever a non-Slime player adjacent to you dies, they will become a Slime instead.\n- Once per game, you may secretly move to a new spot on the player list for 1 night.\n- Anyone who is adjacent to your new spot and dies that night will become a Slime.\n- You know all Slimes.");
		
		e.addField("Goal:", "Have a majority of living players be a Slime.");
	});

	register_role(["void_manipulator", "voidmanipulator", "void_man", "voidman", "435"], "Neutral", "Void Manipulator", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 435");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Make a black hole at a house.");

		e.addField("Attributes:", "Making a black hole at someone's house creates a Powerful rampage.\n- Your visit is astral.\n- Making a black hole on yourself gives you Powerful defense, and you deal a Powerful attack to anyone who visits you.\n- You can only make a black hole on yourself twice.\n- Anyone who you kill will have their role lost to the void and it will not be shown.");
		
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
		
		e.addField("Goal:", "Mafia Goal");
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
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["moss", "440"], "Town", "Moss", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 440");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grow on a player's house, giving them basic defense until they are attacked.");

		e.addField("Attributes:", "- Once you successfully protect against one attack, all your protection is removed.\n- Players that were mossed first receive priority when protecting from attacks.\n- You only visit players when initially first spreading moss.\n- You cannot target yourself.");
		
		e.addField("Goal:", "Town Goal");
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

		e.addField("Attributes:", "- At the start of the game, draw 5 cards. You can not have 2 of the same card in your starting hand.\n- You have 2 health. Any action that would kill you (besides lynching) makes you lose 1 health.\n- You can play up to 2 cards per night.\n- At the start of the night, draw a card.\n- Twice per game, you can draw 2 cards of your choice at night.");

		e.addField("Cards:", "Attack! - Deal a powerful attack to a player.\nBlock! - Give yourself powerful defense at night.\nHeal! - Give yourself 1 HP (can only get 2 per game).\nInvestigate! - Find out someone's exact role.\nFrenzy! - Deal a basic attack to your target and all who visit them.\nPersuasion! - Add a vote to a player during the day. This vote can not be changed. This vote will be attributed to \"a card.\" This card can only be used during the day.");
		
		e.addField("Goal:", "NK Goal");
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
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["barterer", "446"], "Neutral", "Barterer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 446");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone during the day to buy their ability at night.");

		e.addField("Attributes:", "- You start the game with a bartering chip.\n- During the day, select someone. You learn their ability at the start of the night.\n- You can choose to trade with them, taking their ability and giving them the ability of the bartering chip.\n- If you take the ability of an informed minority, the informed minority will be informed you are on their team, but you will not join their chat.\n- People who have their ability traded for the bartering chip will keep their original win condition.");
		
		e.addField("Goal:", "Complete the goal of the ability you have.");
	});

	register_role(["butcher", "447"], "Neutral", "Butcher", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 447");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Butcher someone at night to collect meat.");

		e.addField("Attributes:", "- Killing someone gives you a piece of meat.\n- If your target could possibly be part of the Animal faction, you will instead get double the meat.\n- You can use meat to get bonuses.");

		e.addField("Bonuses from meat:", "Upgrade attack by 1 stage for a night = 1 Meat\nUpgrade defense by 1 stage for a night = 1 Meat\nAttack one extra time = 2 Meat\nPermanent +1 Meat per kill = 2 Meat\nPermanent attack upgrade = 3 Meat (Max = Unstoppable)\nPermanent defense upgrade = 3 Meat (Max = Invincible)\nPermanent extra vote = 3 Meat\nPermanent +1 attack per night = 3 Meat");
		
		e.addField("Goal:", "NK Goal");
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
		e.addField("Defense", "Invincible (Variable)", true);

		e.addField("Abilities:", "- Wear away to kill people.");

		e.addField("Attributes:", "- You start with invincible defense.\n- If someone attacks you, you lose a level of defense and gain a level of attack.\n- You can visit yourself to erode yourself. If you erode yourself and someone attacks you, your self-erode will fail.\n- It is assumed that the highest level attacker attacks first.\n- If nobody visits you and you do not attack at night, you will gain a level of defense and lose a level of attack.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["tower", "450"], "Town", "Tower", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 450");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select yourself at night to heal anyone that visits you, or select someone to shoot.");

		e.addField("Attributes:", "- You have one bullet.\n- Roleblock Immunity");
		
		e.addField("Goal:", "Town Goal");
	});
};
