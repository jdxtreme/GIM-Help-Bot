module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["demon", "2401"], "Other", "Demon", (e) =>
	{
		e.setDescription("Post 2401");

		e.addField("Alignment", "Token Creature — Demon", true);
		e.addField("Attack", "\"6\"", true);
		e.addField("Defense", "\"6\"", true);

		e.addField("Abilities:", "- Attack during your combat phase.\n- Block during your opponents' combat phases.\n- At the beginning of your upkeep, sacrifice another creature. If you can't, this creature deals 6 damage to you.");

		e.addField("Attributes:", "- Flying (This creature can't be blocked except by creatures with flying and/or reach.)\n- Trample (This creature can deal excess combat damage to a player or planeswalker it's attacking.)\n- Black");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["goblin_attack_force", "goblinattackforce", "goblin", "attack", "force", "gaf", "2402"], "Other", "Goblin Attack Force", (e) =>
	{
		e.setDescription("Post 2402");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "\"2300\"", true);
		e.addField("Defense", "\"0\"", true);

		e.addField("Attributes:", "- 4 stars\n- If this card attacks, it is changed to Defense Position at the end of the Battle Phase, and its battle position cannot be changed until the End Phase of your next turn.\n- Earth");

		e.addField("Goal:", "Reduce your opponent's LP to 0.");
	});

	register_role(["the_coffin", "thecoffin", "coffin", "2403", "2403a"], "Neutral", "The Coffin", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2403A\n*Not you, silly. You're dead!*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill someone, and plan their funeral.\n- Send out a squad of mourners to help a Mourning cope with grief.\n- Once per game, make a dead player whos not a REF with a factional chat recall their Memories, reviving them, and changing their role to Mourner.");

		e.addField("Attributes:", "- The player you plan the funeral of's role will show up as \"Buried\", and their last will will be unaccessible. You will know their actual role and last will.\n- Anyone who visits your target on the night they die becomes Mourning. You know all Mourning targets at all times.\n- Your squad of mourners will roleblock your target that night, then convert them to a Mourner the following day. If they are a REF with a factional chat, your squad will deal a Powerful Attack to them instead of converting.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["mourner", "2403b"], "Neutral", "Mourner", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2403B*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone.");

		e.addField("Attributes:", "- You will die the night after you are converted. This attribute is nullified if you were converted by recalling your memories.\n- You have a factional chat with The Coffin and all other Mourners.");

		e.addField("Goal:", "See The Coffin win the game. You can win while dead.");
	});

	register_role(["rolemaker", "2404"], "Neutral", "Rolemaker", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2404");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Create a rolecard and an NPC each night, you can name the NPC similar to Summoner. The NPC will be spawned at the start of the next day with their rolecard you made. You can't control your NPCS though, they will be controlled by the host. The host can deny any rolecard you make if it's too overpowered or makes your goal too easy to complete. You should attempt to make the rolecards around the same strength as a Town role such as Cameraman (2351).");

		e.addField("Attributes:", "- If you die, your NPCs continue to be alive.");

		e.addField("Goal:", "Create three NPC roles with different factions. Make sure at least one wins and one loses. You can win while you're dead.");
	});

	register_role(["the_family_twins", "thefamilytwins", "family", "twins", "tft", "ft", "2405", "2405a"], "Other", "The Family Twins", (e) =>
	{
		e.setDescription("Post 2405A\n*You're not a real family unless you have a landline.*");

		e.addField("Alignment", "Family (Twin)", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make someone part of your family, converting them to The Grandma, The Father or The Brother. You will always convert them to the Grandma if there isnt one, then the Father if there isnt one, and finally The Brother if there isnt one. Maximum of 4 members in your Family you included.\n- Make someone visit your house, roleblocking them.");

		e.addField("Attributes:", "- Your Family does not count as an actual faction and this role spawns in Neutral (Killing) slots.\n- Your Family has a Factional Kill and a Factional Chat.");

		e.addField("Goal:", "See only the Family remain at the end of the game. (REF goal)");
	});

	register_role(["grandma", "2405b"], "Other", "The Grandma", (e) =>
	{
		e.setDescription("Post 2405B");

		e.addField("Alignment", "Family (Grandma)", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Alert the Family of Family Game Time, roleblocking them all tonight and granting them Powerful Defense, then allowing them to perform their night ability twice the following night. 1 use.");

		e.addField("Goal:", "See only the Family remain at the end of the game. (REF goal)");
	});

	register_role(["father", "2405c"], "Other", "The Father", (e) =>
	{
		e.setDescription("Post 2405C");

		e.addField("Alignment", "Family (Father)", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Attributes:", "- Your FK is Powerful and kills one of your target's visitors as well.");

		e.addField("Goal:", "See only the Family remain at the end of the game. (REF goal)");
	});

	register_role(["brother", "2405d"], "Other", "The Brother", (e) =>
	{
		e.setDescription("Post 2405D");

		e.addField("Alignment", "Family (Brother)", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cherish your family's memories. You must pick a member of your Family. You will scare away all their visitors that didnt visit them last night.");

		e.addField("Goal:", "See only the Family remain at the end of the game. (REF goal)");
	});

	register_role(["the_friendship_worm", "thefriendshipworm", "friendship", "worm", "tfw", "fw", "2406"], "Town", "The Friendship Worm", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2406\n*Now I should make it clear from the outset that while I am no longer officially affiliated with the OK Stop! Organization I am still totally within my rights to continue using their learning materials and brandings, okay?*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pick two players at night and check their friendship.");

		e.addField("Attributes:", "- Players have a good friendship if they win with eachother, and a bad one if they dont.\n- If they have a bad friendship, you will attack one of them at random, prioritizing the player whose death would be the least harmful to Town.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["the_transport_man", "thetransportman", "transport", "man", "ttm", "tm", "2407"], "Town", "The Transport Man", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2407\n*That's nothing. Just a rock. Not transport.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transport two players at night. They will learn who they were transported with.\n- Give someone means of transport, Astralizing their visit and giving them all forms of immunities.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["elect-tracey", "electtracy", "elect", "tracy", "et", "2408"], "Neutral", "Elect-Tracey", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2408\n*Just boring old guts I'm afraid. Oh wait, there are some wires. So why don't we just call this one a maybe.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Electrify someone's tools, learning their role. You may improve upon the rolecard however you want as long as the Host accepts.");

		e.addField("Attributes:", "- Your target gains their new rolecard at the start of the following day.");

		e.addField("Goal:", "Affect the game in some way. Host decides if you win.");
	});

	register_role(["helicopter", "2409"], "Neutral", "Helicopter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2409\n🚁");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone each night.\n- Fire a missile at someone, dealing a Rampage Powerful attack. (2 Uses)");

		e.addField("Attributes:", "- You must spend N1 taking off and cannot kill. At the start of D2, the entire town will be notified who you are. If you are roleblocked, the entire process is delayed by one night.\n- After you take off, you cannot be targeted. You also cannot vote, be voted, whisper, or be whispered. You can still talk in day chats because it'd be boring otherwise.\n- All Protective abilities will supply Anti-Air to their target. All roles with killing abilities gain a two-use Anti Air gun at their own house that can be used in conjunction with their normal ability. If you visit someone who has an active Anti-Air gun twice, you will die.\n- You do visit your target, and can die as a result.");

		e.addField("Goal:", "Kill everyone who would oppose you AND react to at least 30 messages with 🚁");
	});

	register_role(["5d_explorer_and_multiverse_timetraveler", "5dexplorerandmultiversetimetraveler", "5d", "explorer", "multiverse", "timetraveler", "5eamt", "5emt", "2410"], "Neutral", "5D Explorer and Multiverse Timetraveler", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2410");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Shoot someone during the day or night.\n- Send someone back in time to create a new timeline at any time, processes immediately.");

		e.addField("Attributes:", "- You may use both abilities in one phase. You, however, can only use your second ability once per phase across all timelines.\n- When sending someone back in time, you select a phase to base a new timeline off of. You remove that player from the current timeline, then move them into the other one. They are now 2 players in that timeline.\n- Timelines act as separate games, but your ability will see them all simply as different timelines.\n- Until you are dead in every timeline, a game that would normally in one timeline will not. After that, timelines can end separately. Additionally, your second ability has a one phase cooldown for each timeline you are dead in.\n- You can move one player to another timeline to create another timeline.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["every_town_investigative_in_salem", "everytowninvestigativeinsalem", "every", "town", "investigative", "in", "salem", "etiis", "2411"], "Town", "Every Town Investigative‎ in Salem", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2411");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You have the ability of every Town Investigative role (except this one) in <#970046125065265202> and can multitask.");

		e.addField("Attributes:", "- The number of votes you have is the same as the number of Town Investigative roles in <#970046125065265202>.\n- If you would otherwise die, instead a random Town Investigative part of you dies, and you lose that vote. Yes, the host has to keep track of this. If you somehow run out of Town Investigative roles, you actually die.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["2412"], "Other", "Every || ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ || ‎ in Salem", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2412\nThere are no || ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ || ‎ roles. This does nothing.");
	});

	register_role(["yamask", "2413"], "Pokemon", "Yamask", {subCat: "Base"}, (e) =>
	{
		e.setDescription("Post 2413");

		e.addField("Alignment", "Pokemon Base", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Curse: Choose one player to haunt, placing a Curse on them. (∞ uses)\n- Evolve: Evolve into Cofagrigus (2423). May only be used if at least two players are in the graveyard.\n- Regional Evolve: Evolve into Runerigus (2424). May only be used if at least three players are in the graveyard with one of them being Cursed and if you yourself are also Cursed.");

		e.addField("Attributes:", "- Night Shade: Your visits use Astral. Whenever a fellow Pokemember visits a Cursed target, their visit will use Astral as well.\n- Mummy: Whenever a Pokemember is lynched, all Cursed players are roleblocked the following night. Players will be aware they were Cursed. This attribute applies post-mortem, but not after evolution.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["imaginary_friend", "imaginaryfriend", "imaginary", "friend", "if", "2414"], "Neutral", "Imaginary Friend", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2414");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- If this role would roll, the player who would roll it gets a new role and a willing spectator is secretly added to the game as a hidden player with this role that's still a spectator. The player never sees that they would've gotten this role.\n- You don't count towards majority, you aren't ever publicly displayed as a player, you can't whisper or vote, and you aren't a legal target for abilities or game actions.");

		e.addField("Attributes:", "- Set a player's imagination free each night. As you use this ability, you may choose at least five roles with the same alignment and subalignment as your target. If you do, your target will be converted to one of those roles at random.");

		e.addField("Goal:", "Help players you convert have more fun!");
	});

	register_role(["killer_killer_killer", "killerkillerkiller", "killer", "kkk", "2415"], "Neutral", "Killer Killer Killer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2415");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night you may visit a player. If they have killed a player who could kill or had somehow gained the ability to kill and used it, you will kill them.");

		e.addField("Goal:", "Kill the majority of players who have either killed a killing role or killed someone who killed.");
	});

	register_role(["rasen_why_do_you_do_this.", "rasenwhydoyoudothis.", "rasen_why_do_you_do_this", "rasenwhydoyoudothis", "rasen", "why", "rwdydt", "2416"], "Neutral", "rasen why do you do this.", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2416");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack A Player Each Night\n- Redirect A Player To A Player Of Its Choice Each Night");

		e.addField("Attributes:", "- Roleblock, Redirect, And Detection Immune\n- May Multitask\n- Each Full Moon It Can Instead Attack Two Players And Redirect Two Players To Players Of Its Choice\n- May Appear To Be A Role Of Its Choice To All Investigative Effects Of Any Kind At All Times\n- May Change The Role It Appears To Be At Any Time And That That Role Is A Random Town Role If It Has Not Yet Chosen One");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["lord", "2417"], "Town", "Lord", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2417");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Your vote counts for 100 votes.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["fiend", "2418"], "Neutral", "Fiend", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2418");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night you may choose to call in a bomb threat. The town will be given the same message as a FM Bomber's fuse going off, but there will be no bomb.\n- At night you may attempt to guess the next day's lynch target. The second time you successfully predict a lynch, your target will flip as role 289 \"Rioter\" and have the same death effect.");

		e.addField("Goal:", "Predict the next day's lynch target twice.");
	});

	register_role(["turncoat", "2419"], "Neutral", "Turncoat", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2419");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night you may choose one player, their vote will count as 0 for the following day.");

		e.addField("Attributes:", "- You start off aligned with Town or against them.\n- Every day your alignment changes to be with or against the Town.");

		e.addField("Goal:", "Be aligned with the winning faction on the day the game ends.");
	});

	register_role(["halberdier", "2420"], "Town", "Halberdier", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2420\n*Statistics show that people are much more likely to listen to you if you're holding a big metal stick*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Patrol outside a player's house, seeing how many people visit your target and blocking attackers.\n- Guard a player's house, preventing all visits to your target.\n- Defend a player's house, killing all visitors to your target.");

		e.addField("Attributes:", "- You grant your target Powerful defense against all direct attacks no matter which ability you use.\n- Attackers are not included in the visitor count when patrolling, however you will know how many attackers you block.\n- You cannot block players with a priority of 3 or less according to the list in rasen-rules\n- You may target yourself once.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["cope_tbh", "copetbh", "cope", "tbh", "ct", "2421"], "Mafia", "Cope tbh", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 2421");

		e.addField("Alignment", "Mafia Espionage", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fucking shank someone.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["get_rotated,_idiot", "getrotated,idiot", "get_rotated_idiot", "getrotatedidiot", "get", "rotated,", "rotated", "idiot", "gri", "2422"], "Neutral", "Get rotated, idiot", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2422");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may choose to scramble everyone's attributes\n- You may choose to swap two players' positions on the rolelist\n- You may rotate the town, causing all attack and defense values to invert");

		e.addField("Attributes:", "- May only spawn via reroll\n- If you got rerolled into a shittier role, have a 50% chance to spawn as this. (not that this would ever be enforced)");

		e.addField("Goal:", "Your original role's goal");
	});

	register_role(["cofagrigus", "2423"], "Pokemon", "Cofagrigus", {subCat: "Evolved"}, (e) =>
	{
		e.setDescription("Post 2423");

		e.addField("Alignment", "Pokemon Evolved", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Curse: Choose a player to haunt, placing a Curse on them. You can multitask one other ability with this one. (∞ uses)\n- Scary Face: Stand at the door of a player's house tonight. All people who tried targeting them tonight will instead visit themselves. If used on a non-Pokemon, the target will also visit themselves. (3 uses)\n- Destiny Bond: Choose a player. When you die, you'll deal them an astral Powerful attack the following night post-mortem. You'll bypass protective effects. (1 use)");

		e.addField("Attributes:", "- Night Shade: Your visits use Astral. Whenever a fellow Pokemember visits a Cursed target, their visit will use Astral as well.\n- Crafty Shield: You have a coffin shield which grants you Basic defense, absorbed upon being attacked.\n- Mummy: Whenever a Pokemember is lynched or otherwise dies, all Cursed players are roleblocked the following night. This attribute applies post-mortem.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["runerigus", "2424"], "Pokemon", "Runerigus", {subCat: "Regional"}, (e) =>
	{
		e.setDescription("Post 2424");

		e.addField("Alignment", "Pokemon Regional", true);
		e.addField("Attack", "Powerful (Overkill)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Curse: Choose two players to haunt, placing a Curse on them. You can multitask one other ability with this one. (∞ uses)\n- Destiny Bond: Choose a player. When you die, you'll deal them an Powerful attack the following night. You'll bypass protective effects. (3 uses)\n- Memento: Revive a dead Pokemember during the night. They will be purged and immune to lynching the next day. They'll also regain their uses of any limited-use abilities. (1 use)");

		e.addField("Attributes:", "- Night Shade: Your visits use Astral. Whenever a fellow Pokemember visits a Cursed target, their visit will use Astral as well.\n- Hex: If all alive players are Cursed, including fellow Pokemembers, the Pokemon win the game and you deal an Overkill attack to all who oppose the Pokemon.\n- Wandering Spirit: All of your abilities may be used post-mortem. All attributes will still be in effect. ");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["conscript", "2425"], "Sentry", "Conscript", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2425");

		e.addField("Alignment", "Sentry Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stand guard at an unauthorized target's house during the night. 1 Use.\n- Shoot an authorized target during the night. 1 Use.");

		e.addField("Attributes:", "- When standing guard at an unauthorized target's house, you will attack one of their visitors. Evils & Neutrals are prioritized first.\n- If you successfully kill a player who can't win with the Sentries, you will gain an extra use of your second ability.");

		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["librarian", "2426"], "Sentry", "Librarian", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2426");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Open a library during the day. 1 Use.");

		e.addField("Attributes:", "- When you open the Library, up to three authorized players may enter. First come, first serve.\n- \"Evil\" roles may announce a claim to the host in their private channel upon entering the library.\n- At the end of the day, you will gain a list of three roles for each player who enters. The list will contain the player's actual role, and must have at least one Sentry role (the \"Claim\" of Evils if they announced one), and one non-Sentry role. All roles listed must be able to spawn in the current game.");

		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["digital_librarian", "digitallibrarian", "digital", "librarian", "dl", "2427"], "NTF", "Digital Librarian", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2427");

		e.addField("Alignment", "NTF Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. Learn who they targeted on every night before this one.\n- After participating in a secured node, during the day, select a player and read a book on their history, learning what roles they rerolled out of, or the lack of any if applicable.");

		e.addField("Attributes:", "- Your first ability does not tell you who your target is targeting tonight.\n- Your second ability will be in order, but not specify if it was a global or same-slot reroll. You also only learn roles they rerolled, not the one they kept.");

		e.addField("Goal:", factions.NTF.goal);
	});

	register_role(["master_librarian", "masterlibrarian", "master", "librarian", "ml", "2428"], "Town", "Master Librarian", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2428");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a book from your selection to add to your collection. You have four types of books: science books, military manuals, storybooks and mysteries.\n- Give a target a book from your collection during the day. Depending on the type of book, they'll gain a certain buff. The target will be unaware you gave them a book, and will not realize they got buffed whatsoever.\n> Science Books: The target gains scientific knowledge and gains a one-time basic Defense.\n> Military Manuals: The target gains military knowledge and their next visit will also Basic attack their target. The cause of death will appear to be from whatever their role is. \n> Storybooks: The target will become creative and their visits will permanently use Astral.\n> Mysteries: The target will know all the twists. If the target is investigative, their investigation will be immune to framing and detection immunity permanently.");

		e.addField("Abilities:", "- Throw a book from your collection at someone during the night. The target won't know they got a book thrown at them. Has a different effect based on what book you use.\n> Science Books: The target's science knowledge will be erased and their Defense is set to none.\n> Military Manuals: The target forgets why they wanted to fight people and their Attack is set to none.\n> Storybooks: The target gets distracted with the pictures and is roleblocked through immunity.\n> Mysteries: The target's attributes mysteriously vanish and won't apply tomorrow night.");

		e.addField("Attributes:", "- Once per game, at any time, you may add three random books to your inventory. If you do this, you'll be dealt an Overkill attack three days later because they'll be past their return date.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["worst_vigilante", "worstvigilante", "worst", "vigilante", "wv", "2429"], "Neutral", "Worst Vigilante", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2429");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If you have rolled this role, there is a Mayor in the game. If this rolls without a Mayor, forcespawn one.\n- You have three bullets that deal Basic attacks. You can’t shoot on Night 1.");

		e.addField("Goal:", "Shoot the Mayor.");
	});

	register_role(["chairman", "2430"], "Sentry", "Chairman", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2430");

		e.addField("Alignment", "Unique Sentry Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Authorize an investigation on 1 player during the day. You may authorize an additional target for every 10 players in the game, living or dead, rounded. Mandatory or random.\n- Extend the day meeting during the day. 1 Use.\n- Select an heir for your role at any time.");

		e.addField("Attributes:", "- Your Authorized targets will be revealed each night.\n- You may not authorize yourself as a target.\n- Extending the day meeting will replace the following night with yet another Day Phase, though it will still be called a night phase. Similarly, it will be proceeded by yet another day phase, however after this day phase ends it will finally be night.\n- You have one secret vote to use at your disposal, counting as enough votes to instantly lynch a person. You may not vote nightfall with it.\n- When you die, your heir will be promoted to a Chairman (2430) if they are a Sentry. Otherwise, it will be a random Sentry. They may not request warrants.\n- You may use your abilities in conjunction with each other.\n- Conversion Immunity.");

		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["masochist", "2431"], "Neutral", "Masochist", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2431\n*It's not sexual, I swear.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "\"Hellbent\"", true);

		e.addField("Abilities:", "- Redirect one player to you tonight. If they have a killing ability, or are an REF member with a factional kill, they'll just use that on you, with killing abilities taking priority. They won't be told they were redirected.\n- Frame yourself as any role in the game tonight. (3 uses)");

		e.addField("Attributes:", "- (Modified) Hellbent Defense: You cannot die. Instead, you have a Damage Zone. Each time you're attacked at night, depending on the attack tier, you'll take an amount of damage. Basic and below will deal 1 damage, Powerful will deal 2 damage, Unstoppable will deal 3 damage and Overkill+ and lynching will deal 4 damage. Once you've taken 8 damage, you will die. For technical purposes, this isn't an attribute, just an explanation.\n- You're immune to any negative effects that occur alongside attacks, such as an attack which would roleblock and attack or Firefly (319)'s attack.\n- You cannot publicly claim as your role, as that would take away from the pleas- I mean, take away from the point. Publicly claiming or implying your role deals 2 Overkill attacks immediately. Once you've taken at least 5 damage, this attribute no longer applies.\n- This role cannot spawn unless 3+ killing roles are in the game. Factions with factional kills count as one role for this requirement.\n- You may multitask.");

		e.addField("Goal:", "Take 5+ damage without dying, then survive until the end of the game.");
	});

	register_role(["sadist", "2432"], "Neutral", "Sadist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2432\n*It's just a morbid interest in pain!*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Visit up to two players tonight, and set their defense to Vulnerable for the night.");

		e.addField("Attributes:", "- You have Basic defense for the first time you get attacked.\n- Once you complete your goal, all the players who you visited before will have their defense set to Vulnerable permanently.\n- You may not self-target.");

		e.addField("Goal:", "Visit six unique players without causing any deaths.");
	});

	register_role(["replacement_defect", "replacementdefect", "replacement", "defect", "rd", "2433"], "Neutral", "Replacement Defect", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2433");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, choose one of your attributes and any number of players. That attribute's replacement effect no longer applies to that player (e.g. if you choose attribute 2 and only player 4, player 4 can whisper as normal but other whispers to player 4 still become votes).");

		e.addField("Attributes:", "- If a player would learn a player's name in night feedback, they learn that player's role instead.\n- If a player would whisper to a player, they vote for that player instead.\n- If a player would die while they have their original role, they're converted to a random role of the same alignment instead but they keep their old role's attributes.\n- If a player would be roleblocked, a random event from events or old-events-archive is put into play instead.\n- If a player would use a night ability on a player, that night ability is used on that player as well as that player's closest living neighbours instead.");

		e.addField("Goal:", "Get converted to another role and win as that role.");
	});

	register_role(["gacha_whale", "gachawhale", "gacha", "whale", "gw", "2434"], "Neutral", "Gacha Whale", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2434");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You start the game with $1000.\n- At any time, you may pay $100 dollars and choose ability, attribute, attack and defense values, or goal. You will receive the corresponding aspect from a random role.\n- Each subsequent purchase of the same aspect costs an additional $20.");

		e.addField("Goal:", "Buy a goal and complete it.");
	});

	register_role(["loner", "2435"], "Neutral", "Loner", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2435\n*I am no longer human.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Take your last dose of antidepressants that you have left at night. This will prevent any visits towards you tonight from counting towards your attribute. You would refill them, but why bother? (1 use)\n- Choose to hide yourself from the Town for the following day tonight. You'll be missing from the Town the following day. Glad nobody cares to look for you. (1 use)\n- Post an anonymous message for the Town to see the following day. You can put whatever you want in this - shitposts, a cry for help, anything that won't get you banned from the platform. The entire Town will see this upon the start of the next day. Make sure you don't disappoint them. (1 use)");

		e.addField("Attributes:", "- You will commit suicide the night you are visited for the fifth time, including Astral visits.");

		e.addField("Goal:", "Survive until the end of the game, you miserable creature.");
	});

	register_role(["joy", "2436"], "Neutral", "Joy", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2436");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Negotiations: Visit a player at night. They and anyone they visit are infected with Joy.");

		e.addField("Attributes:", "- World Peace: Once everyone is infected with joy, the game ends with everyone alive winning. including you ^-^");

		e.addField("Goal:", "End the game in a joyful manner.");
	});

	register_role(["sunderer", "2437"], "Mafia", "Sunderer", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2437");

		e.addField("Alignment", "Mafia Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Split: Usable during day or night. Split all living players into two groups of your choice, the split will be announced and take effect the following night/day. A split lasts for two phases (1 phase = one night or day). Players may only vote for and use abilities on people in their group. Two lynches will occur, one for each group.");

		e.addField("Attributes:", "- You may only use split thrice. You cannot use it during a split.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["mafia_buffed_doctor", "mafiabuffeddoctor", "mafia", "buffed", "doctor", "mbd", "2438"], "Mafia", "Mafia Buffed Doctor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2438");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night you may heal a player, granting them Powerful defense.\n- Once per game you may grant your target Overprotective defense instead.");

		e.addField("Attributes:", "- You may heal yourself twice");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["scanner", "2439"], "Sentry", "Scanner", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2439\n*Put all your metal objects in the.. oh.*");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scan an authorized target each night. You will learn any hidden effects your target has. 'Hidden effects' are any positive or negative effects applied by another player that do not give any notification, such as frames, douses, or made astral.\n- Purge an authorized target at night of any hidden effects. (2 uses)");

		e.addField("Attributes:", "- You will not detect or purge any hidden effects from the target's own attributes, such as detection vulnerability from (1353) Walkie/(1354) Talkie.");

		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["archpriest", "2440"], "Partisan", "Archpriest", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2440\n*In the beginning, there was naught. Then from the horizon rose the sun.*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Contact a player each night. You may send them a <200 character message. This ability resolves immediately.\n- Pray to the sun during the day. You may send a <200-character message to any number of players who don’t have any votes for them and whom you’ve contacted previously.");

		e.addField("Attributes:", "- All messages sent by you appear to be sent by “The Voice of the Sun”.\n- Whenever you send a non-Partisan player a second message through either of your abilities, they may choose to gain one use of 1074: Ritualist’s ability. If they do, you learn that they did so as well as their role, and, for the rest of the game, you may see their night targets as they choose them.\n- Players killed by abilities you give appear to have been killed by an 2440: Archpriest’s follower.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["seraph", "2441"], "Partisan", "Seraph", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2441\n*The sun brings light-- healing, nourishing light to all.*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Accompany the sun at night. You may write a <200 character message. At the beginning of the next day, every Town member except for any number of players of your choice will receive that message.\n- Blaze upon the Town during the day. The next night, every Town member may choose to deal a Powerful attack to their first night target in addition to their ability’s effect.");

		e.addField("Attributes:", "- All messages sent by you appear to be sent by “The Voice of the Sun”.\n- You start the game with two wings. Whenever you use an ability, you lose a wing. If you would lose a wing when you don’t have any wings, you die instead.\n- All messages sent by you appear to be sent by “The Voice of the Sun”.\n- Players killed by attacks through your second ability’s effect appear to have been killed by a 2441: Seraph’s follower.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["herald", "2442"], "Partisan", "Herald", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2442\n*As it rises, the sun shall change the world and reward its faithful.*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prophesise to a non-Partisan player each night. They gain one use of 90: Jester’s ability.\n- Channel vengeance the night after a Partisan is lynched, dealing a redirect-immune Unstoppable attack to a player. You may only do this once.");

		e.addField("Attributes:", "- You can talk with the dead at night.\n- All messages sent by you appear to be sent by “The Voice of the Sun”.\n- Players killed by abilities you give appear to have been killed by a 2442: Herald’s follower.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["pope", "2443"], "Partisan", "Pope", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2443\n*Follow the sun, seek its light, and its light shall seek likewise you.*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inspire a non-Partisan player each night. They gain one use of 689: Zealot’s first ability.");

		e.addField("Attributes:", "- Your inspired target has the following two nights to use their ability. If they don’t, you may write a <200 character message. At the beginning of the next day, every Town member who hasn’t refused to use an ability you gave them will receive that message.\n- All messages sent by you appear to be sent by “The Voice of the Sun”.\n- If an inspired target uses an ability and fails to kill their target for any reason, you will learn that they used the ability and on whom.\n- Players killed by abilities you give appear to have been killed by a 2443: Pope’s follower.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["worshipper", "2444"], "Partisan", "Worshipper", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2444\n*Those who revere the sun will bask in its glory for all eternity.*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, preach to a non-Partisan player. The next night, they may choose to refuse you, shelter you, or join your ranks.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- If your target refuses you, you will not be able to preach to them again.\n- If your target shelters you, you will gain Basic defense for the night.\n- If your target joins your ranks, you will attack them.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["pilgrim", "2445"], "Partisan", "Pilgrim", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2445\n*Devote yourself to the sun. Devote your life to its light.*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Journey with a non-Partisan player each night.");

		e.addField("Attributes:", "- Both you and your target will be removed from the game and have a private channel with a six-hour slowmode opened outside the game.\n- You and your target will be returned to the game when each of you has sent a message in the private channel containing only the name of the other’s role.\n- When you and your target return to the game, each of you will gain one use of 2445: Paragon’s ability.\n- Players killed by abilities you give appear to have been killed by a X: Pilgrim’s follower.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["partisan_with_a_gun", "partisanwithagun", "partisan", "gun", "pwag", "pg", "2446"], "Partisan", "Partisan With a Gun", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2446\n*Yeah yeah, shooting holy laser beams out of your ass is cool and all, but armies use bullets for a reason.*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fucking shoot someone during the night, attacking them. 1 Use.");

		e.addField("Attributes:", "- When performing the Factional Kill, your attack will be increased to Powerful because your allies blessed your bullets with holy laser beam shooting.\n- You use a smuggled-in light machine gun for all of your attacks. As a result, anyone you attack will be attacked 10 times, and flood their notifications with attack/death messages, removing any other notifications they recieved that night.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["monarch", "2447"], "Partisan", "Monarch", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2447\n*It is the sun that rules over all of us. Do you not thank it?*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pray to the sun during the day. You may send a <200 character message to any one player.\n- Empower a player during the day, removing their limits and restrictions for the night. They are not notified.");

		e.addField("Attributes:", "- Messages you send appear to have been sent by the \"Voice of the Sun.\"\n- Empowered players lose any restrictions and consequences attached to their role until the beginning of the next day. This means they do not suffer consequences attached to their own role for performing any action (i.e a Vigilante that shoots a Town member will not commit suicide, but will still die if caught in a rampage attack) and can target players that would normally be off-limits, including themselves.\n- You cannot target Partisan members, including yourself, even if redirected, controlled or you would otherwise for any reason target one.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["promise", "2448"], "Partisan", "Promise", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2448\n*Many lights blind. Would it not be nicer for only one to let us see?*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, show meaning to a non-Partisan player. During the night, they may choose to turn away or face the light.\n> — If your target turns away, you will not be able to show meaning to them again and your enjoin ability will fail if you used it this night.\n> — If your target faces the light, they will no longer be able to see the day chat. However, they will gain access to the Partisan factional chat.\n- At night, enjoin a player who faced the light. They will gain one use of 484: A Vampire Clone's ability tonight. You may not enjoin the same player more than once.");

		e.addField("Attributes:", "- Adding a player to the Partisan factional chat does not affect their goal.\n- Changing a player's goal does not add them to or remove them from factional chats.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["gospel", "2449"], "Partisan", "Gospel", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2449\n*Heed the holy word—to turn away from the light is to cast oneself into eternal darkness.*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Preach to your followers each night, roleblocking all players who would visit you.");

		e.addField("Attributes:", "- When you host a party, you may choose whether or not to inform players who would visit you that they visited a 2449: Gospel.\n- When you roleblock a player for the third time, they gain one use of 5: Reaper's ability.\n- Players killed by abilities you give appear to have been killed by a 2449: Gospel's follower.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["filter", "2450"], "Town", "Filter", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2450");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect a player, nullifying the abilities of one faction's visits to that target.");

		e.addField("Attributes:", "- You may only nullify the abilities of one opposing faction each night. You may choose which faction this is, and you may select \"Neutral\" to nullify the abilities of neutral visitors.\n- Filtered players will still visit, but their visit will do nothing. This includes attacks.\n- Filtered players are notified that they were filtered.\n- You may nullify visitors to yourself three times in conjunction with your normal ability. The nullified faction remains the same.");

		e.addField("Goal:", factions.Town.goal);
	});
};
