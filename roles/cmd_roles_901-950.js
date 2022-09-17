module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["keeper", "901"], "Neutral", "Keeper", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 901\n*We all need a little alone time. Wouldn’t you agree?*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to lock them in your vault and set their lock with a passcode.");

		e.addField("Attributes:", "- If someone is not locked in your vault, you may choose someone at any time to lock them in your vault at the start of the next phase. You must also choose a passcode.\n- The player who is locked in your vault will not have access to **any** of the channels in the category of the current game. Their lack of presence will be announced to the town.\n- Your vault has a lock that is unlocked with a passcode. This passcode must be an actual English word. The player locked in the vault must take guesses as to what this passcode is. With each guess, the player will be informed of any letters in the same position as the passcode and their guess as well as any letters that are in the passcode but in a different position from the guess.\n- Once the player has correctly guessed their passcode, they will instantly escape your vault. They will instantly rejoin all chats, and it will be announced to the Town even during the night.");

		e.addField("Attributes (cont.):", "- Your first passcode must be four characters, and for each further person locked in your vault, the passcode will gain another character.\n- If a player is stuck in your vault for four full phases, they will die of starvation. They will regain access to the game chats if this happens.");
		
		e.addField("Goal:", "Have a person locked in your vault die of starvation.");
	});

	register_role(["spirit_of_killing", "spiritofkilling", "sok", "902"], "Neutral", "The Spirit of Killing", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 902");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Varies", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use your assigned abilities.");

		e.addField("Attributes:", "- At the start of the game, you are given 4 Neutral Killing roles. The roles may not be multi-kill roles. Pick 2 roles and inherit their abilities.\n- You may multitask.\n- Any kill will be attributed to the role that has the ability you used to kill the player.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["bloodbender", "903"], "Coven", "Bloodbender", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 903\n*Your body betrays you.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player each night. For the rest of the game, whenever that player attempts to target one of their closest alive neighbours, their visit will fail. (Imagine all dead players are removed from the player list, and look at the two players adjacent to you on it. Those are your closest alive neighbours.)");

		e.addField("Attributes:", "- With the Necromincon, visits against you will fail, and those that target you at night are dealt a Basic attack. This attribute won't apply to actions which would roleblock you, and will actually be completely disabled on nights you're roleblocked.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["mortar", "904"], "Town", "Mortar", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 904");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fire a mortar shell at a player.");

		e.addField("Attributes:", "- You have 3 mortar shells.\n- You may not shoot people 1-2 spots away from you on the player list (Dead players do not count as players near you on the player list).\n- If 7 or less players are alive, your restriction is dropped. Revivals will not reinstate this restriction.\n- If you kill a town member, you will lose all your shells.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["enlisted_wurm", "enlistedwurm", "enlisted", "wurm", "ew", "905"], "Gatherer", "Enlisted Wurm", {subCat: "Commander"}, (e) =>
	{
		e.setDescription("Post 905\n*A match for any army—even its own.*");

		e.addField("Alignment", "Gatherer Commander", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Generate (Green)(White) each night.\n- (Green) OR (White): Attack a target each night.");

		e.addField("Attributes:", "- You will automatically generate (Green)(White) at the start of the game.");

		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["copydog", "906"], "Town", "Copydog", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 906");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each day, use up to one day ability of any other role except those that reveal themselves.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mewtwo", "907"], "Pokemon", "Mewtwo", {subCat: "Legendary"}, (e) =>
	{
		e.setDescription("Post 907");

		e.addField("Alignment", "Pokemon Legendary", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Psychic - Deal a Basic Attack at a target.\n- Psychic Terrain - For the next night Psychic resolves before anything else. 2 uses.\n- Calm Mind - The next night, up your Attack and defense by one.");

		e.addField("Attributes:", "- Calm Mind can stack as long as It Is used multiple nights in a row.\n- If a target survives Psychic, they are redirected to themselves the next night.");

		e.addField("Pokemon Abilitiy:", "Unnerve - When you active this passive at the beginning of the night, you will bypass healing for the night. 2 uses.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["giratina", "908"], "Pokemon", "Giratina", {subCat: "Legendary"}, (e) =>
	{
		e.setDescription("Post 908");

		e.addField("Alignment", "Pokemon Legendary", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Outrage - Deal a Basic Attack at your target.\n- Will o Wisp - Lower a target's Attack Value down to None for the night. 3 uses.\n- Roar - Choose a target. All of their visitors are redirected to you. 1 use.");

		e.addField("Attributes:", "- You are forced to use Outrage the night after you use Outrage  You are no longer forced to use Outrage if you have used It 2 times in a row already.");

		e.addField("Pokemon Abilitiy:", "Telepathy - Any attack dealt towards you done by a member of the Pokémon Faction (due to redirection and similar) Is lowered to None.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["lunala", "909"], "Pokemon", "Lunala", {subCat: "Legendary"}, (e) =>
	{
		e.setDescription("Post 909");

		e.addField("Alignment", "Pokemon Legendary", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "Moonblast - Deal a Basic Attack at a target.\n- Safeguard - Grant all Pokémon members Roleblock, Control and Redirection Immunity and up their defensive value by 1. Includes yourself. 2 uses.\n- Defog - Select a player. Remove their Immunities and purge their visitors. 2 uses.");

		e.addField("Attributes:", "- Any night using Moonblast, you may decide to compare your Attack Value with the target's Defense Value. If their Defense Value Is higher than your Attack Value, up your Attack Value by 1. If It Is lower, your Attack Value Is lowered by 1.");

		e.addField("Pokemon Abilitiy:", "Shadow Shield - The first time you are attacked, you will automatically heal yourself and purge every Pokémon Faction member.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["magikarp", "910"], "Pokemon", "Magikarp", {subCat: "Base"}, (e) =>
	{
		e.setDescription("Post 910");

		e.addField("Alignment", "Pokemon Base", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Splash - Splash at someone's house.\n- Water Sport - Learn the role of one random player under the Rain. 2 uses.\n- Soak - Pick a player. If It Is raining under their house, roleblock them.\n- Evolve - Evolve into Gyarados. May only be used when you have roleblocked 3 town roles and 1 non town non neutral role.");

		e.addField("Attributes:", "- When you splash, the night after splashing, summon the Rain at someone's house.\n- Everyone who visits a house under the Rain becomes a player under the Rain for the night.\n- Everyone who visits your Splash's target will know a Magikarp splashed that night.");

		e.addField("Pokemon Abilitiy:", "Swift Swim - If activated, learn the visitors of all houses where the rain Is falling. 2 uses.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["slakoth", "911"], "Pokemon", "Slakoth", {subCat: "Base"}, (e) =>
	{
		e.setDescription("Post 911");

		e.addField("Alignment", "Pokemon Base", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Yawn - Yawn at someone's house. The next night, they are roleblocked.\n- Follow Me Redirect a target player's visitors to yourself tonight. \n- Encore - Pick 2 players and lower their attack value to None for the night.\n- Evolve - Evolve into Slaking. May only do this if you have stopped at least 3 attacks.");

		e.addField("Pokemon Abilitiy:", "Truant - Every other night, slack off and gain Powerful defense for the night.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["mime_jr", "mimejr", "912"], "Pokemon", "Mime Jr", {subCat: "Base"}, (e) =>
	{
		e.setDescription("Post 912");

		e.addField("Alignment", "Pokemon Base", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Teeter Dance - Redirect a player into someone else. If they have an attack value, raise It by one. May not target members of the Pokemon Faction\n- Calm Mind - The next night, up your Attack and Defense value by 1.\n- Baton Pass (Day Ability) - Transfer the Attack and Defense Value that you will have at the end of the next night to a random player.\n- Evolve - Evolve into Mr Mime. May only evolve if you have indirectly killed 3 players.");

		e.addField("Attributes:", "- Calm Mind can stack as long as It Is used multiple nights in a row.");

		e.addField("Pokemon Abilitiy:", "Technician - The player you visit's Attack Value Is upped by 1. 2 uses.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["gyarados", "913"], "Pokemon", "Gyarados", {subCat: "Evolved", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 913");

		e.addField("Alignment", "Pokemon Evolved", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Waterfall - Deal someone a Powerful Attack, and roleblock them for the night.\n- Dragon Rage - Deal someone a Basic Attack and bypass everything but permanent defense. 3 uses.\n- Bounce - Give yourself Basic Defense for the night. Then, the next night, deal a Powerful Attack at someone. 2 uses.");

		e.addField("Attributes:", "- This role cant be rolled normally and must be rolled from Magikarp.");

		e.addField("Pokemon Abilitiy:", "Intimidate - The player who you visit's Attack Value Is lowered by one stage. This does not affect the same player more than once.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["slaking", "914"], "Pokemon", "Slaking", {subCat: "Evolved", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 914");

		e.addField("Alignment", "Pokemon Evolved", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Giga Impact - Deal an Unstoppable Rampage attack at a player's house. The following night, you have to rest.\n- Earthquake - Deal a Powerful Rampage Attack at a player's house.\n- Slack Off - If this night Is a night where you're loafing around, grant yourself Powerful Defense. 2 uses.");

		e.addField("Attributes:", "- This role cant be rolled normally and must evolve from Slakoth.\n- You cannot use Giga Impact on nights where you arent loafing around.");

		e.addField("Pokemon Abilitiy:", "Truant - Every other night, you loaf around and cannot use abilities (except for Giga Impact and Slack Off)");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["mr_mime", "mrmime", "915"], "Pokemon", "Mr Mime", {subCat: "Evolved", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 915");

		e.addField("Alignment", "Pokemon Evolved", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Substitute - Create a Substitute. Your substitute tanks 2 Basic Attacks or 1 Powerful/Unstoppable Attack for you before It breaks. 1 use.\n- Reflect - Lower everyone's defense to none, and nullify all attacks Powerful and higher. 2 uses.\n- Light Screen - Lower everyone's defense to none, and nullify all attacks Powerful and lower. 2 uses.");

		e.addField("Attributes:", "- This role cant be rolled normally and must evolve from Mime Jr.");

		e.addField("Pokemon Abilitiy:", "Filter - The first time you are attacked, everyone's Attack Value Is lowered by 1 for the night.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["smeargle", "916"], "Pokemon", "Smeargle", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 916");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sketch - Copy your target's ability. If they have multiple, one is picked at random.");

		e.addField("Attributes:", "- You may only have 3 sketched abilities at all time.\n- You may decide at any point to forget one of your sketched abilities.");

		e.addField("Pokemon Abilitiy:", "Own Tempo - You can use your sketched abilities twice per night (but you cant use more than one sketched ability per night)");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["druddigon", "drudd", "917"], "Pokemon", "Druddigon", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 917");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Dragon Claw - Deal a basic attack at a target.\n- Dragon Dance - The next night, up your Attack and Priority by 1.\n- Dragon Tail - Deal a Basic Rampaging Attack. 3 uses.");

		e.addField("Attributes:", "- Dragon Dance can stack as long as you use It multiple times in a row.");

		e.addField("Pokemon Abilitiy:", "Rough Skin - If you die, your attacker Is dealt an Unstoppable Attack.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["stonjourner", "ston", "918"], "Pokemon", "Stonjourner", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 918");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Body Press - Attack someone. You will use your Defense Value instead of Attack Value.\n- Harden - The next night, up your Defense Value.\n- Sandstorm - Summon a Sandstorm. For the next 2 nights, gain Powerful Defense. 1 use.");

		e.addField("Attributes:", "- Harden can stack as long as you use It multiple nights in a row.");

		e.addField("Pokemon Abilitiy:", "Power Spot - If you're killed at night, all of your allies gain Unstoppable Attack and Invincible Defense for the next night.");
		
		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["ballerina", "919"], "Town", "Ballerina", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 919\n*What a stunning performance! Let us clap for them.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Gracefully dance around someone's house at night.\n- Choose to dance around the Town square during the day. (1 use)");

		e.addField("Attributes:", "- All players who visit your target will become distracted and instead watch you dance causing them to be roleblocked.\n- When you dance around the Town square, you will receive the next twenty whispers sent. This ability will persist throughout all day phases until you have received twenty whispers. This will not be publicly announced. You will not be able to speak while dancing around the Town.\n- You are roleblock immune.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["veilist", "920"], "Coven", "Veilist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 920");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. They gain Hexproof until the end of the next day. You may self-target.");

		e.addField("Attributes:", "- Hexproof players aren't legal targets for abilities, votes, and whispers. Players will be told that they can't target them with those actions upon attempting to do so. Abilities who already have a Hexproof player as their target won't resolve.\n- With the Necronomicon, when you use your ability, you may choose another player who you've made Hexproof at any point in the game previously and they're dealt a Powerful attack.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["tier_list_reviewer", "tierlistreviewer", "tlr", "921"], "Town", "Tier List Reviewer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 921\n*This role was retweeted by TierMaker.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check the tier of someone's role.");

		e.addField("Attributes:", "- You will receive the tier that your target's role is ranked in the tier list pinned in <#972887492359508048>.\n- If your target is not ranked on the tier list, you will instead perform a Sheriff (984) check on them.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wm_drunk_driver", "wmdrunkdriver", "drunk_driver", "drunkdriver", "wmdd", "922"], "Neutral", "WM Drunk Driver", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 922\n*This role was retweeted by TierMaker.*");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Get someone drunk on Full Moon nights.\n- Go on a drive on non-Full Moon nights.");

		e.addField("Attributes:", "- When you get someone drunk, you will roleblock and attack them.\n- When you go on a drive, you may choose to attack one or two players.\n- When you go on a drive and attack one player, you will clean them.\n- When you go on a drive and attack two players, you may choose one target. Your second target will be chosen randomly within the players that are one or two spaces from them on the player list.\n- If you go on a drive and would attack yourself as the random target, you will not die, and will instead only attack your first target, cleaning them.\n- If you go on a drive and your second target is protected by something other than a heal, is being visited by an Incarcerator or Fisherman, is an alerted Veteran, or is Medusa that is stone gazing visitors, you will instead only attack your first target, cleaning them.\n- You gain roleblock immunity on non-Full Moon nights.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["kaze", "922"], "Fox", "Kaze", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 922");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kaze is a carrier of the wind. Kaze has the ability to pick up on the wind currents and alter the weather of certain areas. At night they are able to force someone to stay inside due to strong winds. Effectively roleblocking them.");

		e.addField("Attributes:", "- If this is rolled and no Fox Heads are rolled, roll a Fox Head.\n- Kaze can not perform the factional kill and roleblock someone at the same time.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["ongaku", "923"], "Fox", "Ongaku", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 923");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Ongaku is the Musical and Sound version of the Foxes. Once per night you may choose a 5 letter word, any word.");

		e.addField("Attributes:", "- If this is rolled and no Fox Heads are rolled, roll a Fox Head.\n- Kaze can not perform the factional kill and roleblock someone at the same time.\n- The first player to say that word during the following day will die at day end.\n- You cannot perform the factional kill and set a cursed word at the same time.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["seishin", "924"], "Fox", "Seishin", {subCat: "Omega"}, (e) =>
	{
		e.setDescription("Post 924");

		e.addField("Alignment", "Fox Omega", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- This role must roll alongside Kukan.\n- Their attributes are actually decided by the first 3 roles to die. Seishin will adapt to One attribute from each spirit of the fallen (can be attack/defense and/or ability).\n- If Kukan mis-kills or dies, Seishin will lose two of their attributes and join the Foxes the following night(their choice).");
		
		e.addField("Goal:", "Kill anyone that opposes the Foxes or Outlive Kukan");
	});

	register_role(["kukan", "925"], "Fox", "Kukan", {subCat: "Omega"}, (e) =>
	{
		e.setDescription("Post 925");

		e.addField("Alignment", "Fox Omega", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Investigatate someone at night and learn their role.\n- Kill someone at night. (1 use)");

		e.addField("Attributes:", "- If this is rolled, Seishin must appear too.\n- Your investigation can be fooled by disguises.\n- If you kill Seishin, you will join the rest of the foxes and gain their goal.\n- If your attack kills someone else, the Foxes will learn your name, and your new goal will be to live until all Foxes perish.");
		
		e.addField("Goal:", "Kill anyone that opposes the Foxes or Survive to the end.");
	});

	register_role(["kasai", "926"], "Fox", "Kasai", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 926");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- In the day or night, engulf the victim of murder or lynching in flames, cleaning their body and hiding their role.");

		e.addField("Attributes:", "- If this is rolled and no Fox Heads are rolled, roll a Fox Head.n\- You may burn your own teammates.\n- You may use your ability and use the night kill at the same time.\n- When using your ability in the day, you must use it before the day ends for it to work.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["chikyu", "927"], "Fox", "Chikyu", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 927");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Attributes:", "- If this is rolled and no Fox Heads are rolled, roll a Fox Head.\n- If lynched, you will cause a massive earthquake, shielding any Foxes to for following two nights from basic attacks.\n- They can not perform the factional kill unless they are the last ones left.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["yama", "928"], "Fox", "Yama", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 928");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Instead of using the factional kill, Yama may decide to travel to the top of the mountain and look into the town square. Doing so will reveal a list of every visiting person that night.");

		e.addField("Attributes:", "- If this is rolled and no Fox Heads are rolled, roll a Fox Head.\n- If attacked and not killed Yama will perform a counter attack dealing a basic attack towards the attacker.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["arctic_fox", "arcticfox", "929"], "Fox", "Arctic Fox", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 929");

		e.addField("Alignment", "Fox Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The Arctic Fox has a powerful grasp of the winter spirit. Once a night they may target a player and slow them down by one day, doing so delays all results they get by one day permanently(once per player).");

		e.addField("Attributes:", "- If no other foxes are rolled yet, roll a Fox Beta.\n- Can not perform the factional kill and use ability the same night.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["ninetales", "930"], "Fox", "Ninetales", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 930");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game the Ninetales can set a players house on fire scorching anyone that visits them. This deals a powerful attack to the player itself and any visitors.");

		e.addField("Attributes:", "- If this is rolled and no Fox Heads are rolled, roll a Fox Head.\n- Can not perform the factional kill and use ability the same night.\n- Your ability takes the place of the factional kill for the night that you use it.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["oni", "931"], "Any", "Oni", {anyExCat: ["Fox"]}, (e) =>
	{
		e.setDescription("Post 931");

		e.addField("Alignment", "Fox/Any", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If this rolls you must roll any one Fox Head if none are present.\n- You have a random non-Fox role that will take the place of this role card, without knowing you are really the Oni.\n- The Foxes will know your name and role, but won't be in a chat with you.\n- 3 times per game, the Foxes can control you.");
		
		e.addField("Goal:", "Kill anyone that opposes the Foxes OR your role's goal.");
	});

	register_role(["sanda", "932"], "Fox", "Sanda", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 932");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "Sanda is the spirit of thunder destined to rule the skies, but their voice is so strong that two times per game, the two players with the majority of votes will be lynched at the end of the next day.");

		e.addField("Attributes:", "- You must activate your ability in the night, so it can activate the next day.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["nogitsune", "nogi", "933"], "Fox", "Nogitsune", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 933");

		e.addField("Alignment", "Fox Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Take full control over the Oni every night.");

		e.addField("Attributes:", "- The Nogitsune has a powerful grasp over supernatural entities. If this rolls you must roll an Oni.\n- If the Nogitsune dies the Oni will be released and no longer have the Fox win-con.\n- Can not control the Oni and perform the factional kill the same night.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["mori", "934"], "Fox", "Mori", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 934");

		e.addField("Alignment", "Fox Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Mori is the spirit of the forest. At any one point of the game, select a player to be enclosed in the forest at night.");

		e.addField("Attributes:", "- No actions can happen upon them but in return they must give all their voting power to Mori and reports for the night. (they will not be notified)\n- If the player enclosed in the forest is lynched the following day, Mori will self enclose themselves and lose their voting for one day and their ability permanently. ");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["kawa", "935"], "Fox", "Kawa", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 935");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kawa is a talented river guider able to control the tide to their liking. At night they may choose two players to be attracted to their river. If the players are of opposite factions they will both be dealt a basic attack by being pulled into the water.");

		e.addField("Attributes:", "- If this rolls, replace any fox head with Umi.\n- If no Fox Heads are rolled, roll Umi.\n- Your ability can only be done 3 times and cannot target their own Fox team members. It will take the place of the factional kill.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["umi", "936"], "Fox", "Umi", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 936");

		e.addField("Alignment", "Fox Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Umi is the spirit of the Ocean and Sea. They have the unique ability to turn any of their fellow fox's ability into an attack for the next use. If the ability already was an attack, increase its tier by 1.");

		e.addField("Attributes:", "- The ability has a one day cool down so can only be done every other day to a maximum of 3 times.\n- Ex: If given to the Kaze, they will rb and deal their target a basic attack.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["tengoku", "teng", "937"], "Fox", "Tengoku", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 937");

		e.addField("Alignment", "Fox Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tengoku has the power to blind their target each night. Blinding will take their results from them and not allow them to vote/nor see the voting chat.");

		e.addField("Attributes:", "- If no beta foxes are rolled when this is, you must roll 2.\n- Tengoku can not perform the factional kill unless they are the last ones left in which case they won't be able to use their ability.\n- When Tengoku dies he may reincarnate into another Fox and give them one of two abilities:\n> The ability to silence a player for the following day\n> Steal a players results for the night\n- If no more foxes are alive the Tengoku must choose someone to carry his hide and they must live to the end for him to win. They will be notified.");
		
		e.addField("Goal:", "Kill anyone that opposes the Foxes or Hide Carrier's Survival");
	});

	register_role(["jikan", "938"], "Fox", "Jikan", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 938");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Controller of time it seems, Jikan can alter time to switch the day/night actions 1 time. Doing so allows for voting to be held at night where no one can speak only vote except for factions with chats, as well as during the day everyone can speak but do their roles actions.");
		
		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["jack_of_all_trades", "jackofalltrades", "joat", "939"], "Town", "Jack Of All Trades", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 939");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill a player. (1 use)\n- Roleblock a player. (1 use)\n- Investigate a player's role. (1 use)\n- Heal a player. (1 use)");

		e.addField("Attributes:", "- You may not target yourself.\n- If all your abilities are used, regain 1 use of each.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["guesser", "941"], "Town", "Guesser", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 941");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per day, Guess a player as the role you know.");

		e.addField("Attributes:", "- At the start of the game, once everyone has confirmed their roles, you will learn a random role that exists within the game, which cannot win with the Town.\n- When you Guess a player, the host will privately ask that player if they are the role that you learned.\n- Whenever your target directly responds to the host's question, their exact response will be relayed to you.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["master_of_none", "masterofnone", "mon", "940"], "Unseen", "Master of None", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 940");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bludgeon (Night):  Kill a player.\n- Distraction (Night): Roleblock a player.\n- Investigate!? (Night): Find a player's exact role.\n- Heal (Night): Heal a player, granting them invincible defense for the night.");

		e.addField("Attributes:", "- You may target yourself.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["ancient_god", "ancientgod", "942"], "Any", "Ancient God", {anyExCat: ["Neutral"]}, (e) =>
	{
		e.setDescription("Post 942");

		e.addField("Alignment", "Any", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Invincible/Variable", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- If this rolls, two other Ancient Gods are guaranteed to exist, but no more than three can exist.\n- You steal a random role's abilities and attributes from the slot you rolled from, and it can be any faction, as long as there are not multiple Ancient Gods in an informed faction.\n- In an informed faction, you will be seen as your stolen role; only in death and investigations will you be seen as an Ancient God.\n- You may perform your individual kill and stolen ability in the same night.\n- Your individual attack value is the value of your stolen role, but one tier higher.\n- If you exist, the Town will know this on day one, and informed faction members can use all abilities on each other.\n- Under no circumstance can your individual attack kill another Ancient God - but your stolen attack can.\n- This can only spawn if an NK slot exists, even though it doesn't occupy it.");
		
		e.addField("Goal:", "NK Goal but all Ancient Gods win together");
	});

	register_role(["voidwind", "943"], "Neutral", "Voidwind", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 943");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- At the end of each night, before actions are processed, you will be provided with a list of all effects that would happen, in the order which they would resolve. You may change the order that the effects resolve however you want.\n- You have 12 hours to make your decision after actions are processed.\n- You may not share the information you receive.");
		
		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["anarchist", "944"], "Neutral", "Anarchist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 944");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Learn someone's role\n- Start a riot.");

		e.addField("Attributes:", "- You may visit someone and learn their exact role. This ignores any framing or disguising effect.\n- Once per game, at night you can choose to start a riot, lowering the amount of votes needed to lynch someone the next day by 3. This can't go below 1.\n- The game won't end if Anarchist can still win by voting out the last good faction member by starting a riot.");
		
		e.addField("Goal:", "See the town lose **or** see a Town (Power) get lynched (this can win while dead).");
	});

	register_role(["spite", "945"], "Coven", "Spite", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 945");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player at night. That player is now Spited.\n- Commit suicide during the day. When you do this, all Spited players will be blackmailed and dealt a Basic attack. With the Necronomicon, using this ability will not cause you to commit suicide.");

		e.addField("Attributes:", "- Each day, the first non-Coven player to mention you by name or by any recognizable nickname will automatically become Spited.\n- You will receive a notification each time a player becomes Spited.\n- Astral");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["driver", "946"], "Neutral", "Driver", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 946");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Drive at a player's house each night.");

		e.addField("Attributes:", "- Roleblock and Control Immune\n- Players that you drive at will be redirected to a random player other than evils.\n- Evils are going to learn who you redirect if you target an evildoer.");
		
		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["nitpicker", "947"], "Town", "Nitpicker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 947");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- {Nitpic}k {someone. Th}i{s is a process in which the host wil}l {go through your target's ro}l{e and arbitrarily choo}s{e exactly six w}o{rds from its abilities and attributes at rando}m {to t}e{ll to y}o{u; however, as ma}n{y of those words is as possible should b}e {somewhat meaningful}.\n- **Cleave** during the day.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["sheriff", "948"], "Town", "Sheriff", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 948");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Interrogate someone at night.");

		e.addField("Attributes:", "- It's old ToS Sheriff except NKs show as NKs and not their actual role. That's basically it.\nSpecifics can be seen here: https://docs.google.com/document/d/1rMinMSKBpTaMKH0oeDpBGulhK7LsDqNN23PWu_A4OJM/edit?usp=sharing");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["lunatic_hell_fairy", "lunatichellfairy", "lhf", "949"], "Coven", "Lunatic Hell Fairy", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 949");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player at night. Along with whatever their visits would normally do, that player will deal a Basic attack to every player they visit during this night. If you have the Necronomicon, they will instead deal Powerful attacks to every player they visit during that night, and those attacks will also Rampage. If the target player either does not visit anybody or visits you, they will instead deal the attack to themself.");

		e.addField("Attributes:", "- If an attack caused by your ability would hit you, it does not hit you.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["spirit_thief", "spiritthief", "st", "950"], "Neutral", "Spirit Thief", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 950");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may choose to revive all of your ghostly friends at the end of a night.");

		e.addField("Attributes:", "- The first three town members to die will be converted to your cause, and may use their abilities in secret at night.\n- If you die, the converted town members will revert to the town, the town members may not use their abilities on you unless they are protective.");
		
		e.addField("Goal:", "Be the last player standing.");
	});
};
