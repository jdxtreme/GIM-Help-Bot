module.exports = (g) =>
{
	const {register_role, factions, NEUTRAL} = g;

	register_role(["questioner", "1151", "374u"], "Unseen", "Questioner", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1151\nConverted from: Interrogator");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Interview - Pick 2 targets to open a chat between them. Target B will show up as Interrogator. May self target. 3 uses.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["red_riding_hood", "redridinghood", "hood", "rrh", "1152", "378u"], "Unseen", "Red Riding Hood", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1152\nConverted from: Young Boy");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch - Pick a target. If they die, you will learn the name of the attacker. 2 uses.\n- Scream - Pick 2 targets. If one dies, the other learns the name of the attacker.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["entertainer", "1153", "381u"], "Unseen", "Entertainer", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 1153\nConverted from: Party Host");

		e.addField("Alignment", "Unseen Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Drink - Use up to 2 abilities next night. Day ability. 1 use, gain a use for each non Neutral (except NK) killed.\n- Party - Force someone to target you.\n- Invite - Target a player. They will learn that you are the Party Host. 1 use, gain 1 more for each non Neutral (except NK) killed.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["eros", "1154", "452u"], "Unseen", "Eros", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1154\nConverted from: Cupid");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Matchmake - Matchmake two players. If they are the same faction, you will learn their faction.\n- God's eye (2 uses): Discover who visited the target player on the night they died. Others will not be able to see who you target.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["barman", "1155", "579u"], "Unseen", "Barman", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1155\nConverted from: Bartender");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Serve Drink - Roleblock all of your target visitors. 2 uses.\n- Hand Drink - Roleblock the player that your target visited. 2 uses.\n- Open Bar - Redirect all of your target's visitors into yourself. 2 uses.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["politician", "1156"], "Neutral", "Politician", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1156");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Learn a player's role.\n- Rig the vote.");

		e.addField("Attributes:", "- Learning a player's role is Astral since you actually send your spies. If your spies die from the visit you are told why, and you hire new spies. You hide the fact that your spies died from the town to appear good in the public eye.\n- Once per game you may replace the normal voting with a new vote. In this vote, you vote someone, and they die. Your vote will be anonymous, attributed to \"The Politician.\" They will receive 1000 votes as well, because you are very influential during this phase. Nobody else can vote during this.");

		e.addField("Goal:", "Have the good faction lose (this can win while dead).");
	});

	register_role(["random_random", "randomrandom", "1157"], "Random", "Random Random", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1157");

		e.addField("Alignment", "Unique Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the start of every night, you will turn into a random Random role. You will revert back to Random Random at the start of the next day. You cannot become a living Random role, but you may become a dead Random role or a Random role that didn't spawn.");

		e.addField("Goal:", factions.Random.goal);
	});

	register_role(["enigma", "1158"], "Any", "Enigma", {anyExCat: NEUTRAL}, (e) =>
	{
		e.setDescription("Post 1158");

		e.addField("Alignment", "Any", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use one of your 2 abilities.");

		e.addField("Attributes:", "- You will be assigned a random faction. This faction can be good or bad.\n- You will be given an ability from 2 random roles. Once you use an ability, swap it for a random one.\n- Once per game you can reroll one or both abilities. They will be replaced with new abilities.");

		e.addField("Goal:", "Kill all who would oppose you and your faction.");
	});

	register_role(["essence_of_town", "essenceoftown", "eot", "1159"], "Coven", "Essence of Town", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1159");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the ability of a town role.");

		e.addField("Attributes:", "- The attributes of the town role will apply to you unless they harm you or prevent you from acting.\n- You may use any town role, even if it is not in the game.\n- You can only use each town role once.\n- You may only use two day abilities.\n- With the Necronomicon, you may use all night town roles several times, you may act twice at night (no using the same role twice in the same night), you may use all day ability townies once (once per day).");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["sk", "amnesiac_serial_killer", "amnesiacserialkiller", "ask", "1160"], "SK", "Amnesiac Serial Killer", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 1160");

		e.addField("Alignment", "Unique Serial Killer Espionage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab someone.\n- Remember who you were.");

		e.addField("Attributes:", "- If you stab someone, their role will show up as Forgotten (1622) and their last will will be hidden.\n- You can only remember Serial Killer faction roles.\n" + factions.SK.attributes);

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["reserved_part_2", "reservedpart2", "rp2", "1161"], "Town", "Reserved Part 2", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1161");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- 24 hours after the first game this is in, the host decides what role to make this. This is now that role **forever**. The role must be a Town (Protective) role.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["desire", "1162"], "Neutral", "Desire", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1162");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Match two players at night, if any of the following are identical: (Alignment, Sub Alignment, Faction, Goal), they become Matched. Matched players will know they were matched, and the other players role.");

		e.addField("Attributes:", "2 Matched Players: Can match REF's with eachother\n4 Matched Players: No longer requires matches to be identical in any way\n6 Matched Players: Become Lust.");

		e.addField("Goal:", "Become Lust");
	});

	register_role(["lust", "1163"], "Neutral", "Lust", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1163");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Match two players at night, their win conditions will change to \"Be the last two standing\".");

		e.addField("Attributes:", "- Cannot spawn naturally, unless the host decides to spawn lust.\n- A notification will be sent into the town saying \"The town is in passionate heat. Lust drives everything inside of it!\"");

		e.addField("Goal:", "See the town's desire take over. (NK Goal)\nWins with Plaguebearer, Pestilence, and the Horsemen.");
	});

	register_role(["reserved_part_3", "reservedpart3", "rp3", "1164"], "Neutral", "Reserved Part 3", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1164");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a faction during the day. Any player whose role is in this faction will have their ability fail if they target you the following night.");

		e.addField("Attributes:", "- All abilities that target you will fail if they are from the faction that you chose during the day. Any abilities that were processed before yours will still take affect except for any abilities that resolve at the beginning of the night.\n- When this role rolls, it will be determined what this role will become at the end of the game.\n- If the player with this role survives until the end of the game, they will be able to make the role that this slot will turn into.\n- If you are killed at night, the first player that sent in their ability that led to your death will be able to make the role that this slot will turn into.\n- If you are lynched during the day, the last player that voted you will be able to make the role that this slot will turn into.\n- This slot must turn into another Neutral Benign role.");

		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["house", "1165"], "Neutral", "House", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1165");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Abduct someone during the day.");

		e.addField("Attributes:", "- Anyone you abduct will not be able to act the following night. They will not know this, and only be told they were roleblocked (or roleblocked through immunity if they are roleblock immune.)\n- You take priority over all Jailor-like roles.\n- You will gain 1 random ability from the player you abduct. You may use the ability, or discard it permanently to deal a powerful attack to a player and a basic attack to their visitors.\n- Anyone who tries to visit an abducted target will be told their target isn't home.\n- Anyone who tries to target you will be told their target isn't home. (they aren't expecting you to be a house so they assume you aren't home.)\n- You may use 2 abilities per night.\n- If all other kill capable roles are dead, you will be told this, and may deal a powerful attack to a player and a basic attack to all their visitors every night.\n- You are conversion immune because a house cannot be convinced to become loyal to a faction/player.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["noctambulist", "noctam", "1166", "709u"], "Unseen", "Noctambulist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1166\nConverted from: Sleepwalker");

		e.addField("Alignment", "Unique Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Direct someone during the night.");

		e.addField("Attributes:", "- Direction will cancel all of the non-Unseen abilities targeting or affecting that player in any way, shape or form with the exception of roleblock-immune players.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["warlock", "1167", "1109u"], "Unseen", "Warlock", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1167\nConverted from: Paladin");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scout (Day): Learn if your target was visited by any opposing conversion capable faction last night. You will learn which faction visited them, or all if multiple did.\n- Deathly Examine (Night): Check a player to see if they are a member of an opposing conversion capable faction. If they are, you will attack them. If they're immune, you will learn their role.\n- Unholy Strike (Night): Attack a player (regardless of their faction) and all opposing conversion capable faction members who visit you or your target. 2 uses.");

		e.addField("Attributes:", "- \"Opposing conversion capable faction\" refers to those factions that, besides Unseen, are a minority faction which has the ability to convert other players into their faction is in the game. This also applies to neutral roles who turn others into their own, but this is determined by the host and is situational.\n- If all conversion roles and factions are completely eradicated, you will turn into a random Unseen Power role. Standard reroll rules apply, however the amount of rerolls you had at the beginning of the game will transfer over.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["trace", "1168"], "Town", "Trace", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1168\n*Kage Bunshin no Jutsu, Shadow Clone Technique!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a player at night, and copy all their actions, except on their target’s direct living neighbours.");

		e.addField("Attributes:", "- You cannot copy any direct attacks. If you attempt to, you will fail unknowingly.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["failsafe", "1169"], "Town", "Failsafe", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1169\n*Time is not safe from our grasp. But maybe that's a good thing.*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose to attempt to turn back time. If there is no lynch today, time will rewind until the beginning of the previous night.");

		e.addField("Attributes:", "- During a rewinded night:\n> - All players who were killed since the beginning of the previous night are revived as if they had never died. Everything is restored, except for role/faction conversions.\n> - All non-townies are forced to make the same action they did the first time around. Newly converted players are unable to make any action.\n> - Whispers are able to be made.\n- You may only rewind time two times.\n- If both charges of your ability remain and you are killed, you will auto-use your ability from the grave, consuming both charges.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["starscattered", "star", "1170"], "Coven", "Starscattered", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1170\n*Everything that comes and goes is written in the stars.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bless a player for this night and the next, giving them powerful protection that blocks one attack per night.\n- Create a constellation out of a dead player who has died since the beginning of the previous night, which astrally performs that role’s first ability on all living players, including Coven members.");

		e.addField("Attributes:", "- You may use players who have been cleaned/stoned.\n- Constellations with day abilities will come into effect instantly the following day.\n- Roles with a limited amount of charges will act starting from Player 1 and moving downwards.\n- You may bless yourself.\n- With the Necronomicon,  your blessings deal a cleaning basic attack to any non-Coven visitor and you are permanently blessed.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["dualspell", "duelspell", "1171"], "Town", "Dualspell", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1171\n*Immortality is impossible. But, with a little work, you can improve on having just one life.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose a player to split their life energy into two, allowing them to die once and keep functioning as a living player.");

		e.addField("Attributes:", "- Split players cannot be given protection. Protective visits will still go through, but their ability will fail and they will be notified that the player has been split.\n- When split players die the first time, their faction will be revealed, based on what faction they’d show up as if they were dead.\n- After split players die once, they may act twice at night, but have vulnerable defence (dies if two or more players visit them at night).\n- All splits disappear when you die.\n- You may target yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["defective_battlesuit", "defectivebattlesuit", "defective", "battlesuit", "db", "1172", "306u"], "Unseen", "Defective Battlesuit", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1172\n*You don't have anything to worry about, sir. It works. Trust me.*\nConverted from: Uncontrollable Mech");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You'll visit a random player each night, and you'll be informed about who you're targeting. Each night, you may choose to either deal them a Powerful attack, protect them with Powerful defense, or roleblock them.");

		e.addField("Attributes:", "- You'll protect yourself with Basic defense the first time you're attacked, and deal a Powerful attack to whoever attacked you. After this is activated, you'll be able to choose your targets at night instead of targeting them randomly.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["bargainer", "1173"], "Neutral", "Bargainer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1173\n*The ultimate tool is a silver tongue.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone at night.\n- At any point in the game, attempt to strike a deal with someone. They will be privately notified, and given the choice to accept or deny. If they accept, you‘ll gain an upgrade, based on how many deals you‘ve secured.\n— 1: You gain Basic defence.\n— 2: Nothing happens.\n— 3: Your attack is upgraded to Powerful.\n— 4: You may now kill 2 people at night. You can disguise the cause of death of the second kill as any other role in GIM.\n— 5: Everyone alive is dealt an Overkill attack and you immediately win the game.");

		e.addField("Attributes:", "- Anyone who accepts your deal gains a one-use Powerful day gun, though they can't use it on you. People who you attempt to strike deals will not know how many deals you've secured in the past.\n- You can use this ability multiple times in a day/night cycle, but you can only have one deal open at a time. Players have 24 hours to decide whether or not they accept, otherwise it's considered a denial. However, a player may not intentionally stall the timer, so they must make their choice as soon as they see the notification.\n- You will publicly be revealed as the Bargainer at the start of the game.");

		e.addField("Attributes (cont.):", "- If you're lynched, everyone who voted you will be dealt an Overkill attack. If you die by any method besides lynching, anyone who contributed to your death will be dealt an Overkill attack. It's up to the host's discretion as to what counts as \"contributing\", but players may ask for clarification on whether or not something qualifies at any time. If you're solo-killed by a Town/Good Faction role, two other Town/Good faction roles will die at random. If your death would end the game, this attribute does not resolve.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["confectioner", "1174", "563u"], "Unseen", "Confectioner", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1174\n*Sweet treats are made of wheat.*\nConverted from: Baker");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Muffin Man (Night): Choose two targets. If the first player has not visited you, you will redirect them to your second target.\n- Savory Roll (Night, 3 use): Give a player a savory roll. They may use their night abilities on two targets at night. This will appear as if a Baker has given them bread.\n- We Have Cookies (Night, 1 use): The Mastermind may choose to convert two targets tonight. If either conversion fails, both conversions will fail.");

		e.addField("Attributes:", "- Only one Unseen member may have a Savory Roll at any point, and you may not give it to the Mastermind or Assassin.\n- You are roleblock and redirect immune.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["beekeeper_hivemind", "beekeeperhivemind", "bkhm", "1175"], "Town", "Beekeeper Hivemind", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1175");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to sting a player, preventing them from using an abiliity the following night.\n- Use 2 bees to investigate a player, learning their role.\n- Use 3 bees to deal a Powerful attack to a player.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You may use up to two bee abilities each night.\n- All other players have your other abilities and attributes in addition to their own. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["dissociator", "diss", "1176", "489u"], "Unseen", "Dissociator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1176\n*I can't see straight...*\nConverted from: Trauma Patient");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Associate (Night, 1 use): Choose a role in the graveyard. You will become that role at the beginning of the next day keeping your allegiance to the Unseen. You may not choose a Killing or Power-type role. This will not be announced to the Town.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["delivery_driver", "deliverydriver", "driver", "1177", "278u"], "Unseen", "Delivery Driver", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1177\n*Your package has been delayed.*\nConverted from: Delivery Boy");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Surprise Package (Night): Choose a player. They will be redirected to themselves.\n- BOGO Deal (Night, 2 use): Choose two players. If your first target uses a night ability that targets other players, you will force them to additionally target the second player. Your ability will fail if your first target is redirect immune, but you will regain your charge. Your first target's additional visit is Astral. Your first target will receive the results of both of their ability usages, but they will not be informed who they targeted nor the fact that they targeted two players.");

		e.addField("Attributes:", "- You are redirect immune.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["piscator", "1178", "264u"], "Unseen", "Piscator", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1178\n*I think I got a bite!*\nConverted from: Fisherman");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cast Line (Night, 1 use): Choose a target. You will cast your line at their house tonight. Anyone who visits your target will be hooked.\n- Release or Reel (Night): If you hooked any players on your line last night, choose to release or reel in all hooked players. If you release your hooked players, they will not be attacked, and you will gain a charge of Cast Line; otherwise, you will deal a Powerful attack to all hooked players. This **must** be done the night after you hook anyone.");

		e.addField("Attributes:", "- You will learn how many players you hooked using Cast Line, but you will not learn their names.\n- Hooked players will not be notified that they have been hooked.\n- All Unseen members are immune to being hooked.\n- Your kills will be attributed to a Fisherman.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["forensic_examiner", "forensicexaminer", "1179", "215u"], "Unseen", "Forensic Examiner", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1179\n*I really wanna know!*\nConverted from: Forensic Analyst");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Dust Fingerprints (Night): Choose a dead player. You will learn all players that visited them the night they died.\n- Criminal Research (Night): Choose a player. You will learn the names of all players that they have killed.");

		e.addField("Attributes:", "- You may not multitask\n- While you are alive, all Unseen members will be privately informed of any modified causes of death or role flips of any dead players including roles that were withheld from the graveyard by cleaning or any other role obfuscation method.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["ally", "1180", "213u"], "Unseen", "Ally", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1180\n*You and me? We go way back. Don't you remember?*\nConverted from: Companion");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Focus on Me (Night): Choose a player. They will be redirected to you tonight.\n- Embrace (Night): Choose a player. Any abilities targeting either you or your target will fail. Your target will be roleblocked through immunity.");

		e.addField("Attributes:", "- If using Focus on Me would result in your death, your ability will fail, and you will be notified as to the reason why.\n- You may not target an Unseen member with Embrace two nights in a row.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["supervisor", "1181", "205u"], "Unseen", "Supervisor", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1181\n*What would the world be without middle-level management?*\nConverted from: Manager");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Rehire (Night): Choose an Unseen player. Their role will be rerolled to a random Unseen role in their subalignment. Cannot target the Mastermind or Assassin.\n- Executive Power (Any Phase, 3 use): Choose an Unseen role not in the game. You may use one of their abilities. You may only use day abilities during the day and night abilities at night.\n- Trade Secrets (Night, 1 use): Choose a Town role. You may use one of their night abilities.");

		e.addField("Attributes:", "- You may Rehire yourself. If you do this, you will rehire yourself into a random non-Power/Head Unseen role.\n- You may not use any Unseen Power roles, Unseen Head roles, or any roles that violate rule 16 with Executive Power.\n- You have the same restrictions as Manager when using Trade Secrets.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["hooker", "1182", "59u"], "Unseen", "Hooker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1182\n*Streets made me despicable.*\nConverted from: Escort");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Entertain (Night): Choose a target. They will be roleblocked tonight.\n- Advanced Entertainment (Night, 1 use): Choose a target. They will be roleblocked through immunity.\n- Public Show (Night, 1 use): Roleblock anyone visiting an Unseen member tonight.");

		e.addField("Attributes:", "- If you end up target an Unseen member with Entertain or Advanced Entertainment, your ability will fail.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["bodyguard_bureucrat", "bodyguardbureucrat", "bureucrat", "bobu", "1183", "146u"], "Unseen", "Bureaucrat", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1183\n*Will you do it for a little hush money?*\nConverted from: Bodyguard Boss");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Service (Night): Choose two targets. Your first target will be forced to protect the second as a Bodyguard. This effectively replaces your first target's action.");

		e.addField("Attributes:", "- You will lose your Service ability once you successfully protect someone from death.\n- You may not choose an invidivual player as your first target for Service more than once per game.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["contractor", "1184", "143u"], "Unseen", "Contractor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1184\n*Defenceive counterpoint goes here*\nConverted from: Builder");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Build Fence (Night): Choose a type of fence to build tonight.\n- Deploy Fence (Night): Choose a type of fence that you have built and, if necessary, a target. Your fence will be installed outside your target's house.\n- Deconstruct (Night): Deconstruct your deployed fence. You will be able to redeploy it the following night.");

		e.addField("Attributes:", "- You have three types of fences: Iron, Electric, and Spirit\n- An Iron fence will grant your target Powerful defense. This fence collapses when your target is attacked.\n- An Electric fence will prevent your target from visiting or being visited. This fence collapses when three visits have been prevented.\n- A Spirit fence will prevent any actions that may negatively impact the Unseen from happening. This fence collapses once a negative action has been prevented.\n- If the condition for a fence to collapse is met, it will collapse at the end of the night after all other actions resolve.\n- You may have up to two fences built and/or placed at any time.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["governor", "1185", "197u"], "Unseen", "The Governor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1185\n*Is there truly even a difference between a President and a Governor? Yes. The word \"the\".*\nConverted from: The President");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tax (Night): Choose to tax a target tonight. Based on their alignment, the Unseen will gain a buff.");

		e.addField("Attributes:", "- If you tax a Town Support role, you gain a charge of a random GIM Investigative role that you may use alongside Tax.\n- If you tax a Town Protective role, the Unseen will be granted Powerful Defense for the night.\n- If you tax a Town Investigative role, the Mastermind will be informed of a convertible Town member and their role.\n- If you tax a Town Killing role, the Assassin gains another charge of Lacerate.\n- If you tax a Town Power role, you may choose a player to reveal their role during the day tomorrow.\n- If you tax a Town Casual role, the Unseen will be informed of the roles of all players that visited an Unseen member this night.\n- If you attempt to tax a non-Town member, you will lose your ability to Tax after two nights.\n- You may not tax an Unseen member but like why would you\n- Before your conversion, if you granted a non-Town member citizenship, your Citizen conversion will be cancelled.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["belittler", "1186", "199u"], "Unseen", "Belittler", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1186\n*Shame, shame, shame...*\nConverted from: Coach");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Belittle (Night): Belittle someone. Based on their subalignment, their ability will be nerfed for the night.");

		e.addField("Attributes:", "- Investigative roles will receive false feedback based on their ability (their results will be framed or randomized if they are unaffected by frames)\n- Protective roles will have their ability fail if their target is visited by a non-killing role.\n- Killing roles will have their Attack value decreased to the next-lowest value.\n- Support roles will have their visit fail regardless of any other abilities used on them.\n- Any subalignment not listed will not receive a nerf.\n- You will be notified if your belittlement impacted your target's actions.\n- Your target will not be notified about their belittlement.\n- You may not belittle an Unseen member.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["luminary", "1187"], "Town", "Luminary", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1187\n*Justice! Yeah!!*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night. If you kill a town member, you will lose a random ability (this one has last priority) for the rest of the game.\n- Reduce a player’s defense to none no matter what, including temporary protections.");

		e.addField("Attributes:", "- At the beginning of the game, it will be announced that a Luminary is in the game.\n- As long as you are alive, all town members have access to your first ability and may choose to attack a player instead of performing their night action. If they kill a town member, they will lose one of their abilities. Deaths caused by these attacks will show up as have being caused by the Luminary.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["contact", "1188"], "Any", "Contact", {subCat: "Support", anyExCat: ["Town", "City", "Neutral", "Insurgency", "Horsemen", "Agent", "Sentry"]}, (e) =>
	{
		e.setDescription("Post 1188");

		e.addField("Alignment", "Any Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Visit a player each night to determine if thry are evil or not.\n- In the day, introduce yourself to someone you previously visited, forming an alliance and a private chat with them.");

		e.addField("Attributes:", "- This role can only spawn with factions that have a factional chat, and only if there's at least one other evil faction in the game.\n- Forming an alliance allows your faction to win with your ally, and vice-versa, unless the ally has the NK Goal.\n- If you die, all of your alliances will be lost.\n- Naturally, members of evil factions will appear evil to you. However, roles with the NK Goal will appear evil to you as well.");

		e.addField("Goal:", "Win with the faction you're in as well as any evils you align with.");
	});

	register_role(["heliocentrist", "helio", "1189", "298u"], "Unseen", "Heliocentrist", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1189\n*Nicolaus Copernicus was a pretty based dude.*\nConverted from: Sun's Familiar");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Night Life (Day, 3 use): The following Night phase will simultaneously act as a Day and a Night phase.\n- Day Break (Day, 1 use): The following Night phase will simultaneously act as a Day and a Night phase only for the Unseen and one other player of your choice.");

		e.addField("Attributes:", "- During a simultaneous Day and Night phase, your vote will act as 2, and the phase will return to a normal Night phase if you vote for nightfall.\n- During Day Break, any alive player may be voted for even if they are not present during the Day-Night phase.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["vegetarian", "veget", "1190", "327u"], "Unseen", "Vegetarian", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 1190\n*The differences between a vegetarian and a vegan are quite intricate, but you probably don't care so I'll just pretend I'm hip and trendy just for you.*\nConverted from: Vegan");

		e.addField("Alignment", "Unseen Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inform (Night): Select a target. They will be informed that you are a Vegan.\n- Talk Your Ear Off (Night): All players who visit you tonight will receive the night result \"You slept peacefully.\" If a player who visits you is killed, they will receive their death notification instead.\n- Lecture (Day, 1 use): All players who you have previously Informed (including players you informed pre-conversion) will be silenced for the rest of the day.");

		e.addField("Attributes:", "- Anyone affected by Talk Your Ear Off will have any feedback that they may receive from their abilities withheld along with any other notifications they would have received.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["messenger", "1191", "369u"], "Unseen", "Messenger", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1191\n*I see the stars come out of the sky.*\nConverted from: Courier");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deliver (Night): Choose a target. Their visit will become Astral, and you will scare away one other visitor. You may only target an Unseen member with this ability twice.\n- Delayed Message (Night, 2 use): Choose a target. If they use a night ability tonight, it will resolve at the end of tomorrow night.\n- Letter Bomb (Night, 1 use): The Assassin's kill will become Astral, and any players who attempt to roleblock or control the Assassin will be scared away.");

		e.addField("Attributes:", "- A Delayed Message will still be delivered even if your target dies the night you use your ability.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["timesnatcher", "1192", "424u"], "Unseen", "Timesnatcher", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1192\n*You're out of touch.*\nConverted from: Chronomancer");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Time Snatch (Day, 2 use): Choose a target. If they have been afflicted by any ability that would cause them to die tonight, they will immediately be killed.\n- Dark Dimension (Night, 2 use): All Unseen members may choose a role from the GIM thread to appear as to Investigative abilities tonight. If they do not choose a role, they will gain Detection Immunity instead.\n- Deadly Resolve (Night, 1 use): All killing abilities will resolve before any other abilities tonight.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["alpha", "1193"], "Agent", "Alpha", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1193");

		e.addField("Alignment", "Unique Agent Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Jack of All Trades (2-shot): Use any ability that an Agent existing in this round can use.\n- Identify Contact (1-shot): Choose a codeword. You will gain a permanent private chat with the Agent using that codeword.");

		e.addField("Attributes:", "- At game start, you will learn if any other faction heads or neutral killings are present, and if so, which.\n- You are detection-immune to abilities that determine alignment.\n- If you carry the factional kill, you will rampage.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["bravo", "1194"], "Agent", "Bravo", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1194");

		e.addField("Alignment", "Unique Agent Head", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic (Invincible)", true);

		e.addField("Abilities:", "- Reckless (1-shot): Use an ability that a Killing Agent can use.\n- Signal Mass Attack (1-shot): Use during the day. Enable all Agent roles to use a factional attack the next night. Agents will be informed of this.\n- Take Charge (0-shot): This ability gains 1 ammo any time a Town Power, Neutral Killing, or Faction Lead/Head role dies. Grant yourself a hidden, extra vote.");

		e.addField("Attributes:", "- You have Invincible defense against any form of poison.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["charlie", "1195"], "Agent", "Charlie", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1195");

		e.addField("Alignment", "Unique Agent Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Lead Through Action (2-shot): Use an ability that an Communications or Support Agent can use.\n- Dinner Discussion (Infinite): During the day, choose a player. You will share a chat with them the next night, removing them from any factional chats they are in. They will know your name, but not that you are Charlie.");

		e.addField("Attributes:", "- At the start of the game, you will learn the role of a random player. This does not bypass detection immunity, if such immunity grants the ability to choose a disguise role.\n- You have roleblock, control, and redirection immunity. If any of these are attempted on you, you will learn what role attempted to cause it.\n- If you carry the factional kill, you will roleblock your target.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["delta", "1196"], "Agent", "Delta", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1196");

		e.addField("Alignment", "Unique Agent Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Tactical Espionage Master (1-shot): Use an ability that a Sabotage Agent can use.\n- Isolate (2-shot): Choose a player during the night. They will permanently be removed from any private chat they are in, and can only be added to another by an Agent’s ability. You may revoke this at any time.\n- Manipulate Connections (1-shot): Choose a player during the night. The next day, you may control their vote as if it were your own.");

		e.addField("Attributes:", "- You are detection immune. At the beginning of the game, you may choose a role to appear as to investigations. You may change this at any time.\n- If you carry the factional kill, it will be Astral and you may choose what role it appears to come from.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["echo", "1197"], "Agent", "Echo", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1197");

		e.addField("Alignment", "Agent Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Triple Tap (3-shot): If you use this ability in combination with your factional kill, you will attack the target three times: two basic attacks, then a powerful attack.\n- Payback (2-shot): If you are visited by a one-target non-Astral ability the night you use this, you will use the same ability on the person who used it on you, along with a basic attack.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["foxtrot", "1198"], "Agent", "Foxtrot", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1198");

		e.addField("Alignment", "Agent Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Decipher (Infinite): Target a player at night. You will learn their exact role, unless they have a form of detection immunity.\n- Pressing Concerns (1-shot): Target a player at any time. You will instantly learn their role and Astrally watch them the next time night actions are resolved, seeing who they visit and who visits them.");

		e.addField("Attributes:", "- At the start of the game, you will learn the role of a random player. If Charlie is present, you will not receive the same player. If the target is detection immune, you will see a random Town role or their disguise role.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["golf", "1199"], "Agent", "Golf", {subCat: "Communication"}, (e) =>
	{
		e.setDescription("Post 1199");

		e.addField("Alignment", "Agent Communication", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Disruption (3-shot): Target a player during the night. They are unable to send or receive whispers for the next 2 days.");

		e.addField("Attributes:", "- You may choose to hide your whispers from roles/abilities that can read whispers.\n- You are immune to any abilities that can prevent you from speaking during a day phase.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["hotel", "1200"], "Agent", "Hotel", {subCat: "Communication"}, (e) =>
	{
		e.setDescription("Post 1200");

		e.addField("Alignment", "Agent Communication", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Drive to Excel (2-shot): Target a player during the night. If they are not an Agent, you will know. If they are an Agent, you will give them a buff depending on their type:\n> -Head: They will gain one shot of Identify Contact\n> -Killing: Their next attack will be both Powerful and Astral. If they try to kill an Agent, they will instead fail and gain a permanent chat with that Agent.\n> -Support: They become permanently control, redirect, and roleblock immune\n> -Sabotage: They become permanently detection immune and can choose a disguise role\n> -Communication: You will gain a private chat with them.");

		e.addField("Attributes:", "- Drive to Excel can only be used once per Agent.\n- If you are lynched, you will signal to the Agents. You will be able to send a 400 character message that only Agents will see.");

		e.addField("Goal:", factions.Agent.goal);
	});
};
