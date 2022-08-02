module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["drug_dealer", "drugdealer", "drug", "dealer", "1051", "620u"], "Unseen", "Drug Dealer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1051\nConverted from: Adrenaline Doctor");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shady Deal (Night, 3 use): Give someone a shot of heroin at night. They will not be notified.\n- Acid Trip (Night, 2 use): Force someone through an acid trip.");

		e.addField("Attributes:", "- If a person with a shot of heroin is attacked, they will automatically inject themselves with heroin. This will appear as if they are injecting themselves with adrenaline. They will survive the attack, but the following night, they will be dealt an Unstoppable attack, and they will deal a Rampage Basic attack to whoever they visit\n- A person on an acid trip will perform the abilities of a different role in their alignment and receive false results from their actual ability.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["playlist_creator", "playlistcreator", "playlist", "1052"], "Neutral", "Playlist Creator", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1052");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone during the day to ask them to add a song to the playlist.\n- Add a song to the playlist during the night.");

		e.addField("Attributes:", "- Throughout the game, you will be creating a playlist of songs. At the end of the game, the host will rate all of the songs out of 10 in the playlist.\n- Each player you ask may choose whether or not they want to add a song to the playlist. If they do, you may choose to discard their song selection from the playlist after they choose it. They will make their decision during the night after you asked them.\n- You may choose one song per night phase to add to the playlist.\n- You retain your abilities even when you're dead.");

		e.addField("Goal:", "Create a playlist that the host rates at least an average of 7/10.");
	});

	register_role(["role_card_player", "rolecardplayer", "rcp", "1053"], "Neutral", "Role Card Player", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1053");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- In the day, play a Role Card in order to take its goal as your own.\n- In the night, play a Role Card in order to use one of its abilities of your choice.\n- At any time, choose a Role Card to discard with no effect.");

		e.addField("Attributes:", "- At the start of the game, you will draw 5 random Role Cards, which are simply random Roles in Card form.\n- At the start of each day after the first, you will draw another random Role Card.\n- You may use multiple abilities per night, as long as you have cards left to play.\n- You may only choose a goal twice in a game. If you choose a second goal, it will completely replace the first goal. Your first goal will be unattainable and voided, even if you reached it previously.\n- Once you play a Card, you must discard it from your hand.\n- You cannot draw a copy of any Card that you have already drawn.\n- You cannot draw Cards of Roles that cannot be copied from.\n- This role cannot be copied or stolen from.");

		e.addField("Goal:", "Obtain a goal from a role card and fulfill that goal.");
	});

	register_role(["buncha_random_shit", "buncharandomshit", "shit", "brs", "abrs", "1054"], "Neutral", "A Buncha Random Shit", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1054");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- When this role is rolled, you get three random abilities from three random roles and three random attributes from three other random roles. The host must do their diddly darn best to interpret your rolecard in a way that makes some amount of sense.");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["specific_buncha_random_shit", "specificbuncharandomshit", "specific", "sbrs", "asbrs", "1055"], "Neutral", "A Specific Buncha Random Shit", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1055");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every even night, attack a player, plus an additional one for every lynched Town role.\n- Frame a player at night.\n- Read into a player during the day, learning whether or not they are a member of the Town or not. 2 Uses.");

		e.addField("Attributes:", "- Players targeting player b will visit player c.\n- Every time the host makes a host error, you are informed of exactly what happened. You may then gain one use of your choice of the following: a Basic attack, a Basic autovest, or a vote that counts as three.\n- Can't use your abilities in conjunction");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["enigmatic_inspector", "enigmaticinspector", "enigmatic", "1056"], "Town", "Enigmatic Inspector", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1056");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inspect a player during the night, finding out their exact role.");

		e.addField("Attributes:", "- All your targets will be cleaned when they die.\n- If you die, you will be cleaned.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["nightwatch", "1057"], "Town", "Nightwatch", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1057");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Patrol the streets at night.");

		e.addField("Attributes:", "- When you patrol the streets, you will block an attack, negating it entirely. You will block the attacks that are least harmful to Town first. (i.e. if a Mafia member kills a Townie and an NK kills a Mafia member, you'll block the attack that would have killed the Mafia member.) If there's no clear difference, it's random.\n- You may only patrol the streets thrice. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["journeyer", "journey", "1058"], "Town", "Journey", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1058");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit people to fill out your map.");

		e.addField("Attributes:", "- At the start of the game, get an empty map.\n- If you visit, you must visit 3 people.\n- You will be told how many different factions are on your map. You will also learn the role of 1 player you visit, chosen at random. (Neutrals all count as 1 faction, with the exemption of neutrals that can get teammates i.e. conversion. All neutrals that can get teammates are their own faction.)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["birdkeeper", "bird", "1059"], "Town", "Birdkeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1059");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send a bird to another player.");

		e.addField("Attributes:", "- All birds have a 2 night cooldown.\n- You may only use 1 bird a night.\n- Your visits are astral.");

		e.addField("Birds:", "Eagle: Give your visitor astral visits. If your target already has astral visits, their visit is considered indirect.\nPidgeon: Roleblock your target.\nParrot: Learn all feedback your target gets. You may have your parrot announce the results, but this can only be done Night 3 at the earliest. If your bird finds nothing, it will not be announced, but you may announce the results again later.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["programmer", "1060"], "Town", "Birdkeeper", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1060");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hack someone at night.");

		e.addField("Attributes:", "- Hacking someone will scramble all feedback they get, giving them random incorrect results. You will be told their real results, and what the results were scrambled into.\n- If your target received no feedback, instead perform an investigator check on them (see post 35).");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["fivekidsinatrenchcoat", "five_kids_in_a_trenchcoat", "five_kids", "fivekids", "fkiat", "1061"], "Town", "Five Kids in a Trenchcoat", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1061");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prank up to 5 players each night. You visit them and do nothing. ");

		e.addField("Attributes:", "- You're 5 players. (You have 5 votes, must be killed 5 times, can be targeted as though you were 5 players, etc.)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["series_2_roles", "series2roles", "series_2", "series2", "s2r", "1062"], "Neutral", "Series 2 Roles", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1062");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Timeshift a player each night. At the start of the next day, they will be given a new rolecard, which is a slightly modified version of their original role, as detetermined by the host. You may self-target.");

		e.addField("Attributes:", "- You will be informed of your targets' timeshifted roles.");

		e.addField("Goal:", "Timeshift four players.");
	});

	register_role(["psychiatrist", "1063"], "Neutral", "Psychiatrist", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1063");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may perform a link between two players at night, they will learn each others roles and they may decide to form an alliance, becoming functionally identical to lovers. __They will not take their life if the other dies.__");

		e.addField("Attributes:", "- You may only form two alliances, and only one alliance may exist at any given time.");

		e.addField("Goal:", "See an alliance win.");
	});

	register_role(["statue", "1064"], "Rock", "Statue", {spawnCat: "Town", subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1064");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Starts as a townie. Becomes a random Rocks once the last Rock dies.\n- You are unaware you are a Statue when the game begins.\n- The other Rocks know who you are and cannot perform actions that negatively affect you.\n- Spawns in a Random Town slot");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["crazy_dave", "crazydave", "1065"], "Plant", "Crazy Dave", {spawnCat: "Town", subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1065");

		e.addField("Alignment", "Plant Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Starts as a townie. Becomes a random Plant once the last Plant dies.\n- You are unaware you are Crazy Dave when the game begins.\n- The other Plants know who you are and cannot perform actions that negatively affect you.\n- Spawns in a Random Town slot");

		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["imp", "1066"], "Underworld", "Imp", {spawnCat: "Town", subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1066");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Starts as a townie. Becomes Apocalypse once the last Underworld member dies.\n- You are unaware you are an Imp when the game begins.\n- The other Underworld members know who you are and cannot perform actions that negatively affect you.\n- Spawns in a Random Town slot");

		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["telepath", "1067", "425u"], "Unseen", "Telepath", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1067\nConverted from: Clairvoyant");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Implant (Night): Choose a player. You may give them any night message of your choosing other than a death message.\n- Circle of Truth (Night, 2 use): Choose a word. You will learn all players with that word in their role card.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["earthborn", "1068", "222u"], "Unseen", "Earthborn", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1068\nConverted from: The Man in the Wall");

		e.addField("Alignment", "Unique Unseen Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Prime (Day)**: Mark a target's house for collapse.\n**Annihilate (Night)**: Destroy one marked player's house.");

		e.addField("Attributes:", "- Control Immune\n- Destroying a house will prevent the abilities of all non-Unseen players from activating on the target player.\n- If the target player visits someone whose ability would have been stopped, the visitor's ability will still occur.\n- You cannot use Prime while dead. You can use Annihilate while dead.\n- If only one person visits the player who's house you destroy, they will be dealt a Basic attack.\n- You cannot prevent delayed abilities if they activated a night before: a poisoned player will still die if their house is destroyed.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["pile_of_bones", "pileofbones", "bones", "1069", "559u"], "Unseen", "Pile of Bones", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1069\nConverted from: Rattler");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Rattle (Night): Choose a player. Any non-Unseen visitors they receive will become rattled. Rattled players will receive the image attached to the Rattler role card and will be roleblocked the following two nights. You will be notified if you rattled anyone.\n- Spooky Scary (Day, 1 use): Choose a player. They will be roleblocked through immunity and their Defense will be grounded to None for the night bypassing any protective abilities. Your target will be notified at the start of the night.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["snitch", "1070", "885u"], "Unseen", "Snitch", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1070\nConverted from: Tattletale");

		e.addField("Alignment", "Unique Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, visit a player and learn their role. The next player you visit will learn any role of your choosing, and believe it to belong to the person you last visited (imitates Tattletale).");

		e.addField("Goal:", "Unseen Goal except \"Goal\" has two syllables");
	});

	register_role(["deep_knight", "deepknight", "1069", "56u"], "Unseen", "The Deep Knight", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1069\nConverted from: Bodyguard");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Stalwart (Day, Passive): Prevent the mastermind from being lynched, if the Mastermind would be lynched, the day will end and all day abilities on them will fail. You will die at the start of the next day.\n- Guard (Night): Prevent a player from dying at night, kill the victim's attacker, they will appear to die to a Bodyguard.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["judge", "1070", "186u"], "Unseen", "Judge", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1070\nConverted from: Hangman");

		e.addField("Alignment", "Unique Unseen Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Pardon (Day):** Attempt to cancel a lynch. 1 use.\n**Decide Fate (Day):** Immediately kill the player with the most votes. 1 use.");

		e.addField("Attributes:", "- When attempting to cancel a lynch, you will force all players voting the person with the most votes to retract those votes; then, prevent the person being voted from being voted again for the rest of the day.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["temptation", "tempt", "1071", "598u"], "Unseen", "Temptation", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1071\nConverted from: Temptest");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Irresistibility (Night, 3 use): Choose a player. You will redirect them to yourself and deal a Basic Attack to them. You will also deal a Basic attack to one other player that visits you this being the player that sent in their action last.\n- Desire to Kill (Night, 1 use): Select three players. You will deal a Basic attack to all players that your targets visit.");

		e.addField("Attributes:", "- If you use Irresistibility on a Redirect immune target, your ability will fail, and you will not regain a charge.\n- If any of your targets of Desire to Kill do not visit anyone, your ability will fail, but you will regain your charge. If a target is roleblocked, they will not count towards this passive.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["train_director", "traindirector", "1072", "1010u"], "Unseen", "Train Director", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1072\nConverted from: Train Station Leader");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "Aboard (Day): Give a player a ticket during the day, letting them ride the train. They will be granted invincible defense when aboard.\nEviction (Night): Run over every player who has entered your train even if they are not in tonight, killing them past all and every immunity. Their will is to be cleaned.");

		e.addField("Attributes:", "- You are role-block, re-direct, and control immune.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["transcendentalist", "transcend", "1073", "639u"], "Unseen", "Transcendentalist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1073\nConverted from: Judicator");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Begone (Night, 3 use): Choose a player. They will transcend humanity tonight causing all abilities used against them this night to be cancelled. They will also stay transcended during the following day causing any actions directed towards your target to be cancelled, but they may not perform any actions or speak themselves. The Town will not be publicly notified of this, but if anyone is to perform an action towards your target, they will be notified that they have transcended humanity.\n- Ascension (Night, 1 use): Deal an Unstoppable Attack to the player that you used Begone on last night.");

		e.addField("Attributes:", "- You may not use Ascension if you did not use Begone the previous night.\n- The target of Begone will still count towards voting majority and will still be able to read the day chat.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["ritualist", "1074"], "Town", "Ritualist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1074");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sacrifice a Town member to haunt another player.");

		e.addField("Attributes:", "- Sacrificing a Town member deals an Overkill attack to them and allows you to deal an Unstoppable attack to your second target.\n- If you attempt to sacrifice a non-Town member, you will sacrifice yourself instead. You may also choose to sacrifice yourself normally.\n- If you kill a Town member with your haunt, you can only sacrifice yourself for the rest of the game.\n- You cannot sacrifice someone more than one time, if you were to be made able to use your ability multiple times at once by any means.\n- You cannot keep a last will due to your practices being forbidden.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["duck", "1075", "643u"], "Unseen", "Duck", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1075\nConverted from: Quack");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player. If they were using a single-target ability, copy it for yourself.");

		e.addField("Attributes:", "- You won't know the ability you copied, though you will receive feedback.\n- If the ability requires attributes to function, you will unknowingly give yourself those attributes on the night you use the ability.\n- You can use multiple abilities per night.\n- You can't target yourself.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["ritual_leader", "ritualleader", "rleader", "1076", "1074u"], "Unseen", "Ritual Leader", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1076\nConverted from: Ritualist");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "Ritual (Day): Select a player to sacrifice, If they are pure-blooded (NB, Town, NC that can win with Town) they will die at the beginning of the night unless another day-targetter visits them. 1 use.\nSummoning (Night): If the day ability was performed successfully, kill a target with an unstoppable attack. 1 use.");

		e.addField("Attributes:", "- Redirect, Control, Roleblock immune.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["higher_being", "higherbeing", "higher", "1077", "641u"], "Unseen", "Higher Being", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 1077\nConverted from: Commuter");

		e.addField("Alignment", "Unseen Casual", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Transcend (Day):** Transcend humanity at night. 2 uses.\n**Bestowal (Day):** Allow another Unseen member to transcend humanity at night. 2 uses.");

		e.addField("Attributes:", "- Redirect, Control, Roleblock, Converion immune.\n- When you transcend humanity, all abilities used against you will fail. All attacks, all passives, effects, visits, etc. will completely and invariably fail. You will also be purged of all effects, even those that cannot be purged.\n- Because your ability is used during the day, you are also immune to beginning-of-the-night effects such as being jailed.\n- While transcending, you will also attack everyone whose abilities failed against them.\n- You will not learn whose abilities failed against you, only what abilities failed.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["craftsman", "1078", "708u"], "Unseen", "Craftsman", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1078\nConverted from: Blacksmith");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Craft (Night, 1 use): Choose three items to craft. You will come into possession of them at the end of the night.\n- Deal (Day/Night): Choose a player to give them one of your crafted items. You may not give out multiple items in the same phase.");

		e.addField("Items:", "- Bulletproof Vest: Owner of this item will be able to don it giving themselves Basic Defense for the night.\n- Faulty Gun: Owner of the item will be able to shoot someone during the day dealing a Powerful attack to the target. There is a 25% chance of the gun malfunctioning and shooting the attacker. If a member of the Unseen is targeted with the gun, the gun will malfunction.\n- Dreamcatcher: Owner of this item will be immune to roleblocks until the night after they are roleblocked for the first time.");

		e.addField("Attributes:", "- You may Craft any number of any item up to three items.\n- You may give multiple items to the same player, but not in the same phase.\n- If a player dies without using their item (including Dreamcatcher owners who were never roleblocked), you will regain possession of the item and will be able to Deal it to someone else. Keep this attribute if your role changes.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["archmage_of_sorrow", "archmageofsorrow", "archmage", "sorrow", "1079", "588u"], "Unseen", "Archmage of Sorrow", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1079\nConverted from: Cry-omancer");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use your depression for evil.");

		e.addField("Attributes:", "- You can tear up, lament, or sink a player's heart.\n> Tear Up: Cause a storm of tears to befall a person's house, making them untargetable for this night and the next.\n> Lament: Incur a mass lamentation throughout the town, roleblocking every non-Unseen role in the game. (One use)\n> Sinking Heart: Cause a player's heart to sink. For the rest of the game, every non-Unseen player they visit will be roleblocked by them.\n- Additionally, those that visit you will be miserable and lose their attributes the following night.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["specialist", "1080", "379u"], "Unseen", "Specialist", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1080\nConverted from: Practicioner");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- On odd nights, choose a target, and nullify any form of protection (Defense, TP roles, etc.) from players visiting your target. On even nights, choose a target, and nullify any form of protection from players your target visits. Once per game, you may select yourself, nullifying protection from every non-Unseen role in the game.");

		e.addField("Goal:", "Unseen goal except the \"seen\" in \"Unseen\" is actually pronounced \"11fh\fa3:beegun:〠4hhh\"");
	});

	register_role(["thanator", "1081", "779u"], "Unseen", "Thanator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1081\nConverted from: Translethal");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Death Swap (Night): Choose two players. Any killing abilities that targets one player will be redirected onto the other. You may not use this ability on Unseen players.\n- Not It (Night, 1 use): Choose a player. All killing abilities that target an Unseen member will be redirected onto your target.");

		e.addField("Attributes:", "- Roleblock and Redirect Immune\n- You will not lose your charge of Not It if you do not redirect a killing ability.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tier_list_analyzer", "tierlistanalyzer", "tla", "analyzer", "1082", "921u"], "Unseen", "Tier List Analyzer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1082\nConverted from: Tier List Reviewer");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cross Reference (Night, 2 use): Select a tier. You will learn all roles present in the game in that tier.\n- Comparison (Night, 2 use): Select a tier. You will learn all players whose roles are in that tier.\n- Unranked (Night, 2 use): Select a player. If their role is not in the tier list, you will learn their exact role.");

		e.addField("Attributes:", "- Your abilities reference the tier list pinned in <#972887492359508048> at the time of your role card being sent. You will be sent an image of the most up-to-date tier list along with your role card.\n- You will not lose a charge of Unranked if your target's role is present on the tier list.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["private", "1083", "953u"], "Unseen", "Privateer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1083\nConverted from: Soldier");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Outpost (Night, 3 use): Choose a target. You will deal a Powerful attack to all non-Unseen players that visit your target.\n- Cage the Elephant (Night): Choose a target. If their visit was Astral, you will deal a Powerful attack to them. Otherwise, you will roleblock them.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["danganronpa_loved_ones", "danganronpalovedones", "dlo", "danganronpa", "loved_ones", "lovedones", "1084"], "Town", "Danganronpa: Loved Ones", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1084");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Heal a player at night.\n- Watch another player at night.");

		e.addField("Attributes:", "- Healing a player grants them Powerful defense and removes poison, etc.\n- Watching a player lets you learn the names of up to three random players who visit them, and you'll know if more than three players visit them.\n- You may only heal yourself once and you may not heal Town roles that have attributes or have used abilities that have publicly revealed themselves. (i.e. Mayor, Reserved, King, the other King)\n- You may only use one ability each night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["aide", "1085", "954u"], "Unseen", "Aide", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1085\nConverted from: Caretaker");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- House of the Damned (Night, 1 use): You will heal all members of the Unseen other than yourself for this night and the next.\n- Household Duties (Night): Choose an Unseen member. If they do not use a night ability, you will give them Invincible defense for the night.");

		e.addField("Attributes:", "- If you die the night that you use House of the Damned, the Unseen will still be healed the following night.\n- You are immune to roleblocks on the second night you heal the Unseen.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["criminal", "1086", "29u"], "Unseen", "Criminal", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1086\nConverted from: Civilian");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Craftsmanship (Day): Select a player, you will immediately copy their role for the night. Takes effect instantly.\nMaster of All (Night): Kill a player at night, disguise the players death as your selected role. You may also use your town abilities.");

		e.addField("Attributes:", "- May use up to two abilities per night, excluding Craftsmanship.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["soothsayer", "sooth", "1087", "55u"], "Unseen", "Soothsayer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1087\nConverted from: Psychic");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visions of Grandeur (Night, 3 use): Choose a role. You will be notified whether the role exists in the current game or not. If it does, you will receive a list of three people with one of them being the role that you chose.\n- Dark Fate (Day, 1 use): Predict a player to die tonight. If you are correct, that player will show up as Cleaned in the graveyard, you will learn their role and will, and they will not be able to access dead chat.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["soulcatcher", "1088", "60u"], "Unseen", "Soulcatcher", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1088\nConverted from: Medium");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Gather Souls (Night): Choose two players. You will reap the souls of these players if they die tonight.\n- Unleash (Night): Learn the roles of a number of alive non-Unseen players equal to the number of souls you have gathered.\n- Bind (Day, 1 use): Choose a player. They will gain Basic Defense for the night.");

		e.addField("Attributes:", "- You have gathered [x] souls.\n- Any players whose soul you have gathered will be unable to be used in any abilities of a living player that involves dead players (e.g. They cannot speak if they were added to the Occultist’s spirit list, Forensic Analyst cannot check for fingerprints at their house, etc.).");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["omniscient", "omni", "1089", "204u"], "Unseen", "Omniscient", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1089\nConverted from: Sounless");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Always Listening (Night, 1 use): Choose a player. You will receive all whispers sent to and from them the following day.\n- Sore Throat (Day, 1 use): Choose a player. They will only be able to communicate by whispers for the remainder of the day.\n- Chokehold (Night, 1 use): Choose a player who whispered yesterday. Deal a Basic attack to them.");

		e.addField("Attributes:", "- All whisper notifications will be disabled publicly; however, you will receive all whisper notifications.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["minesweeper", "mine", "1090"], "Town", "Minesweeper", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1090");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reveal a player at night, learning their role and how many of their 4 closest neighbours are evil.");

		e.addField("Attributes:", "- Roles with detection immunity show up as good.\n- If you target an evil player, you will die.\n- You may target yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["musician", "1091"], "Loyalist", "Musician", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1091");

		e.addField("Alignment", "Loyalist Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Play one of your many instruments.");

		e.addField("Attributes:", "- The piano will make you immune to voting the next day, usable once.\n- The snare drum will reveal someone's role the first time it is used on someone, it will attack them the second time.\n- The trumpet will wake everyone up early, roleblocking half of all players, which is dependent on whose abilities get processed first.\n- The flute will stop all visits on a target.");

		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["simulator", "sim", "1092"], "Town", "Simulator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1092");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, pick another player, and simulate a game of Grand Idea Mafia.");

		e.addField("Attributes:", "- The simulation will use the players and roles of the current game, as they were at the beginning of the game.\n- Simulated players will choose random targets if in possession of no relevant information, or make the best plays available to them, as determined by the host. This includes \"claiming\" during the day and making lynches.\n- When your ability resolves, you will learn the players who were alive at the end of the game, and whether or not the player you chose won.\n- The full events of every game you simulated will be published when the game ends, for funsies.\n- You may only simulate three games.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["fusillade", "fusil", "fusi", "1093"], "Thundercry", "Fusillade", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1093");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Protect a player, granting them powerful defense for the night.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- If you successfully protect against an attack, the attacker will be Striked.\n- You may target yourself and other Thundercry members.\n- If one or more Striked players are alive, all Thundercry members are detection immune\n- If two or more Striked players are alive, you gain basic defense.");

		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["random_verb_generator", "randomverbgenerator", "verb", "rvg", "1094"], "Neutral", "Random Verb Generator", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1094");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use your random abilities at night.");

		e.addField("Attributes:", "- At the start of each night, generate a random verb at https://randomwordgenerator.com/verb.php.\n- You will be given an ability that allows you to do that verb.\n- Idk host can try to make it make sense ig lmao. Yeah therell be no problem with this whatsoever.\n- Oh uh yeah the ability only lasts for like that night and yeah it doesnt like you dont like keep it otw you could get like nuke or smth and yeah and also like rng all the way yessir.");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["moth", "1095", "80u"], "Unseen", "Moth", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1095\nConverted from: Gossiper (Formerly WolfiZee)");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lamplamplamplamplamplamp (Day): Attach yourself to a lamp and receive all notifications that your target receives for the rest of the day and tonight.\n- Darklampbutstilllamplamplamplamp (Night): Learn the next 10 messages sent in private chats (such as factional chats, or messages between a jailor/wisteria and their target, etc). You will not know who sent them or where they came from, but the content is not censored. 1 use.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["writer", "1096", "78u"], "Unseen", "Writer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1096\nConverted from: Reporter");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Research (Night): Investigate someone to find about their exact action in the previous night phase.\n- Discover (Night): Investigate a dead body to learn about every action that targeted it during the night that it died. Targeting someone who was killed at day will get you results of the night before they were killed.\n- Publish (Night): Anonymously publish the results of your ability. Usable at the same time as Research and Discover, you will be granted extra time between gaining your results and the day beginning to switch to Forged Publish.\n- Forged Publish (Night): Anonymously publish whatever the fuck you want. Usable at the same time as Research and Discover, you will be granted extra time between gaining your results and the day beginning to switch to Publish, if you desire.");

		e.addField("Attributes:", "- You can only switch between the Publish abilities. Once abilities are processed, you cannot switch between Research and Discover.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["random_adjective_generator", "randomadjectivegenerator", "adjective", "adj", "rag", "1097"], "Town", "Random Adjective Generator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1097");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone a random adjective at night.");

		e.addField("Attributes:", "- At the start of each night, generate a random adjective at https://randomwordgenerator.com/adjective.php.\n- You will be allowed to give another player that adjective, which acts as an attribute and like yeah you get the gist they like yknow the host figures out wtf it means and makes it apply and yeah.\n- And yeah only that night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["witness", "1098", "53u"], "Unseen", "Witness", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1098\nConverted from: Lookout");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sharp Eyes (Night): Choose a player. Find out all players who visited them and all players who they visit.\n- Little Birdie (Day): Choose a player. You will send a birdie to their house tonight. Your birdie will report back to you at the start of the following day letting you know whether your target left their house last night.\n- All Seeing (Night, 1 use): Choose a player and predict who they visit tonight. If you are correct, you will learn their role.");

		e.addField("Attributes:", "- Your Little Birdie will notify you if your target uses any ability that would cause them to leave their house, including Astral abilities.\n- You may choose to predict that your target visits themselves or visits nobody with All Seeing. If your target visits multiple people, you will be informed of their role if they visit the player you predicted even if they visit anyone else.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["undead_retaliator", "undeadretaliator", "undead", "retaliator", "1099", "61u"], "Unseen", "Undead Retaliator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1099\nConverted from: Retributionist");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Resurrect (Night): Use the ability of a dead player - you are not limited by faction.\nHarden Corpse (Night): Make a corpse usable again, or make it usable twice if you haven't used it. 2 uses, usable at the same time as Resurrect.");

		e.addField("Attributes:", "- Unlike normal ToS, you do not interfere with other roles that raise the undead. Also, corpses are only usable once.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["hunter", "1100", "54u"], "Unseen", "Hunter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1100\nConverted from: Retributionist");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hunter’s Mark (Day): Choose a player to give them a Hunter’s Mark.\n- Prey (Night): Choose a player. If they visit a player with a Hunter’s Mark, you will deal a Powerful Attack to whoever they visit.\n- Aim and Fire (Night, 1 use): Choose a player with a Hunter’s Mark to deal a Powerful Astral attack to them.");

		e.addField("Attributes:", "- If you use Prey on a player with a Hunter’s Mark and they do not visit anyone, you will attack them.");

		e.addField("Goal:", factions.Unseen.goal);
	});
};
