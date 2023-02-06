//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["renegade", "nowaykareference??", "3151"], "Neutral", "Renegade", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3151");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- **Hide** (Day) Watch the town from the shadows. You don't get to vote and you cannot be voted.\n- **Kill** (Night) Attack another player.");

		e.addField("Attributes:", "- *Attack* goes up 1 stage every two player deaths. (None --> Basic --> Powerful --> Unstoppable).\n- Once *Attack* has maxed out, Defense begins to increase in the same way.\n- You are roleblock immune.");

		e.addField("Goal:", "Eliminate the rest of the factions~");
	});

	register_role(["wolf", "3152"], "Minecraft", "Wolf", {subCat: "Mob", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3152");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Bite**: Aggressively bite somebody, attacking them.\n- **Rage**: Each time you attack somebody upon using this ability, they are also roleblocked.\n- **Fetch Meat!: Fetch pork, steak, rabbit, flesh, or chicken from the head, transforming into Wolf (3150).");

		e.addField("Attributes:", "- Cannot spawn naturally.\n- Roleblock immune.\n- If you get visited by 2+ players, you will stay home and rampage. ");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["ten'shí", "ten'shi", "tenshí", "tenshi", "shí", "shi", "ts", "3153"], "Linirean", "Ten'Shí", {subCat: "Legend"}, (e) =>
	{
		e.setDescription("Post 3153");

		e.addField("Alignment", "Linirean Legend", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- **Firerush**: Summon meteors at a location. (Powerful Rampage)\n- **Iron Time**: Boost *Defens*e to *Invinicible*.");

		e.addField("Attributes:", "- Each ability can only be used every other night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["the_list", "thelist", "tl", "3154"], "Neutral", "THE LIST", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3154\n*Writing your name right NOW!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Write someone’s name on your list.\n- Tear the list.");

		e.addField("Attributes:", "- Anyone whose name is written on your list is notified that they are on a list, getting the message, “You feel your identity has been taken note of”.\n- Your targets are unable to remove their name from the list.\n- When you tear the list, you and everyone else that is on the list will die to an unpreventable overkill attack.\n- If you die during the night, you automatically use your second ability.\n- You will not tear the list if you are lynched.");

		e.addField("Goal:", "Have at least 5 people, 3 of which must be Town or part of the majority “good” faction, on your list then tear.");
	});

	register_role(["ranger", "3155"], "Linirean", "Ranger", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3155");

		e.addField("Alignment", "Linirean Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Poison**: Poison a target. They will take a *Basic* attack in 3 days. They will not be notified of this.\n- **Wrath of the Forest**: Deal a Basic Attack to a Target. If they do not die, they will be roleblocked.");

		e.addField("Attributes:", "- You can only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["high_sorcerer", "highsorcerer", "sorcerer", "hs", "3156"], "Linirean", "High Sorcerer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3156");

		e.addField("Alignment", "Linirean Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Weaken**: Weaken a target, decreasing their Defense to *None*.\n- **Elemental**: Summon a golem by someone's house, denying all visits to them, except *Unstoppable* attacks.");

		e.addField("Attributes:", "- You can only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["dwarven_engineer", "dwarvenengineer", "dwarven", "dwarfengineer", "engineer", "de", "3157"], "Linirean", "Dwarven Engineer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3157");

		e.addField("Alignment", "Linirean Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Construct**: Construct a weapon, that will attack the following night.\n> - 500m Big Bertha: Shoot a huge mortar shell at someone's house, dealing a *Powerful* attack to everyone there. \n> - Tesla x104: Use the overcharge to deal a *Basic* attack to everyone visiting you.\n> - DWARRP: Stun a target (roleblock) and the players that live next to them.\n> - Battle-Mecha T-200: Intimidate everyone with its large size, granting you *Powerful* defense for the night.");

		e.addField("Attributes:", "- You spend a day constructing, then a day attacking, then a day constructing....");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["lucrezia", "3158"], "Linirean", "Lucrezia", {subCat: "Legend"}, (e) =>
	{
		e.setDescription("Post 3158");

		e.addField("Alignment", "Linirean Legend", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- **Life Drain**: Steal a target's Defense stat.\n- **Cloak**: Rampage at your place. ~~*Unstoppable* Attack to Vampires (?)~~");

		e.addField("Attributes:", "- You can only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["tuk'va", "tukva", "tv", "3159"], "Linirean", "Tuk'Va", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3159");

		e.addField("Alignment", "Linirean Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Totem of Weakness**: Lower a target's Attack and Defense by 1.\n- **Totem of Spirits**: Roleblock 2 targets.");

		e.addField("Attributes:", "- You can only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["arch-druid", "arch_druid", "archdruid", "druid", "ad", "3160"], "Linirean", "Arch-Druid", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3160");

		e.addField("Alignment", "Linirean Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Runed Bears**: Deal a *Powerful* attack and give *Powerful* defense to a target (including yourself).\n- **Sylvian Curse**: Learn a target's faction, and one teammate, if they have one. ");

		e.addField("Attributes:", "- You can only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["assassin", "3161"], "Linirean", "Assassin", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3161");

		e.addField("Alignment", "Linirean Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Sneak Attack**: Attack a target. This attack is Astral.\n- **Counterattack**: Give yourself Basic defense and deal Basic attack to all attackers.\n- **Pickpocket**: Learn a target's role.");

		e.addField("Attributes:", "- You can only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["forest_keeper", "forestkeeper", "fk", "3162"], "Linirean", "Forest Keeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3162");

		e.addField("Alignment", "Linirean Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Circle of Life**: Heal yourself and up to 2 teammates.\n- **Eerie Gardener:** Learn the roles of everyone visiting you.");

		e.addField("Attributes:", "- You can only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["eridan", "3163"], "Linirean", "Eridan", {subCat: "Legend"}, (e) =>
	{
		e.setDescription("Post 3163");

		e.addField("Alignment", "Linirean Legend", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a target at night.\n- **Dual Slash**: Don't attack but instead raise your attack.");

		e.addField("Attributes:", "- You can only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["angel", "3164"], "KA", "Angel", {subCat: "Spiritual"}, (e) =>
	{
		e.setDescription("Post 3164");

		e.addField("Alignment", "KA Spiritual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Hellbent", true);

		e.addField("Abilities:", "- Sword: Play any attacking card, it will be upgraded if possible. You may gain an additional use of this at any time by sacrificing any 3 cards. (0 uses)\n- Save: Pick a player and lose 2 HP. That player will gain death immunity this night and secretly be Lynchproof the next day. (2 uses)\n- Ascend: Sacrifice yourself this night. You may play cards when dead and draw 2 each night start. (1 use)");

		e.addField("Attributes:", "- Frail: You die if you reach 1 HP, rather than 0. ");

		e.addField("Goal:", factions.KA.goal);
	});

	register_role(["hunter", "3165"], "KA", "Hunter", {subCat: "Apostle"}, (e) =>
	{
		e.setDescription("Post 3165");

		e.addField("Alignment", "KA Apostle", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Hellbent", true);

		e.addField("Abilities:", "- Trap: Play a special Trap! (34), anyone who triggers it will take a Basic attack, You will learn who got trapped. (2 uses)\n- Disarm: Choose a player. Permanently steal all of their attacking abilities and add a copy of all abilities taken to your hand as a 1-use card. (1 use).\n- Defenseless: Choose a player. Permanently steal all of their defensive abilities and add a copy of all abilities taken to your hand as a 1-use card. (1 use)\n- Chase: If you have attacked someone and they survived in the previous night, Upgrade your attack cards played against them this night. (2 uses)");

		e.addField("Attributes:", "- Toughness: The first time you start a night at 3 HP or less, you automatically heal yourself to full HP.\n- Refund: If you die, all abilities stolen by your abilities will be given back.");

		e.addField("Goal:", factions.KA.goal);
	});

	register_role(["the_sun", "thesun", "sun", "ts", "3166"], "Neutral", "The Sun", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3166\n*I SMITE THEE WITH THE UNMATCHED POWER OF THE SUN*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "\"Unstable\"", true);

		e.addField("Abilities:", "- SMITE THE SHIT OUTTA SOMEONE");

		e.addField("Attributes:", "- If the Partisans spawn, they gain the additional goal to protect you, and you gain access to the factional chat. If you die, the Partisans have 5 days to win and avenge their god.\n- You cannot be lynched.\n- You may not vote or whisper, however all your day messages come through as “The voice of the sun”.\n- If someone is insane enough to attack the sun, you will explode, killing X amount of non-Partisan players, where X is the number of attackers against you multiplied by 3 as well as your attacker.\n- Smited players have their roles and wills incinerated.");

		e.addField("Goal:", "Kill all who would oppose the you or the Partisans.");
	});

	register_role(["creeper", "awman", "3167"], "Minecraft", "Creeper", {subCat: "Mob"}, (e) =>
	{
		e.setDescription("Post 3167");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Explode**: Deal a unstoppable attack to your target and their two nearest alive neighbors next night, and then deal an unstoppable attack to yourself.\n- **Creep**: You are unaffected by every action used on you.\n- **Farm Gunpowder**: Give the current head role one gunpowder. ");

		e.addField("Attributes:", "- If you are killed, the head role gains two gunpowder.");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["random_jailor", "randomjailor", "jailor", "rj", "3168"], "Town", "Random Jailor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3168");

		e.addField("Alignment", "Town \"\"\"Support\"\"\"", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During your day, jail a random player other than yourself.\n- Execute your target at night.");

		e.addField("Attributes:", "- When you jail a player, for the duration of the next night, they will be placed in a private chat with you. Messages sent by you will appear to have been sent by “Jailor”, and your target will additionally be unable to communicate in any private chats they may have for the night.\n- While jailed, targets cannot use abilities but are not roleblocked, gain Powerful defense, and all other abilities used against them will fail. Indirect effects may still apply.\n- You may only execute thrice. If you execute a member of the Town, you lose all your remaining executions. You may not execute on Night 1.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["random_shooting_vigilante", "randomshootingvigilante", "random_vigilante", "randomvigilante", "vigilante", "rsv", "3169"], "Town", "Random Shooting Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3169\n*Here to uphold the law- what, no, of course I wouldn't shoot the Mayor! Not on purpose, at least.*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a random player other than yourself. 3 uses.");

		e.addField("Attributes:", "- You learn who you targeted.\n- You cannot die of guilt.\n- Besides not being able to target yourself or dead players, your ability can target anyone in the game.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["crusader", "crus", "3170"], "Other", "Crusader", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3170");

		e.addField("Alignment", "Killing.", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch a player at night.");

		e.addField("Attributes:", "- You deal a *Basic* attack to one visitor to your target.\n- You give your target *Powerful* defense");

		e.addField("Goal:", "kill ppl idk");
	});

	register_role(["trapper", "3171"], "Other", "Trapper", {subCat: "Crusader"}, (e) =>
	{
		e.setDescription("Post 3171");

		e.addField("Alignment", "Killing.", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Build a trap at night. You may have an infinite number of traps at once.\n- Spend one trap to set up a trap at a player's house. You also choose what that trap specializes in.");

		e.addField("Attributes:", "- Your options are, for specializations: Killing, Protective, Investigative, Other.\n- Specialized traps will kill people trying to use abilities from that category on your target. Other refers to any other type of ability.");

		e.addField("Goal:", "kill ppl idk");
	});

	register_role(["transporter", "trans", "3172"], "Other", "Transporter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3172");

		e.addField("Alignment", "Killing.", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one person to swap at night.");

		e.addField("Attributes:", "- If someone is getting attacked, you will swap the person you chose with them instead.");

		e.addField("Goal:", "kill ppl idk");
	});

	register_role(["auto-ritualist", "auto_ritualist", "autoritualist", "ritualist", "ar", "3173"], "Town", "Auto-Ritualist", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3173");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Sacrifice a random Townie to haunt a random suspicious player.");

		e.addField("Attributes:", "- Suspicion follows sheriff results, you are fooled by frames and detection immunity.\n- Sacrificing a Townie deals an Overkill attack to them and deals an Unstoppable attack to the evil target.\n- You may choose to sacrifice yourself instead of a random Townie.\n- You can keep a last will due to your practices being fully automatic.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["custodian", "3174"], "Other", "Custodian", {subCat: "Support", spawnCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 3174");

		e.addField("Alignment", "New Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to clean. For the rest of the game, if they ever die while you're alive, you'll hide their role and will with everyone but the Mafia. 2 uses.");

		e.addField("Attributes:", "- Once per game, you may swap who you currently have cleaned.");

		e.addField("Goal:", "Kill everyone who will not submit to the new Mafia.");
	});

	register_role(["veteran", "vet", "3175"], "Other", "Veteran", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3175");

		e.addField("Alignment", "Killing.", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Defense", true);

		e.addField("Abilities:", "- Say tp/lo during the day.");

		e.addField("Attributes:", "- Attack everyone that visits you.");

		e.addField("Goal:", "kill ppl idk");
	});

	register_role(["hired_gunman", "hiredgunman", "gunman", "hgm", "hg", "3176"], "Mafia", "Hired Gunman", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3176");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a player at night, this can be used alongside the Mafia factional kill. (3 uses)");

		e.addField("Attributes:", "- If you are the last Mafia member alive, you will turn into a Vigilante (67).");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["the_duchess", "theduchess", "duchess", "3177"], "Clocktower", "The Duchess", {subCat: "Fabled"}, (e) =>
	{
		e.setDescription("Post 3177");

		e.addField("Alignment", "Clocktower Fabled", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tell players who visit you how many visitors are evil.");

		e.addField("Attributes:", "- You are announced at the start of the game and controlled by the host.\n- Up to 3 players may publicly announce they are visiting you instead of their night action.\n- 1 visitor receives wrong information.");

		e.addField("Goal:", "N/A");
	});

	register_role(["ninja_monkey", "ninjamonkey", "ninja", "nm", "3178"], "Monkey", "Ninja Monkey", {subCat: "Magic"}, (e) =>
	{
		e.setDescription("Post 3178");

		e.addField("Alignment", "Monkey Magic", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spy on a player each night, tracking them and receiving all night feedback they receive (including feedback from their own role).");

		e.addField("Attributes:", "- You may only choose one upgrade.\n- Detection immune\n- Astral\n**Grand Saboteur** (Requirement: See a Monkey lynched or be the last Monkey standing\n- Add \"You will roleblock your target's target.\" to your ability. You become roleblock immune.\n- Each day you may sabotage a subalignment. Anyone with this subalignment will unknowingly have their abilities fail and attributes nullified during the next night. You may only sabotage the (Killing) subalignment twice.\n- Any killing role who targets you is redirected to someone at random. Fails if the attack is Unstoppable or higher, or astral.");

		e.addField("Attributes (cont.):", "**Sticky Bomb** (Requirement: See a Monkey be killed by an opposing REF or be the last Monkey standing.\n- You may now instead place a sticky bomb at someone's house. They will not be notified. They pass the sticky bomb to the first person they visit the night after they receive a bomb.\n- If anyone doesn't visit the night after they receive a bomb, the bomb will explode, dealing an Astral Powerful rampage attack. If two bombs meet, they will also explode. You may also remotely detonate the bombs at any time.\n- You have protection from your bomb once.\n- You may have two bombs out at once.");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["barricader", "3179"], "Town", "Barricader", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3179\n*Not being able to visit your enemy is the best defense. Keep that in mi- **gets shot***");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select two slots in between players on the player list. You will set up two barriers on those spots. 3 uses.");

		e.addField("Attributes:", "- Barriers act as players (3179B), but block players from visiting other players on the other side of it.\n- Example: The player list is #1, #2, Barrier, #3, #4, #5, Barrier, #6. #1, #2, and #3 can only visit each other, as there's two barriers in the way.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["barrier", "3179b"], "Town", "Barrier", {subCat: "Protective", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3179B\n*I'm a fucking wall.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful (Degrading)", true);

		e.addField("Attributes:", "- This cannot spawn naturally.\n- Your role is public.\n- For every attack received, your defense goes down by 1. Powerful attacks reduce it by 2, assuming it wouldn't already kill you.\n- Visits cannot go through you. (See 3179)\n- You can't vote or be voted, and don't count to majority.\n- You can be visited by players on either side of you, assuming that there isn't a second Barrier in the way.\n- If you (a real player) somehow change your role into this, first off, why, secondly, all attributes do indeed apply to you. Also, you get the option to spawn a natural Barrier anywhere you'd like. And you can vote, ignoring the fifth attribute.\n- The above attribute doesn't apply if you're not a real player (spawned by 3179).");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["gwendolin", "gwen", "3180"], "Monkey", "Gwendolin", {subCat: "Hero"}, (e) =>
	{
		e.setDescription("Post 3180\n*With enough fuel and air, everything burns.*");

		e.addField("Alignment", "Unique Monkey Hero", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Scorch a person at night, dealing a Basic attack.\n- After you get one kill with this, you will burn anyone who survives, reducing their defense by one stage permanently and dealing an Astral Basic attack to them the next night.\n- After you get two kills with this, your burn renders anyone who survives Protection Immune as well.\n- After you get three kills with this, you may throw a cocktail, attacking and burning anyone who visits your target. (Three Uses).\n- After you get 5 kills as Gwendolin, you may release a Firestorm, reducing all levels of defense by two for the night to a minimum of Vulnerable. Monkeys are unaffected. (One Use)\n- If you get 7 kills before you use this ability, you may reduce to a minimum of Fragile instead. (see 2182)");

		e.addField("Attributes:", "- You have Overkill attack against Everfrost members.\n- Cannot spawn with Monkey (Primary).");

		e.addField("Goal:", factions.Monkey.goal);
	});

	register_role(["icarus_but_i_removed_the_last_part", "icarusbutiremovedthelastpart", "icarus", "icarusbut", "ibirtlp", "3181"], "FallenAngel", "Icarus But I Removed The Last Part", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3181");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Make someone soar every night, roleblocking them, and attacking them.");

		e.addField("Attributes:", "- If you make a Fallen Angel soar, you will also roleblock all of their visitors, and make your target's target soar too.\n- If you make a non Fallen Angel soar you will bypass immunities and healing.\n**Sin of Vainglory** — If you're the last Fallen Angel remaining, you can use your ability twice, and your ability will act as if you've targetted a Fallen Angel.");

		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["overheat", "<3", "3182"], "Neutral", "Overheat", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3182\n*It’s just because I still get worried, please forgive me!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic (Overkill)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Love your target <3. This will have a different effect depending on how many times you've used this ability before.\n> ~ The first time you use this, you'll spend some time getting to know them! You learn their role through frames and protect them with Basic defense for the night.\n> ~ The second time you use this, you'll finally work up the courage to talk to them >///<. They will learn they're the target of an Overheat and you'll protect them with Powerful defense for the night.\n> ~ The third time you use this, you'll start dating!! You'll roleblock your target, gaining roleblock and prevention immunity yourself, and protect them with Unstoppable defense for the night.");

		e.addField("Abilities (cont.):", "> **~** The fourth time you use this, you'll only want them to look at you u_u. You'll deliver a Basic poison to all their visitors and protect them with Overprotective defense for the night. They will no longer be able to whisper. \n> **~** The fifth time you use this, you'll never want them to let you go. You'll permanently prevent all who attempt to visit them besides you and prevent them from visiting. You'll also protect them with Overoveroveroveroverprotective defense. \n- The sixth time you use this, you'll protect your target with an Overkill attack and your goal will be changed to \"Live to see your target's faction lose the game before the end of the next day.\".\n- Overheat during the day, allowing you to use your ability twice tonight. (1 use) ");

		e.addField("Attributes:", "- You receive a target at the start of the game. You love them <3. Your target must be part of a non-Neutral faction.\n- If your target dies before you love them six times, you'll die and lose the game.\n- Upon loving your target a fourth time, you'll die if you go a night without loving your target.");

		e.addField("Goal:", "Live to see your target survive until the end of the game. <3");
	});

	register_role(["seer", "3183"], "Town", "Seer", {subCat: "Power", spawnRate: 0.01}, (e) =>
	{
		e.setDescription("Post 3183\n*The Seer used to live in a cave, seeing people through crystal balls... Now, he knows everything.*");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose one person to get clues from at night.\n- You can choose to become Incorpeal, giving you invinciblity. However, you will not be able to use your powers if you do so.\n- Choose one person to sneak on during the day. You will know who they plan to use their ability on, and see if they are talking to others. The other players will not be heard. You will know if your target is the Godfather (14), Jailor (51), Mayor, or Coven Leader (28). You may also choose one person to talk to.");

		e.addField("Attributes:", "- You're immune to ignition because you can't ignite something incorpeal. Also immune to witches and Medusa's gaze.\n- When you read someone’s prophecy, you will know their alignment. (Killing, Deception, Support, Protective, Evil, Benign, Chaos, Investigative)\n- You will know if your target is investigating someone, attacking someone, doused/igniting someone, hexing someone, protecting someone, giving someone the plague, controlled by a Witch/CL, or etc.\n- You will know who your target visits at night, and if they are attacked.\n- You can hear the Mafia chat on odd nights, and hear the Coven chat on even nights.\n- If you are being executed by the Jailor or assaulted by a Juggernaut who is not fully charged, you will automatically become Incorpeal if you have any left.\n- The Seer is OP. It can only appear in 1 every 100 games and has a 0.01x spawnrate.\n- https://town-of-salem.fandom.com/f/p/4400000000000307075");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["impulsive_inspector", "impulsiveinspector", "impulsive", "inspector", "ii", "3184"], "Town", "Impulsive Inspector", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3184\n*I get the info. One way or another.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to investigate each night.");

		e.addField("Attributes:", "- When you investigate someone, you will attack them. If they die and their role isn't hidden, you will learn their role.\n- If their role is hidden, you will learn that their role was hidden.\n- If they don't die, you will learn that they survived.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["doc", "3185"], "Town", "Doc", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 3185");

		e.addField("Alignment", "Town", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal target\n- Heal self (1 use)");

		e.addField("Goal:", "Town");
	});

	register_role(["adhd_juggernaut", "adhdjuggernaut", "adhd", "juggernaut", "adhdjugg", "aj", "adhdj", "3186"], "Neutral", "ADHD Juggernaut", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3186");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may choose a player to attack on Full Moon nights at 0 kills\n- You may choose a player to attack every night after your first kill.");

		e.addField("Attributes:", "- Appears innocent.\n- Levels up after every kill:\n> 1st - Can attack every night instead of every full moon.\n> 2nd - You rampage when you attack.\n> 3rd - You gain unstoppable attack.\n> 4th - You heal yourself after killing a player.\n> 5th - You roleblock your target.\n> 6th - Poison your target's visited player.\n> 7th - You gain a Necronomicon, controlling your target at night to visit your second target.\n> 8th - You order a Mafioso to kill your target, performing your attack astrally.\n> 9th - You ambush your own house, killing one player who visits you but all visitors know your name.\n> 10th - Gain a Vampire Hunter guard, preventing you from being converted to any faction.\n> 11th - You gain overkill attack.\n> 12th - In addition to your abilities, select a target to Douse. Select yourself to ignite all Doused targets.\n> 13th - When you are roleblocked, cleanse your roleblocker and kill them.");

		e.addField("Attributes (cont.):", "> 14th - Choose one of three potions to use in addition to other abilities: one learns role of target, one attacks target, one protects target\n> 15th - Hex your Doused target at night.\n> 16th - Poison your first target at night, then roleblock your second target at night, then spread the plague to your third target at night in addition to the other effects.\n> 17th - Investigate a player at night, learning whether they are good or bad.\n> 18th - Talk to the dead at night, appearing as the medium.\n> 19th - Infect someone with the Plague at night. When everyone is infected, Pestilence is announced to arrive and you can target a player to attack as Pestilence each night.\n> 20th - Your vote counts as 3 and you are the Mayor.\n> 21st - When you are lynched, haunt someone to deal an unstoppable attack to someone at night while dead.\n> 22nd - Your win condition is now \"Live until the game's end.\".");

		e.addField("Goal:", "Kill everyone.");
	});

	register_role(["alric", "3187"], "Linirean", "Alric", {subCat: "Legend"}, (e) =>
	{
		e.setDescription("Post 3187");

		e.addField("Alignment", "Linirean Legend", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone at night.\n- **Flurry**: Deal *Powerful* attack this night. 3 night cooldown.\n- **Sand Warriors**: Gain *Powerful* defense this night. 2 night cooldown");

		e.addField("Attributes:", "- You deal a *Basic* attack to attackers.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["vigi", "3188"], "Town", "Vigi", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 3188");

		e.addField("Alignment", "Town", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot (3 uses)");

		e.addField("Attributes:", "- Die if kill town.\n- Sleep N1.");

		e.addField("Goal:", "Town");
	});

	register_role(["pawn", "♟️", "3189"], "Chess", "Pawn", {subCat: "Pawn"}, (e) =>
	{
		e.setDescription("Post 3189");

		e.addField("Alignment", "Chess Pawn", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player one space away from you to occupy their house.\n- Select a player two spaces away from you to kill them.");

		e.addField("Attributes:", "- Your abilities consider your current occupied space as your spot on the playerlist, not your actual spot.\n- You learn the role of the player's house you're occupying.\n- If you reach the space on the opposite side of the playerlist, you may become any Chess (Piece) role, or the Queen (3193).");

		e.addField("Goal:", factions.Chess.goal);
	});

	register_role(["knight", "horsie", "3190"], "Chess", "Knight", {subCat: "Piece"}, (e) =>
	{
		e.setDescription("Post 3190");

		e.addField("Alignment", "Chess Piece", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player three spaces away from you to occupy their house.\n- Select a player two spaces away from you to kill them.");

		e.addField("Attributes:", "- Your abilities consider your current occupied space as your spot on the playerlist, not your actual spot.\n- You learn the role of the player's house you're occupying.");

		e.addField("Goal:", factions.Chess.goal);
	});

	register_role(["bishop", "3191"], "Chess", "Bishop", {subCat: "Piece"}, (e) =>
	{
		e.setDescription("Post 3191");

		e.addField("Alignment", "Chess Piece", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select any player on the same type (type refers to odd or even) space as you to occupy their house.\n- Attack the player on the opposite side of the playerlist. If they're on the opposite type (odd or even) of space, you'll attack the closest valid target.");

		e.addField("Attributes:", "- Your abilities consider your current occupied space as your spot on the playerlist, not your actual spot.\n- You learn the role of the player's house you're occupying.");

		e.addField("Goal:", factions.Chess.goal);
	});

	register_role(["rook", "3192"], "Chess", "Rook", {subCat: "Piece"}, (e) =>
	{
		e.setDescription("Post 3192");

		e.addField("Alignment", "Chess Piece", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to occupy their house.\n- Select a player to attack them. They must be reachable by moving in the same direction that you moved through occupying (you cannot go to 1 by going past the end and vice versa). You must have moved to occupy a player's house last night to use this.");

		e.addField("Attributes:", "- Your abilities consider your current occupied space as your spot on the playerlist, not your actual spot.\n- You learn the role of the player's house you're occupying.");

		e.addField("Goal:", factions.Chess.goal);
	});

	register_role(["queen", "3193"], "Chess", "Queen", {subCat: "Royalty"}, (e) =>
	{
		e.setDescription("Post 3193");

		e.addField("Alignment", "Unique Chess Royalty", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to occupy their house.\n- Select a player that either the Rook (3192) or Bishop (3191) would be able to attack currently.");

		e.addField("Attributes:", "- Your abilities consider your current occupied space as your spot on the playerlist, not your actual spot.\n- You learn the role of the player's house you're occupying.");

		e.addField("Goal:", factions.Chess.goal);
	});

	register_role(["king", "3194"], "Chess", "King", {subCat: "Royalty"}, (e) =>
	{
		e.setDescription("Post 3194");

		e.addField("Alignment", "Unique Chess Royalty", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to occupy their house.\n- Select a player next to your occupied space to attack them.");

		e.addField("Attributes:", "- Your abilities consider your current occupied space as your spot on the playerlist, not your actual spot.\n- You learn the role of the player's house you're occupying.\n- You always spawn with the Chess faction.\n- If you die, the Chess faction loses.\n- Every time you would be attacked, you may use your ability to move away for free. ");

		e.addField("Goal:", factions.Chess.goal);
	});

	register_role(["templar", "3195"], "Linirean", "Templar", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3195");

		e.addField("Alignment", "Linirean Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- **Arterial Strike**: Kills target in [Defense stage]# nights, unless Invincible. (None - 0/immediate, Basic - 1/next day, so on...). 2 day cooldown.");

		e.addField("Attributes:", "- You have a 40% chance to cheat death. This will lower your defense by 1. Once you have *None* defense, you cannot cheat death anymore.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["bella_swan", "bellaswan", "bella", "swan", "bs", "3196"], "Twilight", "Bella Swan", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 3196");

		e.addField("Alignment", "Twilight Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Disguise one of your Twilight members at night.");

		e.addField("Attributes:", "- Choose three roles as disguises for your targetted member.\n- If they die tonight or the next day, they will appear as the first role.\n- If they kill any player tonight, their target will appear to have been killed by the second role.\n- If they kill any player tonight, their target will appear to be the third role.\n- If the only other Twilight player alive is Edward or Jacob, you learn all players that visit them.\n- If nobody is alive, you gain Invincible Defense and may attack one person per night, dealing a Basic Attack to them.\n- Vampire Fixation: Bond with Edward if they are alive, converting another living Twilight member to a Twilight Vampire of your choice that isn’t in the game.\n- Werewolf Fixation: Bond with Jacob if they are alive, converting another living Twilight member to a Twilight Werewolf of your choice that isn’t in the game.");

		e.addField("Goal:", factions.Twilight.goal);
	});

	register_role(["edward", "3197"], "Twilight", "Edward", {subCat: "Vampire"}, (e) =>
	{
		e.setDescription("Post 3197");

		e.addField("Alignment", "Twilight Vampire", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Drain a player of blood every odd night, dealing a Basic Attack to them.");

		e.addField("Attributes:", "- All of their visitors will be blackmailed and will not receive any night notifications tonight or the next night until the night after that, in which they will receive them all at once in random order. This effect occurs even if you fail to kill your target.\n- Upon your death, unless contacted by Carlisle, you may blackmail one person every night from the dead.\n- Vampire Fixation: You may attack every night.");

		e.addField("Goal:", factions.Twilight.goal);
	});

	register_role(["jacob", "3198"], "Twilight", "Jacob", {subCat: "Werewolf"}, (e) =>
	{
		e.setDescription("Post 3198");

		e.addField("Alignment", "Twilight Werewolf", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Slaughter a player every even night, dealing a Powerful Attack to them and cleaning them.");

		e.addField("Attributes:", "- All of their visitors receive a Basic Attack but any survivors will learn your name.\n- You learn the role of any player that visits you or Bella and may deal a Basic Attack to them during the day at any time, but this can only be done once. After doing this, you will no longer learn roles.\n- Werewolf Fixation: You may attack every night.");

		e.addField("Goal:", factions.Twilight.goal);
	});

	register_role(["carlisle_cullen", "carlislecullen", "carlisle", "cullen", "cc", "3199"], "Twilight", "Carlisle Vapmire", {subCat: "Vampire"}, (e) =>
	{
		e.setDescription("Post 3199");

		e.addField("Alignment", "Twilight Vampire", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to fabricate a normal existence during the day. You may only do this once.");

		e.addField("Attributes:", "- Tonight, you will learn all roles that can get notifications tonight related to their role and decide what notifications each of them gets for their abilities. If they are a role that has multiple abilities, you can write notifications for each ability and they will get the one that matches the ability they used.\n- Vampire Fixation: You gain another charge of your ability.");

		e.addField("Goal:", factions.Twilight.goal);
	});

	register_role(["esme_cullen", "esmecullen", "esme", "cullen", "ec", "3200"], "Twilight", "Esme Cullen", {subCat: "Vampire"}, (e) =>
	{
		e.setDescription("Post 3200");

		e.addField("Alignment", "Twilight Vampire", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Contact a dead Twilight player at night.");

		e.addField("Attributes:", "- From then on, the targeted player will be able to continue to talk in the factional Twilight chat and will be able to use their ability through Esme’s body, meaning that Esme will be the one visiting.\n- If the chosen player uses their ability through Esme for the third time, Esme dies.\n- Vampire Fixation: If Esme dies while a Vampire Fixation is active, all members gain roleblock and redirect immunity along with Basic Defense.");

		e.addField("Goal:", factions.Twilight.goal);
	});
};
