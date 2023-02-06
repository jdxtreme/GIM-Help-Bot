//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["nuclear_vigilante", "nuclearvigilante", "nuclearvigi", "nuclearvig", "vigilante", "nv", "2951"], "Town", "Nuclear Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2951");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 ammo to deal a Poweful attack to someone and a Basic to all their visitors.\n- Use 2 ammo to deal an Unstoppable attack to someone, a Poweful to their visitors, and a Basic to everyone visiting whoever you dealt a Powerful attack\n- Use 3 ammo to deal an Overkill attack to someone, an Unstoppable to their visitors, a Powerful to everyone visiting whoever you dealt an Unstoppable, and a Basic to everyone visiting whoever you dealt an Powerful attack.\n- Change your goal to \"Kill everyone who opposes you\" and get 3 extra ammo (1 use)");

		e.addField("Attributes:", "- You have 3 ammo.\n- Your abilities are astral.\n- Anyone who kills you will commit suicide out of guilt on the next night, unless the attack was Astral.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["noob_saibot", "noobsaibot", "noob", "saibot", "ns", "2952"], "Kombat", "Noob Saibot", {subCat: "Kounter"}, (e) =>
	{
		e.setDescription("Post 2952\n*I was only earning my living*");

		e.addField("Alignment", "Kombat Kounter", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- **Retaliate**: Select a Kombatant member. If they’re attacked, reduce the attacker’s defense by 1 tier and deal a basic attack to them.\n- **Dark Demolition**: Select a player. If they’re capable of killing, deal a basic attack to them and another player in their faction. This ability will not be refunded if your target is incapable of killing (2 uses, 1 night cooldown)\n- **Shadow Clone**: Put a shadow clone in front of a player. You will learn who visits them night, and deal a basic attack to all visitors. (1 use)");

		e.addField("Attributes:", "- **Foggy Mist**: The first time you are attacked, all attacks on you that night will fail and your attacker(s) will be unable to visit or be visited by anyone but you for the next night.\n- You also have Powerful defence on the first night you're attacked.\n - **X-RAY**: All your attacks are upgraded to powerful, and you gain 2 extra uses on Shadow Clone. You may also multitask.");

		e.addField("Goal:", factions.Kombat.goal);
	});

	register_role(["power_lily", "powerlily", "lily", "pl", "2953"], "Plant", "Power Lily", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2953\n*Wait, don’t plants produce their own food?*");

		e.addField("Alignment", "Plant Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce one sun each night.\n- Power up one other plant per night for 2 sun.");

		e.addField("Attributes:", "- Powered up plants get +1 defense.\n- If a powered up plant attacks, all attacks are upped by 1. For example, Chomper would be able to deal an Unstoppable attack to one player, and then spit them out to deal a Powerful attack to another player.\n- Power up effects only last for the night the ability is used.");

		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["gambling_doctor", "gamblingdoctor", "doctor", "gd", "2954"], "Town", "Gambling Doctor", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2954\n*Are you sure you need a heart to live?*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attempt Heal a player, you will randomly give them one of the following:\n> - {Powerful Cleaning attack\n> - Visit and give yourself Basic defense}\n> - Visit\n> - Basic defense\n> - Powerful defense\n> - Invincible defense\n> - {Overprotective defense\n> - Death immunity for this night and the next one}\n- **Cleave** during the day to reduce the risk. (1 use)");

		e.addField("Attributes:", "- You will not know what you gave your patient or if they got healed.\n- Your kills will show up as \"Killed by a Neutral role\".");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["silly_autovest_dude", "sillyautovestdude", "autovest_dude", "autovestdude", "sad", "2955"], "Neutral", "Silly Autovest Dude", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2955\n*A layer of X defense that can protect it from one attack. If a player with an autovest would be attacked multiple times at once, the autovest will block a random one of the attacks among the strongest ones that it can successfully block. for only $9.99! *");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic) (Powerful) (Invincible) (Overprotective)", true);

		e.addField("Abilities:", "- Give a player an autovest of any of the following defense values. You may only choose each once. Your autovests trigger before any other autovests.\n- Overprotective\n- Invincible\n- Powerful\n- Basic\n- Aura\n- Hellbent\n- None\n- Vulnerable");

		e.addField("Attributes:", "- You have an Overprotective, an Invincible, a Powerful, and a Basic autovest. They trigger in that order.");

		e.addField("Goal:", "Live to see the Town lose the game.");
	});

	register_role(["deathmarch", "dm", "2956"], "Town", "Deathmarch", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2956\n*Onward!*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player each night.");

		e.addField("Attributes:", "- You will reach the end of your march on Day 13, ending the game in a Town victory. For each Town death, the end comes one day sooner.\n- You're have **modification immunity**. See Auxiliary (2650). ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["life_april", "lifeapril", "la", "2957"], "Mafia", "Life April", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2957\n*Backwards!*");

		e.addField("Alignment", "Mafia Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player each night.");

		e.addField("Attributes:", "- You will reach the end of your march on Day 8, ending the game in a Mafia victory. For each Mafia death, the end comes one day sooner.\n- You have modification immunity. See 2650: Auxiliary.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["the_atheist", "theatheist", "atheist", "2958"], "Neutral", "The Atheist", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2958");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "All players are good, except for the host.\n- The host may break game rules to make it appear that evil players are currently in play, this includes and is limited to:\n> - Flipping other people’s roles falsely.\n> - Modkilling and disguising it as an attack by another role.\n> - Creating false feedback messages.\n- The host is a valid lynch target, if this role is not in the game and the host is lynched, automatically nightfall.");

		e.addField("Goal:", "N/A");
	});

	register_role(["atheist", "2959"], "Neutral", "Atheist", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2959\n*How could God allow such evil? Or rather, is He laughing as He watches us suffer?*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If this role rolls, all other players must be roles from the good faction. Then, reroll this role to a random role from the good faction, and for the rest of the game, the host may:\n> - Kill up to three players each night, disguising their causes of death as having been attacked by another role.\n> - Have players' roles appear to be other ones upon death\n> - Give players false night feedback messages.\n- For the rest of the game, the host can be lynched. If they are, they die, the game ends, and the good faction wins the game. Otherwise, the game cannot enter a game end state until only one player is alive, at which point the host wins the game.");

		e.addField("Goal:", "N/A");
	});

	register_role(["christian", "2960"], "Neutral", "Christian", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2960\n*God would never punish the innocent without reason.*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Start a host lynch once per game. If they’re lynched, the host is not lynched and all evils win.\n- Use a random ability each night.");

		e.addField("Attributes:", "- If this role roles, the game continues as normal.\n- You know you’re the Christian.\n- You have a random ability at the start of every night.\n- If this role roles, the host must be lynched.");

		e.addField("Goal:", "Get the host lynched, then save them because you love your lord and savior.");
	});
	
	register_role(["people_person", "peopleperson", "pp", "2961"], "Town", "People Person", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2961\n*Your target trancends humanity. They must be Zage.*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, you may investigate one person that you are permitted to. You will recieve their consig result and the abilities of a role they made.");

		e.addField("Attributes:", "- May not target themselves.\n- If their are no roles alive that you are permitted to check, you will reroll into a random town role.\n- List of people you're allowed to check and their consig result:\n> :: Your target is the star of the show. They must be Rasen.\n> ::  Your target is a fish with determination. They must be Lunari.\n> ::  Your target owns a kingdom in another world, they must be TLHP.\n> ::  Your target is a kitsune here to play with us, they must be Tox.\n> ::  Your target is an outsider from another realm, they must be seon.\n> ::  Your target is a danger to others, they must be Luka.\n> ::  Your target is obsessed with pizzas, they must be Mac.\n> :: Your target has two names at once, they must be  Nik or Nic.\n> :: Your target hates quotation marks. They must be Vik.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["seer_apprentice", "seerapprentice", "seer", "apprentice", "sa", "2962"], "Town", "Seer Apprentice", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2962");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check 3 players and choose one of the roles you saw with your attribute, you will learn if the role is in that group.");

		e.addField("Attributes:", "- You are given a role currently in the game at the start of every day, you may not recieve the same role twice.\n- If you choose to check an evil role, you must check 4 players.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["people_person", "peopleperson", "pp", "2963"], "Neutral", "People Person", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2963\n*You will investigate Del tonight. Your target is Nic.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player each night. You will learn their username.");

		e.addField("Goal:", "Attempt to investigate a player only for their name to be someone else's.");
	});
	
	register_role(["seer_apprentice_apprentice", "seerapprenticeapprentice", "apprenticeapprentice", "apprentice", "seer", "saa", "2964"], "Town", "Seer Apprentice Apprentice", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2964\n*So what did masters master master master master say today master?*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true); 

		e.addField("Attributes:", "- If the Seer Apprentice (2963) dies, take over their role.\n- Seer apprentice is forced to spawn if this role spawns.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["seer_apprentice_apprentice_apprentice", "seerapprenticeapprenticeapprentice", "apprenticeapprenticeapprentice", "apprenticeapprentice", "apprentice", "seer", "saaa", "2965"], "Town", "Seer Apprentice Apprentice Apprentice", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2965");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Attributes:", "- 2964: Seer Apprentice Apprentice must spawn.\n- If the Seer Apprentice Apprentice dies or their role is changed, you become the Seer Apprentice Apprentice.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["traptrix_rafflesia", "traptrixrafflesia", "rafflesia", "tr", "2966"], "Traptrix", "Traptrix Rafflesia", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2966\n*You call us parasites, but really, all we do is kill you*");

		e.addField("Alignment", "Traptrix Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may directly use a trap hole, even if you do not have one in your hand. (4 Uses)");

		e.addField("Attributes:", "- You may perform both the factional kill and use a trap hole.");

		e.addField("Goal:", factions.Traptrix.goal);
	});
	
	register_role(["lasersmith", "ls", "2967"], "Galactic", "Lasersmith", {subCat: "Extermination"}, (e) =>
	{
		e.setDescription("Post 2967");

		e.addField("Alignment", "Galactic Extermination", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Empower another Galactic during the day to restore their abilities.\n- Charge your laser at night.\n- Fire your laser at a target.");

		e.addField("Attributes:", "- All charges will be stored until you fire your laser.\n- Charges will be used to attack visitors to your target, at a 1 charge per visitor ratio. If you do not have enough charges to kill all visitors, the ones who die are randomized.\n- Leftover charges are directed at your own visitors, at a 2 charge per visitor ratio. If you do not have enough charges to kill all visitors, the ones who die are randomized.\n- You lose all charges when firing, even if some weren't used.");

		e.addField("Goal:", factions.Galactic.goal);
	});
	
	register_role(["plasma_chemist", "plasmachemist", "plasma", "chemist", "pc", "2968"], "Galactic", "Plasma Chemist", {subCat: "Extermination"}, (e) =>
	{
		e.setDescription("Post 2968");

		e.addField("Alignment", "Galactic Extermination", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Empower another Galactic during the day to restore their abilities.\n- Prepare your chemicals to be ready for use.\n- Poison a player with your chemicals.");

		e.addField("Attributes:", "- Players affected by your chemicals die at the beginning of the next night.\n- Additionally, they also spread the chemicals to all who visit them. Those players are unable to spread it.\n- If you become unempowered, all players affected by your chemicals are cured, and do not die if they would have otherwise. This doesn't apply if you are unempowered from dying.");

		e.addField("Goal:", factions.Galactic.goal);
	});
	
	register_role(["sheriff_but_it_gives_detection_immunity", "sheriffbutitgivesdetectionimmunity", "sheriffbut", "sheriff", "sbigdi", "2969"], "Neutral", "Sheriff but it gives detection immunity", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2969");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Interrogate a player at night.");

		e.addField("Attributes:", "- If your target would not show as \"not suspicious\" to Sheriff (948), give them detection immunity.\n- You gain the results that a Sheriff (948) would receive.\n- Your first attribute resolves before your second.");

		e.addField("Goal:", "See the Town lose. Or just the Sheriff. Fuck the Sheriff.");
	});
	
	register_role(["fang_gu", "fanggu", "fg", "2970"], "Neutral", "Fang Gu", {subCat: "Demonic"}, (e) =>
	{
		e.setDescription("Post 2970");

		e.addField("Alignment", "Neutral Demonic", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Choose a player: They die. The first neutral role you kill this way becomes an evil Fang Gu and you die instead.");

		e.addField("Attributes:", "- If you survive until the end of the game, all evil players will win, and the good faction will automatically lose.\n- All Neutral Killing roles and REF's are aware of who you are at the start of the game, and have an alternate wincon of protecting you whilst eliminating all Good faction members.");

		e.addField("Goal:", "Survive until the end of the game, or see a Fang Gu survive until the end of the game.");
	});
	
	register_role(["no_dashii", "nodashii", "nd", "2971"], "Neutral", "No Dashii", {subCat: "Demonic"}, (e) =>
	{
		e.setDescription("Post 2971");

		e.addField("Alignment", "Neutral Demonic", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Choose a player: They die.");

		e.addField("Attributes:", "If you survive until the end of the game, all evil players will win, and the good faction will automatically lose.\n- Your two closest TI neighbors yield false information at night. \n- All Neutral Killing roles and REF's are aware of who you are at the start of the game, and have an alternate wincon of protecting you whilst eliminating all Good faction members.");

		e.addField("Goal:", "Survive until the end of the game.");
	});
	
	register_role(["masochist_host", "masochisthost", "masochist", "host", "mh", "2972"], "Neutral", "Masochist Host", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2972\n*L ://*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If this role is rolled for any player, a condition is set where if the host is voted to be lynched, they win and all other players lose.\n- This role is rerolled after being rolled. Effects still apply, but no players will know of this role existing.");

		e.addField("Goal:", "N/A");
	});
	
	register_role(["there", "2973"], "Town", "There", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2973\n*there is a really cool movie I want to see*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player and move them to a new place on the playerlist each night. All players targetting the player who they took the spot of will be secretly redirected to them. Other players whose positions are changed as a result won't be affected.");

		e.addField("Attributes:", "- You have roleblock and redirect immunity.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["their", "2974"], "Mafia", "Their", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2974\n*I like their dog*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose two players each night. Roleblock the first player, and, if you prevented them from using one or more abilities this way, give one charge of each of those abilities to the second player.");

		e.addField("Attributes:", "- You have roleblock and redirect immunity.");

		e.addField("Goal:", factions.Mafia.goal);
	});
	
	register_role(["they're", "theyre", "2975"], "Neutral", "They're", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2975\n*They're an amazing guy, you will love him!*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player and make them into another player of your choice each night. The first player's name and role will be changed to the second's for the rest of the game.");

		e.addField("Attributes:", "- You have roleblock and redirect immunity.");

		e.addField("Goal:", "Have at least one pair of players you made the same win the game.");
	});
	
	register_role(["erron_black", "erronblack", "erron", "eb", "2976"], "Kombat", "Erron Black", {subCat: "Kounter"}, (e) =>
	{
		e.setDescription("Post 2976\n*Goddamn, your voice sounds like nails on a chalkboard*");

		e.addField("Alignment", "Kombat Kounter", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None/Basic", true);

		e.addField("Abilities:", "- **Dead Shot**: Select a Kombatant member. You’ll watch them for that night. If your target is attacked, shoot up to 6 random visitors, dealing a powerful attack to them.\n- **Pistol Whip**: Hit a player with your revolver, then write their name on a bullet. They will be roleblocked that night. (6 uses)\n- **Bullseye**: Unload all of your named bullets into the players that are marked. You’re not used to still moving targets, so you will miss if a marked player is kill incapable. (0 uses)");

		e.addField("Attributes:", "- **Sharpshooter**: You have basic defense against astral attacks, and will counter-attack one astral attacker the first time someone targets you using an astral ability.\n- **X-RAY**: Gain one use of Bullseye, and have Dead Shot take out all visitors instead of just 6. You also will have one extra counter-attack added to your Sharpshooter attribute");

		e.addField("Goal:", factions.Kombat.goal);
	});
	
	register_role(["mental_leech", "mentaleech", "leech", "ml", "2977"], "Metamorph", "Mentaleech", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2977\n*Your mind can become a weapon—one you may wield, or one you may suffer by.*");

		e.addField("Alignment", "Metamorph Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Feed on a player's mind, roleblocking them. If successful, they will be stuck in their current body for the next two nights. If you target a Metamorph-aligned player with this ability, it will fail.\n- Choose two targets - you may choose the same person to be both. You will twist the mind of the first, controlling them into the second target tomorrow night. You learn all feedback. If the twisted-mind target has multiple targets themselves, you will only alter their first. The first time you use this ability, it will fail.\n- Swap roles with a player at night, with the exception of faction and goal staying the same. This happens after all other actions resolve that night. You cannot use this on the same night as another ability.");

		e.addField("Attributes:", "- If you are alive and Metamorph-aligned in a Metamorph victory, that victory is nullified and the Good faction wins instead.");

		e.addField("Goal:", factions.Metamorph.goal);
	});
	
	register_role(["sk_but_i_switched_the_goal_and_ability", "skbutiswitchedthegoalandability", "skbistgaa", "sbistgaa", "sk", "abilitysk", "goalsk", "2978"], "Neutral", "SK but i switched the goal and ability", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2978");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Kill all who would oppose you.");

		e.addField("Attributes:", "- Roleblock Immunity\n- If you are roleblocked, you will attack the role blocker in addition to your target.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");

		e.addField("Goal:", "Attack a player each night.");
	});
	
	register_role(["kabal", "2979"], "Kombat", "Kabal", {subCat: "Krutch"}, (e) =>
	{
		e.setDescription("Post 2979\n*I'm about one thing: what's best for me*");

		e.addField("Alignment", "Kombat Krutch", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- **Hook Toss**: Select two targets. The first target will be redirected into the second. You do not learn their role.\n- **Spinning Dash**: Dash at a player. This resolves immediately. Your target will be confused, and will target themselves and their two closest living neighbors, even if they’re only capable of one visit. (1 night cooldown)\n- **Pick Up Speed**: Make it so all the Kombatant member’s actions resolve instantly, as well as it going through protective roles. (1 use)");

		e.addField("Attributes:", "- You will use Hook Toss on the first attacker that attacks instead of your original target. They will be redirected into your second target if using hook grab, otherwise, they will be tossed into a random non-Kombatant player.\n- **X-RAY**: Lose the cooldown on Spinning Dash and have the target visit their closest alive neighbors closest alive neighbor (eg 3 is targeted, they will visit 1-5). Hook Toss now also does a basic attack to the first target.");

		e.addField("Goal:", factions.Kombat.goal);
	});
	
	register_role(["vortox", "2980"], "Neutral", "Vortox", {subCat: "Demonic"}, (e) =>
	{
		e.setDescription("Post 2980");

		e.addField("Alignment", "Neutral Demonic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Choose a player: They receive correct information for the night.");

		e.addField("Attributes:", "All town players abilities will yield false information.\n- All Neutral Killing roles and REF's are aware of who you are at the start of the game, and have an alternate wincon of protecting you whilst eliminating all Good faction members.\n- If you survive until the end of the game, all evil players will win, and the good faction will automatically lose.\n- You cannot co-exist with other Neutral Demonic roles.");

		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["imp", "2981"], "Neutral", "Imp", {subCat: "Demonic"}, (e) =>
	{
		e.setDescription("Post 2981");

		e.addField("Alignment", "Neutral Demonic", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Choose a player: They Die");

		e.addField("Attributes:", "If you kill yourself using this ability, a random REF or Neutral Killing role becomes the imp.\n- All Neutral Killing roles and REF's are aware of who you are at the start of the game, and have an alternate wincon of protecting you whilst eliminating all Good faction members.\n- If you survive until the end of the game, all evil players will win, and the good faction will automatically lose.\n- You cannot co-exist with other Neutral Demonic roles.\n- You may self target.");

		e.addField("Goal:", "Survive until the end of the game, or see an Imp survive.");
	});

	register_role(["decoy_jester", "decoyjester", "decoy", "jester", "jest", "decoyjest", "dj", "2982"], "Neutral", "Decoy Jester", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2982");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Switch places with another player at night. Until the end of the following day, everything that should happen to them instead happens to you.");

		e.addField("Attributes:", "- On Day 1, you become aware of any roles whose target must meet a condition in order to be killed by said role (ex: Hex Master or Arsonist).\n- You will switch Defense values and investigative results with your target.\n- You return unfavorable results to investigative abilities.\n- You ignore Redirection Immunity.\n- You cannot select the same player two nights in a row.\n- If your target would be lynched, you are lynched instead.\n- You have control, roleblock, redirect and prevention immunity.");

		e.addField("Goal:", "Be dead before the last night/day of the game.");
	});

	register_role(["spy", "2983"], "Town", "Spy", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2983");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/c/cf/RoleIcon_Spy.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bug a player each night, learning all night feedback they received from other than from their own role.");

		e.addField("Attributes:", "- You learn which players each evil faction targetted each night and how many times.\n;~;");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["giant_shark", "giantshark", "shark", "gs", "2984"], "Crew", "Giant Shark", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2984\n*Because what pirate crew is complete without a good shark to eat those who walk the plank?*");

		e.addField("Alignment", "Crew Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bite a player at night. If they survive by any means, future attacks against them will have their tier increased by 1.\n- Thrash a player at night. You may use a second ability in addition to this one. (1 use)\n- Execute a player at night. If their defense is None or below, they will immediately die, and any non-immediate action they planned to use will be cancelled. (1 use)");

		e.addField("Attributes:", "- You are the last priority in promotion lists.\n- Your attack starts at Basic. After the end of every even night, your attack will increase, to a maximum of Unstoppable.\n- In Night 5 and afterwards, you will be Control and Redirect immune.\n;+;");
		
		e.addField("Goal:", factions.Crew.goal);
	});


	register_role(["rehabilitator", "2985"], "Town", "Rehabilitator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2985\n*Let's get you some help.*");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Rehabilitate a player at night.");

		e.addField("Attributes:", "- If that player is a member of a good faction, nothing happens.\n- If that player is a member of the REF, they will join as a random town role.\n- They fear they will be hunted by their former members, so they will not be able to speak until their former faction is dead and can’t whisper. They may still vote, but this vote will not be announced to the town.\n- You will not learn if you successfully convert them.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["theist", "2986"], "Neutral", "Theist", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2986\n*Oh, there is a God, all right. We please Him with our Blood, and entertain Him with our Conflict.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If this role rolls, all other players must be either Evil or Neutral. Then, reroll this role to a random role from an evil faction or a neutral, and for the rest of the game, the host may: \n> - Protect up to three players each night, disguising their protection message as one from any role.\n> - Have players' roles appear Townie upon death.\n> - Give players false night feedback messages.\n- For the rest of the game, the host can be lynched. If they are, they die, the game ends, and everyone wins the game. Otherwise, the game cannot enter a game end state until only one player is alive, at which point the host wins the game.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["faction_maker", "factionmaker", "fm", "2987"], "Neutral", "Faction Maker", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2987");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the first day, create a new faction for that game. It must be an REF.");

		e.addField("Attributes:", "- You need at least 4 roles for this faction, one of which must be a head role.\n- You will need to include at least 4 features in this faction. The host reserves the right to deny any of these features if they deem them to be unbalanced.\n- You cannot have features that work identically to other factions.\n- Once created, unless specified, up to 3 random town/good faction members will be converted to your new faction.\n- You then reroll into the head role of your created faction.\n- If you die, your faction members are reverted back to their original faction and rerolled into a role of the same subalignment.");
		
		e.addField("Goal:", "Create a new faction and win as that faction.");
	});

	register_role(["agnostic", "2988"], "Neutral", "Agnostic", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2988\n*God? Honest, I don't really care.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If this role rolls, all other players must have roles. Then, reroll this role, and for the rest of the game, the host may:\n> - Host the game as usual.\n- For the rest of the game, the host can be lynched. If they are, it's treated as nightfall, the day ends, and the night starts. Otherwise, the day cannot end until 24 hours have past since it started, at which point it ends and the night starts.");
		
		e.addField("Goal:", "N/A");
	});

	register_role(["proponent", "2989"], "Neutral", "Proponent", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2989\n*There are many things to believe in. Let me show you what's available.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Convert someone into any faction of your choice. This will functionally affect their goal, but also give them access to the nuances of the faction such as a Partisan being able to revive someone at the end of the game. (3 uses)\n- You may convert someone's goal to be that of any Neutral of your choice. (1 use)");

		e.addField("Attributes:", "- Converting an REF member into a Town role or another REF will fail.\n- The host resolves the right to deny any goals.\n- If there's a Promise (2448) in the game, you will suicide from Proponent guilt and this role is rerolled. ;-;\n- If there's a Partisan That Gives 2989's Ability (2994) in the game, they will start with one use of your first ability. ^^");
		
		e.addField("Goal:", "Live to see a faction or win. For you to be successful, at least one member of that faction must have had their goal changed at some point. You will also win if the person you gave a Neutral goal wins.");
	});

	register_role(["ten!", "ten", "not10", "ihatewhennumbershaveconflict", "likewhyistherea4-1anda4-2", "ijustwanttopullupwadanohara", "notthefrickingfourplayerchessthing", "smfh", "2990"], "Town", "Ten!", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2990");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select 10 players. You may either kill all of them by using Vigilante's ability, heal all of them by using Doctor's ability, or investigate all of them by using Investigator's ability.");

		e.addField("Attributes:", "- You can only die of guilt if 5 or more people you kill in one night are Town.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["nine!", "nine", "2991"], "Mafia", "Nine!", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 2991");

		e.addField("Alignment", "Mafia Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select 9 players. One will be attacked, one will be roleblocked, one will be Consigliere checked, one will be blackmailed, one will be framed, one will be cleaned whenever they die, one will receive incorrect night feedback, one can't vote the next day, and one is converted to the Mafia.");

		e.addField("Attributes:", "- You don't choose what happens to who.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["stricly_better_day_vigi", "strictlybetterdayvigi", "better_day_vigi", "betterdayvigi", "sbdv", "2992"], "Town", "Strictly Better Day Vigi", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2992\n*Psha. I'm simply superior.*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone during the day.");

		e.addField("Attributes:", "- You can only use your ability thrice.\n- Shooting a Town member has a 99% chance to disable your ability the following day.\n- If you kill Post 467, Post 1728, and Post 2048 specifically, you win the game immediately for no reason.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["flying_car", "flyingcar", "fc", "2993"], "Coven", "Flying Car", {subCat: "Good"}, (e) =>
	{
		e.setDescription("Post 2993");

		e.addField("Alignment", "Coven Good", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pick up another player. You may have up to 4 players in your car.\n- Drop off a player inside your car.\n- Nosedive into the ground, killing everyone inside, including yourself.\n- With the Necronomicon, fucking drive away.");

		e.addField("Attributes:", "- With the Necronomicon, you become a Flying Bus, allowing you to carry up to 40 other players. If this limit is reached, cope.\n- You may pick up as many players per night as you'd like.\n- You may drop off as many players per night as you'd like.\n- You may pick up and drop off players in the same night.\n- Players are notified if they are picked up or dropped off.\n- All players in the car/bus have a private chat. You may choose to disable or enable this at any time, and the driver isn't publicly stated.\n- Driving away removes you and everyone inside your car/bus from the game. You all win if the game ends before the end of the next day, otherwise you all lose, even if your original faction wins.\n- If there are no living players left after driving away, this counts as a win for everyone who drove away.\n- Yes, you can pick up Coven members.");
		
		e.addField("Goal:", "Kill everyone who would oppose the Coven, OR successfully drive away.");
	});

	register_role(["partisan_that_gives_2989's_ability", "partisan_that_gives_2989s_ability", "partisanthatgives2989sability", "partisanthatgives2989ability", "partisan2989", "ptg2a", "ptgta", "2994"], "Partisan", "Partisan That Gives 2989's Ability", {subCat: "of the Sun"}, (e) =>
	{
		e.setDescription("Post 2994\n*Y— Yeah, what the Herald said! The sun's, like, r— real neat, y'know!*");

		e.addField("Alignment", "Partisan of the Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Contact a player each night. You may send them a <25 character message. This ability resolves immediately.\n- During the day, idealise a player who you have contacted three or more times, granting them one use of 2989: Proponent's first ability.");

		e.addField("Attributes:", "- All messages sent by you appear to be sent by “The Voice of the Sun”.\n- Whenever a player uses an ability you grant, they commit suicide. ");
		
		e.addField("Goal:", factions.Partisan.goal);
	});

	register_role(["geologist", "whylunariwhy", "2995"], "Town", "Geologist", {subCat: "Rock"}, (e) =>
	{
		e.setDescription("Post 2995");

		e.addField("Alignment", "Town Rock", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, dig up a random rock. You keep that rock forever until you use it.\n- Throw a rock you've collected at someone else at night. The ability of that rock is used on them.");

		e.addField("Attributes:", "- Each rock you collect has a random Rock role's ability assigned to it. You know what role it is.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["gardener", "whylunariwhy", "2996"], "Town", "Gardener", {subCat: "Plant"}, (e) =>
	{
		e.setDescription("Post 2996");

		e.addField("Alignment", "Town Plant", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Produce sun at night.\n- Use a Peashooter to deal a Basic attack to someone. Costs 2 sun.\n- Plant a Sunflower to increase your sun production by 1. Costs 2 sun.\n- Plant a Cherry Bomb to deal an Unstoppable attack to 3 people who neighbor each other on the player list. Costs 4 sun.\n- Plant a Wall Nut to block all attacks to another player, which lasts until this is triggered. Costs 3 sun.");

		e.addField("Attributes:", "- You start with 2 sun.\n- Your sun production starts at 1.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["self-proving_vigilante", "self-provingvigilante", "self_proving_vigilante", "selfprovingvigilante", "self-proving", "selfproving", "vigilante", "spv", "whylunariwhy", "2997"], "Town", "Self-Proving Vigilante", {subCat: "Town"}, (e) =>
	{
		e.setDescription("Post 2997");

		e.addField("Alignment", "Town Town", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a player at night. 3 uses.");

		e.addField("Attributes:", "- If you shoot a Townie, you cannot shoot again.\n- If your target lives for any reason, the whole town will receive the message: *[PLAYER] IS tarnation IMMUNE WHAT ARE YOU tarnation IDIOTS WAITING FOR GO tarnation KILL THEM*");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["pyromaniac", "pyro", "whylunariwhy", "2998"], "Town", "Pyromaniac", {subCat: "Underworld"}, (e) =>
	{
		e.setDescription("Post 2998");

		e.addField("Alignment", "Town Underworld", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Douse a player at night.\n- Ignite all doused players. 1 use.\n- Spray down a player, undousing them. 3 uses.");

		e.addField("Attributes:", "- If 3 or more Town are doused, you will also ignite yourself.\n- You may douse and spray players in the same night.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["post_3000", "post3000", "2999"], "Neutral", "Post 3000", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2999");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Invincible", true); 

		e.addField("Attributes:", "- You have the abilities and attributes of Post 3, Post 30, Post 300, and Post 3000.\n- You don't suffer any consequences for killing Town members.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["not_tos_pirate", "nottospirate", "pirate", "ntp", "3000"], "Neutral", "Not ToS Pirate", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3000");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Shoot someone with your pistol. Unstoppable attack, but blocked by all temporary protections, including Basic defense ones.\n- Pierce someone with your Rapier, dealing a Powerful attack and bypassing temporary defense values\n- Slash someone with your Scimitar, dealing a Basic attack.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});
};
