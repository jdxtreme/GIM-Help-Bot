//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["dio_brando", "diobrando", "dio", "brando", "db", "zawarudo", "2701"], "Neutral", "Dio Brando", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2701\n*ZA WARUDO!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful (Overkill)", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- **TIMESTOP**- Freeze time, which roleblocks everyone but you (2 charges)\n- **Consume** - Drink the blood of another player, dealing them a powerful attack and their role appear as “drained”\n- **Pose** - You may strike a pose, which will cause your target and their visitors to fucking explode and deal an overkill attack due to its gloriousness (1 use. Can never be regained)‎");

		e.addField("Attributes:", "- ‎**Is that a JoJo reference?** - Any time someone references any part of JoJo, you may deal an overkill attack to them instead of your regular attack\n- **Menacing Aura** - Any visitors will immediately have their ability fail due to you giving off unwelcoming vibes, unless they possess no morals or feelings");

		e.addField("Goal:", "‎**MURDER EVERYONE**");
	});

	register_role(["cosa_notra_beekeeper", "cosanotrabeekeeper", "cosa", "notra", "mafiabeekeeper", "beekeeper", "cnbk", "2702"], "Mafia", "Cosa Notra Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2702\n*I'll make him a bzzzz he can't refuse.*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to frame any player as a role of your choice to all investigative effects.\n- Use 2 bees to redirect a player to another player of your choice tonight and the next if both are still alive.\n- Use 3 bees to deal a Basic attack to a random non-Mafia player who visits a player of your choice.‎");

		e.addField("Attributes:", "You will earn 1 bee every night. You can use 2 abilities per night.‎");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["new_forest_beekeeper", "newforestbeekeeper", "covenbeekeeper", "beekeeper", "nfbk", "2703"], "Coven", "New Forest Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2703\n*Bzzzz the witch!*");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Use 1 bee to prevent all visits to a player of your choice and learn the names and roles of all players whose visits you prevented this way. \n- Use 2 bees to Unstoppably poison someone.\n- Use 3 bees to make all effects that would happen to any one of up to three players of your choice happen to all three of those players instead");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.\n- With the Necronomicon, you earn an additional bee each night. ‎");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["cyberbully", "2704"], "Neutral", "Cyberbully", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2704\n*The internet covers my true identity so it’s ok to be an asshole*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Modkill", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "‎- Cyberbully people at night, causing them to stop playing video games.");

		e.addField("Attributes:", "- You can’t be killed because you lock yourself in your room all night.\n- Any investigative role will learn exactly what you are.\n- You learn the name of any investigative roles that visit you.\n- The player you cyberbully is mod killed and removed from the game.\n- Before the start of the game, you may cyberbully someone, forcing them to reroll into ritualist. They may not reroll out of the role.‎");

		e.addField("Goal:", "‎Cyberbully 4 players then have the Town lose.");
	});

	register_role(["nbt_file_editor", "nbtfileeditor", "fileeditor", "nbtfe", "nfe", "2705"], "Town", "NBT File Editor", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2705");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Modkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Once per game, set someone's post number to a specific amount.\n- Increase or decrease someone's post number by any amount.\n- 3 times per game, change someone's status, either killing or reviving them. You may only kill 2 people, and only revive 2 people, not the same thing 3 times.");

		e.addField("Attributes:", "- When changing a post number, if it would result in a negative, or a number higher than the current highest consecutive post number, it will overflow to ensure a valid role exists. However, if the end result would be a valid role in roles (negative roles included), overflow won't be used. Yes, you can turn someone into an Android or Mainframe. Why? I dunno, you just can.\n- You may multitask.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bomba_tuqit_yatxatt_at_jaqi", "bombatuqityatxattatjaqi", "bomba", "jaqi", "bombexpert", "2706"], "Neutral", "Bomba Tuqit Yatxatt' at Jaqi", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2706");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Kuukira", "Unstoppable", true);
		e.addField("Obrana", "Powerful", true);

		e.addField("Evner:", "- Select a player. You plant a bomb in their house. This bomb will detonate at a random time the next day and kill them.‎");

		e.addField("Eiginleikar:", "- Your target will be notified that there is a bomb in their house.\n- If you are attacked, whether you survive or not, plant a bomb in your attacker's house.\n- Translations courtesy of Google Translate‎—for no discernable reason, here were the languages used: Aymara, Nyanja, Croatian, Corsican, Danish, Finnish, Swedish, Icelandic, German, Polish and French.");

		e.addField("Bramka:", factions.Neutral.goalNK);
	});

	register_role(["arkeolog", "archaeologist", "2707"], "Town", "Arkeolog", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2707");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Dig up the remains of a dead player during the day. You get a use of their ability. This can only be used once per player.\n- During the day, dig up the remains of previous games. You get a random ability from a random role in the game.");

		e.addField("Attributes:", "- You can multitask during the night, but not during the day.\n- You can only select completed games. For the 7th round, both subgames are fated together in the 7th round.\n- Translations by the brilliant Nubslair, even though Lunari posted the original role after.");

		e.addField("Goal:", "Lynch every criminal and ~~evildoer~~ miscreant.");
	});

	register_role(["caveman", "2708"], "Neutral", "Caveman", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2708\n*Unga Bunga Ooga Booga*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Base (Unstop)", true);
		e.addField("Defense", "Base", true);

		e.addField("Abilities:", "‎-simplify person\n- Bash person with rock\n- become smart (3 use)");

		e.addField("Special Perk Thingies:", "-simplify person now must speak not smart\n- If target speak unsimplify, deal unstop attack at them\n- You must speak not smart unless use not first ability\n- you can instead bash target with rock‎");

		e.addField("Goal:", "Bash all smart peoples with big rock");
	});

	register_role(["one_november_just_came_around", "onenovemberjustcamearound", "novembercamearound", "november", "onjca", "2709"], "Town", "One November Just Came Around", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2709");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect a player from death during the night.‎");

		e.addField("Attributes:", "- The amount of Defense given depends on the age of this role. The tier of the Defense is equal to the number of days this role has existed divided by 100, rounded up, to a maximum of Overprotective.\n- If a player holding this role loses a game, the timer should reset to 0 days.\n- If this role visits, is visited by, or saves someone from November (1206), it will deal an Overkill Attack to it.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["nbcs_saturday_night_live", "nbcssaturdaynightlive", "nbcs", "nbc", "saturday", "nsnl", "snl", "2710"], "Neutral", "NBC's Saturday Night Live", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2710\n*Wait, people actually laugh at this shit?*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Modkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Have the host post an SNL skit in the next day chat");

		e.addField("Attributes:", "- Everyone must comment on the skit at least once or they will be modkilled. The reaction must be comedic or contain laughter. If they don't comply, modkill.‎");

		e.addField("Goal:", "Get at least 5 people out of the audience.‎");
	});

	register_role(["fraudulent_artist", "fraudulentartist", "fraudulent", "artist", "fa", "2711"], "Town", "Fraudulent Artist", {subCat: "Killtective", spawnSubCat: ["Killing", "Protective"]}, (e) =>
	{
		e.setDescription("Post 2711\n*Tell me, what do these blots of ink look like to you?*");

		e.addField("Alignment", "Town Killing/Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose a player to interpret your art.\n- The player interpreting your art sees the attached image. They must choose from this list of things to interpret the art as:\n> A) \"A dayvigi's gun\"\n> B) \"A man stressed because he's roleblocked\"\n> C) \"A powerful heal from Town of Salem\"\n- You will NOT be told which of these was chosen.\n- During the day, choose a player. The effect will happen once the day ends.\n- If the interpreter saw \"A dayvigi's gun\", you will shoot the chosen target with a basic attack, and will be told if they have defense.\n- If the interpreter saw \"A man stressed because he's roleblocked\", you will roleblock the target tonight, although you will immediately be told if they have immunity.\n- If the interpreter saw \"A powerful heal from Town of Salem\", you heal your target today and tonight.‎");

		e.addField("Attributes:", "‎- If you kill an innocent person, the \"A dayvigi's gun\" option is replaced by the person interpreting your art by \"Suicidal Ideation\", which kills you if you target anyone instead.");

		e.addField("Messages:", "‎\"You find a painting with a note attatched: '*Interpret this art.*'\nWhat do you see? \n> A) A dayvigi's gun\n> B) A man stressed because he's roleblocked\n> C) A powerful heal from Town of Salem\"\n\"You find a painting with a note attatched: 'Interpret this art.'\nWhat do you see? \n> A) Suicidal ideation\n> B) A man stressed because he's roleblocked\n> C) A powerful heal from Town of Salem\"\n\"They were shot by the Fraudulent Artist.\"");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1041881907559944283/image.png?width=701&height=523");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["festo", "2712"], "Neutral", "Festo", {subCat: "Chaotic"}, (e) =>
	{
		e.setDescription("Post 2712");

		e.addField("Alignment", "Neutral Chaotic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- 1. Throw a Party (infinite, day ability): Choose up to 4 players (you can choose yourself). They will gain a private chat with each other during the night, but can only target or be targeted by the other people at the party.\n- 2. Drug (1 use): Every player’s action tonight will target a random player instead of their chosen target. Passive abilities or abilities that don’t target other players will fail.\n- 3. Hangover (3 uses): Choose a player and one of the following effects.\n>- a. The only feedback they will receive this phase is “You slept peacefully” even if they didn't. If they would have died, they won’t.\n> b. They will perform a random ability drawn from all abilities in roles instead of their submitted action.");
		
		
		e.addField("Abilities (cont.):", "> c. They will be assigned a random new role based on their original slot.\n> d. They will keep their original role, but:‎\n> • If they’re Town, they will switch alignments to one of the other factions in the game, but not gain access to any shared chats or be told who their teammates are.\n> • If they’re not Town, they will lose access to any shared chats and can’t send or receive any whispers from their teammates.> • If they’re a Neutral, you will be told their role.‎");

		e.addField("Attributes:", "‎- You're roleblock immune.\n- Anyone targeting you with an ability will target a random other player instead.\nYou gain points every time you *directly or indirectly* cause one of the following to occur (up to host interpretation):\n> - Prevent a death (1 point)\n> - Someone targets a member of their own faction without killing them (1 point)\n> - Someone attacks and kills a member of their own faction (2 points)\n> - Another Neutral dies before winning (1 point)\n> - 4 actions fail in a single night (2 points)\n> - Throw 3 parties (2 points)\n> - Use your Hangover ability (1 point)\n> - A player other than you accuses the host of a making a host error (2 points)");

		e.addField("Goal:", "‎Survive until you gain 10 points.");
	});

	register_role(["Θmega", "omega", "2713"], "Agent", "Θmega", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2713\n*Θf course. I'm in position if the target manages to escape the target site. Fire away*");

		e.addField("Alignment", "Agent Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Insurance (3-shot): The target player's next attack will use Astral and bypass protective effects.\n- Secure Kill (2-shot): Select a player. If they die tonight, the killer(s) may multitask the next night, including with their factional kill if applicable. ‎");

		e.addField("Attributes:", "‎- Resupply (Passive): While you're alive, Agents who successfully kill any target can choose one of their abilities to gain another charge of. If a Town member is lynched, all members gain one charge of an ability.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["wild_magician", "wildmagician", "magician", "wm", "2714"], "Neutral", "Wild Magician", {subCat: "Outsider"}, (e) =>
	{
		e.setDescription("Post 2714\n*hrrmgmg yes i will use my roles and abilities and cards and ranges and weird draw mechanics and king bullshit and weird events and duels and trades to strategically determine that there is like a 30% chance nik is not evil hrmrmgn yes*");

		e.addField("Alignment", "Neutral Outsider", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Save us from the shadows: During the day, disable \"Shadow mirror\" for the following night. 5 uses, 1 day cooldown. (This ability can never be replicated or even viewed by any other role by any means, should this come up somehow).\n- Randomic duel: During the day, choose two players to make them fight (see 2260: 踊). A random one of them that's alive at the start of the next day will get a one-shot copycat.\n- Wild Spells: Attack a player. If they survive, this will attack the player below the original player and if that player survives, this will attack the player below them. Infinite uses, 4 night cooldown.\n- Spiral Range: During the day, randomize the playerlist for the rest of this day/night cycle idfk KA mechanics suck man. Infinite uses, 2 day cooldown.");

		e.addField("Attributes:", "- Jester's deck: You start the game with 5 completely random one-shot abilities.\n- Shadow mirror: At the start of each night, you will be given a random one-shot ability. The ability can be from any role that could be in the game, and will never be an ability that can normally only be used once, but you must use this ability in the round you gain it or you will deal a Basic attack to yourself.‎");

		e.addField("Goal:", "‎Ensure that a faction with at least 50% of their members dead wins and survive the game. If a role with an NK goal or similar wins, you lose.");
	});

	register_role(["friars_heel_beekeeper", "friarsheelbeekeeper", "rockbeekeeper", "friarsheel", "beekeeper", "fhbk", "2715"], "Rock", "Friar's Heel Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2715\n*We will, we will bzzzz you!*");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to learn what date a player's role was posted on.\n- Use 2 bees to rampage roleblock a player through immunities.\n- Use 3 bees to deal a Basic attack to a player, a Powerful attack to their first target or them if they don't have one, and an Unstoppable attack to that player's first target or them if they don't have one. ‎");

		e.addField("Attributes:", "You will earn 1 bee every night. You can use 2 abilities per night.‎");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["Σxisal", "exisal", "2716"], "Agent", "Σxisal", {subCat: "Communication"}, (e) =>
	{
		e.setDescription("Post 2716\n*Σasy now. If you get caught, the whole mission is a bust. I'll let you all know if something goes awry, and—*");

		e.addField("Alignment", "Agent Communication", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lie Detector (Infinite): Choose a message sent in the previous day chat and learn whether or not it was a lie. The host should respond with either yes, no, or 'cannot be discerned' if they themselves don't know the answer.\n- Link (3-shot): Select two players, transporting them and creating a private channel between them. If Fully Wired activates, this no longer creates a private channel between the targets. You may use this ability multiple times in a single night.‎");

		e.addField("Attributes:", "‎- Fully Wired (Passive): If all Agents besides you have a private channel with at least one other Agent, create an Agent factional chat. Each night, one Agent member - faction's choice - can multitask, including with the factional kill.\n- You may multitask though not with the factional kill.\n- You may not self-target. ");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["sora_no_kami_sama", "soranokamisama", "sora", "kami-sama", "kamisama", "sk", "2717"], "Town", "Sora no Kami-sama", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2717");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Summon a ryusei, choosing two targets to be hit during the night. If ichi of your targets are evil, you will attack them. If both of your targets are evil, you will instead ijime both (kakkoi!). Otherwise, one of your ni targets are chosen at random. If you kill a town member, you feel really not daijobu in your kokoro. You will become shinde from guilt at the end of the following yoru.\n**Sora ni kietai** —  Leave your inochi behind, becoming a subarashi hinotori, and then flying off into the sky like hanabi, kakeru away from all threats. During the day, remove yourself permanently from the game. The following night, you will make everyone feel very mera mera, dealing a basic attack to every player. One use, cannot be used until day 4.‎");

		e.addField("Attributes:", "- Evils are secretly notified of your existence at the start of the game.\n- If you attack both evil targets, you will gain temporary saikyou defence for the night.\n- You will still win if your faction wins after removing yourself from the game.\n- You are a Nihongo Master desu.‎");

		e.addField("Goal:", "Lynch all hanzaisha and akunin.");
	});

	register_role(["millionaire", "2718"], "Neutral", "Millionaire", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2718");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Use the ability of any non-killing role in the game.‎");

		e.addField("Attributes:", "- Snail (2719) will always spawn and you are alerted if they are in a neighboring house. If it visits you, you lose your defense and die.\n- You also lose your defense and die if you visit the Snail.‎");

		e.addField("Goal:", "‎Survive to the end of the game.");
	});

	register_role(["snail", "2719"], "Neutral", "Snail", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2719");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Go to a neighboring house.‎");

		e.addField("Attributes:", "- Millionaire (2718) will always spawn and you know who they are. If you visit them, they lose their defense and die.\n- They also lose their defense and die if they visit you.\n- You can only visit your direct neighbors. Your neighbors are the neighbors of whoever's house you're in, including dead players.‎");

		e.addField("Goal:", "Live to catch the Millionaire.‎");
	});

	register_role(["day_forger", "dayforger", "forger", "df", "2720"], "Mafia", "Day Forger", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2720");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, forge someone's role and will. If they die that day, they will appear to be that role upon death. You may only forge once.‎");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["femboy", "2721"], "Town", "Femboy", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2721\n*\"No comment\"*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Distract a player at night.\n- They will be roleblocked and will be sent a picture of a femboy (SFW) to evil players or players who used a killing action when roleblocke‎");

		e.addField("Attributes:", "‎- Same as escort\n- Roleblock immune and etc");

		e.addField("Message:", "- \"You tried to perform your role but you were too busy making **passionate love with a guy!**\"‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["day_ambusher", "dayambusher", "ambusher", "da", "2722"], "Mafia", "Day Ambusher", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2722");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lie in wait outside a target's house and their ballot box during the day.‎");

		e.addField("Attributes:", "‎- You immediately kill any non-Mafia who votes or targets them during the day.\n- Anyone who survives will see you preparing an ambush.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["electro?!mancer", "electromancer", "electo", "electro?!", "lightning?!", "2723"], "Neutral", "Electro?!mancer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2723\n*Sunscreen has zapped Mac with Lightning?! who now has 24 hours to zap another player*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night. They have 24 hours to choose another player to attack, even if they die. If they don't, it attacks someone random. The player attacked this way then attacks a player in the same way, then the chain stops.‎");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["zen_garden_beekeeper", "zengardenbeekeeper", "zengarden", "plantbeekeeper", "beekeeper", "zgbk", "2724"], "Plant", "Zen Garden Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2724\n*Bzzzz, neighbour!*");

		e.addField("Alignment", "Plant Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to produce 1 sun.\n- Use 2 bees to permanently reduce the costs of all sun-costing Plant abilities by 1 sun.\n- Use 3 bees to deal an Unstoppable attack to a player. If they're a non-Plant, you pay 1 sun, and if they're a Plant, you produce 5 sun.‎");

		e.addField("Attributes:", "‎Attributes: You will earn 1 bee every night. You can use 2 abilities per night.");

		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["anamericancitizenthatknowstheirsecondamendment", "americancitizen", "american", "amendment", "secondamendment", "guns", "2725"], "Town", "An American that knows the 2nd amendment", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2725");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack:", "Variable", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "‎- Use one of your guns to defend the town");

		e.addField("Attributes:", "- **Pistol**: You deal a basic attack to your target\n- **Automatic Rifle** (3 uses): You will deal a powerful rampage attack to your target, killing their visitors as well\n- **Bazooka** (1 use): Use a fucking bazooka and deal an overkill attack to your target and their visitors. They are obliterated and removed from the playerlist. The target’s house is also radiated so any visitors to the deceased person will also be dealt a powerful attack\n- Since you have the god blessed right to bare arms, you also have a 1 use powerful defense that will deal a powerful attack against any visitors the night you’re attacked.\n- If you directly kill a townie (AKA you had them as your target) you will immediately be arrested and can no longer use your guns. Your weapons are distributed amongst the other town killings. And they will be able to have a +1 to their attack for the next 2 nights. But you will also die of depression because you’re jealous‎");

		e.addField("Goal:", "Preserve your right to freedom and murder or lynch every fucking traitorous evil.");
	});

	register_role(["missingno._", "missingno", "glitch", "2726"], "Pokemon", "MissingNo._", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 2726");

		e.addField("Alignment", "Pokemon Single", true);
		e.addField("Attack;", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Ab!lities:", "- Water Gun - Sho0t someone with your water, dealing a basic atta k. \n- Water Gun - Splash someone's role 🪪. swapping five words in the abilities attributes at random.\n- Sky Attack - glitch a player, Dealing a Powerful attack & making them appear to be a random role on death. (1 night cooldown)‎");

		e.addField("Attributes:", "- When using water gun, you cannot select which one to use it will be random\n- You can choose any pokemon role to attribute your kills to‎");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["**miss̷̄͝ingno。__", "missingno", "glitch", "2727"], "Pokemon", "**Miss̷̄͝ingNo。 _", {subCat: "Single"}, (e) =>
	{
		e.setDescription("Post 2727\n*Attack;*");

		e.addField("Alignment", "Pok🇪mon Single", true);
		e.addField("Attack", "Basic Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Ab!lities:", "‎Water Gun- Sho0t some1 with y0️ur Wasser, dealing a basic atta k.\nSky AttackSplash someone's role :identification_card:. swapｐing five words in the abilities abilities at :randomFaction:.\nSky Attack- glitch a player, Dealing a (2) attack AND mkng them 𝒶𝓅𝓅𝑒𝒶𝓇 𝓉𝑜 𝒷𝑒 𝒶 𝓇𝒶𝓃𝒹𝑜𝓂 role on 💀.");

		e.addField("Attributes:", "‎");

		e.addField("Goal:", "Kill anyone that opposes the Pokemon. (edited)");
	});

	register_role(["orthodoxy_beekeeper", "orthodoxybeekeeper", "orthodoxy", "hallowbeekeeper", "beekeeper", "obk", "2728"], "Hallow", "Orthodoxy Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2728\n*The holder of a new bzzzz...*");

		e.addField("Alignment", "Hallow Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to roleblock a random non-Hallow player who would visit a player of your choice. If they would have killed your target, you gain a Faith point.\n- Use 2 bees to learn the role of a player and the names and roles of all other players who visit that player. If you learn at least three roles this way, you gain 2 Faith points.\n- Use 3 bees to choose three players and redirect all players who would visit the first to the second, the second to the third, and the third to the first. If you redirect at least five players this way, you gain 3 Faith points.‎");

		e.addField("Attributes:", "‎- You will earn 1 bee every night. You can use 2 abilities per night.\n- When you have accumulated 3 Faith points, the Saint will gain a Saint point.\n- Once the Saint has become the Paragon, you will lose a bee.");

		e.addField("Goal:", factions.Hallow.goal);
	});

	register_role(["river_styx_beekeeper", "riverstyxbeekeeper", "riverstyx", "underworldbeekeeper", "beekeeper", "rsbk", "2729"], "Underworld", "River Styx Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2729\n*They will be given over to everlasting bzzzz.*");

		e.addField("Alignment", "Underworld Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to grant an Underworld member Basic defense for the night and douse anyone who attacks them tonight.\n- Use 2 bees to redirect a player to another player of your choice. If that player also visits your first target, douse both.\n- Use 3 bees to douse all non-Underworld players who visit either of two players of your choice.‎");

		e.addField("Attributes:", "‎- You will earn 1 bee every night. You can use 2 abilities per night.");

		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["parasocial_relationship_beekeeper", "parasocialrelationshipbeekeeper", "parasocialbeekeeper", "parasocial", "stalkerbeekeeper", "beekeeper", "prbk", "2730"], "Stalker", "Parasocial Relationship Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2730\n*I bzzzz'd your oshi.*");

		e.addField("Alignment", "Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Use 1 bee prevent a player from visiting tonight and learn who they would have visited.\n- Use 2 bees to redirect a player to another player, and that player to another player as well.\n- Use 3 bees to permanently remove a random player who would visit a Stalker tonight from the game before their ability resolves, prioritising more harmful visitors.");

		e.addField("Attributes:", "‎- You will earn 1 bee every night. You can use 2 abilities per night.");

		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["steamroller", "2731"], "Town", "Steamroller", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2731\n*WOOHOOOO! I'm on fire!! ... uh wait, I might've gone too far.*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Deal a Basic attack to a player at night. ");

		e.addField("Attributes:", "- If you kill a non-Town player, you'll be able to attack one extra player the next night and your Attack value will be raised by one. If you continuously kill non-Town players each night, this will stack.\n- If you idle at night, your ability and Attack tier are returned to normal.\n- If you kill a Town player, you will be unable to shoot anyone the next night. Your ability and Attack tier are returned to normal.\n- If you kill two or more Town players in the same night, you will suicide from guilt the following night. ‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["the_knight", "theknight", "knight", "2732"], "Other", "The Knight", (e) =>
	{
		e.setDescription("Post 2732");

		e.addField("Alignment", "Kingdom Defense", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "‎- Protection: Negate one attacking card done to a person this round or the next. If they are attacked, they will appear to play a Block!. 2 uses, 4 round cooldown. You may not use this if you used Deflect this night.\n- Vest: You may roleblock yourself tomorrow night for a 1-night powerful vest/\n- Deflect: You may choose to redirect a attack on another person to a person of your choice. You may not use this if you used Protection this round or the round prior. 1 use. ");

		e.addField("Attributes:", "‎- Armored: You start out with a 1-shot Autovest.\n- Defense: The first time someone attacks you, negate the attack. Does not apply to Astral or Indirect attacks.");

		e.addField("Goal:", "Eliminate all opposition to the King.");
	});

	register_role(["ka_illusionist", "kaillusionist", "illusionist", "ki", "2733"], "Neutral", "KA Illusionist", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2733\n*hrrmgmg yes i will use my passives and rolesets and scumreading and investigative cards and claimlists and channels to strategically determine that there is like a 70% chance rasen is evil hrmrmgn yes*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Minor Illusion (1-shot): Give someone a notification of your choice during the night. Gain another use on every full moon night. \n- Retcon Illusion (1-shot): Retcon the current and previous day and night phase into nonexistence. Anything that happened during the previous day and night will be reversed and then the next phase begins. This ability resolves at the end of which phase it's used in. Used at night or day. \n- Illusion of Death (2-shot): Cause someone to think they're dead. They will appear as cleaned with an unknown cause of death. They will not be allowed to communicate or vote and they won't count to the majority. They will also gain access to the day chat. If they try to use an ability for some reason, or if someone tries to use an ability on them, it will succeed like normally. This effect will wear off after one day.");

		e.addField("Attributes:", "- Confusion (Passive): Whenever an ability/attribute says your name, for example Lookout or Deogen sees [Player] visited your target, it will just show up as \"someone\". So...\n> *\"Del, someone and Jane visited Mac last night.\"*\nAlso, whenever an ability/attribute says your role, it will just show up as \"something\".\n> \"*Mac's role is either Magic Meta Man, Caretaker, Eyisa, something or 9mm Kiwi.*\"\nWhen you die, you will appear as a random role.‎");

		e.addField("Goal:", "‎Ensure that a faction that has at least 50% of their members alive wins. You will automatically win if a role with a NK goal or similar wins. ");
	});

	register_role(["chartreuse", "green", "2734"], "Neutral", "Chartreuse", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2734\n*super21 is crying rn*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "‎ - Oh my god my eyes why does this color hurt my eyes aaaa: Causes half the players at random to go blind for one day/night, meaning they lose access to all chats, including the main chat. (Rounds up) They can still vote, but they cant see the voting channel so the host must send their voting message for them\n-  - super21 repellent: turns anyone who visits your house into super21. Anyone who is super21 can NOT use any actions on you, and will instead use their action on themselves");

		e.addField("Attributes:", "- You have Powerful defence when using super21 repellent.‎");

		e.addField("Goal:", "‎");
	});

	register_role(["australian", "australia", "aussie", "2735"], "Neutral", "Australian", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2735\n*gday!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defence", "None", true);

		e.addField("Abilities:", "- Boomerang: Throw it at someone during the night, it will miss, it comes back to you halfway through the day, killing the person you threw it at during the night‎");

		e.addField("Attributes:", "- Gday!: Wake up before everyone else.\n- Gnight!: Go to sleep before everyone else, you cannot be lynched while you are asleep but you lose access to the channel.\n - Kangaroo: An NPC spawns every 3 days, only the Australian's Boomerang can kill it, it votes completely randomly, if there are kangaroos equal to the amount of players left, the kangaroos win and everyone dies‎.");

		e.addField("Goal:", "Live to see the end of the game.‎");
	});

	register_role(["right", "correct", "➡️", "2736"], "Neutral", "Right", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2736\n*Can time travel exist?*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- At day, choose a statement that was said during the day. The timeline will alter itself so that the statement is true. If the statement was already true, you will be notified. The host has the liberty of choosing how they want to do this");

		e.addField("Attributes:", "- If someone’s role is altered to make the statement true, the game will update as if they used the abilities of that role while keeping the same targets\n- You may use your ability once while dead. You may not revive yourself this way\n- You always spawn with Wrong (1615) and have a night chat with them.‎");

		e.addField("Goal:", "See the town lose. You may win while dead.‎");
	});

	register_role(["left", "⬅️", "2737"], "Neutral", "Left", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2737\n*Is time travel usable?*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- At day, choose a statement that was said during the day. The timeline will alter itself so that the statement is true, if it was false, or false, if it was true. If it's physically impossible to change, you will be notified. The host has the liberty of choosing how they want to do this.");

		e.addField("Attributes:", "‎- If someone's role is altered to change a statement, the game will update as if they used the abilities of that role while keeping the same targets.\n- You have one use of your ability while dead. You may not revive yourself this way.");

		e.addField("Goal:", "See the Town lose, alive or dead.‎");
	});

	register_role(["came", "2738"], "Neutral", "Came", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2738\n*Time travel is not usable.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At day, choose a statement that was said during the day. The timeline will alter itself so that the statement is true, if it was true, or false, if it was false. If it's neither true nor false, or indiscernable whether it's true or false by the host, whoever said it dies.‎");

		e.addField("Attributes:", "- You have one use of your ability while dead. ‎");

		e.addField("Goal:", "‎See the Town lose, alive or dead.");
	});

	register_role(["perceptivent", "notperceptive", "nearsighted", "obtuse", "inattentive", "2739"], "Neutral", "Perceptiven't", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2739\n*This taste... is the taste of Tooru Saesen!*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.‎");

		e.addField("Attributes:", "‎- If you receive a whisper from any player during the day, you may choose to target that player with your night action in addition to your original target. You can have any number of targets this way.\n- Players killed by you appear to have been killed by an 866: Perceptive.");

		e.addField("Goal:", "See the Town lose.‎");
	});

	register_role(["cooler_transporter", "coolertransporter", "transporter", "trans", "ct", "2740"], "Town", "Cooler Transporter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2740");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transport two players each night.‎");

		e.addField("Attributes:", "‎- You're roleblock and redirect immune.\n- Other players targeting your first target will secretly be redirected to your second. Other players targeting your second target will secretly be redirected to your first.\n- Your targets will know that they were transported.\n- You may target dead people.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["quadporter", "quad", "2741"], "Town", "Quadporter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2741");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transport four players each night.‎");

		e.addField("Attributes:", "- You're roleblock and redirect immune.\n- Other players targeting your first target will secretly be redirected to your second. Other players targeting your second target will secretly be redirected to your third. Other players targeting your third target will secretly be redirect.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["macbethfromfamousplaymacbeth", "macbeth", "2742"], "Neutral", "Macbeth from famous play \"macbeth\"", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2742");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, kill a Noble, negating their abilities as long as they are dead. This ability is usable until Night 2.\n- At night, instead of killing a Noble, you can target 2 players to deal a basic attack to.\n- At night, instead of killing a Noble, you can instead target yourself to give yourself basic protection.‎");

		e.addField("Attributes:", "‎- At the start of the game, start with 4 \"Nobles\", which are all unique and have different passive effects:\n> - 1. Lennox - Every 3 nights, Lennox will deal a basic attack to Macbeth\n> - 2. Duncan - Macbeth has to wait a night after using any abilities\n> - 3. Banquo - A random noble will come back to life whenever an evil is lynched\n> - 4. Macduff - Macbeth will appear as evil\n- Only Macbeth from famous play \"macbeth\" will know about the Nobles");

		e.addField("Goal:", "Be the last one standing.");
	});

	register_role(["unhitman", "hitmannt", "2743"], "Neutral", "Unhitman", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2743");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Check someone to see if they are the Hitman.");

		e.addField("Attributes:", "‎- This role can only spawn if (819) Hitman is in the game. You will always have the Hitman as a target.\n- If you visit the Hitman, you will attack them.");

		e.addField("Goal:", "Kill the Hitman.");
	});

	register_role(["daikenkai", "daiken", "kenkai", "daikai", "2744"], "Neutral", "Daikenkai", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2744");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player at night. You will inflict them with nonsense language from a rotating head, high tension, and a firm beat. They will be roleblocked.\n- Select a player during the day. At the beginning of the following night, from a 5-match janken match I guide comes tactics for big opinions. You will play 5 games of Rock-Paper-Scissors with this player. Whichever player wins the set gets to send any message they want into the other player's channel. (It will be signed with their name.)\n- Select a player at night. 35 plus 4 divided by 2, the partygoers who don't burst open don't know. You will deal that many rampaging attacks at the selected player's house.‎");

		e.addField("Abilities (cont.):", "- Select a player at night. This sociable sound demon screwing into an obtuse angle easily, they dunno from or where to, but anyway he divided the sound. You will blackmail this player for the following day.\n- Everyone's winding chatter is a dangling handkerchief. When you use this ability at night, all whispers sent during the following day will be sent into the day chat instead of being sent to their intended recipients. The sender and the intended recipient will be listed on the message.‎");

		e.addField("Attributes:", "- An alteration in the radar and in the nonsense coming over the airwaves. All investigative abilities that target you will be replaced with a random different investigative ability from any role in roles.\n- If you start snorin', your heartbeat that's goin' up as much as your personality changes. For every night you choose to do nothing, the amount of abilities you may use during the night is permanently increased by 2.\n- Is really greedy, but there's power and land of the priest's staff and since I was born, I've kept on playin' like this. This attribute doesn't do anything.\n- From 3rd street to 4th street, from main street to the carnal desires, pack up the duties left to you, take it all gently, really, you don't have to worry if you extend over to this slow train. Don Pach Don Pach Don Today, on this Japanese island where they're sexin' it up. You are immune to being Roleblocked.‎");

		e.addField("Goal:", "That time, that time, I give respect, we'll break it all apart, yo, just like this example. Kill all who would oppose you.");
	});

	register_role(["post2745", "iampost2745", "2745"], "Neutral", "I am post 2745", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2745\n*My bad, typo*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "‎- Target a player and choose an attack value.");

		e.addField("Attributes:", "- If that attack is one higher than your target’s defense, you will rampage at their house with that attack‎.\n- You can only spawn if @Oslonicl Sen#1203 is playing.\n- Oslo can't be this role.\n- You have a unique defense where you specifically can make up a name and what it can defend against. The host can deny this if it’s *too* op. Cannot be any defense that exists.");

		e.addField("Goal:", "Kill everyone but Oslo. You lose if they die.");
	});

	register_role(["lycanthropebeekeeper", "lycanthrope", "beekeeper", "werebeekeeper", "lbk", "2746"], "Were", "Lycanthrope Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2746\n*A-bzzzz!*");

		e.addField("Alignment", "Were Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to learn a player's subalignment. If it's a Full Moon, learn their alignment as well.\n- Use 2 bees to roleblock a player. If it's a Full Moon, you may redirect them to a player of your choice instead.\n- Use 3 bees to grant all Were members Powerful defense tonight. If it's a Full Moon, prevent all negative visits to Were members tonight instead.‎");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.\n- Hunting Moon Enhancement: **The Sweetest Scent** — You earn 2 bees every night instead and can use any number of abilities each night, including the same ability multiple times.‎");

		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["eternalwinterbeekeeper", "winterbeekeeper", "everfrostbeekeeper", "beekeeper", "ewbk", "2747"], "Everfrost", "Eternal Winter Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2747\n*Encased in bzzzz, your expression will be preserved forever.*");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to roleblock a random player who would attack a player of your choice tonight.\n- Use 2 bees to redirect all visits from one player to another tonight.\n**Hyperborean Hornets** — Use 3 bees to choose up to two players. If no players chosen this way are visited by two or more non-Everfrost players, roleblock all players chosen this way, then coldsnap.‎");

		e.addField("Attributes:", "‎- You will earn 1 bee every night. You can use 2 abilities per night.\n- Whenever a player is roleblocked by anything, you gain 0.25 bees.\n- You are roleblock immune.");

		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["scp-2401-alpha", "scp2401alpha", "scp2401", "2748"], "SCP", "SCP-2401-Alpha", {subCat: "Euclid"}, (e) =>
	{
		e.setDescription("Post 2748\n*The female host also undergoes rapid changes to both accommodate and protect SCP-2401 which include increased tissue regeneration, higher amphetamine output, and lack of dependency for food or water. In the majority of cases the female host retains their personality and memories which usually results in psychological trauma related with the ongoing symbiosis of SCP-2401. This is seen to result in a high rate of suicide in cases where the host outright rejects symbiosis.*");

		e.addField("Alignment", "SCP Euclid", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Use 1 bee to sting a player, Dealing a poweful attack.\n- Use 2 bees to investigate a player and find their role.\n- Use 3 bees to grant Invincible defense to all SCPs for the night. May only be used twice.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.\n- For each SCP that dies, you will permanently earn one additional bee per night.‎");

		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["conspiracist", "2749"], "Neutral", "Conspiracist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2749\n*Down with the man!*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Every 3 nights, get the option to plant a real bomb or fake bomb.\n- The next day, it will be announced in public that a bomb was planted.\n- All players gain the ability to \"Defuse\" the night after the bomb is announced, doing no other action and being reduced to no defense as they attempt to defuse a bomb.\n- At the end of the night, if the bomb was fake, learn the names and roles of all players who attempted to defuse it.\n- At the end of the night, if the bomb was real, if less than 1/3 living players defused it, it blows up, giving all non-evil players a coma, roleblocking them for the next 3 nights (which surpasses roleblock immunity as the roleblock happens at the start of the night)‎");

		e.addField("Attributes:", "- You start with 1 real bomb and 2 fake bombs.‎");

		e.addField("Goal:", "With with evils.");
	});

	register_role(["beekeeperhead", "beekeeper", "bkh", "2750"], "Beekeeper", "Beekeeper Head", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2750\n*Its all about showbzzz*");

		e.addField("Alignment", "Beekeeper Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Use 1 bee to see if someone is a beekeeper.\n- Use 2 bees to give a player basic protection for the night, and marking their attacker.\n- Use 3 bees to reroll someone into a beekeeper role.‎");

		e.addField("Attributes:", "- You gain 1 bee every night.\n- You may use 2 actions at once.\n- You automatically convert players who are beekeeper roles, gaining their night chats and they now win with you and everyone else in the faction.\n- One other beekeeper role must spawn for you to be present‎.");

		e.addField("Goal:", factions.Beekeeper.goal);
	});
};
