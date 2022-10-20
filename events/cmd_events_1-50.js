module.exports = (g) =>
{
	const {register_event} = g;

	register_event(["hidden_armaments", "hiddenarmaments", "hidden", "armaments", "ha", "e1"], "Hidden Armaments", {eventData: "d1"}, (e) =>
	{
		e.setDescription("Event 1");

		e.addField("Day 1:", "- Each player recieves one use of a random ability from a role of the same alignment and subalignment as their own, without knowing what it is.\n- They may attempt to use it instead of their role's ability at any time.\n- If they use an ability in any condition where it would normally not be usable, they'll be notified that they wasted their ability.");

		e.addField("Night 3:", "- All players will learn which ability they recieved in Day 1.");
	});

	register_event(["solar_eclipse", "solareclipse", "solar", "eclipse", "se", "e2"], "Solar Eclipse", {eventData: "d2 d3 d4"}, (e) =>
	{
		e.setDescription("Event 2");

		e.addField("Phase:", "Day 2, 3, or 4 at random.");

		e.addField("Effects:", "- People will be allowed to use their night abilities in this day phase.\n- Full Moon effects will also take place.\n- Players can also still talk, whisper, vote, and use day abilities as usual.");
	});

	register_event(["game_11_balanced_event", "game11balancedevent", "game_11", "game11", "g11bbbiae", "gebbbiae", "e3"], "Game 11 But Balanced But It's An Event", (e) =>
	{
		e.setDescription("Event 3\n*But-*");

		e.addField("Phase:", "All");

		e.addField("Effects:", "- Whenever a player dies, they can choose a letter from their role name to remove from all players' rule text. (use google docs search and replace)");
	});

	register_event(["floodgates", "e4"], "Floodgates", {eventData: "d1 n1"}, (e) =>
	{
		e.setDescription("Event 4\n*The floodgates have opened, flooding the entire town center with water.*");

		e.addField("Day 1:", "- No one may vote, talk, whisper, use day abilities or do anything. The day immediately ends.");

		e.addField("Night 1:", "- No one may talk, use night abilities or do anything. The night immediately ends.");
	});

	register_event(["imagine_having_information", "imaginehavinginformation", "imagine", "ihi", "e5"], "Imagine Having Information", (e) =>
	{
		e.setDescription("Event 5");

		e.addField("Phase:", "All");

		e.addField("Effects:", "- Cause of Death is hidden\n- Wills may only include night actions and any notifications received. For evil roles, this applies to your fake will.");
	});

	register_event(["bomb", "e6"], "Bomb", {eventData: "d5+"}, (e) =>
	{
		e.setDescription("Event 6\n*A bomb has been planted in the Town! Hurry or we will all blow up!*");

		e.addField("Day (X/2) - 2:", "- Everyone is dealt an Overkill Attack. X is the number of players in the game.");

		e.addField("Attributes:", "- This Event is announced on Day 1.");
	});

	register_event(["ghastly_arising", "ghastlyarising", "ghastly", "arising", "ga", "e7"], "Ghastly Arising", {eventData: "4+"}, (e) =>
	{
		e.setDescription("Event 7");

		e.addField("Day 4+:", "- From this point onwards, each dead player can choose to act in any one phase as if they were alive.\n- In that phase, they'll be able to use their role as they normally would; use one ability in that phase, unless their role specifically lets them use multiple.\n- They still won't be able to talk, whisper, or vote.");
	});

	register_event(["last_stand", "laststand", "last", "stand", "ls", "e8"], "Last Stand", {eventData: "3+"}, (e) =>
	{
		e.setDescription("Event 8\n*You shan't die yet. It is not your time. Soar! Far beyond the redline! One more time!*");

		e.addField("Day 3+:", "- The next player who would die does not. Instead, they live and are notified that they have been inflicted with **Redlined**.\n- Redlined players have their roles upgraded to their highest possible efficiency. Their actions become Astral and Rampaging, go through immunities, are immune to sabotage (including priority changes, ability blockers, etc), and deal Overkill attacks if they can kill. Protective roles give simply block attacks instead of preventing defense, etc. etc. They gain all immunities, and cannot have them ignored. Whatever else needs to happen to upgrade their role in any way will happen.\n- Redlined players will die the night after they are inflicted with the status, and then cannot be resurrected or have their corpse manipulated. This is not in any way, shape or form preventable.\n- Players whose wincon involves being dead cannot be affected by this event.");
	});

	register_event(["meteor_shower", "meteorshower", "meteor", "shower", "ms", "e9"], "Meteor Shower", {eventData: "n3 n5"}, (e) =>
	{
		e.setDescription("Event 9");

		e.addField("Phase:", "Night 3 or 5 at random.");

		e.addField("Effects:", "- Three different random players will each be dealt a powerful attack at the end of the night.\n- Their deaths will appear to have been caused by 123: Meteor's ability.");
	});

	register_event(["disease", "e10"], "Disease", {eventData: "d1"}, (e) =>
	{
		e.setDescription("Event 10");

		e.addField("Day 1:", "- A random player will be afflicted by the Disease. Only they will be notified.\n- Diseased players cannot send whispers and will be modkilled if they send more than 10 messages in the current day channel.\n- In the night, diseased players cannot use their role's abilities, but they can do the following:\n> Rest: Stay in bed tonight. You will be cured of the Disease in the following morning.\n> Infect: Visit a player, and spread the Disease to them. While using this, players who visit you will also get the Disease.");

		e.addField("Attributes:", "- This event is not announced at all.");
	});

	register_event(["sacrifice", "e11"], "Sacrifice", {eventData: "3"}, (e) =>
	{
		e.setDescription("Event 11");

		e.addField("Day 3:", "- Living players will be allowed to vote to sacrifice a player in the following night, should majority be reached.\n- Lynching will not be possible in this phase.");

		e.addField("Night 3:", "- If a player was sacrificed, they will be dealt a powerful attack at the end of the night.\n- The sacrificed player has the option to choose any player living or dead alongside their usual night action(s), in order to learn the selected player's true role, bypassing all possible forms of deception. They learn the result instantly.");
	});

	register_event(["abundant_bullets", "abundantbullets", "abundant", "bullets", "ab", "e12"], "Abundant Bullets", (e) =>
	{
		e.setDescription("Event 12");

		e.addField("Phase:", "All");

		e.addField("Effects:", "- All players have access to a one-use basic attack. Roles that already have access to an attack may use this to instead increase the attack level by one instead.");
	});

	register_event(["overdrive_havoc", "overdrivehavoc", "overdrive", "havoc", "oh", "e13"], "Overdrive Havoc", {eventData: "N1+"}, (e) =>
	{
		e.setDescription("Event 13");

		e.addField("Phase:", "Any Random Night");

		e.addField("Effects:", "- For that chosen night, all abilities rampage. This does not apply to abilities that already rampaged in the first place.\n- This is announced at the start of the previous day.");
	});

	register_event(["vengeful_justice", "vengefuljustice", "vengeful", "justice", "vj", "e14"], "Vengeful Justice", (e) =>
	{
		e.setDescription("Event 14");

		e.addField("Phase:", "All");

		e.addField("Effects:", "- When a player that counts as Good is lynched, the following night they must choose someone to deal an unstoppable attack to. If they do not make a choice, it will be chosen randomly.");
	});

	register_event(["blackout", "e15"], "Blackout", {eventData: "5-"}, (e) =>
	{
		e.setDescription("Event 15");

		e.addField("Phase:", "Random night between 1 and 5, plus the following day.");

		e.addField("Effects:", "- Players will not receive any night feedback from this phase.\n- Players who die this night will not be revealed as dead until the next day ends.\n- In the following day chat, message history will be disabled for every living player. Vote counts should be kept in a different channel with no such restriction, so everyone can see them at any time.");
	});

	register_event(["role_revolution", "rolerevolution", "revolution", "e16"], "Role Revotution", {eventData: "n3"}, (e) =>
	{
		e.setDescription("Event 16");

		e.addField("Night 3:", "- Living players will all be granted the opportunity to convert into their Secondary Role. This conversion takes effect immediately.\n- Each dead player will learn what their Secondary Role was, without the ability to convert.");

		e.addField("Attributes:", "- At the start of the game, every player secretly receives a Secondary Role of the same alignment and subalignment.\n- Any player with a role that promotes another player upon its own death, or whose existence is vital for a faction's win condition, will not gain a Secondary Role. And any player that becomes a role with either criteria will lose their Secondary Role.\n- A single random non-Power/leader good player's Secondary Role will be instead be an evil faction, Neutral Evil, or Neutral Killing role.\n- Until the event begins, all investigative abilities based on a target's role will instead be based on the target's Secondary Role.");
	});

	register_event(["power_outage", "poweroutage", "power", "outage", "e17"], "Power Outage", {eventData: "2 4 6 8 10 12 14 16 18 20"}, (e) =>
	{
		e.setDescription("Event 17");

		e.addField("Phase:", "very even-numbered phase.");

		e.addField("Effects:", "- Every even-numbered night, players can only visit people within 2 range of them on the player list, not counting dead players.");

		e.addField("Attributes:", "- This event is announced on Day 1.");
	});

	register_event(["guys_awakening", "guysawakening", "guys", "guy", "awakening", "ga", "e18"], "Guy's Awakening", {eventData: "n3 d4"}, (e) =>
	{
		e.setDescription("Event 18");

		e.addField("Night 3:", "- All players are prompted to submit any role from roles﻿ of their choice.\n- The host may apply Rule 17 to any submission, rejecting it but notifying the player who submitted it.");

		e.addField("Attributes:", "- A new player named \"Guy\" will be created under host control. His role will be one of the submitted roles at random. If none were submitted, a completely random role is chosen instead.");
	});

	register_event(["eternal_winter", "eternalwinter", "eternal", "winter", "coming", "tewic", "ewic", "e19"], "The Eternal Winter is coming.", {eventData: "d1"}, (e) =>
	{
		e.setDescription("Event 19");

		e.addField("Day 1:", "- The entire town will be told the Eternal Winter is coming.");

		e.addField("Attributes:", "- A random person (that has not been roleblocked by this event yet), will be roleblocked and covered in frost (see Everfrost for frost mechanics).\n- This cannot roll with Everfrost.");
	});

	register_event(["jumping_to_a_conclusion", "jumpingtoaconclusion", "jumping", "conclusion", "jtac", "e20"], "Jumping to a Conclusion", {eventData: "d3"}, (e) =>
	{
		e.setDescription("Event 20\n*Noodle is definitely evil. What do you mean by, \"proof\" or \"logic\"?*");

		e.addField("Day 3:", "- The next lynch will require half the votes. Players won't be aware of this change.");

		e.addField("Attributes:", "- This event will __not__ be announced.");
	});

	register_event(["long_live_the_king", "longlivetheking", "king", "lltk", "e21"], "Long Live the King!", {eventData: "d1+"}, (e) =>
	{
		e.setDescription("Event 21");

		e.addField("Day 1:", "- A random player, who was previously a non-Power Townie will be selected to become a King. 65% chance to be Good King (2028), 35% chance to be Evil King (2030) for any evil faction that exists.\n- That player also becomes #1 on the player list and gets their own fancy role.");

		e.addField("Attributes:", "- *This event is publicly announced on Day 1.*\n- If the King dies, as long as 5 or more players are alive, elections for a new King will be held.\n- Before the daily lynch, all players may choose to step forward to potentially become the new King. If nobody does, there is no new King. If one person does, they instantly become King and the below rules don't apply. Otherwise, see below.\n- When multiple people step forward, an election will be held - all players will vote for a new King. The winner becomes King. In a tie, it is randomized.\n- A Townie being elected will become the Good King (2028). An evil faction member being elected will become the Evil King (2030) and keep their original faction, but not their factional chat. Neutral Killing, Neutral Genocidal, and other roles that have similar goals to NK (interpreted by host, examples: Plaguebearer, The Jailor) become the Psycho King (2032). All other Neutral roles become the Neutral King (2031) when elected.");
	});

	register_event(["street_riot", "streetriot", "street", "riot", "sr", "e22"], "Street Riot", {eventData: "d2+"}, (e) =>
	{
		e.setDescription("Event 22\n*We can't live in fear like this! We demand retribution!*");

		e.addField("Phase:", "Any Day from Day 2 onwards.");

		e.addField("Effects:", "- At least one player is guaranteed to die by lynching at the end of this day, without needing majority to be reached.\n- If more than one person has been voted for, the person with the 2nd highest vote count will die too.\n- Reaching majority will not end the day or lock in the vote.\n- RNG breaks ties when necessary.");

		e.addField("Attributes:", "- This event occurs automatically the day after the first time a day ends without a lynch.");
	});

	register_event(["council_of_the_dead", "councilofthedead", "council", "dead", "cotd", "e23"], "Council of the Dead", (e) =>
	{
		e.setDescription("Event 23\n*Technically, they vote on who to \\*kick\\* from the council.*");

		e.addField("Phase:", "All");

		e.addField("Effects:", "- Roles are not revealed upon death.\n- Each night, starting on Night 3, if there are at least 3 people dead, a vote is held in the dead chat to decide one person to revive. You cannot vote yourself. If there's a tie, a random player is chosen.");

		e.addField("Attributes:", "- This event is announced on Day 1.");
	});

	register_event(["evil_convergence", "evilconvergence", "evil", "convergence", "ec", "e24"], "Evil Convergence", {eventData: "n2"}, (e) =>
	{
		e.setDescription("Event 24\n*It appears there were some traitors among us...*");

		e.addField("Night 2:", "- It will be announced that some number of players have turned on the town.\n- At that moment, a number of good players equivalent to the number of REF members will become an REF not currently present ingame.");

		e.addField("Attributes:", "- The rolelist will not update.\n- Any Day 1 effects the REF may have are triggered immediately. (Example: :everfrostFaction:Everfrost being announced to the town)\n- The REF that spawns this way may not be the :unseenFaction:Unseen.");
	});

	register_event(["wake_the_fuck_up", "wakethefuckup", "wtfu", "e25"], "Wake the fuck up.", (e) =>
	{
		e.setDescription("Event 25");

		e.addField("Effects:", "- Some number of players become sleeper agents for an REF that is present ingame.");
	});

	register_event(["loot_box", "lootbox", "loot", "box", "lb", "e26"], "Loot Box", {eventData: "n3 n6 n9 n12 n15 n18"}, (e) =>
	{
		e.setDescription("Event 26\n*Yes, this one's real, I promise.*");

		e.addField("Phase:", "Every 3rd Night");

		e.addField("Effects:", "- At the beginning of the night, everyone will be notified that a Loot Box has spawned at a random player's house. Each player that visits that house during that night will receive one of the following effects at random:\n  → Gain 1 use of Doctor (58)'s Self Heal ability.\n  → Gain Powerful Defense for this night.\n  → Gain the ability to use 1 additional night action during the following night.\n  → Learn the names of everyone who visited this house this night and which effects they received.\n  → Gain 1 Basic Attack directly to your face.");
	});

	register_event(["cut_in_twain", "cutintwain", "cut", "twain", "cit", "e27"], "Cut in Twain", {eventData: "d3"}, (e) =>
	{
		e.setDescription("Event 27\n*A nearby Dimensional Mage was practicing magic and things got out of hand.*");

		e.addField("Day 3:", "- At the beginning of the day, the current playerlist is split into as equal as possible halves, creating 2 separate games. The players assigned to each game will be selected randomly. This includes dead players, who will remain dead. Any roles which have abilities or attributes which depend on another specific player will assume that player is dead if they are separated into different games.");
	});

	register_event(["outlanders_penance", "outlanderspenance", "outlanders", "outlander", "penance", "op", "e28"], "Outlander's Penance", {eventData: "d3+"}, (e) =>
	{
		e.setDescription("Event 28\n*A band of rogues have sworn loyalty to you, as penance.*");

		e.addField("Day 3+:", "- A random player who is currently unable to perform actions capable of killing other players (factional kills not included) will gain access to two astral Basic attacks. If they kill any player capable of winning with them, they lose access to the second attack. If the second attack would do so, it fails, and the charge is not returned.");
	});

	register_event(["final_countdown", "finalcountdown", "final", "countdown", "fc", "e29"], "Final Countdown", {eventData: "d5"}, (e) =>
	{
		e.setDescription("Event 29\n*It's the final countdown.*");

		e.addField("Day 5+:", "- Shit gets wild. Every dead player will suddenly be revived with completely new roles that can change their winning condition. If they're a Jester or something that's already won, it still happens but they can win the game twice. Everyone alive gets a new role too.\n- It's basically a second chance for everyone in the game. REF losing heavily? Town lost all their good roles? NK with unfavorable chances? Everything changes with the click of a button. All you have to do is make sure you can get there.");

		e.addField("Attributes:", "- Everyone is aware of the The Final Countdown from the beginning of the game.\n- Each day, the host will count down in a channel called #the-final-countdown. At the start of Day 1, it'll be at 5, Day 2 will be 4, etcetera.");
	});

	register_event(["disease", "e30"], "Disease", (e) =>
	{
		e.setDescription("Event 30");

		e.addField("Phase:", "Any day, ends on the next day.");

		e.addField("Effects:", "- All Single-target negative effect abilities will additionally deal a basic attack to the target (This also affects day abilites), Single-target positive effects will also give basic defense to the target.");
	});

	register_event(["eternal_sun", "eternalsun", "eternal", "sun", "es", "e31"], "Disease", {eventData: "d1+"}, (e) =>
	{
		e.setDescription("Event 31");

		e.addField("All Days:", "- The Night isn't a phase anymore. Night abilities are used at Day and process instantly. If a Jailor or something exists, idk ask the host.");
	});

	register_event(["sea_of_islands", "seaofislands", "sea", "islands", "soi", "e32"], "Sea of Islands", (e) =>
	{
		e.setDescription("Event 32");

		e.addField("All Days:", "- Before the game begins, players will be split into islands of 7, with extra players being evenly divided into those islands.\n- These islands act as separate games, with some exceptions.\n- Each island must give themself a name, the host decides how a name is selected. Afterwards, everyone learns the names of each island, but not who's on them.\n- An island must have at least two players who oppose each other on it.\n- Factional members with factional chats don't have a full chat, but rather each island has a factional chat for each faction. All members still learn the names of every other member.\n- Factional abilities are usable once per island.\n- Each island has their own lynch, but the day cannot end until the natural end or all votes have proceeded. (Yes, all islands need to vote nightfall or lynch someone for nightfall to do anything.)");

		e.addField("All Days (cont.):", "- You can't whisper to people on another island, or target people on another island. Your abilities and attributes will act as if they don't exist if needed (determined by host).\n- If a role requires another to exist, they'll be on the same island.\n- Deaths are only announced to people currently on that island.\n- The game cannot end until both boat events have passed, or all living players across all islands win with each other. After both boat events pass, the game can end on individual islands.\n- Players on islands that an enemy won on will lose.");

		e.addField("Days 3/5:", "- A boat will be available at each island to send players to another island.\n- Boats can go to any other island, but can only take 1/4th of the island's starting population, rounded down. They do not need to be full to depart.\n- Players may offer to leave on the boats throughout the day.\n- If too many people wish to leave, a vote will be held - with 1 vote to each player per extra person wishing to leave. The people with the most votes will be forced to stay.\n- At the end of the day, the people who volunteered to leave will depart, and all will be unable to use any abilities, but they will not be able to be targeted, as they are not on an island.\n- During the night, they may vote on an island to set sail to.\n- They arrive the next day. They learn the players currently on that island.");
	});
};
