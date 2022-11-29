module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["darumaka", "2451"], "Pokemon", "Darumaka", {subCat: "Base"}, (e) =>
	{
		e.setDescription("Post 2451");

		e.addField("Alignment", "Pokemon Base", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- During the day, switch between your two Pokémon Abilities. May be used alongside any other day abilities\n- **Flare Blitz** - Deal an Attack to a player. You choose the value of this attack. You will get hit back with an attack aswell depending on the value you chose. None and lower: None. Basic: Basic. Powerful: Powerful. Unstoppable:  Unstoppable. Overkill: Overkill.\n- **Focus Energy** - Day Ability. The following night, any chances of additional effects while using your abilities is tripled.\n- **Ice Punch** - Has a 10% chance of freezing target player. If it doesnt, it roleblocks target player.");

		e.addField("Abilities (cont.):", "‎- **Evolve** Evolve into Darmanitan, Galarian Darmanitan, Darmanitan Zen Mode, or Galarian Darmanitan Zen Mode.\n> You may not use this ability until you have successfully killed two players.\n> The form you will evolve into depends on the following:\n> You're holding an Icy Rock --> Galarian Darmanitan\n> You're not holding an Icy Rock --> Darmanitan\n> You're holding an Icy Rock and you had the Inner Focus Ability at the moment of the evolution --> Galarian Darmanitan Zen Mode\n> You're not holding an Icy Rock and you had the Inner Focus Ability at the moment of the evolution ---> Darmanitan Zen Mode");

		e.addField("Attributes:", "‎- Any time you successfully freeze a player, you will be given the option to hold an Icy Rock or not.");

		e.addField("Pokemon Ability:", "**Hustle** - Any of your Attacks' values are upped by 1, but you have  a 20% chance of missing them. If you miss them, you will not attack and any other role will act as if you never committed the ability in the first place.\n**Inner Focus** - Any of the additional effects while using your abilities is doubled.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["darmanitan", "2452"], "Pokemon", "Darmanitan", {subCat: "Evolved"}, (e) =>
	{
		e.setDescription("Post 2452");

		e.addField("Alignment", "Pokemon Evolved", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- **Flare Blitz** Deal an Attack to a player. You choose the value of this attack. You will get hit back with an attack aswell depending on the value you chose. Basic and lower: None. Powerful: Basic. Unstoppable: Powerful. Overkill: Unstoppable. Higher than Overkill: Overkill.\n- **Earthquake** -  Attack a target. This rampages.\n- **Rock Slide** - Attack and roleblock a target.");

		e.addField("Pokemon Ability:", "‎**Sheer Force** - When you attack, double your Attack Value.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["galarian_darmanitan", "galariandarmanitan", "galarian", "darmanitan", "gd", "2453"], "Pokemon", "Galarian Darmanitan", {subCat: "Regional"}, (e) =>
	{
		e.setDescription("Post 2453");

		e.addField("Alignment", "Pokemon Regional", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- **Icicle Crash** - Attack a player, with a 30% chance of nullifying their night ability that night.\n- **Ice Punch** - Attack a playerz with a 10% chance of Freezing (post 130 Iceberg) them.\n- **Rock Slide** Attack and roleblock a target.");

		e.addField("Pokemon Ability:", "**Gorilla Tactics** Activate this ability. 2 uses. When activated, doubles the user's attack value for two nights, but locks the user into using the same ability both nights.‎");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["darmanitan_zen_mode", "darmanitanzenmode", "darmanitan", "zen", "mode", "dzm", "2454"], "Pokemon", "Darmanitan Zen Mode", {subCat: "Evolved"}, (e) =>
	{
		e.setDescription("Post 2454");

		e.addField("Alignment", "Pokemon Evolved", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- **Flare Blitz** Deal an Attack to a player. You choose the value of this attack. You will get hit back with an attack aswell depending on the value you chose. Basic and lower: None. Powerful: Basic. Unstoppable: Powerful. Overkill: Unstoppable. Higher than Overkill: Overkill.\n- **Bulk Up** - Raise your Attack and Defense by one for tonight.\n- **Work Up** - Raise your Attack.\n- (Zen Mode) **Future Sight** - Pick a player. The night after using this ability, they are dealt an Astral Unstoppable Attack.\n- (Zen Mode) **Extrasensory Deal** an Astral Basic Attack that bypasses base defense, but not granted defense.\n- (Zen Mode) **Psywave Deal** An Astral Basic Attack that bypasses granted defense, but not base defense.");

		e.addField("Attributes:", "‎- You cannot use your Zen Mode abilities if you are not in Zen Mode. You cannot use your non-Zen Mode abilities if you are in Zen Mode.");

		e.addField("Pokemon Ability:", "**Zen Mode** After you successfully raise your attack higher than your defense by one tier twice, enter Zen Mode");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["galarian_darmanitan_zen_mode", "galariandarmanitanzenmode", "galarian", "darmanitan", "zen", "mode", "gdzm", "2454"], "Pokemon", "Galarian Darmanitan Zen Mode", {subCat: "Regional"}, (e) =>
	{
		e.setDescription("Post 2454");

		e.addField("Alignment", "Pokemon Regional", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- **Icicle Crash** - Attack a player, with a 30% chance of nullifying their night ability that night.\n- **Bulk Up** - Raise your Defense and Attack by one for tonight.\n- **Work Up** - Raise your Attack by one for the night.\n- (Normal Mode and Zen Mode) Hail Set up the hailstorm for tonight and the following night.\n- (Zen Mode) **Blizzard** - Deal an Astral Rampaging Unstoppable Attack with a 60% chance of missing. Never misses if tonight has an hailstorm.\n- (Zen Mode) **Flamethrower** Deal an Astral Powerful Attack and lower your target's Attack by one for that night.");

		e.addField("Attributes:", "- You cannot use your Zen Mode abilities if you're not in Zen Mode. You cannot use your non-Zen Mode abilities if you are not in Zen Mode. You can use Hail regardless of your Mode.");

		e.addField("Pokemon Ability:", "**Zen Mode** After you successfully raise your attack higher than your defense by one tier twice, enter Zen Mode.‎");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["vampire_hunter", "vampirehunter", "vampire", "hunter", "vh", "2455"], "Neutral", "Vampire Hunter", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2455");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Attack a player at night.");

		e.addField("Attributes:", "‎- If they are a Vampire (97), totally not a vampire (483), A Vampire Clone (484), \"Vampire\" (2456), a member of the Vampire faction, or someone who voted No on https://discord.com/channels/970041597590929519/970059778191667200/1032994976616951850 (rasen doesn't count), you will attack your target. Otherwise, you'll give them a pat on the back.");

		e.addField("Goal:", "‎Eliminate everyone you can kill.");
	});

	register_role(["\"vampire\"", "vampire", "2456"], "Neutral", "\"Vampire\"", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2456");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert a player to a random role that counts as a \"Vampire\" according to 64: Vampire Hunter each night.‎");

		e.addField("Attributes:", "‎- You count as a \"Vampire\".");

		e.addField("Goal:", "See a \"Vampire\" win the game.‎");
	});

	register_role(["nurse", "2457"], "NTF", "Nurse", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2457");

		e.addField("Alignment", "NTF Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal a player and grant them Powerful defense.\n- After participating in a secured node, during the day, select 3 players. They will be purged of all harmful effects. You may also select 1 player to gain Basic defense tonight.‎");

		e.addField("Attributes:", "‎- If you successfully save a player, you will roleblock them the next night, and redirect yourself into them.\n- If you save someone with the above attribute, it will not trigger itself.\n- Each player you save will be unable to vote you.");

		e.addField("Goal:", factions.NTF.goal);
	});

	register_role(["bishop", "2458"], "Partisan", "Bishop", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2458\n*If it is peace is what they desire, then peace is what they shall get.*");

		e.addField("Alignment", "Partisan Of The Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select two players. You may either choose to transport them, or force your first target to use their ability on their second target.‎");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["day_ritualist", "dayritualist", "day", "ritualist", "dr", "2459"], "Town", "Day Ritualist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2459");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- During the day, sacrifice a Town member to haunt another player.");

		e.addField("Attributes:", "- Sacrificing a Town member deals an Overkill attack to them and allows you to deal an Unstoppable attack to your second target.\n- If you attempt to sacrifice a non-Town member, you will sacrifice yourself instead. You may also choose to sacrifice yourself normally.\n- If you kill a Town member with your haunt, you can only sacrifice yourself for the rest of the game.\n- You cannot sacrifice someone more than one time, if you were to be made able to use your ability multiple times at once by any means.\n- You cannot keep a last will due to your practices being forbidden.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["purist", "2460"], "Neutral", "Purist", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2460\n*\"And what do you burn apart from witches?\" \"MORE WITCHES!\"*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Check someone each night.");

		e.addField("Attributes:", "‎- If your target has magical, divine, or supernatural abilities, you will attack them.\n- Nonmagical members of magic-based factions (e.g. Poisoner [85]) do not count towards your attribute or goal.");

		e.addField("Goal:", "‎Cleanse the town of magic.");
	});

	register_role(["prospector", "2461"], "Town", "Prospector", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2461");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Construct a mine during the day.\n- Collapse a constructed mine during the day. May not be used in conjunction w/ first ability.");

		e.addField("Attributes:", "- With a mine constructed, any player not roleblocked as the night began (e.g. Jailed) may choose to enter the mine during the night. This does not take up their night ability. Players who enter the mine will be given powerful defense.\n- If more than a third of living players (when the mine it was constructed, rounded up, min. 2) enter a mine throughout it's lifespan, it will collapse, dealing an unstoppable attack to everyone who entered that night, and roleblocking them past immunity.\n- You will be informed  how many players visited the active mine throughout it's lifespan at the end of every night.\n- You may only have one mine constructed at a time.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["chuunibyou", "chuuni", "2462"], "Neutral", "Chuunibyou", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2462");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Use an ability of any role with flavour text.");

		e.addField("Attributes:", "- When you use the ability of a role, the host will give you one to five Crimson Ephemeral Incantations depending on how cool and edgy the flavour is, with something super fucking awesome like 1834: Apophis's being five and something purely intended to be funny like 147: Word Bomber's being one.\n- You may only use an ability from each role once.\n- You have two Basic autovests.‎");

		e.addField("Goal:", "‎Amass 13 Crimson Ephemeral Incantations.");
	});

	register_role(["time_eater", "timeeater", "time", "eater", "te", "2463"], "Neutral", "Time Eater", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2463\n*All this accusing is making me hungry.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Select a player at night. During the following day, whenever a vote is placed for that player, the amount of time remaining until the day ends is cut in half, and everyone is notified that this occurred.");

		e.addField("Attributes:", "- Whenever a vote is placed for you, the amount of time remaining until the day ends is cut in half, and everyone is notified that this occurred.‎");

		e.addField("Goal:", "Ensure that there are at least 3 days in the game in which nobody is lynched. (Day 1 does not count toward this goal.)‎");
	});

	register_role(["libra", "2464"], "Partisan", "Libra", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2464\n*When all else ends, the light of the sun still gives hope.*");

		e.addField("Alignment", "Unique Partisan Of The Sun", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Connect with a dead player or a revived player each night. You may send them a <200 character message. This ability resolves immediately. If they are dead, they may send back a <200 character message within the same night.\n- Revive a non-Partisan player from the Graveyard at night. This resolves at the beginning of the following day, and acts like 301: Old Retri.\n- Deal a basic attack at night to any amount of players you have revived.");

		e.addField("Attributes:", "‎- You may multitask.\n- If you are alive and players you've revived are the only ones preventing a Partisan victory, an unstoppable attack will be dealt to them.\n- If no players are currently dead, attacks you make are upgraded by one tier and you gain temporary roleblock and redirect immunity when performing them. This applies to the factional kill.");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["inkay", "2465"], "Neutral", "Inkay", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2465");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Spend the night to gain the Abilities, Attributes and Pokemon Ability of a Pokemon role of your choice. You cannot evolve from Base to Evolved.");

		e.addField("Attributes:", "- You may multitask abilities from different copied roles, except when using your original ability.\n- Kills you make show up as having been caused by the role you copied.\n- Inkay is almost pronounced like NK.‎");

		e.addField("Pokemon Ability:", "**Contrary** - Roleblocks, redirects or other negative effects do not affect you and instead increase your attack and defence tiers by one for the night.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["this_guy_rn", "thisguyrn", "this", "guy", "rn", "tgr", "2466"], "Neutral", "this guy rn", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2466");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Say \"[person] rn:\" and follow up with a gif that attempts to visualize what is going on in that person's head. If they show any sign of confirming that the gif is accurate, you will earn one point towards your goal.‎");

		e.addField("Attributes:", "‎- You may only attempt your ability twice a day. You may do it more, but it won't count towards your goal.");

		e.addField("Goal:", "Get 4 people to confirm your emotion gifs.‎");
	});

	register_role(["frogvestigator", "2467"], "Town", "Frogvestigator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2467");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Check someone at night to determine if they are a frog.");

		e.addField("Attributes:", "- Frogs are people who follow a certain trait, decided by the host at the start of the game. You are not informed exactly which trait this is, but you are given a list of three possibilities at the start of the game.\n- Twice per game, you may visit two people at night instead of one.\n- Frog traits should be something general that could apply to a lot of roles. Examples include:\n> Show suspicious to a (20) Sheriff.\n> Has an even role number.\n> Has a role created by a living player.\n> Has an attack level above None.\n> Has only one ability.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["challenger", "2468"], "Any", "Challenger", (e) =>
	{
		e.setDescription("Post 2468");

		e.addField("Alignment", "Any", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform the faction action (Kill, Douse, Roleblock...)‎");

		e.addField("Attributes:", "- You will be assigned a random faction at the start of the game, Getting their goal and joining their chat.\n- If you win, You will get a @Scroll(if host agrees).\n- You may reroll out of this for free.‎");

		e.addField("Goal:", "Win with your faction.");
	});

	register_role(["lightweaver", "2469"], "Partisan", "Lightweaver", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 2469\n*The sun alone can nourish us all. There's no need for any other sustenance.*");

		e.addField("Alignment", "Partisan Of The Sun", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- At day, broadcast a light in the view of three different players. During the night, each of them can choose to reach out to the light, silently - giving no notification - roleblocking the other two targets. You can't target fellow Party members with this ability. (3 uses)");

		e.addField("Attributes:", "- If all three of your targets try reaching out, no one will be roleblocked and you can instead choose one of the three targets to deal an Unstoppable attack to during the day. You'll also be able to revive one extra person at the end of the game.\n- If none of your targets attempt to reach out, you'll hit yourself with a Basic attack and each of your targets gains a permanent Defense tier increase.\n- You have roleblock immunity.‎");

		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["belial", "2470"], "FallenAngel", "Belial", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2470");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Bring judgement down upon a player. If they've once before lied in the Day chat, related to the game or not, attack 'em.‎");

		e.addField("Attributes:", "‎- If you try bringing judgement down upon a Fallen Angel, you'll also take into account their messages in the factional chat. If you're incorrect about your judgement of a fellow Angel member, you'll deal a Piercing attack to youself.\n- You appear as another Angel role of your choosing whenever you kill someone AND in the rolecall in the factional chat where everyone's roles are revealed.\n**Sin of Truth** — If you're the last Fallen Angel remaining, your visits will start using Astral, your attack is upgraded to Overkill and you immediately attack all players who've lied at any point throughout the game, including through whispers or other game chats. Your basic ability now works in all cases, even if the target was never deceitful.");

		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["file_anarchist", "fileanarchist", "file", "anarchist", "fa", "2471"], "Unseen", "File Anarchist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2471\nConverted from: Digital Librarian (2427)");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. Learn who they targeted on every night before this one, who they will target tonight, and who they target tomorrow night.\n- After participating in a hacked node, during the day, select a player and read a book on their history, learning what roles they rerolled out of, or the lack of any if applicable.‎");

		e.addField("Attributes:", "- Your first ability does not tell you who your target is targeting tonight.\n- Your second ability will be in order, but not specify if it was a global or same-slot reroll. You also only learn roles they rerolled, not the one they kept.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["tis_jester", "tisjester", "tis", "jester", "tj", "2472"], "Coven", "TIS Jester", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2472");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Control(99) a player, May only be used if dead by lynch.‎");

		e.addField("Attributes:", "- Once lynched, the Jester will haunt one random good faction member that voted them.\n- Since you are a traitor, you cannot obtain the Necronomicon.‎");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["tis_serial_killer", "tisserialkiller", "tis", "serial", "killer", "tsk", "2473"], "Coven", "TIS Serial Killer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2473");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab a player with your knife.‎");

		e.addField("Attributes:", "- If your attack sucessfully kills your target, Your Bloodlust will make you also kill a random player visiting you or your target, Covering their will in blood.‎");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["silhouette", "2474"], "Stalker", "Silhouette", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2474");

		e.addField("Alignment", "Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Mask the true intent of one of your allies. They will gain detection immunity and can disguise themselves as any role to appear for investigative effects. The effect lasts three days.\n- Weave a path of darkness to a target's house. Those who visit Stalkers tonight will instead visit your target. (2 uses)‎");

		e.addField("Attributes:", "‎- While you're alive, all your fellow Stalkers' visits will use Astral. This won't apply to you, though.");

		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["warhorse", "2475"], "Unseen", "Warhorse", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2475\nConverted from (2189) Day Veteran");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "‎- Choose at night whether you want to go on alert the next day. (3 uses)\n- Choose at night whether you want to camp out someone's house during the day. (2 uses)");

		e.addField("Attributes:", "‎- When going on alert at your own house, you will gain Powerful defense for the night and the next day.\n- While on alert, you will instantly deal a Powerful attack to anyone who targets you with a day ability and all people who vote you.\n- Camping out someone's house will allow you to kill anyone who votes them or targets them with a day ability.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["marine", "2476"], "Unseen", "Marine", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2476\nConverted from (2202) Night Day Vigilante");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Shoot someone during the night.\n- Shoot someone during the day, but they will not appear dead until they are lynched or visited. (2 uses)");

		e.addField("Attributes:", "‎- Kills are resolved as soon as the host sees the action.\n- If the target dies at night, they may not perform their night ability.\n- Lynching a corpse will not end the day.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["instability", "2477"], "Unseen", "Instability", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2477\nConverted from (2313) Veteran't");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Choose to restrain yourself.\n- Visit a target and shoot everyone who visits them. (1 uses)");

		e.addField("Attributes:", "‎- Redirect and roleblock immune.\n- You will shoot anyone who visits you unless you restrain yourself.\n- Restraining yourself gives you one use of your second ability.\n- You may use your second ability on as many people as you have uses, and each visit costs one use. You will still shoot your own visitors and cannot restrain yourself if you visit someone else.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["pikeman", "2478"], "Unseen", "Pikeman", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2478\nConverted from (2420) Halberdier");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Block a player's house, roleblocking them and attacking one visitor at random.\n- Survey a player's house, granting them Powerful defense and seeing the roles of all people that visit.\n- Fortify a player's house, blocking all visits and killing anyone who attempts to visit.‎");

		e.addField("Attributes:", "- You cannot block players with a priority of 3 or less according to the list in <#978786268597063700>, although you will still attack them.\n- Fortifying has a 2-night cooldown.\n- You may target yourself once.‎");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["can_opener", "canopener", "can", "opener", "co", "2479"], "Town", "Can Opener", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2479");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone a can of food.\n- Open someone's can of food for them.‎");

		e.addField("Attributes:", "‎- A player with a closed can of food may choose to spend their night opening it themself.\n- Your second ability is a day ability, but it takes affect at the end of the night, and you cannot give anyone a can of food that night. Your target will know you are opening their canned food for them.\n- A player with an opened can of food may choose to consume it at any time, irrespective of whether or not they use their ability, to heal themself.\n- A player may have multiple cans.\n- You may only give yourself one can, ever. It will automatically be open.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["can't_opener", "can'topener", "cant_opener", "cantopener", "opener", "co", "o", "2480"], "Unseen", "Can't Opener", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2480\nConverted from: Can Opener (2479)");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone a can of food.\n- Give someone an empty can. 1 use.\n- Open someone's can for them.‎");

		e.addField("Attributes:", "‎- Your first and second ability are indistinguishable to a target.\n- A player with a closed can may choose to spend their night opening it themself.\n- Your third ability is a day ability, but it takes effect at the end of the night, and you cannot give anyone a can of food that night. Your target will know you are opening their can for them.\n- A player with an opened can may choose to consume it at any time, irrespective of whether or not they use their ability.  A can of food will heal them, an empty can will poison them unknowingly and not heal them.\n- A player may have multiple cans.\n- You may only give yourself one can, ever. It will automatically be open.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["absol", "2481"], "Pokemon", "Absol", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 2481\n*Absol appears to humans in an attempt to warn them of upcoming disasters or catastrophes. It was thought that Absol actually caused these disasters, and was banished from the town as a result.*");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Night Slash - Deal a Basic attack to someone. 20% chance of being an Unstoppable attack instead.\n- Future Sight - Choose up to three players. The next night, you may deal an Astral Powerful attack to one of them. (3 uses)");

		e.addField("Attributes:", "‎- Anyone initially targeted by Future Sight will be notified and be unable to perform any abilities for the next day and night out of fear.");

		e.addField("Pokemon Ability:", "**Super Luck**: You cannot be targeted by any negative RNG elements.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["leech", "2482"], "Coven", "Leech", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2482");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, someone's defense to Vulnerable for the night.‎");

		e.addField("Attributes:", "‎- If you have the Necronomicon, instead permanently set your target's defense to Super Duper Extra Vulnerable (They die if they're visited by anyone else, if they're voted for, if they're whispered to, if they visit, vote for, or whisper to anyone else, if they talk in a day chat or private chat, if they send a message in the server, or if they breathe IRL).");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["heretic", "2483"], "Hallow", "Heretic", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2483\n*Originally a member of the Partisans, the Heretic was persuaded when he met the Saint face to face. \"The sun will take it's time\", he said. \"The Paragon will bring us retribution.\"*");

		e.addField("Alignment", "Hallow Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Connect with a player each night. You may send them a <250 character message. They may send back a <250 character message within the same night. Both messages resolve immediately\n- Attempt to indoctrinate a player during the day.");

		e.addField("Attributes:", "‎- Messages you send appear to have been sent by the \"Voice of the Saint.\"\n- Players who you attempt to indoctrinate will be given a choice at night as to whether they would like to join forces with the Hallow. If they choose to deny the indoctrination, you'll be roleblocked next night. If they choose to accept, however... things get interesting. They get dealt a Powerful attack and you gain a Faith point.\n- Seems like no one would ever accept, right? But here's the catch. At the end of the game, if it ends in a Hallow victory, you can choose one non-Hallow member to revive and win with you.\n- For every 2 Faith points you accumulate, the Saint gains a Saint point. You didn't think it would be easy, did you?");

		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["the_living_manifestation_of_a_basic_attack", "thelivingmanifestationofabasicattack", "living", "manifestation", "basic", "attack", "tlmoaba", "lmba", "2484"], "Coven", "The Living Manifestation of a Basic Attack", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2484\n*Spawned as a result of a maniacal witch tampering with conceptual materialization. The only thing it knows is pain.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Visit a player at night. With the Necronomicon, you may use this ability one extra time per night.");

		e.addField("Attributes:", "‎- Every player that you visit and every player that visits you will be dealt a Basic attack.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["maniacal_witch", "maniacalwitch", "maniacal", "witch", "mw", "2485"], "Coven", "Maniacal Witch", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2485");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Tamper with conceptual materialization each night. For each ability used on you that night, you will add a new player to the game named Manifestation who you can control and who has a Coven (Evil) role called \"The Living Manifestation of a(n) [Ability]\" with the ability \"Visit a player each night.\" and the attribute \"You will use the ability you were manifested from on every player that you visit and every player that visits you.\".");

		e.addField("Attributes:", "- You know what abilities you manifest each night.\n- Manifestations can't get the Necronomicon.\n- If you have the Necronomicon, you will additionally create a Manifestation with the role 2484: The Living Manifestation of a Basic Attack each night.‎");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["pacifist", "2486"], "Town", "Pacifist", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2486\n*I think there's a more peaceful solution to our problems, is there not?*");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to pacify.‎");

		e.addField("Attributes:", "‎- All references to Warmonger should refer to Warmonger (2487).\n- Warmonger will always spawn. For all intents and purposes, you both count as one Town Power role combined.\n- You cannot target Warmonger, and they cannot target you. Your abilities will fail if one is forced to target the other. (only the one who was controlled/redirected will fail, obviously)\n- You know who the Warmonger is.\n- If the Warmonger completes their subgoal before you, or you die and they survive, you lose.\n- Pacifying a player grants them Invincible defense, purges them, but also reduces their attack value to None for that night.\n- You are notified if you stop an attack, and on who.\n- Pacified players require two extra votes to be lynched the day after they are pacified.\n- You may not self-target.\n- If you save an evil player from death, your ability will secretly fail tomorrow night.");

		e.addField("Goal:", "Lynch every criminal and evildoer, while also saving two good players from death.");
	});

	register_role(["warmonger", "2487"], "Town", "Warmonger", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2487\n*Let's face it. We can't save them, so why not just end them now?*");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Destroy a player at night.");

		e.addField("Attributes:", "‎- All references to Pacifist should refer to Pacifist (2486).\n- Pacifist will always spawn. For all intents and purposes, you both count as one Town Power role combined.\n- You cannot target Pacifist, and they cannot target you. Your abilities will fail if one is forced to target the other. (only the one who was controlled/redirected will fail, obviously)\n- You know who the Pacifist is.\n- If the Pacifist completes their subgoal before you, or you die and they survive, you lose.\n- Destroying a player will attack them, and hide their will. Their role is still revealed.\n- If you kill a good player, your ability will fail the next night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["kraken", "2488"], "Neutral", "Kraken", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2488");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Use each of your eight tentacles each night.");

		e.addField("Attributes:", "‎- Each tentacle targets individually.\n- Using one tentacle on someone will use a (54) Tracker ability on them.\n- Using two tentacles on someone will roleblock them.\n- Using three tentacles on someone will blackmail them.\n- Using four tentacles on someone will redirect them to a player of your choice.\n- Using six tentacles on someone will deal a Powerful attack to them.\n- Using eight tentacles on someone will deal a Powerful attack to them and prevent anyone from visiting your target.\n- Using two tentacles on yourself will grant yourself Powerful defense and Roleblock immunity this night.\n- Redirect immune\n- Anyone who refers to this role as an octopus gets the Banned role.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["the_contractor", "thecontractor", "contractor", "tc", "c", "2489"], "Any", "The Contractor", (e) =>
	{
		e.setDescription("Post 2489");

		e.addField("Alignment", "Unique Contract Hired", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- At night, visit a player. If they are a target as authorized by your contract, you will attack them. Otherwise, you will not do anything except visit astrally.");

		e.addField("Attributes:", "‎- May only spawn in a contract game.\n- Alignment predetermined by host.\n- If you fulfill your contract, then the game ends with your faction's victory.\n- At the start fo the game, you recieve 3 names, one of them being a member of a target evil faction.");

		e.addField("Goal:", "Fulfill your contract.");
	});

	register_role(["nabbit", "2490"], "Koopa", "Nabbit", {subCat: "All-rounder"}, (e) =>
	{
		e.setDescription("Post 2490");

		e.addField("Alignment", "Koopa All-rounder", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Roleblock a Target, If successful, Gain a 1-use copy of the ability they were using.");

		e.addField("Attributes:", "‎- Yoy may multitask.\n- You may only use Abilities that can kill if you are the Factional attacker.\n- You copy the role's Attack and Defense values when using the ability.");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["necronomaster", "2491"], "Coven", "Necronomaster", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2491");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Enchant a Coven member, They will be under the effect of the Necronomicon tonight.\n- If you have the real Necronomicon, You may permanently consume it to convert a player into a random Coven role.‎");

		e.addField("Attributes:", "‎- While you are alive, You may swap the Necronomicon around players at any given time.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["eye_believer", "eyebeliever", "eye", "believer", "eb", "2492"], "Coven", "Eye Believer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2492\n*Long ago, one cultist made a contract with an all-seeing entity, exchanging total devotion for unprecedented power.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transmute someone each night, turning them into a last will and not a player.");

		e.addField("Attributes:", "- Last wills you transmute will appear in the graveyard as their last wills. However, their roles will not be revealed.\n- Last wills you transmute can still edit themselves at any time. They may also be allowed to talk in day chat as if each message they sent was an edit to their last will if they change their name to \"[name]'s Updated Will\".\n- Last wills you transmute can still win with their factions in game end states as if they were players.\n- If you have the Necronomicon, you may also multitask 319: Firefly's ability each night without its Necronomicon buff.‎");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["bastion", "2493"], "Town", "Bastion", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2493");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Each night, choose a player. You will roleblock them, learn their role, and then attack them.");

		e.addField("Attributes:", "‎- Roleblock Immune\n- At least 3 votes are always required to lynch you.\n- The game can't enter a game end state due to no players who would oppose each other being alive.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["cannoneer", "2494"], "Crew", "Cannoneer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2494\n*Big gun for big success.*");

		e.addField("Alignment", "Crew Killing", true);
		e.addField("Attack", "Basic (Overkill)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Shoot someone with your flintlock, dealing a Basic attack.\n- Fire your cannon at someone. If their defense is above None, deal an Overkill attack to them. Otherwise, does nothing. (3 Uses)");

		e.addField("Attributes:", "- You may not fire your cannon two nights in a row.\n- Your cannon is Astral.\n- Defense granted by external sources, such as granted by Town (Protectives), counts as defense. Autovests will also count as defense.\n- You keep your second ability if you are promoted.‎");

		e.addField("Goal:", factions.Crew.goal);
	});
	
	//Credit: Vikuale2
	
	register_role(["japan", "jp", "🇯🇵", "japanese", "2495"], "Civilization", "Japan", {subCat: "Militaristic", censor: ""}, (e) =>
	{
		e.setDescription("Post 2495");

		e.addField("Alignment", "Unique Civilization Militaristic", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic (Invincible)", true);

		e.addField("Abilities:", "-Perform the Factional Kill\n- Prepare a Counterattack for the night (Costs 5 Gold)‎");

		e.addField("Attributes:", "- While preparing a Counterattack, you gain Invincible Defense and will attack anyone who attacks you with a Powerful Attack.\n- If you are fatally attacked during the night, you will instead die at the end of the next night and trigger Counterattack for free that night.\n- The cause of death will be obfuscated if you die from a nightkill.‎");
		
		e.addField("Messages:", "“They were killed by a Japanese Samurai.” (Factional or Counterattack kill)\n“They were killed in Japan’s last stand!” (Kill while fatally wounded)\n“They finally died from a mortal wound.” (On death by delayed nightkill)");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["emperor", "2496"], "Metamorph", "Emperor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2496");

		e.addField("Alignment", "Metamorph Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night. You will also numb the target and anyone they attempted to visit that night, roleblocking them tonight and the next night.\n- Swap roles with a player at night, with the exception of faction and goal staying the same. This happens after all other actions resolve that night. You cannot use this on the same night as another ability.‎");

		e.addField("Attributes:", "‎- Numbing does not penetrate roleblock immunity.\n- You will be aware of who you attempt to numb.\n- Metamorph-aligned players are immune to your numbing.\n- If you are alive and Metamorph-aligned in a Metamorph victory, that victory is nullified and the Good faction wins instead.");

		e.addField("Goal:", factions.Metamorph.goal);
	});

	register_role(["network_specialist", "networkspecialist", "ns", "2497"], "NETSEC", "Network Specialist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2497");

		e.addField("Alignment", "NETSEC Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Hacking Skill:", "‎Low");

		e.addField("Abilities:", "- During the day, you may attempt to hack a node. The chance of success is increased depending on how many people attempt to hack the node.\n- During the day, you may probe a node, making it easier to hack.\n- (3-shot) Review a player’s connections. You will see who they visited and who visited them the previous night.\n- (2-shot) Cover your tracks during the night, giving yourself Powerful Defense.‎");

		e.addField("Attributes:", "‎- You are roleblock-immune while covering your tracks.\n- If at least two other players are trying to connect to the same node as you, your Hacking Skill increases to Average for that hack.");

		e.addField("Goal:", factions.NETSEC.goal);
	});

	register_role(["guzzlord", "aaaaaaaa", "2498"], "Pokemon", "Guzzlord", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 2498\n*It has gobbled mountains and swallowed whole buildings, according to reports. It's one of the Ultra Beasts.*");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Dragon Rush: Deal a Basic attack to a player and roleblock them.\n- Giga Impact: Deal a Powerful rampaging attack to a player. You may not use abilities the night after using this.\n- Belch (**Locked**): Deal a Powerful attack to a player and Unstoppably poison them.");

		e.addField("Attributes:", "‎- **Unlock Condition**: If you survive an attack, Unlock.");

		e.addField("Pokemon Ability:", "- Beast Boost: Whenever you kill a player, your defense permanently increases by a stage. If it's Overprotective or higher, instead all of your attack values permanently increase by a stage.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["artisan", "2499"], "Town", "Artisan", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2499\n*I have no **time** for this nonsense! I've got deadlines to meet! Where's that shipment when you need it...*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place down any of your **c**o**n**t**r**a**p**t**i**o**n**s. You can use this ability multiple times per night as long as you have enough **c**o**n**t**r**a**p**t**i**o**n**s.\n— Each of your **c**o**n**t**r**a**p**t**i**o**n**s can only be used so many times before they break down. In other words, one use of a **c**o**n**t**r**a**p**t**i**o**n** will only function for a certain amount of visits. Each **c**o**n**t**r**a**p**t**i**o**n** can break down in the middle of the night, and visits after it breaks down will not apply. Visits in the same night will take whoever has the highest priority first. If any visitors have the same priority, randomize the order.‎");

		e.addField("Net of Entrapment:", "‎- Place the net between two players with adjacent houses. Any who visit the first target will instead visit the second and vice versa.\n> - No one is notified they were affected by this ability.\n> - The net will still take effect if one of the players dies, their visitors would just be redirected to a corpse.\n> - Affects the first three visits of either target before it breaks down.");

		e.addField("Wooden Statuettes:", "‎- Litter wooden statuettes in front of a target's house.\n> - If two or more people visit someone with wooden statuettes, the target will be protected with Basic defense.\n> - Gives no notification for the visitors, but the target will be aware someone protected them if they were attacked.\n> - Affects the first eight total visits of the target before all statuettes are used. The visits do not necessarily need to have triggered the defense.");

		e.addField("Blockade:", "- Place the blockade in front of someone's house. Anyone who visits them will have their visit prevented.\n> - Gives a standard \"visit prevented\" message as feedback.\n> - Affects the first two visits of the target before it breaks down.‎");

		e.addField("Attributes:", "- Whenever a player dies, you will collect some resources from their corpse. Depending on their actions during the game, you'll get a different resources.\n> - If they were a Town role which never visited a player, gain two `wood`.\n> - If they were a Town role which visited more Town players than non-Towns, gain two `stone`.\n> - If they were a Town role which visited less Town players than non-Towns, or an equal amount of both, gain two `steel`.\n> - If they were a non-Town role, gain one `antimatter`.‎");

		e.addField("Attributes (cont.):", "- At any time, you may use a combination of your current materials to craft a **c**o**n**t**r**a**p**t**i**o**n**. Doing so will consume the materials you used.\n> - Combine one `wood` with one `steel` to gain a __Net of Entrapment__.\n> - Combine one `steel` with one `stone` to gain a __Blockade__.\n> - Combine one `wood` with one `stone` to gain __Wooden Statuettes__.\n> - `Antimatter` can substitute __any__ material in the formulas above.\n> - Combine two `antimatter` to get one of each **c**o**n**t**r**a**p**t**i**o**n**. \n- If your role gains **P** at the start of it's name by any means, your goal will be changed to that of the Partisans.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ianist", "2500"], "Neutral", "Ianist", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2500\n*I'm not a fucking penis!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Put a P at the start of another player's role's name each night.‎");

		e.addField("Goal:", "‎Live to see at least two players whose roles start with P win the game.");
	});
};
