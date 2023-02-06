//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["dimentio", "3051"], "Neutral", "Dimentio", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3051\n*And now it's- Jd why are you wearing that again?*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful/Vulnerable", true);

		e.addField("Abilities:", "- You may cast a minor illusion to make something appear to happen, but it's going to be revealed on day end, meaning that it doesn't count.");

		e.addField("Attributes:", "- If this spawns, the REF is forcespawned to be Koopa.\n- At the start of the game, You will appear to be a koopa role that may disguise itself as town. you will know which koopa role your disguise is.\n- Once half the town is dead, it is announced that the show will begin momentarily.\n- If the Koopa head is the last Koopa left standing, automatically deal an overkill attack to that old buffon.\n- You have the abilities and attributes of a koopa Hypnotist, Blackmailer, Consort, and Godfather combined.\n- Once 4 other town remains, your defense drops to vulnerable, and, if at least two Koopas are still alive, the Koopas join the town, and obtain the wincon of \"Lynch every criminal and evildoer.\"\n- You are roleblock, control and detection immune.\n- Bionic approves of this role!");

		e.addField("Goal:", "Unleash the power of the chaos heart.");
	});
	
	register_role(["hand_fake", "handfake", "hf", "3052"], "Koopa", "Handfake", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3052\n*A creature shaped as a hand but made of black ooze, it holds signs with pictures of various enemies on them.*");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hold a Goomba sign, you can choose an ememy to frame as a random Koopa role.\n- Hold a Parakoopa sign, twirl it to redirect all of your target's visitors into a random non-Koopa player.\n- Hold a Bob-omb sign, choose a target, if they are killed, Deal an Unstoppable attack to a random player who killed them.\n- Hold a Bowser sign, You will allow all Koopas to talk in the faction chat until the end of the next night.");

		e.addField("Attributes:", "- All your abilities have 1 use, once per game you will get an extra use of all abilities if you used them all.\n- All twirled players are redirected to different targets.");

		e.addField("Goal:", factions.Koopa.goal);
	});
	
	register_role(["two_selfish_assholes", "twoselfishassholes", "selfish_assholes", "selfishassholes", "tsa", "3053"], "Neutral", "Two Selfish Assholes", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3053\n*Hey, my name's Kyle, and his name's Richard, and we're narcissistic pieces of shit.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Overprotective 2x!)", true);

		e.addField("Abilities:", "- Steal someone’s ability, as every good thing should only happen to you.\n- Put someone down at night, granting you Powerful defense for the night and roleblocking them.");

		e.addField("Attributes:", "- You may use two abilities each night. You may use the same ability twice.\n- You have two Overprotective autovests.\n- You can’t take abilities that copy other abilities, or kill, because you’re narcissists, not murderers.\n- If a person only has the ability to kill, learn their role instead. Cannot be fooled by frames hexes douses and other sorts of investigative changes.\n- The town will receive an announcement on Day 2.5 (12 hours after Day 2 starts, or the end of Day 2, whichever comes first) that “Two fucktards are shouting that they're the kings”\n- On Day 2.5 you will receive death immunity.\n- Town has 1.5 days to win before your egos grow too much, allowing you to overpower anyone with your pointless stories about how great you are.\n- The only way for you to lose is if at least 1.5 town members visit you.\n- All evils will be notified of who you are, and if you die all of them lose and die because they’re your homies who put you up.");

		e.addField("Goal:", "Make town lose because they hate you even though you did *nothing* wrong.");
	});
	
	register_role(["roles_thats_fun_to_play_against", "rolethatsfuntoplayagainst", "rtftpa", "3054"], "Neutral", "Role That's Fun To Play Against", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3054\n*They said it was impossible*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Host a party.-Select a party game and one target.\n- Make someone do a dare.\n- Make someone tell a truth.");

		e.addField("Attributes:", "- Hosting a party will make all visits against you fail. People visiting you will be notified that they joined a party instead.\n- You and your selected target will play a party game of your choice. Whoever wins will have their defense upgraded by one tier permanently. Your target will not be able to do their normal night ability that night.\n- Dare someone to do something. They must do the dare by the end of the next night or they are modkilled. This dare must be possible by everyone.\n- Make someone tell a truth of your choice the next day. They must say it in the public day chat otherwise they are modkilled.\n- JD specifically cannot Rule 17 this role. They could theoretically break this rule, but it would count as a host error.");

		e.addField("Goal:", "Have one person that you targeted say they had fun during the day.");
	});

	register_role(["the_chef", "thechef", "chef", "3055"], "Clocktower", "The Chef", {subCat: "Clocktower Investigative"}, (e) =>
	{
		e.setDescription("Post 3055");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, you learn how many pairs of evil players their are.");

		e.addField("Attributes:", "- Pairs are players next to each other.\n-Dead players do not count towards your ability.");

		e.addField("Goal:", factions.Clocktower.goal);
	});

	register_role(["the_empath", "theempath", "empath", "3056"], "Clocktower", "The Empath", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3056");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You start knowing how many players next to you are evil. ");

		e.addField("Attributes:", "- When both of the players next to you die, you receive new information. This continues with the information you receive.\n- Evil is considered anybody who does not win with the clocktower.");

		e.addField("Goal:", factions.Clocktower.goal);
	});

	register_role(["the_fortune_teller", "thefortuneteller", "fortune_teller", "fortuneteller", "tft", "ft", "3057"], "Clocktower", "The Fortune Teller", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3057");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose two players: you learn if either player is evil.");

		e.addField("Attributes:", "- A randomly chosen good player shows as evil to you. \n- Evil is considered anybody who does not win with the clocktower");

		e.addField("Goal:", factions.Clocktower.goal);
	});

	register_role(["the_monk", "themonk", "monk", "3058"], "Clocktower", "The Monk", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3058");

		e.addField("Alignment", "Clocktower Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, give one person death immunity.");

		e.addField("Goal:", factions.Clocktower.goal);
	});

	register_role(["the_town_crier", "thetowncrier", "town_crier", "towncrier", "ttc", "tc", "3059"], "Clocktower", "The Town Crier", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3059");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, you learn if the demon voted today.");

		e.addField("Goal:", factions.Clocktower.goal);
	});

	register_role(["the_philosopher", "thephilosopher", "philosopher", "3060"], "Clocktower", "The Philosopher", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3060");

		e.addField("Alignment", "Clocktower Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, at night, choose a Clocktower role: Gain that role's abilities. If that role is currently in play, they receive false information.");

		e.addField("Goal:", factions.Clocktower.goal);
	});

	register_role(["vampire_hunter_hunter", "vampirehunterhunter", "vhh", "3061"], "Neutral", "Vampire Hunter Hunter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3061\n*But I like conversion roles!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check if someone is a “Vampire Hunter”.");

		e.addField("Attributes:", "- A “Vampire Hunter” role counts as a role that targets conversion roles specifically.\n- You count as a Vampire to “Vampire Hunter” roles.\n- This role can’t spawn unless a “Vampire Hunter” role does.");

		e.addField("Goal:", "Kill all “Vampire Hunters”.");
	});

	register_role(["the_sage", "thesage", "sage", "3062"], "Clocktower", "The Sage", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3062");

		e.addField("Alignment", "Clocktower Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- If the demon kills you, you learn that it is 1 of 3 players not mechanically-confirmable players.");

		e.addField("Attributes:", "- If you are attacked by the demon, you will die, regardless of your defense level.");

		e.addField("Goal:", factions.Clocktower.goal);
	});

	register_role(["the_seamstress", "theseamstress", "seamstress", "3063"], "Clocktower", "The Seamstress", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3063");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "-  Each night, choose two players: You learn if they are the same alignment.");

		e.addField("Attributes:", "- The \"same alignment\" refers to the same faction, NE's are paired with all evils, NC's are paired with all evils, NB's are paired with everyone.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["the_savant", "thesavant", "savant", "3064"], "Clocktower", "The Savant", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3064");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each day, you may visit the host. You will learn two things, one is true, one is false.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["traveling_circus", "travelling_circus", "travelingcircus", "travellingcircus", "traveling", "travelling", "circus", "tc", "whylunariwhy", "3065"], "Town", "Traveling Circus", {subCat: "PaleMoonCircus"}, (e) =>
	{
		e.setDescription("Post 3065");

		e.addField("Alignment", "Town Pale Moon Circus", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Invite players to your show.\n- Destroy a player's home for space for your circus.\n- Destroy a player for your circus. Only usable when the show begins.");

		e.addField("Attributes:", "- Your show begins Day 5. All players you invited are roleblocked that night.\n- Destroying a player's house forces them to select another player. That player may choose to accept or decline their request. If they decline, the first player must choose a different player, but if they accept, the first player moves into the second player's house. The first player is no longer a valid target to visit (but they can still be voted, and this is public), and all visits to the second player also apply to the first player. The person that the first player moved into with isn't public.\n- If you have a problem with the subalignment being so long, don't name your factions so long.\n\"*Put it in the bot as (town pale moon circus) (yes pale moon circus is the full subalignment) (cope)\"* That would be really long though, so it's in the attributes now.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["keke", "3066"], "Neutral", "Keke", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3066\n*is U*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose two roles, and choose one word from each of them to swap around with each other.");

		e.addField("Attributes:", "- The ability will fail if you choose a role not in game.\n- The people you switch will be rapped.\n- If the person’s new role rules are deemed “incomprehensible”, the ability fails, unless you explain what it means and the host agrees to it.\n- You must choose if WIN is to see town win, see an Evil Faction win, or have NK goal before the game begins. If you don't, one is randomly chosen.");

		e.addField("Goal:", "WIN");
	});
	
	register_role(["light_side", "lightside", "ls", "whylunariwhy", "thisonesokaythoughbecauseitofferscookies", "3067"], "Town", "Light Side", {subCat: "Sith"}, (e) =>
	{
		e.setDescription("Post 3067\n*Join the Light Side, we have cookies!*");

		e.addField("Alignment", "Town Sith", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select two players. One will be used as trust, one will be converted to the Town. 2 uses, only one convertee can be active.");

		e.addField("Attributes:", "- Your first target **must** be Town. If they aren't, you die and your will is wiped.\n- Your second target will gain the Town win condition until you die, even if they're already Town.\n- If your convertee dies to their original faction, you and your active first target die.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["the_ravenkeeper", "theravenkeeper", "ravenkeeper", "trk", "rk", "3068"], "Clocktower", "The Ravenkeeper", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3068");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- If you die, choose somebody; learn their role.");

		e.addField("Attributes:", "- For the purpose of this role, lynching does not count as death.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["inside_agent", "insideagent", "agent", "ia", "whylunariwhy", "3069"], "Town", "Inside Agent", {subCat: "Insurgency"}, (e) =>
	{
		e.setDescription("Post 3069\n*Never trust anyone. Including yourself. Especially yourself.*");

		e.addField("Alignment", "Town Insurgency", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Appear friendly to a player. They will receive a false notification that you are winning with them. You may optionally select a role that might have created this message. You may choose to create a private chat with them. 2 uses.\n- Learn a player's true role.\n- Stab a player during the day. You may only stab an unfriendly player once.");

		e.addField("Attributes:", "- You may not keep a last will.\n- You may disguise/hide your kills' cause of death. You may also choose whether it resolves immediately or at the end of the day.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["internal_investigator", "internalinvestigator", "investigator", "ii", "whylunariwhy", "3070"], "Town", "Internal Investigator", {subCat: "Loyalist"}, (e) =>
	{
		e.setDescription("Post 3070\n*A fragmented town is a bad town. We should be more like the Mafia.*");

		e.addField("Alignment", "Town Loyalist", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Receive a random clue to someone's role.\n- Attempt to guess a player's role at any time. You may only input Town roles. The first time you're wrong, your abilities are locked until the next day. The second time you're wrong, you permanently lose all your abilities.");

		e.addField("Attributes:", "- The possible hints you may receive are:\n> \\* Role name's first letter\n> \\* Role's subalignment\n> \\* Numbers in the thousandth and hundredth places (example: 2974 will give 29XX as feedback) [Cannot be given as feedback when targeting Mainframe and Android players.]\n> \\* Amount of letters in the name\n- You and your target are both notified you correctly guessed them. They learn your identity.\n- You are immune to all effects that would make you believe a player is a role that isn't their own.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["copperwire", "cw", "3071"], "Thundercry", "Copperwire", {subCat: "Onslaught"}, (e) =>
	{
		e.setDescription("Post 3071\n*The rusted clangor serves as a warning; stay home.*");

		e.addField("Alignment", "Thundercry Onslaught", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Consume any amount of players' Strikes tonight, and select a player to attack for each Strike consumed. If you used at least four, you'll raise your attack by a tier permanently, roleblock your targets and fail the visits of those who would attempt to visit you tonight.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- Whenever you're visited by a non-Thundercry, generate an extra Strike.\n- If two or more Striked players are alive, you gain Basic defense.");

		e.addField("Goal:", factions.Thundercry.goal);
	});
	
	register_role(["highly_anomalous_entity", "highlyanomalousentity", "anomalousentity", "anomalous", "entity", "hae", "whylunariwhy", "jdinshamles-2", "3072"], "Town", "Highly Anamlous Entity", {subCat: "SCP"}, (e) =>
	{
		e.setDescription("Post 3072\n*[REDACTED]*");

		e.addField("Alignment", "Town SCP", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. One of various effects may happen to them.");

		e.addField("Attributes:", "- The possible effects are:\n> \\* Being removed from the game and being readded the next day\n> \\* Becoming unvisitable for one night\n> \\* Dying\n> \\* Requiring two extra votes to be lynched the next day\n> \\* Roleblocked\n> \\* All abilities permanently delayed by one night\n> \\* Healed and purged\n> \\* Receives a random notification from any role capable of giving one\n- This role should also have the alias of =jdinshamblesrn-2. (I took this literally :D)");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["compass", "🧭", "3073"], "Town", "Compass", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3073\n*DISCLAIMER: Will not lead you to any bitches*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, learn who a redirected player visited last night.\n- During the night, redirect a player to a random target. (3 uses)");

		e.addField("Attributes:", "- You will learn everyone who was redirected/controlled last night.\n- Roleblock immunity when redirecting a player.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["qwilfish", "3074"], "Pokemon", "Qwilfish", {subCat: "Base"}, (e) =>
	{
		e.setDescription("Post 3074\n*It's gonna poke ya, mon.*");

		e.addField("Alignment", "Pokemon Base", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tackle: Roleblock a player and learn who they attempted to visit last night. (∞ uses)\n- Harden: Select a player non-Poke player, and roleblock all their visitors tonight. (2 uses)");

		e.addField("Attributes:", "- Pokemembers are immune to being affected by your abilities or attributes.\n- Regional Evolve: Upon roleblocking three people, you'll evolve into **Overqwil** (3075). You'll also evolve immediately if you ever roleblock someone who attempted to visit a fellow Pokemember.");

		e.addField("Pokemon Ability:", "- Poison Point: If killed at night, poison your killer. They will be dealt a Powerful attack at the end of the next night unless healed. ");

		e.addField("Goal:", factions.Pokemon.goal);
	});
	
	register_role(["overqwil", "3075"], "Pokemon", "Overqwil", {subCat: "Regional"}, (e) =>
	{
		e.setDescription("Post 3075\n*Now it's gonna do a lot more than poke ya.*");

		e.addField("Alignment", "Pokemon Regional", true);
		e.addField("Attack", "Basic (Overqwil)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Poison Sting: Sting a player, poisoning them. They'll be dealt a Basic attack at the end of the next night unless healed. (∞ uses, one night cooldown)\n- Barb Barrage: Poison all players that visit any Pokemember besides you tonight. (1 use)");

		e.addField("Attributes:", "- Pokemembers are immune to being affected by your abilities or attributes.");

		e.addField("Pokemon Ability:", "- Poison Point: If killed at night, poison everyone that visited you, including Astral visitors. If you're lynched, poison two non-Pokemon who voted you. This poison deals an Overqwil attack and cannot be healed.");

		e.addField("Goal:", factions.Pokemon.goal);
	});
	
	register_role(["nakama_beekeeper", "nakamabeekeeper", "nakama", "crewbeekeeper", "soontobebzzzzking", "beekeeper", "nbk", "3076"], "Crew", "Nakama Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3076\n*I'm the man... who will become the bzzzz king!*");

		e.addField("Alignment", "Crew Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, use 1 bee to prevent a player from taking game actions for the rest of the phase.\n- During the day, use 2 bees to choose two players and deal a Basic attack to a random one.\n- During the day, use 3 bees to force all players who haven't voted yet to vote for a player of your choice. You may only use this ability after at least one non-Crew player has voted.");

		e.addField("Attributes:", "- You will earn 1 bee every day. You can use 2 abilities per day.");

		e.addField("Goal:", factions.Crew.goal);
	});
	
	register_role(["the_oracle", "theoracle", "oracle", "3077"], "Clocktower", "The Oracle", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3077");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, learn how many dead players are evil.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["sporebound", "spores", "sb", "3078"], "Neutral", "Sporebound", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3078\n*Everyone other than me will hate it... 'til I'm everyone other than me.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Infect someone with your touch each night, afflicting the `Spores` status. The status is considered a positive effect for mechanical reasons.");

		e.addField("Attributes:", "- Anyone that visits or is visited by a player with `Spores` will be afflicted with the `Spores` status as well.\n- If a player with `Spores` gets the status again, they will ascend a stage in their consumption. The effects of previous stages are retained upon progression.\n- Stages of Consumption:\n> Stage 1: No effects. This is stage people start on when infected. \n> Stage 2: Players in this stage will secretly require one less vote to be lynched. A minimum of 1 vote will always be required to lynch someone.\n> Stage 3: Upon reaching this stage, the player will be informed they're feeling shroomy, and their two closest living neighbors will be afflicted with `Spores`.\n> Stage 4: You may infect an extra player each night for every three players that reach this stage.\n> Stage 5: Players in this stage will require less votes to be lynched, equivalent to the amount of players in this stage.");

		e.addField("Attributes (cont.):", "- You have a list of who is infected with `Spores` and what stage of consumption they're on.\n- You are roleblock and redirect immune to players in Stage 2 and up.\n- You appear as a role of your choice to players in Stage 3 and up, and they also cannot remove `Spores` from players by any means.\n- You are impervious to attacks from players in Stage 4 and up.\n- You are immune to votes from players in Stage 5.\n- You may be afflicted by `Spores`, but are immune to its hampering effects. If this is the case, you would simply afflict the status twice when using your ability.");

		e.addField("Goal:", "Shroom all who would oppose you.");
	});
		
	register_role(["the_undertaker", "theundertaker", "undertaker", "tut", "3079"], "Clocktower", "The Undertaker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3079");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true); 

		e.addField("Attributes:", "- You learn the role of whoever was lynched last day.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
		
	register_role(["the_virgin", "thevirgin", "virgin", "3080"], "Clocktower", "The Virgin", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3080");

		e.addField("Alignment", "Clocktower Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- The first time you are voted by a townsfolk, they are instantly executed.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
		
	register_role(["the_slayer", "theslayer", "slayer", "3081"], "Clocktower", "The Slayer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3081");

		e.addField("Alignment", "Clocktower Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, you may publicly say you are shooting (). If they are evil, they die.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
		
	register_role(["the_gossip", "thegossip", "gossip", "3082"], "Clocktower", "The Gossip", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3082");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each day, make a public statement. If it's true, a random player dies. The statement must be in the form of \"I gossip that \\_\\_\".");

		e.addField("Attributes:", "- The attack is Astral.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["godfather", "3083"], "Mafia", "Godfather", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 3083");

		e.addField("Alignment", "Mafia Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Send your goon to perform the factional Mafia kill.");

		e.addField("Attributes:", "- When having your goon perform the factional Mafia kill, all effects that would apply to you from visiting and killing your target will instead apply to your goon. (A Lookout will see a goon visit, and your goon will die to rampages instead of you).\n- If your goon dies, you do not get a replacement. You are notified if your goon dies.\n- Your goon has a Basic autovest.");

		e.addField("Goal:", factions.Mafia.goal);
	});
	
	register_role(["godfather", "3084"], "Mafia", "The Fodgather", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 3084");

		e.addField("Alignment", "Head Mafia", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- If a mafia killing exists, they will do your attribute for you.\n- You appear innocent to investigative roles.");

		e.addField("Attributes:", "- Use the factional kill on a player.");

		e.addField("Goal:", "Submit anyone that will not kill to the Mafia.");
	});
	
	register_role(["astray", "3085"], "Thundercry", "Astray", {subCat: "Onslaught"}, (e) =>
	{
		e.setDescription("Post 3085\n*But I'll lead you.*");

		e.addField("Alignment", "Thundercry Onslaught", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Scatter starwind across the Town. Tonight, all Striked players will be redirected to all other Striked players.\n- Call upon stellar retribution, attacking anyone who visits any Striked player tonight. You'll attack people multiple times if they visit multiple Striked players. (2 night cooldown)\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- If you would attack the same person multiple times in a night, you'll add the previous attack's tier to your current one, which may stack.\n- Whenever a Thundercry member besides you dies, generate a Strike. If they're killed by you, generate two.\n- If two or more Striked players are alive, gain Basic defense. If there are three or more, you may multitask.");

		e.addField("Goal:", factions.Thundercry.goal);
	});
	
	register_role(["battleship", "3086"], "Neutral", "Battleship", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3086\n*Do you know how hard this is to recreate without just saying \"two people play, one dies\"?*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Challenge someone each night to a game of Battleship.");

		e.addField("Attributes:", "- A channel is created that only the host and the challenged may type in. Both players will secretly place five ships on their own 10x10 board: a Carrier 5 pegs long, a Battleship 4, a Cruiser 3, a Submarine 3, and a Destroyer 2. Ships cannot overlap or extend off of the board, however they can touch each other (unlike some modern versions of the game.)\n- During the next day, each player takes turns firing a salvo of rounds. You fire 5 rounds per salvo, the challenged only fires 3. Every shot must target a specific square on the coordinate plane (A1-J10). After each salvo is fired, it is revealed in the channel what shots were fired, and which ones were hits and misses. You always go first, and each player has 5 salvoes to sink as many ships as they can.");

		e.addField("Attributes (cont.):", "- For the challenged player, each ship has to represent a living player. Whenever you sink a ship, whoever is linked to that ship dies. If you hit but don’t sink a ship, whoever is linked to that ship cannot perform any abilities the next night. You will learn if the challenged player selects you and where your location is. Players can select themselves to link themselves to ships.\n- If the opponent sinks any of your ships, you cannot use that ship in future battles. If the opponent sinks all of your ships, you die.\n- If the game is incomplete by the end of the day, you may instead fire three Powerful attacks at living players.\n- If you challenge a player who dies the same night, they will still play when they are dead. However, they will call out their shots from their private channel instead of typing in the main channel.\n- If the target cannot select 5 targets, there will only be as many enemy ships as there are living players.\n- Challenging is Astral.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
	
	register_role(["the_same_exact_role_except_it_now_has_invincible_defense_for_some_reason", "thesameexactroleexceptitnowhasinvincibledefenseforsomereason", "tsereinhidfsr", "3087"], "Other", "the same exact role except it now has Invincible defense for some reason", (e) =>
	{
		e.setDescription("Post 3087");

		e.addField("Alignment", "Variable", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Variable");

		e.addField("Attributes:", "- You're the exact same as a random role except it now has Invincible defense for some reason\n- This is a Squidly role unless they specify otherwise.\n*\"HUH\"* - Squidly");

		e.addField("Goal:", "Variable");
	});

	register_role(["the_same_exact_role_except_it_now_has_vulnerable_defense_for_some_reason", "thesameexactroleexceptitnowhasvulnerabledefenseforsomereason", "tsereinhvdfsr", "3088"], "Other", "the same exact role except it now has vulnerable defense for some reason", (e) =>
	{
		e.setDescription("Post 3088");

		e.addField("Alignment", "Variable", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Variable");

		e.addField("Attributes:", "- You're the exact same as a random role except it now has vulnerable defense for some reason\n- This is not a Squidly role.");

		e.addField("Goal:", "Variable");
	});

	register_role(["the_same_exact_role_except_it_now_has_no_defense_for_some_reason", "thesameexactroleexceptitnowhasnodefenseforsomereason", "tsereinhndfsr", "3089"], "Other", "The Same Exact Role Except It Now Has No Defense For Some Reason", (e) =>
	{
		e.setDescription("Post 3089");

		e.addField("Alignment", "Variable", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Variable");

		e.addField("Attributes:", "- You're the exact same as a random role except it now has vulnerable defense for some reason\n- This has a 50% chance to be a Squidly role.");

		e.addField("Goal:", "Variable");
	});

	register_role(["chained", "3090"], "Town", "Chained", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3090");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "||Unstoppable|| Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a target at night. ||If they're evil||, you will attack them ||and one other evil player visiting them.||");

		e.addField("Attributes:", "- Text in ||spoilers|| does not count as part of your role.\n- During the day, **Unleash**, allowing you to use your ability twice the next night and act as if it had the text in ||spoilers||.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["steve", "3091"], "Minecraft", "Steve", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 3091");

		e.addField("Alignment", "Minecraft Head", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- **Mine**: Gain either a diamond, gold, iron, stone, or wood. The rarity of each item goes from diamond as the rarest, to wood as the least rare. You may use this ability during the day and night.\n- **Craft**: Combine resources in your inventory to craft something. \n- **Utilize**: Use an item you have crafted.");

		e.addField("Attributes:", "You can craft the following: Tripwire: Set a trap outside of somebody's house, killing them if they visit. (1 wood, 1 string)\n> - Arrow: Deal a basic astral attack to somebody. (You may use this and one other craft in one night) (3 feathers)\n> - Blaze Rod: Set two people alight on fire. (5 blaze powder)\n> - Bow: If you craft this, your visits are permanently astral. (3 string, 2 wood)\n> - Diamond Sword: Pierces protection, Attack two people at once, Unstoppable. (2 diamonds, one wood)\n> - Iron Sword: Attack two people at once. (2 iron, one wood. Powerful) \n> - Stone Sword: Attack one person, pierces protection. (Unstoppable) (2 stone, one wood)\n> - Gold Sword: Attacks 4 people, breaks after a use. (Powerful) (2 gold, 1 wood)\n> - Wood sword: Attack one person. (Basic) (3 wood)");

		e.addField("Attributes (cont.):", "> - Eye of Ender: Become one step closer to unlocking the dragon. (1 ender pearl, 1 blaze powder)\n> - Minecart: Redirect 5 people of your choice into one person. (5 Iron)\n> - Enchanted Ender Pearl: Upon crafting this, gain an attribute that lets you avoid being lynched once. (10 ender pearls)\n> - Enchanted Flesh: Upon crafting this, you are allowed to use utilize twice the next night. (10 flesh)> - Enchanted Blaze Powder: The next night, you may instantly mod kill 3 people. (10 blaze powder)\n> - Blaze rod: Set two people alight on fire. (5 blaze powder)\n> - Arrow: Deal a basic astral attack to somebody. (You may use this and other craft in one night) (3 feathers)\n> - Strength Potion: If you craft this, your attack is permanently upgraded by one tier. (1 bottle, 1 blaze powder)\n> - Swiftness Potion: If you craft this, you may permanently act twice in one night. (1 sugar, 1 bottle)\n- You are roleblock, redirection, conversion, and control immune.");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["enderman", "em", "3092"], "Minecraft", "Enderman", {subCat: "Mob"}, (e) =>
	{
		e.setDescription("Post 3092");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- **Teleport**: Each night, you may swap two people. Anybody visiting one person will visit the other.\n- **Look**: Visit one person. You will attack one random visitor(2 uses)\n- **Farm Pearl**: Farm for an ender pearl, giving the current Minecraft(Head) an ender pearl.");

		e.addField("Attributes:", "- You may attack your teammates.\n- If the head role has 5 ender pearls, even while this is dead, turn a random non head role into ender dragon. If the head role is the only role alive, they turn into an ender dragon.\n- Upon death, the head role gains 2 ender pearls. ");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["ender_dragon", "enderdragon", "edragon", "ender", "dragon", "ed", "3093"], "Minecraft", "Ender Dragon", {subCat: "Mob", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3093");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- **Dragon Breath**: Attack three people consecutive to each other.(1 Use)\n- **Perch**: Gain one more use of every other ability\n- **Attack**: Attack somebody with a rampage astral attack. They are roleblocked.(1 Use)");

		e.addField("Attributes:", "- Consecutive is consecutive numbers on the player list. Dead players do not count for this.\n- If you perch, the town gets the message “The dragon is perching!” at the start of the night. - This role may not spawn naturally.");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["silverfish", "sf", "3094"], "Minecraft", "Silverfish", {subCat: "Mob"}, (e) =>
	{
		e.setDescription("Post 3094");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Hide**: Hide yourself in a block of stone, making all visits against you fail. If Steve mines on a night you do this, your ability fails\n- **Surprise**: Jump out from the ground at a player, and attack them. If they have any attack, you die instead");

		e.addField("Attributes:", "- **Grind**: When you die, drop XP, which powers the head’s attack by one tier the next night.");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["giant", "3095"], "Minecraft", "Giant", {subCat: "Mob", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3095");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- **Stomp**: Deal a rampage astral attack to your target.");

		e.addField("Attributes:", "- Anybody you kill appears alive for the next day, although they are dead.\n- You cannot spawn naturally.");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["zombie", "🧟", "3096"], "Minecraft", "Zombie", {subCat: "Mob"}, (e) =>
	{
		e.setDescription("Post 3096");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Bite**: Deal a basic attack to somebody(2 uses)\n- **Farm Flesh**: Give the Minecraft(Head) role Flesh");

		e.addField("Attributes:", "- You may attack your teammates.\n- If the head role has 5 Flesh, even while this is dead, turn a random non head role into Giant. If the head role is the only role alive, they turn into Giant.\n- Upon death, the Minecraft(Head) gains 2 flesh.");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["parrot", "🦜", "3097"], "Minecraft", "Parrot", {subCat: "Passive"}, (e) =>
	{
		e.setDescription("Post 3097");

		e.addField("Alignment", "Minecraft Passive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Squawk**: Fly to another player’s house and beg them for something to eat. The may choose to feed you seeds or a cookie. If they feed you seeds, roleblock them for the night. If they give you a cookie, you die and they’re dealt an unstoppable attack due to animal cruelty\n- **Land**: Land on the head’s shoulder. Any action taken against them will instead happen to you. If you survive the night, give the head one feather.\n- **Take Flight**: Fly above the town, learning everyone who went out that night. You do not learn who they visited. Every time you do this some kid throws a rock at you and injures one of your wings, so you can only do this twice. ");

		e.addField("Attributes:", "- When you die, drop a feather and give it to the head.");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["sad_person", "sadperson", "sad", "sp", "3098"], "Neutral", "Sad Person", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3098");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per night, for the first 2 nights of this role's exisiting in the game, deal a Basic attack yourself. This can be stopped by a roleblock as well as all the other stuff.");

		e.addField("Attributes:", "- The kill mechanically works as a self-visit. Yes, this means it can be transported. After surviving for two nights you may choose to ask the host for a new role with your goal remaining the same as what your current goal is.\n- Can be rerolled if host thinks theres no way to be able to stop the selfkill.");

		e.addField("Goal:", "survive for at least the first 2 nights of this role exisitng in the game.");
	});

	register_role(["blaze", "3099"], "Minecraft", "Blaze", {subCat: "Mob"}, (e) =>
	{
		e.setDescription("Post 3099");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Burn**: Set somebody on fire, roleblocking them. (2 uses)\n- **Farm Powder**: Give the current head role one blaze powder.\n- Levitate: Attack somebody. All abilities against you fail this night. (1 use)");

		e.addField("Attributes:", "- If you die, give the current head role two blaze powder.\n- Whoever kills you is burned, they cannot use their ability the next night.\n- If you die by lynching, scatter ashes across the town at 3 random players. -One person who visits these players tonight gets burned, being unable to use their ability the next night.\n- You are roleblock immune");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["witch", "3100"], "Minecraft", "Witch", {subCat: "Mob"}, (e) =>
	{
		e.setDescription("Post 3100");

		e.addField("Alignment", "Minecraft Mob", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Make Bottle**: Make a bottle, giving the head role one bottle.\n- **Weaken**: Weaken the player you use this on, giving them a significant host decided debuff. (1 use)\n- **Harming**: Attack the player you use this on. (1 use)\n- **Healing**: Give the player you use this on powerful defense. (1 use)");

		e.addField("Attributes:", "- If you die, give the head role two bottles.\n- You may target faction members");

		e.addField("Goal:", factions.Minecraft.goal);
	});
};
