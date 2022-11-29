//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["tomb_raiser_zombie", "tombraiserzombie", "tombraiser", "trz", "2651"], "Zombie", "Tomb Raiser Zombie", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2651");

		e.addField("Alignment", "Zombie Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- ‎Place a grave outside a player's house.\n- Once per game, summon a Zombie NPC for every non-broken grave.");

		e.addField("Attributes:", "- Graves give one level of defense (Vulnerable > None > Basic > Powerful > Invincible > Overprotective).\n- Graves can stack and last until destroyed.\n- Whenever a player with a grave is attacked, the level of the attack determines how many graves are broken. (Basic breaks 1 grave, Powerful breaks 2 graves, etc.)\n- Each grave destroyed lowers the level of the attack (An Unstoppable attack that breaks 2 graves is now a Basic attack.)\n- If a player dies, all graves on them are destroyed.\n- Zombie NPCs are NPC's named Grave Zombie. Grave Zombies are controlled by the Zombies and are all given a random weak zombie role (host decides what roles are considered weak).\n- After 1 day-night cycle, all Grave Zombies are ran over by a lawnmower and die.‎");

		e.addField("Goal:", factions.Zombie.goal);
	});

	register_role(["bone_thief", "bonethief", "bt", "2652"], "Backrooms", "Bone Thief", {subCat: "Entity"}, (e) =>
	{
		e.setDescription("Post 2652\n*Didn't you ever learn that staring is rude?*");

		e.addField("Alignment", "Backrooms Entity", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "‎- Stay home at night and kill all visitors.\n- Lure a visitor.");

		e.addField("Attributes:", "- Any players visiting you will be dealt an unstoppable attack because you steal their fucking bones.\n- Twice a game you can “mimic” another player’s voice, forcing your target to visit you. This bypasses redirect immunity.\n- Your victim’s will shall be unreadable due to it being blown away by the wind after they were made boneless‎.");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["murderer", "2653"], "Neutral", "Murderer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2653");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "Murder‎ someone at night.");

		e.addField("Goal:", "Kill everyone. Don't get killed.\n-_-");
	});

	register_role(["killer", "2654"], "Neutral", "Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2654");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Kill someone at night.‎\n;~;");


		e.addField("Goal:", "Kill everyone. Don't get killed.");
	});

	register_role(["bass_clarinet", "bassclarinet", "bc", "2655"], "Band", "Bass Clarinet", {subCat: "Woodwind"}, (e) =>
	{
		e.setDescription("Post 2655");

		e.addField("Alignment", "Band Woodwind", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Mark a player at night.\n- (Rehearsal) Mark all of a player's visitors, then rehearse.\n- (Concert) Immediately kill all marked players.‎");

		e.addField("Attributes:", "- **Rehearsal Radius**: 3\n- Marks are permanent unless the target is Purged. You know if a mark is removed.‎");

		e.addField("Goal:", factions.Band.goal);
	});

	register_role(["r.i.t.u.a.l.i.s.t", "ritualist", "reallyimportanttownieusedatliterallyinvoluntarilysacrificingtown", "importanttownie", "2656"], "Town", "R.I.T.U.A.L.I.S.T", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2656");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable/Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Select two players. Deal an Overkill attack to your first target, and if they were Town, deal an Unstoppable attack to your second.");

		e.addField("Attributes:", "- For all purposes except goal and win condition, you are considered Town.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["possessor", "2657"], "Neutral", "Possessor", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2657");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Strengthen your soul and weaken your body for the next phase. 4 uses.‎");

		e.addField("Attributes:", "‎- If your soul is strong and body is weak during the day, and you are lynched, you will steal the body of the first person to vote for you.\n- If your soul is strong and body is weak during the night, and you are killed, you will steal the body of the first person to vote for you.\n- When stealing a player's body, you survive and they die, to themselves if at night. You clean them and become their exact role.");

		e.addField("Goal:", "‎Steal the body of another player, then complete that goal.");
	});

	register_role(["inca", "incaempire", "tawantinsuyu", "2658"], "Civilization", "Inca", {subCat: "Economic"}, (e) =>
	{
		e.setDescription("Post 2658\n*\"Oh, Incas of Cusco! Conquerors of all the land! Are you not ashamed that people so inferior to you, and unequal in weapons, should be equal to you and resist for so long a time?\" -Pachacuti*");

		e.addField("Alignment", "Unique Civilization Economic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Survey the town from above, learning who received the most visits that night and how many visitors they received. In the event of a tie, you will see one at random.\n- Watch closer, seeing exactly who visited the target. (Costs 2 gold + 1/3 of nightly earnings, rounded up)‎");

		e.addField("Attributes:", "- Astral.\n- Generates 1 gold for every visitor on the target.‎");

		e.addField("Messages:", "“They were slain by an Incan Warak-aq.” (Factional Kill)\n“You saw activity at [player]’s house! [#] people visited your target.” (Watching)‎");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["small", "smol", "2659"], "Town", "Small", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2659\n*Hey look! I'm tiny!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "‎- Talk in the day chat.\n- Talk to one dead person.\n- Seance someone during the day when dead, because you can bypass regular dead people night limitations unseen.");

		e.addField("Attributes:", "‎- You’re like a medium, but smaller. This allows you to avoid being blackmailed, poisoned, converted, **passively** doused, being attacked **ONCE**, roleblocked if gained the ability to visit, and if you gain any visiting ability, all visits are astral\n- You can’t talk to more than 1 dead person");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["large", "2660"], "Town", "Large", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2660\n*You all look like ants from up here*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Ability:", "‎- Converse with the dead.");

		e.addField("Attribute:", "‎- You can see dead chat always. If you are blackmailed, your chat can only be seen by the dead.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["liquid_pain", "liquidpain", "lp", "2661"], "Backrooms", "Liquid Pain", {subCat: "Object"}, (e) =>
	{
		e.setDescription("Post 2661\n*AAAAAHHHHGGGGGGGGG MY INTERNAL ORGANS!!!*");

		e.addField("Alignment", "Backrooms Object", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deliver someone Liquid Pain at night‎");

		e.addField("Attributes:", "‎- Your target may either choose to drink the liquid pain, or not.\n- Your target will be dealt a powerful attack if they drink it.\n- If they choose not to, you will learn their exact role, bypassing any abilities that would change their results, as well as one other player they win with.");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["almond_water", "almondwater", "aw", "2662"], "Backrooms", "Almond Water", {subCat: "Object"}, (e) =>
	{
		e.setDescription("Post 2662\n*Smells like vanilla and rose water*");

		e.addField("Alignment", "Backrooms Object", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Give a teammate almond water.");

		e.addField("Attributes:", "- Giving another entity almond water will give them Overprotective defense, as well as prevents them from having any negative effects being used on them that night.‎");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["turntabler", "ohhowtheturntables", "2663"], "Neutral", "Turntabler", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2663\n*From back whence you came!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transport two players. If they belong to the same faction, their roles are switched as well.\n- Reverse reroll someone. If they manually rerolled to their current role, they will be turned back into whichever roll they manually rerolled from. (3 uses)‎");

		e.addField("Attributes:", "‎- The game begins on Day 5. While you're alive, each subsequent phase progresses backwards. If the game goes past Day 1, it ends.\n- If you survive until the end of the game, all non-Neutrals immediately lose.");

		e.addField("Goal:", "Survive until the end of the game having successfully used your reverse reroll thrice.‎");
	});

	register_role(["spirit_links", "spiritlinks", "sl", "2664"], "Backrooms", "Spirit Links", {subCat: "Object"}, (e) =>
	{
		e.setDescription("Post 2664\n*The rocks are a source of power. Neat!*");

		e.addField("Alignment", "Backrooms Object", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Throw a spirit link at a player.");

		e.addField("Attributes:", "- These tiny palm sized hats will cause a random effect on a player.\n- These effects can range from healing their target to completely banning them from the game. There are no limits.\n- These effects should mostly be negative, but can also be positive.\n- The host should use a randomized wheel to determine if the effect is harmful or helpful‎.");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["nubslair", "nubs", "nub", "2665"], "Discordian", "Nubslair", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2665\n*@everyone ROLE NOW*");

		e.addField("Alignment", "Discordian Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Control a player each night. (See 99: Witch)‎");

		e.addField("Attributes:", "- You will immediately learn the role of anyone who pings you in the day chat.\n- When someone selects you as a target, you will immediately learn the role of whoever is targeting you.‎");

		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["leviathans_tooth", "leviathanstooth", "leviathantooth", "leviathan", "tooth", "lt", "2666"], "Backrooms", "Leviathan's Tooth", {subCat: "Object"}, (e) =>
	{
		e.setDescription("Post 2666\n*Just sign your names here*");

		e.addField("Alignment", "Backrooms Object", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select 2 players to determine their “compatibility”‎.");

		e.addField("Attributes:", "- If the two players can win together, they immediately swap roles.\n- If they do not win together, but have similar goals (Kill all who oppose, hang all evils, ect) they lose any form of defense they had for the next 3 nights. If neither have defense, deal a basic attack to both.\n- If the two players oppose each other, deal a powerful attack to both.\n- Your visits are astral.‎");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["impossibility_engine", "impossibilityengine", "impossibleengine", "impossibility", "ie", "2667"], "Backrooms", "Impossibility Engine", {subCat: "Object"}, (e) =>
	{
		e.setDescription("Post 2667\n*This could literally never happen*");

		e.addField("Alignment", "Backrooms Object", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Overprotective)", true);

		e.addField("Abilities:", "- Set up an impossibility engine outside a target’s house.‎");

		e.addField("Attributes:", "- Visitors of your target has a high chance for something improbable to happen to them, such as them not getting their results, them being shot by a veteran, or just straight disappearing.\n- These effects can also benefit your target, such as give them basic defense, or healing them. These are extremely less likely to happen though.\n- All of your visitors have a 10% chance to noclip out of the town, killing them instantly with a overkill attack.\n- This role can only spawn if there is exactly 2 unique roles in the game.‎");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["voidlings", "voidling", "2668"], "Backrooms", "Voidlings", {subCat: "Entity"}, (e) =>
	{
		e.setDescription("Post 2668\n*It is not recommended attempting to survive being in a void*");

		e.addField("Alignment", "Backrooms Entity", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player at night‎.");

		e.addField("Attributes:", "‎-Attacked players will become a voidling the following night.\n- Players are informed they are attacked, and the only way to prevent the transformation is a Doctor.\n- They must select a target to attack, or you can choose for them (bypassing control immunity).\n- The player will then die at the end of the night they attack someone.\n- If you die, any current voidling is cured immediately.");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["firefighter_is_a_good_role", "firefighterisagoodrole", "firefighterisgood", "fiagr", "fig", "2669"], "Neutral", "Firefighter is a good role", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2669");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Turn someone into a Firefighter (418). Regardless of their original role. Unless they're an Arsonist. They can stay, Firefighters like being useful.");

		e.addField("Attributes:", "‎- Arsonist (87) will always spawn.");

		e.addField("Goal:", "See Firefighters be the only survivor.‎");
	});

	register_role(["escort_but_its_actually_an_sk", "escortbutitsactuallyansk", "escortsk", "sk", "ebiaas", "2670"], "Neutral", "Escort but it's actually an SK", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2670");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Roleblock your target.‎");

		e.addField("Attributes:", "- Instead of roleblocking your target, you actually just stab them.\n- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["firgilante", "2671"], "Town", "Firgilante", {subCat: "Spilling"}, (e) =>
	{
		e.setDescription("Post 2671");

		e.addField("Alignment", "Town Spilling", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot water at someone's house. If they are doused, deal an Unstoppable attack. (1 use)");

		e.addField("Attributes:", "- Firefighter (418) will transform into this as soon as all Arsonists in the game die.\n- You are immune to all forms of coping, seething, and malding.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["sk_but_its_actually_an_escort", "skbutitsactuallyanescort", "escort", "escortsk", "sbiaae", "2672"], "Town", "SK but it's actually an Escort", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2672");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Stab your target at night.");

		e.addField("Attributes:", "- Instead of stabbing your target, you actually just roleblock them.\n- If you are attacked, you will roleblock the attacker in addition to your target.\n- When you automatically roleblock an attacker, the attack attempt will fail. \n- Attackers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare attackers instead.‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["i_spent_30_seconds_on_this", "ispent30secondsonthis", "spent30seconds", "is3sot", "30seconds", "thirtyseconds", "2673"], "Mafia", "I spent 30 seconds on this", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2673");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- you can learn someone's role and if they're town you roleblock them and if not you rd them to themselves‎");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["transporter_but_its_actually_an_sk", "transporterbutitsactuallyansk", "transportersk", "sk", "tbiaas", "2674"], "Neutral", "Transporter but it's actually an SK", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2674");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Attempt to transport 2 players.");

		e.addField("Attributes:", "- You will actually just stab both players.\n- If you are roleblocked, you will attack your roleblocker in addition to your targets.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their will covered in blood and will be unreadable.\n- At night, you may choose to spare roleblockers instead.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk_but_its_actually_a_consort", "skbutitsactuallyaconsort", "skconsort", "sk", "sbiaac", "2675"], "Mafia", "SK but it's actually a Consort", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2675");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab your target at night.‎");

		e.addField("Attributes:", "- Instead of stabbing your target, you actually just roleblock them.\n- If you are attacked, you will roleblock the attacker in addition to your target.\n- When you automatically roleblock an attacker, the attack attempt will fail.\n- Attackers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare attackers instead.‎");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["pm_but_its_actually_sk", "pmbutitsactuallysk", "pmsk", "sk", "pbias", "2676"], "Coven", "PM but it's actually SK", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2676");

		e.addField("Alignment", "Coven Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "‎- Select one of three potions to use at night.");

		e.addField("Attributes:", "- None of the potions you select will have their intended effect.\n- They are all just a button to stab your target.\n- If you are roleblocked, you will attack your roleblocker in addition to your targets.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their will covered in blood and will be unreadable.\n- At night, you may choose to spare roleblockers instead.‎");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["lab_ravioli", "labravioli", "ravioli", "lr", "2677"], "Neutral", "Lab Ravioli", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2677");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Three times per cycle (one day and night), choose to submerge a player in sauce. If they don't climb out within an hour of being notified, they can no longer escape.\n- Once you have 5 players submerged within the sauce, gain the ability to submerge a player at night, preventing literally any effect ever. Like literally nothing can interact with them -- you have fully assimilated them into the life of a healthy, spry, Lab Ravioli.‎");

		e.addField("Attributes:", "- At various levels of player submersion, gain layers of defense.\n(0: Vulnerable)\n(1-2: None)\n(3-6: Basic)\n(7-10: Powerful)\n(11+: Invincible)");

		e.addField("Goal:", "Submerge every living player within the sauce.‎");
	});

	register_role(["post_2678", "post2678", "2678"], "Neutral", "Post 2678", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2678\n*Why am I here*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Attack a player who mentions the number 2678, or any combination of 2 of those numbers, including the same number twice.‎");

		e.addField("Attributes:", "- This role exists solely to take up this number.\n- You die immediately if a survivor is redirected into you. This cannot be stopped.\n- A survivor and at least one controlling role must spawn for this role to spawn.\n- A mayor must also spawn.‎");

		e.addField("Goal:", "‎Kill the Mayor.");
	});

	register_role(["15_second_role", "15secondrole", "15s", "fifteensecondrole", "fifteenseconds", "2679"], "Neutral", "15 second role", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2679");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Ability:", "stab somone deal powerful attack to them and your voters next day‎");

		e.addField("Attributes:", "‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["10_second_role", "10secondrole", "10s", "tensecondrole", "tenseconds", "2680"], "Town", "10 second role", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2680");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "hug someone healing a broken heart‎");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["5_second_role", "5secondrole", "5s", "fivesecondrole", "fiveseconds", "2681"], "Town", "5 second role", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2681");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎heal and purge someone");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["3_second_role", "3secondrole", "3s", "threesecondrole", "threeseconds", "2682"], "Town", "3 second role", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2682");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎kill");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["uwu", "2683"], "Any", "uwu", (e) =>
	{
		e.setDescription("Post 2683\n*uwu*");

		e.addField("Alignment", "uwu uwu", true);
		e.addField("Attack", "uwu", true);
		e.addField("Defense", "uwu", true);

		e.addField("Abilities:", "- uwu uwu uwu uwu uwu uwu uwu.‎");

		e.addField("Attributes:", "- uwu uwu uwu uwu uwu uwu uwu uwu uwu\n- uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu\n- When the player receives this role card, they may replace all instances of \"uwu\" in this role with a word, except for the one in this attribute. The host must then approve the role card.\n- This can spawn in any slot.‎");

		e.addField("Goal:", "uwu uwu‎");
	});

	register_role(["hand_turkey", "handturkey", "turkey", "ht", "2684"], "Neutral", "Hand Turkey", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2684\n*Gobble Gobble Gobble*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Feed someone so much food that they die of a coma‎");

		e.addField("Attributes:", "- Your attack can only be stopped if someone else attacks your target, which makes them projectile vomit all the food.\n- The target gets basic defense from any other attack that night. Just not your attack.\n- If someone dies to you, the host must also send them the image provided below‎.");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1040854288332763156/IMG_3364.jpg");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["yellow_hallways_n_stuff", "yellowhallwaysnstuff", "yellowhallways", "nstuff", "yhns", "2685"], "Backrooms", "Yellow Hallways N Stuff", {subCat: "Object"}, (e) =>
	{
		e.setDescription("Post 2685\n*I don't know much about the Backrooms, so I can't say I've got any ideas for roles to add to that*");

		e.addField("Alignment", "Backrooms Object", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Remove someone's imagination at night, causing them to lose their first ability. It still resolves if they used it tonight.\n- Be yellow during the day, causing yourself to gain Powerful defense and roleblock, redirect, and detection immunity the next night.");

		e.addField("Attributes:", "- You may only be yellow three times.\n- If you would remove an ability of someone who doesn't have an ability, you attack them instead.\n- If you would attack someone who would survive your attack, you roleblock them instead.\n- If you would roleblock someone who would be immune or who it would have no effect on, you permanently remove them from the game instead.\n- If you would permanently remove someone from the game who that would have no effect on, you cope, seethe, and mald instead.‎");

		e.addField("Goal:", factions.Backrooms.goal);
	});

	register_role(["squidly", "squid", "2686"], "Discordian", "Squidly", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2686\n*Get strapped. We're **bound** to have fun.*");

		e.addField("Alignment", "Discordian Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Strengthen your own resolve. This counts as a self-visit and does nothing else. (2 uses) ");

		e.addField("Attributes:", "- When you perform the factional attack, it's modified depending on how many times the Discordians were visited collectively on the night you use it.\n> No visits: Attack reduced to None tier.\n> 1 visit: No modifiers.\n> 2-3 visits: Attack upgraded to Powerful, rampages.\n> 4+ visits: Attack upgraded to Unstoppable, rampages and attacks the two closest alive neighbors as well.\n- On nights where the Discordians would collectively be visited 3 or more times, you will grant all Discordians besides yourself Detection immunity and heal them.\n- If you're the last remaining Discordian, your attack will always resolve with the 4+ visit modifier.\n- You may multitask.‎");

		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["the_wikipedia", "thewikipedia", "wikipedia", "tw", "2687"], "Neutral", "The Wikipedia", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2687\n*Wow! I can edit this stuff?*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Use the ability of any role.");

		e.addField("Attributes:", "‎- If a role is based off of something that has a Wikipedia page, you may use their ability.\n- You may not use an ability more than once.\n- You’re not allowed to convert other players.\n- Any visits against you will fail, and instead the player will donate a dollar to you.\n- You know everyone who has donated a dollar to you.");

		e.addField("Goal:", "‎Have every alive player donate a dollar to you.");
	});

	register_role(["1dash1", "oneone", "1hyphen1", "0", "literallyanythingotherthan'1-1'", "2688"], "Town", "1-1", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2688");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select two players, swap their roles, 2 uses.\n- Select a player, change their role to one of the same alignment.‎");

		e.addField("Attributes:", "‎- You can't self target.\n- Your targets are told why their role was changed.\n- Your ability is stopped by conversion immunity.\n- You don't know the outcome of your ability, or if it fails or succeeds.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wet_town_traitor", "wettowntraitor", "wettraitor", "wtt", "2689"], "Warfleet", "Wet Town Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2689");

		e.addField("Alignment", "Warfleet Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "‎- At the beginning of the game, you will roll three Town Support roles, and may choose one to gain the abilities and attributes of.\n- Your existence will be notified to all players.");

		e.addField("Upgrades:", "- You may choose one of the two Town Support roles you discarded at the beginning of the game to gain the abilities and attributes of. Alternatively, you may choose to roll a completely new Town Support role. You may multitask your separate roles.\n- Complete detection immunity. You may choose a role at any time to appear to be when investigated.‎");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["catamaran", "2690"], "Warfleet", "Catamaran", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 2690");

		e.addField("Alignment", "Warfleet Offensive", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pull a player into the depths, attacking them Powerful-ly and cleaning them. (0 uses) ");

		e.addField("Attributes:", "- You'll gain a use of your ability whenever a member of the Warfleet dies.\n- You may multitask your ability with the factional kill.\n- You may not perform the factional kill until upgraded.‎");

		e.addField("Upgrades:", "- You may now perform the factional kill.\n- Your vengeance fuels you Depending on the amount of dead Warfleet members, you gain certain buffs. \n> 1: One-time basic defense.\n> 2: Attack upgraded to Unstoppable.\n> 3+: Your attacks now Rampage.\n- When you die, you may choose a player to drag down with you, dealing an Unstoppable attack to them next night. If the game would enter an end-game state because of this, the Warfleet reign victorious. \n- You will retain your upgrade effects if promoted to the Warlord.‎");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["redliner", "2691"], "Town", "Redliner", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2691\n*Let's have no regrets. This was the only path.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player at night. If, for any reason, they would die that night, keep them alive in spite of their would-be method of death and **Redline** them.‎");

		e.addField("Attributes:", "- Redlined players have their roles upgraded to their highest possible efficiency. Their actions become Astral and Rampaging, go through immunities, are immune to sabotage (including priority changes, ability blockers, etc), and deal Overkill attacks if they can kill. Protective roles simply block attacks instead of giving defense, etc. etc. They gain all immunities, and cannot have them ignored. Whatever else needs to happen to upgrade their role in any way will happen. \n- Redlined players will die the night after they are inflicted with the status, and then cannot be resurrected or have their corpse manipulated. This is not in any way, shape or form preventable or reversible.\n- You may only target each player once. \n- If your target received more than one means of protection on the night that you targeted them, including you, then Redlining them will not kill them, but will wear off the next night.\n- You are roleblock and prevention immune.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["blueliner", "2692"], "Neutral", "Blueliner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2692\n*Let's have regrets. This was one of several paths.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "‎- Target two players during the day and **Blueline** them.");

		e.addField("Attributes:", "‎- When players are **Bluelined**, they will be prompted at the start of the next night to choose one of three paths, simply Path 1, Path 2 and Path 3. If your two targets don't choose the same path, they're both roleblocked and you learn their roles. Evil roles targeted by this ability won't be affected by the roleblock.\n- The second time you roleblock any player, you'll attack them as well.");

		e.addField("Goal:", "Live to see the Good faction lose the game.‎");
	});

	register_role(["yellowliner", "2693"], "Sentry", "Yellowliner", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2693\n*Let's have some regrets. There might be a path.*");

		e.addField("Alignment", "Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Target one authorized and one non-authorized player at night and **Yellowline** them.");

		e.addField("Attributes:", "- If a Yellowlined player is a Sentry, they will be redirected to the other Yellowlined player.\n- If a non-Sentry targets a Yellowlined player, they will be redirected to the other Yellowlined player. They will learn that it was due to Yellowliner.\n- Yellowlining only lasts for the night that the players get Yellowlined.\n- Roleblock and Redirect immune‎");

		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["orangeliner", "2694"], "Underworld", "Orangeliner", {subCat: "Offensive"}, (e) =>
	{
		e.setDescription("Post 2694\n*Let's have exactly one regret. This was never a path in the first place.*");

		e.addField("Alignment", "Underworld Offensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Each night, choose a player. If they're doused, **Orangeline** them.");

		e.addField("Attributes:", "‎- Orangelined players have roleblock and prevention immunity and will douse the first non-Underworld player that they visit that night.\n- If you would Orangeline a nondoused player for any reason, you will fail to do so.");

		e.addField("Goal:", factions.Underworld.goal);
	});

	register_role(["finale", "2695"], "Town", "Finale", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2695");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- (First) Attack a player, {If another Killing role visits them, Your attack will be Unstoppable and bypass any defensive abilities.}\n- (Second) Guard a player, Giving them basic defense, <If another Protective role visits them, The target gets Overprotective defense and their action cant fail by any means.>\n- (Third) Investigate (35) a player, [If an Investigative role visits them, You will learn your target's exact role, ignoring any adverse effects.]");

		e.addField("Attributes:", "‎- You can use only the ability corresponding to your position, You will start at a random position and it will shuffle each night(1st -> 2nd -> 3rd -> 1st...)\n- You have 3 lives, if you were to die by any means, you will instead lose a life, once you reach 0 or get lynched you will die.\n- If you lose a life, you will randomly Cleave, Chop or Carve permanently.\n- Cleave removes {Braces}, Chop removes <Chevrons>, Carve removes [Brackets].\n- You will not be notified if your abilities got boosted, except for investigation results.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["damnit_bionic", "damnitbionic", "damnit", "bionic", "db", "2696"], "Neutral", "damnit bionic", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2696");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Visit someone at night. If their role broke a role chain, kill them.");

		e.addField("Goal:", "‎Kill everyone who is a valid kill target.");
	});

	register_role(["chef", "2697"], "Town", "Chef", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2697\n*This one could use a pinch more salt.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Taste a player each night. You will learn how many sentences of flavourtext their role has.\n- Relish a player each night. You will learn whether their role is very flavourful, somewhat flavourful, or not flavourful in the host's opinion. A role's flavourfulness is how well its mechanics align with its lore, like 2351: Cameraman's. A role with no discernible lore like 1311: Cryptid is not flavourful.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["kaibokan", "kaibo", "kaibōkan", "2698"], "Warfleet", "Kaibōkan", {subCat: "Defensive"}, (e) =>
	{
		e.setDescription("Post 2698\n*To win with sacrifices is no true victory.*");

		e.addField("Alignment", "Warfleet Defensive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Submerge an ally ship tonight. All non-Warfleet players who visit them will be redirected to one of their two closest alive neighbors at random. You can only target other Warfleet members, or you yourself.‎");

		e.addField("Attributes:", "- 1491 Warlord Promotion Priority; You will be chosen first over other members, including the Carrier. You may toggle this at any time if you so wish.\n- If promoted to the Warlord, all Warfleet members besides you will gain Basic defense for the next night.‎");

		e.addField("Upgrades:", "- You may now always target enemies with your ability.\n- Your redirections become silent - giving no notification.\n- If promoted to the Warlord, all Warfleet members besides you become lynchproof the next day in addition to the Basic defense. ‎");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["survivoror", "2699"], "Neutral", "Survivoror", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2699");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Add \"You must be alive in order to win\" to your target's goal, They will no longer stop the game from ending.‎");

		e.addField("Attributes:", "‎- 4-uses basic autovest.");

		e.addField("Goal:", "Ensure 2 people lose beacuse of your ability.‎");
	});

	register_role(["spellcheck", "spellchecker", "2700"], "Neutral", "Spellcheck", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2700\n*Finally! An NK with good kill power!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill someone at night.‎");

		e.addField("Attributes:", "- If, at any point in the game and in any channel, someone makes a spelling mistake, kill them. Grammar and punctuation (except apostrophes) do NOT count. The death note will automatically be set to the correct spelling of the misspelled word. Edited messages that the host doesn’t see will not count.\n- Yes, you are affected by your attribute.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
};
