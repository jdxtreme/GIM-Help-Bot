module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["cameraman", "2351"], "Town", "Cameraman", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2351\n*I'd rather have cameras that always watch us than cameras that... blink.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Set up any number of cameras outside any number of players' houses each night.");

		e.addField("Attributes:", "- Whenever a player with cameras outside their house is visited by a player, you will learn that visitor's name, then one of those cameras is used up. If they're visited by multiple players each night, this triggers as many times as there are cameras.\n- You start with zero cameras. Whenever a player died and isn't cleaned, stoned, or similar, you gain two cameras.\n- Once per game, at any time, you may grow desperate, gaining two cameras but permanently losing your ability to see the day chat.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["unstable_amalgamation", "unstableamalgamation", "unstable", "amalgamation", "ua", "2352"], "Neutral", "Unstable Amalgamation", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2352");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Destroy a target's ability to remain stable.");

		e.addField("Attributes:", "**- This role will be changed in some way every day (unless i physically cannot). Changes will apply midgame. If this can kill, its cause of death will be hidden so I cannot modify it with a bias.**\n- An unstable target will use a different role's ability on their target, this is randomized between a role of the same subalignment, but is not limited to faction (Town Killing can use Coven Killing, for example)\n- The effect lasts until your death.");

		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["rainbowmailer", "rmer", "2353"], "Town", "Rainbowmailer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2353");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose 2 people each night to Rainbowmail.");

		e.addField("Attributes:", "- When you Rainbowmail a target, you will assign them a color of your choice, Rainbowmailed targets will get access to a private chat with anyone of the same color.\n- Each player may only have 1 Rainbowmail color at any time, If you use your ability on a Rainbowmailed player it will change their color.\n- You may assign yourself a color once per night.\n- You may also assign no color to your target, Removing their Rainbowmail color.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["the_serial_killer", "theserialkiller", "serial", "killer", "tsk", "sk", "2354"], "Neutral", "The Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2354");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night.");

		e.addField("Attributes:", "- Roleblock Immunity\n- If you are roleblocked, you will attack the role blocker in addition to your target.\n- Roleblockers that target you will have their last will covered in blood, makign it unreadable.\n- At night, you may choosee to spare roleblockers in stead.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["landorus", "2355"], "Pokemon", "Landorus", {subCat: "Legendary"}, (e) =>
	{
		e.setDescription("Post 2355");

		e.addField("Alignment", "Pokemon Legendary", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, switch between your Incarnate and Therian form.\n- (Incarnate) **Earth Power** - Attack  a target.\n- (Incarnate) **Rock Slide** - Attack and roleblock a target.\n- (Incarnate & Therian) **Stealth Rocks** During the day, set up Stealth Rocks at someone's house. The next night, anyone who visits the target will have their defense reduced by one stage.\n- (Therian) **Earthquake** Attack a target. This rampages.\n- (Therian) **U-Turn** Astrally attack a target. Redirect a target into another, and transform the redirected's ability into a Basic Attack.");

		e.addField("Pokemon Ability:", "(Incarnate) **Sheer Force** Each night, when you attack a target, you double your Attack.\n(Therian) **Intimidate** The player who you visit's Attack Value Is lowered by one stage. This does not affect the same player more than once.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["i_made_this_role_in_1_minute", "imadethisrolein1minute", "made", "1", "minute", "imtri1m", "mtri1m", "2356"], "Mafia", "I made this role in 1 minute", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2356");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night If they don't use their ability within the next minute they cant also this resolves instantly\n- Choose a player each day they can only talk fo rthe next one minute and then they cant  also this resolves instantly");

		e.addField("Attributes:", "- Roleblock and dredirect immune\n- Your targets will be informed that theyre tar");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["repost_if_pigeon", "ignore_if_not", "repostifpigeon", "ignoreifnot", "repost_if_pigeon_ignore_if_not", "repostifpigeonignoreifnot", "repost", "pigeon", "ignore", "ripiin", "2357"], "Neutral", "REPOST IF PIGEON -- IGNORE IF NOT", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2357");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Post the REPOST IF PIGEON -- IGNORE IF NOT gif in the day channel.");

		e.addField("Attributes:", "- After you post the GIF, if anyone else posts the GIF in a game channel, their role name will be changed to Pigeon. This doesn't affect their abilities, attributes, goal, or anything else. But people will appear as a Pigeon whenever their role is mentioned. You're a Serial Killer? The person you killed last night was stabbed by a Pigeon. Deluxe ended up dying, but his role was Pigeon (1724).");

		e.setImage("https://media.tenor.com/0hS-rr_LyNQAAAAd/bird.gif");

		e.addField("Goal:", "See to it that everyone ALIVE is a Pigeon.");
	});

	register_role(["serial_vigilante", "serialvigilante", "serial", "vigilante", "sv", "2358"], "Town", "Serial Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2358");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "Kill one player each night.");

		e.addField("Attributes:", "Your kills will show up as a Serial Killer's.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["pie_face", "pieface", "pie", "face", "pf", "2359"], "Neutral", "Pie Face", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2359");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "Twice per game, you may throw a pie at someone's face. Pied targets will have their abilities and attributes changed to that of a Mayor, and be attacked.");

		e.addField("Attributes:", "You cannot be roleblocked.");

		e.addField("Goal:", "Die third to last.");
	});

	register_role(["jesterizer", "2360"], "Neutral", "Jesterizer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2360");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night you may select a player to Jesterize.");

		e.addField("Attributes:", "- If a Jesterized player is ever lynched, they will appear to have been a Jester; and you will have to choose a target they will haunt that night.\n- This haunting cannot be redirected and is astral.");

		e.addField("Goal:", "Get 3 Jesterized players lynched.");
	});

	register_role(["jane", "2361"], "Other", "Jane", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2361\nRoles that automatically win the game are not allowed.");
	});

	register_role(["remove_jane_from_the_game", "removejanefromthegame", "remove", "jane", "from", "game", "rjftg", "rjfg", "2362"], "Other", "Remove Jane from the game", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2362\nThis role cannot spawn because it relies on the existence of a role that the rules prevent from spawning.");
	});

	register_role(["jane_the_game.", "janethegame.", "jane_the_game", "janethegame", "jane", "game.", "game", "jtg", "jg", "2363"], "Neutral", "Jane the game.", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2363");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Jane the game.");

		e.addField("Attributes:", "- All players' names become Jane.\n- All targets are random because they're all Jane.");

		e.addField("Goal:", "Jane the game.");
	});

	register_role(["bomber", "2364"], "Neutral", "Bomber", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2364");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "\"Modkill\"", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, you may place a fuse on a player. Fuses stay active for that night and the next.");

		e.addField("Attributes:", "- When a player with a fuse is attacked, the fuse goes off and the entire town is notified that a fuse went off from this role.\n- After 3 following nights the bomb will detonate and kill everyone but you. The only way to stop it is by killing you.");

		e.addField("Goal:", "Have your bomb successfully detonate.");
	});

	register_role(["rioter", "2365"], "Neutral", "Rioter", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2365");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "When you are lynched, all living players will have their roles swapped with each other randomly.");

		e.addField("Goal:", "Get lynched.");
	});

	register_role(["polymorph", "2366"], "Neutral", "Polymorph", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2366");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Thrice per game, you may choose any GiM, classic ToS, ToS FM, Camp Cadaver or Throne of Lies role to gain the abilities, attributes, attack and defense of until you use this ability again. You cannot select Post 2366 Polymorph.");

		e.addField("Goal:", "You win if the town loses, whether you are dead or alive.");
	});

	register_role(["serial_killer_but_it's_guardian_angel", "serialkillerbutit'sguardianangel", "serial_killer_but_its_guardian_angel", "serialkillerbutitsguardianangel", "serial", "killer", "guardian", "angel", "skbiga", "skga", "sk", "2367"], "Neutral", "Serial Killer But It's Guardian Angel", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2367");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player each night.\n- Watch over your target at night, Astrally Healing them and removing all negative effects from them.");

		e.addField("Attributes:", "- At the beginning of the game, you will receive a player as your target.\n- Your target cannot be a player who must die to win.\n- You may watch over your target while dead.\n- You may only watch over your target twice.\n- If you are roleblocked, you will attack the role blocker in addition to your target.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- You may multitask.\n- Roleblock Immune");

		e.addField("Goal:", "Keep your target alive until the end of the game.");
	});

	register_role(["role_now", "rolenow", "now", "rn", "2368"], "Town", "ROLE NOW", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2368");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each day, ping someone and say \"ROLE NOW\".");

		e.addField("Attributes:", "- If your target hasn't ever claimed a role by the end of the day, you'll learn their role.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["smasher", "2369"], "Neutral", "Smasher", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2369");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each day, you must select another player to challenge them to Smash. At the beginning of the night that player will be informed they must download Super Smash Flash 2 and create an account to fight you in an online lobby, or they will be attacked by you.");

		e.addField("Attributes:", "- The player gets this role must download Super Smash Flash 2 and create an account to play online.\n- You will fight in 3-stock matches.\n- If you beat your target twice, you win and attack your target. If they beat you thrice before you beat them twice, you will instead attack yourself and they get to live.");

		e.addField("Goal:", "Survive to the end of the game.");
	});

	register_role(["coward", "2370"], "Town", "Coward", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2370\n*Eat them, not me.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If you would be attacked at night, the player one space beneath you on the player list is attacked instead and the attack value is increased by a stage.\n- If both of your closest living neighbours have non-Town roles with the same alignment, you become a 98: Werewolf.\n- This role can only roll if the player who rolls it has at least one Town neighbour. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["reflectionist", "reflect", "2371"], "Town", "Reflectionist", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2371");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. For each attack targetting them, redirect it to the attacker.");

		e.addField("Attributes:", "- <@Magnus_Chase19>");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["power_of_three_two", "powerofthreetwo", "power", "three", "two", "pott", "ptt", "2372"], "Neutral", "Power of Three Two", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2372");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player, and choose any alignment and subalignment. You will use the abilities of 3 random roles from that alignment/subalignment on your target.");

		e.addField("Attributes:", "- You can target everyone at once.");

		e.addField("Goal:", "Die second to last.");
	});

	register_role(["coalition_recruiter", "coalitionrecruiter", "coalition", "recruiter", "cr", "2373"], "Mafia", "Coalition Recruiter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2373");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, make a player a flagbearer. This resolves and is publicly announced at the beginning of the next night.");

		e.addField("Attributes:", "- While declaring targets for abilities or game actions, if a flagbearer is a legal target, players other than you must target at least one flagbearer.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["power_of_three_two_one", "powerofthreetwoone", "power", "three", "two", "one", "potto", "ptto", "2374"], "Neutral", "Power of Three Two One", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2374");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player, and choose any role. You will use 3 random abilities from that role on your target. You may use the same ability multiple times.");

		e.addField("Attributes:", "- You can target any number of players at once and each player up to three times.");

		e.addField("Goal:", "Use your ability at least one hundred twenty-three times.");
	});

	register_role(["retributi-_hey_uhh,_did_you_like_actually", "retributi-heyuhh,didyoulikeactually", "retributi_hey_uhh_did_you_like_actually", "retributiheyuhhdidyoulikeactually", "retributi-", "retributi", "hey", "uhh,", "uhh", "did", "like", "actually", "rhudyla", "rhudla", "2375"], "Town", "Retributi- Hey Uhh, Did You Like Actually", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2375");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Revive a player at night. 3 uses.");

		e.addField("Attributes:", "- You may only target Town.\n- The person you revive will be attacked automatically at the end of the next night. Nothing can prevent them from dying again, and you will continuously attack them at the beginning and end of every phase until they die.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wick", "2376"], "Underworld", "Wick", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2376\n*It's fun to watch. They fall like dominoes!*");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Set up a trail of rope between three targets' houses. Tonight, if the first target visits the second and the second target visits the third, douse all three targets. You'll be told if you're successful. Cannot self-target.\n- Redirect a doused player. (3 uses)");

		e.addField("Attributes:", "- You're redirect immune.\n- You only visit your first target. If you would successfully douse, your visit becomes Astral.\n- You may multitask, though this does not apply to the factional douse.\n- At any time, if there is no Apocalypse, you will become the Apocalypse.");

		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["town_support", "townsupport", "town", "support", "ts", "2377"], "Town", "Town Support", {subCat: "Support", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2377");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Do literally anything.");

		e.addField("Attributes:", "- THIS ROLE CANT BE COPIED");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["hey,_i_just_met_you", "hey,ijustmetyou", "hey_i_just_met_you", "heyijustmetyou", "hijmy", "2378"], "Neutral", "Hey, I just met you", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2378");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- And this is crazy: If you are lynched within the first three days you instantly win and may reroll all the roles as many of your voters as you wish, they must become a role of the same category.");

		e.addField("Attributes:", "- But here's my number: Reveal your role to a player at night. Then kill them. Hopefully they don't have powerful defense. 1 use per night.\n- So call me maybe: Randomly roll a town role yourself, you may pick the category if you so wish. Copy an ability from that role. 3 uses, may be used at any time.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["town_protective", "townprotective", "town", "protective", "tp", "2379"], "Town", "Town Protective", {subCat: "Protective", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2379");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Take literally any action that involves protecting a player in some way.");

		e.addField("Attributes:", "- This role can't be copied.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["town_killing", "townkilling", "town", "killing", "tk", "2380"], "Town", "Town Killing", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2380");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player. Kill them.");

		e.addField("Attributes:", "- This role can't be copied.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wanked_multiversal_character", "wankedmultiversalcharacter", "wanked", "multiversal", "character", "wmc", "2381"], "Town", "Wanked Multiversal Character", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2381");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "\"Your attacks are multiversal, therefore nothing can block them, not even Superman.\" (Basic)", true);
		e.addField("Defense", "\"Your defense is multiversal, therefore nothing can stop you.\" (Basic)", true);

		e.addField("Abilities:", "- Overpowered attack: Attack someone tonight. 1 use per night.\n- Good writers: You may regain your OP multiversal stats for tonight only. You must use this during the day. 2 uses, cannot be used before night 3 passes.");

		e.addField("Attributes:", "- Bad writers: Your attack and defense are lowered to basic after night 1 is over.\n- Origin Story: You MUST use your overpowered attack n1.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["steel-wing_raptor", "steel-wingraptor", "steelwing_raptor", "steelwingraptor", "steel-wing", "steelwing", "raptor", "sr", "2382"], "Neutral", "Steel-Wing Raptor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2382");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Soar into a player at night and attack them. When you soar to a player, you will take the shortest flight path to them when looking at the player list. Dead bodies don't count. You'll fly over everyone between you and the target. People who you fly over will be Rusted.");

		e.addField("Attributes:", "- You can only target people four or less numbers away from your on the player list, and dead people aren't considered again.\n- Whenever you're targeted by a Rusted player, they'll be redirected to another player at random. They won't know they were redirected\n- If everyone besides you is Rusted or a rotting corpse, you can use your attack thrice during the night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["town_investigative", "towninvestigative", "town", "investigative", "ti", "2383"], "Town", "Town Investigative", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2383");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player. Investigate them in every way possible.");

		e.addField("Attributes:", "- This role can't be copied.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["baby_lab_burger", "babylabburger", "baby", "lab", "burger", "blb", "2384"], "Neutral", "Baby Lab Burger", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2384");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player. Literally fucking eat them alive holy shit what are you doing wait--");

		e.addField("Attributes:", "- When somebody dies to your attack, this video will be posted along with their role in the graveyard: https://cdn.discordapp.com/attachments/833519695155691591/1031402479511941131/baby-lab-burger.mp4\n- Cannot eat the Greymailer (2350) specifically. Any action taken against it will fail.");

		e.addField("Goal:", "Eat all who oppose lab burgers.");
	});

	register_role(["ninja", "2385"], "Mafia", "Ninja", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2385");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select another during the day to challenge to a game of Card Jitsu during the night.");

		e.addField("Attributes:", "- Your target does not know who they are dueling.\n- Roleblock, control, redirect immune.\n- You roleblock your target.\n- You and your target are given 5 cards, and gain one after each turn. Each one has a random element (fire, water, snow), a random color (red, orange, yellow, green, blue, purple), and a random value (from 2 to 12).\n- Throughout the night, both of you will select a card to play.\n- When both players play a card, they are revealed to the other player and compared.\n- Fire cards automatically beat Snow, Water beats Fire, and Snow beats Water. If elements are the same, refer to the number. If it is a complete tie, the round is a draw and both cards are discarded.\n- When a player wins a round, the card is added to their total, and the loser has their card discarded.\n- The game ends when one player has 3 cards of the same element and different colors, or 3 cards of all different elements and different colors.\n- If you lose, you cannot duel anyone the next day. If you win, you attack your target.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["blue_flame", "blueflame", "blue", "flame", "bf", "2386"], "Everfrost", "Blue Flame", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2386");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Flame a non-Everfrost player. When they die, they'll be Incinerated, effectively the same thing as cleaned. All players whom visit them will be given an Ice Mark.\n**Frozen Flames** — Surround the town in blue flames during the day. All who attempt to leave the game, such as DecDecAttack or Free Bird will be dealt an Unstoppable attack and Incinerated. Players with an Ice Mark will only be able to target the alive player closest to them on the player list, or if there's a tie one of the two. All non-Everfrost players who don't use an ability tonight are roleblocked and covered in frost.");

		e.addField("Attributes:", "- While you're in the game, no roles will be able to self-target even if the rolecard specifies otherwise.\n- Both of your abilities use Astral.");

		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["and_all_the_other_boys", "andalltheotherboys", "all", "other", "boys", "aatob", "aob", "2387"], "Town", "And All The Other Boys", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 2387");

		e.addField("Alignment", "Town Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Try to chase me: Pick a player, and redirect all of their visitors into you.\n- So here's my number: During the day you may choose to use this ability. If you do, the following night you will learn the roles of everyone that visits you. 0 uses.");

		e.addField("Attributes:", "- So call me maybe: Every night you are visited by more than two players you gain an use of your second ability.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["short_circuit", "shortcircuit", "short", "circuit", "sc", "2388"], "Town", "Short Circuit", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2388");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, nullify a player's attributes until the end of the night.");

		e.addField("Attributes:", "- Roleblock and redirect immune");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["5_cats_in_a_trenchcoat", "5catsinatrenchcoat", "5", "cats", "in", "trenchcoat", "5ciat", "5cit", "2389"], "Any", "5 Cats in a Trenchcoat", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2389");

		e.addField("Alignment", "Any Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You are 5 copies of <@417531120075407371>, copying her role's abilities, attributes, goal and faction. If shes neutral, you win with her and make a private chat with her. If shes not in the game, cope.");

		e.addField("Goal:", "N/A");
	});

	register_role(["6_cats_in_a_trenchcoat", "6catsinatrenchcoat", "6", "cats", "in", "trenchcoat", "6ciat", "6cit", "2390"], "Neutral", "6 Cats in a Trenchcoat", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2390");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You are 6 copies of <@417531120075407371> in a trenchcoat, copying her role's abilities and attributes.\n- This role cannot spawn if <@417531120075407371> is not a player, and <@417531120075407371> may not spawn as this role.\n- You may not target <@417531120075407371> with any of your abilities, say their name or ping them in the day chat, or whisper them.");

		e.addField("Goal:", "See <@417531120075407371> lose the game.");
	});

	register_role(["the_misery", "themisery", "misery", "tm", "m", "2391"], "Neutral", "The Misery", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2391");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tell yourself you're the greatest at a target's house, allowing you to win with them and everyone that visits them.\n- Spare the sympathy at a target's house. If they can win with you, you will set your defense to Their Defense+1. ");

		e.addField("Attributes:", "- Everybody wants to be your enemy, meaning you cannot win with anyone and all roles must see you dead by the end of the game to win.\n- You will know everyone that can win with you at all times.");

		e.addField("Goal:", "Survive until the end of the game");
	});

	register_role(["flamesplitter", "2392"], "Underworld", "Flamesplitter", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 2392");

		e.addField("Alignment", "Underworld Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target. If they're doused, undouse them and select two other targets to douse instead.");

		e.addField("Attributes:", "- If all other Underworld players are dead, you will become the Apocalypse.\n- Roleblock and redirect immune.");

		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["technician", "2393"], "Sentry", "Technician", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2393");

		e.addField("Alignment", "Sentry Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Install security hardware at an authorized target's house during the night.\n- Install security hardware at an unauthorized target's house during the night. 1 Use.\n- Install security hardware at your own house OR the Sentry (Power)'s. 1 Use.");

		e.addField("Attributes:", "- Installing security hardware at a player's house will give them a singular powerful autovest. This autovest will be removed two nights after it was installed.\n- You may not install security hardware for a player multiple times.");

		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["mightstone", "2394", "2394b"], "Rock", "Mightstone", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2394A");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert yourself into 2394B: Weakstone at night.");

		e.addField("Attributes:", "- Basic attacks are Unstoppable.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["weakstone", "2394b"], "Rock", "Weakstone", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2394B");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert yourself into 2394A: Mightstone at night.");

		e.addField("Attributes:", "- Unstoppable attacks are Basic.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["manufacturer", "2395"], "Sentry", "Manufacturer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2395");

		e.addField("Alignment", "Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Create a replica of an Authorized player. Whenever a non-Sentry visits the player, they'll visit the replica instead.\n- Create a replica of a non-Authorized player. Whenever anyone visits the player, they'll visit the replica instead. (1 use)");

		e.addField("Attributes:", "- The replica will use whatever replicated ability it has on all visitors. You'll learn all the feedback. If the original role had limited uses, the replica doesn't care.\n- If the replica dies, you'll take one damage. Upon taking three damage, you'll die. You can also die to normal attacks, though.");

		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["organizer", "2396"], "Neutral", "Organizer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2396");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Repurpose someone each night. They become an Event with their role's attributes applying to all phases and are no longer a player.");

		e.addField("Attributes:", "- You may repurpose two players instead each full moon.\n- If you win, all repurposed Events become players again and win with you.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["the_briefcase", "thebriefcase", "briefcase", "tb", "b", "2397"], "Town", "The Briefcase", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2397\n*And even if you dont know what to do, I can help show you!*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn the name of a job thats closest to your target's role each night. For example, Post 25 Plumber is a Plumber.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["turret_user", "turretuser", "turret", "user", "tu", "2398"], "Sentry", "Turret User", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2398");

		e.addField("Alignment", "Sentry Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Set up your turret on Night 1. You'll gain Basic defense and roleblock immunity.\n- On Night 2, you may direct your turret at an Authorized target's house. Whenever an evil target visits someone who you've aimed your turret at, it'll automatically fire and roleblock the evil person. You can shoot multiple people a night. You have to use this ability on Night 2.\n- On Night 3 and beyond, use some swivel oil and turn your turret around from one target to another. See the attributes for more details.");

		e.addField("Attributes:", "- Your turret doesn't have much swivel oil, so you can only turn it to one of your current targets two closest ALIVE neighbors on either side of them on the player list.\n- Once per game, you can give yourself more swivel oil. You'll be able to move your turret to anyone up to FIVE houses away.\n- If you stay on the same target for three nights in a row, you'll expend your swivel oil and your turret will stop working.");

		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["consigliere", "2399"], "Town", "Consigliere", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2399");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone at night to learn their exact role.");

		e.addField("Attributes:", "- This role is as balanced as the majority of other TIs in GIM.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["construction_worker", "constructionworker", "construction", "worker", "cw", "2400"], "Town", "Construction Worker", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2400");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- On even-numbered nights, select two houses to renovate. These renovations will take an additional night to complete, and will fail if anyone visits your targets. If successful, however, your targets will gain an additional, permanent layer of defense.");

		e.addField("Goal:", factions.Town.goal);
	});
};
