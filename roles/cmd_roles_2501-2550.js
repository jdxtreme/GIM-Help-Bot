//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["orn", "2501"], "Neutral", "Orn", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2501");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "‎- Choose a 4 letter word that ends in orn, like horn or corn. You make up an ability based on that word, and with the host approval that permanently becomes one of your abilities.");

		e.addField("Attributes:", "- May multitask.‎");

		e.addField("Goal:", "‎See the good faction lose the game.");
	});

	register_role(["porca_puttana_troia_vaffanculo", "porcaputtanatroiavaffanculo", "porca", "vaffanculo", "pptv", "italian", "2502"], "Neutral", "Porca Puttana Troia Vaffanculo", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2502");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Once per game, Porca Puttana Troia Vaffanculo and pick a target, immediately killing (bypassing values) that target, all their visitors, the player visited by your target, and everyone that visits you.");

		e.addField("Goal:", "Kill less than half of the players in the game while having used your ability. ‎");
	});

	register_role(["we_like_commas", "welikecommas", "commaliker", "wlc", "lorenzocounter", "2503"], "Neutral", "we like commas", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2,503");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Visit a player. If their post number has more than three digits, add commas where necessary.");

		e.addField("Attributes:", "- Affected roles permanently gain commas in their roles post and in the bot.");

		e.addField("Goal:", "Add commas to all valid targets in the game.‎");
	});

	register_role(["waterbender", "wb", "2504"], "Town", "Waterbender", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2504\n*Long ago, the four nations lived together in harmony.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal the wounds of a player tonight, simply healing them like a Doctor. You can't self-target with this ability. (3 uses)\n- Split the town with a violent, roaring river. Select two positions in the player list, between the players themselves. Anyone __between__ those two points and anyone __outside__, including dead players, will be separated into two different games starting the next morning. It's similar to Dimensional Mage, but you can choose between which houses the river runs.‎");

		e.addField("Attributes:", "‎- The river will last three days before it runs dry, and the games will be remerged.\n- You will phase through the first person priority-wise to visit you on the first three nights. If visitors have the same priority, randomize who's visit gets phased through. The person who you phased through will get a standard \"ability failed\" message.");

		e.addField("Example of the River:", "```ini\n1. Rasen\n2. Lunari\n[A point selected by the Waterbender.]\n3. Zage\n4. JD\n5. Bionic\n6. Squidly\n[Another point selected by the Waterbender.]\n7. Rokk\n8. Nic\n9. Accent\n10. Cats```\nNew Games:\n```\n1. Rokk\n2. Nic\n3. Accent\n4. Cats\n5. Rasen\n6. Lunari```\n```1. Zage\n2. JD\n3. Bionic\n4. Squidly```‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["firebender", "fb", "2505"], "Town", "Firebender", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2505\n*Then, everything changed when the **fire nation** attacked.*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Blast a player with flames, attacking them. (3 uses)\n- Create a ring of fire around a target. Attack any who dare to visit them. (1 use)‎");

		e.addField("Attributes:", "- Players you kill are **incinerated**, hiding their role and will, but you won't be told that information like a Janitor would. After three days, the burns sizzle out and their true role and will are revealed in the graveyard.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["earthbender", "eb", "2506"], "Town", "Earthbender", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2506\n*Only the **Avatar**, master of all four elements, could stop them...*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Twist the ground surrounding two different players, granting them both Powerful defense. (3 uses)\n- Stomp on the ground, creating a massive wave of stone to raise five players high in the sky, protecting each and every one of them with Basic defense. (1 use)‎");

		e.addField("Attributes:", "‎- You're not capable of self-targeting.\n- After using your wave of stone ability, you will gain Basic defense. However, due to using the majority of your strength, you will lose your defense and die after two days.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["agent_recruit", "agentrecruit", "ar", "2507"], "NTF", "Agent Recruit", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2507");

		e.addField("Alignment", "NTF Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Support a player, increasing their voting power by 1 for both nominations and lynch the next day.\n- After participating in a secured node, target a player. Their “after participating in a secured node” ability, if they have one, will be available the next night, even if they were not part of a secured node.‎");

		e.addField("Attributes:", "‎- Your abilities are Astral.\n- If the target of your second ability does not have an “after participating in a secured node” ability, they will be informed that you attempted this on them and failed.");

		e.addField("Goal:", factions.NTF.goal);
	});

	register_role(["airbender", "ab", "2508"], "Town", "Airbender", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2508\n*But when the world needed him most... he **vanished**.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player each night and learn how many times they've been visited throughout the game. This processes at the **end** of each night, after other night abilities.\n- Alter the wind around four adjacent (ignoring 'em dead fellows) player's houses. Perform a TOS2GIM Sheriff check on each of 'em. The order you receive these results will be randomized, though. In other words, you won't know which results belong to which player. (1 use)‎");

		e.addField("Attributes:", "- You have roleblock and prevention immunity.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["physicist", "2509"], "Neutral", "Physicist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2509\n*A physicist knows the laws of physics. A genius can bend them.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Imbue three players with physics each night. Whenever a player imbued with physics visits anyone, the person they visit gains a stack of Fracture. If a player visits the same person multiple times, no extra stacks of Fracture will be applied. When a player gains two stacks of Fracture, they become Vulnerable. If they gain four stacks, they die.\n- Alter the laws of physics during the night. Select three players to attack. This occurs right before deaths are processed. All who would die tonight will be healed by you. All who would live tonight are dealt a Powerful attack. (1 use)‎");

		e.addField("Attributes:", "- You're immune to being fractured or imbued with physics.\n- You may not multitask or self-target under any circumstances. \n- You die every four nights. Your deaths happen at the start of the night priority-wise.\n- You have the lowest priority. While you're in the game, priority resolves in reverse. ‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["netherlands", "nl", "🇳🇱", "2510"], "Civilization", "Netherlands", {subCat: "Economic"}, (e) =>
	{
		e.setDescription("Post 2510\n*\"Those who refuse trade often think they can take what they want from us. They are sorely mistaken.\" -Wilhelmina, Civilization VI*");

		e.addField("Alignment", "Unique Civilization Economic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Create a trade network with up to 5 players each night, rounded up.\n- Add a single import target to the network. (Costs 1.5 Gold per player in the network, rounded up)‎");

		e.addField("Attributes:", "- In a trade network, each player is redirected to another player in that network, whoever was closest to their original target. If there is a tie, it will be randomized. Players cannot be redirected into targeting themselves.\n- You will earn 2 gold for each person in your trade network that initially targeted someone else in the network and was therefore not redirected.\n- Adding an import target will instead redirect everyone in your trade network to that target. When doing this, you will earn 3 gold for each person you redirected that  initially targeted the import target. The import target will not be redirected by this.\n- Civs do not generate gold, but they are valid targets for either ability.\n- Trade networks only last for the night you create them, you may multitask, and you do not visit your targets.\n- Passively generate 2 Gold each night.‎");

		e.addField("Messages:", "“They were plundered by a Dutch frigate.” (Factional Kill)\n“A trade network forced you to reroute.” (Redirection via network)‎");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["crazy_dayzee", "crazydayzee", "dayzee", "cd", "2511"], "Koopa", "Crazy Dayzee", {subCat: "All-rounder"}, (e) =>
	{
		e.setDescription("Post 2511\n*You may sing beautifully, but behind every note is an unshakeable fear of loneliness.*");

		e.addField("Alignment", "Koopa All-rounder", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sing a soft lullaby to someone, roleblocking them on the current night, and pacifying them on the following night.\n- Choose to Run out of town for the night. All abilities used on you will instead target a random non-Koopa player. (1 use)‎");

		e.addField("Attributes:", "‎- If you are the last Koopa alive, you gain an additional use of Run.");

		e.addField("Messages:", "*\"You heard a sweet lullaby in the night, causing you to fall asleep before you could act!\"* (Sing successfully landing)\n*‎\"You were going to kill your target before remembering a sweet lullaby that gave you a change of heart.\"* (Sing pacifying someone the following night)\n*\"Your target wasn't home, so you went to visit [PLAYER NAME] instead!\"* (Run redirecting a visit)");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["wario_master_of_disguise", "wariomasterofdisguise", "wario", "wmod", "wmd", "2512"], "Koopa", "Wario, Master of Disguise", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2512");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Disguise a player's cause of death to a role of your choice if they die.\n- Give a copy of your attribute to a Koopa, it lasts for the next 2 nights.‎");

		e.addField("Attributes:", "‎- You may appear to be a role of your choice to all investigative effects. You may change the role you appear as at any time.");

		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["businesshaman", "stonks", "2513"], "Neutral", "Businesshaman", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2513\n⚠️  *TRADE OFFER!* ⚠️ ");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player and make up an ability during the day to give them a soul offer the following night. **The host has the final right to deny any abilities.**‎");

		e.addField("Attributes:", "‎- The night after you make an offer, your target will be able to communicate with you through a relay. You will show up as \"Businesshaman\" to them. Your target may choose to accept or deny your offer. A denied offer has no effect. A player who has been given a soul offer will be told what ability you have offered them, and a player who has been given a purpose offer will be told how many souls you have collected.\n- If a player accepts a soul offer, you will deal an Overkill attack to them, they will be cleaned, and they will be able to use the ability that you offered them in death.\n- If a player accepts a purpose offer, they will lose all of their abilities and attributes and will gain all of the abilities and attributes of the roles of the players whose souls you have collected previously through soul offers. Additionally, you will gain their original abilities and attributes.");

		e.addField("Attributes (cont.):", "- If you would die and have collected any souls from soul offers, you will instead lose the soul you gained most recently. Additionally, you have a mystical aura that prevents any and all visits to you on the first night.");

		e.addField("Goal:", "Have a player accept a purpose offer.‎");
	});

	register_role(["sk_with_unnecessary_attributes", "skwithunnecessaryattributes", "sk", "swauaoa", "unnecessarysk", "2514"], "Neutral", "SK with an unnecessary amount of attributes", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2514");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Stab someone at night.");

		e.addField("Attributes:", "‎- Astral\n- Rampage\n- Redirect immune\n- Control immune\n- Detection immune\n- Prevention immune\n- Conversion immune\n- Modification immune\n- Suppression immune\n- Modkill immune\n- Blackmail/mute immune\n- Frame immune\n- Autovest immune (Autovests will not affect your attack)\n- Detainment immune (You cannot be jailed or super-rbed)\n- Poison immune\n- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- If you kill a Town member, voting majority becomes 3/4 the next day.\n- If you kill a Mafia member, their Mafia (Killing) gets roleblocked.\n- If you kill a Coven member, they lose access to the Necronomicon the next night.");

		e.addField("Attributes (cont.):", "‎- If you kill a Rock member, you gain a rock which you can throw at someone to deal an Astral Basic attack to them during the day.\n- If you kill a Plant member, sun production is halved for this night and the next.\n- If you kill an Underworld member, everyone who is currently doused has a 50% chance of becoming undoused.\n- If you kill a Hallow member, the number of Saint points required for transformation does not decrease.\n- If you kill a Stalker member, their (being the dead person's) abilities and attributes are nullified that night. \n- If you kill a Were member, the next night cannot be a hunting moon.\n- If you kill an Everfrost member, no one will die from frost for the next two nights.\n- If you kill an Umbrae member, the next night cannot be a Blood moon. If this is done before N4, the N4 blood moon will not occur.\n- If you kill a Pale Moon member, the circus will start one day later.");

		e.addField("Attributes (moar.):", "- If you kill a Sith member, the Jedi Knight will receive three names, one of whom is a Sith.\n- If you kill an Insurgency member, all living Insurgency (Informant) members lose their ability to whisper permanently.\n- If you kill a Loyalist member, they lose access to their next Factional Investigation and Protection.\n- If you kill an SCP member, your attack is permanently raised by one stage.\n- If you kill a Thundercry member, the faction loses a Strike.\n- If you kill a Crew member, the Crew can no longer win with neutrals.\n- If you kill a Fox member, the Foxes lose their Factional chat for one day and one night.\n- If you kill a Pokemon member, the last Pokemon member who evolved devolves.\n- If you kill a Cult member, the next conversion attempt on a Townie will always fail.\n- If you kill a Horsemen member, your defense is raised to Overprotective.‎");

		e.addField("Attributes (why.):", "‎- If you kill an Unseen member, all current converted Unseen members keep their win condition but have the same role card as their previous Town role. Unseen (Head)s are immune.\n- If you kill a Biohazard member, you become immune to the plague.\n- If you kill a Fallen Angel, all other Fallen Angels have their win conditions changed to “Kill all who would oppose you.”\n- If you kill an Agent member, all other Agent roles will have their role changed to one in the same subalignment.\n- If you kill a Random member, you gain a completely random ability that you may multitask.\n- If you kill a Last member, all other members can only use their “Third” ability the next night.\n- If you kill a Spirit member, the night value/attribute list is accelerated by one night.\n- If you kill a Mathematics member, the faction loses points equal to (X*(Y/5)) where X is the number of points they currently have and Y is the number of living members after the night is over.");

		e.addField("Attributes (stop.):", "- If you kill a Sentry member, no new targets can be authorized the next day or night. They can, however, reauthorize previously authorized targets.\n- If you kill a Koopa member, no Factional Attacker can be chosen the next night.\n- If you kill a Creator, all Creators permanently lose the ability to multitask.\n- If you kill a Warfleet member, the most recent upgrade will be reversed.\n- If you kill an Android member, all other Androids have their abilities and attributes reshuffled.\n- If you kill a Florae member, you can kill dead people the next night. It’s not about being useful, it’s about sending a message that Florae is cringe faction.\n- If you kill a City member, the next day’s Investigation will use a TI of your choice instead of the City’s.\n- If you kill a Serial Killer member, you join their factional chat and gain their win condition.\n- If you kill a Band member, the Concert starts one day later than it should.‎");

		e.addField("Attributes (please.):", "‎- If you kill a Seven member, Satan loses all uses of “Contract.”\n- If you kill a Gatherer member, all of the next night’s abilities for them cost 1 more Mana to use.\n- If you kill an Army member, the Marshal loses one level of defense.\n- If you kill a Civilization member, the faction loses 5 gold.\n- If you kill a Discordian member, all Discordians lose the bonuses when their associated user dies.\n- If you kill a Metamorph member, Metamorphs may not swap roles with anyone the next night.\n- If you kill a Beast member, Lock all unlocked abilities and attributes.\n- If you kill a Partisan member, players gain the ability to whisper the next day.\n- If you kill a NETSEC member, no nodes can be hacked the next night.\n- If you kill an X member, nothing happens. \n- If you kill a Neutral, you cannot kill the next night.\n- All of your kills are Cleaned.\n- You may not self-target.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["mind_eraser", "minderaser", "me", "2515"], "Neutral", "Mind Eraser", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2515\n*Doctor, I can't tell if I'm not me!*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose someone to erase their mind at night. You will learn what their role is. (3 uses)‎");

		e.addField("Attributes:", "- A player whose mind you have erased will be converted to a different role in the specific alignment/subalignment pair, but they will not be notified what it is. They will be given a list of five possible roles they could have turned into that are within their alignment/subalignment with one of these roles being the actual role they were turned into.\n- After two full day and night phases, a player whose mind has been erased must decide what role they have been turned into. They will have until the end of the day to decide on one role that they have been turned into at which point the host will determine if they have correctly figured out their role. If they have not correctly determined their role by the end of the day, they will die of an aneurysm dealing an Astral Unstoppable attack to them.\n- Your ability fails on any roles in a Power-type subalignment. It will also fail on any role with less than ten roles in the same alignment/subalignment.‎");

		e.addField("Goal:", "‎See the good faction lose the game.");
	});

	register_role(["lunarmancer", "lunar", "2516"], "Stalker", "Lunarmancer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2516\n*He only comes out at night.*");

		e.addField("Alignment", "Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Link someone to the full moon at night.\n- Choose to blot out tonight's full moon during the day (3 use).");

		e.addField("Attributes:", "- Anyone that you link may only perform their ability on a full moon night.\n- Blotting out the full moon during the day will cause the following night to act as a non-full moon night. This does not affect any other types of moons, such as Blood Moons or Harvest Moons; however, these moons will not count as a full moon. Don't question it too much.\n- You have roleblock immunity.‎");

		e.addField("Goal:", "Stalk her.");
	});

	register_role(["warrior", "2517"], "Town", "Warrior", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2517\n***Offense** is the best defense. Keep that in mind.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Station yourself at a player's house and fight against any attackers.‎");

		e.addField("Attributes:", "‎- Whenever you station yourself at a player's house, you'll counterattack their visitors. Take the Attack value of each attack, and send it back at the attacker. If they die, their attack is nullified. If they survive, you'll still nullify the attack, but you yourself will die from the battle wounds.\n- You may self-target if you dare. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["indonesia", "id", "🇮🇩", "2518"], "Civilization", "Indonesia", {subCat: "Religious"}, (e) =>
	{
		e.setDescription("Post 2518");

		e.addField("Alignment", "Civilization Religious", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, isolate an island. For the rest of the day, they cannot interact or be interacted with anyone except for other people on their island. \“Interact\” includes whispers, votes, and day abilities.\n- During the day, sink an island. All of them will be unable to perform their night abilities, and all visits against them will fail. (Costs 3 Gold + 1 for each player on the island.)‎");

		e.addField("Attributes:", "- Each night, the host will create a circular map of the town. Anyone who is visited by any number of players  is considered \“land\” and anyone who isn’t visited is considered “water” on this map. You will see this map at the end of the night.\n- An \"island\" is a group of land bound by water on both sides.\n- Your visit does not count towards the land/water distribution (e.g. if no one else visits your target, they are still considered water.)\n- If you perform the Factional Kill and your target would be considered \“water,\” your attack is Powerful.‎");

		e.addField("Messages:", "“They were plundered by an Indonesian Jong.” (Factional Kill)\n“Your island was isolated!” (Isolated island)\n“Your island was sunk! You cannot act.” (Sunken island)‎");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["fence_maker", "fencemaker", "fence", "fm", "2519"], "Town", "Fence Maker", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2519\n***Fence** is the best defence. Keep that in mind.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select three targets adjacent to each other and create a fence around their houses. They will each be protected with Powerful defence for two attacks collectively. However, if the player attacking them is also in the fence, the Powerful defence won't apply. [3 uses]‎");

		e.addField("Attributes:", "‎- If a player is in multiple sets of fences, the person attacking them must be in all their fences to bypass the Fence Maker's protection.\n-  Dead players' houses are considered non-existent to the Fence Maker because corpses don't get land owning rights.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["euler", "2.718", "2520"], "Town", "Euler", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2520\n***e** is the best defense. Keep that in mind.*");

		e.addField("Alignment", "Unique Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give *e* players *e*-tier defense each night.‎");

		e.addField("Attributes:", "- *e* is about 2.718. (*You can basically give two players Powerful defense.*)‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["onoff_switch", "onoffswitch", "onoff", "switch", "os", "2521"], "Town", "On/Off Switch", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2521\n***Off** is the best defense. Keep that in mind.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Protect a player each night. If you're on, you'll protect them with a Powerful attack, which actually doesn't protect them. If you're off, you'll protect them with Powerful defense.");

		e.addField("Attributes:", "- At any time, you may turn yourself on or off. This affects your abilities.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["aggressive", "amger", "2522"], "Town", "Aggressive", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2522\n***Offense** is the best mind. Keep that in defense.*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, raise your defense by X+1 stages. X is the number of players youve killed.\n- Attack a player at night. The Attack Value will be the same as your Defense Value.");

		e.addField("Attributes:", "- If you kill a Town member, suicide out of guilt the following night.\n- Your defense reverts back to None at the end of each night.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["defensive_townie", "defensivetownie", "defensive", "dt", "2523"], "Town", "Defensive Townie", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2523\n***Defense** is the best defense. Keep that in mind.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Increase a player's permanent defense by 1.\n- Decrease a player's permanent defense by 1. 2 uses.");

		e.addField("Attributes:", "‎- In order from lowest to highest, the order of defense is:\n- Vulnerable, None, Basic, Powerful, Invincible, Overprotective, Immortal (death immune)\n- If the host allows self-targeting, you can't increase your defense value higher than Powerful.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["defensiver_townie", "defensivertownie", "defensiver", "dt", "2524"], "Town", "Defensiver Townie", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2524\n***Defense** is the defensivest defense. Defend that in defense.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- Players with no defense instead have Basic defense.\n- If someone insults you, you get defensive and die immediately. ‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["scp-076-2", "scp076-2", "scp076", "2525"], "SCP", "SCP-076-2", {subCat: "Keter"}, (e) =>
	{
		e.setDescription("Post 2525\n*\"Upon coming into contact with living humans, SCP-076-2 will enter a rage state in which it attempts to engage and kill all human beings encountered. To date, only the subject's death has been shown to be effective in ending these rampages.\"*");

		e.addField("Alignment", "Unique SCP Keter", true);
		e.addField("Attack", "Powerful (Overkill)", true);
		e.addField("Defense", "Powerful (Degrading)", true);

		e.addField("Abilities:", "‎- Once per game, you may upgrade your fmk to overkilling rampage. If you are roleblocked, you will stay home to kill your roleblocker. You cannot die to your own rampage. Same applies if you are attacked.");

		e.addField("Attributes:", "- Upon spawning, SCP-076-2 is blackmailed on day 1 and roleblocked on night 1 due to regeneration inside SCP-076-1.\n- If you are jailed, you will kill your jailor if you aren't executed.\n- You are conversion immune. \n- **Degrading Defence**: Every time your defense successfully blocks an attack, it drops by one level.");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["defensivist_townie", "defensivisttownie", "defensivist", "dt", "2526"], "Town", "Defensivist Townie", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2526\n*No defense is greater! You literally can't be killed!*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect someone at night by killing them.‎");

		e.addField("Attributes:", "- When you kill a target, the following applies to the target:\n> -They do not count towards majority, cannot vote, and cannot be voted.\n> - They do not influence Factional promotion mechanics.\n> - Their role and will are not revealed.\n> - They cannot whisper or be whispered to.\n> - They do not have access to dead chat, but can still talk in day chat.\n> - They can still perform any day or night abilities.\n> - They are not valid targets for other players, including yourself.\n> - They are fully revived at the start of the day after the next night.‎\n- -If your target dies to something else the night you kill them, the attributes will still apply.\n- You may self target.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tailor", "2527"], "Town", "Tailor", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2527");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, weave a tapestry based on three people of your choice.\n- During the night, show someone your tapestry. You will learn if they like it.‎");

		e.addField("Attributes:", "- You may not include the Town (Power) in your tapestry, nor may you show it to them. Your ability will fail if you try to do either.‎\n- Someone will like a tapestry if a majority of it is of their faction. For these purposes, \"Neutral\" is a faction.\n- You may not self-target.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["shutin", "shut-in", "si", "2528"], "Town", "Shut-In", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2528\n*Hikikomori zettai justice!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "\"Invincivulnerable\"", true);

		e.addField("Abilities:", "‎- Shut another player in each night, causing their ability to fail unless it would be Astral.");

		e.addField("Attributes:", "- Your ability is Astral.\n- On full moons, your ability rampages.\n- Invincivulnerable Defense: *You have both Invincible and Vulnerable defense. You take attacks as if you were Invincible, but you die from visits as if you were Vulnerable.*");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["reducer", "2529"], "Neutral", "Reducer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2529\n*Sometimes the greatest way to say something is to say nothing at all.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Overkill)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Kill a player at night and reduce the rest of the Town by two letters in their name the following day.");

		e.addField("Attributes:", "- The day after you kill someone, select two letters in their name. These letters will be removed from **all** in-game text.\n- If all of the letters in a player's name is removed, that player is immediately dealt an Astral Overkill attack.\n- If a player's role name becomes blank, they will lose all of their abilities and attributes. This does not apply to your role.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["fish", "feesh", "2530"], "Neutral", "Fish", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2530");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Splash water in someone's face, roleblocking them.‎");

		e.addField("Attributes:", "‎- At the start of the game, it is revealed that \"It seems to be a great day to go fishing.\"\n- Each night, people may choose to cast a fishing line, and name a number from 1 to 10. You will also name a number from 1 to 10. If exactly one person guesses your number correctly, they will catch you. If multiple people guess correctly, you will not be caught and these people will be informed \"You felt a tug on the line, but it was someone else's hook!\"\n- If you are caught, you will gain a private chat with whoever caught you. You do not learn which faction they are part of.\n- You cannot be caught if you are dead. When you are dead, the town will be informed that \"The waters seem still. There seems to be no more fish in the water.\"");

		e.addField("Goal:", "Win with the most recent person to catch you. You do not be alive for this.‎");
	});

	register_role(["hell_bell", "hellbell", "hell", "bell", "hb", "knell", "2531"], "Neutral", "Hell Bell", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2531\n*Ring the bell.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Mark someone for death.\n- Select three people. If one of them dies, mark the other two for death. (1 night cooldown)\n- During the day, choose to ring and select a target. That night, anyone who visits you or your target will have their win condition changed to yours. (3 uses, 2 night cooldown)‎");

		e.addField("Attributes:", "‎- Roleblock and redirect immune\n- If someone is marked for death, they will die the next night.\n- You know who is marked and cannot select them as a target for any of your abilities.\n- You cannot choose to mark anyone the night you ring.\n- You gain a factional chat that includes anyone you convert. Converting someone does not remove from their original factional chat. If you die, everyone you converted is returned to their original win condition.");

		e.addField("Messages:", "\"You hear a bell toll during the night. Your time is near.\" (Target when marked for death)\n\"A deep bell echoes through the town. You don't know where it came from, but you fear what happens if you find out.\" (Start of Night after you ring)\n\"You found it. But it only took your soul.\" (Conversion)\n\"They could not escape the toll of the :neutralFaction: Hell Bell.\" (Public death message)\n\"Did you know the ringing of a bell to signal someone's death is called a knell?\" (Removed voiceline)");

		e.addField("Goal:", "Kill all who do not succumb to your ringing.");
	});

	register_role(["platypus", "2532"], "Neutral", "Platypus", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2532\n*Get out from under the table.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Place a helmet on another player. You control their actions until the other players sing the entirety of \"There's a Platypus Controlling Me\" by Dan Povenmire with the controlled player doing Doofenshmirtz's lines. It must be done before nightfall and the chain cannot be broken.\n- You will receive all feedback.‎");

		e.addField("Attributes:", "‎- If you are attacked, you will fight back against your attacker.");

		e.addField("Goal:", "Eliminate everyone else.‎");
	});

	register_role(["rtrt", "2533"], "Town", "RTRT", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2533\n*Since I'm the mad scientist, proclaimed by myself.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cook chili for a player at night, giving them Invincible defence as long as they do not use any abilities during that phase.\n- Cook curry for a player at night, making their ability unable to fail no matter what for this night and the next.\n- Attempt to reconstruct a dead player twice per game at night.‎");

		e.addField("Attributes:", "- Reconstructed players are made alive again, but cannot speak in any day chats and will be dealt an invincible attack at the end of every night, except for the first one following their revival.\n- You may only use one ability per night.\n- Effects of food are unaffected by your death.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["retrimancium", "retri", "2534"], "Town", "Retrimancium", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2534");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Use an Ability from a dead Townie.\n- Revive a Townie from the graveyard. (1 use)\n- With the Retrinomicon, use an Ability from any dead role. (2 uses)\n- With the Retrinomicon, summon a spirit of light to Astrally attack a player.\n- While dead, Seance with a Player during the day, Opening a chat with them, it will close at the end of the night.‎");

		e.addField("Attributes:", "‎- You are roleblock and redirect immune.\n- You are given the Retrinomicon at the beginning of night 3.\n- You cannot use an ability from the same dead player twice.\n- You may only Seance while dead, You may revive while dead, You may revive yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["so_youre_in_denial_about_being_a_furry", "soyoureindenialaboutbeingafurry", "furry", "furrydenial", "syidabaf", "sydabf", "2535"], "Neutral", "So you're in denial about being a furry.", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2535\n*Denial is but the first step on the road to enlightenment.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per day, make someone a furry in denial. From now on for the rest of the day, they must make their messages in furry speak (https://lingojam.com/FurryTalk)‎");

		e.addField("Attributes:", "- You will naturally make your visitors and your target for tonight's visitors in denial.\nSide Note: Once everyone in denial, the host must send all messages in furry speak because haha funi‎");

		e.addField("Goal:", "Get everyone in denial.‎");
	});

	register_role(["the_higher_powers", "thehigherpowers", "higherpowers", "thp", "hp", "2536"], "Town", "The Higher Powers", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2536");

		e.addField("Alignment", "Unique Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Ask a yes-or-no question during the night. You will learn the answer.\n- Smite someone at night, killing them. 2 uses.\n- Publicly reveal the contents of a whisper during the day. (5 uses per day)");

		e.addField("Attributes:", "‎- You may multitask.\n- You may choose to make your second ability **conditional**. This means you may say \"if the answer to tonight's question is [yes/no] then I will smite [X].\" You may set different conditions for both an affirmative and negative answer.\n- If you kill a Townie, you become a (1596) Priest to Higher Powers.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["five_kids_in_a_dinosaur_costume", "fivekidsinadinosaurcostume", "dinosaurcostume", "fivekids", "fkiadc", "fkdc", "2537"], "Town", "Five Kids In A Dinosaur Costume", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2537");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Five times per night, prevent someone from visiting by scaring them.\n- One time per night, prevent someone from being visited by acting scary outside their house.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["red_riding_hood", "redridinghood", "rrh", "2538"], "Neutral", "Red Riding Hood", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2538");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Walk into the big, scary woods, as you need to give a little gift to your grandma from your mother. Watch out for the wolf :D!\n- Eat the meat in your picnic basket that smells kinda weird.\n- Take the shortcut to your grandma's house! You certainly dont want to be late. Cannot be used in the nights your defense was lowered due to walking in the woods.");

		e.addField("Attributes:", "- The woods are big, vast and the silence just eats away at your soul. The night you walk in and the night after, your defense will be lowered to Fragile. The third night, you will exit the woods.\n- You've been walking for so long, every step you take makes you feel like you're getting further and further away from safety, and your stomach begins to rumble-- your tummy feels like its going to digest itself. The meat in your basket feels and smells really weirdly, and the appearence looks oddly similiar to that of a human hand, but-- you simply couldn't resist-- eating the meat in your basket will raise your defense to Powerful for the night.‎\n-Did you hear someone step on a branch? Eh, it's probably nothing. If you take the shortcut, your defense will be lowered to Fragile for tonight.");

		e.addField("Attributes (spooked.):", "- The night after you exit the woods, you will meet your grandma! Look at her, isn't she so sweet? With her...sharp, pointy teeth? Her giant nails? All the grey hair on her face and arms...?\n- If you're lucky, you acted smart and took the shortcut, arriving to your grandma before the wolf could. Otherwise-- scream all you want, nobody will come to save you. You will be dealt an Overkill attack at the end of the night you meet your grandma, IF you didnt take the shortcut.");

		e.addField("Goal:", "Successfully arrive to your grandma's house and then return home.‎");
	});

	register_role(["the_fog", "thefog", "fog", "tf", "2539"], "Neutral", "The Fog", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2539\n*You don't value the light until it's taken away from you.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "‎- During the night, choose whether you want to darken the night or day. You may do each of these three times.");

		e.addField("Attributes:", "‎- You're roleblock immune.\n- Darkening the day does the following:\n> - The first time you use it, players will no longer be able to whisper. \n> - The second time you use it, players will not be revealed as dead until they are lynched or visited (by a player other than the attacker). They will still be mechanically dead. Lynching them does not end the day.\n> - The third time you use it, all voting becomes hidden. Players will no longer be able to see who voted for who, or how many votes each person has.\n- Darkening the night does the following:\n> - The first time you use it, players no longer receive external notifications such as roleblocks or attacks. They will still receive notifications from their own role.\n> - The second time you use it, every player has a 20% chance to visit a random neighbor of their target. \n> - The third time you use it, you may kill someone each night in addition to your normal ability. Their death will appear as \"They were lost in the fog.\"");

		e.addField("Goal:", "Kill all major factions. You may win with Neutrals.‎");
	});

	register_role(["haikubot", "haiku", "greatbot!", "2540"], "Neutral", "HaikuBot", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2540");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Write a haiku to someone at night, making them cry so much they die.‎");

		e.addField("Attributes:", "‎- Whenever someone (in any game-related channel) posts a message that can be turned into a haiku (5 syllables, 7 syllables, 5 syllables, it doesn't have to make sense as long as it's not splitting a word), they are removed from the game.\n- This role also has the alias \"greatbot!\".");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["snas", "2541"], "Town", "Snas", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2541");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- bones or smth (For god’s sake yes this is an attack.)");

		e.addField("Attributes:", "- Your kills will appear to be from (360) Sans.‎");

		e.addField("Goal:", "Live to see the town lose.");
	});

	register_role(["night_medium", "nightmedium", "medium", "nm", "2542"], "Town", "Night Medium", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2542\n*Just innocently talking to the dead, yup!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Séance a player at night.");

		e.addField("Attributes:", "‎- Your target will become able to talk to the dead for the rest of the game.\n- Your target will also no longer be able to use abilities, vote, whisper, or speak in day chats, and their role and last will will be revealed, and they won't count towards majority or be a legal target for votes, whispers, or abilities for the rest of the game.\n- You may only séance someone once.\n- You may talk to the alive while dead.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wm_musician", "wmmusician", "musician", "2543"], "Mafia", "WM Musician", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 2543");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lull someone to sleep at night, or serenade the town at night.‎");

		e.addField("Attributes:", "- Players will know that they were lulled to sleep.\n- When you lull someone to sleep, you will remove all notifications from them. This does not include death messages.\n- When you serenade the town, you will stop the following day phase from happening.\n- You may not lull the same person to sleep two nights in a row.\n- You may only serenade the town once.\n- https://wikimafia.fandom.com/wiki/Musician‎");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["day_serial_killer", "dayserialkiller", "sk", "daysk", "2544"], "Neutral", "Day Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2544");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target during the day‎");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At day, you may choose to spare roleblockers instead.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["night_vigilante", "nightvigilante", "vigilante", "nv", "2545"], "Town", "Night Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2545");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone, except you can only do it during the night because you hate being seen. Also you just break into your target's house and shoot them point blank in their sleep so your attacks are unstoppable instead of powerful.‎");

		e.addField("Attributes:", "- You can only use your ability thrice.\n- Shooting a town member disables your ability the following night.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["day_night_vigilante", "daynightvigilante", "vigilante", "dnv", "2546"], "Town", "Day Night Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2546\n*I slept a little late, sorry. But hey, they died anyway.*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Shoot someone during the day.");

		e.addField("Attributes:", "- Your ability resolves at the end of the day. If your target dies, their death announcement happens after the beginning of the next night.\n- You can only shoot someone thrice.\n- If you kill a Town member, you will commit suicide at the end of the next day out of guilt.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["guess_who", "guesswho", "gw", "2547"], "Neutral", "Guess Who?", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2547\n*Continuing the old game trend with the TRUE deduction classic.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Modkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, select two players to face off in Guess Who?. The next day, they will be forced into a Guess Who match.‎");

		e.addField("Attributes:", "- The rules of the game are as follows:\n> - Each player will select a non-good-faction role to be their \"who\". **Players may select a good faction that didn't initially spawn.**\n> - A channel will be made that neither of the players can talk in, however they will be able to relay messages into the channel anonymously. All players will be able to spectate the channel.\n> - You select one person to go first. Starting with them, players alternate asking yes or no questions regarding the other person's role choice, and the host will answer the question truthfully. \n> - Whoever guesses the opponent's choice first wins. The winner will be converted into the role that they chose. Nothing happens to the loser.\n> - Each player has a limit of twenty questions. If this limit is reached by both players with no winner, both players die.\n> - If the day ends with no winner, both players die.\n- You may perform your ability once when dead.‎");

		e.addField("Goal:", "See the good faction that initially spawned lose the game.‎");
	});

	register_role(["the_calling_void", "thecallingvoid", "callingvoid", "tcv", "cv", "2548"], "Mafia", "The Calling Void", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2548");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- You may give a one-shot roleblock to any player at night, they may use it instead of their normal ability.");

		e.addField("Attributes:", "- You will astrally attack any acting role that for any reason doesn't act during the phase(s) they can. Roles with limited uses aren't included until they have acted at least once, and roles that can win with the Mafia won't be attacked either.‎");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["blackmailer", "bm", "bmer", "2549"], "Mafia", "Blackmailer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2549");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one person each night to Blackmail.‎");

		e.addField("Attributes:", "‎- Blackmailed targets cannot talk or react during the day.\n- You can hear private messages.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["day_blackmailer", "dayblackmailer", "blackmailer", "daybmer", "db", "2550"], "Mafia", "Day Blackmailer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2550");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Choose one person each day to Blackmail.");

		e.addField("Attributes:", "- Blackmailed targets cannot talk, react or use abilities during the day.\n- You can hear private messages.‎");

		e.addField("Goal:", factions.Mafia.goal);
	});
};
