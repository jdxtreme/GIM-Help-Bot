//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["blue_latex", "bluelatex", "bl", "2901"], "Latex", "Blue Latex", {subCat: "Chromatic"}, (e) =>
	{
		e.setDescription("Post 2901\n*\"Dr. K's personal creation. We've found that it's the calmest of all the creatures. However, it seems to have a rather particular interest in both hiding in small spaces, and peaches. Not sure why. It seems to have a strong sense of justice, though. If it spots someone attacking someone else, it'll try and transfur them as punishment.\" -Dr.████████, MIT.*");

		e.addField("Alignment", "Latex Chromatic", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, visit another player. If they attack someone, transfur them. Doesn't matter if the attack succeeded or not.");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["scarlet_crystal_wolf", "scarletcrystalwolf", "crystal_wolf", "crystalwolf", "scw", "2902"], "Latex", "Scarlet Crystal Wolf", {subCat: "Black"}, (e) =>
	{
		e.setDescription("Post 2902\n*\"[EXPLICIT] thinks he can make some sharks to sock it to me and get away with it, huh? Well, let's fight fire with fire, [EXPLICIT].\" -Dr.███████, MIT.*");

		e.addField("Alignment", "Latex Black", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, visit another latex. One random visitor will be transfured.");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["hypno_cat", "hypnocat", "cat", "hc", "2903"], "Latex", "Hypno Cat", {subCat: "Black"}, (e) =>
	{
		e.setDescription("Post 2903\n*\"Great. They can control minds now. Try breaking out of that while you become one of them.\" -Dr.█████, MIT.*");

		e.addField("Alignment", "Latex Black", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, visit another player, and give them a false message. If the host determines that target believes the message is true, they get transfured the following night.");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["latex_bee", "latexbee", "bee", "lb", "2904"], "Latex", "Latex Bee", {subCat: "Chromatic"}, (e) =>
	{
		e.setDescription("Post 2904\n*\"The studies have shown that Latexes made to resemble animals with coloration in mind tend to have a likeness towards said animals. Hence why we made this thing to keep track of the bees in the greenhouse.\" -Dr.█████, MIT.*");

		e.addField("Alignment", "Latex Black", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to sting a player, preventing them from using an ability the following night.\n- Use 2 bees to reduce a player's willpower by 10%\n- Use 3 bees to transfur another player"); 

		e.addField("Attributes:", "You will earn 1 bee every night. You can use 2 abilities per night.");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["mayorthatstabbedtheotherguy28times", "mtstog28t", "mtstogtet", "mayorthatstabbedtheotherguy", "mayorthatstabbed28times", "mayor28", "mayor", "2206u", "2905"], "Unseen", "Mayor That Stabbed The Other Guy 28 Times", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2905\nConverted from: Mayor But With 28 Stab Wounds (2206)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, reveal yourself as a role that can reveal themselves. You may choose which role this is.\n- Stab someone during the night.");

		e.addField("Attributes:", "- For the rest of the game, your vote counts as 3, a Doctor cannot heal you, and you cannot whisper or be whispered to.\n- Your attack will appear to be that of a random role that uses knives.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["crimedoer", "evildoer", "criminal", "cd", "2906"], "Neutral", "Crime Doer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2906\n*I love crime!*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal someone’s ability at night.\n- Deposit your stolen abilities at the bank.");

		e.addField("Attributes:", "- If this role spawns, The Bank (2907) must also spawn.\n- Your target will have their ability stolen, roleblocking them until they get it back.\n- If your target stays home, they will be notified that they are being robbed and your ability will fail and will learn who you are.\n- You cannot steal from someone more than once.\n- If you are attacked, your attacker gets all the abilities you currently have stolen.\n- Attempting to deposit more than 3 abilities to the bank will kill you with an overkill attack that bypasses protection.\n- A robbed player may still visit.\n- If a player that you robbed visits you, they get their ability back.\n- You can’t be jailed by anything.\n- You may use your ability while dead, but it gains a 2 night cooldown‎.");

		e.addField("Goal:", "Have 3 unique abilities in the bank by the end of the game.");
	});

	register_role(["thebank", "bank", "tb", "2907"], "Neutral", "The Bank", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2907\n*Please pay your debts*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Embezzle and use a deposited ability. (3 uses)");

		e.addField("Attributes:", "- This role cannot spawn without Crime Doer (2906).\n- This is not a playable role. The host must control this role and spawn a player named “THE BANK”.\n- You are a valid target.\n- You cannot be hung.\n- You cannot speak in day chat, whisper/be whispered to, or vote.\n- You cannot be roleblocked.\n- If the Crime Doer attempts to deposit more than 3 abilities to you, attack them with an Overkill attack.\n- If the host loses as this role, their spot in the queue is removed and is able to be taken. They may re-fill this spot.\n- If any bank related roles other than Crime Doer spawn, they may reside in the bank once for an Overprotective defense, while also roleblocking them.");

		e.addField("Goal:", "Kill a player, then protect another successfully.");
	});

	register_role(["survivor", "surv", "vietnamflashbacks", "2908"], "Neutral", "Survivor", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2908\n*A war veteran who failed and ran away.*\nDuwiiton made this role on 8/24/2019 and he thinks it's still really funny and needlessly complicated.");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Attributes:", "- At night, you will have nightmares.\n- You have 4 vests which you cannot use.\n- If you successfully go through a nightmare, you will gain powerful defense for the night and use a vest.\n- You regenerate a vest every full moon, but only if you didn't fail the nightmare the night prior.\n- If you die in a nightmare, you will lose a vest. If you die 3 times from the nightmare, you will die in the main game from guilt.\n- During a nightmare, your scene will cut to 13 \"players\" (controlled by the host)\n- There will be 6 \"players\" on your side (aside from you) and 7 on the enemy. You will have the \"Commander\" Role card, seen below.");

		e.addField("Attributes (cont.):", "- The players all have the name \"Ally\" or \"Enemy\" with a number at the end. Each one will say something in your night chat. If there is a Jailor or Medium which is Seancing you, they can see all of your night messages from the nightmare.\n- All \"Players\" will say something. (The host copy and pastes one of these messages)\n- The voicelines will all pertain to who they are attacking.\n- If you do not attack anyone, you will fail the nightmare.\n- If you fail to attack the right person, you will fail the nightmare. You can find the right person to attack by looking in chat.\n- Your allies will all say who they will attack. You must attack the enemy who isn't being attacked.\n- Messages and Commander Rolecard: https://discord.com/channels/970041597590929519/1047643651842506802");

		e.addField("Goal:", "Live to see the end of the game.");
	});

	register_role(["gamblingmayor", "gamblemayor", "gm", "mayor", "2909"], "Town", "Gambling Mayor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2909\n*I have come to make an announcement, we lost all your tax money on blackjack*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, reveal yourself as the Gambling Mayor.\n- During the day, learn what is your current amount of votes. (1 use)\n- During the day, make a low risk gamble, the next time your votes get rerolled they will be between 1 to 5. (1 use)");

		e.addField("Attributes:", "- For the rest of the game, Your amount of votes will be randomized, it will be chosen from -2 to 7, it is rerolled at the end of every day.\n- You do not know how many votes you have.\n- If you have -1 or -2 votes, voting a player will secretly reduce the votes on them.\n- You have crippling debt.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["{v}indicator", "vindicator", "indicator", "2910"], "Neutral", "{V}indicator", {subCat: "{Killing/}Benign", spawnSubCat: ["Killing", "Benign"]}, (e) =>
	{
		e.setDescription("Post 2910,*\"{I'll cleave }you{ in half}!\"*");

		e.addField("Alignment", "Neutral {Killing/}Benign", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, target someone {to Cleave, placing the first six sentences of their Role into curly braces}.\n{- At night, once per game, you may remove the text in brackets of yourself and all players you Cleaved. If you cleave away their defense text, they are dealt an unstoppable attack. If this ability is Cleaved, the attack to all Cleaved targets does not go through.}");

		e.addField("Goal:", "Target 10 players {who have died due to being Cleaved by you}.");
	});

	register_role(["nowsyourchancetobea", "bigshot", "big_shot", "spamton", "bs", "2911"], "Neutral", "BIG SHOT", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2911\n*NOW'S YOUR CHANCE TO BE A*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Give someone a GREAT DEA{L} TH{EY} {WILL LOVE}! Basic{ally, they will also roleblock whoever they visit. If they are} attack{ed, you will protect} the target {with Powerful defense}. If they visited {no one, then} you will break {the deal and roleblock them instead, and you won't give them} their protective effects that night. You may use this ability {as many times as you want} once {the game starts}.\n- {Observe and} take {notes about} someone's SOUL. You will {learn who the target was visited by tonight and} copy {it down on your will. You will also learn if} the target first {used an} ability {this night and who their target was}.\n- **Cleave** the text in braces during the day. Next night, you can use two abilities and your rolecard will act like it doesn't have the text in braces until the end of the next day. {You may only use this ability once.}");

		e.addField("Attributes:", "- You Can't! Be! Blocked! so you're immune to roleblock and chat impairment.\n- You are a {G}rea{t Salesman! with} Per{fect Sales Record}! so everyone who visits you on a full moon night will be {protected if they get} attacked.\n- You have Basic defense {until the first time you're attacked}.");

		e.addField("Goal:", "Live to see the Town {win and see the evils} lose the game.");
	});

	register_role(["punter", "2912"], "Town", "Punter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2912\n*Oh my god, did I miss lethal?*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- [Kicker—Permanently reduce your defense by a stage] Attack a player each night. You may pay the [Kicker cost] to kick this ability. If this ability was kicked, reduce your target's defense by a stage tonight.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tarmogoyf", "tar", "2913"], "Neutral", "Tarmogoyf", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2913\n*(The card types are artifact, creature, enchantment, instant, land, planeswalker, sorcery, and tribal.)*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "\*", true);
		e.addField("Defense", "\*+1", true);

		e.addField("Abilities:", "- Attack a player each night.");

		e.addField("Attributes:", "- Your attack value is equal to the number of subalignments among roles in the graveyard, and your defense value is equal to that number plus one.\n- After attacks resolve at the end of each night, state-based effects apply. If you would have survived an attack had you now been attacked by that attack due to the number of subalignments among roles in the graveyard plus one, not counting your own, becoming higher than the tier of that attack, you are immediately revived as if you never died and no one is informed of your death having happened, and if a player you attacked who survived would not have survived if you had now attacked them due to the numebr of subalignments among roles in the graveyard becoming higher than the defense value that that player had when you attacked them, that player dies as if you had killed them. Then, repeat this process as many times as necessary until repeating it has no effect on who lives and who dies.\n- You can attack two players instead each full moon.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["evoker", "2914"], "Neutral", "Evoker", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2914");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Evoke** is an ability the evoker may use once per game during the night phase on any alive target they wish. Using this ability causes the target to commit suicide via a modkill, but after their death, the target is able to - for that night only - use one of their prior abilities on anyone regardless of any conditions required to do so.\n- The evoker may choose to **summon Evocation Fangs** on any target during the night phase as an ability. The target is dealt a basic attack.");

		e.addField("Abilities (cont.):", "- The Evoker can cause a {dead }player to {revive as a vex for a single night once per game. This ability is chosen by the }evoke{r during} th{e day and may }o{nly be }u{sed on dead players. The player is brou}ght{ back to life for the duration of the next night pha}s{e.} {The vex loses the abilities and attributes }of t{hei}r{ original role and may target someone with an }u{nstoppable attack. The evoker and vex establish a night chat, and ideas on who to targ}e{t} {may be }p{ropos}e{d by the Evoker or the Vex, }a{nd both must }c{hoos}e{the same target by the end} o{f the }n{ight. If one of the players de}c{id}e{s} {not to in}p{ut, th}e{ othe}r {player's decision is chosen. If neither can agree on a target or neither choose a target, nothing happens and the vex returns to the land of the dead at the end of the }night.");

		e.addField("Attributes:", "- The Evoker starts with the **Totem of Undying** attribute, which can only be triggered once per game. In any scenario where the evoker would die, the Evoker gains total death immunity as long as feelings of true peace exist in the town (unless the attack is from the player modkilling themselves, in which case the player dies guaranteed.)\n- The Evoker has no natural attack {and relies on abilities.\n- The Evoker has no defense and relies on abilities}.");

		e.addField("The Evoker's Goal:", "Live to see {town lose the game, ensuring that }true peace {never }spread{s} amongst all alive players.");
	});

	register_role(["stones", "stone", "ps", "2915"], "Town", "Stones", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2915\n*Guys, I balanced it! It's an actual legal role, guys!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Throw a stone at someone’s window. (2 uses per night)");

		e.addField("Attributes:", "- If your target is non-evil, they will be alerted that you’re Stones (2915), and therefore innocent.\n- If your target is evil, the glass on their window breaks, permanently reducing their defense by 1. They are not told who has thrown the stone, as you run away before being seen.\n- Defense lowering is stackable.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["personwhomurdersthreeormorepersonswiththemurderstakingplaceovermorethanamonthandincludingasignificantperiodoftimebetweenthem", "pwmtompwtmtpomtamaiaspotbt", "serialkiller", "sk", "2916"], "Neutral", "Person Who Murders Three or More Persons, with the Murders Taking Place Over More Than a Month and Including a Significant Period of Time Between Them", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2916");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Cause a penetration or rough contact with a sharp or pointed object at close range to your target, Stabbing differs from slashing or cutting in that the motion of the object used in a stabbing generally moves perpendicular to and directly into the victim's body, rather than being drawn across it.");

		e.addField("Attributes:", "- If you are prevented from doing your night ability due to a roleblocking effect caused by another role, you will cause a penetration or rough contact with a sharp or pointed object at close range to the player who targeted you with the roleblocking effect in addition to your original target chosen at that night by you.\n- When you automatically commit a volitional act or omission that causes the death of the player who targeted you with the roleblocking effect, the night action that caused your night action to fail (commonly know as Roleblock) will not stop you from doing your designated action at night.");

		e.addField("Attributes (cont.):", "- Roles with the night ability of blocking night actions that designate you as their target will have their last will that is shown to the Town upon their death covered in body fluid in the circulatory system of humans and other vertebrates that delivers necessary substances such as nutrients and oxygen to the cells, and transports metabolic waste products away from those same cells, making it unable to be read, thus giving the town the following message: **Their last will was covered in blood and is unreadable**.\n- At night, you may choose to not commit homicide through the act of causing a penetration or rough contact with a sharp or pointed object to players who targeted you with a roleblocking effect at night, instead of applying all your other attributes to them.");

		e.addField("Goal:", "Ensure everyone that can stop the game (excluding you) from ending is dead.");
	});

	register_role(["puro", "2917"], "Town", "Puro", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2917\n*\"This one's always been weird. Often on its own and hunting knowledge. Weird. Although on a test it performed that's normally used to get kids here, it passed. Strange, perhaps we could look into him further.\" -Dr.█████, MIT.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the start of the game, receive the abilities and attributes of a Latex. You cannot receive Yuin's card. You cannot transfur anyone. Abilities that requires a transfur are unlocked immediately.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["embodiment_of_neutral_killings", "embodimentofneutralkillings", "embodimentofneutralkilling", "embodimentofnks", "eonk", "enk", "2918"], "Neutral", "Embodiment of Neutral Killings", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2918");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, choose a player{<[. There's various ways} to {have them dead, and one of the most} basic {ways to} attack {them is to} stab them. {Some people are even able> to maul them, <which is especially unique, as it's something> dealing a rampage <attack, which is quite a> powerful attack, <and it's quite visible on full moons. Some people just go] to [their house and] douse them, [which isn't really as strong. However, you're incompetent and do none of those.]>}\n- {<[Also, some people get annoyed when people try to stop them from} attack{ing people, these are what we} all {call} roleblockers, {but you don't do that. Oh yeah, some people are great with fire! They really know how to> ignite all <the things they need. I think they're the ones who> doused <people, but sucks for their> targets. <It's a big> deal< that we're see>ing, <and it's> an unstoppable <threat, some people really don't like it to be used as an> attack, <but what can you really do?>]}");

		e.addField("Abilities (cont.):", "- **Cleave** during the day, removing the text in braces.- **Chop** during the day, removing the text in chevrons.\n- **Carve** during the day, removing the text in brackets.");

		e.addField("Attributes:", "- You have infinite **Cleaves**, **Chops**, and **Carves**.\n- You may {not} use both night abilities at the same time.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["electricutioner", "electricexecutioner", "ele", "eleexe", "elexe", "2919"], "Neutral", "Electricutioner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2919\n*My metal fence is hooked up to a generator to keep visitors out.");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Zap a player at night.");

		e.addField("Attributes:", "- You will receive a target at the beginning of the game. This player must have Basic defense.\n- Zapping a player will redirect them to your target. This goes through redirection immunity.\n- You will learn the exact role of your target.\n- You cannot zap your target directly.\n- You have an electric fence that will stop all visitors, unless they have powerful defense or higher. Protective roles do not count to this defense.\n- If your target visits you, they lose their defense. You will learn that they visited you.\n- If your target dies by anything but your zapped target, you reroll into any other electricity-bases role and gain all abilities and attributes of said role, including wincon.\n- If you win, you may deal an Unstoppable attack to 2 people. You may choose to attack both in one night, or one person each night.");

		e.addField("Goal:", "Control an attacker into your target and have them die.");
	});

	register_role(["scorpion", "🦂", "2920"], "Kombat", "Scorpion", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2920\n*GET OVER HERE!*");

		e.addField("Alignment", "Kombat Killing", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- **Chain Grab**: Select a player to attack them with a chain. They will be dealt a basic attack.\n- **Fire Slam**: Slam a player on the ground, kausing a shockwave of fire. Their visitors will be notified that they have kaught on fire, and will die if they are not healed. (infinite uses, but just wait a night before using again)\n- **Flaming Uppercut**: Target a player at night. Their jaw will be shattered and may not speak or whisper during the day. They will then die the next night due to blood loss, unless healed. (3 uses)");

		e.addField("Attributes:", "- You are unable to be doused.\n- Attackers with no defense will be passively kaught on fire.\n- **X-RAY**: Your attacks are all upgraded to Unstoppable and nothing can be healed.");

		e.addField("Goal:", factions.Kombat.goal);
	});

	register_role(["sub_zero", "subzero", "sz", "2921"], "Kombat", "Sub Zero", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2921\n*You need to take a chill pill*");

		e.addField("Alignment", "Kombat Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- **Icy Wind**: Freeze a player, kausing them to be roleblocked indefinitely. They frozen players kannot vote, speak, whisper. They are still able to be voted for. RB immune players will lose their RB immunity if this is used on them. If you select a frozen target with this ability, they will be shattered and killed with a basic attack.\n- **Kooling Krush**: Use your ice axe to swing at a player and decapitate them. This will bypass protective roles. (Infinite uses, 1 night cooldown)\n- **Freezing Frenzy**: Select 3 targets. Deal a powerful attack to them as well as roleblocking them and their visitors. (1 use)");

		e.addField("Attributes:", "- Kannot be roleblocked, as your heart is icy kold.\n- Passively roleblock attackers with a defense level of basic.\n- **X-RAY**: Freezing Frenzy gains infinite uses, and all attacks affect one random visitor.");

		e.addField("Goal:", factions.Kombat.goal);
	});

	register_role(["johnny_cage", "johnnycage", "johnny", "jc", "2922"], "Kombat", "Johnny Cage", {subCat: "Krutch"}, (e) =>
	{
		e.setDescription("Post 2922\n*Heeere's Johnny!*");

		e.addField("Alignment", "Kombat Krutch", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- **Nut Kracker**: Select a target to shatter their testicles. If the target is a role that sends other players or NPCs to do their action for them, they no longer do. The player must do the action themself. If they aren’t one of these roles, simply roleblock them.\n- **Selfie!**: Take a selfie with your flash on. Fortunately for you, you were wearing your sunglasses. They were not so lucky. They are now blind and kannot read day chat. (1 round cooldown)\n- **Charming Smile**: Perform a Friendshipality on someone, rerolling them into a random non-existing Kombatant role. They now win with you and your team. They also will not kount to the win-preventing kondition. (1 use)");

		e.addField("Attributes:", "- If you use Selfie, the host must photoshop an image of your target’s pfp being with Johnny Cage. If they don’t, it’s konsidered a Host Error. \n- Since you’re kinda famous, one player  will learn who you are and must keep you alive at all kosts .\n- Your sunglasses make you immune to the Partisan’s effects.\n- **X-RAY**: You lose the cooldown on Selfie, and may target 2 people instead of one");

		e.addField("Goal:", factions.Kombat.goal);
	});

	register_role(["black_marketer", "blackmarketer", "marketer", "bm", "2923"], "Neutral", "Black Marketer", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2923\n*Money'll do you no good, heh. I'm looking for something more... \"personal\".*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the night, choose a target to coerce. You'll politely ask them to make a deal with you during the next day, which they may not refuse. If they do not make a choice, they will suspiciously be found missing from the game at the start of the night. 1 use. Gain another use for every three deaths in the game.");

		e.addField("Attributes:", "- Whenever someone hovers targeting you during the night, even if the person switches to another target, you'll prompt them to make a deal the next morning. They'll be informed a Black Marketer struck them up, and may make a deal with you. You'll carry some service out for them, and in return... heh.\n- Deals:\n> - You'll roleblock a player of the target's choice tonight. In return, they'll be blackmailed next morning. \n> - You'll allow the player to hear all whispers for the rest of the game. In return, they'll also permanently be delayed – their actions will take place one night later.\n> - You'll investigate a player of the target's choice. In return, they won't be able to view the day chat anymore.\n> - You'll attack a player of the target's choice. In return, they will mysteriously die of a heart attack the next morning.");

		e.addField("Attributes (cont.):", "- The night after you make a deal, even if you made multiple, you will carry out each deal. Your target learns the feedback.\n- Once a person's made a specific deal, they won't be able to make that deal with you again.\n- You're redirect and roleblock immune. If you somehow get prevented from carrying out your deals despite your immunities... that sure sucks, doesn't it? Heh.\n- If Cameraman (2351) tries to strike a deal but has already grown desperate, they may not make the investigation deal with you.\n- After completing your goal, you'll mysteriously disappear from the Town.");

		e.addField("Goal:", "Make five deals over the course of the game.");
	});

	register_role(["aerodynamic_cow", "aerodynamiccow", "aerocow", "aerodynamic", "cow", "ac", "2924"], "Neutral", "Aerodynamic Cow", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2924\n*Moo*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Teach someone about the aerodynamics of a cow, they will be so perplexed that they will be roleblocked, at the start of the next night, they will understand it and get your goal.");

		e.addField("Attributes:", "- Targeting someone will also hide all night feedback, the only feedback they get will be the attached photo.\n- Roleblock immune roles are smart enough to understand it right away, getting your goal at the start of the day.\n- Once your goal is reached, they game will end.");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1048077707143041056/download_2.jpeg");

		e.addField("Goal:", "Ensure the majority of alive players understand the aerodynamics of a cow.");
	});

	register_role(["the_boyfriends_webcomic", "theboyfriendswebcomic", "boyfriends_webcomic", "boyfriendswebcomic", "tbw", "2925"], "Neutral", "The Boyfriends Webcomic", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2925\n*Buy him pregnancy tests*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the start of the game, choose one player to be your Boywife.\n- At night, visit a player. If you visit the same person as one of your Boywives, the target is now one of your Boywives.\n- Your Boywives cannot attack you.\n- You share a chat with the Boywives. (in the polyamorous gay night chat)\n- At night, if you target a Boywife, you heal him instead (through the sloppy toppy 9000)");

		e.addField("Attributes:", "- If you have no Boywives, choose another target to become a Boywife.");

		e.addField("Goal:", "Have 4 Boywives.");
	});

	register_role(["bellbell", "bell_bell", "bell", "🔔", "2926"], "Neutral", "Bell Bell", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2926");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Bellsic", true);
		e.addField("Defense", "Bellsic", true);

		e.addField("Abellities:", "- Bell someone at night.");

		e.addField("Goal:", "Bell bell.");
	});

	register_role(["bell", "🔔", "2927"], "Neutral", "Bell", {subCat: "Bellnign", spawnSubCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2927\n*🅱️ell*");

		e.addField("Alignment", "Neutral Bellnign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Bellsic", true);

		e.addField("Attribells:", "- You are bell. If Bell Bell bells you, Bell Bell bells bell and wins.");

		e.addField("Goal:", "Survive until the end of tbe game.");
	});

	register_role(["mastermindbutlukaandrasencanbothcopeandseetherespectively", "mblarcbcasr", "mastermindbutcope", "mastermindbut", "mastermind", "2928"], "Other", "Mastermind but luka and rasen can both cope and seethe respectively", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2928\nMastermind, but it's in a new faction called Not Unseen that uses all Unseen roles except Mastermind. Also you ignore all and any conversion limits. Copium. Oh, and you can convert any night regardless of how many members you have.");
	});

	register_role(["thatsaniceroleaboveme", "thatsanicerole", "nicerole", "approved", "tanrama", "2929"], "Other", "Thats a nice role above me, Approved! ", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2929\nThat's a nice role above this message. Bionic approves!");
	});

	register_role(["conversion_blocker", "conversionblocker", "blocker", "cb", "2930"], "Town", "Conversion Blocker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2930\n*Conversion? Nah*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may visit a player each night. They may not be converted that night, and if they have already been converted, attack them.");

		e.addField("Attributes:", "- You may target yourself.\n- A role that is capable of conversion must spawn in order for this role to spawn.\n- Fuck you lunar");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["conversion_enabler", "conversionenabler", "enabler", "ce", "2930u", "2931"], "Unseen", "Conversion Enabler", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2931\nConverted from: Conversion Blocker (2930)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. Remove all and any conversion immunity that they may have.");

		e.addField("Attributes:", "- Additionally, if any of your targets ever have a conversion attempt on them, if it fails, you'll convert them yourself. If it still fails, you attack them.\n- Luka can cope, seethe, and mald");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1048077707143041056/download_2.jpeg");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["jester_two", "jestertwo", "jester2", "jest2", "j2", "2932"], "Neutral", "Jester 2", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2932\n*Now with double the jokes!*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Haunt a player who voted to lynch you the night after you’re lynched.");

		e.addField("Attributes:", "- If you do not haunt a player, you will haunt a random player who voted for you.");

		e.addField("Goal:", "Get yourself lynched by any means necessary.");
	});

	register_role(["jester_three", "jesterthree", "jester3", "jest3", "j3", "2933"], "Neutral", "Jester 3", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2933\n*Now with triple the jokes!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Haunt up to three players who voted to lynch you the night after you’re lynched. You will tell them each a really bad joke.");

		e.addField("Attributes:", "- If you do not haunt, you will haunt three random players who voted for you.");

		e.addField("Goal:", "Get yourself lynched by any means necessary.");
	});

	register_role(["scum_with_uncommon_sense", "scumwithuncommonsense", "uncommon_sense", "uncommonsense", "scum", "swus", "2934"], "Neutral", "Scum With Uncommon Sense", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2934");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- All of the ones that Townie With Common Sense (1814) has.");

		e.addField("Attributes:", "- All of the ones that Townie With Common Sense has.\n- You’re essentially an exact copy of Townie With Common Sense, but you’re evil. Also, you have no morals so their first attribute doesn’t apply.\n- Evils will not kill you because you also have the uncommon sense to just dodge.\n- You also have the uncommon sense to board up your windows if you lock your door, so the last attribute also doesn’t apply.\n- You die if you’re roleocked though, because you have some sort of disease that prevents you from staying in your home all night.");

		e.addField("Goal:", "Have evils win the game.");
	});

	register_role(["random_conversion", "randomconversion", "rc", "2935"], "Random", "Random Conversion", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2935");

		e.addField("Alignment", "Random Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert a player to a random Random role, including unique ones, and including this one.");

		e.addField("Attributes:", "- You can only have two living convertees at once.\n- If there are multiple Randoms (1255), a new one will only be promoted when both are dead.");

		e.addField("Goal:", factions.Random.goal);
	});

	register_role(["fearmonger", "fm", "2936"], "Neutral", "Fearmonger", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2936");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- At night, choose a player to Villainize. \n- Their role's name is appended to have \"... but EVIL!\" at the end.\n- Their role number has \"-Evil\" appended to the end.\n- They are framed as a Neutral Evil Fearmonger.");

		e.addField("Attributes:", "- If you Villainize an evil role, you will instead append \"... but GOOD!\" at the end of their role name.\n- They are framed as a Neutral Good Fearmonger (this subrole does not exist).\n- You have a one-use Basic autovest.");

		e.addField("Goal:", "Have 3 Villainized players die by any method, and live to see Town lose.");
	});

	register_role(["starving_artist", "starvingartist", "starving", "artist", "sa", "2711u", "2937"], "Unseen", "Starving Artist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2937\nConverted from: Fraudulent Artist (2711)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, have someone interpret your art. They may interpret it as three things:\n> - A) A dayvigi's gun.\n> - A man stressed because he's roleblocked.\n> - C) A powerful heal.");

		e.addField("Attributes:", "- You will know which one of these options your target chose.\nDepending on which item your target chose, you will apply one of the following effects:\n> - Dayvigi's Gun: You will shoot your target. The death will appear to be from a random attacking role.\n> - A man stressed because he’s roleblocked: You will roleblock your target twice in a row. Anyone that visited your target the first night will be roleblocked the second.\n> - A powerful heal: You will heal yourself and a random Unseen member.\n- If you shoot an Unseen member, somehow, the dayvigi's gun will become \"Suicidal Ideation\".\n> - Suicidal Ideation: Your target will be the only person that can be voted for the next day.");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1048354967011987557/image.png");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["one_second_role", "onesecondrole", "1secondrole", "1second", "onesecond", "1sr", "osr", "2938"], "Neutral", "1 second role", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2938\n*made this in 1 second*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lie to a player at night, only showing them that they slept peacefully.\n- Players you lie to are angered, counting votes towards you as two votes.\n- At night, you may find out all players whose rolecards have contradictory or lying statements within them, determined by the host. You will always see \"1 second role nc\" as a role which has contradictory or lying statements within it.");

		e.addField("Goal:", "Lie to a player who has read your rolecard. They must have typed your role into the bot or reacted to your rolecard in some way.");
	});

	register_role(["army_veteran", "armyveteran", "army_vet", "armyvet", "2939"], "Army", "Army Veteran", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2939");

		e.addField("Alignment", "Army Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone at night with your assault rifle. 3 Uses.");

		e.addField("Attributes:", "- If you kill another Army player who is incapable of killing, you will be executed the next night for crimes against humanity. This deals an Overkill attack and renders you unable to attack.\n- You will attack your target 30 times.");

		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["army_veterans_best_friend", "armyveteransbestfriend", "armyvetfriend", "bestfriend", "avbf", "2940"], "Army", "Army Veteran's Best Friend", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2940");

		e.addField("Alignment", "Army Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give a pep talk to the Army Veteran (2939). This grants them Overprotective defense if they were going to be executed, as they now have the will to withstand execution for their crimes in order to make you happy.");

		e.addField("Attributes:", "- May only spawn if an Army Veteran (2939) has also spawned.\n- Cope, seethe, and mald as you wish.");

		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["inside-out_umbrella", "insideout_umbrella", "inside_out_umbrella", "insideoutumbrella", "umbrella", "inside-out", "insideout", "iou", "iu", "2941"], "Town", "Inside-Out Umbrella", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2941\n*How do these work?*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defence", "None", true);

		e.addField("Abilities:", "- Give a player an inside-out umbrella each night. Anyone who visits one of your target's closest alive neighbours—the next highest and next lowest numbers on the playerlist—is redirected to your target.");

		e.addField("Attributes:", "- You may self-target because you really like it when people visit you.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["traptrix_allomerus", "traptrixallomerus", "allomerus", "ta", "2942"], "Traptrix", "Traptrix Allomerus", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2942\n*Slowly but surely, we overwhelm you*");

		e.addField("Alignment", "Traptrix Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, you may select one person. If they die tonight, they instead don't die, and their wincon changes to “Slay everybody who would oppose you”. (2 uses)");

		e.addField("Attributes:", "- The people you convert get access to the Traptrix factional chat.");

		e.addField("Goal:", factions.Traptrix.goal);
	});

	register_role(["traptrix_atrax", "traptrixatrax", "atrax", "ta", "2943"], "Traptrix", "Traptrix Atrax", {subCat: "Insect"}, (e) =>
	{
		e.setDescription("Post 2943\n*Would you like to taste our venom?*");

		e.addField("Alignment", "Traptrix Insect", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may play a any trap hole available, even if you do not have this in your hand.");

		e.addField("Attributes:", "- If this role is in game, every traptrix member is immune to conversion, roleblock, and redirection.\n- You may only use Traptrix Atrax's ability once per game.");

		e.addField("Goal:", factions.Traptrix.goal);
	});

	register_role(["traptrix_cularia", "traptrixcularia", "cularia", "tc", "2944"], "Traptrix", "Traptrix Cularia", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2944\n*Looks tasty, until you bite in.*");

		e.addField("Alignment", "Traptrix Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Every trap hole from every traptrix member may be used twice.");

		e.addField("Goal:", factions.Traptrix.goal);
	});

	register_role(["traptrix_dioanea", "traptrixdioanea", "dioanea", "td", "2945"], "Traptrix", "Traptrix Dioanea", {subCat: "Plant"}, (e) =>
	{
		e.setDescription("Post 294\n*I'll crush you like a fly*5");

		e.addField("Alignment", "Traptrix Plant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "When a Traptrix dies, you will receive the option to take over their ability. You can say yes or no.\n- You do not change roles.");

		e.addField("Goal:", factions.Traptrix.goal);
	});

	register_role(["traptrix_genlisea", "traptrixgenlisea", "genlisea", "tg", "2946"], "Traptrix", "Traptrix Genlisea", {subCat: "Plant"}, (e) =>
	{
		e.setDescription("Post 2946\n*Tremble in my grasp*");

		e.addField("Alignment", "Traptrix Plant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may play a trap hole that has already been used by any traptrix faction member. You may only do this three times.");

		e.addField("Goal:", factions.Traptrix.goal);
	});

	register_role(["raiden", "2947"], "Kombat", "Raiden", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2947\n*There are fates worse than death*");

		e.addField("Alignment", "Kombat Killing", true);
		e.addField("Attack", "Unstoppable (Basic)", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- **Smite**: Smite a player. They will be dealt an unstoppable attack instantly. (1 night cooldown)\n- **Jolt**: Resurrect a Kombat member, as well as giving them lynch immunity for the next day. They may use their ability twice, but will die at the end of the next night. (1 use)\n- **Empower**: Use your electricity to give another member unlimited power for that night. They gain all immunities, as well as having their attack upgraded to powerful. (2 uses, 1 night cooldown)\n- **Zeus’s Judgement**: If the game has lasted to day 15, then you may deal a basic attack to every non-kombatant alive. This may only be done once, and will also deal piercing damage to yourself.");

		e.addField("Attributes:", "- If this role spawns, this will be the only Kombat Killing role in the game.\n- You may not target the same player with empower twice in a row.- **X-RAY**: Zeus’s Judgement no longer kills you, and the day is reduced to day 10. You also gain infinite empower uses and lose the cooldown on Smite.");

		e.addField("Goal:", factions.Kombat.goal);
	});

	register_role(["traptrix_mantis", "traptrixmantis", "mantis", "tm", "2948"], "Traptrix", "Traptrix Mantis", {subCat: "Insect"}, (e) =>
	{
		e.setDescription("Post 2948\n*Super-natural powers? What a joke.*");

		e.addField("Alignment", "Traptrix Insect", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, you may trade out one card in your hand for another.");

		e.addField("Attributes:", "- On night three, you may choose to become any other non traptrix power.");

		e.addField("Goal:", factions.Traptrix.goal);
	});

	register_role(["traptrix_myrmello", "traptrixmyrmello", "myrmello", "tm", "2949"], "Traptrix", "Traptrix Myrmello", {subCat: "Insect"}, (e) =>
	{
		e.setDescription("Post 2949\n*Even our children can kill. Kill you, that is.*");

		e.addField("Alignment", "Traptrix Insect", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Each time you recieve a trap hole, you may change it out for a new one.");

		e.addField("Goal:", factions.Traptrix.goal);
	});

	register_role(["traptrix_nepenthis", "traptrixnepethis", "nepenthis", "tn", "2950"], "Traptrix", "Traptrix Nepenthis", {subCat: "Plant"}, (e) =>
	{
		e.setDescription("Post 2950\n*You're but an ant in-front of us*");

		e.addField("Alignment", "Traptrix Plant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- For every three trap holes played, a player recieves the traptrix win condition.\n- The player is chosen based on who the host thinks is least likely to win.\n- They gain access to factional chat. \n- They do not gain access to factional kill.");

		e.addField("Goal:", factions.Traptrix.goal);
	});
};
