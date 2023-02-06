//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["ar_seeker", "arseeker", "ars", "3301"], "Town", "AR Seeker", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3301");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may mark a player during the day.\n- You may watch a player's house at night.");

		e.addField("Attributes:", "- You may not watch yourself.\n- You will shoot one marked player if they visit your target.\n- If you shoot another Town member you cannot mark or shoot for the next two days.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["ar_bouncer", "arbouncer", "bouncer", "arb", "3302"], "Town", "AR Bouncer", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 3302");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may guard a player at night, causing direct visits to fail against the player.");

		e.addField("Attributes:", "- You will learn how many players visited your target.\n- If your target is directly attacked or is the victim of a harmful visit, they will live and you will be attacked instead.\n- You cannot be roleblocked.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["tuff_golem", "tuffgolem", "tuff", "tg", "3303"], "Minecraft", "Tuff Golem", {subCat: "Passive"}, (e) =>
	{
		e.setDescription("Post 3303");

		e.addField("Alignment", "Minecraft Passive", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Become stone at someone's house. Anything negative will not be able to effect them for this night and tomorrow morning. This includes death, roleblocks, etcetera. You'll know who visits them. You may self target.\n- Come alive and scare a player who visited your target. You can only use this on people who visited them while you were stone. They'll be scared and give you any items they have. They'll also be roleblocked.");

		e.addField("Attributes:", "- You will learn if you scare a player but they aren't roleblocked because of roleblock immunity or something similar.\n- If your target is attacked, you will immediately come alive and attack the player but the roleblock doesn't matter. ");

		e.addField("Goal:", factions.Minecraft.goal);
	});

	register_role(["espionage_locust", "espionagelocust", "el", "3304"], "Locust", "Espionage Locust", {subCat: "Rock"}, (e) =>
	{
		e.setDescription("Post 3304");

		e.addField("Alignment", "Locust of the Rock", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night you may convert somebody to Espionage Locust.");

		e.addField("Attributes:", "- Everybody you convert shows as their original role.\n- You bypass all conversion immunity.");

		e.addField("Goal:", factions.Locust.goal);
	});
 
	register_role(["plant_locust", "plantlocust", "pl", "3305"], "Locust", "Plant Locust", {subCat: "Plant"}, (e) =>
	{
		e.setDescription("Post 3305");

		e.addField("Alignment", "Locust of the Plant", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Spend 50 Sun**: Convert somebody.\n- **Spend 100 Sun**: Kill somebody.");

		e.addField("Attributes:", "- You bypass all conversion immunity.\n- You gain 100 Sun per night.");

		e.addField("Goal:", factions.Locust.goal);
	});
 
	register_role(["boomerang_monkey", "boomerangmonkey", "boomerang", "3306"], "Monkey", "Boomerang Monkey", {subCat: "Primary"}, (e) =>
	{
		e.setDescription("Post 3306");

		e.addField("Alignment", "Monkey Primary", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Redirect someone to either you or themselves at night.");

		e.addField("Attributes:", "- You can only choose one upgrade.\n- You will be informed when you can unlock MOAB Domination.\n- Roleblock and redirect immune.\n**Glaive Lord** (Requirement: Survive two attacks)\n- You now kill everyone who visits you. You will shred the will of everyone you kill.\n- Each night, throw a Glaive at someone. The Glaive will ricochet along the first person your target visits, then the first person that person visits, etc. It will attack either the first nonvisitor, the first person to be hit by the Glaive twice, or the last person before the Glaive would hit a Monkey.\n**MOAB Domination** (Requirement: Redirect players of four different subalignments)\n- You now throw a Kylie Boomerang, which instead roleblocks and attacks anyone you target.\n- The Kylie will explode on impact, burning the target and everyone who visits. The burn reduces defense by one stage to a minimum of Vulnerable, taking effect the next day and lasting until the following day.\n- Kylies are Astral");

		e.addField("Goal:", factions.Monkey.goal);
	});
 
	register_role(["patron", "3307"], "Mafia", "Patron", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 3307\n*Let's chat, shall we? Have a drink. It's on me.*");

		e.addField("Alignment", "Mafia Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, select a target to have a chat with at night. You will anonymously be able to chat with them, appearing as \"**The Patron**\". That night, they'll also be given an offer, which they may accept or deny. They must make their choice well before the night ends, and they cannot change their decision. You're notified of the target's decision as soon as they make it.");

		e.addField("Attributes:", "- Targets who you have a chat with are roleblocked through immunities, and all non-Mafia visits on them will fail. If they accept your offer, you'll protect them with Powerful defense for that night and the next.\n- For each offer accepted, the Patron gains an anonymous vote to use during day phases which appears as \"**The Patron**\" in the votecount and will not increase majority. \n- The game will end if the only remaining players who oppose the Mafia have accepted one of your offers before.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["dreamer", "3308"], "Town", "Dreamer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3308\n*I'll bring out the best in you!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target and up to two words. Tonight, they'll be processed as if any instance of those words in their abilities/attributes was removed.\n- Dream big, doing the same thing as your first ability but instead allowing you to select up to five words. (1 use)");

		e.addField("Attributes:", "- Your ability uses can be Rule 17'd. If such is the case, your ability does nothing and you'll receive \"That would be an issue.\" as feedback. Your second ability will be refunded if it gets denied. \n- You may not self-target. ");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["big_dreamer", "bigdreamer", "dreamer", "bd", "3309"], "Town", "Big Dreamer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3309\n*Peoples' dreams... ain't ever end!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target and up to two words. Tonight, their actions will be processed as if any instance of those words in their abilities/attributes was removed.\n- Dream big, doing the same thing as your first ability but instead allowing you to select up to five words. (1 use)");

		e.addField("Attributes:", "- Your ability uses can't be Rule 17'd. 😰\n- You may not self-target.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["bigger_dreamer", "biggerdreamer", "dreamer", "bd", "3310"], "Town", "Bigger Dreamer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3310\n*our goals WILL be achieved!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target and up to two words. Tonight, their actions will be processed as if any instance of those words in their abilities/attributes was removed.\n- Dream big, doing the same thing as your first ability but instead allowing you to select up to five words. (1 use)");

		e.addField("Attributes:", "- Your abilities can’t be Rule 17’d under any circumstance.\n- You may self-target for whatever reasons you may have. 😨");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["biggest_dreamer", "biggestdreamer", "dreamer", "bd", "3311"], "Town", "Biggest Dreamer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3311\n*Even if a hundred million stars fall from heaven, I'll keep fighting!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target and up to two words. Tonight, their actions will be processed as if any instance of those words in their abilities/attributes was removed.\n- Dream big, doing the same thing as your first ability but instead allowing you to select up to one hundred million words 😱. (1 use)");

		e.addField("Attributes:", "-Your abilities can’t be Rule 17’d, prevented, or interfered with under any circumstance.\n- You may self-target.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["undoctor", "undoc", "doctornt", "3312"], "Town", "Undoctor", {subCat: "Unprotective"}, (e) =>
	{
		e.setDescription("Post 3312\n*Im not medically licensed*");

		e.addField("Alignment", "Town Unprotective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Vulnerable)", true);

		e.addField("Abilities:", "- Select a target to give vulnerable defense for the night.\n- Select yourself to give yourself vulnerable defense for the night. (1 use)");

		e.addField("Attributes:", "- You learn if your target is attacked that night.\n- This is mechanically a Town role in every way except win condition.");

		e.addField("Goal:", "Make the good faction lose (May win while dead)");
	});
 
	register_role(["musketeer", "3313"], "Other", "Musketeer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3313");

		e.addField("Alignment", "Do-Gooder Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the night, shoot someone while also piercing through any protective roles.\n- Your gun takes one night to reload.");

		e.addField("Attributes:", "- If you kill another Do-Gooder, you reveal yourself at the start of the next day, and may only fire one more shot, as well as making it so no protective roles may go on you the next night.");

		e.addField("Goal:", "Reduce the local crime population to none.");
	});
 
	register_role(["the_do-badder", "the_do_badder", "thedobadder", "do-badder", "do_badder", "dobadder", "tdb", "3314"], "Other", "The Do-Badder", {subCat: "Traitor"}, (e) =>
	{
		e.setDescription("Post 3314");

		e.addField("Alignment", "Do-Gooder Traitor", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every other night, kill a Do-Gooder.");

		e.addField("Attributes:", "- If any Do-Gooder uses their ability on you, you will be dealt an Unstoppable attack that cannot be stopped.\n- You know who each Do-Gooder is, but not their role.");

		e.addField("Goal:", "Kill all Do-Gooders.");
	});
 
	register_role(["a_role_with_really_weird_and_complex_mechanics_that_server_no_other_purpose_other_than_to_make_it_complex", "arolewithreallyweirdandcomplexmechanicsthatservernootherpurposeotherthantomakeitcomplex", "arwracmtsnopottmic", "complex_role", "complexrole", "ihateyouspaggy", "3315"], "Neutral", "A Role With Really Weird And Complex Mechanics That Serve No Other Purpose Other Than To Make It Complex", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3315\n*This is probably really unbalanced or unfair*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use one of the three abilities you have at your disposal.");

		e.addField("Attributes:", "- At the start of the game, role 3 roles from the same subalignment. You have these role’s abilities and any immunities they may have.\n- If you gain the abilities of killing roles, you only get 2 charges of each ability.\n- If you get the abilities of protective roles, they will all grant Invincible defense to your target and Vulnerable defense to their visitors.\n- If you get the abilities of investigative roles, every Xth person you check will return false feedback, where X is a random number that ranges from 2-10 chosen by the host. You don’t learn this number.\n- If you get the abilities of a support role, then you learn the role of one other member in that faction if it exists when using an ability.\n- If you get the abilities of a Head/Power role, then you will be able to use your ability three times.");

		e.addField("Attributes (cont.):", "- If you get abilities from another subalignment, then cause one other player in the game to be converted to a random faction that already exists on night 6. This will not affect conversion-immune players or members of an REF.\n- Every time this role wins, I (Spaggyt3) will specify one more subalignment’s effects until there are no more subalignments to give specific effects to.\n- This role may be rerolled for free if you find it too confusing.\n- The first person to call this role bad is roleblocked through immunities on the first night of the next game they play. This attribute only has a 10% chance of working if this role doesn’t additionally spawn, otherwise it’s guaranteed.");

		e.addField("Goal:", "Cause the death of 3 players from the same subalignment of your ability without dying. This may be through getting them lynched or killing them yourself.");
	});
 
	register_role(["power_of_four", "poweroffour", "pof", "⁴", "3316"], "Town", "Power of Four", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3316");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player, and choose a Town alignment. You will use the abilities of 4 random roles from that alignment on your target.");

		e.addField("Attributes:", "- You can target yourself.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["octaporter", "3317"], "Town", "Octaporter", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3317");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transport up to eight players each night. (3 uses)");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- Other players targeting your first target will secretly be redirected to your second. Other players targeting your second target will secretly be redirected to your third. Other players targeting your third target will secretly be redirected to your fourth. Other players targeting your fourth target will secretly be redirected to your fifth. Other players targeting your fifth target will secretly be redirected to your sixth. Other players targeting your sixth target will secretly be redirected to your seventh. Other players targeting your seventh target will secretly be redirected to your eighth. Other players targeting your eighth target will secretly be redirected to your first.\n- Your targets will know that they were transported.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role([":trolled:", "trolled", ":troll:", "troll", "3318"], "Town", ":trolled:", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3318");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/1053520988790333470.webp?size=96&quality=lossless";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make someone angry, giving their ability a Rampaging effect.\n- Make someone seethe and mald, their abilities will now always rampage on full moons. (1 use)");

		e.addField("Attributes:", "- You may Self-target with your first ability, you may not Self-target with your second one.\n- Your target will not recieve extra feedback caused by their ability rampaging, but you will recieve it.\n- You secretly need 3 less votes to be lynched.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["lifeline", "3319"], "Town", "Lifeline", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3319\n*Luka died last night. They were shot by the Veteran they visited. Their role was Veteran.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transfer all attacks between two players at night.");

		e.addField("Attributes:", "- All attacks, regardless of their origin, will swap their targets. This can include indirect attacks.\n- Your ability does not produce a notification.\n- Astral");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["sk_that_hates_classic_roles", "skthathatesclassicroles", "classicrolehatingsk", "classicsk", "skthcr", "sthcr", "sk", "3320"], "Neutral", "SK That Hates Classic Roles", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3320");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player, if their role number is below 921, they are deemed a classic role and your attack will be Unstoppable.");

		e.addField("Attributes:", "- If you are visited by a classic role, you will attack them in addition to your target.\n- Classic roles that visit you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare classic roles instead.");

		e.addField("Goal:", "Ensure all classic roles are dead at the end of the game.");
	});
 
	register_role(["volcano_locust", "volcanolocust", "vl", "volcano", "3321"], "Locust", "Volcano Locust", {subCat: "Underworld"}, (e) =>
	{
		e.setDescription("Post 3321");

		e.addField("Alignment", "Locust of the Underworld", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, you may douse someone.\n- Ignite, converting all Doused players.");

		e.addField("Attributes:", "- Your ignition will convert all doused players, no matter who the Douse originated from.\n- You bypass all conversion immunity.");

		e.addField("Goal:", factions.Locust.goal);
	});

	register_role(["assassin", "3322"], "BountyHunter", "Assassin", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3322");

		e.addField("Alignment", "Bounty Hunter Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target one person; dealing a delayed attack to them.\n- Target two people; immediately attack them. (2 uses)");

		e.addField("Attributes:", "- If you kill anybody, they will be displayed as killed by a role of your choosing.\n- If you use your first ability; the town will receive a message \"You see a shadow in the town square\".\n- The host is encouraged to fit the above attribute into flavor text.\n- Your attacks are Astral.");

		e.addField("Goal:", factions.BountyHunter.goal);
	});

	register_role(["dataminer", "3323"], "BountyHunter", "Dataminer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3323");

		e.addField("Alignment", "Bounty Hunter Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target one player; learn if they're a bounty you're after, and if they aren't, learn their role.\n-Target two players; learn their roles. (1 use)");

		e.addField("Goal:", factions.BountyHunter.goal);
	});

	register_role(["guildmaster", "3324"], "BountyHunter", "Guildmaster", {subCat: "Contractor"}, (e) =>
	{
		e.setDescription("Post 3324");

		e.addField("Alignment", "Bounty Hunter Contractor", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the start of night one, you may choose a contract from a list of three options.\n> Eliminate (3 roles that are not contracted)\n> Help (Neutral) Win.\n> Eliminate (role) at night.\n- If you previously completed a contract last night, choose one of the following abilities to use tonight:\n> - The target you use this ability on acts twice tomorrow and tomorrow night.\n> - The target who you use this on is roleblocked, you learn their role, and who they would have targeted if not for your ability.\n> - The target is redirected to a user of your choice. ");

		e.addField("Attributes:", "-After a contract is completed, you gain another choice of contracts.\n- The host decides what the roles in () are.");

		e.addField("Goal:", factions.BountyHunter.goal);
	});

	register_role(["criminal", "3325"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3325");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal someone’s identity at night.");

		e.addField("Attributes:", "- You will appear to be your targets role, even when you die.\n- You learn your target’s role (since you took their identity).\n- Your identity theft only lasts for that night and the following day.");

		e.addField("Goal:", factions.Criminal.goal);
	});

	register_role(["hijacker", "3326"], "BountyHunter", "Hijacker", {subCat: "Distraction"}, (e) =>
	{
		e.setDescription("Post 3326");

		e.addField("Alignment", "Bounty Hunter Distraction", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once, during any phase of the game, you may either queue or force a public message to appear.\n> - Queuing a public message: This message will be displayed during at the start of the next phase. (Night -> Day)\n> - Forcing a public message makes it display immediately.\n- Target a player; if they due tonight due to any non-bounty hunter role, you gain another use ability above.");

		e.addField("Attributes:", "- Examples of messages:\n- The glorious sun shines through hypocrisy!\n- The eternal winter is coming!\n- The amnesiac has remembered that they were like X!\n- A deep bell echoes through the town. You don't know where it came from, but you fear what happens if you find out.");

		e.addField("Goal:", factions.BountyHunter.goal);
	});

	register_role(["gunslinger", "3327"], "BountyHunter", "Gunslinger", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3327");

		e.addField("Alignment", "Bounty Hunter Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, you may shoot somebody. You will attack them and reveal your identity.\n- You may not be voted on the day you use the above ability.\n-During the night, you may choose one of the following: \n> - Poisoned Bullets: Roleblock a player, and poison them.\n> - Frozen Bullets: Roleblock a player for this night and the following night. If they are not visited on the following night, they instantly die, regardless of any defense values.\n> - Lead Bullets: Roleblock a player, and inflict lead poisoning on them. If they do not take an action the following night; they instantly die, regardless of any defense value.");

		e.addField("Attributes:", "- Whoever you shoot will know that they have been shot by the Gunslinger!\n- Whoever you shoot will not be informed of being poisoned or having lead poisoned inflicted on them. ");

		e.addField("Goal:", factions.BountyHunter.goal);
	});

	register_role(["criminal", "3328"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3328");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pirate another role’s ability at night.");

		e.addField("Attributes:", "- You may only pirate each ability once.\n- You may not pirate any conversion roles.\n- You may pirate two day abilities.\n- “You wouldn’t download a car” so you can’t pirate any of WM Drunk Driver’s (922 and 2551) abilities.");

		e.addField("Goal:", factions.Criminal.goal);
	});

	register_role(["criminal", "3329"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3329");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Point a laser pointer into the sky. (1 Night Cooldown)");

		e.addField("Attributes:", "- An aircraft will be distracted by the laser pointer and fall out of the sky, dealing an Unstoppable Astral Rampage attack to someone at random. The aircraft will never target a Criminal or someone visited by a Criminal.\n- Roleblock and Redirect immunity");

		e.addField("Goal:", factions.Criminal.goal);
	});

	register_role(["criminal", "3330"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3330");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Handle a salmon suspiciously. ");

		e.addField("Attributes:", "- Whenever you handle a salmon suspiciously, everybody looks at you for how suspicious that is. Therefor, you roleblock your nearest 4 neighbors.\n- Roleblock and Redirect immunity.");

		e.addField("Goal:", factions.Criminal.goal);
	});

	register_role(["tavernkeeper", "3331"], "Storyteller", "Tavernkeeper", {subCat: "Introduction"}, (e) =>
	{
		e.setDescription("Post 3331\n\"*My tavern has had an unusual amount of 'adventurers' after the war started.*\"");

		e.addField("Alignment", "Storyteller Introduction", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic (Autovest x1)", true);

		e.addField("Abilities:", "- At night, choose someone to Entice.\n- Enticed players will be controlled into visiting you.\n- Enticed players won't attack you, and they won't receive night notifications while they are Enticed other than they slept safely.\n- You can't Entice the same player twice in a row.");

		e.addField("Attributes:", "- You learn the name of all players who visit you at the end of the night.\n- If 2 or more players visit you, the Introduction becomes \"*The misguided protagonist begins in a tavern, hoping to acquire riches.*\" When the story is completed with this Introduction, you astrally roleblock all good players.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["lonely_adventurer", "lonelyadventurer", "lonely", "adventurer", "la", "3332"], "Storyteller", "Lonely Adventurer", {subCat: "RisingAction"}, (e) =>
	{
		e.setDescription("Post 3332\"*I thought the war would be full of glory.*\"");

		e.addField("Alignment", "Storyteller Rising Action", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose a player to Beat.\n- Beat players are roleblocked and their defense is lowered by one stage.\n- When you Beat a player who has 2 visitors other than you, you all gang up. You and all other visitors deal a basic attack to the victim.");

		e.addField("Attributes:", "- If you Beat up a player and kill them, the Rising Action becomes \"*The protagonist, now on the front-lines, has struggled with the death of friends, starvation, and defeat. They begin to raid towns near their station, leaving behind past morals to feed themselves.*\" When the story is completed with this rising action, you deal a basic attack to all players who have been roleblocked by the Storytellers at any point in the game.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["noble_child", "noblechild", "noble", "child", "nc", "3333"], "Storyteller", "Noble Child", {subCat: "Introduction"}, (e) =>
	{
		e.setDescription("Post 3333\"*I'd love to see the world outside of the palace. My father's ridiculous rules can't stop me.*\"");

		e.addField("Alignment", "Storyteller Introduction", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, Duel a player, roleblocking.\n- You and your opponent choose between Sabre, Axe, and Spear.\n- Sabre beats Axe, Axe beats Spear, Spear beats Sabre.\n- If you win, your factional kill is upgraded to a Powerful Rampage the next night.\n- If you lose, you can't duel anyone the next night.\n- If you tie, nothing happens.");

		e.addField("Attributes:", "- If you win two Duels in a row, the Introduction becomes \"*The protagonist triumphantly gestures as they stand over their father. The king pleads their child not to leave, but the protagonist mounts a horse and rides to battle, against their father's wishes.*\" When the story is completed with this introduction, your factional kill is permanently upgraded to a Powerful Rampage and all Storytellers gain powerful defense.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["proud_commander", "proudcommander", "proud", "commander", "pc", "3334"], "Storyteller", "Proud Commander", {subCat: "RisingAction"}, (e) =>
	{
		e.setDescription("Post 3334\"*The other commander is a fool! He will get us all killed!*\"");

		e.addField("Alignment", "Storyteller Rising Action", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the start of the game, you are given a rival. You have their night abilities and related immunities. You do not gain any parts of the ability which cause you to commit suicide or harm your team.\n- At night, choose a target to perform your rival's abilities on. ");

		e.addField("Attributes:", "- If you successfully perform your ability more times than your rival does for any reason, the Rising Action becomes \"*The tension in the air almost causes the protagonist to choke as they stand in a stare-down with their rival over the body of a friendly soldier. Both parties accuse the other of killing the man, but neither will admit to losing their honor.*\" When the story is completed with this rising action, you learn the roles of all players.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["terrorist", "wellthatescalatedquickly", "3335"], "Storyteller", "Terrorist", {subCat: "Climax"}, (e) =>
	{
		e.setDescription("Post 3335\n\"*I'm done with the general. This pointless war must end.*\"");

		e.addField("Alignment", "Storyteller Climax", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day if 2 or more players are dead, you may choose to poison the Town's water supply once per game.\n- At night, all players become Poisoned and are aware the water supply was poisoned by the Terrorist.\n- When the water supply is poisoned, all players get one charge of healing, which lets them heal one other player but foregoes their night action.");

		e.addField("Attributes:", "- If 3 players or more die during the poisoning of the water supply, the Climax becomes \"*Something in the protagonist's mind breaks - either from the fear, the anger, or maybe an unknowable and terrible emotion. The protagonist poisons the town's well. The entire platoon dies, and so does the town. The last living members of the town desperately wait for rain.*\" When the story is completed with this climax, all non-Storytellers become poisoned.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["monk", "3336"], "Storyteller", "Monk", {subCat: "FallingAction"}, (e) =>
	{
		e.setDescription("Post 3336\n\"*Your sins may be great, but there is still redemption.*\"");

		e.addField("Alignment", "Storyteller Falling Action", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, protect a player. If you protect a non-Storyteller player from an attack, learn their role, and they are astrally roleblocked the next time they attempt to visit a Storyteller.");

		e.addField("Attributes:", "- If you save 2 good players, the falling action becomes \"*The protagonist seeks the monastic lifestyle in an attempt to atone for their sins and failures, running from the enemy. The monks welcome the protagonist with reserved arms, unsure of the future fate.*\" When the story is completed with this falling action, all Storytellers become immune to lynching and gain powerful defense for one day/night.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["asylum_warden", "asylumwarden", "asylum", "warden", "aw", "3337"], "Storyteller", "Asylum Warden", {subCat: "Conclusion"}, (e) =>
	{
		e.setDescription("Post 3337\n\"*The patient doesn't seem to be doing too well - they keep spouting on about the war.*\"");

		e.addField("Alignment", "Storyteller Conclusion", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, do one of these actions. You can only do each once:\n> - Choose whether to reveal yourself as the Asylum Warden the next day. You can't be lynched the same day you revealed yourself (but you can still be voted for). While revealed, you may attack someone each night\n> - Choose to Condition a player. They will reveal themselves as the Asylum Warden the next day and be blackmailed. They will remain their role.");

		e.addField("Attributes:", "- If you are revealed while the Storytellers have 4+ kills, the Conclusion becomes \"*The protagonist ultimately degrades with age, and is eventually committed to the Asylum. No one seems to know what war the protagonist is talking about, and their story is lost to time. Their life was a brief story told by an idiot, and the glory and hardships they endured become a single line in a history book.\" When the story is completed with this conclusion, the Storytellers gain double votes.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["deserter", "3338"], "Storyteller", "Deserter", {subCat: "Climax"}, (e) =>
	{
		e.setDescription("Post 3338\n\"*I don't want to be here. What happened to all the ball games and royal parades in the city? There's no point in protecting the plantations if they never get attacked.*\"");

		e.addField("Alignment", "Storyteller Climax", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, frame someone making them appear as a Deserter for the night.\n- When someone you framed is visited, you appear as a good role for the night.\n- You can frame evil roles to make them appear as a random good role for the night.");

		e.addField("Attributes:", "- If you are visited while you appear innocent, the Climax becomes \"*The protagonist steals the company medic's civilian clothes and scatters off into the night. Shots fire behind them, one piercing their ear and shoulder, but they scamper into a bog and hide underwater. The next day, they arrive in a foreign town, unsure of the language anyone speaks.*\" When the story is completed with this climax, you frame all players as the Deserter, changing all of their role names and numbers to 3338 Deserter (but not their role abilities.) All wills are cleansed.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["usurper", "3339"], "Storyteller", "Usurper", {subCat: "FallingAction"}, (e) =>
	{
		e.setDescription("Post 3339\n\"*Listen, o holy one; I have this to confess. I am not the real heir. When they died, I claimed to be their child, but I am nothing but a liar.*\"");

		e.addField("Alignment", "Storyteller Falling Action", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose someone to Condemn. All of their visitors are arrested, roleblocking them.\n- You can choose to reveal yourself to one random person who visits you to roleblock your target as well.");

		e.addField("Attributes:", "- If reveal yourself to a non-Storyteller role, the Falling Action becomes \"*The protagonist gains a bout of amnesia after repeated mental trauma from the war. They can't remember whose child they are, but they know the face of their parent. When the king dies, the protagonist recognizes that familiar face to be their father, yet a large number of the nobles say they've never seen the protagonist in their life. The protagonist becomes the king and executes all who oppose their new reign.*\" When the story is completed with this falling action, all good players who have visited a Storyteller are roleblocked the next night.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["criminal", "3340"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3340");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fix the price of ability usage during the day. The next night, the last 20% of non-criminal actions submitted will fail. (2 uses)");

		e.addField("Attributes:", "- Since you set the price too high, all limited-use abilities that target you consume 5 charges to use. If they have less than five charges, the ability will fail.");

		e.addField("Goal:", factions.Criminal.goal);
	});

	register_role(["silly_ideas_guy", "sillyideasguy", "silly_ideas", "sillyideas", "silly_guy", "sillyguy", "sig", "3341"], "Neutral", "Silly Ideas Guy", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3341\n*One of the roles of all time.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert another player into the role whose post number is the 24-hour time in the host's timezone when this ability resolves (for example, they become Post 733 if it's 7:33 AM). If this ability resolves at midnight or another time for which a role doesn't exist (like 15:09), your target may choose any role to become instead.\n- Choose a player, then use a random ability from a role that starts with the same letter as theirs on them.");

		e.addField("Attributes:", "- You are immune to even-valued attacks.\n- You have roleblock immunity.\n- You have a redirect immunity autovest.\n- There are two day chats every day.");

		e.addField("Goal:", "See the Town lose the game.");
	});

	register_role(["criminal", "3342"], "Criminal", "Criminal", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3342");

		e.addField("Alignment", "Criminal Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Evade your taxes at night. (3 uses)");

		e.addField("Attributes:", "- The IRS will raid your house the next night, and will deal a powerful attack to any of your visitors. All abilities against you will fail and you will gain powerful defense that night (because you hid in your secret money safe).");

		e.addField("Goal:", factions.Criminal.goal);
	});

	register_role(["the_role_council", "therolecouncil", "role_council", "rolecouncil", "trc", "3343"], "Neutral", "The Role Council", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3343");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may, one per night, create a role.");

		e.addField("Attributes:", "- The role must be unique, and may not be similar to any other existing role.\n- At least 2/3rds of <@277233013484552202>, <@475096641347518485>, <@858544846531592222>, <@536648090183270441> and <@888761463647371284> must agree that the role is good, or else you do not turn into it.\n- Upon 2/3rds or more of <@277233013484552202>, <@475096641347518485>, <@858544846531592222>, <@536648090183270441> and <@888761463647371284> agreeing that the role is good, you transform into it. ");

		e.addField("Goal:", "Win with your new role.");
	});

	register_role(["dark_mage", "darkmage", "mage", "dm", "3344"], "Town", "Dark Mage", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3344");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Unlock the true potential of a player, they will be converted into their respective Unseen role.");

		e.addField("Attributes:", "- Players you sucessfully convert retain their original goal and cannot access the Unseen factional chat.\n- You will not know when this works.\n- If the role isn't a Town role or has no Unseen variant, You will heal them.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["iguerie", "igu", "3345"], "Neutral", "Iguerie", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3345");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Turn into Diamond (272), Diamond (1469), Igu (267), Igu, Crystalline Seraph (2013) or Masochist (2431). Your choice which one.\n- Call someone a wriggly flea, lowering their defense to Vulnerable.\n- Be a degen and pick a target. You will redirect everyone away from that target. 2 uses.");

		e.addField("Attributes:", "- If a wriggly flea survives 3 nights in a row after receiving Vulnerable Defense, **Unlock** and raise their defense back to what it was before they became a wriggly flea.\n- (**Locked**) This role wins the game regardless of win condition fullfilments.");

		e.addField("Goal:", "Igu cannot win the game, as she has won far too many.");
	});

	register_role(["fill_in_the_blank", "fillintheblank", "fitb", "blank", "____", "3346"], "Neutral", "Fill In The Blank", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3346\n*This is indeed a [blank] role*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target to [blank].\n- Instead, [blank] ([blank] uses).");

		e.addField("Attributes:", "- When you use your [blank] ability, you will also [blank].\n- If someone [blank]s you, you will [blank].\n- You may fill in each “[blank]” with up to 10 words. When you finish and the host is ok with it, you will convert to your new role.");

		e.addField("Goal:", "Have the [blank] faction win.");
	});

	register_role(["unsuspicious_mailor", "unsuspiciousmailor", "mailor", "3347"], "Town", "Unsuspicious Mailor", {subCat: "Traitor"}, (e) =>
	{
		e.setDescription("Post 3347");

		e.addField("Alignment", "Town Traitor", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one person each night to Blackmail.");

		e.addField("Attributes:", "- Blackmailed targets cannot talk, react or use abilities during the day.\n- You can hear private messages.\n- Can only spawn if Mafia is present, You have access to the Mafia factional chat.\n- You can only spawn in Random Town slots.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["those_guys", "thoseguys", "tg", "thoseguyswerekillingweakvulnerablepeople", "tgwkwvp", "3348"], "Were", "Post 3348", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Those Guys");

		e.addField("Alignment", "Were Killing\n\n*People*", true);
		e.addField("Attack", "Weak", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Those guys were killing weak vulnerable people. Each full moon, attack a random non-Were player without defense.");

		e.addField("Attributes:", "- Hunting Moon Enhancement: **Those Guys Were Killing Powerful Invincible People** — Your ability instead deals an Overkill attack to a random non-Were player with the highest defense that it can kill.\n- I have no idea how this will look in the bot");

		e.addField("Goal:", factions.Were.goal);
	});

	register_role(["psychologist", "3349"], "Storyteller", "Psychologist", {subCat: "Conclusion"}, (e) =>
	{
		e.setDescription("Post 3349");

		e.addField("Alignment", "Storyteller Conclusion", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sit down with someone and talk about their emotions.");

		e.addField("Attributes:", "- That player will be roleblocked that night, and if they’re capable, will not be able to kill the next night as well.\n- If you sit down with 3 killing roles in a game, the conclusion becomes, ”*The protagonist’s mind has become altered by the war. Thankfully we reached them and are treating them now. It’s a pretty bad case of PTSD, but we hope to suppress it enough that it isn’t a bother.*”\n- When the story is finished with this conclusion, all non-storyteller killing roles will be unable to attack the next night.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["the_gangster", "thegangster", "gangster", "3350"], "Neutral", "The Gangster", {subCat: "Traveller"}, (e) =>
	{
		e.setDescription("Post 3350");

		e.addField("Alignment", "Neutral Traveller", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- If one of your neighbors publicly or privately gives you permission to shoot the other neighbor, immediately shoot them, attacking them with a powerful attack.");

		e.addField("Attributes:", "- Your ability is a day ability.\n- You will be aligned with the Town or the REF at random.\n- You may only use this ability once per day.\n- This role cannot spawn naturally.\n- This role can only appear in Balanced role lists.\n- **Dark Times** (Passive): If you are lynched, the Town gains another 24 hours in the day phase, and may lynch again.\n- **Lost Hope** (Passive): If you are lynched as good traveler, every Town member is roleblocked tonight.\n- **Travelling** (Special Mechanic): If a player is not a spectator and wishes to join the game before Night 2, they may decide to join as the Outsider. Limit of 1 per game, and travelling may be denied at the hosts discretion.");

		e.addField("Goal:", "Enter the town and assist in the elimination of your opposition.");
	});
};
