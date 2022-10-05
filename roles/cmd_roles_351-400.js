module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["kindler", "351"], "Underworld", "Kindler", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 351");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player each night.");

		e.addField("Attributes:", "- If your target is roleblock immune, cannot act, or would not have acted, they will become doused. You will be notified they were doused, but not why.\n- If there are no Underworld Offensive alive, and the Apocalypse is dead, you will become the Apocalypse.\n- Roleblock Immune\n- Conversion Immune");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["jailor", "352"], "Neutral", "Jailor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 352");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Throw a grenade at someone each night, dealing a Powerful attack to them and a random one of their other visitors.\n- Phase another player out each night, negating their ability and all abilities targetting them for that night. ");

		e.addField("Attributes:", "- You have a magic box that stores the first non-attacking ability used against you, negating it. You then gain that ability.\n- You may use any number of different abilities each night.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["model", "353"], "Town", "Model", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 353\n*I say! Hey! Hey! Hey, Start Dash!!*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sing at someone's house every night, may include yourself.");

		e.addField("Attributes:", "- ALL roles that visit them will be revealed to the public the next day.\n- You may only do this twice.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wielder_of_hope_asahi", "wielderofhopeasahi", "wielder_of_hope", "wielderofhope", "asahi", "woha", "354"], "Neutral", "Wielder of Hope, Asahi", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 354\n*Hopes and dreams will lead you afar!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Target a player, if they have an Accent OC as a role, you will gain an ability depending on the role they are (see attributes), and you will create a chat with them. If you target another Accent OC after you have created a chat with the other one, you will add the second one to the already existent chat.");

		e.addField("Attributes:", "- List of Accent OCs Roles: Aiko, Akasuki, Daichi, Taizo, Aito, Airi, Kaori and Asahi.\n- You will gain:\n> Target someone, and raise their defense by one.\n- If you target __**Aiko, Dreamer's Last Hope.**__\n> **Twin Drive** a player.\n- If you target __**Corrupted Hero, Akasuki**__ or __**Love River Star, Aito**__\n> Move a player anywhere on the playerlist. This change Is secret.\n- If you target __**Apprentice Fighter, Daichi**__\n> **Boost+1** a player\n- If you target Love __**River Kid, Taizo**__ or __**Blade of a Silver Tongue, Kaori**__\n> Allow a player to multitask.\n- If you target Love __**River Warrior, Akihiko**__ or __**Love River Hero, Airi**__\n> Target someone during the day, and they will be able to perform their night action twice the following night.\n- If you target __**Wielder of Hope, Asahi**__\n- All of the abilities above are night actions unless specified otherwise.\n- If you are in the game, force at least one other slot in the game to be an Accent OC.");
		
		e.addField("Goal:", "Aid Accent OCs to victory. If at least one Accent OC wins the game, you also win the game.");
	});

	register_role(["mafioso", "355"], "Town", "Mafioso", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 355");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Foretell someone every night. At the end of the next night, you will perform an Investigator check (35) on them. At the end of the night after the night after the night after that, you will learn their role exactly.");

		e.addField("Attributes:", "- You may not vote \"Innocent\" on odd-numbered days.\n- You have a layer of Powerful defense that can block one attack.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["inferno", "356"], "Underworld", "Inferno", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 356");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select an Underworld member and a doused player, teleporting visits to the latter.");

		e.addField("Attributes:", "- All visitors to the target Underworld member are, without their knowledge, redirected to the doused player.\n- Anyone who's visit would have produced a notification to the Underworld member will become doused.\n- You may redirect 4 times.\n- If the Apocalypse is dead and there are no Underworld Offensive roles alive, you will become the Apocalypase.\n- Immune to Roleblock, Control, and Conversion.");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["old_man_with_a_stick", "oldmanwithastick", "form_of_the_old_man", "formoftheoldman", "fotomwas", "357"], "Neutral", "Form of the Old Man with a Stick", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 357");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the start of day 3, players may choose to change their role into Old Man with a Stick. If they do, they're Old Men with Sticks and not their original roles. (Old Man with a Stick is a Town Investigative role that's functionally equivalent to Sheriff.)");
		
		e.addField("Goal:", "Become an Old Man with a Stick and win.");
	});

	register_role(["magic_clone", "magicclone", "358"], "Coven", "Magic Clone", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 358");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone during the day to learn their ability to use at night.");

		e.addField("Attributes:", "- You can use your target's ability at night.\n- With the Necronomicon, any ability you learn will be permanent. You can't have 2 permanent copies of the same role.\n- With the Necronomicon, you will get an ability to deal a basic attack to 1 player.\n- With the Necronomicon, you can use all your permanent learned abilities at the same time every night.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["asmodeus", "asmo", "359"], "FallenAngel", "Asmodeus", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 359");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Maul someone each night, attacking them and negating all protective effects against them.");

		e.addField("Attributes:", "- If you maul a Fallen Angel, you'll be able to attack an additional player the next night. This only applies to the initial target of your attack.\n- If you maul a non-Fallen Angel, you'll be roleblock and redirect immune the next night.\n**Sin of Lust** — If you're the last Fallen Angel remaining, you may choose to convert yourself to any evil faction of your choosing at any time. You may also choose any role from that faction to be converted into, except for Espionage roles. You retain the ability to convert upon converting, but you may never convert to being aligned with a good faction through any means. ");
		
		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["sans", "360"], "Town", "Sans", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 360");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- bones or smth (For god's sake yes this is an attack.)");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["analyst", "361"], "Town", "Analyst", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 361\n*Don't mind me, just...analyzing.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check a player every full moon.");

		e.addField("Attributes:", "- You will learn their faction. (Town, Mafia, Coven, Neutral, Etc)\n- Framed/Doused/Hexed/Etc players show up as Mafia/Neutral/Coven/Etc\n- Roles with Detection Immunity show up as Town.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["demon", "362"], "Neutral", "Demon", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 362");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Curse a player's house every night.\n- Curse a player every night.\n- Possess someone. The next day, they cannot talk, and you will vote for them. Then, the next night, their visit Is converted into a basic attack.\n- Target a player. You will deal a Powerful Attack to up to X people, where X Is the amount of people that visited your target.");

		e.addField("Attributes:", "- Cursed houses' visits are transformed into basic attacks.\n- A cursed player's visit Is transformed into a basic attack.\n- You may use up to 2 abilities each night.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["personal_jesus", "personaljesus", "jesus", "363"], "Neutral", "Personal Jesus", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 363\n*Someone to hear your prayers, someone who cares.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Call on someone to allow them to confess their misdeeds.");

		e.addField("Attributes:", "- Players that you call on will be notified that they have been reached out to by a Personal Jesus at the beginning of the night and may choose to confess a sin they have committed in this game.\n- If a player chooses to tell a sin to you, you will receive the details of that sin, and they will receive Powerful defense (or Invincible if they already have Powerful) for that night.\n- A sin is defined as a piece of information that your target knows is true according to their ability results, faction members, or any other method of non-public information gathering. The host has the final say on what counts as a sin.\n- Once you have received sins from three players, you must choose someone the next day to reveal their identity and sin publicly. This information will be revealed to everyone at the end of the day. If you do not choose a player, one will be chosen randomly.");
		
		e.addField("Goal:", "Receive sins from three players and expose one player's sins.");
	});

	register_role(["bergentrückung", "bergentruckung", "bergen", "364", "364a"], "Town", "Bergentrückung", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 364A\n*I so badly want to ask, do you want a cup of tea?*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect two people tonight with Basic defense. If both of them are attacked during the same night, it will become invincible.");

		e.addField("Attributes:", "- You think you do not deserve to be spared, so you can't defend yourself.\n- If you successfully protect someone with your ability, you can turn into ASGORE during the day.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["asgore", "364b"], "Town", "ASGORE", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 364B\n*It was nice to meet you. Goodbye.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send a flaming spear to your target. They will be basic attacked, but if they survive they will burn. After burning for two days, you will use another unstoppable attack. You can't be affected by abilities from a player who is burning.\n- Spin your trident, gain basic defense and powerful attack all of your visitors. If you judged a player as innocent, then you won't attack them. (1 use)\n- Judge two players as innocent and guilty. You will not learn their roles or faction or anything but the host will tell about which one is the more negative for town. (1 use)");

		e.addField("Attributes:", "- If they're both town members, you will judge whoever is the least useful as guilty. If they're both evil, you will judge whoever is the most powerful as guilty.\n- If you targeted yourself with the final ability for some reason, you will always judge yourself as guilty with the highest priority.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["viewer", "365"], "Neutral", "Viewer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 365");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "View someone at night or use an ability you have seen.");

		e.addField("Attributes:", "- Whenever you view someone, you will receive all feedback they did. You may choose 1 feedback message they received, and you will gain the ability that caused that feedback message to be produced.\n- You may view and use one other ability per night.");
		
		e.addField("Goal:", "Have the good faction lose the game (this can win while dead).");
	});

	register_role(["firebrand", "366"], "Town", "Firebrand", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 366");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Douse someone in gasoline or ignite all doused targets at night.\n- Hose someone's house down at night.");

		e.addField("Attributes:", "- Only non-Town roles will know if they were doused. However, they will not know if they were hosed down.\n- Hosing down a player removes your gasoline from them. You will not remove another Firebrand's gasoline or an Arsonist's gasoline.\n- You may douse a player and hose down a player on the same night.\n- You may ignite your doused targets and hose down a player on the same night.\n- You may only ignite your doused targets once.\n- You will not ignite another Firebrand's doused targets or an Arsonist’s doused targets, nor will they ignite yours.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["butcher", "367"], "Neutral", "Butcher", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 367");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Kill someone every night.");

		e.addField("Attributes:", "- You may decide to skin them. If they die, they will appear as the Butcher, and they will use your Last Will instead of their own. You can also change their cause of death to any other killing role.\n- Otherwise, you may decide to clean them, obscuring their role, last will and cause of death.\n- You may only clean twice.");
		
		e.addField("Goal:", "Kill anyone who would oppose you.");
	});

	register_role(["scorcher", "368"], "Underworld", "Scorcher", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 368");

		e.addField("Alignment", "Unique Underworld Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Whenever a player is killed, gain the ability to douse.\n- You cannot gain charges unless you have 1 or less charges.\n- If all other Underworld players are dead, you will become the Apocalypse.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["courier", "369"], "Town", "Courier", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 369");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guide someone each night.");

		e.addField("Attributes:", "- When you guide a player, you will make their visit Astral. You will also temporarily remove any framing from them.\n- If your target would be roleblocked or controlled, you will scare the visitor away.\n- If you attempt to guide a Town Power or Mafia Head role, your ability will fail. You will not be notified of this.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["incarcerator", "370"], "Town", "Incarcerator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 370");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Patrol at someone’s house at night.");

		e.addField("Attributes:", "- While patrolling someone's house, you will detain all visitors except for the Jailor and another Incarcerator.\n- You will know if you detained someone, but they will not know that they were detained.\n- You will not learn the names or roles of people you detain.\n- Detained targets will be roleblocked the night after you detain them.\n- If you are roleblocking your detained targets, you will not be able to patrol at someone's house.\n- If you are roleblocking your detained targets, you will gain control and roleblock immunity.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["blaster", "371"], "Underworld", "Blaster", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 371");

		e.addField("Alignment", "Unique Underworld Offensive", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Destroy someone's house with a burst of lava.");

		e.addField("Attributes:", "- You may only target non-doused players.\n- Visitors to your target's house will learn your name, even if your target is protected.\n- You have two attacks.\n- If the Apocalypse dies, you will graduate to the Apocalypse. You have priority for graduation.");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["man_in_the_painting", "maninthepainting", "painting", "matp", "372"], "Neutral", "Man in the Painting", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 372");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit someone. They may only communicate in reactions for the following day.");

		e.addField("Attributes:", "- You may only communicate in reactions, including in your private channel. If the host forgot to/just didn't post anything there, then like skill issue I guess\n- You can't use regional indicators >:(");
		
		e.addField("Goal:", "Successfully have a conversation with at least two people.");
	});

	register_role(["magus_of_the_traitor", "magusofthetraitor", "magus", "mott", "373"], "Coven", "Magus of the Traitor", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 373");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock someone each night.\n- If you have the Necronomicon, you may attack them instead.");

		e.addField("Attributes:", "- There's a Town Traitor allied with the Coven. See https://town-of-salem.fandom.com/wiki/Game_Modes#Town_Traitor for details.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["interrogator", "374"], "Town", "Interrogator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 374");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pick someone to open up a chat with at night every day.");

		e.addField("Attributes:", "- You'll be shown as \"Interrogator.\"");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["jailkeep", "375"], "Town", "Jailkeep", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 375");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Keep someone in your jail at night.");

		e.addField("Attributes:", "- Jailkeeping someone fails all visits against them, while roleblocking them.\n- You may jailkeep yourself.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["harlequin", "376"], "Neutral", "Harlequin", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 376\n*This role cannot die during the night, at all. Meaning, it is above every single other attacking value in the game, including Overkill. Additionally, you may not be banned or modkilled by roles that ban or modkill.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Immortal", true);

		e.addField("Abilities:", "- Choose someone's home to stay at.\n- Or choose someone to follow.");

		e.addField("Attributes:", "- If you stay at someone's home and they get attacked, your defense value Is lowered to none and you get attacked instead.\n- If you follow someone and they attack someone else, your defense value Is lowered to none and you will get attacked instead.\n- You will haunt (Post 90, Jester) the player that killed you.");
		
		e.addField("Goal:", "Die in the night.");
	});

	register_role(["loudmouth", "377"], "Town", "Loudmouth", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 377");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Keep watch outside a player's house.");

		e.addField("Attributes:", "- Your target will know who their visitors are, unless they are killed or roleblocked.\n- If your target dies, you will learn their attacker's name.\n- If you stay home, you will announce the names of your visitors at the start of the next day, even if you die.\n- Astral Visitor");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["young_boy", "youngboy", "378"], "Town", "Young Boy", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 378");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone's house to watch during the night.\n- Choose someone to trust.");

		e.addField("Attributes:", "- If that person gets attacked, you will tell the person that you trusted the name of the attacker, unless they are a TPo, in which case the ability fails, but you wont know It failed.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["practicioner", "379"], "Town", "Practicioner", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 379");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- On odd nights, choose a target, and heal all players visiting your target.\n- On even nights, choose a target, and heal all players your target visits.\n- Once per game, you may select yourself, healing everyone in the game.");

		e.addField("Attributes:", "You will know if you *and* how many people you heal with your abilities.");
		
		e.addField("Goal:", "Town except pronounced like own would by itself so it’s like tone");
	});

	register_role(["engineer", "380"], "Town", "Engineer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 380");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Construct a sentry at night.\n- Place a constructed sentry at someone's house. The sentry will deal a Powerful attack to 1 random visitor who is not a member of the same faction as the player whose house the sentry is placed at.\n- Destroy a constructed sentry.");

		e.addField("Attributes:", "- You may only have 1 constructed sentry at a time.\n- Once a sentry attacks a player, it will disappear.\n- You may not target yourself.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["party_host", "partyhost", "party", "381"], "Town", "Party Host", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 381");

		e.addField("Alignment", "Town Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Invite someone to your party.\n- During the day, drink an energy drink, granting yourself Basic defense the following night. 0 uses, 1 use for each evil that was **lynched**.");

		e.addField("Attributes:", "- Invited players are forced to use your ability on you. They will also deal a basic attack to you. If their ability Is an attack with a value higher than basic, It Is lowered to basic. If they have multiple abilities, the first one Is picked. They will learn your role.\n- If you invite a TPo, your ability will fail.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mephistopheles", "meph", "382"], "FallenAngel", "Mephistopheles", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 382");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Bind someone each night. You can give them any set of orders, which, if they fail to obey at any point, you will attack them. Orders must be specific game actions, but can include conditionals. Your contract will only last for two day/night cycles.");

		e.addField("Attributes:", "- If you bind a Fallen Angel, you will also learn all game actions they take while binded.\n- If you bind a non-Fallen Angel, you will also learn their role.\n**Sin of Sloth** — If you're the last Fallen Angel remaining, your targets must follow your orders if possible and your contracts last forever and you may bind two players each night. This applies to contracts made before you became the last Fallen Angel.");
		
		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["dreamwalker", "383"], "Mafia", "Dreamwalker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 383");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make someone have a nightmare about someone else each night.");

		e.addField("Attributes:", "- Your target will be scared away if they attempt to visit the player they have a nightmare about.\n- If a player is given a second nightmare, it will replace their first nightmare.\n- If you die, your targets will no longer have their nightmares.\n- You cannot make someone have a nightmare about themselves.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["pestilence", "384"], "Neutral", "Pestilence, Horseman of the Apocalypse", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 384");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/998691858207228026.webp";

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- You may choose to Rampage at a player's house each night.")

		e.addField("Attributes:", "- You will automatically attack anyone who visits you, including the Jailor.\n- Detection Immunity, Roleblock Immunity, and Control Immunity\n- Your Forthcoming is not announced.")

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["voidslime", "385"], "Neutral", "Voidslime", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 385");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- At the end of each night, before actions are processed, you will be provided with a list of all effects that would happen. You may choose up to one of them. It doesn't happen.\n- You have 12 hours to make your decision after actions are processed.\n- You may not share the information you receive.")

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["werewolf_convert", "werewolfconvert", "ww_conv", "wwconv", "386"], "Neutral", "Werewolf but it can convert", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 386");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During a Full Moon, attempt to convert your target into a Werewolf. If the target cannot be converted or the faction is full, you will rampage at the target's house.");

		e.addField("Attributes:", "- When more than one Werewolf is alive, they will gain a shared chat and vote for who to convert.\n- The youngest Werewolf is always the one who carries out the action.\n- If you don't select a target, you will rampage at your own house on Full Moon Nights.\n- If the target has powerful defense, or is a member of the Coven or Mafia, they cannot be converted.\n- Once 4 Werewolves are alive, you cannot convert new members, only attack them.\n- You have Detection Immunity, but only during non-Full Moon Nights.");
		
		e.addField("Goal:", "Kill everyone who would oppose you.");
	});

	register_role(["your_best_nightmare", "yourbestnightmare", "nightmare", "ybn", "387"], "Neutral", "Your Best Nightmare", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 387\n*Do you really think you can stop ME? Hee hee hee. Y o u  r e a l l y  A R E  a n  i d i o t.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Target a player tonight and give them a nightmare. You will attack everyone who they visit tonight.\n- Eat a player's will tonight. It will become completely empty and they won't be able to use it anymore.");

		e.addField("Attributes:", "- Your abilities are astral.\n- You can multitask.\n- Everyone who investigates you will be given a nightmare and can't speak, whisper or vote during the next Day phase. You will know their identity too.\n- When you kill someone, you will take their SOUL and steal all of their attributes unless they would be negative utility.");
		
		e.addField("Goal:", "Give everyone an eternal nightmare... " + factions.Neutral.goalNK);
	});

	register_role(["winsconsin", "388"], "Neutral", "Winsconsin", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 388");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, convert someone's role into Winsconsin.");
		
		e.addField("Goal:", "Convert the entire town into Winsconsin");
	});

	register_role(["word_eater", "wordeater", "389"], "Neutral", "Word Eater", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 389");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a word each night. All instances of that word in all roles' rules texts will be replaced with another word of your choice.");
		
		e.addField("Goal:", "Town day Basic vote one dead schizophrenia.");
	});

	register_role(["dimensional_mage", "dimensionalmage", "dimensional", "dm", "390"], "Neutral", "Dimensional Mage", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 390");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, split the current playerlist into as equal as possible halves, creating 2 separate games out of this one game. The players assigned to each game will be selected randomly. This includes dead players (who will remain dead). (1 use. Cannot be used on the first night.)\n- At night, choose a player. Everyone who visits that player will be dealt a Basic attack. If nobody visits that player, then they will be dealt a Basic attack.");

		e.addField("Attributes:", "- Astral\n- Any roles which have abilities or attributes which depend on another specific player will assume that player is dead if they are separated into different games.\n- You may target yourself with your attack.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["drunk", "391"], "Neutral", "Drunk", {subCat: "Random"}, (e) =>
	{
		e.setDescription("Post 391");

		e.addField("Alignment", "Neutral Random", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Invincible (Variable)", true);

		e.addField("Attributes:", "- You will secretly be a different Neutral role.\n- You will not learn your true role until you are attacked once.\n- You have Invincible Defense that will go away after you are attacked once, even if you didn't need it.");
		
		e.addField("Goal:", "Learn your true role and complete its goal.");
	});

	register_role(["talented", "392"], "Neutral", "Talented", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 392");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- You have another random role in addition to this role.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["copycat", "393"], "Mafia", "Copycat", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 393");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the night phase you may chose to copy another roles ability and use it as your own.\n- You may only copy three times.");

		e.addField("Attributes:", "- If you copy a killing role, you will only deal a basic attack.\n- The role does not have to be in the game to copy.\n- You may not copy unique roles.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["lighter", "394"], "Underworld", "Lighter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 394");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Mark a player during the day.\n- Follow a player during the night.");

		e.addField("Attributes:", "- If the player you're following visits your marked target, douse them and all other visitors to the marked player.\n- If the Apocalypse is dead and there are no Underworld Offensive, you will become the Apocalypse.\n- Conversion and Control Immune");
		
		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["topaz", "395"], "Rock", "Topaz", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 395");

		e.addField("Alignment", "Unique Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a player and cover the Rocks'™️ tracks during the night.");

		e.addField("Attributes:", "- Covering the tracks at a player will cause any investigative result on a Rock member to return as a member of the Town, and any non-Rock member to return as a Rock. You may only do this three times.\n- The Topaz has 4 extra votes they may use at any time during the day (not the trial tho). These votes will be public, however they won't be tied to the Topaz. Each extra vote is discarded after use.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["maid", "396"], "Mafia", "Maid", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 396");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, you may choose to stop the flow of time for all players except for yourself, a random living Mafia (Killing) role, and one player of your choosing. The following day chat will only be accessible by the three of you. (This means nobody else can even see the channel.) For the purposes of both voting and voting majority, only the players inside this restricted day chat are considered. [1 use.]\n- Grant protection to another Mafia player, granting them Basic defense and dealing a Basic attack to one random player who attacks the player you are protecting. [1 use.]");

		e.addField("Attributes:", "- You may not target yourself.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["turquiose", "turq", "397"], "Rock", "Turquoise", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 397");

		e.addField("Alignment", "Unique Rock Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Barricade the Rock Headquarters™️, preventing attacks on Rock members\n- Disarm a player during the night");

		e.addField("Attributes:", "- Barricading gives all Rock members (including yourself) Powerful Defense for the night. You may only do this once.\n- Disarming will roleblock the player if they attack a Rock member that night. Otherwise, it does jack shit. You may only do this three times.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["sexyman", "398"], "Town", "Sexyman", {subCat: "Sexyman"}, (e) =>
	{
		e.setDescription("Post 398");

		e.addField("Alignment", "Town Sexyman", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Seduce someone each night, redirecting them to you every night you're alive for the rest of the game.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wm_caporegime", "wmcaporegime", "caporegime", "399"], "Mafia", "WM Caporegime", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 399\n*Anyone is at your disposal.*");

		e.addField("Alignment", "Unique Mafia Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use a Mafia ability each night.");

		e.addField("Attributes:", "- You have one charge of each Mafia role that is not in the game.\n- When you use a charge of another Mafia role, you may use any ability that role has, but may only use that ability one time.\n- You do not have charges of Mafia Head roles, Mafia Espionage roles, or the Mafioso.\n- You may change yourself into a role that you still have the charge of on any night.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["renewed_mastermind", "renewedmastermind", "renewed", "mastermind", "rm", "400"], "Other", "Renewed Mastermind", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 400");

		e.addField("Alignment", "Seen Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Bleed (Day): Immediately cause a target to bleed. If they are Seen, your attack drops to None and you cannot attack anyone. 2 uses.\n- Stab (Night): Attack a player. If they are Seen, your attack drops to None and you cannot attack anyone.\n- Convert (Night): Attempt to convert a player. If they are part of an opposing good faction, convert them to the Seen. 3 uses.");

		e.addField("Attributes:", "- Seen is a \"good faction\" without a factional kill or chat. It uses Unseen roles to spawn.\n- Mastermind (988) and Assassin (989) cannot be part of Seen.\n- One-use Basic Defense");
		
		e.addField("Goal:", "Seen Goal");
	});
};
