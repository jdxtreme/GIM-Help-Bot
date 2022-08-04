module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["blind_faith", "blindfaith", "faith", "bf", "1401"], "Town", "Blind Faith", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1401");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Copy a target's defense value during the night. You will not be informed about your new Defense tier, if any.\n- **Intercept** a player during the night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["right_hand_man", "righthandman", "right", "rhm", "1402"], "Toppat", "Right Hand Man", {subCat: "Executive"}, (e) =>
	{
		e.setDescription("Post 1402");

		e.addField("Alignment", "Toppat Clan Executive", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.\n- Assist with a Raid, attacking all players at the victim's home.");

		e.addField("Attributes:", "**Chief Modifier** - If killed for the first time, don't die. Instead, gain Unstoppable attack and Basic defense, and Astral. Does not activate if lynched or killed by a Jailor or Jailor-type role.");

		e.addField("Goal:", factions.Toppat.goal);
	});

	register_role(["kidnapper", "1403", "63u"], "Unseen", "Kidnapper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1403\nConverted from: Transporter");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one or two people to kidnap and roleblock at night.");

		e.addField("Attributes:", "- Roleblock and Control Immunity\n- Kidnapping a target swaps all visitors to them; for example, all visitors that visit target A will instead visit target B, and vice versa.\n- If you only choose a single person to kidnap, you will swap them with yourself. Other than that, you can't directly target yourself.\n- Your targets will think they were transported.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["multiverse_splitter", "multiversesplitter", "multiverse", "ms", "1404"], "Neutral", "Multiverse Splitter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1404");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone at night.\n- Split the universe in half. 1 use.");

		e.addField("Attributes:", "- Splitting the universe in half lets you create subgames. You select who goes in which, but there are only as many subgames as there were previously (times 2, or defaults to 2 if not used previously). There must be an even amount of players in each subgame.\n- Every time someone is lynched, you gain a use of splitting the universe. The subgame where someone was lynched doesn't matter.\n- There are no limitations on how you can move players around.\n- Each subgame acts as its own game until the universe is split again.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["warmonger", "1405", "66u"], "Unseen", "Warmonger", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1405\nConverted from: Veteran");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Decide if you will go on alert. (3 uses)\n- Redirect a player to yourself. (1 use)");

		e.addField("Attributes:", "- While on alert, you gain Basic Defense, and you will deliver a Powerful Attack to all who visit you.\n- You can only use your Redirect ability while on alert.\n- Control and Roleblock Immunity");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["court_sage", "courtsage", "csage", "1406", "135u"], "Unseen", "Court Sage", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1406\nConverted from: Court Wizard");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tornado: Target 2 players and redirect all players targeting one of them to the other.\n- Wall of Fire: Target 1 player and roleblock everyone else who attempts to target them. (2 uses)");

		e.addField("Attributes:", "- While using Tornado, you will be immune to Roleblock and Redirection\n- Wall of Fire cannot target or roleblock the Assassin (989).\n\n- Players targeting player a will visit player b.\n- Players not targeting player b will not visit player a.\n- Players targeting player b will visit player c.\n- Players targeting player a will not visit player b.\n- Players targeting player b will visit player a.\n- Players targeting a different player entirely will visit player a.\n- Players targeting player a will visit player a.\n- Players targeting player b will not visit player c.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["corrupted_landlord", "corruptedlandlord", "cl", "1407", "1390u"], "Unseen", "Corrupted Landlord", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1407\nConverted from: Ultimate Landlord");

		e.addField("Alignment", "Unique Unseen Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Force a player to pay rent with their Defense tier. Steal 1 Defense tier and give it to yourself or one of your teammates. If they have None defense, then attacc them because they didn't pay.\n- Kick all players out of their house other than Unseen. Every one of these players will be roleblocked other than yourself. (1 use)");

		e.addField("Attributes:", "- Roleblock Immune\n- You can multitask.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["fuck_eyisa", "fuckeyisa", "particular", "feip", "1408"], "Neutral", "Fuck Eyisa In Particular", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1408");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert someone into a Post 1408during the night. Every Night.");

		e.addField("Attributes:", "- Can talk with other Locusts during the night\n- Can talk with other Post 1408s during the night\n- No restrictions, unless stated otherwise, as to whom can be converted to a Post 1408. Additionally, each Post 1408 player may convert during the night.\n- Cope, Seethe, and Mald\n- Bypasses Conversion Immunity");

		e.addField("Goal:", "Convert everyone into a Post 1408.");
	});

	register_role(["cant_silence_me", "cantsilenceme", "silence", "ycsm", "csm", "1409"], "Neutral", "You can't Silence Me", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1409");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert someone into a You Can't Silence Me during the night. Every Night.");

		e.addField("Attributes:", "- Can talk with other Locusts and other You Can't Silence Mes during the night\n- No restrictions, unless stated otherwise, as to whom can be converted to a You Can't Silence Me. Additionally, each You Can't Silence Me player may convert during the night.\n- Cope, Seethe, and Mald\n- Bypasses extra conversion immunity and regular conversion immunity and any conversion immunity ever\n- This role can't be copied or have its ability copied\n- Appears as Locusts to Locusts");

		e.addField("Goal:", "Convert every living player into a You Can't Silence Me.");
	});

	register_role(["android", "1410"], "Neutral", "Android", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1410");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Begin charging up at night. You will learn who visits you tonight, and gain one charge for every person who does. While you're charging up, your defense tier is upgraded to Powerful.\n- Fire your energy beam. Attack one player for every two charges you have. You don't have defense on a night when you use this ability.");

		e.addField("Attributes:", "- Conversion immunity\n- Being targeted by Post 1408 or 1409 immunity");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["spiky_goomba", "spikygoomba", "spiky", "1411"], "Koopa", "Spiky Goomba", {subCat: "Defender"}, (e) =>
	{
		e.setDescription("Post 1411");

		e.addField("Alignment", "Koopa Defender", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Stand outside someone's house, all attacks will be redirected to you.\n- Headbonk someone dealing a Weak attack, The attack will be Powerful and will Roleblock if they are attacking a member of your Faction.");

		e.addField("Attributes:", "- Deal a Powerful attack to anyone who deals a Basic attack to you.");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["rule_zero", "rulezero", "rz", "r0", "1412"], "Neutral", "Rule Zero", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1412");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Do really bad things to some number of players every once in a while. This sometimes won't work, depending on circumstances.");

		e.addField("Attributes:", "- Immune to stuff\n- Can bamboozle undoers\n- Players must dance merrily");

		e.addField("Goal:", "Eliminate some amount of players.");
	});

	register_role(["republican_dad", "republicandad", "republican", "rd", "1413"], "Neutral", "Republican Dad", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1413");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player at night. If they are a role that has the ability to convert other players' roles, you will attack them. If they are a player whose role has been converted, you will attack them.");

		e.addField("Attributes:", "- If you are targetted by an ability or attribute that would convert your role, that ability or attribute will instead target the player it originated from, and also you will attack that player.\n- This role will only spawn if there are roles with the ability to convert roles present in the game.\n- When there are no roles that convert left in the game, your defense becomes Basic and your night ability just becomes a regular Powerful attack with no requirements.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["echo_of_victory", "echoofvictory", "eov", "1414"], "Neutral", "Echo of Victory", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1414");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a player during the day to copy one of their winning roles at night.");

		e.addField("Attributes:", "- Once the night starts, you will gain the abilities, attributes, attack level, and defense level (if it is higher than Basic), of a random role that the target has won as. If the role was nerfed/buffed after they won with it, you still get the original version they won as. You will keep your win con.\n- Once the night ends, you will revert back to Echo of Victory.\n- If you target someone who has never won, your role glitches out, causing you to die. Pick someone who has a winner role.\n- You can target yourself during the day.");

		e.addField("Goal:", "See the Town lose the game (You can die once you've won).");
	});

	register_role(["loud_fanatic", "loudfanatic", "loud", "fanatic", "lf", "1415"], "PaleMoon", "Loud Fanatic", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1415");

		e.addField("Alignment", "Pale Moon Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Host a party at your house. Everyone that visits you or your neighbours will gain a ticket. You may do this only twice.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["informed_minority", "informedminority", "im", "1416"], "Neutral", "Informed Minority", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1416");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Murder a player each night.");

		e.addField("Attributes:", "- You know the full rolelist from the start of the game.\n- If you share info from that rolelist you will be permanently muted from day chats and instantly lose. Nobody else will be informed of this.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["monty_mole", "montymole", "mm", "monty", "1417"], "Koopa", "Monty Mole", {subCat: "Informer"}, (e) =>
	{
		e.setDescription("Post 1417");

		e.addField("Alignment", "Koopa Informer", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Dig under someone, you will hear all their whispers until you use this on another target.\n- Dig under Bowser's castle for this night, Learning the roles of Koopa visitors in addition to your Attribute. (2 uses)");

		e.addField("Attributes:", "- While you are alive, Learn the names of everyone who visits a Koopa member.");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["boo", "1418"], "Koopa", "Boo", {subCat: "Supporter"}, (e) =>
	{
		e.setDescription("Post 1418");

		e.addField("Alignment", "Koopa Supporter", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Scare someone, Roleblocking them and muting them the next day.\n- Possess and control someone, Learning their role and doing their night action for them. (2 uses).");

		e.addField("Attributes:", "- You will get Basic defense and Roleblock Immunity on odd numbered Nights.");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["marathonist", "mara", "1419"], "Mafia", "Marathonist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1419");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run a marathon. During your marathon, you will survey the area, and learn exactly who visited who. 3 uses.");

		e.addField("Attributes:", "- You cannot sense Astral visits.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["teleporter", "tele", "1420"], "Coven", "Teleporter", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1420");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Teleport two people. They will be told that they were transported, and functionally will have been.\n- With the Necronomicon, teleport someone into their doom, attacking them.");

		e.addField("Attributes:", "- Your abilities are Astral.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["annoying_boulder", "annoyingboulder", "abtrtgooyw", "1421"], "Rock", "Annoying Boulder That Refuses To Get Out Of Your Way", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1421");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Block the entrance to someone's house. They cannot visit anyone else, but on the bright side, nobody can visit them! :D");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["bowser", "1422"], "Koopa", "Bowser", {subCat: "King"}, (e) =>
	{
		e.setDescription("Post 1422");

		e.addField("Alignment", "Koopa King", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Go inside your Shell this night, Gaining Overprotective defense, can't be used again for the next 2 nights.\n- Breathe Flames on 2 targets, Attacking both, Can only be used on day 3, 6, 9 and so on.");

		e.addField("Attributes:", "- Anyone visiting you will be dealt a Basic attack if they aren't from your Faction.");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["winter_melon", "wintermelon", "wm", "1423"], "Plant", "Winter Melon", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1423");

		e.addField("Alignment", "Plant Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Fire a winter melon at someone's house. 4 sun.\n- Freeze someone's home. 2 sun.\n- Produce sun at night.");

		e.addField("Attributes:", "- Your winter melon will deal a Powerful rampage attack, but deal an Unstoppable attack to the homeowner.\n- Freezing a home roleblocks a target.");

		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["item_shop_koopa", "itemshopkoopa", "isk", "1424"], "Koopa", "Item Shop Koopa", {subCat: "Supporter"}, (e) =>
	{
		e.setDescription("Post 1424");

		e.addField("Alignment", "Koopa Supporter", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use your coins to buy items for someone, You can buy as many as you have gold for.");

		e.addField("Attributes:", "- At the start of each night, You will get 5-8 coins that you will store to use with your abilities/attributes, there is no limit to how many gold you can have.");

		e.addField("Items:", "Mushroom: Upgrades Attack and Defense of target by 1 tier this night, Doesn't stack, 5 coins.\nFire Flower: Target will Torch 1 random person they killed this night, 5 coins.\nBanana Peel: Roleblock one of the Target' visitors at random, 6 coins.\nWarp Pipe: Transport(Check 63) 2 Targets, 10 coins. (2 uses)\nStar: Target gets Invincible defense this night, anyone visiting will be dealt a Powerful attack, 15 coins. (1 use)");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["gas_bomber", "gasbomber", "gb", "1425"], "Underworld", "Gas Bomber", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 1425");

		e.addField("Alignment", "Underworld Offensive", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bomb someone's house.");

		e.addField("Attributes:", "- Bombing a house deals a Powerful attack to the victim and douses all visitors of the victim.");

		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["this_but_youtuber", "thisbutyoutuber", "youtuber", "tby", "1426"], "Neutral", "This But Youtuber", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 1426");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Recommendations (Day, 4 uses): Recommend a player a video of your choice, if they like it, gain one subscriber.\n- Advertise (Night, 1 use): Redirect all subscribers onto a certain player.");

		e.addField("Goal:", "Obtain two subscribers, and see to it at least one of them wins.");
	});

	register_role(["spider", "1427"], "Town", "Spider", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1427");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place a web at someone's house.");

		e.addField("Attributes:", "- Anyone who visits your target will instead be roleblocked. People who visit your target to kill them will be roleblocked through immunity.\n- You may place a web on yourself once.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["no_need_to", "noneedto", "ntn", "1428"], "Mafia", "No Need To", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1428");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Persuade up to two players per night, roleblocking them and cancelling their action for the night.\n- Relent, resolving every action you have cancelled so far in the game and additionally performing them yourself. This happens automatically when you die.");

		e.addField("Attributes:", "- You cannot target the same person two nights in a row\n- Your targets will be informed that they have been visited by a No Need To.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["be_scared_of_me", "bescaredofme", "bsom", "1429"], "Neutral", "Be Scared Of Me", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1429");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic/Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Haunt a player. Players will know if they have been haunted.\n- Once per game during the day, unleash a nightmare for the following night and choose either odd-numbered players or even-numbered players. This will be publicly announced at the start of the night.");

		e.addField("Attributes:", "- You learn the roles of players you haunt, bypassing all detection immunity.\n- If a haunted player visits you for the rest of the game, you will rampage at their house, bloodying their will and gaining basic defense for the night.\n- During a nightmare, all town visits that target even/odd (the one you chose) numbered players will fail, unless they are targeting you, and will also be dealt an unstoppable attack.");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["hammer_bro", "hammerbro", "hammer", "hb", "1430"], "Koopa", "Hammer Bro", {subCat: "Attacker"}, (e) =>
	{
		e.setDescription("Post 1430");

		e.addField("Alignment", "Koopa Attacker", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose up to 4 targets, you will attack 2 of them randomly if you chose 4 targets, 1 if you chose 3 or less.");

		e.addField("Attributes:", "- If Bowser chose you as the Normal Attacker of the night, you will also attack 1 random player visiting you.");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["siphon", "1431"], "Neutral", "Siphon", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1431");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Siphon power from someone every night.");

		e.addField("Attributes:", "- If your target has a limited use ability, you will steal a charge, letting you use the ability once. If your target is evil, you will instead copy a charge, letting you use their ability once but not taking a charge from the target. You will also be told they are evil (evil meaning against the Town).\n- If your target does not have a limited use ability, roleblock them the current night and the next night. If your target is evil, you will only roleblock them the current night. You will also be told they are evil (evil meaning against the Town).\n- Roleblock Immunity.");

		e.addField("Goal:", "See the Town lose the game.");
	});

	register_role(["lurking_in_the_shadows", "lurkingintheshadows", "lurking", "shadows", "lits", "1432"], "Mafia", "Lurking In The Shadows", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 1432");

		e.addField("Alignment", "Mafia Espionage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Recede into the shadows at night. Next day, you will appear to have died to any role of your choice, and flip as another role of your choice. You will no longer count to the majority vote, but you can still vote.\n- Attack a player at night and disguise it as any killing role. Your target won't be informed they were attacked if you fail.");

		e.addField("Attributes:", "- Astral\n- When you recede into the shadows, you're still technically alive even though you appear as dead. Therefore, people can still target and visit you. People who target dead bodies such as Old Retri (301) will be informed that you're not a valid target.\n- If you're the last evil role, the town will be notified that \"Something's lurking in the shadows.\". Your attack is upgraded to Unstoppable when this happens. Dead players can now be visited and voted for.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["playwright", "pw", "1433"], "Neutral", "Playwright", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1433");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Predict something that will happen during the night and write an exposition for it.");

		e.addField("Attributes:", "- You must predict that one player will perform a specific action towards another player for your prediction to count. You cannot predict something as vague as “A visited B”, but you can predict something like “A investigated B” or “A protected B”.\n- Along with your prediction, you must send a detailed exposition of the predicted event as if it were to occur during a play. It is the host’s discretion as to how much detail is necessary.\n- Upon a correct prediction, you will gain Basic Defense for the night, and the player that you predicted the action happening to (the second player) will receive your exposition.\n- You have Basic Defense on Night 1.");

		e.addField("Goal:", "Successfully predict and create exposition for three events.");
	});

	register_role(["ravenous_rat", "ravenousrat", "ravenous", "rat", "rr", "1434"], "Neutral", "Ravenous Rat", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1434");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal all of a player's **Rations**, reducing them to 0 and adding them to your total.");

		e.addField("Attributes:", "- At the start of the game, it's announced that *\"A ravenous rat is scurrying around the town. Keep your rations safe.\"* Each player is given five **Rations** other than you. When a player has no **Rations**, they cannot use their abilities. You're not affected by this. However, all players can give other players any amount of **Rations** as a night action.\n- You have Basic defense for the first time you're attacked.");

		e.addField("Goal:", "Live to see the town lose the game.");
	});

	register_role(["undead_attention_seeker", "undeadattentionseeker", "attention", "uas", "1435"], "Neutral", "Undead Attention Seeker", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1435");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Visit someone tonight and redirect them to yourself. You may not visit the same person more than once.");

		e.addField("Attributes:", "- When you're attacked, you aren't affected and your Defense tier increases by 1. (Maximum is Invincible)\n- When you're healed or protected by a protective ability, you aren't affected and your Defense tier decreases by 1. If you go below \"None\", you die. Lynching is counted as a protective ability...For some reason.\n- Redirection Immune");

		e.addField("Goal:", "Die.");
	});

	register_role(["timewarping_photographer", "timewarpingphotographer", "timewarping", "photographer", "tp", "1436"], "Town", "Timewarping Photographer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1436");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Take a photograph of someone at night. Their current state will be preserved. You may only have one photograph at any time, so if you use this ability again, your first photograph is discarded.\n- Turn back time for the person in your photograph. They will be reverted to how they were when you used your first ability. This can mainly revert death, but also affects status effects such as poison, and anything else that would happen when reverting someone to a previous state. Once you use this ability, your current photograph is discarded.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["innkeeper", "inn", "1437"], "Town", "Innkeeper", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1437");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kick a player out of your inn at night. They will not be allowed inside your inn in the future.");

		e.addField("Attributes:", "- Those who visit you at night will enter your inn. Players inside your inn are healed every night, including the night they visit. However, while inside your inn, they cannot use nightly abilities. They can choose to leave your inn at night, losing the Powerful defense at the start of the next day. You will know when someone visits your inn, when someone leaves, and have a list of everyone inside.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["harsh_critic", "harshcritic", "harsh", "critic", "hc", "1438"], "Town", "Harsh Critic", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1438");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Compare 6 players tonight. Their player numbers in the player list will be taken. You will receive the sum of all the evil's numbers as your feedback.\nExample: Player 3, 4, 6, 7, 10 and 12 are chosen. Player 3, 4 and 12 are the only evil roles in that list, so you will receive \"19\" as feedback.");

		e.addField("Attributes:", "- REF roles, NE, NC and NK will appear as evil to you. You can't bypass detection immunity though.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["warden", "1439", "1281u"], "Unseen", "The Warden", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1439\nConverted from: The Jailor");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Imprison (Day): Choose a player to jail. Works exactly like a real Jailor.\n- Execute (Night): Execute your target. Cannot be used Night 1, cannot be used two nights in a row.\n- Kidnap (Night): Kidnap a target and keep them in jail the entire next day, blocking them from seeing the next day chat and stopping their use of day abilities. 3 uses");

		e.addField("Attributes:", "- Other Unseen members will see the jailed target's messages.\n- Your kills will appear as a Jailor kill.\n- You keep priority over other jailing type roles. This includes ones on your own team, but have you tried coordinating?");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["sans_infectious_insomnia", "sansinfectiousinsomnia", "sbhhii", "infectious_insomnia", "infectiousinsomnia", "sans", "1440", "1329u"], "Unseen", "Sans {But He Has Infectious Insomnia}", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1440\nConverted from: Sans {But He Has Insomnia}");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Normal Attack** (Night): {Don't} attack a player {but instead all their visitors} with bones and stuff.\n**Special Attack** (Night): Use your special attack, roleblocking a player {every night for the rest of the game. Anyone who visits them also is permanently roleblocked. This also applies to anyone who was affected by visiting - it can spread. Unseen members are immune. 2 uses.}\n**{Fake} Mercy** (Night): If you are attacked, {pretend to} offer mercy. The attacker will be told to select a new target. If they select you again, this won't activate again. {However, you will retaliate, and kill them, while you will survive.}\n**Cleave** during the day. Infinite uses.");

		e.addField("Attributes:", "- You are roleblock immune.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["sk_army", "skarmy", "skbiaaa", "sk", "army", "1441"], "Neutral", "SK but it's actually an army", {subCat: "Genocidal"}, (e) =>
	{
		e.setDescription("Post 1441");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Genocidal", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Stab someone at night.\n- Send out your living soldiers to stab someone at night.");

		e.addField("Attributes:", "- You have [# of Players]/4 (rounded down) soldiers at the start of the game.\n- You can command all of them to attack different people at the same time you attack someone.\n- If you die, you don't. A soldier dies in your place instead. The soldiers all have Basic defense. Yes, this applies to lynches too.\n- If you don't have soldiers, and die, you die. (You're dead)\n- Roleblock immune. Additionally, if you are roleblocked, you may have all of your soldiers stab the roleblocker all at once.");

		e.addField("Goal:", factions.Neutral.goalNG);
	});

	register_role(["sk_anarchist", "skanarchist", "skbiaa", "sk", "anarchist", "1442"], "Neutral", "SK but it's an anarchist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1442");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Stab someone.");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- If this exists, every other player in the game has their goal permanently switched to NK goal. Even if they change it to something else. Faction chats also close and factional kills are now independent of others and multiple people can use them at once.");

		e.addField("Goal:", "Survive to the end of the game except not really because you also switch your own goal");
	});

	register_role(["sheriff_basic", "sheriffbasic", "sbwba", "1442"], "Town", "Sheriff but with basic attack", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1443");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Interrogate someone at night.");

		e.addField("Attributes:", "- Results are the same as normal Sheriff.\n- When you interrogate someone, you begin by shooting them in the face. If they die, great! Simply move on with your day.\n- If they survive, then check their Sheriff result.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["undercover_agent", "undercoveragent", "undercover", "agent", "ua", "1444"], "Toppat", "Undercover Agent", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1444");

		e.addField("Alignment", "Toppat Clan Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player during the night.\n- Bypass roleblock immunity. 1 use.");

		e.addField("Attributes:", "- At the beginning of the game, you are given a role in a rival REF that has a factional chat. This role cannot be a faction (Head) role. If no other REFs exist, or none have a factional chat, automatically reroll into another Toppat.\n- You gain the attributes and abilities of that role, as well as your own ability. You can use your own ability with your copied one. You may still survey players, as you are still a TcS role.\n- You lose access to the Toppat chat, but gain access to the chat of the faction you're disguised as. The Toppats will know your true identity, and you will know your fellow Toppats, however you cannot whisper to them.\n- You cannot become the Chief unless you are the only remaining Toppat. If the faction you're disguised as is eliminated, rejoin the Toppat chat and you can become Chief normally. You do not lose any abilities.\n**Chief Modifier** - Gain the ability to roleblock all members of the faction you're disguised as, with 2 uses. If undisguised, you will always bypass Roleblock immunity.");

		e.addField("Goal:", factions.Toppat.goal);
	});

	register_role(["base_guard", "baseguard", "bg", "1445"], "Toppat", "Base Guard", {subCat: "Operator"}, (e) =>
	{
		e.setDescription("Post 1445");

		e.addField("Alignment", "Toppat Clan Operator", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stand guard at the Toppat Headquarters. You will automatically kill all Investigative, Killing, and other roles deemed to be a negative visit to a Toppat member. Other roles will not be affected, but you can kill multiple people at once. 3 uses.");

		e.addField("Attributes:", "**Chief Modifier** - Gain the ability to order a goon to stand guard while you specifically hunt down another player to kill them. 2 uses.");

		e.addField("Goal:", factions.Toppat.goal);
	});

	register_role(["government_traitor", "governmenttraitor", "gt", "1446"], "Toppat", "Government Traitor", {subCat: "Executive"}, (e) =>
	{
		e.setDescription("Post 1446");

		e.addField("Alignment", "Toppat Clan Executive", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Have a player report to you during the day. Learn their faction and alignment. 4 uses.\n- Interrogate a player during the night, learning their faction.\n- Anonymously threaten a player to reveal their role to you. If they accept, you learn their exact role. If they decline, you will attack them. If they are immune, they can choose what role to appear as. 1 use.");

		e.addField("Attributes:", "**Chief Modifier** - Gain 2 uses of anonymously threatening a player. The attack is also increased to Powerful.");

		e.addField("Goal:", factions.Toppat.goal);
	});

	register_role(["dry_bones", "drybones", "db", "1447"], "Koopa", "Dry Bones", {subCat: "Defender"}, (e) =>
	{
		e.setDescription("Post 1447");

		e.addField("Alignment", "Koopa Defender", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect your Target, Redirecting all attacks on them to you.");

		e.addField("Attributes:", "- If you die, you will automatically be revived on the second night after you die, cannot activate if there are no other Koopas alive.");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["myling", "1448"], "Spirit", "Myling", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1448");

		e.addField("Alignment", "Spirit Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check a player to see if they were your murderer. If they are, attack the player.");

		e.addField("Attributes:", "- At the beginning of the game, two players will have been assigned to be your murderer, but you will only know their roles.\n- Once you kill both of these players, you may attack twice per night and you are able to kill anyone.");

		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["professional_vehicle_operator", "professionalvehicleoperator", "operator", "pvo", "1449"], "Toppat", "Professional Vehicle Operator", {subCat: "Operator"}, (e) =>
	{
		e.setDescription("Post 1449");

		e.addField("Alignment", "Toppat Clan Operator", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Ram a vehicle into a person's home, each dealing a rampage attack. You have 1 of each vehicle.\n> - A car deals a Basic attack.\n> - A truck deals a Powerful attack.\n> - A helicopter deals an Unstoppable attack while Charles laughs from the sidelines.\n> - A rocket deals an Overkill attack.");

		e.addField("Attributes:", "- The rocket can only be used once you are out of all other vehicles.\n- The rocket will kill the player's neighbors as well, but also yourself.\n**Chief Modifier** - Gain 2 cars and 1 truck. You will not die from the rocket.");

		e.addField("Goal:", factions.Toppat.goal);
	});

	register_role(["goombario", "1450"], "Koopa", "Goombario", {subCat: "Informer"}, (e) =>
	{
		e.setDescription("Post 1450");

		e.addField("Alignment", "Koopa Informer", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tattle your Target, Learning their role and what action they did tonight.\n- Roleblock a Player you have previously Tattled, can be used alongside any action and on as many people as possible.");

		e.addField("Attributes:", "- You can only Roleblock each Tattled player once.");

		e.addField("Goal:", factions.Koopa.goal);
	});
};
