module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["journalist", "451"], "Town", "Journalist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 451");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the start of the night, select someone to investigate with Post 948's ability, or select yourself learn up to 6 messages sent in private chat channels (except whispers) with the most useful information.");

		e.addField("Attributes:", "- Any player names/nicknames in the messages sent will be redacted.\n- You only see messages sent by players.\n- The host decides what messages are useful. This may include messages like \"I checked the Ret claim, it turns out that they were an NK.\"\n- For every 2 useful messages you would learn, you will also recieve a host-fabricated misleading message (i.e information meant to trick you into believing something untrue or confusing you).");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["cupid", "452"], "Town", "Cupid", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 452");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Matchmake a player every night.");

		e.addField("Attributes:", "- You will find out if they're compatible with the person you matchmaked last night. This does nothing night one.\n- Roles are compatible if they win with eachother.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["cupid", "453"], "Neutral", "Cupid", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 453");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Make two players Lovers every night.");

		e.addField("Attributes:", "- Lovers are dealt an Unstoppable attack if the other Lover dies and can secretly whisper to each other. Lovers can win with each others' factions and also win if there are only Lovers and Cupids remaining.\n- You may self-target.\n- Rasen can only be made a Lover with Igu, if she's in the game.");
		
		e.addField("Goal:", "Lovers win");
	});

	register_role(["cupid", "454"], "Coven", "Cupid", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 454\n");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make a player infatuated with another each night. You may make players infatuated with yourself.");

		e.addField("Attributes:", "- Infatuated players must visit the player they're infatuated with for the two nights after they're infatuated. With the Necronomicon, instead they will become obsessed, visiting that player for the rest of the game and dealing a Basic attack along with their action.\n- Rasen can only be infatuated with Igu, if she's in the game.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["cupid", "455"], "Mafia", "Cupid", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 455");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Blind a player by love each night.");

		e.addField("Attributes:", "- Blinded players will fall in love with another player of your choice. They can only see that players' messages for the next day, and can only target that player the next night. You may make them fall in love with yourself.\n- Rasen can only fall in love with Igu, if she's in the game.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["sunflower", "455"], "Plant", "Sunflower", {subCat: "Production"}, (e) =>
	{
		e.setDescription("Post 455");

		e.addField("Alignment", "Plant Production", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spend 1 night producing Sun.\n- Transform into a Twin Sunflower. Requires 5 sun.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["mathematician", "math", "456"], "Town", "Mathematician", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 456");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform mathematical theories at someone's house at night.");

		e.addField("Attributes:", "- You will learn a fact about your targets number. You will learn the most specific fact possible.\n- You will not learn facts that make it too obvious what the number is, and will instead learn the most specific fact that doesn't go against this attribute. (For example, if only 2 numbers have that fact, you won't learn it). (The host can decide what is reasonable.)\n\nSample Facts (more facts can be added):\n> The number is prime.\n> The number is a perfect square.\n> The number is the same forwards and backwards.\n> The number is odd/even.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["twin_sunflower", "twinsunflower", "457"], "Plant", "Twin Sunflower", {subCat: "Production"}, (e) =>
	{
		e.setDescription("Post 457");

		e.addField("Alignment", "Plant Production", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce 2 suns every night.");

		e.addField("Attributes:", "- This role may not be rolled normally and must instead be upgraded from Sunflower.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["nucler_warhead", "nuclearwarhead", "458"], "Neutral", "NuclearWarhead", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 458");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player, and redirect all their visitors to yourself.");

		e.addField("Attributes:", " -If someone uses any ability on your whatsoever that actually gets processed, you and everybody who visits you will die immediately.\n- Anybody who visits you or your ability's target will be warned on the spot that they targeted a Nuclear Warhead. As long as the night isn't over, they'll be able to switch targets.\n- You can also switch your target at any point in the night. Nobody will be notified that you did this unless they target your new target after you switch.");
		
		e.addField("Goal:", "Get someone to target you in the night and detonate.");
	});

	register_role(["sunshroom", "459"], "Plant", "Sunshroom", {subCat: "Production"}, (e) =>
	{
		e.setDescription("Post 459");

		e.addField("Alignment", "Plant Production", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce half of a sun every night.\n- Starting night 4, produce 3 suns every night.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["chomper", "460"], "Plant", "Chomper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 460");

		e.addField("Alignment", "Plant Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce a sun every night.\n- Eat a person every night, dealing a basic Attack.\n- Eat a person every night, dealing a Powerful attack, then spit the body out and hit another person with It, dealing a basic Attack. Costs 3 sun.\n- Devour a person, dealing a Powerful attack and wiping them of their last will and role. Costs 3 sun.");

		e.addField("Attributes:", "- For an additional 2 sun, you may devour 2 people instead of 1.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["narrator", "461"], "Neutral", "Narrator", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 461");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You must use correct grammar, and italicize everything you say. You may not communicate otherwise. This carries over in your private channel as well. You must also always speak in the third person.\n- You must occasionally narrate whatever people say in day chat as if they were characters in a story. Some examples of things to narrate might be accusations, deductions or revelations, but anything is fair game as long as it makes sense.\n- Failure to follow these attributes causes your immediate death.\n- Example\n>Player A: I think Player B is pretty suspicious not gonna lie.\n>Player B: uwot m8 whatd ya say to me feller\n>Narrator: *The air tensed as Player A shot their accusation towards Player B. Was Player A correct? How would Player B respond? Only time could tell.*");
		
		e.addField("Goal:", "Narrate things.");
	});

	register_role(["pacifist", "462"], "Neutral", "Pacifist", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 462");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prevent kills during the night.");

		e.addField("Attributes:", "- Twice per game, you can decide to prevent all kills that night.\nEveryone will be told that a Pacifist made them put down their weapons if they tried to attack that night.\nThe first time you would be lynched, you will not die, because the town feels bad lynching someone so peaceful.\nThe day will end after the failed lynch.");
		
		e.addField("Goal:", "Prevent 5 kills (preventing your own lynch counts as a prevented kill).");
	});

	register_role(["fumeshroom", "463"], "Plant", "Fumeshroom", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 463");

		e.addField("Alignment", "Plant Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce a sun every night.\n- Shoot your fume of spores at someone's house, dealing a Basic Attack. Costs 1 sun.\n- Shoot your fume of spores at someone's house, dealing a Powerful Rampage Attack. Costs 4 sun.\n- Shoot your fume of spores at 4 people, dealing Powerful Attack. Costs  5 sun.");

		e.addField("Attributes:", "- Your Basic Attack and Powerful Rampage Attack bypass all immunities such as healing and basic defense immunity. However, your Basic Attack wont go through Powerful and higher defense, and your Powerful Rampage Attack wont go through Invincible and higher defense. This does not apply to the Powerful attack you deal to 4 people.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["rich_man", "richman", "464"], "Neutral", "Rich Man", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 464");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Purchase people's services to have them work for you.");

		e.addField("Attributes:", "- You have one-time Basic Defense.\n- You start with 100 gold.\n- You can buy people's services to passively make money. If they die, they will no longer make money unless they can act while dead.\n- You will learn the role of the people whose services you buy.\n- You can control someone whose services you have purchased. You will receive all feedback they get from their action. \n- You cannot control someone two times in a row.\n- Twice per game, you can double the money you make at night. This is done at the beginning of the night, and all money you made that night will be doubled immediately. This can not be used twice in the same night.");

		e.addField("Prices:", "Killing alignments (TK, UO, RK, CE, MK, NK, NCs that can kill, etc.): 100 gold to buy, 50 gold per night.\nProtective alignments (TP, RP, Neutrals that protect, etc.): 50 gold to buy, 20 gold per night.\nSupport alignments (TS, MS, MD, RS, etc.): 25 gold to buy, 10 gold per night\nOther alignments: (NB, NC's that can't kill, TI, etc.): 10 gold to buy, 5 gold per night.");
		
		e.addField("Goal:", "Have the good faction lose (this can win while dead).");
	});

	register_role(["coffee_bean", "coffeebean", "coffee", "465"], "Plant", "Coffee Bean", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 465");

		e.addField("Alignment", "Plant Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Wake up a target at night. Costs 2 sun. If you do not use this, you will instead produce 1 sun.");

		e.addField("Attributes:", "- The target will receive a buff depending on their alignment for the following night, and they will know this.\nKilling: Attack will rise one tier.\nProduction: Double the sun production.\nProtection: If the role successfully protects someone, the attacker will be dealt a Powerful attack.\nSupport: Their ability may be used for half the sun.\n(if another alignment is added, accent should dm me)");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["imitater", "466"], "Plant", "Imitater", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 466");

		e.addField("Alignment", "Unique Plant Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce a sun or imitate a plant.");

		e.addField("Attributes:", "- You can imitate any role from the plant faction, regardless of if it is in the game. This costs 1 sun.\n- You may do their cheapest action for free, any other action will cost the usual amount.\n- After the night, revert back to Imitater.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["wallnut", "467"], "Plant", "Wallnut", {subCat: "Protection"}, (e) =>
	{
		e.setDescription("Post 467");

		e.addField("Alignment", "Plant Protection", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce one sun every night.\n- Give yourself Powerful Defense for tonight. One free charge, then It costs 3 suns.\n- Give all plant roles excluding yourself Powerful Defense for the night. 4 suns.\n- Stand guard at a Plant member's house. If they get attacked this night, their death Is delayed for 2 rounds. 3 suns.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["revealer", "468"], "Town", "Revealer", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 468");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reveal someone's role publicly.");

		e.addField("Attributes:", "- Your visits are astral.\n- Your target's name and role will be revealed to the whole town.\n- Once per game you can target 2 people instead of 1.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["cheerleader", "469"], "Town", "Cheerleader", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 469");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cheer someone on each day, allowing them to use their night abilities twice the following night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["reanimator", "470"], "Neutral", "Reanimator", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 470");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Make corpses into ghouls, and make them do your bidding.");

		e.addField("Attributes:", "- One-Time Invincible Defense\n- At night, choose someone to secretly raise from the dead, turning them into a ghoul. You cannot turn factional evils or neutrals that have already won into a ghoul.\n- Ghouls are told who you are, and they now win with you.\n- Ghouls can speak with you in a factional chat.\n- Ghouls can use their action, but cannot vote/speak to everyone.\n- Once per game, you can reveal yourself as the Reanimator. All ghouls will be revived, and they can now vote/speak with other players. Anyone you turn into a ghoul after revealing will automatically be revived. People who were revived by you and died cannot be revived again, but they will still win with you.\n- You can't have more than 3 ghouls alive/pseudo-alive at any time.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["mercenary", "471"], "Neutral", "Mercenary", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 471\n*You are welcome for the protectionary services. That will be 7 brilders.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stand guard outside your contract's house (4 use, carries across all contracts).\n- Contract someone else during the day.");

		e.addField("Attributes:", "- Your contract is [player].\n- Each night, you may choose to stand guard outside your contract's house. All abilities targeting your contract will fail. Your target will not be notified if you do this.\n- You may stand guard outside your contract's house four times.\n- If your contract dies, you may choose another player during the day to offer a contract to. They may choose to accept or decline your offer. If they accept, they will become your new contract, but if they decline, you must wait another day before offering another contract.\n- If your second contract dies, you will commit suicide out of shame.\n- You may not be contracted to another Mercenary or a role whose goal/abilities revolve around its death (e.g. Bodyguard, Jester, Moody).");
		
		e.addField("Goal:", "Make sure your contract survives until the end of the game.");
	});

	register_role(["tallnut", "472"], "Plant", "Tallnut", {subCat: "Protection"}, (e) =>
	{
		e.setDescription("Post 472");

		e.addField("Alignment", "Plant Protection", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce one sun every night.\n- Grant yourself Powerful Defense for tonight. One free charge, then costs 3 suns.\n- Grant you and another Plant Powerful Defense for the night. 3 suns.\n- Grant 2 Plant Roles Invincible Defense for the night. 4 suns.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["stoneweaver", "473"], "Town", "Stoneweaver", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 473");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect someone at night and sharpen your rocks.");

		e.addField("Attributes:", "- Protecting someone will give them powerful defense.\n- If you make your stones sharp, you will deal a basic attack to all visitors. This has a 1 night cooldown.\n- You may protect yourself at night.\n- You may only place sharp stones at your house once per game.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["semaphore", "sema", "474"], "Neutral", "Semaphore", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 474");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a target, and an image of your choice. The host will post that image in the target's player channel without any context.");

		e.addField("Attributes:", "- You may only communicate via images, even in your own private channel.\n- Your images must not have any text on them. >:(");
		
		e.addField("Goal:", "Make sure you successfully have a conversation with at least two people.");
	});

	register_role(["hypno_shroom", "hypnoshroom", "hypno", "475"], "Plant", "Hypno Shroom", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 475");

		e.addField("Alignment", "Plant Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce one sun every night.\n- Roleblock one person tonight. Costs 1 sun.\n- Redirect one person into another. Costs 2 sun.\n- Transport 2 people. Costs 2 sun.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["chemist", "476"], "Neutral", "Chemist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 476");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Use 2 potions at night, but only use the one that benefits you the most.");

		e.addField("Attributes:", "- You have one-time Basic Defense.\n- Your potions can heal and they can kill.\n- You will choose 2 actions. Whichever one is best for you will be the one you do.\n- Order of what is best: You living > an evil being saved > a Town member dying > nothing happening > a Town member being saved > an evil dying (worst outcome)");
		
		e.addField("Goal:", "Have the good faction lose (this can win while dead).");
	});

	register_role(["suplex", "477"], "Town", "Suplex", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 477");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Throw one player at another player, causing any abilities targeted toward either of them to actually target both of them.");

		e.addField("Attributes:", "- You may select yourself as one of the two targets.\n- Both targets must be different players.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["synesthesia", "syne", "478"], "Coven", "Synesthesia", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 478\n*I see, smell, feel, hear, and taste dead people. All at once.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player and a sense to perceive them with.");

		e.addField("Attributes:", "- You will perform an action to your target based on the sense that you chose as well as one other random sense.\n- Your sense of sight will reveal your target's faction.\n- Your sense of smell will reveal how many charges of any limited-use abilities your target has remaining. If they do not have a limited-use ability, you will be notified about this.\n- Your sense of touch will reveal your target's attack and defense values.\n- Your sense of hearing will reveal if your target has any night chats and the last message sent in all of them if they do have any night chats.\n- Your sense of taste will reveal if your target has any non-death immunities, such as roleblock or redirection immunity.\n- With the Necronomicon, you unlock the sixth sense, which deals an Astral Basic attack to your target.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["phoenix", "pheonix", "479"], "Neutral", "Phoenix", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 479");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scorch someone and come back from the dead.");

		e.addField("Attributes:", "- When you die, you turn to ashes.\n- After the next phase, come back from the ashes. You can not be killed/voted the phase you come back.\n- If the game would end before you revive, you do not revive.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["larcenist", "480"], "Neutral", "Larcenist", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 480");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Pick a player every night.");

		e.addField("Attributes:", "- If there Is a scenario in which all living players would win (like only Town left alive and all evils dead), you will instead steal the win.\n- The player you picked every night will not count towards the player count. For example, if theres only town roles left except for 1 mafia role and the Larcenist, and the Larcenist picks the mafia role, the next day, town will win even if the mafia role was still alive. (in this situation you would however steal the win)");
		
		e.addField("Goal:", "Survive until a faction wins and steal the win.");
	});

	register_role(["vengeful_spirit", "vengefulspirit", "481"], "Neutral", "Vengeful Spirit", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 481");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Kill someone at night.");

		e.addField("Attributes:", "- Once you die, you will be able to deal 2 unstoppable attacks the next night.\n- If you are dead, the game can not end until you do your attack from the grave.");
		
		e.addField("Goal:", "Kill all who oppose you, or have nobody remain if you are dead.");
	});

	register_role(["vampvestigator", "vampvest", "vv", "482"], "Vampire", "Vampvestigator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 482");

		e.addField("Alignment", "Unique Vampire Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate people at night.");

		e.addField("Attributes:", "- You can check someone every night, learning their exact role.\n- You will not be fooled by frames or disguises.");
		
		e.addField("Goal:", factions.Vampire.goal);
	});

	register_role(["totally_not_a_vampire", "totallynotavampire", "totally", "483"], "Neutral", "\"totally not a vampire\"", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 483");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert another player into \"totally not a vampire\"");

		e.addField("Attributes:", "- Only the oldest living \"totally not a vampire\" can convert.");
		
		e.addField("Goal:", "Kill or convert all who would oppose the Vampires.");
	});

	register_role(["vampire_clone", "vampireclone", "484"], "Neutral", "Vampire Clone", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 484");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Bite someone at night, converting them to another faction of your choice. This will only functionally affect their goal.");

		e.addField("Attributes:", "- You may not target the same person more than once.\n- If you convert someone to a faction with no other members, they gain Basic defense.\n- If you attempt to convert someone to a faction they're already in, you will suicide from vampire guilt.\n- You can't convert people to the Neutral faction.\n- Conversion immune.");
		
		e.addField("Goal:", "Convert four different people's factions.");
	});

	register_role(["dicer", "485"], "Neutral", "Dicer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 485");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a random number of players each night.");

		e.addField("Attributes:", "- Each day, you roll a d6, and you're able to attack a number of players the next night equal to the result.");
		
		e.addField("Goal:", "Eliminate all who would oppose you.");
	});

	register_role(["judge", "486"], "Neutral", "Judge", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 486");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Judge two players at night.");

		e.addField("Attributes:", "- You will execute your targets if they are each part of a different group.\n- Your first group includes all Town roles and all Neutral Benign roles.\n- Your second group includes all non-Town and all non-Neutral Benign roles.\n- You ignore framing of any kind.\n- You may only judge players three times.\n- You cannot judge any players until night three.\n- You cannot judge players if you attempted to do so the previous night.\n- If one of your targets is protected when you successfully find two players to kill, you will not kill the other target.\n- When you achieve your goal, you will no longer be able to kill anyone, and you will no longer have Basic defense.\n- Control and Detection Immunity");
		
		e.addField("Goal:", "Successfully execute two players.");
	});

	register_role(["feedback", "487"], "Town", "Feedback", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 487");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check people at night to learn feedback about their role.");

		e.addField("Attributes:", "- The host will give their honest opinion of your target's role.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["spider_dance", "spiderdance", "spider", "dance", "sd", "488"], "Neutral", "Spider Dance", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 488");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Visit someone at night, giving them a donut. It's the same as Pinata's candy. You can eat it during the night to be healed and purged. However, your target will be in debt.");

		e.addField("Attributes:", "- Players who are in debt will sell a donut to everyone they visit at night. Those players will gain a donut but they'll be in debt too.\n- Every player can only get 1 donut.\n- You have a spider army who will protect you from the first Basic attack.");
		
		e.addField("Goal:", "Force everyone other than you to be in debt, so you can save all of the spiders!");
	});

	register_role(["trauma_patient", "traumapatient", "patient", "489"], "Town", "Trauma Patient", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 489");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Remember who you were at night.");

		e.addField("Attributes:", "- You can only remember the role of a dead Town member.\n- You cannot become a unique or Town Killing role.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["hot_dog_vendor", "hotdogvendor", "hot_dog", "hotdog", "490"], "Neutral", "Hot Dog Vendor", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 490\n*No, don't call the Better Business Bureau. They don't exist here.*");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Go on sales alert at night (4 use). While on sales alert, you gain Basic defense, and you will sell everyone that visits you a terrible, sub-standard hot dog.");

		e.addField("Attributes:", "- Any player who buys one of your hot dogs will become sick from the hot dog they ate. They will be unable to speak the following day and must stay home the following night preventing them from performing any night abilities.\n- If you use up all of your sales alerts without achieving your goal, you will commit suicide out of shame.");
		
		e.addField("Goal:", "Make at least three sales.");
	});

	register_role(["unstable", "491"], "Neutral", "The Unstable", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 491");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the start of every day and every night, you will be given a new random role, copying all of its abilities and attributes.\n- Whenever you copy another role, you'll lose the abilities and attributes of whichever role you previously copied.\n- If you copy an evil role, you won't be allowed into the faction chat.");
		
		e.addField("Goal:", "Complete the objective of whichever role you're currently copying. Although you will shift through many different goals, you only need to complete a single goal at the time that you have said goal, and you automatically win.");
	});

	register_role(["non_binary", "non-binary", "nonbinary", "nb", "492"], "Town", "Non Binary", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 492");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make a LGBTQ+ interview at someone's house at night, each night. You will learn all visitors' pronouns, but not who visited.\n- Guess a role. If its in the game, you will learn the pronouns of the player who has it.");

		e.addField("Attributes:", "- This role has the same abbreviation as Neutral (Benign)");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["occultist", "493"], "Town", "Occultist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 493\n*I'm not sure what these symbols mean...*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player at night to add to your spirit list.\n- Send a message to the Town in death (1 use).");

		e.addField("Attributes:", "- Players added to your spirit list will be able to post in the day chat on the day after they died. They will not have access to dead chat until the day is over. This does not apply to players that were lynched.\n- If you die, your spirit list will be wiped.\n- While dead, you may send the host a message (500-character limit) at night to announce to the Town upon the start of the next day.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mystery", "??", "494"], "Other", "Mystery", (e) =>
	{
		e.setDescription("Post 494");

		e.addField("Alignment", "??", true);
		e.addField("Attack", "??", true);
		e.addField("Defense", "??", true);

		e.addField("Abilities:", "- ??");

		e.addField("Attributes:", "- ??");
		
		e.addField("Goal:", "??");
	});

	register_role(["corruption", "495"], "Neutral", "The Corruption", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 495");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Corrupt someone during the day and kill at night.");

		e.addField("Attributes:", "The more living people who are corrupted, the stronger you are.\n- You can corrupt Day 1.\n- If a corrupted player dies during the night, your action is processed as if they were living unless they die before the night ends.\n> 0 Corrupted: Basic Attack/Defense.\n> 1 Corrupted: Powerful Attack + Roleblock Immunity.\n> 2 Corrupted: Powerful Rampage Attack + Redirect Immunity.\n> 3 Corrupted: People who visit corrupted players are corrupted + Control Immunity.\n> 4 Corrupted: Unstoppable attack and Powerful defense.");
		
		e.addField("Goal:", "Kill all who oppose the Corruption **or** see every living player corrupted (you can die once you see all living players corrupted).");
	});

	register_role("496", "Other", "Silksong Fan", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 496\nPretty sure this one's goal is invalid.");
	});

	register_role(["double", "497"], "Neutral", "Double", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 497");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone at night.");

		e.addField("Attributes:", "- You cannot shoot someone on night one.\n- When you kill your target, you will clean them and copy their role and conditions exactly, including how many shots of their abilities they have if they are limited.\n- If another Double tries to kill your target on the same night, you will both fail.\n- If your kill fails, or you die before or on the night you shoot a target, you will commit suicide and lose.");
		
		e.addField("Goal:", "Successfully become another role, then complete that role’s goal.");
	});

	register_role(["rolehopper", "498"], "Any", "Rolehopper", {anyExCat: ["Neutral"]}, (e) =>
	{
		e.setDescription("Post 498\n*Taking things day by day.*");

		e.addField("Alignment", "[Random Faction] Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Become a new role each day.");

		e.addField("Attributes:", "- At the start of each day, your role will be changed to that of a different GIM role of your faction. You will gain the abilities and attributes of said role as well as keeping this role's abilities and attributes.\n- You can only become a member of a faction in the game.");
		
		e.addField("Goal:", "Goal of faction it rolls.");
	});

	register_role(["amber_heards_lawyer", "amberheardslawyer", "amber_heard", "amberheard", "lawyer", "499"], "Neutral", "Amber Heard's Lawyer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 499");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Hearsay a player at night. If they have the most votes at the end of the day, the first person to have voted them and the person that your target voted will be dealt a Powerful Attack the following night.");

		e.addField("Attributes:", "- As long as you received no \"initial\" votes during the previous day (meaning votes that aren't changed from a different target), you actually have Powerful Defense and can hearsay two players instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["stealing_slot_500", "stealingslot500", "lmao", "500"], "Mafia", "I'm Stealing Slot 500 LMAO", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 500");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Copy: Target a player, and steal one of their abilities at random. They will permanently lose it, and it will be permanently added to your list.");

		e.addField("Attributes:", "- If you steal their last ability, you have the option to reroll their role into something from the same faction and category.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});
};
