module.exports = (g) =>
{
	const {register_role, factions, MessageEmbed, androidRole} = g;

	register_role(["sk_traitor", "sktraitor", "skt", "sk", "1551"], "Town", "SK Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1551");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of the role you get.");

		e.addField("Attributes:", "- You will be given a random SK role. That is your role, but you win with the Town.\n- You will not gain permanent defense, even if your role grants that.\n- You will not gain access to the factional chat, nor will you gain the attribute that allows you to kill roleblockers. You will still be roleblock immune.\n- Yes, this can also be referred to as \"sk\" because we need more than 26 sks to appear with the command =sk.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ice_cream_truck_guy", "icecreamtruckguy", "ice_cream", "icecream", "ictg", "1552"], "Town", "Ice Cream Truck Guy", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1552");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player at night.\n- Freeze a player at night, doubling the length that they're being roleblocked if they're being roleblocked.\n**Really Cold Ice Cream** — Roleblock a player, then coldsnap. *(Coldsnapping causes all roleblocked players to be dealt an Astral Basic attack immediately.)* You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything except this attribute, they're roleblocked for an additional night afterwards as well.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["android_traitor", "androidtraitor", "at", "1553"], "Town", "Android Traitor", {subCat: "Support"}, (e, chn, message, args) =>
	{
		e.setDescription("Post 1553");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of the role you get.");

		e.addField("Attributes:", "- You will be given a randomly generated Android role. That is your role, but you win with the Town.\n- You are 30x more likely to get the Android role number 10074, which gives you:\n- The role name NERPIE, the ability to \"Hack a player each Night. You will learn their role.\" and the attributes \"When you use your ability, you will not be able to use it on that target again,\" and \"You cannot be killed by Powerful attacks.\"\n- You will not gain access to the factional chat, you will also not get access to the factional kill.\n- You will not get the attribute \"When you use your ability, a random non-Android will learn five names, at least one of which is an Android.\"\n- You will not get the attribute \"When you use your ability, a random Android's abilities and attributes are revealed to the Town the next day phase.\"\n- If the Android role rolled has one of the 2 mentioned attributes, you will get a new Android role to be instead of the one you previously had.");
		
		e.addField("Goal:", factions.Town.goal);

		if(args[0])
		{
			let rng = 10001 + Math.floor(Math.random() * 1053);

			if(rng > 11024)
				rng = 10074;

			let android = new MessageEmbed();
			android.setAuthor({name: "", iconURL: factions.Android.icon});
			android.setColor(factions.Android.color);
			androidRole(android, chn, message, [rng.toString()]);

			chn.send({embeds:[e, android]});

			return true;
		}
	});

	register_role(["sk", "sk_28_stab_wounds", "sk28stabwounds", "1554"], "Neutral", "SK but it deals 28 stab wounds", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1554");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic x28", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every night visit another player. You may deal 28 basic attacks to them and all their visitors, and all your visitors that night.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["in_honour_of_nerpie", "inhonourofnerpie", "nerpie", "ihon", "1555"], "Neutral", "In Honour of NERPIE", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1555");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hack a player each Night. You will grant them death immunity for the phase.");

		e.addField("Attributes:", "- When you use your ability, your defense is lowered by a tier the next night if your target isn't a member of the Town.\n- It takes two more votes to lynch you.\n- You are an Android at heart, and your first attribute doesn't apply if you use your ability on an Android. Additionally, granting death immunity lasts two phases instead of one when used on an Android.\n- Cannot self-target.");
		
		e.addField("Goal:", "Survive until the end of the game. If Androids are in the game, you must ensure they win instead, even if you die in the process.");
	});

	register_role(["archmage_of_thunder", "archmageofthunder", "archmage", "thunder", "aot", "1556"], "Coven", "Archmage of Thunder", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1556");

		e.addField("Alignment", "Coven Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Electrocute 2 people at night.\n- With the Necronomicon, strike thunder on a player's house, killing them and electrocuting all visitors. 2 uses.");

		e.addField("Attributes:", "- Electrocutions are permanent unless removed by something that removes negative effects.\n- If two electrocuted players visit the same target, or one visits the other, they both get indirectly attacked.\n- No mistakes were made in this role.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["squirrel_with_a_shotgun", "squirrelwithashotgun", "squirrel", "shotgun", "swas", "1557", "1504u"], "Unseen", "Archmage of Thunder", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1557\nConverted from: Squirrel with a Gun");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Choose a target, you will attack Them, Their visitors and your visitors, 50% chance to fail on each person.");

		e.addField("Attributes:", "- Your attack has only 33% chance to fail instead if you rerolled into this.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["contrary_to", "contraryto", "contrary", "1558"], "Town", "Contrary To", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1558");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reverse a target. They cannot be visited tonight, and will instead perform all actions that would have happened to them on the would-be visitor.\n- Inverse a target. All external protection on them turns into the equivalent level of attack, and all attacks become the equivalent level of protection. You will learn what attacks/defence occurred, if any.");

		e.addField("Attributes:", "- You cannot reverse the same target twice in a row.\n- You may only use one ability per night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["unpleasant_nightmares", "unpleasantnightmares", "unpleasant", "nightmares", "un", "1559", "1477u"], "Unseen", "Unpleasant Nightmares", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1559\nConverted from: Pleasant Dreams");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Make the target fall asleep, allowing the victim to sleep. Once they are asleep, their first ability disappears.");

		e.addField("Attributes:", "- If a target is attacked, they will not be harmed in any way. If it is someone friendly(same faction) to them, both will suffer pain.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["weariness", "1560"], "Town", "Weariness", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1560");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Weary a player and choose two of: disabling their night ability / removing their vote / removing their ability to talk / removing their ability to whisper / setting their defence to none / learn how many nights of weariness they have left.");

		e.addField("Attributes:", "- The effects you chose are applied to the target for a number of nights equal to the number of nights they have used a night ability in a row.\n- Weariness disappears if the player is healed.\n- Roleblock and control immune.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["peer_into", "pearinto", "pi", "1561"], "Town", "Peer Into", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1561");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Peer into two players, and all players who visit them.");

		e.addField("Attributes:", "- You may only unlock the next level of investigation by having investigated every alive player with the previous level\n> Level 1 - Suspicious or not suspicious\n> Level 2 - Investigator (35)\n> Level 3 - Exact role\n> Level 4 - Exact role, bypassing all detection immunity, automatically attack evil roles");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["infinity", "inf", "1562"], "Coven", "Infinity", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1562");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Curse a player, giving them vulnerable defence. The following night, curse their direct living neighbours.\n- Stun a player, redirecting them to target themselves. The following night, stun their direct living neighbours.");

		e.addField("Attributes:", "- You may only use one ability per night. If you manually curse or stun a player, all current curses or stuns will reset.\n- If you are attacked at night, at the start of the following night, all curses and stuns will reset and target that player. If there multiple players, one is randomly picked.\n- Players will know they are cursed or stunned, unless it was started from an attacker.\n- Curses and stuns disappear when you die, unless it was started from an attacker.\n- With the Necronomicon, players die when they are cleared of being cursed or stunned.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["clearly_fearing", "clearlyfearing", "clearly", "fearing", "cf", "1563"], "Town", "Clearly Fearing", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1563");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Declare a target during the day. This cannot be done in your private channel, only in the day chat by sending a message that contains the word \"target\", \"choose\", \"select\", \"kill\", \"attack\" (other words may be allowed by host discretion) and the name of the player.");

		e.addField("Attributes:", "- The following night after declaring a target, you will attack them. You cannot be affected negatively in any way by them. If you are attacked, even if you are protected, your attack will be halted.\n- Control, Roleblock, Redirection immune.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["large_fries", "largefries", "large_iced_coffee", "largeicedcoffee", "fries", "coffee", "large", "lfaalic", "1564"], "FallenAngel", "Large Fries and a Large Iced Coffee", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1564");

		e.addField("Alignment", "Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Go to McDonalds and buy large fries and a large iced coffee.\n- Ask someone to watch your belongings in exchange for medium fries.\n**Sin of Fast Food** - If you are the last Fallen Angel, open your own McDonalds at your home. You may choose to serve your customers so much food, that their ability's effect doesn't take place, and they die the next night.");

		e.addField("Attributes:", "- The salt from the fries fills you with rage, while the coffee fills you with energy. The next night, you may attack as many people as you've ever gotten fries and coffee.\n- While you're at McDonalds, all visits against you fail.\n- You may go to McDonalds multiple times in a row.\n- Asking someone to watch over your belongings roleblocks them. The medium fries do nothing, but they're pretty tasty!\n- Asking a Fallen Angel to watch your belongings will also allow you to go to McDonalds the same night. You also bypass roleblock immunity.\n- Attacking a Fallen Angel will allow you to go to McDonalds twice tomorrow.");
		
		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["degree", "1565"], "Other", "Degree", {subCat: "Support", spawnCat: ["Underworld", "Mathematic", "Everfrost", "Agent"]}, (e) =>
	{
		e.setDescription("Post 1565");

		e.addField("Alignment", "Something Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Degrees in Temperature: Roleblock a player by freezing their house, or burn a player by burning their house.\n- Degrees in Angles: Rotate the Town and move all players down any amount of slots (moving players down from the lowest slot sets them to 1). This is processed before all other abilities.\n- Degrees in Studying: Learn a skill from another player. Gain a one time use of the ability they are using tonight.");

		e.addField("Attributes:", "- You are an Underworld, Mathematic, Everfrost, and Agent all at the same time. You have access to the factional chat if only one of those exists.\n- If multiple exist, you won't know faction members, and they won't know you - only that you exist. Gain permanent Basic defense if this is the case.\n- For obvious reasons, if Agents are the only faction you're part of, you don't get access to the factional chat.\n- Regardless of the amount of factions, if you are an Agent, you will receive your code words. You will not know other Agents' code words if there are multiple factions you are part of, however.\n* Factions you are apart of (except Agents) will always be told what you are doing, under the identity of \"Degree\". If someone else is performing a factional ability, you cannot choose to use it.\n- If Underworld exists, you may use the factional douse.\n- If Everfrost exists, you may use the factional roleblock.\n- If Agents exist, you may use the factional kill.");

		e.addField("Attributes:", "- If Mathematics exist, you will always know the exact amount of points left.\n- Your abilities never cost points, but getting visited will still generate points for the faction.\n- You may still spend points to attack.\n- You cannot spend points to change roles. Nor can this role be changed into by spending points.\n- For spawning purposes, you count as all Mathematic alignments but Head.\n- You cannot be promoted, unless you are only part of one living faction.");
		
		e.addField("Goal:", "Underworld, Everfrost, Agent, or Mathematic goal");
	});

	register_role(["condor", "1566"], "Thundercry", "Condor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1566");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Watch a player's house tonight, learning who visits them and roleblocking them if they're not Thundercry. If they're visited by two or more non-Thundercry players, your visit becomes astral and those visitors will be roleblocked the following night.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- Roleblock immune.\n- If one or more Striked players are alive, all Thundercry members are roleblock immune.\n- If two or more Striked players are alive, gain basic defense.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["corrupted_hero_akasuki", "corruptedheroakasuki", "corrupted_hero", "corruptedhero", "akasuki", "cha", "1567"], "Neutral", "Corrupted Hero, Akasuki", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1567");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Attack a player");

		e.addField("Attributes:", "- At the start of each night, you might decide to lower or raise either your Attack or Defense value by one stage.  If you do so, the opposite value is lowered by a stage.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "sk_with_immortal_defense", "sk_immortal", "skwithimmortaldefense", "skimmortal", "ski", "1568"], "Neutral", "SK with immortal defense", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1568");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Immortal", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- Your attack will not only deal a Basic attack, but also ban the target. Even if the attack fails.\n- If you get lynched, no you don't. Immediately trigger nightfall.\n- The host cannot ban or kick you for any reason while you're alive, regardless if it's an actual ban or a @BANNED ban. After you die or the game ends, they are free to do whatever.\n- You're also modkill immune.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["apprentice_fighter_daichi", "apprenticefighterdaichi", "apprentice_fighter", "apprenticefighter", "daichi", "afd", "1569"], "Neutral", "Apprentice Fighter, Daichi", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1569");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Meow at someone's house, redirecting all of their visitors into you.");

		e.addField("Attributes:", "- At the end of each night, you will be notified of everyone that visited you. Then, you may choose to switch placements on the playerlist with one of your visitors. This switch is secret and will not be revealed in the playerlist.");
		
		e.addField("Goal:", "End up neighbouring a good and evil player, a neutral and good player or a neutral and evil player.");
	});

	register_role(["vigilante_but_its_a_discord_mod", "vigilantebutitsadiscordmod", "discord_mod", "discordmod", "vbiadm", "1570"], "Town", "Vigilante but it's a discord mod", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1570");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a player at night. 3 uses.\n- Target a player at night.");

		e.addField("Attributes:", "- You may not shoot night 1.\n- Anyone you visit, regardless of the ability you use, will be banned.\n- You will ban your target first, **then** shoot them, but they won't be a valid target unless they somehow don't get banned.\n- If you somehow manage to shoot a townie, you will not be allowed to shoot the next night and you will commit suicide.\n- If you fail to ban your target, kick them from the server.\n- If you fail to kick your target, remove them from the game directly.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bob-omb", "bob_omb", "bobomb", "1571"], "Koopa", "Bob-omb", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1571");

		e.addField("Alignment", "Koopa Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player, can only be used if Activated by an Atrribute.");

		e.addField("Attributes:", "- If you are lynched, You may choose up to 3 players to kill, this ignores any form of defense.\n- If you would die at night, you will instead be Activated and survive until the end of the next night, Can only be triggered once.\n- You are immune to the attack reduction of not being the normal attacker.");
		
		e.addField("Goal:", factions.Koopa.goal);
	});

	register_role(["sk", "sk_that_lynches_people", "sk_lynch", "skthatlynchespeople", "sklynch", "skl", "1572"], "Neutral", "SK that lynches people", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1572");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "\"Lynch\"", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.\n- Your attack counts as a lynch. It will kill your target and bypass anything, except for lynch immunity.\n- If your target is directly immune to dying at night, immediately attack them at the beginning of the next day. This doesn't count as the town's daily lynch.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["love_river_kid_taizo", "loveriverkidtaizo", "love_river_kid", "loveriverkid", "taizo", "lrkt", "1573", "1573a"], "Neutral", "Love River Kid, Taizo", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1573A\n*The \"Love River\" is a group of 4 vigilantes that dont quite agree with the Town's way of enacting justice, but also condemn evils in their own way.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player.");

		e.addField("Attributes:", "- At the end of each Full Moon, your role will change into **Love River Warrior, Akihiko**, if it hasnt already.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["love_river_warrior_akihiko", "loveriverwarriorakihiko", "love_river_warrior", "loveriverwarrior", "akihiko", "lrwa", "1573b"], "Neutral", "Love River Warrior, Akihiko", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1573B");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Attack a player.\n- Attack a player. You may choose to do any of the following to the attacked player, but you may choose no more than 1 additional effect:\n> Clean them.\n> Disguise their cause of death to be any other role.\n> Make them appear to be alive for a day. They will appear as dead the day after.");

		e.addField("Attributes:", "- You may not multitask.\n- At the end of each Full Moon, your role will change into **Love River Hero, Airi**, if it hasnt already.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["love_river_hero_airi", "loveriverheroairi", "love_river_hero", "loveriverhero", "airi", "lrha", "1573c"], "Neutral", "Love River Hero, Airi", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1573C");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Attack a player.\n- Attack a player. You may choose to do any of the following to the attacked player, but you may choose no more than 1 additional effect:\n> Clean them.\n> Disguise their cause of death to be any other role.\n> Make them appear to be alive for a day. They will appear as dead the day after.\n- Attack a player. You may choose to do any of the following to the attacked player, but you may choose no more than 1 additional effect:\n> Redirect all of their visitors (excluding you) into a target of your choice.\n> Invalidate protective abilities used on them for the night.\n> Lower their defense value to None. Protective abilities can still raise the value.");

		e.addField("Attributes:", "- You may not multitask.\n- At the end of Night 5, 10, 15, etc, your role will change into **Love River Star, Aito**, if it hasnt already.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["love_river_star_aito", "loveriverstaraito", "love_river_aito", "loveriveraito", "aito", "lrsa", "1573d"], "Neutral", "Love River Star, Aito", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 1573D");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack a player.\n- Attack a player. You may choose to do any of the following to the attacked player, but you may choose no more than 1 additional effect:\n> Clean them.\n> Disguise their cause of death to be any other role.\n> Make them appear to be alive for a day. They will appear as dead the day after.\n- Attack a player. You may choose to do any of the following to the attacked player, but you may choose no more than 1 additional effect:\n> Redirect all of their visitors (excluding you) into a target of your choice.\n> Invalidate protective abilities used on them for the night.\n> Lower their defense value to None. Protective abilities can still raise the value");

		e.addField("Attributes:", "- You may multitask.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "comedic_sk", "comedicsk", "comedic", "csk", "1574"], "Neutral", "Comedic SK", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1574\n*Hilarious and original!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target tonight.");

		e.addField("Attributes:", "- Every time you attack your target, you have a chance to comedically slip on a banana peel and fail your attack. The percent chance of this happening is equal to the night number times ten (e.g. on Night 1, you have a 10% chance of slipping on a banana peel).\n- If you successfully attack your target, you will tell your target a hilarious joke as you're murdering them. This has a 50% chance of causing them to suffer from a laughing fit as you murder them which upgrades your attack to Powerful.\n- If you are roleblocked, you will attack the roleblocker in addition to your target.  You may still slip on a banana peel while attacking your roleblocker.\n- When you automatically attack a roleblocker, the roleblocker will have a 100% chance of suffering from a laughing fit, and their roleblock will fail. Their will will be dissolved in water from a squirting flower that you comedically sprayed on their will.");

		e.addField("Attributes (cont.):", "- At night, you may choose to clown around at your house. This will spare your roleblockers. If you are visited while clowning around at your house, anyone who attacks you will have a 50% chance of failing because you are acting so hilariously that it is impossible to stop watching.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["tlhps_blessing", "tlhpsblessing", "tlhps", "tlhp", "blessing", "1575"], "Neutral", "TLHP's Legacy", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1575");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Roll 3 roles. You become one of those three roles of your choosing. However, you also have an extra life, meaning when you die, you come back instantly anew as though you just entered the game.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["die", "1576"], "Neutral", "Die", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1576");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "\"Death\"", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- At night, choose someone to die.");

		e.addField("Attributes:", "- There is no avoiding death for the target you make die. They will die, regardless of defense, immunity to death, protectives, roleblocks, redirects, controls, ability fails, and transporter-like abilities.\n- If you kill a factional leader (Town Power, Fox Head, Serial Killer Head, etc.), you will have to choose to either be roleblocked the next night (this roleblock specifically overrides your first attribute), or lose your defense for the next night. This attribute only applies once.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["hypnotic_hypnotizer", "hypnotichypnotizer", "hypnotizer", "hypnotic", "hh", "1577"], "Coven", "Hypnotic Hypnotizer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1577");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hypnotize someone at night.");

		e.addField("Attributes:", "- When you hypnotize someone, you may give them up to 5 feedback messages. You create the messages.\n- You have the option to erase your target's feedback when you hypnotizing them, making it where they only receive the fake feedback.\n- With the Necronomicon, any message you send to a player becomes true, but you can only send 1 message per night. The host reserves the right to deny any message that would create too powerful an effect.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["upgrader", "1578"], "Neutral", "Upgrader", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1578");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a player at night to upgrade one of their abilities during the day.");

		e.addField("Attributes:", "- Whenever you target someone, at the end of the night you will steal one of their abilities. The target will be informed of this. This happens last, so it won't stop any abilities from happening.\n- During the day, you may upgrade the role however you want. At the end of the day, you will give the role back.\n- For payment, you will receive a 1-time use of the original ability you upgraded.\n- You may choose someone to upgrade and use one payment ability per night.");
		
		e.addField("Goal:", "Upgrade at least 3 different people, and have at least 1 upgrade make a difference in the game.");
	});

	register_role(["wd_gaster", "wdgaster", "gaster", "wd", "1579"], "Neutral", "W.D. Gaster", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1579\n*Beware of the man who speaks in hands.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Set your FUN event values, FUN value gains, and location on Night 1. This action processes immediately.\n- Select a player and set their FUN value to a particular number at night.");

		e.addField("Attributes:", "- Each player in the game has a certain FUN value associated with them. They will not be told what this value is unless they are informed via a FUN event. A FUN value is a number in the range of 0 - 9. All players start with a FUN value of 0. If a player’s FUN value exceeds 9, it instead becomes the last digit.\n- You must choose a player on Night 1 to create a Fake Hallway at their house. If this player dies, you must re-place the Fake Hallway the following night, which processes immediately.\n- If you are attacked at night, your attacker will be notified that their target vanished before their very eyes. If you are lynched during the day, the Town will be notified that the player they attempted to lynch vanished before their very eyes. In both cases, the kill will fail.\n- Players can modify their FUN value by performing certain actions. You must assign a FUN value gain to each of the following actions");

		e.addField("Modifying FUN Values:", "- Players can modify their FUN value by performing certain actions. You must assign a FUN value gain to each of the following actions during the first night. FUN value gains are a positive number that will be added to a player’s FUN value once they perform this action. You cannot assign the same gain to more than one action. If you leave any actions unassigned, they will be randomized.\n> - Visit another player.\n> - Kill another player.\n> - Have your ability stopped (roleblock, fail, prevented).\n> - Be visited by more than one player.\n> - Vote for another player.\n> - Survive an attack.\n> - Send a whisper.\n> - Receive a piece of night feedback other than ability results, notifications from a FUN event, or “slept peacefully”.\n> - Do not perform your night ability.\n> - Visit W.D. Gaster’s location.");

		e.addField("FUN Events:", "- There are certain FUN events that are triggered when a player reaches a certain FUN value. FUN events are triggered at the end of a day or night phase. Five FUN events will be selected at random: one of the Gaster Follower Encounters, one of either Goner Kid or Clam Girl Encounter, Sound Test, one of Wrong Number Song or Alphys Call, and Fake Hallway. You must assign fun values to each of these five events. If you do not assign FUN values to them, they will be randomly assigned, and you will not be notified what the values are (other than Fake Hallway).\n> - Gaster Follower 1 Encounter: Player will be notified of their FUN value.\n> - Gaster Follower 2 Encounter: Player will be notified of one of the FUN values of the Fake Hallway event.\n> - Gaster Follower 3 Encounter: Player will be given three players one of which whose house is the location of the the mysterious door.\n> - Goner Kid Encounter: Player will learn the FUN value gain associated with one random action.");

		e.addField("FUN Events (cont.):", "> - Clam Girl Encounter: Player will learn the last digit of their total FUN value gain over the past day and night phase.\n> - Sound Test Room: If player visited a player within two spots of the role list of W.D. Gaster’s location, they will hear Gaster’s Theme being played.\n> - Wrong Number Song: Player will be notified of three players who are not W.D. Gaster.\n> - Alphys Call: Player will be notified of three players whose houses are not the location of W.D. Gaster.\n> - Fake Hallway (2 values): Player will be able to encounter W.D. Gaster if they visit W.D. Gaster’s location.\n- If a player visits the player whose house you hid the Fake Hallway at AND the player's FUN value is equal to one of the FUN values of the Fake Hallway event, you will instantly vanish from the game, and the player(s) who found you will automatically win the game.");
		
		e.addField("Goal:", "Survive until the end of the game without being located.");
	});

	register_role(["trollface", "troll", "1580"], "Neutral", "Trollface", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1580");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Activate a 5 Minute slowmode and disable Whispers on the next day chat, The night after that, you can report 1 player who edited their message to modkill them alongside your action, This counts for your goal.\n- Make the next day chat a Voice channel with a Voice chat log channel (Recommended bot: Scriptly), Players can't send messages on the VC log, The start of the day post will be posted on the VC log, Whispers are also disabled this day.\n- Choose someone to publically reveal their role , if they are a townie, it will be revealed on all faction chats, all alive players except you lose cannot read message history for the next day.\n- Make the Host ping @playing followed by a message of your choice, This ignores your first attribute. (3 uses, Instant, Day Action)");

		e.addField("Attributes:", "- Once you have used an ability, you can't use it again until you have used all other abilities once.\n- At the start of the day, the previous day channel will be hidden until the end of the game, only takes effect while you are alive.\n- If players reach the required votes to lynch you, it will be revealed your role and that you need [Number of players - 2] votes to be lynched.\n- Once you hit your win condition, you will be modkilled.\n- Roleblock and Control Immunity.");
		
		e.addField("Goal:", "Ensure 3 players Modkill themselves while you are alive.");
	});

	register_role(["this_bleariness", "thisbleariness", "bleariness", "tb", "1581"], "Neutral", "This Bleariness", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1581");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prepare to fog up a player during the day, locking them from their private channel the following night, as well as any factional chats. Their ability will now be usable during the day, resolving at the end of the day.");

		e.addField("Attributes:", "- If you fog up a player twice, they cannot use their ability by talking in their private channel, and instead has to state in the day chat.\n- You have a layer of basic defence that blocks one attack.\n- If you are killed at night, every player will be fogged up the following night.");
		
		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["in_my_future", "inmyfuture", "future", "imf", "1582"], "Town", "In My Future", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1582");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, foretell a player and a night to target them on (that isn't this night).\n- If you have foretold a player to target this night, you must choose one of the following actions to perform on them (randomly chosen if no option is picked):\n> Basic rampaging attack\n> Redirect to yourself\n> Remove one of their abilities randomly for the rest of the game");

		e.addField("Attributes:", "- There are no restrictions on having multiple foretellings of the same night or person.\n- You cannot be prevented from performing actions you have foretold, even if you are dead or removed from the game.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["indoctrinator", "indo", "1583"], "Cult", "Indoctrinator", {subCat: "Command"}, (e) =>
	{
		e.setDescription("Post 1583");

		e.addField("Alignment", "Cult Command", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Will of Mithras (Night): Immediately kill your target. 0 uses. 1 use after revealing yourself.\n- Test of Minds (Night): Check up to three people. Learn if each one can win with the Cult currently or not. You will also learn which of them are possible to convert or not. 2 uses. +1 use after revealing yourself.\n- Indoctrinate (Day): Privately reveal yourself to a target. You will grant them the opportunity to convert into any Cult role other than Cult Leader and Indoctrinator. You will know if they refused or not. 1 use.");

		e.addField("Attributes:", "- For every attack level you take, lose one level of defense.\n- This role is converted from good-aligned Command roles.");
		
		e.addField("Goal:", factions.Cult.goal);
	});

	register_role(["admin", "1584"], "Town", "Admin", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1584");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "\"Modkill\"", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During any phase, modkill someone.\n- During any phase, kick someone from the server.\n- During any phase, timeout someone for any amount of time.\n- During any phase, ban someone. This gives them the @BANNED role.\n- During any phase, literally ban someone from the server.");

		e.addField("Attributes:", "- Your abilities take effect immediately and have a limit of 1 per phase.\n- At the end of the game, anyone who is banned or still timed out has their punishment removed.\n- Roleblock, Conversion, & Control Immunity\n- For all intents and purposes (rerolling), this is a Sax role unless they say otherwise in <#970051770342588467>");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["can", "1585"], "Neutral", "Can", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1585");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "\"Piercing\"", true);
		e.addField("Defense", "\"Immortal\"", true);

		e.addField("Abilities:", "- Visit someone to gift them canned foods.\n- Once you complete your goal, at any time, you may choose to can the game immediately. People who have previously completed their goals will win, everyone else will lose.");

		e.addField("Attributes:", "- Gifting someone canned foods heals them and permanently increases their defense tier.\n- Gifting someone canned foods also reduces your defense tier.\n- If your target now has Powerful or higher defense, they will automatically be redirected to you.\n- If your target now has Invincible or higher defense, you will attack yourself.\n- Piercing will always be one tier of attack higher than your defense.\n- Defense tiers: Immortal -> Overprotective -> Invincible -> Powerful -> Basic -> None -> Vulnerable\n- You are not control or redirect immune.");
		
		e.addField("Goal:", "Decrease your defense to None, then survive to the end of the game.");
	});

	register_role(["undercover", "1586"], "Sentry", "Undercover", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1586");

		e.addField("Alignment", "Unique Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target during the day. You will discover a random visitor of that target the previous night.");

		e.addField("Attributes:", "- All \"evil\" factions will learn of the existence of an Undercover at the beginning of the game.\n- You will learn who the \"evil\" factions visits each night. You will not know which \"evil\" faction they were visited by, or how many \"evil\" players visited them.\n- You are not obligated to visit authorized targets. However, you may only visit the targets of \"evil\" factions.\n- You may not appear in games where there are no \"evil\" factions.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["networker", "1587"], "Sentry", "Networker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1587");

		e.addField("Alignment", "Unique Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to recruit a player into the Sentries. 3 Uses, 1 Night Cooldown.");

		e.addField("Attributes:", "- All \"good\" factions will learn the existence of a Networker at the beginning of the game.\n- Recruiting a player converts them; __this only works on \"good\" factions\". Conversion attempts on \"evil\" factions or neutral roles will automatically fail.__ You also may not convert \"head\" roles of \"good\" factions.\n- Converted players will retain their original abilities & attributes, but have their goal changed to the Sentry goal, and may only visit authorized targets as a Sentry would.\n- You are not obligated to visit authorized targets.\n- If you attempt to convert a Sentry, an \"evil\" faction role, or a neutral role, your superiors will deem you incompetent and immediately deal an Overkill attack to you. Your last will shall additionally be obscured.\n- You may not appear in games where there are no other \"good\" factions.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["spear", "1588"], "Neutral", "Spear", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1588");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack 2 people at night.");

		e.addField("Attributes:", "- The two people you attack must be adjacent on the role list. Dead players are considered to not be on the player list for this ability.\n- You can choose to only attack 1 person. You will attack them with a piercing attack, which is a Powerful attack that ignores all protective effects on the target.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["watcher", "1589"], "Town", "Watcher", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1589");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch someone at night and shoot someone during the day.");

		e.addField("Attributes:", "- When you watch someone, you will know who they visit, and who visited them.\n- During the day you may shoot one person you saw (last night's target, who your target visited, or who visited your target).\n- If you shoot a Town member, you will be roleblocked the next night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["pacifist", "1590"], "Neutral", "Pacifist", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1590");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Pacify someone each night.");

		e.addField("Attributes:", "- Pacified players can't use abilities, talk in day chat or private chats, whisper, vote, edit their last will, answer prompts, choose options, or take literally any other game actions whatsoever.");
		
		e.addField("Goal:", "Kill or pacify all who would oppose you.");
	});

	register_role(["asshole", "1591"], "Neutral", "Asshole", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1591");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Once per phase, immediately learn someone's true role.\n- During the day, rewrite someone's role card (except goal and faction), provided you've learned their role. It will take effect at the beginning of the night.\n- During the night, send someone a false notification.");

		e.addField("Attributes:", "- You may learn someone's role and use your other available ability at the same time.\n- One use Basic defense auto-shield.\n- You have Manage Nickname permissions. You lose them on game end or death.");
		
		e.addField("Goal:", "Live to see the good faction lose.");
	});

	register_role(["shady_cop", "shadycop", "cop", "1592", "1271u"], "Unseen", "Shady Cop", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1592\nConverted from: Jaded Cop");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player during the night.\n- Frame a player during the night. (2-shot)");

		e.addField("Attributes:", "- You will learn the alignment and category of players you investigate. (ie Town Killing)\n- Framed players will appear as a role of your choice for the rest of the game to any investigative roles.\n- You will passively see and investigate any player who visits you.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["soul_shifter", "soulshifter", "ss", "1593", "1322u"], "Unseen", "Soul Shifter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1593\nConverted from: Jaded Cop");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Compare two souls to discover their compatibility\n- Shift the souls of two players (1-shot)\n- Discover the last emotions of dying souls (Passive)");

		e.addField("Attributes:", "- When discovering two souls' compatibility, you will see if they win together. This may be used with any two roles, even if one is mod confirmed.\n- You may choose to add one of the following changes to the win conditions of each of the players whose souls you shift, where [X] is the other player targeted.\n> \"[X] must survive.\"\n> \"[X] must die.\"\n- When a player dies during the night, they may send a message consisting of up to 10 emojis (and only emojis) to you. These must be sent to you during the next Day Phase.");
		
		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["king_conga", "kingconga", "conga", "kc", "1594"], "Neutral", "King Conga", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1594");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, add a player to the conga line. At the beginning of the following night, that player will be notified that they are now dancing in a conga line.\n- Attack a player at night.");

		e.addField("Attributes:", "- Each player in the conga line will be forced to visit whichever player was previously added to the conga line before they were.\n- If a player in the conga line dies, every player who had been added to the line after that player will be removed from the conga line.\n- You are the first player in the conga line.\n- If the only players remaining at any point in the game are you and the other players in the conga line, the game ends in the victory of you and everyone who is a part of the conga line.\n- If you are attacked, the attack will hit the last player who was added to the conga line.\n- You will have a list of every player who is in the conga line pinned in your channel.");
		
		e.addField("Goal:", "Kill everyone who would oppose you and your line of conga dancers.");
	});

	register_role(["tarot_card_reader", "tarotcardreader", "tarot", "tcr", "1595"], "Town", "Tarot Card Reader", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1595");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night, select a player. You will receive one of the 21 major arcana (as well as fool) describing the role as determined by the host because fuck you i am not going through all 1595+ roles just to name one tarot card to each.");

		e.addField("Attributes:", "- You cannot be fooled by frames.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["priest_to_higher_powers", "priesttohigherpowers", "priest", "higher_powers", "higherpowers", "pthp", "1596"], "Town", "Priest to Higher Powers", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1596");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Call upon the gods of this world at night. You may ask the host a yes-or-no question, which they must answer truthfully to the best of their ability. 3 uses.\n- Write a divine constellation in the stars at night. The host will send a message of your choice to someone. 1 use.");

		e.addField("Attributes:", "- You are blessed by the heavens and kissed by the gods. You may not be modkilled, effects that use the host to negatively affect you don't work, and the host must literally kiss your Discord avatar on their device screen at the beginning of the game. They do not have to prove they did this but it's technically a host error if they dont >:(");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["electrician", "1597"], "Mafia", "Electrician", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1597");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Paralyze someone during the day. Their ability will be completely nullified the night after, but they will still get their feedback as if their night action had actually gone through. For roles that gain information such as Investigator (35), they will receive completely random results.\n- Paralyze someone during the night, completely stopping them from performing any abilities the following day.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["abomination", "1598"], "Rock", "Abomination", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 1598");

		e.addField("Alignment", "Rock Espionage", true);
		e.addField("Attack", "\"Spirit Power\"", true);
		e.addField("Defense", "\"Fallen Angel Aura\"", true);

		e.addField("Abilities:", "- (First) Attack a target with the effect of a random killing role.\n- (Second) Select a target to douse. Or, ignite your doused targets.\n- (Third) Infect someone with a Biohazard plague, except Biohazards can catch it and Rocks can't.\n- During the day, spend 2 sun or 10 points for an extra vote.\n- At any phase, produce (night # / 2) sun.\n- With the Necronomicon, choose a player. You will control them and poison them. They will be redirected to the target you controlled them to tomorrow night.\n- **Final Judgement** - Select a target. Roleblock all your visitors and their visitors, then coldsnap.\n- Deathly Gaze (Blood Moon) - Attack all your visitors and negate all negative abilities that were used against you.\n- Place a strike on a target, then rehearse.\n- (Concert) Offer to recruit a player to the Rock. This will only change their goal. They may choose to accept or decline your offer. 2 uses.\n- After killing two people, evolve during the day. You gain the ability to perform a Raid.");

		e.addField("Attributes:", "- Each kill grants 1 Not Saint point. Gain 4 Not Saint points to regain access to the factional chat.\n- You existing can allow Hunting Moons to spawn.\n- If Umbrae doesn't exist, you may call Blood Moons. Otherwise, you are buffed when they call one.\n- On a Hunting Moon, you are also the number ahead of you. You may multitask both abilities.\n- During the Pale Moon Circus Show, you are also the number behind you. You may multitask both abilities.\n- If a Hunting moon occurs during a Pale Moon Circus Show, you are all 3 and may mutlitask all abilities.\n- You have 3 codewords. Your teammates know your role and codewords.\n- Your attack is based on the attacks Spirits do/would have that night.\n- Your defense is based on how many teammates are alive, similar to Fallen Angels.\n- You gain the Necronomicon when no Coven are left.\n- At the beginning of the game, you are randomly the First, Second, or Third. You switch spots similar to the Last, at the beginning of each night.");

		e.addField("Attributes (cont.):", "- For every other striked player, you may perform an extra ability at the same time.\n- Roleblock immune. If someone tries to roleblock you, you will attack them.\n- You have two attributes from a random Android role.\n- Your Concert begins on Day 5. Rehearsing works the same. Your radius is 3.");
		
		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["spymaster", "1599"], "Neutral", "Spymaster", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 1599");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, pick a target to be a guesser the following night, and come up with a clue. You cannot pick the same player twice.");

		e.addField("Attributes:", "- At the start of the game, you will be assigned a board of 16 roles. 8 of them will be roles in the game, and the 7 won’t (but are theoretically possible to be rolled in the game). There is also 1 assassin role that is not in the game. You know which is which, and must get players to guess the roles that are in the game.\n- When giving a clue, it may only consist of one word, and a number. The number indicates how many roles the clue to relevant to.\n- If a Guesser makes an incorrect guess, they cannot make any more guesses, and will be unable to act tonight, so the order matters.\n- If a Guesser chooses the assassin, they will be dealt a basic attack at the end of the night, and you will lose instantly, unless you’ve already won.\n- If a Guesser gets all the relevant roles related to the clue, they may perform two night actions tonight. They may also make a free additional guess, which has no repercussions, unless they hit the assassin.");

		e.addField("Attributes (cont.):", "- Feedback on if guesses were correct or incorrect are given immediately, not at the end of the night.\n- You are not allowed to talk about your knowledge of which roles are in the game.");
		
		e.addField("Goal:", "Get at least 6 roles that are in the game to be successfully guessed.");
	});

	register_role(["self-confirmer", "self_confirmer", "selfconfirmer", "sc", "1600"], "Town", "Self-confirmer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1600");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pick a player. If they are town, they self-confirm instantly. If not, you die instantly. You may use this at any time. 3 uses maximum.");
		
		e.addField("Goal:", factions.Town.goal);
	});
};
