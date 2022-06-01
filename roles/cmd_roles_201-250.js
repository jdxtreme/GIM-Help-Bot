//Credit: Rasen

module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["revenant", "201"], "Neutral", "Revenant", (e) =>
	{
		e.setDescription("Post 201");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player.\n- During the day/night, while choose a role to appear as in the graveyard when you feign death.\n- At night, choose to feign your death, and a fake cause of \"death\" (ww, sk, etc).");

		e.addField("Attributes:", "- When \"feigning death\", you will be alive, but will register as dead.\nYour displayed role in the graveyard when feigning death will be the one you chose with your second ability (you will appear to die by the role that killed you by default). Your cause of death when feigning death will be displayed on the graveyard according to what role you chose with your 3rd ability. The default displayed role is Survivor. If you actually die, your role in the graveyard is updated to Revenant.\n\n- You may only attack if you have successfully feigned death, and you can only attack on every other night. If more than half of players are dead, your attacks will be upgraded to Powerful.\n\n-If you have not already feigned your death, the first time you are killed, you will secretly survive and feign your death.");
		e.addField("Attributes (cont):", "- Players may still target you with their abilities, but they will gain no comfirmation tuat targetting you was successful, nor will they gain feedback from using their ability on you.\nPlayers may also vote/lynch players in the graveyard (you can also be killed this way).\n\n- While feigning death, the following will occur:\nYou will have access to the dead chat.\nYou will be incapable of voting.\nYou can not speak in the public day chat.\nYou cannot be directly whispered to, but you may speak in whisper channels.");

		e.addField("Goal:", "Kill all who oppose you.");
	});

	register_role(["jack_in_the_box", "jackinthebox", "jitb", "202"], "PaleMoon", "Jack in the Box", (e) =>
	{
		e.setDescription("Post 202");

		e.addField("Alignment", "Pale Moon Support", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Turn your crank to charge yourself up.\n- Stay guard at one of your Pale Moon allies' houses.\n - Scare someone.");

		e.addField("Attributes:", "- You start with 1 charge of each of your abilities.\n- Spending a night to turn your crank up gives you 1 charge of one ability of your choice.\n-Your defense is immediately lowered to none when turning your crank. This means protection is useless for the night.\n-If a Pale Moon you're guarding is attacked, immediately roleblock all visitors.\n-Scaring someone lowers their defense value to None.\n-If you die, you deal an Unstoppable attack to a player of your choice.\n-Once the PMCS begins, you gain 1 charge of each of your abilities, and can now deal an unstoppable attack to a player of your choice every night.");

		e.addField("Goal:", "Pale Moon goal.");
	});

	register_role(["hi", "203"], "Neutral", "Hi!", (e) =>
	{
		e.setDescription("Post 203");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to say \"Hi!\" to during the day.");

		e.addField("Attributes:", "- At the start of the next night, a private chat will be opened between you two. You may only say \"hi\", \"yes\", or \"no\". You will automatically say \"Hi!\" when the chat is opened. The other player may say anything.");

		e.addField("Goal:", "Ensure that at least 3 other players lose at the end of the game. You do not need to be alive to win.");
	});

	register_role(["soundless", "204"], "Town", "Soundless", (e) =>
	{
		e.setDescription("Post 204");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack an amount of players equal to the amount of whispers you made the previous day.");

		e.addField("Attributes:", "- You are forced to attack if you have made a whisper.\n- Control / Redirect Immune.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["manager", "205"], "Town", "Manager", (e)=>
	{
		e.setDescription("Post 205");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to re-hire at night.\n- Use a Town role not in the game to use their abilities at night.");

		e.addField("Attributes:", "- When you choose someone to re-hire, their role will change to a random Town role in the GIM thread. This ability will fail on all non-Town roles and will notify the target regardless of if it is successful or not. You may not re-hire the same person more than once. You may not re-hire a person into a Town Power role, a unique role, or a role deemed unbalanced by the Role Jury.\n- You may choose a Town role from the GIM thread and use its ability at night. You may not use abilities of Town roles already in the game, any Town Power roles, or any roles deemed unbalanced by the Role Jury. You may only choose each individual Town role once.");

		e.addField("Goal:", "Lynch every criminal and evildoer.");
	});

	register_role(["necromorph", "206"], "Neutral", "Necromorph", (e) =>
	{
		e.setDescription("Post 206");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None (Variable)", true);
		e.addField("Defense", "None (Basic/Variable)", true);

		e.addField("Abilities:", "- Serve a dead evildoer at night.");

		e.addField("Attributes:", "- On any night you are alive, you may choose a dead player to serve for the rest of the game. They cannot be Town, Neutral Benign, or another Necromorph.\n- You will be able to freely speak with the evildoer you're serving. If they were in a night chat while alive, you will be able to speak in it.\n- The evildoer you serve will be able to perform their action through you each night as if they were you. You will both receive any and all results that would normally be received.\n- After you choose an evildoer to server, you will still appear as a Necromorph; however, your statistics and immunities will conform to theirs.\n- All evildoers will be notified that there is a Necromorph when they die.\n- You have one bulletproof vest that grands you Basic defense until you are attacked by a non-Town role for the first time. You will lose this vest after choosing an evildoer to serve.");

		e.addField("Goal:", "Help a dead evildoer achieve their cause.");
	});

	register_role(["hidden_king", "hiddenking", "hking", "207"], "Any", "Hidden King", (e) =>
	{
		e.setDescription("Post 207");

		e.addField("Alignment", "Unique Random Faction Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, cause your vote to count thrice. This is not public, nor will there be any indication that it happened. You can do this one time per day.\n- During the night, send your loyal guards to protect another player, granting them Powerful defense against direct attacks.\n- During the night, you may send your guards to attack another player.");

		e.addField("Attributes:", "- You will start on a random faction. If you are part of an evil faction, you will not be allowed to attack other players unless no one else is able to kill. Ignore this if the Hidden King is a member of the Coven.\n- You may only guard yourself once.\n- You may only attack twice if you are a part of the Town.");
		e.addField("Goal:", "See faction goal");
	});

	register_role(["hoop_specialist", "hoopspecialist", "specialist", "hooper", "208"], "PaleMoon", "Hoop Specialist", (e) =>
	{
		e.setDescription("Post 208");

		e.addField("Alignment", "Pale Moon Support", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place an Inverting Hoop at a player's house.\n- Place two Transporting Hoops at two players' houses.\n- Move a Hoop.");

		e.addField("Attributes:", "- Inverting Hoops inverts attacks dealt to and defense values given to players. For example, if they're healed by a Doctor, they'll be dealt a Powerful attack; if they're stabbed by a Serial Killer, they'll be granted Basic defense.\n- Transporing Hoops redirect all visitors from one target to the other, and vice versa.\n- You may have up to 2 Invesrting Hoops and 2 Transporting Hoops at a time.\n- When the PMCS begins, a random hooped target will be dealt an Astral Basic attack that's unaffected by Inverting Hoops.\n- Your Transporting Hoops don't affect the Clown.");

		e.addField("Goal:", "Pale Moon.");
	});

	register_role(["sandstone", "209"], "Rock", "Sandstone", (e) =>
	{
		e.setDescription("Post 209");

		e.addField("Alignment", "Rock Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player every night, and place sand at their house. Malicious visitors (attempts to kill) will be roleblocked because they fell in a pit of sand that suddenly enveloped the ground. They then die, and are tortured for each night they're dead, the host posting a written Dangaonronpa-styled execution for them every night.");

		e.addField("Attributes:", "- They player is further tortured by the Sandstone, who can send pictures of grapes in <#970059745807437876> upon successfully killing someone.");

		e.addField("Goal:", "Kill all who would oppose the Rocks.");
	});

	register_role(["based_detector_but_its_not_a_based_detector_its_actually_just_granite", "bdbinabdiajg", "based_detector", "granite", "210"], "Rock", "Based Detector but it's not a Based Detector it's actually just Granite", (e) =>
	{
		e.setDescription("Post 210");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Break down a target's defenses. Their defense will be set to None for the night. If the target's defense is already None, they will instead gain Powerful defense for the night.");

		e.addField("Goal:", "Kill all who would oppose the Rocks.");
	});

	register_role(["the_royal_guards_which_tend_to_apparently_exist_in_certain_social_deduction_games_despite_not_being_players", "trgwttaeicsdgdnbp", "royal_guards", "royalguards", "211"], "Town", "The Royal Guards Which Tend To Apparently Exist In Certain Social Deduction Games Despite Not Being Players", (e) =>
	{
		e.setDescription("Post 211");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect a player at night, granting them Powerful defense.\n- Attack a player at night, dealing to them a Powerful attack.");

		e.addField("Attributes:", "- You may only take one action per night.\n- You don't count as a player. (*You can't be voted for, whispered to, targeted, etc., and you don't count towards majority.*");

		e.addField("Goal:", "Town goal");
	});

	register_role(["corpo_s_city_legend", "corponightcitylegend", "cncl", "212"], "Town", "Corpo Night City Legend", (e) =>
	{
		e.setDescription("Post 212");

		e.addField("Alignment", "Alignment Subalignment", true);
		e.addField("Attack", "None/Basic/Whatever", true);
		e.addField("Defense", "Powerful/Invincible/Whatever", true);

		e.addField("Abilities:", "- Investigate a person for their exact role");

		e.addField("Attributes:", "- You are lost in corporate branding hell (a grocery store), and may not access the day or dead chat at any time. Fortunately, you *may* vote (if alive).\n- You may not whisper.");

		e.addField("Goal:", "Standard Town Goal");
	});
	
	register_role(["companion", "213"], "Town", "Companion", (e) =>
	{
		e.setDescription("Post 213");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to accompany one player during the night.");

		e.addField("Attributes:", "- When you choose to accompany a player, all actions performed against you and your target will fail. Your target will also be forced to use their night action on you, bypassing redirection immunity.\n- You may not use your ability for two consecutive nights.");

		e.addField("Goal:", "Lynch every criminal and evildoer.");
	});

	register_role(["animal_breeder", "animalbreeder", "ab", "214"], "PaleMoon", "Animal Breeder", (e) =>
	{
		e.setDescription("Post 214");

		e.addField("Alignment", "Pale Moon Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send your dog to attack someone.\n- Send your tiger to attack someone.\n- Send your wolf to attack someone.\n- Feed one of your animals.");

		e.addField("Attributes:", "- Your dog will deal a Basic Astral attack to your target.\n- Your tiger will deal a Powerful Astral attack to your target and a random visitor.\n- Your wolf will deal a Powerful Astral attack to your target and, if they survive, will cause them to bleed, dealing an Unstoppable attack to them the night after the next night.\n- After your tiger and wolf attack one night, you must feed them for them to be able to attack ever again.\n- Your dog doesn't need to be fed, but you can feed it to upgrade its attack to Powerful.\n- When the PMCS begins, you no longer need to feed your animals and their attack values are increased to Unstoppable.");

		e.addField("Goal:", "Pale Moon goal");
	});

	register_role(["forensic_analyst", "forensicanalyst", "215"], "Town", "Forensic Analyst", (e) => 
	{
		e.setDescription("Post 215");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check if a player's fingerprints were found at a dead player's house each night.\n- Check if a player has a criminal history each night.");

		e.addField("Attributes:", "- If a player has killed another player in the past, they will have a criminal history.\n- If a player visited a dead player on the night they died, they will leave their fingerprints at the dead player's house.\n- You may only use one of your abilities each night.\n- While you are alive, all players will flip their actual role. Any abilities that affect what players flip upon death will be nullified.");

		e.addField("Goal:", "Lynch every criminal and evildoer.");
	});

	register_role(["damp_rock", "damprock", "216"], "Rock", "Damp Rock", (e) =>
	{
		e.setDescription("Post 216");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, make it rain at your house. You have 3 uses of this ability.");

		e.addField("Attributes:", "- Rain causes any visitors to slip and fall in a puddle, killing them and causing their night ability to fail.");

		e.addField("Goal:", "Kill all who would oppose the Rocks.");
	});

	register_role(["random_adjective_rock", "randomadjectiverock", "randomrock", "random_rock", "217"], "Rock", "Random Adjective Rock", (e) =>
	{
		e.setDescription("Post 217");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- You will be assigned a random adjective at the beginning of the game. Then, come up with a Rock role based on a rock of that description. It can't have mechanics not seen on any other role. With host approval, you will become that role.");

		e.addField("Goal:", "Kill all who would oppose the Rocks");
	});

	register_role(["super_executioner", "superexecutioner", "super_exe", "superexe", "218"], "Neutral", "Super executioner", (e) =>
	{
		e.setDescription("Post 218");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attack someone at night.");

		e.addField("Attributes:", "- You will be given a random role in the game at the beginning of Day 1.\n- If you attack someone who isn't in the same faction as your target, you will die instead.");

		e.addField("Goal:", "Kill your target.");
	});

	register_role(["all-consuming_ooze", "allconsumingooze", "ooze", "219"], "Neutral", "All-Consuming Ooze", (e) =>
	{
		e.setDescription("Post 219");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- sorb a player each night. They are removed from the game.");

		e.addField("Attributes:", "- Players you remove from the game become part of you. They gain access to your private channel and you to theirs. You gain all abilities and attributes they have. They win if you win.");

		e.addField("Goal:", "Kill or absorb all who would oppose you.");
	});

	register_role(["fate_decider", "fatedecider", "220"], "Neutral", "Fate Decider", (e) =>
	{
		e.setDescription("Post 220");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Decide whether the dead players should be sent to heaven or hell.");

		e.addField("Attributes:", "- All players will appear as cleaned in the graveyard before you have made your decision on whether to send them to heaven or hell. This includes lynched players, but not yourself. You will automatically send yourself to heaven.\n- If the player in question is a member of the Town, a Florae role, or a Neutral Benign role, you must send them to heaven. Otherwise, you must send them to hell.\n- You will have twelve hours after a player has died to make your decision. Once you have made your decision on a player, the actual role of the player will be revealed.\n- Your decision will not affect dead chat.\n- Your ability will persist once you are dead.\n- You will not have access to dead chat once you die.\n- You will not have to decide the fate of anyone who died on the last day/night of the game once the game ends. They will not count towards your win condition.");

		e.addField("Goal:", "Send at least two-thirds of the dead players to their correct afterlife.");
	});

	register_role(["undertale_fanboy_from_2015", "undertalefanboyfrom2015", "undertalefanboy", "undertale_fanboy", "221"], "Neutral", "Undertale Fanboy From 2015", (e) =>
	{
		e.setDescription("Post 221");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check if a player owns the hit 2015 Toby Fox game \"Undertale\".");

		e.addField("Attributes:", "- When checking, the player must provide their Steam library. If they have none, they will be attacked. They will also be attacked if their Steam library doesn't include the hit 2015 Toy Fox game \"Undertale\".\n- If they can prove they own the Toby Fox game \"Deltarune\", this will be downgraded to a basic attack.");

		e.addField("Goal:", "Kill literally everyone who doesn't own the hit 2015 Toby Fox game \"Undertale\"");
	});

	register_role(["the_man_in_the_wall", "themaninthewall", "man_in_the_wall", "maninthewall", "tmitw", "wallman", "wall_man", "222", "good_argument_however_i_am_in_your_walls"], "Town", "The Man in the Wall", (e) =>
	{
		e.setDescription("Post 222");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stalk a player during the day, marking them for collapse.\n- Collapse a stalked player's house at night.");

		e.addField("Attributes:", "- If you collapse a player's house, everyone targetting them will have their ability fail, and they will go home from assuming the player is dead. The targetted player is not actually affected.\n- If the targetted player visits someone who saw their collapsed house, that visit will still go through.\n- You can collapse houses while dead. You may not mark while dead.\n- If a marked target is attacked by a rampage attack, you will be attacked too.\n- Control immune.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["gatekeeper", "gaslight_gatekeep_girlboss", "223"], "Neutral", "Gatekeeper", (e) =>
	{
		e.setDescription("Post 223");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Initiate someone into your secret society each night.");

		e.addField("Attributes:", "- All players you have initiated into your society will receive an extra night chat that you may not access. The name of each player will show up as \"Member\" in the chat.\n- Once four other people have been initiated into your society, all four players and yourself will commit suicide, dealing an Unstoppable attack. This will happen the night after you have recruited the fourth member. Dead members will not count towards this objective.\n- All players in your secret society will gain Basic defense.\n- If you die before you have met your win condition, all players in your secret society will leave the society.");

		e.addField("Goal:", "Recruit four people into your secret society.");
	});

	register_role(["pokemon_master", "pokemonmaster", "pokemaster", "224"], "Neutral", "Pokemon Master", (e) =>
	{
		e.setDescription("Post 224");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Play a game of Gen 8 Unrated Random Battles on Pokemon Showdown against a player each night. If you win, they are dealt an Unstoppable attack. If you lose, they gain this ability and their role name is changed to Pokemon Master.");

		e.addField("Attributes:", "- On night 5, if you have not won the game and are alive, you will play a game of Gen 8 Unrated Random Battles on Pokemon Showdown against the host. If you lose, you are dealt an Unstoppable attack and lose the game. If you win, you win the game.");

		e.addField("Goal:", "Kill 3 people via Gen 8 Unrated Random Battles on Pokemon Showdown, or defeat the host in a Gen 8 Unrated Random Battle on Pokemon Showdown.");
	});

	register_role(["rock_n_roll", "rocknroll", "rock_and_roll", "rockandroll", "225"], "Neutral", "Rock n' Roll", (e) =>
	{
		e.setDescription("Post 225");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Investigate a player to find out what kind of rock they are\n- Attack a player, rock or not.");

		e.addField("Attributes:", "- Youw ill appear to be a random Rock role.\n- Upon dying, all Rocks will gain Invincible defense for the night.");

		e.addField("Goal:", "Win with the Rocks OR Win by yourself");
	});

	register_role(["corruptionist", "226"], "Neutral", "Corruptionist", (e) =>
	{
		e.setDescription("Post 226");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to corrupt each night.");

		e.addField("Attributes:", "- When a player is corrupted, all attempts to kill that player will succeed. The player's defense will drop to None for the night, all attacks on the player will bypass any healing effects, and all attacks on the player will be Astral.\n- Your target will not be notified that they were corrupted unless your target dies the night they were corrupted.\n- You have Basic defense until you are attacked for the first time.");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["server_admin", "serveradmin", "227"], "Neutral", "Server Admin", (e) => 
	{
		e.setDescription("Post 227");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Change the server icon, server name, or the name of any role, or the name of any category, or the name of any channel, or the nickname of any player each night. (*The host will carry out your change.*)");

		e.addField("Goal:", "Make at least 4 people laugh. (*A player laughs if they send a Discord message in reaction to the change that is a commonly accepted Internet expression of having found something funny, such as \"lmao\", \"pFFFFFT\", or \"sdjfsdjisdjfisjdfihhh\".*)");
	});

	register_role(["uzumaki", "spiral", "uzu", "naruto", "229"], "Neutral", "Uzumaki", (e) =>
	{
		e.setDescription("Post 229");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target a player at night, turning them into a Spiral. This does not count as a role conversion.\n- Target a known Spiral, forcing them to target another player.");

		e.addField("Attributes:", "- You may only perform one ability per night.\n- If a Spiral visits another target at night, their target will become a Spiral.\n- If a Spiral visits another Spiral, they will both deal a Powerful attack to each other.\n- If a Spiral visits you the night you're attacked, the Spiral will die instead of you.");

		e.addField("Goal:", "Live to see all living players become a Spiral.");
	});

	register_role(["chess_player_pirate", "chessplayerpirate", "chess_pirate", "chesspirate", "228"], "Neutral", "Chess Player Pirate", (e) =>
	{
		e.setDescription("Post 228");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Duel someone every night. The host will organise a time for you two to play chess. If the Pirate wins, their target is attacked. Losing chess warrants assault I guess.");

		e.addField("Attributes:", "- Playing chess roleblocks your target because multitasking is hard.\n- Upon winning, you get access to your victims' player channels, though you may not post anything besides pictures of grapses. You also die.");

		e.addField("Goal:", "Win two duels.");
	});

	register_role(["overseer", "230"], "Neutral", "Overseer", (e) =>
	{
		e.setDescription("Post 230");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose two people to swap their roles at night.");

		e.addField("Attributes:", "- Your ability only works on members of the same faction.\n- You cannot swap the role of a player whose role has been publicly revealed for any reason (this means that the host has confirmed the role of the player for any reason).\n- You may no longer use your ability after you have achieved your win condition.");

		e.addField("Goal:", "Swap two players' roles three times.");
	});

	register_role(["animal_keeper", "animalkeeper", "231"], "Town", "Animal Keeper", (e) =>
	{
		e.setDescription("Post 231");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone an animal every night.\n- Blow your whistle to make all the animals run away.");

		e.addField("Attributes:", "- You will not konw what animal is given to a player.\n- Dogs are given to Town members, siamese cats to Mafia members, black cats to Coven members, killer bunnies to Neutral Evils and Neutral Killings, and Beavers to Rocks and other Neutrals.\n- When you block your whistle, you will learn how many of each type of animal ran away.\n- You may not blow your whistle until you've given animals to at least 3 people.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["revenge_labs", "revengelabs", "232"], "Neutral", "Revenge Labs", (e) =>
	{
		e.setDescription("Post 232");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target a player each night to give them a peculiar message.");

		e.addField("Attributes:", "- Every player you visit will receive a nonsensical message.\n- If any player you have visited mentions this message, they will be instantly modkilled for being a filthy pirate.\n- A list of nonsensical messages will bep rovided to the game host before the start of the game, and you will receive a list of these possible messages once you receive this role card.");

		e.addField("Goal:", "Live to see at least one person modkilled because of you");
	});

	register_role(["monkey", "233"], "Mafia", "Monkey", (e) =>
	{
		e.setDescription("Post 233");

		e.addField("Alignment", "Unique Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target to \"see\", and a target to \"do\".");

		e.addField("Attributes:", "- The player you \"see\" will be roleblocked, and you will use their night ability on the target you \"do\".\n- You will visit both players, and be affected by rampaging abilities if one would target either player.\n- Your ability will fail if your target must target multiple players, but you will not be notified of this.\n- If your \"see\" target can kill, your attack value will always be Basic.");

		e.addField("Goal:", "Mafia goal");
	});

	register_role(["the_great_equalizer", "thegreatequalizer", "great_equalizer", "greatequalizer", "equalizer", "tge", "234"], "Town", "The Great Equalizer", (e) =>
	{
		e.setDescription("Post 234");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grant a player Basic defense for the night each night.");

		e.addField("Attributes:", "- All attacks are Basic.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["dog", "neutral_dog", "neutraldog", "235"], "Neutral", "Dog", (e) =>
	{
		e.setDescription("Post 235");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select an owner during the day if you don't have one.");

		e.addField("Attributes:", "- The player you select as your owner will receive a message telling them a Dog has chosen them as their owner.\n- Your owner must feed you every night. If your owner does not feed you at night, you will run away and select a new owner the next day. You cannot select a previous owner as your new owner.\n- Your owner may choose to feed you treats. If they do this, you will gain Powerful defense, and you will instantly kill your owner's attacked if they are attacked. You may only be fed treats twice, and your owner wil be notified at the start of each night how many treats are left.\n- If anyone attempts to attack your owner, your owner gains Powerful defense, and youw ill cause the attacker to start bleeding (Powerful attack). If they are not healed the following night, the attacker will die.\n- If an attacker targets you, you and your owner will be dealt the attack applied to you.");

		e.addField("Goal:", "Survive to the end of the game with an owner");
	});

	register_role(["dog", "animals_dog", "animalsdog", "animal_dog", "animaldog", "evil_dog", "evildog", "235"], "Animal", "Dog", (e) =>
	{
		e.setDescription("Post 235");

		e.addField("Alignment", "Animal Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lure someone in with your adorableness, and then betray them.");

		e.addField("Attributes:", "- Each time you lure someone, you will bite them.\n- When you bite someone, they will start to bleed. They will die the night after you bite them.\n- Your target will become sick and unable to perform their abilities after you have bitten them (this includes day abilities).\n- You may also choose to viciously bite a target once per game. This will cause your target to not be able to speak the following day nor in their night chat(s), and the bite may not be healed.");

		e.addField("Goal:", "Kill anyone who may betray the animals.");
	});

	register_role(["popcorn_boy", "popcornboy", "236"], "PaleMoon", "Popcorn Boy", (e) =>
	{
		e.setDescription("Post 236");

		e.addField("Alignment", "Pale Moon Protection", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Serve normal popcorn at night.\n- Serve salted popcorn at night.\n- Serve sweet popcorn at night.\n- Salty your popcorn at night.\n- Put sugar on your popcorn at night.");

		e.addField("Attributes:", "- Normal popcorn increases your target's defense by one. Applies to healing.\n- You cannot serve normal popcorn twice in a row.\n- Salted popcorn redirects everyone away from your target. They will be redirected to the neighbours, at random.\n- Sweet popcorn redirects all visitors from both neighbours to your target.\n- It takes one night to salty or put sugar on your popcorn. You don't need to prepare normal popcorn.\n- When the PMCS begins, you no longer need to prepare your popcorn, and you may choose to deal a Powerful rampage attack by serving salted or sweet popcorn.");

		e.addField("Goal:", "Pale Moon goal");
	});

	register_role(["bye", "237"], "Neutral", "Bye...", (e) =>
	{
		e.setDescription("Post 237");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Set up a night chat with anyone during the day. You may say anything in it, but they may only say \"bye...\", \"yes\", or \"no\".");

		e.addField("Attributes:", "- This role can only roll if 203: Hi! also rolls.\n- If you make a night chat with Hi!, both of you die and you win.");

		e.addField("Goal:", "You win if Hi! loses, or if you make a night chat with Hi!");
	});

	register_role(["neutralkillingcaster_mage", "neutralkillingcastermage", "nkcaster_mage", "nkcastermage", "nk_mage", "nkmage", "236"], "Coven", "Neutralkillingcaster Mage", (e) =>
	{
		e.setDescription("Post 236");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player. Until the next time you use this ability, their alignment is Neutral Killing and their win condition is replaced by \"Kill all who would oppose you.\" and they can't win in any other way.");

		e.addField("Attributes:", "- You may use your ability at any time, and it resolves immediately, but you may only use it once per day/night cycle.\n- If you have the Necronomicon, you may instead choose to dela a Basic attack to your target.");

		e.addField("Goal:", "Coven goal");
		});

	register_role(["backup", "237"], "Neutral", "Backup", (e) =>
	{
		e.setDescription("Post 237");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Become your backup role once the player with that role dies.");

		e.addField("Attributes:", "- You are a backup of the [x].\n- If your faction has a night chat, you will not have access to it until you become your true role.");

		e.addField("Goal:", "Become the role you are a Backup of and fulfill its win condition OR win with the faction that you are a Backup of.");
	});

	register_role(["adorable_catgirl_nyaa~!", "adorablecatgirlnyaa", "adorable_catgirl", "adorablecatgirl", "catgirl", "submissivebreedablebuyablepsychotictwinkgothemopetgirlcatmaidpoledancerhumiliationlovingsexyvoicedpegginglovingadorablepsychicprettymermaidkirbywife", "238"], "Neutral", "Adorable Catgirl Nyaa~!", (e) =>
	{
		e.setDescription("Post 238");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make cute sounds and distract a player during the night.");

		e.addField("Attributes:", "- Distracting a player gives them Powerful defense.\n- After a player has been distracted, the only way they can communicate the following day is to whisper to you.\n- Anybody who attacks you has a 51% chance of also dying.");

		e.addField("Goal:", "Live until the end of the game.");
	});

	register_role(["ability_thief", "abilitythief", "239"], "Mafia", "Ability Thief", (e) =>
	{
		e.setDescription("Post 239");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal the abilities of a random role in the game.");

		e.addField("Attributes:", "- Each day, a random non-Mafia role in the game will be randomly selected. You will be informed which role this is (but not the player whose role it is) at the beginning of the night. \n- You will gain any passives this role has, and you may perform its night ability/abilities. If you perform the role's night ability/abilities, the player with the role will be roleblocked through immunities.");

		e.addField("Goal:", "Kill anyone who will not submit to the Mafia.");
	});

	register_role(["spectator", "240"], "PaleMoon", "Spectator", (e) =>
	{
		e.setDescription("Post 240");

		e.addField("Alignment", "Pale Moon Support", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bosost or boo a player every night.");

		e.addField("Attributes:", "- When you use your ability on a player, the host chooses a random option from the following\n> Their defense value is increased by one (boost)\n> Their attack value is increased by one (boost)\n> They will use their ability an additional time on a random target.\n- They gain detection, roleblock, redirection, and control immunity.\n> Their defense value is lowered by one.\n> Their attack value is lowered by one.\n> They are redirected to a random target.\n> They lose all immunities and are roleblocked.\n- After the PMCS has begun, you will only boost Pale Moon members and non-NK Neutrals, and will only boo Townies, other evil factions, and NKs.\n- After the PMCS has begun, you may instead choose to deal an Unstoppable attack to a player.");

		e.addField("Goal:", "Pale Moon goal");
	});

	register_role(["imposter", "impostor", "amongus_sussy_baka", "241"], "Neutral", "Imposter", (e) =>
	{
		e.setDescription("Post 241");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cause a sabotage at night.");

		e.addField("Attributes:", "- Lights sabotage will disable message history for day chats, and blackmail everyone.\n- Comms sabotage will disable message history for private chats and whispers, and disable viewing the graveyard.\n- Reactor sabotage will kill everybody if not fixed the next day.\n- Sabotages can be fixed by a minigame.\n- Only one sabotage can activate at a time.\n- Each sabotage has a cooldown of 2 days.\n- Being jailed canont stop your sabotages.\n- Control immune");

		e.addField("Goal:", "Eliminate everyone else while avoiding being sus");
	});

	register_role(["forager", "242"], "Town", "Forager", (e) =>
	{
		e.setDescription("Post 242");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a player at night.\n- Throw a smoke bomb at someone's house.");

		e.addField("Attributes:", "- You have one bullet.\n- Your smoke bomb will cause all visitors to target each other at random instead of their original target. You can be targeted and killed.\n- You have four smoke bombs.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["delta_ditto", "deltaditto", "ditto", "243"], "Neutral", "Delta Ditto", (e) =>
	{
		e.setDescription("Post 243");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Choose a player at night. The host will choose a role from the roles thread that is the closest approximation of their role, not counting faction, and you will become that role but you keep this ability.");

		e.addField("Goal:", "Morph into another role and win as it.");
	});

	register_role(["i_really_hate_post_371", "ireallyhatepost371", "fuck371", "244"], "Neutral", "I really hate Post 371.", (e) =>
	{
		e.setDescription("Post 244");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check a player at night to see if they're Post 371. If they are, stab them to death immediately. Because you hate Post 371. Everyone hates Post 371.");

		e.addField("Attributes:", "- May not spawn unless Post 371 is in the game.");

		e.addField("Goal:", "Kill Post 371");
	});

	register_role(["kirby", "245"], "Neutral", "Kirby", (e) =>
	{
		e.setDescription("Post 245");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose someone to suck up at night (usable any night).");

		e.addField("Attributes:", "- When you suck up someone, they will be killed with an Unstoppable attack. Their role in the graveyard will appear as \"Warped\".\n- You will become your target's role.\n- You and your target will have a one-on-one permanent chat.\n- Your target is still in control of their night and day actions; they will be performed through you instead.\n- You will chat with your faction's night chat if they have one.\n- When you die, your role will be shown as [your new role] Kirby. For example, Sheriff Kirby or Coven Leader Kirby. This does not apply if you die before you suck up a player.");

		e.addField("Goal:", "Suck up a player and fulfill their win condition.");
	});

	register_role(["triumphalist", "246"], "Neutral", "Triumphalist", (e) =>
	{
		e.setDescription("Post 246");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone each night. If you succeed in killing them, gain all their attributes.\n- During the day, you may choose to revert back to having no attributes. (Two uses.)");

		e.addField("Attributes:", "- None");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["gambler", "247"], "Neutral", "Gambler", (e) =>
	{
		e.setDescription("Post 247");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a person to gamble on at night.");

		e.addField("Attributes:", "- When you choose a person to gamble on, you are gambling on them surviving until the end of the game.\n- If a player you have gambled on dies, you must wait one night before gambling on another player.\n- You may gamble on three players.\n- If all three of the players you gambled on die, you will commit suicide out of shame.\n- If you die, your gamble still rides on the last person you gambled on.");

		e.addField("Goal:", "Gamble on a person who survives until the end of the game.");
	});

	register_role(["salesman", "248"], "Neutral", "Salesman", (e) =>
	{
		e.setDescription("Post 248");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a person to sell a product to at night.");

		e.addField("Attributes:", "- If you sell to a player with a limited usage of their ability, you will successfully sell a product to them, and they will gain an extra use of their ability.\n- This role may not be rolled if there are not any players in the game with limited uses of their ability.");

		e.addField("Goal:", "Make three sales.");
	});

	register_role(["deserter", "249"], "Neutral", "Deserter", (e) =>
	{
		e.setDescription("Post 249");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Shoot a player at night.\n- Make your vote count twice during the day.\n- Wear a bulletproof vest at night.");

		e.addField("Attributes:", "- You have one bullet.\n- You have two vests.\n- You may increase your voting power three times.\n- You will appear suspicious to Sheriffs, and as a random enemy role in the game to evil faction investigative abilities.");

		e.addField("Goal:", "Live to see the game end.");
	});

	register_role(["post_371", "post371", "not371", "not_371", "371", "250"], "Neutral", "Post 371", (e) =>
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
