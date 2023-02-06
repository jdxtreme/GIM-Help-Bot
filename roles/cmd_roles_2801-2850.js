//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["turkeybomb", "turkey", "bomb", "2801"], "Town", "Turkey Bomb", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2801");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Call for a turkey dinner: role stopping every non-town for a single night. (One use)\n- Grateful for: Have the person you visit be grateful for something that might happen to them this night. The host will redirect any abilities to make this possible.(2 uses)‎");

		e.addField("Attributes:", "- The host can at most redirect 3 people. If any more need to be redirected, the action will fail.\n- Players will know they have been redirected.\n- You cannot target the same person twice in a row.\n- You may not target yourself.\n- If the thing they are grateful for has nothing to do with them, then the host is only allowed one re-direction.\n- You cannot use both abilities in the same night.\n- Your visit is astral.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["&mpersand", "ampersand", "&", "2802"], "Agent", "&mpersand", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2802\n*&nd it's fine, Exisal. It seems everyone is prepared. We may begin.*");

		e.addField("Alignment", "Agent Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- In Position (Infinite): Select three people each night. If any are visited by an Agent, they will also be roleblocked. You will learn which targets were successfully roleblocked, if any. May be multitasked with another night ability.\n- Antagonize (3-shot): Select a player to permanently frame as a non-Agent role. If you target an Agent, this will instead grant them detection immunity.\n- One Stone (1-shot): Choose two targets during the night. If your first is lynched the following day, the second is immediately dealt an Unstoppable attack. ‎");

		e.addField("Attributes:", "- Morality Error (Passive): All Agents have detection immunity and all Town members are framed as random Agent roles on Night 1.\n- One for None (Passive): Whenever a Town member is lynched, all Agents gain an increase in their defense tier the following night and will be lynchproof the next day.\n- You have roleblock immunity.");

		e.addField("Goal:", factions.Agent.goal);
	});

	register_role(["danganronpapeakimperfection", "peakimperfection", "drpi", "2803"], "Neutral", "Danganronpa: Peak Imperfection", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2803\n*https://discord.gg/fCPUkbJFgm*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal a player each night. You may only heal yourself once.\n- Turn a player into role 159, 265, or 358 each night. You may self-target.\n*\"HOW DID I MISS THAT\"* - Oct2‎");

		e.addField("Goal:", "Save at least one player from death and have at least one player you changed the role of win the game.");
	});

	register_role(["exemplar", "2804"], "Neutral", "Exemplar", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2804\n*The holder of a new beginning... except his will is no one's but his own.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack a player each night.‎");

		e.addField("Attributes:", "- You will also roleblock your target and attack all their visitors.\n- You will attack anyone who targets you at night.\n- Your immunities cannot be bypassed by effects that bypass immunities.\n* You have roleblock, redirect, detection, and conversion immune.");

		e.addField("Goal:", "Kill all who reject your will.x");
	});

	register_role(["sunscreenrepellent", "sunscreen", "repellent", "2609u", "2805"], "Unseen", "Sunscreen Repellent", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2805\nConverted from: Sunscreen Remover (2609)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, prevent someone from applying sunscreen the next day. The next day, they only require 50% of the majority of votes to lynch. The next night, they have Vulnerable defense due to sunburn.‎");

		e.addField("Attributes:", "- If someone dies from Vulnerable defense due to you, the death message will be due to sunburn instead of the standard heart attack.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["sunscreenoverdose", "sunscreen", "howdoyouoverdoseonsunscreenanyway", "areyoueatingthesunscreen?", "ordoyouhavesomuchsunscreen", "thatyougetavitaminddeficiency?", "2612u", "2806"], "Unseen", "Sunscreen Overdose", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2806\nConverted from: Sunscreen Reapplier (2612)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Apply way too much sunscreen to a player at night. The next day, they cannot be targeted by any day actions, including votes, whispers and abilities, however they can still perform actions.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["neuralink", "neura", "2270u", "2807"], "Unseen", "Neuralink", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2807\n*Converted from: Electroencephalographist (2270)");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scan a player each night, learning 3 random roles that could be in this game, at least 1 of which is Town and 1 of which is evil, one of which is their role.\n- During the day, set up a mind link with someone you scanned, learning exactly who they target the next night. (3 uses)‎");

		e.addField("Attributes:", "- Whenever you scan an evil player, they will think that they were scanned by a (2270) Electroencephalographist and receive a fake result that you would have received. This result will always include the three roles you actually learned, and you will learn the full result you give them.\n- Roleblock and Redirect Immune");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["guyfrombladeandsorcerynomad", "nomad", "tgfbasn", "2808"], "Neutral", "The Guy From Blade And Sorcery: Nomad", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2808\n*Its a VR game where you can kill people with no consequences!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "‎- Attack a player.\n- Use one of your spells.");

		e.addField("Attributes:", "-Players are announced at the start of the game that “The world feels as though you are in a simulation. Your hands move a little behind from where they should be”\n- Fireball Spell: Will deal a powerful attack to your enemy\n- Combined: Forms a meteor, and will deal an unstoppable rampage to your target\n- Gravity Spell: Push players away, causing anyone who visits you to have their ability fail\n- Combined: Will create a gravity bubble, allowing you to trap people in the air if they visit you. Trapped people will be roleblocked the following night, and will only be able to use abilities on other people inside the bubble for the next 2 nights\n- Lightning Spell: Deal a rampaging basic attack to a target\n- Combined: Will shoot a giant laser beam, dealing a powerful attack to your target and their visitors, and you can throw the corpse(s) at another player, dealing a basic attack to them as well.");

		e.addField("Attributes (cont.):", "- Attacking a player regularly will have an even chance to dismember a players limbs. They will have the following effects:\n- Head: Immediately kills the target, dealing an overkill attack.\n- Arms: Target can no longer vote, because their pointer fingers are no longer there.\n- Legs: Player is roleblocked for the next 3 nights, as their insurance will only pay for a third of the wheelchair cost.\n- Torso: Deal a basic attack that bypasses heals to your target.\n- Internal Organs: Your target begins bleeding. They have one night to be healed or they will die to a powerful attack.\n- You learn what body part was dismembered.\n- Once every body part has been dismembered at least once, you learn to combine spells\n- Every spell requires one mana. You start with 3, and gain .5 every night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["defectiveplayer", "defective", "547u", "2809"], "Unseen", "Defective Player", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2809\nConverted from: Pedantic Player (547)");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Force a host error to occur. The host will intentionally perform a minor error when processing the night actions. (2 uses)");

		e.addField("Attributes:", "- Every time the host makes a host error, you are informed of exactly what happened. You may then gain one use of your choice of the following: a Basic attack, a Basic autovest, or a vote that counts as three.\n- You may reroll this role for free.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["darkartist", "544u", "2810"], "Unseen", "Dark Artist", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2810\nConverted from: The Powerful Being (544)");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Negative", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone each night.\n- Cleave during the day.‎");

		e.addField("Attributes:", "- You can only target dead players.\n- Anyone you attack will be resurrected {for one day and one night. After that, they will be dealt an Overkill attack.}\n- Anyone you attack will be granted roleblock immunity and have Powerful defense.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["zagewizardofanarchy", "wizardofanarchy", "zage", "zero", "2010u", "2811"], "Unseen", "Zage, Wizard of Anarchy", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2811\nConverted from: Zage, Omniscient Equinox (2010)");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "**Abyssal Control** — Choose up to three players each night. The first will be controlled to the second, the second to the third, and the third to the first.‎");

		e.addField("Attributes:", "**Advocate of the Vengeful** — You may speak to the dead at night. You will appear to be the (60) Medium. All Unseen members gain one use of their ability while dead, and may speak in the factional chat. This attribute still applies when you are dead.\n- You are roleblock and redirect immune.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["crawler", "2812"], "Town", "Crawler", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2812\n*I'm not selfish! A-Anyone would look out for themselves above all else! I'm just...*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defence", "None", true);

		e.addField("Abilities:", "- Roleblock a player each night.\n- Appeal to a faction known to be in the game. Your current goal will be erased and you will remove all negative effects from yourself. At the end of the next night, you will gain the goal of the faction you chose. ‎");

		e.addField("Attributes:", "- You may not appeal for two nights in a row.\n- You may not appeal to the faction your current goal belongs to.\n- Your goal changing does not give you access to the features of the faction you appeal to, such as factional chats.\n- You have roleblock immunity.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mutt", "mirrormutt", "906u", "2813"], "Unseen", "Mirrormutt", {subCat: "Unseen Power"}, (e) =>
	{
		e.setDescription("Post 2813\n*Converted from: Copydog (906)");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each day, use up to one day ability of any other role except those that reveal themselves.\n- Each day, use up to one night ability of any other role. This resolves immediately.‎");

		e.addField("Attributes:", "- You may multitask.\n- You may not copy night abilities with kill power.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["thebatter", "batter", "2814"], "Neutral", "The Batter", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2814\n*I've come to purify these lands.*");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Powerful (Degrading)", true);

		e.addField("Abilities:", "- Every night, check a Player to see if they're a specter, if they are, purify them, which kills them on the spot.‎");

		e.addField("Attributes:", "- When the game begins, a fourth of all players will be specters (Post 2814.5), excluding The Batter and any roles that may not be killed normally (such as god (12).), upon dying through any method aside from lynching or The Batter's Purification.\n- You cannot die to Specters. If one visits you, you will fight back and the only thing that happens is that they die and you live unscathed.\n- You cannot be removed from the game under any circumstances aside from death. If such roles (i.e, spin-fading giles corey, missingno) attempt to do so, they'll be told that their ability failed and, if they're a specter, die on the spot.\n- **Degrading Defence**: Every time your defense successfully blocks an attack, it drops by one level.");

		e.addField("Goal:", "Purify the landes of Salem.");
	});
	
	register_role(["specter", "2814.5"], "Neutral", "Specter", {subCat: "Chaos", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2814.5\n*The appearance of incompetence.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Every night, attack a player.‎");

		e.addField("Attributes:", "- This role is hidden to you until the first time you die. The first time you would die, simply change into this role instead! :D\n- You can talk with other Activated Specters once activated.\n- Watch your pepper steak there kid, Attempting to attack The Batter is suicide to you.");

		e.addField("Goal:", "Kill everyone who stands in your way.");
	});
	
	register_role(["thebadbatter", "badbatter", "batter", "tbb", "2814.75"], "Neutral", "The Bad Batter", {subCat: "Chaos", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2814.75\n*Demented purificatory incarnation.*\nOFF spoilers ahead!");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "||- Once you have eliminated all specters, you may choose to become this role.||\n||- One player on a faction, neutrals excluded, will receive a switch in their home. If The Bad Batter visits their home, they're dead, and the game's over in the faction of The Bad Batter. This person may change, but cannot go to anyone The Batter has visited unless the Batter visits everyone.||");

		e.addField("Goal:", "||Find the switch and complete your purification.||");
	});

	register_role(["hourglass", "575u", "2815"], "Unseen", "Hourglass", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2815\nConverted from: Chronologist (575)");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- End the phase. (3 uses)");

		e.addField("Attributes:", "- You may use your ability at any time at least four hours after the phase has begun.\n- All phases are naturally 2 hours shorter, however the town is not notified of this. The phase will just end when it ends, and anything submitted after the end time will not register.\n- Anything that would happen that phase with the current actions will resolve. (e.g Chronologist's end-of-night action clause in their second attribute doesn't apply)");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["prescription", "2210u", "2816"], "Unseen", "Prescription", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2816\n*NOTICE: Medicine may take 24-48 hours to take full effect.\nConverted from: Antipoisoner (2210)");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone a prescription of drugs each night.‎");

		e.addField("Attributes:", "- If your target is attacked the night after you target them, they will gain Unstoppable defense for that night.\n- If you visit the same target twice in a row, they will be dealt an Overkill attack.\n- If your target is dealt a delayed attack the night after you target them, the delayed attack will instead take effect immediately.\n- You may choose a secondary effect for your drugs:\n> - Requires 75% of the total players to lynch the next day\n> - Roleblocked the next night\n> - Vote secretly counts triple the next day\n> - If they are not attacked, they gain Vulnerable defense instead.\n> - Roleblock and prevention immunity the next night.\n> - Rampages. (1 use)");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["cryptographer", "crypto", "1777u", "2817"], "Unseen", "Cryptographer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2817\nConverted from: Loclalization Expert (1777)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Partially encrypt someone each night.‎");

		e.addField("Attributes:", "- The host will translate one of your target's abilities or attributes through https://www.ravbug.com/hypertranslate/, with the start and end languages both set to English and the number of times set to 50. Whatever was translated will be replaced with the result, and the host has to figure out what it means.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["nonbinary", "nb", "itsnotjust0sand1southere!", "2818"], "Town", "Non Binary", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2818");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- During the day, choose to Non Binary. This can only happen three times.\n- At the end of the night, if you Non Binaried the previous day, you will see all actions that happened to you. You may prevent any actions which use the pronouns \"he\" or \"she\" in their text. You cannot prevent actions with the word \"They\".\n- If you cancelled at least 3 actions, you will learn the name of one person whose action you prevented.");

		e.addField("Attributes:", "- If Roleblocked, you get your charge of Non Binary back, and do not see anything that happens to you at night.");

		e.addField("Goal:", "Lynch all evildoers. ~~Criminals may be spared.~~");
	});

	register_role(["handsanatiser", "sanatiser", "hs", "2819"], "Town", "Hand Sanatiser", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2819\n*Alternatively, just wash your hands every so often.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defence", "None", true);

		e.addField("Abilities:", "‎- Provide a player with hand sanatiser each night, removing all negative effects from them and making their visit Astral for the night.");

		e.addField("Attributes:", "- You may use your own sanatiser once. Doing so will heal you and also sanatise your neighbours if still alive. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["embodimentofarcana", "arcana", "eoa", "1595u", "2820"], "Unseen", "Embodiment of Arcana", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2820\nConverted from: Tarot Card Reader (1595)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use your tarot card's ability.");

		e.addField("Attributes:", "- At the beginning of every night, you will receive a random card of the Major Arcana. You may receive the Fool. Each card has a different effect that the host will decide based on the card, and the host will inform you of what that ability is.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["rwhasiwesir", "everysingleindividualrole", "everyindividualrole", "specificinteraction", "specificinteractions", "2821"], "Town", "roles which has a specific interaction with every single individual role", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2821\n*Needing one is a bit different than one being helpful*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose a player. The host will apply some unique negative effect to them based on their role. ");

		e.addField("Attributes:", "- Your effects should not be able to \"cover\" any other roles that aren't almost exactly the same as your target's.\n- Your effects should be more harmful than a frame but less than a Basic attack, roughly.\n- You do not know what effect you apply.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["thejester", "jester", "kajester", "2822"], "Neutral", "The Jester", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2822");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Entertain**: Choose a card type. For the next 2 of that type played, they will become secretly upgraded. Does not count your own cards. 2 uses, 6 round cooldown.\n- **Bravo**: For the current round, two of the cards in your hand will become upgraded by random. 2 uses, 5 round cooldown.\n- **Final Performance**: For the next 3 rounds, you will draw 4 cards per round. Afterward, you will never be able to draw again. T^T.  1 use.");

		e.addField("Passives:", "- **Bread and Circus**: When you have played 10 cards, you will draw an extra 2 cards at the end of the round. When you have played 20, draw 4, and so on. Very profitable.");

		e.addField("Goal:", "Protect the King from death (See that role for details). Eliminate all Chaos, Apostles and Outsiders. You may spare all Neutral Outsiders, the Illusionist, the Wild Mage, and the Cupid.");
	});

	register_role(["insurrectionistbeekeeper", "insurgencybeekeeper", "beekeeper", "ibk", "2823"], "Insurgency", "Insurrectionist Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2823\n*Viva la bzzzz!*");

		e.addField("Alignment", "Insurgency Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to roleblock a random player who would visit a player of your choice tonight.\n- Use 2 bees to redirect a player to a player of your choice.\n- Use 3 bees to learn the roles and names of all players who a player of your choice visits tonight, or their role if they don't visit.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.");

		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["kingsmenbeekeeper", "kingsmen", "loyalistbeekeeper", "beekeeper", "kmbk", "2824"], "Loyalist", "King's Men Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2824\n*Long live the bzzz!*");

		e.addField("Alignment", "Loyalist Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to choose redirect all players who would visit a player of your choice to a single random non-Governor Loyalist.\n- Use 2 bees to choose up to three non-Loyalist slots on the rolelist. You will learn the players that take up those slots, but not which is which.\n- Use 3 bees to choose two players. You will deal a Basic attack to all non-Loyalists among them.")

		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["jdinshamblesrn", "anomalybeekeeper", "scpbeekeeper", "scb", "beekeeper", "abk", "2825"], "SCP", "Anomaly Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2825\n*Secure. Contain. Bzzzz.*");

		e.addField("Alignment", "SCP Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to choose two players. If your first target uses an attacking ability tonight, you will use the same attacking ability on your second target.\n- Use 2 bees to choose up to two dead players and two living ones. For each living player chosen this way, use either or both of the dead players' abilities on them.\n- Use 3 bees to attack all non-SCP players who would visit the targets of up to two players of your choice.");

		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["humblebumblebumblebee", "bumblebee", "humblebee", "humblebumblebee", "bee", "2826"], "Neutral", "Humble Bumble Bumble Bee", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2826\n*Fuck you beekeeper*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, you may attack somebody. If they have beekeeper in their name, they instantly die, regardless of defense value.");

		e.addField("Attributes:", "- Unaffected by all roles with \"Beekeeper\" in their name.\n- May only spawn with a role with \"Beekeeper\" in their name.");

		e.addField("Goal:", "Exterminate all beekeeper scum.");
	});

	register_role(["ultimateultimate", "ultimate", "uu", "2827"], "Other", "Ultimate Ultimate", (e) =>
	{
		e.setDescription("Post 2827\n*The closest thing humanity knows to perfection. But, like, nooot a pathetic loser, probably.*");

		e.addField("Alignment", "Ultimate Ultimate", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- You have all abilities and attributes of:\n> - 116: The Ultimate Mafioso\n> - 203: Ultimate Supreme Leader\n> - 1306: Tooru Saesen, Ultimate Liar\n> - 1308: Ultimate Ritualist\n> - 1467: Ultimate Savior\n> - 1881: Ultimate Knight \n> - 1994: The Ultimate Jailor\n> - 2007: Ultimate SK\n> - 2114: Ultimate Arsonist\n> - All Accent OC roles \n- You also have all the following abilities and attributes:\n> - 1049: Ultimatum's Ultimate Destiny\n> - 2063: Super Duper Ultra Man's Ultimate Savior! and Ultimate Hero Man!\n> - 2087: Avathy's roleplay as Lorelei and roleplay as Veronica \n> - 727: Light of Accent's roleplay as Aiko\n> - All Everfrost roles' bolded abilities\n- You may not multitask.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["mutuallyassureddestruction", "assureddestruction", "destruction", "mad", "2828"], "Neutral", "Mutually Assured Destruction", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2828");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack yourself and another player at any time.");

		e.addField("Attributes:", "- Your ability cannot fail, under no circumstances. Your target will die.\n- Resolves instantly.");

		e.addField("Goal:", "Survive to the end of the game.");
	});

	register_role(["oncomingstormbeekeeper", "stormbeekeeper", "thundercrybeekeeper", "beekeeper", "osbk", "2829"], "Thundercry", "Oncoming Storm Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2829\n*The splitting bzzzz of a bee's call rings senselessly through the air.*");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to prepare a Strike on a player. Strikes will activate the following morning.\n- Use 2 bees to set a Striked player's defense to Vulnerable for the night.\n- Use 3 bees to redirect all non-Thundercry Striked players to a player of your choice tonight.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.\n- Whenever a player is Striked, you gain 0.25 bees.\n- If two or more Striked players are alive, you gain Basic defense.");

		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["undefector", "defectornt", "2830"], "Town", "Undefector", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2830");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the start of the game, you are given the abilities and attributes of a random role from an evil faction in the game other than a \"head\" role.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["fector", "2831"], "Town", "fector", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2831");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At the start of the game, you become a random non-Power, non Marshal Florae, City, Army, Mainframe, NTF, or Netsec role, but your faction remains Town.\n- Your new role's name gains the prefix of \"fectored\". It is not capitalized.\n- \"noodle you should totally make that work with the bot\" - Lunari");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["unundefector", "un-un-defector", "defectorntnt", "2832"], "Town", "Un-Un-Defector", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2832");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- At the start of the game, you will be given the abilities, attack and defense value, and attributes of a random role from an evil faction that is a \"Head role\"");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["minigamer", "minigimer", "minigim", "2833"], "Neutral", "Minigamer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2833\n*Let's have a little bit of FUN here, people!*");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At the start of Day 3, you gain the ability to force the host to host a Mini GIM game that only people currently alive can join. (1 use)");

		e.addField("Attributes:", "- Anybody who wins in the Mini GIM game will instantly win in the main game as well. You __must__ compete and win in the Mini GIM game, otherwise you will lose.\n- This role cannot spawn in Mini GIM games.");

		e.addField("Goal:", "Win a Mini GIM game.");
	});

	register_role(["lesscomplexrole", "simplerole", "complexrolent", "lcr", "2834"], "Neutral", "Less Complex Lore", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2834");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target a player. They lose all abilities and attributes except for factional chats and the ability to carry a factional kill");

		e.addField("Attributes:", "- This counts as a conversion for mechanical purposes");

		e.addField("Goal:", "Remove the abilities and attributes of at least 2 people and survive!");
	});

	register_role(["morecomplexrole", "simplerolent", "complexrole", "mcr", "2835"], "Neutral", "More Complex Role", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2835\n*Hello yes roles please make `m o r e` complex roles thank you bye*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. For each ability and attribute they have, the host comes up with another unnecessarily complex one that's somewhat related to the role, and that player gains those abilities and attributes.");

		e.addField("Attributes:", "- This does not count as a conversion for mechanical purposes.");

		e.addField("Goal:", "Cause at least 5 abilities and 5 attributes to be given out total.");
	});

	register_role(["furryrole", "furry", "2836"], "Mafia", "Furry Role", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2836\n*\"I got wild card so here’s my custom role\" - Kitten Ball*");

		e.addField("Alignment", "Unique Mafia Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill Haters: On any night in where the previous day you got voted, deal a powerful attack to that target.\n- Fluff Release: Give any other player powerful defense and cures poison.\n- Cotton Guard: Give yourself Powerful Defense for the night. (Uses: 1) ");

		e.addField("Goal:", "Support the Mafia into killing all opposing factions.");
	});

	register_role(["theomnipotent", "omnipotent", "to", "2837"], "Neutral", "The Omnipotent", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2837\n*I’ve reached godhood. My only limitation is myself.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Overprotective)", true);

		e.addField("Abilities:", "- Gain the ability of one role from every faction.");

		e.addField("Attributes:", "- You may only use each ability once.\n- You do not gain the drawbacks of the ability.\n- You won’t get “duplicate” abilities, such as a veteran and a Medusa’s abilities.\n- Any immunities a role has, you will get when using that ability.\n- If at any point a faction is created mid-game while you have this role, you will gain the ability of the first role of that faction instantly.\n- You have two-time Overprotective defence.");

		e.addField("Goal:", "Overpower the town, and prove your worth.");
	});

	register_role(["**fadingmemory", "fadingmemory", "memory", "forgor", "skull", "fm", "💀", "2838"], "Neutral", "**Fading Memory", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2838\n*I forgor :skull");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "‎", true);

		e.addField("Abilities:", "- Cause someone to forget the second half of all their abilities. They");

		e.addField("Attributes:", "- Whenever a player visits you, they forget the second half of all their attributes, which");

		e.addField("Goal:", "Make at least 3");
	});

	register_role(["insurance_broker", "insurancebroker", "insurance", "ib", "2839"], "Loyalist", "Insurance Broker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2839");

		e.addField("Alignment", "Loyalist Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defence", "None", true);

		e.addField("Abilities:", "- Choose 2 targets to attempt to sell insurance to at night.\n- Choose a target with whom you have successfully opened insurance negotiations with. They can choose to either cover the costs of the insurance by giving up their first listed ability to you permanently, or refuse and be dealt a Basic attack at the end of the night. (1 use)");

		e.addField("Attributes:", "- Targets who you have attempted to sell insurance to will only buy your insurance if you vote together in the following day's voting.\n> - This does not mean you have to correctly vote to sell the insurance - just voting together in any capacity will work.\n- A stolen ability will always replace your first ability.");

		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["snapdragon", "sd", "2840"], "Plant", "Snapdragon", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2840");

		e.addField("Alignment", "Plant Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce a sun every night.\n- Breathe fire on someone's house, dealing a Basic attack to them and burning all visitors. (Costs 2 Sun)\n- Breathe fire in someone's general direction, dealing a Powerful attack to them and burning their visitors and living neighbors. (Costs 4 Sun)");

		e.addField("Attributes:", "- \"Burn\" is a status effect that reduces the afflicted's defense to Vulnerable until they are healed.\n- Roles with Powerful defense or greater are immune to burns.");

		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["umbrella", "☔", "☂️", "2841"], "Town", "Umbrella", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2841\n*I just have a lot of umbrellas.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defence", "None", true);

		e.addField("Abilities:", "- Give a player an umbrella at night. Anyone who visits them tonight is redirected to the next valid target on the player list—next highest number, the end of the player list loops back to the first person.");

		e.addField("Attributes:", "- You may self-target, because you would just be using one of your own umbrellas.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["vyrindi_god_of_battle", "vyrindigodofbattle", "vyrindi", "godofbattle", "vgob", "2842"], "Neutral", "Vyrindi, God of Battle", {subCat: "Killing"}, (e) =>
	{
 		e.setDescription("Post 2842\n*The triumphant ruler of war. His glorious victory is imminent.*");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack a player each night.\n- Choose another player. They win the game. You may only do this once.");

		e.addField("Attributes:", "- Whenever you kill a player, if they had to live to win, you may attack an additional player the next night.\n- Whenever a player wins the game, your attack value permanently increases by a stage.\n- While you're alive, you cannot lose the game and the game cannot end in your loss.\n- You have roleblock, redirect, conversion and detection immunity.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["theoutsider", "outsider", "2843"], "Neutral", "The Outsider", {subCat: "Traveller"}, (e) =>
	{
		e.setDescription("Post 2843");

		e.addField("Alignment", "Neutral Traveller", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Mark a player each night, and then hunt at another players house.");

		e.addField("Attributes:", "- You will be aligned with the Town or the REF at random.\n- If your marked player visits the hunted players house, you will attack the marked player.\n- This role cannot spawn naturally.\n- This role can only appear in Balanced role lists.\n - **Dark Times** (Passive): if you are lynched, the town gains another 24 hours in the day phase, and may lynch again.\n - **Travelling** (Special Mechanic): If a player is not a spectator and wishes to join the game before night 2, they may decide to join as the Outsider. Limit of 1 per game, and travelling may be denied at the hosts discretion.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["powerstone", "ps", "2844"], "Neutral", "Power Stone", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2844\n*Guys, I nerfed it! Only 10 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to ten players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["powerston", "ps", "2845"], "Neutral", "Power Ston", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2845\n*Guys, I nerfed it! Only 9 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to nine players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["powersto", "ps", "2846"], "Neutral", "Power Sto", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2846\n*Guys, I nerfed it! Only 8 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to eight players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["powerst", "powerstreet", "ps", "2847"], "Neutral", "Power St", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2847\n*Guys, I nerfed it! Only 7 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to seven players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["powers", "ps", "2848"], "Neutral", "Power S", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2848\n*Guys, I nerfed it! Only 6 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to six players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["power", "ps", "2849"], "Neutral", "Power ", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2849\n*Guys, I nerfed it! Only 5 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to five players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["powe", "ps", "2850"], "Neutral", "Powe", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2850\n*Guys, I nerfed it! Only 4 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to four players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
};
