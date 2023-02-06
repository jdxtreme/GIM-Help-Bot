//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["a_new_era", "anewera", "new_era", "newera", "ane", "era", "3001"], "Neutral", "A New Era", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3001");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If you die for any reason, the host isn't obligated to delete the GIM server, and Noodle doesn't really have to delete all the source code from the GIM bot.\n- The host and/or Rasen is free to not care.\n- This may be rerolled by the host for the following reasons:\n> * They're sane");
		
		e.addField("Goal:", "Die and do nothing upon your death.");
	});

	register_role(["and_life_moves_on", "andlifemoveson", "life_moves_on", "lifemoveson", "almo", "lmo", "3002"], "Town", "And Life Moves On", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3002\n*No way! First post in the 3000’s!*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may visit one person each night, learn their role, then change their role to another role.");

		e.addField("Attributes:", "- The host chooses what role they change to.\n- The host may decide for your ability to not work if they choose so.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mafia_host", "mafiahost", "mh", "3003"], "Neutral", "Mafia Host", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3003");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select any amount of players to be put in your subgame. 1 use.");

		e.addField("Attributes:", "- In your subgame, roles are not kept. They are returned at the end of the subgame.\n- 1/4th of players will be Mafia (3003A). They know who the others are.\n- 1 player will be Doctor (3003B).\n- 1 player will be Sheriff (30003C).\n- All other players will be Townies (3003D).\n- The subgame ends with the death of all Mafia, or when the Mafia have the same (or more) amount of members compared to Town.\n- Dying in the subgame kills you in the real game.");
		
		e.addField("Goal:", "Survive to see the end of your subgame.");
	});

	register_role(["3003a"], "Mafia", "Mafia", {subCat: "Other", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3003A");

		e.addField("Alignment", "Mafia Other", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Vote on a player to kill. The player with the most votes is attacked. In a tie, it's randomized.");
		
		e.addField("Goal:", "Outnumber the Town.");
	});

	register_role(["3003b"], "Town", "Doctor", {subCat: "Other", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3003B");

		e.addField("Alignment", "Town Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player to grant them Powerful defense for the night.");
		
		e.addField("Goal:", "See the Mafia be eliminated.");
	});

	register_role(["3003c"], "Town", "Sheriff", {subCat: "Other", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3003C");

		e.addField("Alignment", "Town Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player. You'll learn if they're a Mafia (3003A).");
		
		e.addField("Goal:", "See the Mafia be eliminated.");
	});

	register_role(["3003d"], "Town", "Townie", {subCat: "Other", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3003D");

		e.addField("Alignment", "Town Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);
		
		e.addField("Goal:", "See the Mafia be eliminated.");
	});

	register_role(["rotobaga", "3004"], "Plant", "Rotobaga", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3004\n*A rotobaga is a \*root\* plant... That \*flies\*. Think about that for a second.*");

		e.addField("Alignment", "Plant Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- (Cost: Free) Produce a sun each night.\n- (Cost: 1 sun) Fly high above the sky tonight, setting your defense to Levitating for this night and the next. See 2302. \n- (Cost: 2 sun) Select a target, and attack their two closest alive neighbors with rutabagas. Fails if the target is visited by more than 2 people tonight, including you. Failing doesn't refund any sun. **Locked**: If you successfully kill two targets, generate 1 sun.\n- (Cost: 3 sun) Expend three sun to make your visits use Astral, give you prevention immunity, and **Unlock**.");

		e.addField("Attributes:", "- Using your second ability, you will ignore all protective effects affecting the people you attack. However, any protective effects on your target will also apply to those who you would attack.\n- You may self-target.\n- **Locked**: If you were to attack a fellow Plant member, you would instead protect them with Basic defense made of rutabagas.\n- **Locked**: When selecting a Plant member as the target of your killing ability, you simply ignore all protective effects for those you attack.");
		
		e.addField("Squidly's Notes:", "- A powerful killing role, giving the Plants 2 KPN for 2 sun if played correctly, but with many flaws.\n- Unlocking is a powerful investment - due to your visits being Astral, it increases the chance of your attack succeeding since your visit no longer counts to the 2-visit cap. It also gives you some semi-reliable defensive capabilities and allows you to bypass protective effects more often.\n- That said, unlocking shouldn't always be your priority, as the locked buffs are situational at best. It's up to you to decide whether or not to take the investment.\n- Whenever you're in a tough situation with a lot of enemies, remember to use your second ability.");

		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["rutabaga_farmer", "rutabagafarmer", "rutabaga", "farmer", "rf", "3005"], "Town", "Rutabaga Farmer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3005\n*I love the fact that rutabagas are flightless and how they're roots that remain in the ground.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defence", "None", true);

		e.addField("Abilities:", "- Select a target and check their closest alive neighbours—the next highest and next lowest numbers on the playerlist. You will learn if one, both or neither appear to be on the same faction as your target. ");

		e.addField("Attributes:", "- You will always detect Rotobaga (3004) through effects that would deceive you.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["geologist", "easilydistractedbyobsidianknives", "3006"], "Neutral", "Geologist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3006\n*My hatred for geologists is purely theatrical...*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Talk about rocks and minerals to a player (1 night cooldown)");

		e.addField("Attributes:", "-The person you talk to is fascinated, and so they will also want to share the information. They will take a hit for you for that night only.\n- You may not fascinate more than one player at a time.\n- Geologist Hater (3007) will always spawn alongside you.\n- You can see all the minerals that attacker weapons are made of, so you can avoid them very easy.\n- The only way for you to die is by the ropes or by Geologist Hater.");
		
		e.addField("Goal:", "Don’t get killed by Geologist Hater (3007).");
	});

	register_role(["geologist_hater", "geologisthater", "gh", "3007"], "Neutral", "Geologist Hater", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3007\n*...but if I had to kill one for some reason, it would be very easy*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Overoverkill", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Brandish your obsidian knife.");

		e.addField("Attributes:", "- Geologist (3006) will always spawn alongside you.\n- Brandishing your obsidian knife will control the Geologist or one of their fascinated players into you, and then you will attack them with a wooden baseball bat that geologists can’t see.\n- You may not brandish your obsidian knife until N3, because it is not polished enough.\n- You are invincible until N3, because you are not afraid of getting the knife dirty until then.\n- You really hate geologists.");
		
		e.addField("Goal:", "Kill the Geologist (3006).");
	});

	register_role(["trinket_collector", "trinketcollector", "trinket", "collector", "tc", "3008"], "Neutral", "Trinket Collector", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3008\n*And over here is my collection of misprinted Fanta bottle caps!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Collect stuff from someone each night, gaining up to two random attributes of theirs.\n- Visit someone at night. This does nothing but trigger your attributes that are supposed to be linked to abilities.");

		e.addField("Attributes:", "- You have all functionally useless attributes of all roles with them, such as 2274: AI Artist's \"- Boobs\".");
		
		e.addField("Goal:", "Survive until the end of the game and/or collect at least six attributes.");
	});

	register_role(["scp-3008", "scp3008", "ikea_again", "ikeaagain", "3009"], "SCP", "SCP-3008", {subCat: "Euclid"}, (e) =>
	{
		e.setDescription("Post 3009\n*“SCP-3008 is a large retail unit previously owned by and branded as IKEA, a popular furniture retail chain. A person entering SCP-3008 through the main entrance and then passing out of sight of the doors will find themselves translocated to SCP-3008-1. This displacement will typically go unnoticed as no change will occur from the perspective of the victim; they will generally not become aware until they try to return to the entrance.”*");

		e.addField("Alignment", "SCP Euclid", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Trap someone in an IKEA.");

		e.addField("Attributes:", "- You function identically to IKEA (2625), except if players fail to escape, they will be dealt a powerful attack.\n- Instead of 9 possible exit choices, there are now 32. o_o");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["infi-nut", "infinut", "3010"], "Plant", "Infi-nut", {subCat: "Protection"}, (e) =>
	{
		e.setDescription("Post 3010\n*For generations, the Infi-nut has stood tall. It didn't just pass the test of time. It created it.*");

		e.addField("Alignment", "Plant Protection", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Degrading Powerful", true);

		e.addField("Abilities:", "- (Cost: Free) Produce a sun each night.\n- (Cost: 1 sun) Stand guard at a player's house tonight. If they're attacked, you'll take the hit for them.\n- (Cost: 1 sun) Fortify a player's house. Besides direct attacks, all their visits tonight will be redirected to you.\n- (Cost: 3 sun) Phase through four players at night. All who visit any four of them are redirected to you tonight. If you die on the night you use this ability, your revival will be sped up by a night. ");

		e.addField("Attributes:", "- After dying, you'll be revived at the start of the day, two nights later. You'll be given lynch immunity for the duration of the day you're revived. Your defense will be restored to Degrading Basic upon revival.\n- Astral visitors will always bypass your protection.\n- Degrading Defense: Every time your defense successfuly blocks an attack, it's lowered by a tier.");

		e.addField("Squidly's Notes:", "- Due to the concurrent revivals, the role may seem powerful at first, but its protective abilities are lackluster and use up sun even if no threats were stopped.\n- A big problem with the revival is that the Infi-nut's identity will inevitably be revealed, so the optimal strategy for the Infi-nut is to waste Town lynches and opposing attacks, trying to get as much attention on itself as possible while its teammates sit happily in the background.\n- A glaring weakness is that the Infi-nut is that if all other Plants die while it's still regenerating, the game will be lost before it revives. Avoid this situation at all costs.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["high_priest", "highpriest", "priest", "whylunariwhy", "3011"], "Town", "High Priest", {subCat: "Hallow"}, (e) =>
	{
		e.setDescription("Post 3011");

		e.addField("Alignment", "Town Hallow", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- For every evil you kill or vote to lynch, gain one Cleansing Point.\n- Every three Cleansing Points, you may learn the **exact** role of a player, ignoring all effects that would modify it. You may select another player to give the results to.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["toadstool", "3012"], "Plant", "Toadstool", {subCat: "Production"}, (e) =>
	{
		e.setDescription("Post 3012\n*The Toadstool's digestive system allows for zombies—or, in this case, Town members—to be turned into sunlight.*");

		e.addField("Alignment", "Plant Production", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- (Cost: Free) Produce a sun each night. \n- (Cost: 1 sun, two-night cooldown) Choose an attack value from Basic, Powerful and Unstoppable, and choose a target to attack with that value. If your kill is successful, and the attack value you used is exactly one tier higher than their defense, you'll generate 3 sun and reduce the cooldown of this ability by a night.");

		e.addField("Attributes:", "- When you're attacked but survive, generate 1 sun. If you're killed at night, generate 3 sun.\n- You may self-target.");

		e.addField("Squidly's Notes:", "- A simple role. Your best bet is sticking to Basic attacks as most roles don't have any defense.\n- Self-targeting is enabled to give you the option to **sacrifice** yourself to generate 5 total sun. Use wisely.");
		
		e.addField("Goal:", factions.Plant.goal);
	});

	register_role(["shadowed_entity", "shadowedentity", "shadow_entity", "shadowentity", "shadowed", "entity", "se", "whylunariwhy", "3013"], "Town", "Shadowed Entity", {subCat: "Stalker"}, (e) =>
	{
		e.setDescription("Post 3013");

		e.addField("Alignment", "Town Stalker", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send the shadows to consume a player.");

		e.addField("Attributes:", "- While a player is consumed by the shadows, they are effectively not a player.\n- If a player is consumed by the shadows three days in a row, you attack them.");
		
		e.addField("Goal:", factions.Town.goal);
	});


	register_role(["werehuman", "wh", "whylunariwhy", "3014"], "Town", "Werehuman", {subCat: "Were"}, (e) =>
	{
		e.setDescription("Post 3014");

		e.addField("Alignment", "Town Were", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Shoot a player with a lead bullet during a non full moon. They die of lead poisoning the next day (basic attack).\n- Maul a player at night during a full moon. Their will is wiped. You also kill all non-Town visitors and face no repercussions for killing Town. (powerful attack)");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["canadian", "whylunariwhy", "3015"], "Town", "Canadian", {subCat: "Everfrost"}, (e) =>
	{
		e.setDescription("Post 3015");

		e.addField("Alignment", "Town Everfrost", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Offer someone maple syrup with a side of pancakes, roleblocking them.\n- Do the same thing as listed above, but freeze the syrup and pancakes, covering them in frost. ");

		e.addField("Attributes:", "- A player being covered in frost works exactly like Everfrost.\n- Roleblock immune");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["blood_cultist", "bloodcultist", "bc", "whylunariwhy", "3016"], "Town", "Blood Cultist", {subCat: "Umbrae"}, (e) =>
	{
		e.setDescription("Post 3016");

		e.addField("Alignment", "Town Umbrae", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sacrifice a player. You'll kill them if they're Town, but if they're not, they'll live and you can never sacrifice again.\n- After sacrificing a player at night, empower another during the day. The outcome of their ability cannot fail for any reason, or be modified for any reason. (Yes, killings bypass defense.)");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["baba_is_you", "babaisyou", "baba", "biy", "3017"], "Neutral", "Baba", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3017\n*is You*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You can attach or detach away a property to any player, including yourself.\n- You can move one player's property to someone else, removing it from them.");

		e.addField("Attributes:", "- Attaching a property to a player will give them an effect, depending on which of the properties you attach to them. (listed below)\n- You only have one of each property to attach to players.\n- All players start with no property by default.\n- Who has each property is private.\n- If a player gains or loses a property, they get notified.\n- Each player can only have one property. If you give them another one, the one they had before will go back in your inventory.\n- You must choose if WIN is to see town win, see an Evil Faction win, or have NK goal. If you don't, one is randomly chosen.");
		
		e.addField("Properties:", "- **DEFEAT**: This player gains the ability to do a Basic attack.\n- **FLOAT**: This player's visits are Astral.\n- **GREEN**: If this player is evil, they appear as a random good role to investigators.\n- **HOT**: Deals a Powerful attack to any MELT players they visit.\n- **MELT**: Gets dealt a Powerful attack if a HOT player visits them.\n- **PUSH**: This player can be pushed out of the way by anybody besides them, giving them Powerful defense for the night.\n- **RED**: If a player is Good, they appear as a random evil role to investigators.\n- **SHIFT**: All visits to this player or redirected to the next player in the player list. (Last players loops to 1)\n- **STOP**: This player is roleblocked and gains Invincible defense.\n- **WEAK**: This player receives Vulnerable defense.");

		e.addField("Goal:", "WIN");
	});

	register_role(["zombuul", "3018"], "Neutral", "Zombuul", {subCat: "Demonic"}, (e) =>
	{
		e.setDescription("Post 3018");

		e.addField("Alignment", "Neutral Demonic", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player: They die.");

		e.addField("Attributes:", "- The first time you die, you live but register as dead.\n- As long as you are alive (whether dead or registering at dead) all players in the graveyard appear cleaned.\n- All graveyard members are valid lynch and kill targets.\n- All Neutral Killing roles and REF's are aware of who you are at the start of the game, and have an alternate wincon of protecting you whilst eliminating all Good faction members.\n- If you survive until the end of the game, all evil players will win, and the good faction will automatically lose.\n- You cannot co-exist with other Neutral Demonic roles.");
		
		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["film_maker", "filmmaker", "fm", "3019"], "Town", "Filmmaker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3019\n*Ready, Set, Action*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every other night, you may choose to film something. You will pick 3 parts of this film (Start, a role visiting another role) (Middle, another role intervening) and end (What eventually happens). Everything you pick will happen that night, if possible. \n> Example: You film a sheriff checking somebody, a doctor visiting them, and them getting attacked, healed, and seen as innocent. The sheriff, doctor, and an attacking role is redirected to the person the sheriff was originally checking. ");

		e.addField("Attributes:", "- If one or more of the roles you filmed is not in the game, you will learn that one of the roles is not in game, but not what.\n- If you film a role that cannot visit; that role will be treated as visiting for this film.\n- You cannot film something that would end in somebody’s death. If you do, you will be informed that you are role-blocked. ");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["po", "3020"], "Neutral", "Po", {subCat: "Demonic"}, (e) =>
	{
		e.setDescription("Post 3020");

		e.addField("Alignment", "Neutral Demonic", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Choose a player: They die.");

		e.addField("Attributes:", "- If you did not attempt to kill a player last night, you will be able to attack up to two players tonight.\n- All Neutral Killing roles and REF's are aware of who you are at the start of the game, and have an alternate wincon of protecting you whilst eliminating all Good faction members.\n- If you survive until the end of the game, all evil players will win, and the good faction will automatically lose.\n- You cannot co-exist with other Neutral Demonic roles.");
		
		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["kung_fu_panda", "kungfupanda", "kung", "fu", "panda", "kfp", "3021"], "Town", "Kung Fu Panda", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3021");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "\"Springy\"", true);

		e.addField("Abilities:", "- Kung Fu, basically: Attack someone tonight.");

		e.addField("Attributes:", "- Springy Defense: Your defense is two tiers above that of your attacker. If your attacker has top-tier defense, you literally cannot be killed by them no matter what their attack does.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["salamander", "3022"], "Neutral", "Salamander", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3022\n*Oh, I'm all yours, I'm needing more~*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Ain't it nicer when it hurts? Turn up the heat and churn, increasing your attack and defense values by a stage, then attacking someone. If they would die, instead attack them, but heal them and redirect them to you.\n- You better better better learn that \"I'm not sure\" really isn't gonna work. Cause someone to be forced to use at least one ability that targets you every night for the rest of the game.\n- Girl, let me hear you yearn. Convert someone to win if and only if you win. You both must use an ability that targets the other the next night if able.\n- Together, overheat until our nerves all burn, dealing an Overoveroverkill attack a player you have converted as well as yourself. You can't do this unless you've converted a player.");

		e.addField("Goal:", "‎Use all of your abilities in order.");
	});

	register_role(["mali", "malian", "3023"], "Civilization", "Mali", {subCat: "Economic", censor: "Malian Mandekalu"}, (e) =>
	{
		e.setDescription("Post 3023\n*\"To give away money is an easy matter and in any man’s power. But to decide to whom to give it and how large and when, and for what purpose and how, is neither in every man’s power nor an easy matter.\" -Aristotle*");

		e.addField("Alignment", "Unique Civilization Economic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Fund a Civilization. The next paid ability they use costs 2 Gold less.\n- Go on a religious pilgrimage. (2 uses) (Costs 7 Gold)");

		e.addField("Attributes:", "‎- When you go on a pilgrimage, all non-Civilizations will be roleblocked.\n- Passively generate 5 Gold each night. You lose 1 Gold for each visitor you receive.");

		e.addField("Messages:", "‎“They were killed by a Malian Mandekalu.” (Factional Kill)");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["coven_town_traitor", "coventowntraitor", "coven", "town", "traitor", "ctt", "3024", "1549u"], "Unseen", "Coven Town Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3024\nConverted from: Coven Traitor");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the abilities of the roles you get.‎");

		e.addField("Attributes:", "‎- You will be given two random Coven roles. Those are your roles, but you win with the Unseen.\n- You will not gain permanent defense, even if your role grants that.\n- You will not get access to the factional chat. You may also never receive the Necronomicon.\n- You may only get one Coven (Head) role.\n- If you get a role that can only target/affect members of the Coven, they will instead relate to the Unseen.\n- You may multitask.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["mr_meeseeks", "mrmeeseeks", "meeseeks", "mee6", "3025"], "Neutral", "Mr Meeseeks", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3025\n*I’m Mr Meeseeks, look at me!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Powerful (Variable)", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Select a player and perform their action for them.‎");

		e.addField("Attributes:", "‎- Lynch immunity\n- Roleblock immunity\n- Conversion immunity\n- Redirection immunity\n- Control immunity\n- Players will know they were visited by a Meeseeks\n- You will visit your target’s target instead of them\n- You will also protect your target\n- If you survive to night 6, you become enraged and will attack your next target\n- If the action you attempt to do would be stopped for whatever reason, such as a healing role protecting your target’s kill, it will not count to your goal\n- If you attempt to do an action that the host would deem impossible (such as copying another player’s role), then you will do a powerful attack to your selected target\n- Once you complete your goal, you will win and cease to exist. This may not be stopped");

		e.addField("Goal:", "‎Successfully complete 3 tasks for 3 separate people, or kill your target (kill 3 people if enraged)");
	});

	register_role(["spike_top", "spiketop", "st", "3026"], "Koopa", "Spike Top", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 3026\n*They don't seem very threatening 'til ya realize they're the size of a human.*");

		e.addField("Alignment", "Koopa Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Dig up a spot at a player's house. All who try to attack them tonight will also attack you. If you target a fellow Koopa member, you'll instead redirect the attack to yourself.\n- Increase your intimidation. Next night, if you dig up a spot at a player's house, you will instead redirect *all* their visitors to you.\n- Increase your aggression. Next night, you'll attack *anyone* that visits you.\n- Increase your initmidating aggression. Uses both your second and third abilities at the same time. (1 use + an extra use on Night 5) ");

		e.addField("Attributes:", "- Whenever you're attacked and survive, you'll counterattack the perpetrator unless they're a fellow Koopa member.\n- For each night you're not attacked, your defense is lowered by a tier, down to Vulnerable.\n- At the start of Night 5, your attack tier is raised to the equivalent of your current defense tier. ");

		e.addField("Squidly's Notes:", "- A pretty simple role that serves as a medium between killing and protective power. Remember, you always have the option to dig up at the house one of your killing Koopa members are targeting to maintain your defense.");

		e.addField("Goal:", factions.Koopa.goal);
	});
	
	register_role(["hitwoman", "hitman", "3027"], "Neutral", "Hitwoman", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3027\n*Because, um, girls are nicer, yeah.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- If you are in the game, all players (including yourself) will receive another goal: eliminate their target at all costs. (Players win if they complete any goal they have because that's how goals work.)\n- Players will know their target's role, but not their name.\n- No player can be a target to multiple people, and informed minority members cannot have their target be someone they know is on their team. Nobody's target can be themselves.\n- Lynching a target will only satisfy the win condition if the player voted the target.\n- If someone's target dies to someone that isn't themselves, their target's target is now their target.\n- Your attack level is always one level higher than your target's defense level.");

		e.addField("Goal:", "Eliminate your target.");
	});
	
	register_role(["hitnonbinaryperson", "hitnbp", "hitnb", "hitman", "3028"], "Neutral", "Hitnonbinaryperson", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3028");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Ability:", "- Attack a player at night.");

		e.addField("Attributes:", "- If you are in the game, all players (including yourself) will receive another goal: eliminate your target at all costs. (Players win if they complete any goal they have because that's how goals work, however, because I hate everyone, you lose if your hitman kills you. \"Your hitman\" refers to anyone who has you (yourself) as their target.)\n- Players will know their target's role, but not their name.\n- No player can be a target to multiple people, and informed minority members cannot have their target be someone they know is on their team. Nobody's target can be themselves.\n- Lynching a target will only satisfy the win condition if the player voted the target.\n- If someone's target dies to someone that isn't themselves, their target's target is now their target.\n- Your attack level is always one level higher than your target's defense level.");

		e.addField("Goal:", "Eliminate your target.");
	});
	
	register_role(["common_sense_townie", "commonsensetownie", "common_sense", "commonsense", "townie", "cst", "centralstandardtimezone", "3029"], "Town", "Common Sense Townie", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3029");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- When you attack a player, you will attempt to kill them.\n- If their defense is Basic or lower, you will kill them.\n- When you kill a player, they die. Their role and last will is revealed.\n- When a player dies, they're dead. This means they cannot vote or use abilities.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["ftm_hittransman", "ftmhittransman", "hittransman", "ftm", "ftmhitman", "ftmhtm", "hitman", "3030"], "Neutral", "FTM Hittransman", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3030\n*he/him 🙏*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- If you are in the game, all players (including yourself) will receive another goal: eliminate their target at all costs.\n- Players will know their target's role (and that role's post number), but not their name.\n- No player can be a target to multiple people. Nobody's target can be themselves.\n- Lynching a target will only satisfy the win condition if the player voted the target.\n- If someone's target dies to someone that isn't themselves, their target's target is now their target.\n- Your attack level is always one level higher than your target's defense level.\n- If a player's target changes roles, you are notified. Your target will remain the same, and you'll learn the new role.\n- Evil faction members cannot have someone who is on their team as their target. This is removed if this would cause it to be physically impossible for some players to have a target.\n- Players win if they completely either of their goals.");

		e.addField("Attributes (cont.):", "At the start of Night 4, if you're alive, you will come out as trans, and for the rest of the game, players may instead only win if the kill their target and complete their original goal. Players who already won still win.");

		e.addField("Goal:", "Eliminate your target.");
	});
	
	register_role(["double-sided_hitman", "double-sidedhitman", "doublesidedhitman", "double_sided_hitman", "double-sided", "double_sided", "doublesided", "dsh", "hitman", "3031"], "Neutral", "Double-Sided Hitman", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3031");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- If you are in the game, all players (including yourself) will receive another goal: eliminate your target AND your hitman at all costs. (Your hitman is defined as the player who has you as their target)\n- Players will know their target's role, but not their name. \n- Players will not know their hitman's role nor name.\n- No player can be a target to multiple people, and informed minority members cannot have their target be someone they know is on their team. Nobody's target can be themselves.\n- Lynching a target will only satisfy the win condition if the player voted the target.");

		e.addField("Attributes (cont.):", "- Eliminating one's hitman in any way will satisfy the win condition.\n- If someone's target dies to someone that isn't themselves, their target's target is now their target.\n- Your attack level is always one level higher than your target's defense level.\n- Players win if they completely either of their goals.");

		e.addField("Goal:", "Eliminate your target AND your hitman.");
	});
	
	register_role(["switzerland", "swiss", "ch", "🇨🇭", "3032"], "Civilization", "Switzerland", {subCat: "Economic"}, (e) =>
	{
		e.setDescription("Post 3032\n*“When all the world is socialist, Switzerland will have to remain capitalist, so that it can tell us the price of everything.” -Nikita Khrushchev*");

		e.addField("Alignment", "Unique Civilization Economic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Create a bank at a player's house. Whenever they are visited including on this night and even if you visit them, generate 0.5 gold. (Costs 1 gold.)\n- Increase the profit from your banks. Your banks will generate 2x gold and your passive gold will increase by 1. (The cost starts at 3 gold but will increase by 3 every time you use this ability.)\n- Give a player insurance tonight. They will get a one-use autovest that has a different defense value for how much gold you spent. (1 gold = Basic autovest, 2 gold = Powerful autovest, 3 gold = Invincible autovest, 4 gold = Overprotective autovest, etc...) ");

		e.addField("Attributes:", "- Passively generates 2 gold each night.\n- One player can have multiple banks.\n- When you die, your banks will remain and continue to generate gold.\n- You may self-target.");

		e.addField("Messages:", "- ‎“They were killed by Swiss Armed Forces.” (Factional Kill)");

		e.addField("Goal:", factions.Civilization.goal);
	});
	
	register_role(["trapmaster", "tm", "3033"], "Town", "Trapmaster", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 3033");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Set up a Trap at someone's house.");

		e.addField("Attributes:", "- If a player with a trap is visited, the trap will trigger, telling you the role of every visitor.\n- If a player with a trap is attacked, the trap will trigger, attacking the attacker and granting your target Powerful defense.\n- You may have many traps out at a time.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["trap-master", "trap_master", "trapmaster", "tm", "3034"], "Town", "Trap-Master", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3034\n*Astolfo is my favorite waifu*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send your target a picture of Astfolo. If they do not respond with anything signifying that Astolfo is cute, they are attacked.\n- Send your target a picture of Felix. If they do not respond with words of disgust, they are Modkilled.");

		e.addField("Attributes:", "- The first time you would be killed, you are not.\n*\"Now that's a real trapmaster\"* - Bionic");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["traptrix_sera", "traptrixsera", "sera", "ts", "3035"], "Traptrix", "Traptrix Sera", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3035\n*What the fuck is a Sera*");

		e.addField("Alignment", "Traptrix Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose to only receive your own notifications.");

		e.addField("Attributes:", "- You know whenever a Traptrix is visited, and who visited them.\n- Whenever a Traptrix is visited, you gain a random trap hole.\n- If this role is in game, all Traptrix roles have Basic defense. \n- You receive every notification other Traptrix roles do. \n- You may multitask.");

		e.addField("Goal:", factions.Traptrix.goal);
	});
	
	register_role(["the_clockmaker", "theclockmaker", "clockmaker", "3036"], "Clocktower", "The Clockmaker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3036");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You start knowing how many player slots an evil is from their nearest faction member.");

		e.addField("Attributes:", "- When both players die, you learn new information.\n- You know which faction you are targeting.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["traptrix_vesiculo", "traptrixvesiculo", "vesiculo", "vesi", "tv", "3037"], "Traptrix", "Traptrix Vesiculo", {subCat: "Plant"}, (e) =>
	{
		e.setDescription("Post 3037\n*Hmmm? Is that a blister growing?*");

		e.addField("Alignment", "Traptrix Plant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may visit a player, giving them the blistered status. \n- You may choose not to blister anybody this night.");

		e.addField("Attributes:", "- Blistered players will be roleblocked, and notified at the start of the day that \"An intense pain overwhelms you!\".\n- They will not be able to vote that day, or take actions the following night.\n- After one night of the inability to take actions, blistered players lose the blister status.\n- Every player who visits you receives the blistered status.\n- You may multitask, however you may not use a trap hole and any of your abilities in the same night.");

		e.addField("Goal:", factions.Traptrix.goal);
	});
	
	register_role(["the_dreamer", "thedreamer", "dreamer", "3038"], "Clocktower", "The Dreamer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3038");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player at night, perform an Investigator (35) check on them.");

		e.addField("Attributes:", "- [All of Investigator (35)’s attributes.]");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["the_snake_charmer", "thesnakecharmer", "snake_charmer", "snakecharmer", "tsc", "sc", "3039"], "Clocktower", "The Snake Charmer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3039");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose a player, if you choose an evil player: they die. You become their alignment and their role.");

		e.addField("Attributes:", "- Evil players count as a role with opposition to the Clocktower.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["the_mathematician", "themathematician", "mathematician", "3040"], "Clocktower", "The Mathematician", {subCat: "Clocktower Investigative"}, (e) =>
	{
		e.setDescription("Post 3040");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, you learn the amount of players who received false information, or who’s ability worked abnormally.");

		e.addField("Attributes:", "- Abnormally means an ability has failed for unknown reasons, received false information, or otherwise failed to successfully go through.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["the_flower_girl", "the_flowergirl", "theflowergirl", "flower_girl", "flowergirl", "tfg", "fg", "3041"], "Clocktower", "The Flowergirl", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3041");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, learn if more than three evil players voted on the last lynch target.");

		e.addField("Attributes:", "- “Evil” players count as roles that oppose the Clocktower.");

		e.addField("Goal:", factions.Clocktower.goal);
	});

	register_role(["the_washer_woman", "the_washerwoman", "thewasherwoman", "washer_woman", "washerwoman", "tww", "3042"], "Clocktower", "The Washerwoman", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3042");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the start of the game, you start knowing two pairs of players and two Townsfolk. In both of these pairs, at least one is a Townsfolk you learned.");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["vivian", "3043"], "Koopa", "Vivian", {subCat: "All-Rounder"}, (e) =>
	{
		e.setDescription("Post 3043\n*That's Vivian, She's the youngest of the three Shadow Sirens.*");

		e.addField("Alignment", "Koopa All-Rounder", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Punch an enemy, if they survive, they will burn the next round, which will deal an Powerful attack and roleblock.\n- Veil someone, All visits against them will fail.\n- Confuse someone, they will randomly be redirected to a neighbor.");

		e.addField("Attributes:", "- If you are the Factional attacker, Veiling someone will remove them from the game until the end of the next night.");

		e.addField("Goal:", factions.Koopa.goal);
	});
	
	register_role(["trapper", "3044"], "Other", "Trapper", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 3044\nThis is a post number next to the word \"Trapper\".");
	});

	register_role(["the_investigator", "theinvestigator", "investigator", "3045"], "Clocktower", "The Investigator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3045");

		e.addField("Alignment", "Clocktower Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You start knowing three players and a particular evil role. At least one of those players is that role.");

		e.addField("Attributes:", "- When all of the players die, you learn new information\n- “Evil” roles are considered roles that oppose the Clocktower");

		e.addField("Goal:", factions.Clocktower.goal);
	});
	
	register_role(["rasen", "3046"], "Neutral", "Rasen", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3046");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player. If they're part of a faction, you kill them.");

		e.addField("Goal:", "Kill everyone in a faction.");
	});
	
	register_role(["faction", "rasensmentalanguish", "3047"], "Neutral", "Faction", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3047\n*I am your mental anguish.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player. If they're Rasen, you kill them.");

		e.addField("Goal:", "Kill everyone that's Rasen.");
	});
	
	register_role(["factional", "3048"], "Neutral", "Factional", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3048");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Select a player. If they're not Faction (3047), make them that.");

		e.addField("Goal:", "Turn everybody into a faction.");
	});
	
	register_role(["lunari", "3049"], "Neutral", "Lunari", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3049\n*Rasen is currently crying a river of tears.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Create a new player. They are controlled by the host. Their role is always Faction (3047).");

		e.addField("Goal:", "See Rasen die.");
	});
	
	register_role(["jester", "jest", "3050"], "Koopa", "Jester", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3050\n*I've failed my King...*");

		e.addField("Alignment", "Koopa Support", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use a full house on someone. They will be forced to attempt to use the same ability on the same target for the next 2 nights.\n- Trick a player, making them recieve a fake feedback message that they could recieve from an outside source.");

		e.addField("Attributes:", "- Your target will recieve that message as if it were part of their night feedback.\n- If you are lynched before night 3, you may choose a player to haunt, attacking them.");

		e.addField("Goal:", factions.Koopa.goal);
	});
};
