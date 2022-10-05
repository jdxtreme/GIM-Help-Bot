module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["with", "mf", "mfi", "2151"], "Mafia", "e with n s, s, s, s mf", {subCat: "Support", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2151");

		e.addField("Alignment", "Unique Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. Remove one third of the letters from their role card at random.");

		e.addField("Attributes:", "- Detection Immune\n- The first time you would be lynched, instead, you aren't.\n- Players you remove letters from still retain their original goal and faction, though their alignment and rules text may change.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["wicked_dreams_carmel", "wickeddreamscarmel", "carmel", "wicked_dreams", "wickeddreams", "wdc", "2152"], "Neutral", "Wicked Dreams, Carmel", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2152\n*Come on! We will live this dream together!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Craft an Invincible defense vest.\n- Wear an Invincible defense vest. 0 use.");

		e.addField("Attributes:", "- At the end of Night 4, gain Unstoppable Attack and Invincible Defense, become a Neutral Killing with Goal \"Kill all who would oppose you.\"");

		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["hellster", "2153"], "Neutral", "Hellster", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2153");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "\"Hell\"", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose to go on Hellert tonight. You will gain basic defense, and anyone who visits you tonight will have Hell inflicted upon them. (2 uses)");

		e.addField("Attributes:", "- If you are lynched, all players who voted for you will have Hell inflicted upon them.");

		e.addField("Effects of Hell, in order:", "- You learn the target's role.\n- Roleblocked\n- Basic Attacked\n- Disguised as a completely random role.\n- Basic Attacked\n- Granted Powerful Defense for this night.\n- Lose all immunities\n- Become lynchproof for tomorrow\n- Powerfully Poisoned\n- One ability is randomly forced to become 1 use.\n- Unstoppably Rampaged\n- Granted an Overprotective Autovest\n- Converted into a Survivor (96)\n- Cause(s) of their death disguised as God (12)\n- Abilities redirected towards theirself (if immune to the RB)\n- Removed from the game.\n- Banned from the game.");

		e.addField("Goal:", "Inflict Hell upon at least 5 players.");
	});

	register_role(["tandem_engine", "tandemengine", "tandem", "engine", "te", "2154"], "Neutral", "Tandem Engine", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2154");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- At the start of the game, you will randomly be given one ability each from half of the other roles that exist in this game, rounding up, and you will be told which roles you got these abilities from. If an ability you receive is dependent on an attribute, you will also receive the attribute it is dependent on. Abilities that function identically to the one already listed on this rolecard are rerolled.\n- You may multitask.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["welder", "2155"], "Town", "Welder", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2155");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prepare your tools tonight, giving another use of your second ability.\n- Select three targets at night. Take the first half (rounded down) of a random ability from the first player, the last half (rounded up) of a random ability from the second player, and combine them. Then give that as a new ability to your third target. (0 uses)");

		e.addField("Attributes:", "- You cannot self-target.\n- You can never select a player more than once.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["worn_out_yellow_sweater", "wornoutyellowsweater", "yellow", "sweater", "woys", "2156"], "Neutral", "Worn Out Yellow Sweater", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2156\n*i want to stay inside forever*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Visit a player. If they've never visited you before, smile through the dark. You will no longer appear framed to them. If they've visited you before, you deal a Basic attack to yourself and can no longer win by your second wincon.");

		e.addField("Attributes:", "- On nights you don't visit, you will stay in your worn out yellow sweater and gain Invincible defense.\n- You're framed as a random REF or Neutral Killing role in the game.\n- Upon visiting four players, you will reveal yourself as the Worn Out Yellow Sweater the next day, with the message \"[player] has proven they were everything they claimed to be.\"");

		e.addField("Goal:", "Survive until the end of the game or visit four different players and survive until the next day.");
	});

	register_role(["stop_hes_already_dead", "stophesalreadydead", "stop", "already_dead", "alreadydead", "dead", "shad", "2157"], "Neutral", "Stop, He's Already Dead!", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2157");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose any player other than yourself, living or dead, to stab to death each night.");

		e.addField("Attributes:", "- Roleblock, Redirect, and Control Immunity\n- If you attack a dead player, you will kill them once again, which will show up in the morning announcement and graveyard as usual.\n- Each dead player you successfully kill will allow you to use your ability two additional times in the following night.\n- You may use attacks in a single night after you die.");

		e.addField("Goal:", "Live to eliminate all who would oppose you, or ensure that absolutely every player dies if you die.");
	});

	register_role(["defectorer", "2158"], "Other", "Defectorer", {subCat: "Support", spawnCat: EVIL}, (e) =>
	{
		e.setDescription("Post 2158");

		e.addField("Alignment", "Evil Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- This role may spawn in any evil faction.\n- As you roll this role, you get a random good role that could spawn in the current game and that the host deems to be \"self-confirmable\". The host will make a version of this role that could usually confirm itself in the same way, but that also utilises the mechanics of the evil faction you spawn in as best as possible, if any. The role can't have any mechanics that aren't seen on any other roles. You gain that role's rules text.");

		e.addField("Goal:", "Kill all who would oppose your faction.");
	});

	register_role(["zurzoth_chaos_rider", "zurzothchaosrider", "zurzoth", "chaos_rider", "chaosrider", "zcr", "2159", "2159a"], "Gatherer", "Zurzoth, Chaos Rider", {subCat: "Commander"}, (e) =>
	{
		e.setDescription("Post 2159A");

		e.addField("Alignment", "Gatherer Commander", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (Red)(Red) each night.\n- (1): Attack a player each night.");

		e.addField("Attributes:", "- Each day, the first time a non-Gatherer uses any role ability, you will create an NPC with the role and name \"2159B Devil\"\n- At the end of each night, if at least one 2159B Devil attacked, one of your abilities will be disabled for the next day and night at random, and then you gain Mana of a random color.\n- At the end of each night, each target of 2159B Devil attacks will have one of their abilities disabled for the next day and night at random, and then if they have any, a random limited-use ability will gain a use.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["devil", "2159b"], "Gatherer", "Devil", {subCat: "Red", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2159B");

		e.addField("Alignment", "Gatherer Red", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- (Red): Attack a player each night.");

		e.addField("Attributes:", "- As an NPC, you cannot speak, vote, or send or hear whispers. You take all orders from the players of the Gatherers.\n- All of your feedback is relayed through the Gatherer Chat.\n- The night after you die, you may choose a player to deal a basic attack to.\n- Cannot spawn naturally.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["chained_brute", "chainedbrute", "chained", "brute", "cb", "2160"], "Gatherer", "Chained Brute", {subCat: "Red"}, (e) =>
	{
		e.setDescription("Post 2160");

		e.addField("Alignment", "Gatherer Red", true);
		e.addField("Attack", "Unstoppable/Overkill", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- (Red): Attack a player each night.");

		e.addField("Attributes:", "- Generate (Red) each night.\n- (Red): Unstoppable Attack a player at night. (1 use)\n- (1): Sacrifice a Gatherer player or NPC with an Overkill attack. Then gain a use for your Unstoppable Attack ability.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["frilled_sea_serpant", "frilledseaserpant", "sea_serpant", "seaserpant", "fss", "2161"], "Gatherer", "Frilled Sea Serpant", {subCat: "Blue"}, (e) =>
	{
		e.setDescription("Post 2161\n*\"Reel it in. No, wait! Throw it back!\"*\n*—Gertrude, deep-sea angler*");

		e.addField("Alignment", "Gatherer Blue", true);
		e.addField("Attack", "Unstoppable (Basic)", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Generate (Blue) each night.\n- (Blue)(Blue)(5): Unstoppable Attack a player each night. This bypasses all defensive abilities.\n- (1): Basic Attack a player each night.");

		e.addField("Attributes:", "- You may only use the Basic Attack ability if you're the last living Gatherer.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["splendor_mare", "splendormare", "splendor", "mare", "sm", "2162"], "Gatherer", "Splendor Mare", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 2162");

		e.addField("Alignment", "Gatherer White", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic (Variable)", true);

		e.addField("Abilities:", "- Generate (White) each night.\n- (White): Attack a player each night.\n- (White)(1): Transform yourself into a different Gatherer White role at random. You will retain your Lifelink attribute from this role.");

		e.addField("Attributes:", "- Lifelink: Whenever you kill an enemy, in the following night, your defense will increase by the difference between your attack's level and your victim's defense level.");
		
		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["victors_wreath", "victorswreath", "victors", "victor", "wreath", "vw", "2163"], "Town", "Victor's Wreath", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2163");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, crown a player, making their vote count as 3 for the following day. They will not be notified of this until they make a vote.");

		e.addField("Attributes:", "- You cannot crown the same player more than once.\n- The amount needed to lynch a player does not change.\n- You may target yourself.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["diviner", "2164"], "Town", "Diviner", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2164");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- On full moon nights, predict someone's future. They will immediately be aware of who's targeting them tonight. This effect lasts until the end of the night. Before the night is processed, your target can choose to switch their target based on that information. However, if you target an evil player, they will also be told your identity immediately.");

		e.addField("Attributes:", "- Your visits are Astral.\n- You cannot target yourself.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["stray_cat", "straycat", "stray", "cat", "sc", "2165"], "Neutral", "Stray Cat", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2165");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, you may perform one of two actions:\n> Cuddle - Snuggle up with a chosen player, increasing their defensive capabilities by one level while also roleblocking them. (2 uses per game)\n> Beg - Go to another player and beg for food and shelter. This increases your defense to Basic, as well as alerts your target that a Stray Cat is visiting them during the night. (2 uses per game)");

		e.addField("Attributes:", "- You are immune to being roleblocked.\n- You cannot target yourself.");

		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["operation_leader", "operationleader", "operation", "leader", "ol", "2166"], "NETSEC", "Operation Leader", {subCat: "Special"}, (e) =>
	{
		e.setDescription("Post 2166");

		e.addField("Alignment", "Unique NETSEC Special", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Hacking Skill", "High/PWN");

		e.addField("Abilities:", "- During the day, you may attempt to hack a node. The chance of success is increased depending on how many people attempt to hack the node. Once per game, you may unleash a 0-day exploit, this will automatically capture the node.\n- 3 times per game, you may transport another player to a safe location, this will negate any negative visits that may occur to them that night. 2 night cooldown. You may only transport yourself once, and this movement does not count towards the total times per game and may be done on cooldown.\n- You may anonymously send a message to all players in the game. There is no restriction on this whatsoever.");

		e.addField("Attributes:", "- If you die, a random NETSEC will be promoted to Operation Leader.\n-Conversion immune\n-You cannot target yourself.");

		e.addField("Goal:", factions.NETSEC.goal);
	});

	register_role(["cctv_specialist", "cctvspecialist", "cctv", "specialist", "cs", "2167"], "NETSEC", "CCTV Specialist", {subCat: "Field", spawnSubCat: factions.NETSEC.fieldSSC}, (e) =>
	{
		e.setDescription("Post 2167");

		e.addField("Alignment", "NETSEC Field Operations", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Hacking Skill", "None");

		e.addField("Abilities:", "- 1 time per game, you may transport another player to a safe location, this will negate any negative visits that may occur to them that night. Twice per game, you may add another charge to this ability.\n- 3 times per game, you mays end an anonymous tip to other NETSEC or Townies about what your target might be. This will have 3 roles, one of them being your target's.\n- You may choose to apply a camera to any player's house, you will be notified of who visits your target every night after. 2 night cooldown\n- Twice per game, you may follow another player and learn who they'll visit tonight.\n- Once per game, you may become an Improvised Hacker(Post 2174). You will retain all your attributes. Available N3 onwards");

		e.addField("Goal:", factions.NETSEC.goal);
	});

	register_role(["enforcer", "2168"], "NETSEC", "Enforcer", {subCat: "Field", spawnSubCat: factions.NETSEC.fieldSSC}, (e) =>
	{
		e.setDescription("Post 2168");

		e.addField("Alignment", "NETSEC Field Operations", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Hacking Skill", "None");

		e.addField("Abilities:", "- 3 times per game, learn the will of another player. They will be notified of this.\n- You may transport another player to another location. If your target is attacked, you will fight their attacker and grant your target powerful defense.\n- You may attack another player. If you kill another good player, you may no longer attack.\n- Once per game, you may become an Improvised Hacker(Post 2174). You will retain all your attributes. Available N3 onwards.");

		e.addField("Attributes:", "- If you are jailed by any jailor-like role, you are still free to do your action. Town aligned jailors will learn your role at the end of the night.");

		e.addField("Goal:", factions.NETSEC.goal);
	});

	register_role(["inside_man", "insideman", "inside", "man", "im", "2169"], "NETSEC", "Inside Man", {subCat: "Field", spawnSubCat: factions.NETSEC.fieldSSC}, (e) =>
	{
		e.setDescription("Post 2169");

		e.addField("Alignment", "NETSEC Field Operations", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Hacking Skill", "None");

		e.addField("Abilities:", "- 3 times per game you may plant a keylogger on the target machine. Retrieving a keylogger will increase NETSEC's hacking chances towards your target.\n- Twice per game, you may follow another player and learn who they'll visit tonight.\n- You may check the dumpsters and trash bins for important information. This will decrease the difficulty of a random node when successful.\n- Once per game, you may become an Improvised Hacker(Post 2174). You will retain all your attributes. Available N3 onwards.");

		e.addField("Attributes:", "- If you spawn, a random node will belong to you and if discovered, will automatically be hacked. This WILL be a laptop and cannot be either one of the first nodes or the Master Node.\n- You passively know who the REF visits every night.\n- If you spawn, the REF cannot use private chats or whisper to each other until you die. You will be listed as an REF on the faction member list with a random yet plausible role. This does not work on the :lastFaction:Last.");

		e.addField("Goal:", factions.NETSEC.goal);
	});

	register_role(["analyst", "2170"], "NETSEC", "Analyst", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2170");

		e.addField("Alignment", "NETSEC Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Hacking Skill", "Low");

		e.addField("Abilities:", "- During the day, you may attempt to hack a node. The chance of success is increased depending on how many people attempt to hack the node.\n- Twice per game, you may learn all astral visits made that night. You do not learn regular visits.\n- Learn 3 REF roles that might be present from a hacked node OR learn 3 players that might be an REF from a hacked node, you may only access each node for either purpose twice.\n- You may roleblock another player\n- You may visit another player, learning if they can access nodes");

		e.addField("Goal:", factions.NETSEC.goal);
	});

	register_role(["social_engineer", "socialengineer", "social", "engineer", "se", "2171"], "NETSEC", "Social Engineer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2171");

		e.addField("Alignment", "NETSEC Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Hacking Skill", "Low");

		e.addField("Abilities:", "- During the day, you may attempt to hack a node. The chance of success is increased depending on how many people attempt to hack the node.\n- Twice per game, you may disguise your whispers as another player's. Two night cooldown\n- Twice per game, learn another player's exact faction, bypassing any frames, disguises, sleeper agents, ect. Four night cooldown\n- Once per game, you may roleblock all your visitors\n- Twice per game, redirect all your visitors to another another player");

		e.addField("Goal:", factions.NETSEC.goal);
	});

	register_role(["blackhat", "2172"], "NETSEC", "Blackhat", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 2172");

		e.addField("Alignment", "NETSEC Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Hacking Skill", "Very High");

		e.addField("Abilities:", "- During the day, you may attempt to hack a node. The chance of success is increased depending on how many people attempt to hack the node. Alternatively, you may choose to exploit a vulnerability on the target node, making the chance of hacking it much greater. You may only do this twice.\n- You may temporarily dox all non public chats. This will disable all whispers for the day, but it will also disable the REF factional chat until the next day. 2 charges.\n- You may roleblock another player");

		e.addField("Attributes:", "- Conversion immune");

		e.addField("Goal:", factions.NETSEC.goal);
	});

	register_role(["spearphisher", "2173"], "NETSEC", "Spearphisher", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 2173");

		e.addField("Alignment", "NETSEC Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Hacking Skill", "Very High");

		e.addField("Abilities:", "- During the day, you may attempt to hack a node. The chance of success is increased depending on how many people attempt to hack the node. Alternatively, you may choose to send a phishing email to the target node, making it easier to hack. You will have to make a site first though.\n- You may look for data on a hacked node. this will reveal a random TI result about a random player in the game.\n- Once per game, you may transport yourself to a safe location, this will negate any negative visits that may occur to them that night.\n- Once per game, you may roleblock all your visitors\n- Create a phishing site. You can only do this once, but will allow you to send phishing emails. You must spend two nights doing this.");

		e.addField("Goal:", factions.NETSEC.goal);
	});

	register_role(["improvised_hacker", "improvisedhacker", "improvised", "hacker", "ih", "2174"], "NETSEC", "Improvised Hacker", {subCat: "Offensive", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2174");

		e.addField("Alignment", "NETSEC Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Hacking Skill", "Very Low");

		e.addField("Abilities:", "- During the day, you may attempt to hack a node. The chance of success is increased depending on how many people attempt to hack the node.\n- You may look for data on a hacked node. this will reveal a random TI result about a random player in the game.\n- Once per game, you may transport yourself to a safe location, this will negate any negative visits that may occur to them that night.\n- You may check the dumpsters and trash bins for important information. This will decrease the difficulty of a random node when successful.");

		e.addField("Attributes:", "- **THIS ROLE CANNOT SPAWN NATURALLY**. It can only spawn by another NETSEC Operative choosing to becoming this role with the associated text.");

		e.addField("Goal:", factions.NETSEC.goal);
	});

	register_role(["mongolia", "mongolian", "2175"], "Civilization", "Mongolia", {subCat: "Militaristic", censor: ["Mongolian Keshig", "Mongol horde"]}, (e) =>
	{
		e.setDescription("Post 2175");

		e.addField("Alignment", "Unique Civilization Militaristic", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Perform the Factional Kill\n- Lead a horse charge across town, dealing a Powerful attack to two random non-Civs (Costs 8 Gold)");

		e.addField("Attributes:", "- All Factional Kills while Mongolia is alive are Astral and redirect immune.");

		e.addField("Messages:", "“They were slain by a Mongolian Keshig.” (Factional Kill)\n“They were trampled by the Mongol horde.” (Horse Charge Kill)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["kongo", "kongolese", "2176"], "Civilization", "Kongo", {subCat: "Religious", censor: "Kongolese Ngao Mbeba"}, (e) =>
	{
		e.setDescription("Post 2176");

		e.addField("Alignment", "Unique Civilization Religious", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use a copied ability.\n- Make your current acquired ability a permanent option. (Costs 2 Gold) (One Use)");

		e.addField("Attributes:", "- You will absorb one random ability that was used on any Civilization.\n- Copied abilities only have one use.\n- You will not absorb any attributes, except for those directly relating to the ability.\n- If no one visits a Civ, you will copy the ability of whoever you visit.\n- Detection Immunity");

		e.addField("Messages:", "“They were slain by a Kongolese Ngao Mbeba.” (Factional Kill)\n“You have gained the following ability: __” (Gained ability)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["greatest_equalizer", "greatestequalizer", "greatest", "equalizer", "ge", "2177"], "Town", "The Greatest Equalize", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2177");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Grant another player Basic defense for the night each night.");

		e.addField("Attributes:", "- Nothing is otherwise specified. (*The game has the same basic framework as a Town of Salem game at all times. All attacks and effects that kill players or make them die are Basic. Roles may not multitask. Roles have no defense or attack. All roles may target themselves with their abilities. Read <#978786268597063700> for more minor effects.*)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["sweden", "swedish", "2178"], "Civilization", "Sweden", {subCat: "Religious", censor: "Swedish Caroleans"}, (e) =>
	{
		e.setDescription("Post 2178");

		e.addField("Alignment", "Unique Civilization Religious", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, select three people to compete in a writing competition.\n- Override the results of the vote, letting you select the results. (Costs 3 gold)");

		e.addField("Attributes:", "- You will select a prompt for people to compete in the competition. During the night, the contestants will answer the prompts. The next day, all three answers will be revealed to the town publicly. All players, living and dead, will then privately vote on which they think is the best. First place gains Powerful defense for the night. Second place gains nothing. Third place is immediately dealt a Powerful attack. If there is a tie, the lower place gains priority.\n- All responses are anonymous to everyone except Sweden. Anyone who claims they wrote their response at any point is instantly dealt a Modkill attack, and the vote is invalidated. The host may censor any part of the response that reveals the author.\n- You may include one or more Civilizations in your competition.\n- You may not perform the Factional Kill if contestants are writing their prompts.\n- You may not override the vote and select new contestants in the same day.\n- Your attributes may not be copied or deleted.\n- Detection Immune");

		e.addField("Messages:", "“They were shot by Swedish Caroleans.” (Factional Kill)\n“You were drawn into a writing competition! Answer the following prompt: __” (Targets, start of night)\n“A writing competition has begun! Privately vote between these three responses to the following prompt.” (Start of Day)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["cree", "2179"], "Civilization", "Cree", {subCat: "Scientific", censor: "Cree Okihtcitaw"}, (e) =>
	{
		e.setDescription("Post 2179");

		e.addField("Alignment", "Unique Civilization Scientific", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Form an alliance between two people.\n- Convert an alliance to the Civilization faction. (Costs 7 gold) (1 use)");

		e.addField("Attributes:", "- Alliances gain a private chat. If one member of an alliance dies, the other will be dealt an Overkill attack immediately. If alliance members are of different factions, they may win with any evil factions that one of the alliance members is a member of.\n- You may only create two alliances.\n- Alliances are permanent.\n- Civilizations may not be alliance members.");

		e.addField("Messages:", "“They were bludgeoned by a Cree Okihtcitaw.” (Factional Kill)\n“Their alliance member has fallen.” (Alliance Member Died)\n“You have entered an alliance with ___!” (Alliance Created)\n“Your win condition has been changed.” (Win condition changed due to alliance)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["shut_it", "shutit", "si", "2180"], "Neutral", "Shut It", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2180");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "**Fuck This Shit** — Shut someone up each night, blackmailing them. Then you deal seven Powerful attacks to them.");

		e.addField("Attributes:", "- If someone would attack you, instead, you attack them. Seven times.\n- Whenever you kill someone, you copy one of their abilities.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["unifish", "2181"], "Neutral", "Unifish", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2181");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a player. If they're unique, grant them roleblock immunity. Otherwise, roleblock them. You will be notified about which happens.\n- Choose two players. If the first target is unique, you will control them (learning their role and feedback) into your second target. Cannot be used until Night 4.\n- Attack a player. Cannot be used until Night 4 and has a one night cooldown between uses.");

		e.addField("Attributes:", "- Unique roles oppose other unique roles, and must eliminate all other uniques in addition to their normal wincon. They're aware of this.\n- This role cannot spawn unless there are two or more unique roles.\n- In games where there are 5 or more unique roles, you will be aware of every player with a unique role, but not the roles themselves.\n- You will prevent the game from ending if you're alive and have not won yet.");

		e.addField("Goal:", "Have a unique role win the game with no other winners (not counting yourself) alive. You can win while dead.");
	});

	register_role(["literal_glass_cannon", "literalglasscannon", "lgc", "algc", "2182"], "Town", "A Literal Glass Cannon", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2182");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "\"Fragile\"", true);

		e.addField("Abilities:", "- During the day, BLAST THE FUCKING SHIT OUT OF SOMEONE, immediately dealing an Overkill attack to them right there and then.\n- During the night, BLAST THE FUCKING SHIT OUT OF SOMEONE'S HOUSE, immediately dealing an Overkill attack to them and whoever intended on visiting them right there and then.");

		e.addField("Attributes:", "- You have no penalty for killing Town roles.\n- If you are visited by a non-Town role, you will die.\n- If two or more people visit you in the same night, you will die.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["america", "american", "2183"], "Civilization", "America", {subCat: "Economic", censor: "American fighter"}, (e) =>
	{
		e.setDescription("Post 2183");

		e.addField("Alignment", "Unique Civilization Economic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect someone each night.\n- Protect all Civilizations. (Costs 5 Gold)");

		e.addField("Attributes:", "- Protecting someone grants Powerful defense to the target and all players within 2 houses of the target.\n- Protecting all Civilizations grants each Civilization Invincible defense and, if they get lynched the next day, they will not die.\n- Successfully protecting someone grants 3 gold for each attack.\n- All Civilization abilities can bypass your protection.\n- Passively generate 2 gold each night.");

		e.addField("Messages:", "“They were strafed by an American fighter.” (Factional Kill)\n“You were attacked but someone protected you!” (Target Attacked)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["zulu", "2184"], "Civilization", "Zulu", {subCat: "Militaristic", censor: ["Zulu Impi"]}, (e) =>
	{
		e.setDescription("Post 2184");

		e.addField("Alignment", "Unique Civilization Militaristic", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Perform the Factional Kill\n- Forcefully upgrade the Factional attack value. (Costs 5 gold +2 for each current attack level above Basic)");

		e.addField("Attributes:", "- While you are alive, whenever a Civilization kills a player with an attack value higher than the current Factional Kill value, the attack value of the Factional Kill is raised to match the attack value of the deceased.\n- Whenever a Civilization kills a player with a Rampage ability, the Factional Kill becomes Rampage.\n- Whenever a Civilization kills a player with an Astral ability, the Factional Kill becomes Astral.");

		e.addField("Messages:", "“They were stabbed by a Zulu Impi.” (Factional Kill)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["arsonist", "2185"], "Neutral", "Arsonist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2185\n*This post number will become the role that comes up in the next =role command sent in this channel.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, choose a player and burn their house down. All players that live in that house must now go find somewhere else to live. This ability does not attack players.");

		e.addField("Attributes:", "- When a player's house is burned down, during the following day, they must choose another player to live with for the rest of the game. The player they choose to live with will be notified that this happened.\n- All abilities and attributes that target players during the night which are directed at a player whose house has already been burned down will go toward the new house that they live in.\n- All abilities and attributes that target players during the night will target every player who lives in the targetted house.\n- If a player does not choose anybody to live with during the following day after having the house they live in burned down, then during the following night, all abilities that target them will fail, and they will be dealt a Powerful attack. If the attack succeeds at killing them, their cause of death will be shown as having been mauled by a Werewolf.\n- If all players that live in a house die, the house they lived in automatically becomes burned.");

		e.addField("Goal:", "Burn every house to the ground. This does not include the house that you live in.");
	});

	register_role(["medic", "2186"], "Sentry", "Medic", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2186");

		e.addField("Alignment", "Unique Sentry Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal someone and give them powerful defense for the night.");

		e.addField("Attributes:", "- The first time you successfully heal a non-authorized target, the authorities will supervise you, stopping you from visiting the same person twice in a row.\n- The second time you successfully heal a non-authorized target, your supervisors will take your medical license, stopping you from healing/giving defense to people.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["mixologist", "mix", "2187"], "Town", "Mixologist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2187");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make a drink with someone at night.\n- Give someone a drink you have made.");

		e.addField("Attributes:", "- Whenever you target someone with an ability, you gain a drink depending on their subalignment.");

		e.addField("List of drinks based on subalignments (subalignments not listed here will give the drink of the closest subalignment listed here):", "Investigative: **Truth Serum** - This drink will seek the truth and reveal your target's alignment. (Town, Mafia, Neutral, etc.)\nProtective: **Smoothie** - This smoothie is nice and refreshing. It will heal your target.\nKilling: **Fruit Punch** - This drink will punch your target, dealing a basic attack to them.\nSupport: **Party Drink** - This drink will throw a party at your target's house, roleblocking them. Visitors to your target are not invited to the party, and therefore are not roleblocked.\nPower: **Weekly Special** - You may use the ability of another role. (the role does not need to be in the game) (yes the host can deny you from using certain abilities)");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["citizen", "2188"], "Sentry", "Citizen", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2188");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Invite yourself at an authorized's target house. You will learn one non-authorized player that visits them. You will learn one player your target visits, authorized or not.");

		e.addField("Attributes:", "- If you die, the invited player will learn the name of your attacker.\n- If your target dies, you will learn the name of their attacker.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["day_veteran", "dayveteran", "day_vet", "dayvet", "veteran", "vet", "dv", "2189"], "Town", "Day Veteran", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2189");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Choose at night whether you want to go on alert the next day.");

		e.addField("Attributes:", "- When going on alert, you will gain Powerful defense for the night and the next day.\n- While on alert, you will instantly deal a Powerful attack to anyone who targets you with a day ability and all people who vote you.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wordsmith", "2190"], "Town", "Wordsmith", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2190");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player each night. You will be given flavour text describing their role without explicitly mentioning its name or referencing its abilities or attributes.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["patient_killer", "patientkiller", "patient", "killer", "pk", "2191"], "Neutral", "Patient Killer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2191");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- When you attack them, you don't immediately attack them. You probably won't for a while.\n- At the end of the game, when a winner would be declared, you will automatically deal an Unstoppable attack to all players you have previously attacked, even if you are dead.\n- 2 use autovest.");

		e.addField("Goal:", "Affect who wins the game in some way. Host decides if you win.");
	});

	register_role(["supervisor", "2192"], "Sentry", "Supervisor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2192");

		e.addField("Alignment", "Unique Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, give someone the power to authorize a target. They may only authorize a target the day you give them this ability.\n- During the day, force **everyone** to only be able to target authorized targets the following night. 1 use.");

		e.addField("Attributes:", "- While you are alive, no Sentry roles will be affected by negative parts of their role (besides being forced to target authorized targets) (For example, people won’t be killed by guilt or lose their ability).");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["day_vampire_hunter", "dayvampirehunter", "day_vh", "dayvh", "vampire_hunter", "vampirehunter", "dvh", "2193"], "Town", "Day Vampire Hunter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2193");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check to see if someone is a Conversion Capable role that cant win with you during the day. If they are, you will attack them.");

		e.addField("Attributes:", "- If you are voted or targetted during the day by a Conversion Capable role that cant win with you (Cult, Unseen, and the non ToS Vampire faction excluded) you will automatically attack them.\n- Cult, Unseen, and the non ToS Vampire faction are excluded from your first ability.\n- May only spawn if at least 1 Conversion Capable role that cant win with you (Cult, Unseen and the non ToS Vampire Faction excluded)");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mass_panic", "masspanic", "mass", "panic", "mp", "2194"], "Neutral", "Mass Panic", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2194");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Panic someone.\n- Use any ability if the entire town is panicked.");

		e.addField("Attributes:", "- Panic is a status effect. People who are panicked will make their visitors and anyone who visits panicked. Panic cannot be removed until Mass Panic dies.\n- Whenever the entire town is panicked, the town will be told “A feeling of Mass Panic has consumed the town! You must visit every night.”\n- Whenever everyone has been panicked, everyone besides you will have Vulnerable defense. Everyone must visit every night. If someone does not have a visiting ability they can use, they will gain the ability to “Visit someone and do nothing.” that they can use in addition to their regular ability.\n- The effects of Mass Panic end when Mass Panic dies.");

		e.addField("Goal:", "Kill anyone who opposes you and your panic.");
	});

	register_role(["bi_analyst", "bianalyst", "bi_analist", "bianalist", "bi", "ba", "2195"], "Sentry", "BI Analyst", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2195");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Analyze information about the authorized player(s) tonight.");

		e.addField("Attributes:", "- At the end of the night, you will receive information about the authorized player(s) based on how many players are authorized.\n> 1: Sheriff (948) check\n> 2: You will discover which one of them have the higher post number\n> 3: You will be told who the authorized targets visit, but you will not be told which authorized target visited each individual target.\n> 4+: You will be told how many authorized players are Sentries.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["event_planner", "eventplanner", "planner", "ep", "2196"], "Neutral", "Event Planner", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2196");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- At the start of the game, select any event from <#1026213757623484487> to apply to the current game. (1 use)\n- Each night, select a range of 10 numbers. A random event from that range that can apply to the game is applied starting the next day. If none are applicable, this ability does nothing.");

		e.addField("Attributes:", "- You have to select a range of 10 numbers that actually exist in <#1026213757623484487>. i.e, if there are 100 roles, you can't select 95-104 or something.\n- You have a Basic scumshield for the first time you're attacked.");

		e.addField("Goal:", "Kill anyone who opposes you and your panic.");
	});

	register_role(["day_jailor", "dayjailor", "jailor", "dj", "2197"], "Town", "The Day Jailor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2197");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may choose one person during the night to Jail for the day.");

		e.addField("Attributes:", "- You may anonymously talk with your prisoner.\n- You may choose to attack your prisoner, no limits on how many times per day.\n- The jailed target can't perform their day ability.\n- All other abilities used on the jailed person will fail; they will be notified that their target was jailed.\n- Your attack is delivered at the end of the day.\n- Your target cannot vote, whisper, or speak in the Day chat. They may still read the chat.\n- Only their teammates who share a factional chat will be notified they were jailed.\n- If your target is voted to be lynched, it will fail.\n- The Day Jailor is functionally a Town role in every way except win condition/goal.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["embodiment_of_day_town_killings", "embodimentofdaytownkillings", "embodiment", "day_town_killings", "daytownkillings", "eodtk", "2198"], "Neutral", "Embodiment of Day Town Killings", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2198");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- (30) Shoot someone, except you can only do it during the day because you hate the dark. Also you just walk up to the person point blank and shoot them in the head so your attacks are powerful instead of basic.\n- (2189) Choose at night whether you want to go on alert the next day.\n- (2190) - Select a player each night. You will be given flavour text describing their role without explicitly mentioning its name or referencing its abilities or attributes.\n- (2193) Check to see if someone is a Conversion Capable role that cant win with you during the day. If they are, you will attack them.\n- (2197) You may choose one person during the night to Jail for the day.");

		e.addField("Attributes:", "- May use up to 2 abilities per day/night.\n- Any specifics of your abilities, such as charges, cooldown, and other, dont apply\n- You do not have Guilt.\n- Your kills will appear as the role you used the ability of.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["party_organizer", "partyorganizer", "party", "organizer", "po", "2199"], "Town", "Party Organizer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2199");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose to organize a party for everyone to attend, and select a target's house to organize it at. 3 uses.\n- Visit someone at night.");

		e.addField("Attributes:", "- At the beginning of the night, all players will be notified a party will be going on at that player's house.\n- All players will be obligated to go, unless they are jailed.\n- At the end of the night, you will learn who arrived when, organized by people arriving after others. This is determined by how far that player's target was from the house the party is at.\nExample: Party is at #3. #1 visits #2, #3 visits themself, #2 visits #1, #4 visits #2. The arrival order will be: #3, #1 **and** #4, #2.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["day_tinkerer", "daytinkerer", "tinkerer", "dt", "2200"], "Town", "Day Tinkerer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2200");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every day you aren't disturbed, craft a gun.");

		e.addField("Attributes:", "- Being disturbed counts as being targeted by a day ability or being voted.\n- You can attack a player with your gun during the day, dealing a Powerful attack to them.\n- You may only hold one gun at a time.\n- If you attack a player with a gun, you cannot craft a gun that same day.\n- Your gun is consumed even if your target does not die.\n- You can give your guns to other players, which they can use to deal a Basic attack in place of their normal ability. Each player can only receive one gun.\n- Once per game, you may choose to craft a gun during the day regardless of if you are disturbed.\n- If you are resurrected for any reason, you will not have a gun even if you had one when you died.\n- Control Immune");
		
		e.addField("Goal:", factions.Town.goal);
	});
};
