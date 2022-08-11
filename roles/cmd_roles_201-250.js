//Credit: Rasen

module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["revenant", "201"], "Neutral", "Revenant", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 201");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Husk a player (attack).\n- (At any time) Banish a Husked player.");

		e.addField("Attributes:", "- Anyone you successfully Husk will appear to be alive to themselves and other players, and will be able to vote/speak. However, they will actually be dead. Husked players don't know that they were attacked by you.\n- Husked players do not have access to dead chat, but if an action is used on them at any point by a living player, or if the Husked player were to \"die\" or be lynched, their Husked status is removed.\n- Husked players may still perform actions, however:\n> Their visits are nonexistent.\n> Investigative abilities will produce completely random information.\n> Killing abilities will produce feedback, but will never actually kill the target.\n> Any other abilities that have an actual effect on someone will simply not have an effect, but will produce feedback nonetheless.\n- You must rest for a night before attacking again if you attacked two nights in a row.\n- No more than 3 players can be Husked at any point. If there are 3 Husked players, your attacks will not cause killed players to become Husked.");

		e.addField("Goal:", "Kill all who oppose you.");
	});

	register_role(["jack_in_the_box", "jackinthebox", "jitb", "202"], "PaleMoon", "Jack in the Box", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 202");

		e.addField("Alignment", "Pale Moon Support", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Turn your crank to charge yourself up.\n- Stay guard at one of your Pale Moon allies' houses.\n - Scare someone.");

		e.addField("Attributes:", "- Roleblock Immunity\n- You start with 1 charge of each of your abilities.\n- Spending a night to turn your crank up gives you 1 charge of one ability of your choice.\n-Your defense is immediately lowered to none when turning your crank. This means protection is useless for the night.\n-If a Pale Moon you're guarding is attacked, immediately roleblock all visitors, bypassing Roleblock Immunity.\n-Scaring someone lowers their defense value to None.\n-If you die, you deal an Unstoppable attack to a player of your choice.\n-Once the PMCS begins, you gain 1 charge of each of your abilities, and can now deal an unstoppable attack to a player of your choice every night.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["hi", "203"], "Neutral", "Hi!", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 203");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to say \"Hi!\" to during the day.");

		e.addField("Attributes:", "- At the start of the next night, a private chat will be opened between you two. You may only say \"hi\", \"yes\", or \"no\". You will automatically say \"Hi!\" when the chat is opened. The other player may say anything.");

		e.addField("Goal:", "Ensure that at least 3 other players lose at the end of the game. You do not need to be alive to win.");
	});

	register_role(["soundless", "204"], "Town", "Soundless", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 204");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack an amount of players equal to the amount of whispers you made the previous day.");

		e.addField("Attributes:", "- You are forced to attack if you have made a whisper.\n- Control / Redirect Immune.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["manager", "205"], "Town", "Manager", {subCat: "Power"}, (e)=>
	{
		e.setDescription("Post 205\n*Hello, Karen. Please politely fuck off.*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to re-hire at night.\n- Use a Town role not in the game to use their abilities at night. (3 use)");

		e.addField("Attributes:", "- When you choose someone to re-hire, their role will change to a random Town role in the GIM thread. This ability will fail on all non-Town roles and will notify the target regardless of if it is successful or not. You may not re-hire the same person more than once. You may not re-hire a person into a Town Power role, a unique role, a role deemed unbalanced by the Role Jury, or a role banned by Rule 16. You may rehire yourself, and if you do this, you will be rehired into a random non-Power Town role.\n- You may choose a Town role from the GIM thread and use one of its abilities. You may not use abilities of any Town Power roles, any roles deemed unbalanced by the Role Jury, or any roles banned by Rule 16. You may only choose each individual Town role once. You may use both day and night abilities, but you may only use an ability once per day.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["necromorph", "206"], "Neutral", "Necromorph", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 206");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None (Variable)", true);
		e.addField("Defense", "None (Basic/Variable)", true);

		e.addField("Abilities:", "- Serve a dead evildoer at night.");

		e.addField("Attributes:", "- On any night you are alive, you may choose a dead player to serve for the rest of the game. They cannot be Town, Neutral Benign, or another Necromorph.\n- You will be able to freely speak with the evildoer you're serving. If they were in a night chat while alive, you will be able to speak in it.\n- The evildoer you serve will be able to perform their action through you each night as if they were you. You will both receive any and all results that would normally be received.\n- After you choose an evildoer to server, you will still appear as a Necromorph; however, your statistics and immunities will conform to theirs.\n- All evildoers will be notified that there is a Necromorph when they die.\n- You have one bulletproof vest that grands you Basic defense until you are attacked by a non-Town role for the first time. You will lose this vest after choosing an evildoer to serve.");

		e.addField("Goal:", "Help a dead evildoer achieve their cause.");
	});

	register_role(["hidden_king", "hiddenking", "hking", "king", "207"], "Any", "Hidden King", {subCat: "Support", anyExCat: ["Neutral"]}, (e) =>
	{
		e.setDescription("Post 207");

		e.addField("Alignment", "Unique Random Faction Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, cause your vote to count thrice. This is not public, nor will there be any indication that it happened. You can do this one time per day.\n- During the night, send your loyal guards to protect another player, granting them Powerful defense against direct attacks.\n- During the night, you may send your guards to attack another player.");

		e.addField("Attributes:", "- You will start on a random faction. If you are part of an evil faction, you will not be allowed to attack other players unless no one else is able to kill. Ignore this if the Hidden King is a member of the Coven.\n- You may only guard yourself once.\n- You may only attack twice if you are a part of the Town.");

		e.addField("Goal:", "See faction goal");
	});

	register_role(["hoop_specialist", "hoopspecialist", "specialist", "hooper", "208"], "PaleMoon", "Hoop Specialist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 208");

		e.addField("Alignment", "Pale Moon Support", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place an Inverting Hoop at a player's house.\n- Place two Transporting Hoops at two player's houses.\n- Move a Hoop.");

		e.addField("Attributes:", "- Placing an Inverting Hoop at a player's house inverts all their values. If they're granted Powerful Defense they will be dealt a Powerful Attack, and If they're dealt a Powerful Attack they will be granted Powerful Defense, etc.\n- You may have 2 Inverting Hoops and up to 2 transporting hoops at all time.\n- Transporting Hoop A redirects all visitors of the hooped target to B. B redirects to A.\n- When the PMCS, two random targets that visited an hooped player will be dealt an Astral Basic Attack.\n- Your Transporting Hoops dont affect the Clown.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["sandstone", "209"], "Rock", "Sandstone", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 209");

		e.addField("Alignment", "Rock Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player every night, and place sand at their house. Malicious visitors (attempts to kill) will be roleblocked because they fell in a pit of sand that suddenly enveloped the ground. They then die, and are tortured for each night they're dead, the host posting a written Dangaonronpa-styled execution for them every night.");

		e.addField("Attributes:", "- They player is further tortured by the Sandstone, who can send pictures of grapes in <#970059745807437876> upon successfully killing someone.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["based_detector_but_its_not_a_based_detector_its_actually_just_granite", "bdbinabdiajg", "based_detector", "granite", "210"], "Rock", "Based Detector but it's not a Based Detector it's actually just Granite", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 210");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Break down a target's defenses. Their defense will be set to None for the night. If the target's defense is already None, they will instead gain Powerful defense for the night.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["the_royal_guards_which_tend_to_apparently_exist_in_certain_social_deduction_games_despite_not_being_players", "trgwttaeicsdgdnbp", "royal_guards", "royalguards", "211"], "Town", "The Royal Guards Which Tend To Apparently Exist In Certain Social Deduction Games Despite Not Being Players", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 211");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect a player at night, granting them Powerful defense.\n- Attack a player at night, dealing to them a Powerful attack.");

		e.addField("Attributes:", "- You may only take one action per night.\n- You don't count as a player. (*You can't be voted for, whispered to, targeted, etc., and you don't count towards majority.*");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["corpo_s_city_legend", "corponightcitylegend", "cncl", "212"], "Town", "Corpo Night City Legend", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 212");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a person for their exact role");

		e.addField("Attributes:", "- You are lost in corporate branding hell (a grocery store), and may not access the day or dead chat at any time. Fortunately, you *may* vote (if alive).\n- You may not whisper.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["companion", "213"], "Town", "Companion", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 213\n*Never gonna run around and desert you.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to accompany one player during the night.");

		e.addField("Attributes:", "- When you choose to accompany a player, all actions performed against you and your target will fail. Your target will also be forced to use their night action on you bypassing redirection immunity. You are immune to any roleblock or redirect abilities used by your target.\n- You may not use your ability for two consecutive nights.\n- You may not accompany yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["animal_breeder", "animalbreeder", "ab", "214"], "PaleMoon", "Animal Breeder", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 214");

		e.addField("Alignment", "Pale Moon Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send your dog to attack someone.\n- Send your tiger to attack someone.\n- Send your wolf to attack someone.\n- Feed one of your animals.");

		e.addField("Attributes:", "- Your dog will deal a Basic Astral attack to your target.\n- Your tiger will deal a Powerful Astral attack to your target and a random visitor.\n- Your wolf will deal a Powerful Astral attack to your target and, if they survive, will cause them to bleed, dealing an Unstoppable attack to them the night after the next night.\n- After your tiger and wolf attack one night, you must feed them for them to be able to attack ever again.\n- Your dog doesn't need to be fed, but you can feed it to upgrade its attack to Powerful.\n- When the PMCS begins, you no longer need to feed your animals and their attack values are increased to Unstoppable.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["forensic_analyst", "forensicanalyst", "215"], "Town", "Forensic Analyst", {subCat: "Investigative"}, (e) => 
	{
		e.setDescription("Post 215\n*Yeaaaaaaaaaaaaaaaaaaaaaaaaah!*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check if a player's fingerprints were found at a dead player's house each night.\n- Check if a player has a criminal history each night.");

		e.addField("Attributes:", "- If a player has killed another player in the past, they will have a criminal history.\n- If a player visited a dead player on the night they died, they will leave their fingerprints at the dead player's house.\n- You may not multitask.\n- While you are alive, all players will flip their actual role. Any abilities that affect what players flip upon death will be nullified.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["damp_rock", "damprock", "216"], "Rock", "Damp Rock", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 216");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, make it rain at your house. You have 3 uses of this ability.");

		e.addField("Attributes:", "- Rain causes any visitors to slip and fall in a puddle, killing them and causing their night ability to fail.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["random_adjective_rock", "randomadjectiverock", "randomrock", "random_rock", "217"], "Rock", "Random Adjective Rock", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 217");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- You will be assigned a random adjective at the beginning of the game. Then, come up with a Rock role based on a rock of that description. It can't have mechanics not seen on any other role. With host approval, you will become that role.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["super_executioner", "superexecutioner", "super_exe", "superexe", "218"], "Neutral", "Super executioner", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 218");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attack someone at night.");

		e.addField("Attributes:", "- You will be given a random role in the game at the beginning of Day 1.\n- If you attack someone who isn't in the same faction as your target, you will die instead.");

		e.addField("Goal:", "Kill your target.");
	});

	register_role(["all-consuming_ooze", "allconsumingooze", "ooze", "219"], "Neutral", "All-Consuming Ooze", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 219");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Absorb a player each night. They are removed from the game.");

		e.addField("Attributes:", "- Players you remove from the game become part of you. They gain access to your private channel and you to theirs. You gain all their abilities, attributes, immunities, stats, etc. except factional ones. They win if you win.\n- When you deal attacks, your attack value corresponds to that of the role that gave you the ability to deal that attack.\n- If an attribute allows you to use multiple abilities each night, you may instead only use multiple abilities from the role(s) that gave you that attribute each night.\n- You may elect at any time to remove any number of your abilities or attributes from other roles, but you will not be able to get them back. ");

		e.addField("Goal:", "Kill or absorb all who would oppose you.");
	});

	register_role(["fate_decider", "fatedecider", "220"], "Neutral", "Fate Decider", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 220\n*Do you believe in karma?*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Decide whether the dead players should be sent to heaven or hell.");

		e.addField("Attributes:", "- All players will appear as cleaned in the graveyard before you have made your decision on whether to send them to heaven or hell. This includes lynched players, but not yourself. You will automatically send yourself to heaven.\n- If the player in question is a member of a faction considered \"good\" in factions or a Neutral Benign role, you must send them to heaven. Otherwise, you must send them to hell.\n- You will have twelve hours after a player has died to make your decision. Once you have made your decision on a player, the actual role of the player will be revealed.\n- Your decision will not affect dead chat.\n- Your ability will persist once you are dead.\n- You will not have access to dead chat once you die.\n- You will not have to decide the fate of anyone who died on the last day/night of the game once the game ends. They will not count towards your win condition.");

		e.addField("Goal:", "Send at least two-thirds of the dead players to their correct afterlife.");
	});

	register_role(["undertale_fanboy_from_2015", "undertalefanboyfrom2015", "undertalefanboy", "undertale_fanboy", "221"], "Neutral", "Undertale Fanboy From 2015", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 221");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check if a player owns the hit 2015 Toby Fox game \"Undertale\".");

		e.addField("Attributes:", "- When checking, the player must provide their Steam library. If they have none, they will be attacked. They will also be attacked if their Steam library doesn't include the hit 2015 Toy Fox game \"Undertale\".\n- If they can prove they own the Toby Fox game \"Deltarune\", this will be downgraded to a basic attack.");

		e.addField("Goal:", "Kill literally everyone who doesn't own the hit 2015 Toby Fox game \"Undertale\"");
	});

	register_role(["man_in_the_wall", "maninthewall", "tmitw", "mitw", "wallman", "wall_man", "wall", "222", "good_argument_however_i_am_in_your_walls"], "Town", "The Man in the Wall", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 222");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stalk a player during the day, marking them for collapse.\n- Collapse a stalked player's house at night.");

		e.addField("Attributes:", "- If you collapse a player's house, everyone targetting them will have their ability fail, and they will go home from assuming the player is dead. The targetted player is not actually affected.\n- If the targetted player visits someone who saw their collapsed house, that visit will still go through.\n- You can collapse houses while dead. You may not mark while dead.\n- If a marked target is attacked by a rampage attack, you will be attacked too.\n- You cannot stalk yourself.\n- Control immune.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["gatekeeper", "gaslight_gatekeep_girlboss", "223"], "Neutral", "Gatekeeper", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 223\n*Drink the Kool-Aid.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Initiate someone into your secret society each night.");

		e.addField("Attributes:", "- All players you have initiated into your society will receive an extra night chat that you may not access.\n- Once four other people have been initiated into your society, all four players and yourself will commit suicide dealing an Unstoppable attack. This will happen the night after you have recruited the fourth member. Dead members will not count towards this objective.\n- All players in your secret society will gain Basic defense.\n- If you die before you have met your win condition, all players in your secret society will leave the society.\n- You may not initiate yourself into your own secret society.");

		e.addField("Goal:", "Recruit four people into your secret society.");
	});

	register_role(["lucifer", "224"], "FallenAngel", "Lucifer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 224");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Tempt someone each night. They'll be forced to visit you the next night through redirect immunity. They'll know they were tempted.\n- Raise Hell to attack all your visitors at night.");

		e.addField("Attributes:", "- If you tempt a Fallen Angel, their visit won't deal damage to you and you'll be able to take two actions the next night.\n- If you tempt a non-Fallen Angel, your ability will automatically fail if them visiting you would kill you, and you'll be notified of this.\n**Sin of Pride** — If you're the last Fallen Angel remaining, you can use you any number of different abilities each night, your targets won't know they're tempted, you'll have roleblock, redirection, conversion, and detection immunity, you'll appear as a role of your choice to all investigative effects, your attack is Overkill, and you have total death immunity at night.");

		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["rock_n_roll", "rocknroll", "rock_and_roll", "rockandroll", "225"], "Neutral", "Rock n' Roll", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 225");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Investigate a player to find out what kind of rock they are\n- Attack a player, rock or not.");

		e.addField("Attributes:", "- Youw ill appear to be a random Rock role.\n- Upon dying, all Rocks will gain Invincible defense for the night.");

		e.addField("Goal:", "Win with the Rocks OR Win by yourself");
	});

	register_role(["corruptionist", "226"], "Neutral", "Corruptionist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 226\n*A tiny little man holding your arteries shut. Yeah, that's right, motherfucker, then what?*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose someone to corrupt each night. (2 use, only lose a charge if target is attacked)");

		e.addField("Attributes:", "- When a player is corrupted, all attempts to kill that player **will** succeed.\n- If your target is attacked, their Defense will drop to None, all attacks on the player will bypass any protective effects, all attacks on the player will be Astral, and any other actions needed to ensure that this player will die will be taken.\n- Your target will not be notified that they were corrupted unless your target dies the night they were corrupted.\n- You have Basic defense until you are attacked for the first time.");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["server_admin", "serveradmin", "227"], "Neutral", "Server Admin", {subCat: "Chaos"}, (e) => 
	{
		e.setDescription("Post 227");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Change the server icon, server name, or the name of any role, or the name of any category, or the name of any channel, or the nickname of any player each night. (*The host will carry out your change.*)");

		e.addField("Goal:", "Make at least 4 people laugh. (*A player laughs if they send a Discord message in reaction to the change that is a commonly accepted Internet expression of having found something funny, such as \"lmao\", \"pFFFFFT\", or \"sdjfsdjisdjfisjdfihhh\".*)");
	});

	register_role(["uzumaki", "spiral", "uzu", "naruto", "229"], "Neutral", "Uzumaki", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 229");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target a player at night, turning them into a Spiral. This does not count as a role conversion.\n- Target a known Spiral, forcing them to target another player.");

		e.addField("Attributes:", "- You may only perform one ability per night.\n- If a Spiral visits another target at night, their target will become a Spiral.\n- If a Spiral visits another Spiral, they will both deal a Powerful attack to each other.\n- If a Spiral visits you the night you're attacked, the Spiral will die instead of you.");

		e.addField("Goal:", "Live to see all living players become a Spiral.");
	});

	register_role(["chess_player_pirate", "chessplayerpirate", "chess_pirate", "chesspirate", "228"], "Neutral", "Chess Player Pirate", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 228");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Duel someone every night. The host will organise a time for you two to play chess. If the Pirate wins, their target is attacked. Losing chess warrants assault I guess.");

		e.addField("Attributes:", "- Playing chess roleblocks your target because multitasking is hard.\n- Upon winning, you get access to your victims' player channels, though you may not post anything besides pictures of grapses. You also die.");

		e.addField("Goal:", "Win two duels.");
	});

	register_role(["overseer", "230"], "Neutral", "Overseer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 230\n*Time for a paradigm shift.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose two people to swap their roles at night.");

		e.addField("Attributes:", "- Your ability only works on members of the same faction.\n- You cannot swap the role of a player whose role has been publicly revealed for any reason.\n- You may not swap your own role.\n- You have Basic Defense until you are attacked for the first time.\n- You may no longer use your ability and you lose your defense after you have achieved your win condition.");

		e.addField("Goal:", "Swap two players' roles three times.");
	});

	register_role(["animal_keeper", "animalkeeper", "231"], "Town", "Animal Keeper", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 231");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone an animal every night.\n- Blow your whistle to make all the animals run away.");

		e.addField("Attributes:", "- You will not know what animal is given to a player.\n- When you blow your whistle, you may know how many of each type of animal ran away.\n- You may not blow your whistle until youve given animals to at least 3 people.");

		e.addField("Animals:", "- Dogs are given to town members.\n- Siamese Cats are given to mafia members.\n- Black Cats are given to coven members.\n- Killer Bunnies are given to neutral evils and neutral killers.\n- Beavers are given to the rest of the neutrals and rocks.\n- Lambs are given to plants.\n- Phoenixes are given to underworld.\n- Doves are given to hallow.\n- Jaguars are given to stalkers.\n- Wolves are given to were.\n- Bats are given to vampires.\n- Tuxedo Cats are given to umbrae.\n- Goats are given to everfrost.\n- Elephants are given to the pale moon.\n- Squids are given to the sith\n- Pigeons are given to the insurgency\n- Canaries are given to the loyalists\n- Spiders are given to the SCP\n- Eagles are given to the thundercry\n- Parrots are given to the pirates\n- Deers are given to the pokémon\n- Foxes are given to foxes (lmao)\n- Sheeps are given to the cult\n- Horses are given to the horsemen\n- Owls are given to the unseen\n- Skunks are given to the biohazard");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["revenge_labs", "revengelabs", "232"], "Neutral", "Revenge Labs", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 232\n*Oh that? It means you should probably buy the game instead of pirate it. o:)*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target a player each night to give them a peculiar message.");

		e.addField("Attributes:", "- Every player you visit will receive a nonsensical message. The host will make up a list of nonsensical messages to send and one of them must be \"*What is the square root of a fish? Now I'm sad.*\"\n- If any player you have visited mentions this message, they will be instantly modkilled for being a filthy pirate.\n- You may not target yourself.");

		e.addField("Goal:", "Live to see at least one person modkilled because of you");
	});

	register_role(["monkey", "233"], "Mafia", "Monkey", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 233");

		e.addField("Alignment", "Unique Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target to \"see\", and a target to \"do\".");

		e.addField("Attributes:", "- The player you \"see\" will be roleblocked, and you will use their night ability on the target you \"do\".\n- You will visit both players, and be affected by rampaging abilities if one would target either player.\n- Your ability will fail if your target must target multiple players, but you will not be notified of this.\n- If your \"see\" target can kill, your attack value will always be Basic.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["the_great_equalizer", "thegreatequalizer", "great_equalizer", "greatequalizer", "equalizer", "tge", "234"], "Town", "The Great Equalizer", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 234");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grant a player Basic defense for the night each night.");

		e.addField("Attributes:", "- All attacks are Basic.\n- You may not self-target.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["dog", "235"], "Neutral", "Dog", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 235\n*bork bork*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select an owner during the day if you don't have one.\n- Run away from your owner at night. This will process at the end of the night.");

		e.addField("Attributes:", "- The player you select as your owner will receive a message telling them a Dog has chosen them as their owner at the beginning of the following night. You and your owner will be given a private chat that stays open as long as that player is still your owner.\n- Your owner must feed you every night. If your owner does not choose to feed you at night, you will run away and select a new owner the next day. Feeding does not count as a night ability. You cannot select a previous owner as your new owner.\n- If anyone attempts to attack your owner, your owner gains Powerful Defense, and you will cause the attacker to start bleeding. If they are not healed the following night, the attacker will die.");
		
		e.addField("Attributes (cont.)", "- Your owner may choose to feed you treats alongside feeding you normally. If they do this, you will protect yourself from attackers the same way as you protect your owner for the night. You may only be fed treats twice across all of your owners. Your owner will be notified how many treats are left when they become your owner.\n- If an attacker targets you, you and your owner will be dealt the attack applied to you unless you were fed treats that night.\n- You may not be your own owner you nincompoop.");

		e.addField("Goal:", "Survive to the end of the game with an owner");
	});

	register_role(["popcorn_boy", "popcornboy", "236"], "PaleMoon", "Popcorn Boy", {subCat: "Protection"}, (e) =>
	{
		e.setDescription("Post 236");

		e.addField("Alignment", "Pale Moon Protection", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Serve normal popcorn at night.\n- Serve salted popcorn at night.\n- Serve sweet popcorn at night.\n- Salty your popcorn at night.\n- Put sugar on your popcorn at night.");

		e.addField("Attributes:", "- Normal popcorn increases your target's defense by one. Applies to healing.\n- You cannot serve normal popcorn twice in a row.\n- Salted popcorn redirects everyone away from your target. They will be redirected to the neighbours, at random.\n- Sweet popcorn redirects all visitors from both neighbours to your target.\n- It takes one night to salty or put sugar on your popcorn. You don't need to prepare normal popcorn.\n- When the PMCS begins, you no longer need to prepare your popcorn, and you may choose to deal a Powerful rampage attack by serving salted or sweet popcorn.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["viper", "236"], "Coven", "Viper", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 236");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. Until the next time this ability resolves, their alignment is Neutral Killing and their win condition is replaced by \"Kill all who would oppose you.\" and they can't win in any other way.");

		e.addField("Attributes:", "- If you have the Necronomicon, you may instead choose to dela a Basic attack to your target.\n- You may self-target.");

		e.addField("Goal:", factions.Coven.goal);
		});

	register_role(["backup", "back_it_up_back_it_up", "237"], "Neutral", "Backup", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 237\n*How unoriginal.*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Become your backup role once the player with that role dies.");

		e.addField("Attributes:", "- You are a backup of the [x].\n- If your faction has a night chat, you will not have access to it until you become your true role.");

		e.addField("Goal:", "Become the role you are a Backup of and fulfill its win condition OR win with the faction that you are a Backup of.");
	});

	register_role(["adorable_catgirl_nyaa~!", "adorablecatgirlnyaa", "adorable_catgirl", "adorablecatgirl", "catgirl", "submissivebreedablebuyablepsychotictwinkgothemopetgirlcatmaidpoledancerhumiliationlovingsexyvoicedpegginglovingadorablepsychicprettymermaidkirbywife", "238"], "Neutral", "Adorable Catgirl Nyaa~!", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 238");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make cute sounds and distract a player during the night.");

		e.addField("Attributes:", "- Distracting a player gives them Powerful defense.\n- After a player has been distracted, the only way they can communicate the following day is to whisper to you.\n- Anybody who attacks you has a 51% chance of also dying.");

		e.addField("Goal:", "Live until the end of the game.");
	});

	register_role(["ability_thief", "abilitythief", "at", "239"], "Mafia", "Ability Thief", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 239\n*Yar har fiddle dee dee!*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal the abilities of a random role in the game.");

		e.addField("Attributes:", "- Each day, a random non-Mafia role in the game will be randomly selected. You will be informed which role this is at the beginning of the night.\n- You will gain any passives this role has, and you may perform its night ability/abilities. If you perform the role's night ability/abilities, the player with that role will be roleblocked through immunities.\n- You may not steal from any roles that have a day ability that enables the usage of the night ability (e.g. Jailor's jail, Pirate's duel, Less Annoying Grandmaster In My Recommended Section's duel)");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["spectator", "240"], "PaleMoon", "Spectator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 240");

		e.addField("Alignment", "Pale Moon Support", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bosost or boo a player every night.");

		e.addField("Attributes:", "- When you use your ability on a player, the host chooses a random option from the following\n> Their defense value is increased by one (boost)\n> Their attack value is increased by one (boost)\n> They will use their ability an additional time on a random target.\n- They gain detection, roleblock, redirection, and control immunity.\n> Their defense value is lowered by one.\n> Their attack value is lowered by one.\n> They are redirected to a random target.\n> They lose all immunities and are roleblocked.\n- After the PMCS has begun, you will only boost Pale Moon members and non-NK Neutrals, and will only boo Townies, other evil factions, and NKs.\n- After the PMCS has begun, you may instead choose to deal an Unstoppable attack to a player.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["imposter", "impostor", "amongus_sussy_baka", "241"], "Neutral", "Imposter", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 241");
		e.author.iconURL = "https://i.pinimg.com/originals/3a/75/da/3a75daaad1172a3c4f7b248718eec2d2.jpg";

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Cause a sabotage at night.");

		e.addField("Attributes:", "- Lights sabotage will disable message history for day chats, and blackmail everyone.\n- Comms sabotage will disable message history for private chats and whispers, and disable viewing the graveyard.\n- Reactor sabotage will kill everybody if not fixed the next day.\n- Sabotages can be fixed by a minigame.\n- Only one sabotage can activate at a time.\n- Each sabotage has a cooldown of 2 days.\n- Being jailed canont stop your sabotages.\n- You can kill AND sabotage in the same night (Witch cannot control sabotages)\n- Control and Conversion immune");

		e.addField("Goal:", "Eliminate everyone else while avoiding being sus");
	});

	register_role(["forager", "242"], "Town", "Forager", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 242");

		e.addField("Alignment", "Unique Town Casual", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use one of your acquired items at night.");

		e.addField("Attributes:", "- Every night you are not targeted by direct visits, gain an item at random:\n> Gun deals basic attack.\n> Vest gives basic defense.\n> Smokebomb roleblocks target player.\n- You cannot use the same item two nights in a row.\n- You cannot receive an item and use one in the same night.\n- You can give an item to another player. You will not receive an item this night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["delta_ditto", "deltaditto", "ditto", "243"], "Neutral", "Delta Ditto", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 243");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Choose another player at night. The host will choose another role from the roles thread that is the closest approximation of their role, not counting faction, and you will become that role but you keep this ability.");

		e.addField("Goal:", "Morph into another role and win as it.");
	});

	register_role(["i_really_hate_post_371", "ireallyhatepost371", "fuck371", "244"], "Neutral", "I really hate Post 371.", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 244");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check a player at night to see if they're Post 371. If they are, stab them to death immediately. Because you hate Post 371. Everyone hates Post 371.");

		e.addField("Attributes:", "- May not spawn unless Post 371 is in the game.");

		e.addField("Goal:", "Kill Post 371");
	});

	register_role(["kirby", "245"], "Neutral", "Kirby", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 245\n*Poyo!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Unstoppable (sucking)", true);
		e.addField("Defense", "Basic (pre-suck)", true);

		e.addField("Abilities:", "- Choose someone to suck up at night.");

		e.addField("Attributes:", "- When you suck up someone, they are killed, and their role in the graveyard will appear as \"Warped\".\n- You will become the role of the player that you sucked up while retaining the following attributes.\n- You and your target will have a one-on-one permanent chat.\n- Your target will not be able to access dead chat.\n- Your target is still in control of their night and day actions, but you will be the one to carry them out.\n- You will chat with your faction's night chat if they have one.\n- When you die, your role will be shown as [your new role] Kirby (e.g. Sheriff Kirby or Coven Leader Kirby). This does not apply if you die before you suck up a player.\n- You may not suck yourself up you nincompoop.");

		e.addField("Goal:", "Suck up a player and fulfill their win condition.");
	});

	register_role(["triumphalist", "246"], "Neutral", "Triumphalist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 246");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone each night. If you succeed in killing them, gain all their attributes.\n- During the day, you may choose to revert back to having no attributes. (Two uses.)");

		e.addField("Attributes:", "- None");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["gambler", "247"], "Neutral", "Gambler", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 247\n*You lose all bets that you don't take.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a person to gamble on at night.");

		e.addField("Attributes:", "- When you choose a person to gamble on, you are gambling on them surviving until the end of the game.\n- If a player you have gambled on dies, you must wait one night before gambling on another player.\n- You may gamble on three players. You may not change your gamble unless the player you gambled on dies.\n- If all three of the players you gambled on die, you will commit suicide out of shame.\n- If you die, your gamble still rides on the last person you gambled on.\n- You may not gamble on yourself.");

		e.addField("Goal:", "Gamble on a person who survives until the end of the game.");
	});

	register_role(["salesman", "248"], "Neutral", "Salesman", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 248\n*Hi, Billy Mays here with a special TV offer!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a person to sell a product to at night.");

		e.addField("Attributes:", "- If you sell to a player with a limited usage of their ability, you will successfully sell a product to them, and they will gain an extra use of their ability.\n- This role may not be rolled if there are not any players in the game with limited uses of their ability.");

		e.addField("Goal:", "Make three sales.");
	});

	register_role(["deserter", "249"], "Neutral", "Deserter", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 249");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Shoot a player at night.\n- Make your vote count twice during the day.\n- Wear a bulletproof vest at night.");

		e.addField("Attributes:", "- You have one bullet.\n- You have two vests.\n- You may increase your voting power three times.\n- You will appear suspicious to Sheriffs, and as a random enemy role in the game to evil faction investigative abilities.");

		e.addField("Goal:", "Live to see the game end.");
	});

	register_role(["post_371", "post371", "not371", "not_371", "371", "250"], "Neutral", "Post 371", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 250");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Frame a player to appear to be the role of Post 371.");

		e.addField("Attributes:", "- May not spawn unless 244: I really hate post 371 is in the game.\n- You are not Post 371, you are Post 250.\n- Those framed as Post 371 will roelflip to be Post 371, but will not actually be Post 371.");

		e.addField("Goal:", "Cause I really hate post 371 to kill the wrong target at least once.");
	});
};
