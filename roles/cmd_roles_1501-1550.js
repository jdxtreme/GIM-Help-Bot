function censor(length)
{
	let c = "";

	for(let i = 0; i < length; i++)
		c = c + "█";

	return c;
}

module.exports = (g) =>
{
	const {register_role, factions, commands} = g;

	register_role(["frigade", "1501"], "Warfleet", "Frigade", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1501");

		e.addField("Alignment", "Warfleet Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Follow another player. Any attempt to prevent your target's action from succeeding, or make it target someone else, will fail.");

		e.addField("Attributes:", "- Any attempt to force your ability to fail will instead fail itself. (This doesn't apply to the Factional Attack.)");

		e.addField("Upgrade:", "- 1 use Basic Defense\n- You may Follow up to two players each night.\n- Your anti-fail attribute will now apply when you're using the Factional Attack.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["carrier", "1502"], "Warfleet", "Carrier", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1502");

		e.addField("Alignment", "Warfleet Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Armor yourself against attacks for the night with Powerful Defense. If you have other abilities, you may use one alongside this. (2 use)");

		e.addField("Attributes:", "- If you get promoted to 1491 Warlord, you will keep your ability with however many uses it had remaining.\n- 1491 Warlord Promotion Priority; You will be chosen first over other members.");

		e.addField("Upgrade:", "- Upon being Upgraded, you will gain 2 uses for your ability.\n- Once, at any point, you may choose any non-Unique Warfleet role other than this one. You will gain its Attributes, Abilities, and Upgrades in addition to your own.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["cruiser", "1503"], "Warfleet", "Cruiser", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1503");

		e.addField("Alignment", "Warfleet Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Redirect another player, causing them to target another.\n- Trap another player, roleblocking them. (1 use)");

		e.addField("Attributes:", "- Players you redirect cannot be controlled, but if someone else tries to redirect them at the same time as you, both their ability and yours will fail.\n- If you are controlled or redirected while trying to control someone, only your second target will change.");

		e.addField("Upgrade:", "- You gain 1 use Basic Defense and a use for your roleblocking ability upon being Upgraded.\n- You will learn the role of players you redirect or roleblock.\n- Your redirection will override any other attempt to redirect your target.");

		e.addField("Goal:", factions.Warfleet.goal);
	});

	register_role(["squirrel_with_a_gun", "squirrelwithagun", "squirrel", "swag", "1504"], "Town", "Squirrel with a Gun", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1504");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Attack someone, 33% chance to fail.");

		e.addField("Attributes:", "- Your attack has only 25% chance to fail instead if you rerolled into this.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["shitty_neighbor", "shittyneighbor", "hates_music", "hatesmusic", "snthyfpm", "1505"], "Mafia", "Shitty Neighbor That Hates You For Playing Music", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1505");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check your target.\n- Attack a player at night.");

		e.addField("Attributes:", "- At the start of the game, you'll be told if any roles reference music of any kind, and how many.\n- If any do, you'll be able to discover that by checking a target.\n- If there are any alive and you attack someone whose role doesn't, you are roleblocked the next night.\n- If none are alive, you have no penalty for killing anyone.\n- To appease Noodle, this role can also be referred to as \"Shitty Neighbor\".");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["late_bloomer", "latebloomer", "late", "bloomer", "lb", "1506"], "Neutral", "Late Bloomer", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1506\n*Better late than never.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Don a bulletproof vest at night. (1 use)");

		e.addField("Attributes:", "- On day 4, you will become a different role in the GIM thread. This will be announced to the town. You will become a role that is a member of any factions present in the game.");

		e.addField("Goal:", "Become your actual role and fulfill its win condition.");
	});

	register_role(["crystalist", "1507"], "Cult", "Crystalist", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 1507\n*In this world, Mithras and Corax have far too many who would rather witness the end of their followers. Serving numerous purposes in this world will assist you in ensuring that doesn't happen.*");

		e.addField("Alignment", "Cult Casual", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, forge a random crystal. You'll receive it at the beginning of the night.\n- At night, infuse a crystal with a positive or negative energy, then give it to another player.");

		e.addField("Attributes:", "- Every even numbered day, you'll gain an extra crystal by forging. This can cumulate to a maximum of 4, capping out at night 6.\n- You may give yourself and other Cult members a crystal.\n- You may hold as many crystals as you want at a time.\n- This role is converted from Town Casual roles.");

		e.addField("Crystal Effects:", "- Ruby: Positive grants a one-time Powerful attack, Negative deals a Powerful attack.\n- Amethyst: Positive permanently increases the defense tier, while Negative permanently decreases it. If decreasing from Vulnerable, it kills the player.\n- Jade: Positive grants a two-use roleblock ability and roleblock immunity, Negative roleblocks a player.\n- Sapphire: Positive increases the amount of times someone can use their ability per phase, negative decreases it. If it's 0, roleblock them every other night instead.\n- Amber grants a one-time use controlling ability and control and redirect immunity, negative redirects to a random non-Cult target.\n- Topaz grants a one-time use investigation ability which reveals a target's true role and detection immunity, negative will force a random Investigative role to target the player, and they will know who they were redirected to.\n- Jasper: Positive permanently increases the attack tier, granting an attack ability if needed, while Negative permanently decreases it.");

		e.addField("Crystal Effects (cont.):", "- Opal: Positive permanently grants an extra anonymous vote, while negative forces the target to vote themself.");

		e.addField("Goal:", factions.Cult.goal);
	});

	register_role(["guesstherole", "1508"], "Any", "Guess The Role", (e, chn, message, args) =>
	{
		commands.random_role.func(chn, message, e, args, true);
		let truename = e.author.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		let censorname = censor(truename.length);

		e.setAuthor({name: "Guess The Role"});
		e.setColor("808080");
		e.setImage();
		e.setDescription("Post 1508\nThis isn't actually a role. Instead, it's a command that posts a random role but removes the role's name to allow people to try and guess the role.\nIf it actually roles, it acts as the role that was rolled but is permanently disguised as \"Guess The Role\".");

		for(let i = 0; i < e.fields.length; i++)
		{
			e.fields[i].name = e.fields[i].name.replace(new RegExp(truename, 'ig'), censorname);
			e.fields[i].value = e.fields[i].value.replace(new RegExp(truename, 'ig'), censorname);
		}
	});

	register_role(["not_a_role", "notarole", "1509"], "Other", "Guess The Role", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1509\nThis isn't actually a role.");
	});

	register_role(["confused", "1510"], "Neutral", "Confused", {subCat: "Other", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1510");

		e.addField("Alignment", "Neutral None", true);
		e.addField("Attack", "Defense", true);
		e.addField("Chaos", "None", true);

		e.addField("Abilities:", "- Basic have you break defense that on first hit");

		e.addField("Attributes:", "- Night each one, two words choose you. Placement words change of all rolecard in.");

		e.addField("Goal:", "two cause people lose due to game switching");
	});

	register_role(["graphite", "1511"], "Rock", "Graphite", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1511");

		e.addField("Alignment", "Unique Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use an item you draw at night.");

		e.addField("Attributes:", "- You draw an item and use it on the same night.\n- The items you can draw are:\n> - Shield (Infinite Uses): Grant your target Powerful defense for the night. You can target yourself with this.\n> - Vest (Infinite Uses): Grant your target Basic defense until they are attacked and need this protection to survive. You can target yourself with this.\n> - Sword (1-use): Deal a basic attack to a player. If this attacks a rock, the sword breaks and you will not attack the rock, but still lose the ability.\n> - Statue of a Rock (2-uses): Use the abilities of any rock role, whether they are in the game or not. This ability cannot kill.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["indecisive_executioner", "indecisiveexecutioner", "indecisive", "ie", "1512"], "Neutral", "Indecisive Execution", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1512");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose someone to mark.");

		e.addField("Attributes:", "- Your target will be secretly marked the next day, and the mark will go away at the end of the day.\n- You can never mark the same person twice.\n- Nothing can stop your marking ability from successfully marking the intended target, the only exception being the attribute before this.");

		e.addField("Goal:", "Lynch a marked target.");
	});

	register_role(["essence_of_evil", "essenceofevil", "evil", "eoe", "1513"], "Neutral", "Essence of Evil", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1513");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose someone to mark.");

		e.addField("Attributes:", "- Every night, you will be given the abilities from 2 random Neutral (Evil) roles. These abilities must be able to have an impact in the game (for example you can't get Indecisive Executioner's or Horse Plinko Flexer's ability, since they won't impact the game).\n- Choose 1 ability to use on your target(s).\n- 1-time Basic Defense");

		e.addField("Goal:", "Have the good faction lose the game (you can win while dead).");
	});

	register_role(["a", "1514"], "Neutral", "A", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1514");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Kill a player at night.\n- Force a player to only be able to type a or A the next day. (1 use)\n- Make a target's role appear to be A upon death. The cause of death will be a random role that can kill. (1 use)\n- Replace a player's feedback message with A this night.");

		e.addField("Attributes:", "- Whenever you kill or vote out a Unique player, Power, or Faction Head, you will gain a use for one of your limited-use abilities at random.\n- You may multitask.\n- Your Defense's tier is equal to the combined amount of uses remaining across your limited-use abilities. (Max: Invincible)\n- This will look very funny if rolled by 1508.");

		e.addField("Goal:", "Kill all players who are against you.");
	});

	register_role(["sk", "sk_with_modkill_attack", "sk_modkill", "skwithmodkillattack", "skmodkill", "1515"], "Neutral", "SK with modkill attack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1515");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Modkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "sk_that_bans_people", "sk_ban", "skthatbanspeople", "skban", "1516"], "Neutral", "SK that bans people", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1516");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- Your attack will not only deal a Basic attack, but also ban the target. Even if the attack fails.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "sk_with_no_defense", "sk_no_defense", "skwithnodefense", "sknodefense", "1517"], "Neutral", "SK with no defense", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1517");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "sk_with_powerful_defense", "sk_powerful_defense", "skwithpowerfuldefense", "skpowerfuldefense", "1518"], "Neutral", "SK with powerful defense", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1518");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "sk_with_invincible_defense", "sk_invincible_defense", "skwithinvincibledefense", "skinvincibledefense", "1519"], "Neutral", "SK with invincible defense", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1519");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "sk_with_overprotective_defense", "sk_overprotective_defense", "skwithoverprotectivedefense", "skoverprotectivedefense", "1520"], "Neutral", "SK with overprotective defense", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1520");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "sk_that_cant_be_lynched", "sk_cant_lynch", "skthatcantbelynched", "skcantlynch", "1521"], "Neutral", "SK that can't be lynched", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1521");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- Your attack will not only deal a Basic attack, but also ban the target. Even if the attack fails.\n- If you get lynched, no you don't. Immediately trigger nightfall.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "sk_that_cant_be_banned_or_kicked", "sk_cant_ban", "sk_cant_kick", "skthatcantbebannedorkicked", "skcantban", "skcantkick", "1522"], "Neutral", "SK that can't be banned or kicked", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1522");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- Your attack will not only deal a Basic attack, but also ban the target. Even if the attack fails.\n- If you get lynched, no you don't. Immediately trigger nightfall.\n- The host cannot ban or kick you for any reason while you're alive, regardless if it's an actual ban or a @BANNED ban. After you die or the game ends, they are free to do whatever.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "sk_to_end_all_sks", "sk_end_all", "sktoendallsks", "skendall", "1523"], "Neutral", "The SK to end all SKs", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1523");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "\"SK-Killing\"", true);
		e.addField("Defense", "\"SK-Resistant\"", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If this is rolled, every role in the game is rerolled to be an SK. Copium.\n\nSK-Killing Attack: Overkill Attack, but only when attacking SKs.\nSK-Resistance Defense: Overprotective and modkill resistant defense, but only when attacked by SKs.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "serial_killer_leader", "serialkillerleader", "skl", "1524"], "SK", "Serial Killer Leader", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 1524");

		e.addField("Alignment", "Serial Killer Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Stab two people at night.\n- Recruit other SKs that aren't in the Serial Killer faction.");

		e.addField("Attributes:", "- Detection immune.\n- Can spawn even without non-Serial Killer faction SKs in the game.\n- Recruiting players will turn them into a member of the Serial Killers. They keep their original abilities and attributes, but can see the factional chat.\n" + factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["sk", "fiery_serial_killer", "fieryserialkiller", "fsk", "1525"], "SK", "Fiery Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1525");

		e.addField("Alignment", "Serial Killer Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab people with your gasoline knife, dousing them.\n- Stab all doused players with your very hot firey knife.");

		e.addField("Attributes:", "- Your douses don't interact with other dousing roles and vice versa.\n" + factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["sk", "thundery_serial_killer", "thunderyserialkiller", "tsk", "1526"], "SK", "Thundery Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1526");

		e.addField("Alignment", "Serial Killer Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab people with your thunder knife, dealing a rampage attack because you strike them with lightning.");

		e.addField("Attributes:", factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["sk", "invisible_serial_killer", "invisibleserialkiller", "isk", "1527"], "SK", "Invisible Serial Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1527");

		e.addField("Alignment", "Serial Killer Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab people.");

		e.addField("Attributes:", "- Astral.\n- You bypass protective roles.\n" + factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["sk", "icy_serial_killer", "icyserialkiller", "isk", "1528"], "SK", "Icy Serial Killer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1528");

		e.addField("Alignment", "Serial Killer Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab people with an icy knife, killing them.\n- Slice people with an icy knife, giving them hypothermia and roleblocking them.");

		e.addField("Attributes:", factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["sk", "threatening_serial_killer", "threateningserialkiller", "tsk", "1529"], "SK", "Threatening Serial Killer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1529");

		e.addField("Alignment", "Serial Killer Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab people with your knife, killing them.\n- Threaten to stab someone with your knife, revealing their role.");

		e.addField("Attributes:", factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["sk", "beekeeper_serial_killer", "beekeeperserialkiller", "bksk", "1530"], "SK", "Beekeeper Serial Killer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1530");

		e.addField("Alignment", "Serial Killer Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stab someone with your knife made out of honey, killing them. Some bees might help you with that.\n- Stab someone with your knife made out of flowers. This won't kill them, but all the bees in Salem will go to their house, scaring off everyone who would visit them.");

		e.addField("Attributes:", factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["1531"], "Other", "Aiko, Dreamer's Last Hope", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1531\nThis isn't a valid role format.");
	});

	register_role(["cereal_killer", "cerealkiller", "cereal", "ck", "1532"], "SK", "Cereal Killer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1532");

		e.addField("Alignment", "Serial Killer Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Serve someone cereal of poison.\n- Serve someone cereal of life.\n- Serve someone cereal of truth.");

		e.addField("Attributes:", "- Cereal of poison will poison the target.\n- Cereal of life will heal the target.\n- Cereal of truth will reveal the target's role.\n" + factions.SK.attributes);
		
		e.addField("Goal:", factions.SK.goal);
	});

	register_role(["rocks_in_a_pringles_can", "rocksinapringlescan", "pringles", "riapc", "1533"], "Rock", "Rocks in a Pringles Can", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1533");

		e.addField("Alignment", "Rock Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Hand someone a can of pringles, each day.");

		e.addField("Attributes:", "- The following night, they will eat the Pringles. Except the Pringles are not Pringles and are rocks so they die (dealt a powerful attack).\n- Additionally they share the Pringles with each of their visitors so each visitors dies (is dealt a powerful attack) too.\n- Each night everyone that visits you is also handed a can of pringles.\n- Players do not know they are handed a can of pringles.");
		
		e.addField("Goal:", factions.Rock.goal);

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/1007325649976963072/IMG_20220811_181453.jpg");
	});

	register_role(["lunarifish", "lunari", "lunar", "1534"], "Discordian", "Lunarifish", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1534");

		e.addField("Alignment", "Discordian Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Try to make a somewhat subtle but funny joke, roleblocking someone.\n- dont use proper grammar or punctuation to anger the inner grammar nazi of a target which will allow you to redirect them to whoever you want ig");

		e.addField("Attributes:", "- You are roleblock immune.\n- unredirectable and uncontrollable");
		
		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["operator", "op", "1535"], "Town", "Operator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1535");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Debug someone at night.");

		e.addField("Attributes:", "- You will learn the 50-role file their post number falls into (e.g. 1401-1450).\n- They will be immune to effects that would change their role itself tonight, such as conversion, ability granting/stealing effects, and being given defense (even temporarily).\n- c is not defined");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["marshal", "1536"], "Army", "The Marshal", {subCat: "Command"}, (e) =>
	{
		e.setDescription("Post 1536");

		e.addField("Alignment", "Unique Army Command", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Prosecute! (Day): Immediately kill your target. 0 uses. 1 use when revealed as the Marshal.\n- Interrogation! (Night): Immediately learn your target's role. 1 use. 1 use when revealed as the Marshal.\n- Town Politics (Day): Reveal yourself as the Marshal, gaining three votes and one use of each of your abilities.");

		e.addField("Attributes:", "- For every attack level you take, lose one level of defense. (Ex: You take a powerful attack, your defense is now none.)\n- You lose if you reach a 1v1 and do not have a charge of Prosecute left.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["colonel", "1537"], "Army", "The Colonel", {subCat: "Supportive"}, (e) =>
	{
		e.setDescription("Post 1537");

		e.addField("Alignment", "Unique Army Supportive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Command! (Night): Force one player to visit another, you will receive a message stating that your command succeeded or failed. Your target will not know they were controlled. 3 uses. 1 night cooldown.");

		e.addField("Attributes:", "- Control Immunity.\n- Redirect Immunity.\n- Roleblock Immunity.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["sergeant", "1538"], "Army", "The Sergeant", {subCat: "Investigating"}, (e) =>
	{
		e.setDescription("Post 1538");

		e.addField("Alignment", "Army Investigating", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigation? (Day): Check a player each day, if they visit, you will perform an Investigator (=35) check on them. If they did not, you will be notified.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["lieutenant", "lieu", "1539"], "Army", "The Lieutenant", {subCat: "Investigating"}, (e) =>
	{
		e.setDescription("Post 1539");

		e.addField("Alignment", "Unique Army Investigating", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Detect! (Day): Guess a players role, if correct you will be informed at the end of the day if this is correct. 1 use. 1 use when the Marshal has revealed.");

		e.addField("Attributes:", "- Bypasses Framing.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["major", "1540"], "Army", "The Major", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1540");

		e.addField("Alignment", "Army Killing", true);
		e.addField("Attack", "Basic/Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Detect! (Day): Guess a players role, if correct you will be informed at the end of the day if this is correct. 1 use. 1 use when the Marshal has revealed.");

		e.addField("Attributes:", "- You may instead expend 2 uses of your ability to perform an Unstoppable attack.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["private", "1541"], "Army", "The Private", {subCat: "Supportive"}, (e) =>
	{
		e.setDescription("Post 1541");

		e.addField("Alignment", "Army Supportive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tomb of the Fallen (Night): Take inspiration from a dead Army member during the night, becoming their role the next day. 1 use.");

		e.addField("Attributes:", "- Control immunity.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["specialist", "spec", "1542"], "Army", "The Specialist", {subCat: "Supportive"}, (e) =>
	{
		e.setDescription("Post 1542");

		e.addField("Alignment", "Army Supportive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cheat Sheet (Night): Use an Army (Investigating) or Army (Supportive)'s ability at night. 2 uses. +1 use when the Marshal has revealed themselves.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["first_sergeant", "firstsergeant", "fs", "1543"], "Army", "The First Sergeant", {subCat: "Protector"}, (e) =>
	{
		e.setDescription("Post 1543");

		e.addField("Alignment", "Army Protector", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shield! (Day): Grant your target a basic defense autovest. 1 use. +1 use when the Marshal has revealed themselves.");

		e.addField("Attributes:", "- If used on the Marshal, instead add one level of protection to their current defense level.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["sergeant_first_class", "sergeantfirstclass", "sfc", "1544"], "Army", "The Sergeant First Class", {subCat: "Investigating"}, (e) =>
	{
		e.setDescription("Post 1544");

		e.addField("Alignment", "Army Investigating", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Indoctrinate (Day): Indoctrinate a player, causing them to become **Worried.**\n- Mark (Night): Mark a player during the night, you will see all **Worried** players that visit them.");

		e.addField("Attributes:", "- You will be informed which Marked target **Worried** players visit.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["staff_sergeant", "staffsergeant", "ss", "1545"], "Army", "The Staff Sergeant", {subCat: "Investigating"}, (e) =>
	{
		e.setDescription("Post 1545");

		e.addField("Alignment", "Army Investigating", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Overstep (Night): Invade a persons house at night, discovering if they have visited a target of your choice at the end of the next night.");

		e.addField("Attributes:", "- Framed targets will appear to have visited your target regardless of if they actually have.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["medical_staff", "medicalstaff", "ms", "1546"], "Army", "The Medical Staff", {subCat: "Investigating"}, (e) =>
	{
		e.setDescription("Post 1546");

		e.addField("Alignment", "Army Investigating", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Trauma-Check (Day): Discover if your target has killed before, resolves immediately. 2 uses. +1 use when the Marshal has revealed.");

		e.addField("Attributes:", "- Frames will see your target as having murdered if they haven't, and haven't murdered if they have.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["lieutenant_colonel", "lieutenantcolonel", "lc", "1547"], "Army", "The Lieutenant Colonel", {subCat: "Investigating"}, (e) =>
	{
		e.setDescription("Post 1547");

		e.addField("Alignment", "Army Investigating", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Court Martial (Day): Check five players during the day, see if a majority of them are evil or good. 2 uses. +1 use when the Marshal reveals.");

		e.addField("Attributes:", "- Framed players will appear as Evil.\n- Neutral (Evil) and Detection Immune roles will appear as good.");
		
		e.addField("Goal:", factions.Army.goal);
	});

	register_role(["mafia_traitor", "mafiatraitor", "mt", "1548"], "Town", "Mafia Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1548");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of the role you get.");

		e.addField("Attributes:", "- You will be given a random Mafia role. That is your role, but you win with the Town.\n- You will not gain permanent defense, even if your role grants that.\n- You will not get access to the factional chat, you will also not get access to the factional kill.\n- You will not get roles who can only target/affect members of the Mafia.\n- You will not get Mafia (Head) roles.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["coven_traitor", "coventraitor", "ct", "1549"], "Town", "Coven Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1549");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of the role you get.");

		e.addField("Attributes:", "- You will be given a random Coven role. That is your role, but you win with the Town.\n- You will not gain permanent defense, even if your role grants that.\n- You will not get access to the factional chat, you will also get the Necronomicon last.\n- You will not get roles who can only target/affect members of the Coven.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["rock_traitor", "rocktraitor", "rt", "1550"], "Town", "Rock Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1550");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of the role you get.");

		e.addField("Attributes:", "- You will be given a random Rock role. That is your role, but you win with the Town.\n- You will not gain permanent defense, even if your role grants that.\n- You will not get access to the factional chat, you will also not get access to the factional kill.\n- You will not get roles who can only target/affect members of the Rocks.");
		
		e.addField("Goal:", factions.Town.goal);
	});
};
