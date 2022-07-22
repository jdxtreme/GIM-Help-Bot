module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["murderer-chan", "murdererchan", "murderer", "chan", "951"], "Neutral", "Murderer-chan", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 951");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Murder a player each night.\n- Murder a player each night.\n- Murder a player each night.");

		e.addField("Attributes:", "- Detection Immune\n- You may multitask.\n- Protection from Rasen (You can't be negatively affected in any way by Rasen. This includes lynches and mod actions.)\n- Rasen can't roll this role.");
		
		e.addField("Goal:", "Kill all who would oppose you except up to one person, who instead wins with you, but it can't be Rasen.");
	});

	register_role(["macho_man", "machoman", "macho", "952"], "Town", "Macho Man", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 952");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Test someone's might each night.");

		e.addField("Attributes:", "- Submit a player and an Attack value. You will be notified whether your target would survive an Attack of that value if said Attack would apply to them after all other actions resolve.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["soldier", "953"], "Town", "Soldier", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 953");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Go on alert outside someone else's house each night. (3 uses)");

		e.addField("Attributes:", "- When on alert, you will deal a Powerful attack to all players that visit your target that night.\n- Because rasen is unbased, let it be known that you will not kill yourself if you use your ability.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["caretaker", "ct", "care", "954"], "Town", "Caretaker", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 954");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to care for at night.");

		e.addField("Attributes:", "- You will heal your target for both the night you target them and the night after.\n- You are immune to being roleblocked on the second night you protect a target.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["destined", "955"], "Town", "Destined", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 955");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to combine the destinies of two players.");

		e.addField("Attributes:", "- Any player that targets one of your targets will also target your other target.\n- You will not duplicate the abilities of any player that is roleblock or redirect immune.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["abomination_of_salem", "abominationofsalem", "abomination", "abom", "aos", "956"], "Neutral", "Abomination of Salem", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 956");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack someone each night.");

		e.addField("Attributes:", "- You have all abilities and attributes, except factional ones, of all other roles in the game. You may elect at any time to remove any number of your abilities or attributes, but you will not be able to get them back.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["towns_fury", "townsfury", "fury", "957"], "Town", "Town's Fury", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 957");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- At the beginning of the game, you're given three random non-Town Power Town roles. You choose a role to be from among those, except your ability rampages. (*It also applies to all your target's visitors except you. If it already rampaged, it like double rampages? You get it.*)");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["puppetmaster", "puppet", "pm", "958"], "Neutral", "Puppet Master", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 958");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose two targets, Player A and Player B.");

		e.addField("Attributes:", "- Player A will visit Player B, dealing a Basic Attack to them.\n- If there are any Protectives on Player B, they will perform their action on Player A rather than you.\n- Player A will not know they were controlled into another player that night; they will perform their regular night action as well as attack another player.\n- You will be seen to have visited Player A rather than Player B.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["cult_leader", "cultleader", "cleader", "959"], "Cult", "Cult Leader", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 959\n*All hail Mithras. All hail Corax. The true gods of this plane. You will spread their stories to every member of this Town…whether they like it or not.*");

		e.addField("Alignment", "Cult Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, sacrifice a target Cult member to gain 2 charges of Eradicate. Other members gain 1 charge of their 1st ability. Your target will die at the end of that night.\n- At night, attempt to convert the target player into joining the Cult.\n- At night, unleash ancient power within Mithras, attacking 2 target players at once. You have 3 uses of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- If conversion fails 3 times in a row, you will convert a random convertible player.\n- Maximum of 4 living Cult members at once.\n- If you die, the most recently converted Cult member will become the new Cult Leader.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["acolyte", "960"], "Cult", "Acolyte", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 960\n*Brainwashed to blindly follow your leader…you must do everything in your power to bend your neighbors to their will. It is your only purpose.*");

		e.addField("Alignment", "Cult Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, guess a player's class. If you're correct, they will be poisoned at the end of that night and will die the following night. You have 1 use of this ability.\n- At night, choose a target and drop their defense to None. You have 3 uses of this ability.\n- At night, if one of the Cult Leader's Eradicate targets survives the night, the Cult Leader will gain a use of Rupture. You have 1 use of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Killing members.\n- Once you become the Cult Leader, you gain an additional use of Rupture.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["invoker", "961"], "Cult", "Invoker", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 961\n*They must stay alive for the town to heed your stories…they must.*");

		e.addField("Alignment", "Cult Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, use the Chains of Corax to occupy a target player tonight. You have 3 uses of this ability.\n- At night, use the Strings of Mithras to redirect a target player to another tonight. You have 2 uses of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Support members that are roleblock and/or redirect immune.\n- This role is roleblock and redirect immune.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["enforcer", "962"], "Cult", "Enforcer", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 962\n*You have traded your life to keep the vessel of Mithras and Corax alive. Ensure that your stories are shared, lest you not die in vain.*");

		e.addField("Alignment", "Cult Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, if the Cult Leader is attacked, the attack will be redirected to you. You have 3 uses of this ability.\n- At night, pray to Mithras, granting every Cult member Basic defense. You have 1 use of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Protective members.\n- If you die from any attack, all Cult members get an extra use of their ability.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["apostle", "963"], "Cult", "Apostle", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 963\n*Bitter that your position in this town has been stripped away, you have no choice but to turn to the evil deities that lurk just beyond. Truth is, you don’t quite believe in these yourself, but…it’s the only way to regain control of your town.*");

		e.addField("Alignment", "Cult Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, disable your target player's voting, then force them to vote for a different target player. You have 2 uses of this ability.\n- At night, your target player will receive framed results from using investigative abilities tonight. You have 3 uses of this ability.\n- At night, summon shadows to report the contents of all whispers tomorrow. You have 2 uses of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Power members.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["seeker", "964"], "Cult", "Seeker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 964\n*You peer through Corax’s eye. You see all there is to see. But your power is frail, weak. Use it to protect the stories of your gods.*");

		e.addField("Alignment", "Cult Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, reveal to the Cult who any town member with a day ability will be targeting tonight. This is revealed at the start of the night. You have 2 uses of this ability.\n- At night, determine a player’s sub-alignment. You have 3 uses of this ability.\n- At night, discover who a player targets and who targets them. You have 2 uses of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Investigative members.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["ritualist", "965"], "Cult", "Ritualist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 965\n*In another time, you would be upset at how your powers are being abused for “evil”. Now, however, you know you are not evil. You are merely…enlightened.*");

		e.addField("Alignment", "Cult Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, curse a player. If they die tonight, their role and last will will not be revealed to anyone except you.\n- At night, give your target player a false message that they were healed that night. You have 3 uses of this ability.\n- At night, make a Cult member appear as Town to any investigative roles. You have 2 uses of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Support members who are not roleblock or redirect immune.\n- If you are sacrificed, the Cult Leader will gain 3 charges of their double attack ability rather than 2.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["going_to_sleep", "goingtosleep", "sleep", "gts", "igts", "966"], "Neutral", "I'm Going To Sleep", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 966");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- 3 times per game, go to sleep at night. Gain powerful defense the first two times, but basic the last.");

		e.addField("Attributes:", "- Anyone who visits you that would gain feedback has a 75% chance to receive incorrect feedback. Anyone else has a 50% chance for their ability to fail. Yes, this also applies to attackers who would normally bypass your defense.");
		
		e.addField("Goal:", "Survive to the end of the game.");
	});

	register_role(["delinquent", "967"], "Neutral", "Delinquent", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 967");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal something from someone each night.\n- Choose to use an ability you stole.");

		e.addField("Attributes:", "- If your target has any charges of a limited use ability, you will steal the charge. If they have multiple abilities with a charge left, you will take the first ability listed on the role card with a charge.\n- You may choose to use any charges that you have taken, but you may not steal and use a charge at night.");
		
		e.addField("Goal:", "Live to see Town lose the game.");
	});

	register_role(["harbinger", "968"], "Horsemen", "Harbinger", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 968");

		e.addField("Alignment", "Unique Horseman Head", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check a player each night. If they're a Horseman, you will recruit them and allow them to win with you and any other Horsemen.\n- Empower a recruited Horseman for the night.\n- Attack a player. You can only use this if all other Horsemen are dead.");

		e.addField("Attributes:", "- Once you have recruited at least one Horseman, you will form a factional chat with them. This chat will be closed if you die, however.\n- All other Horsemen abilities will have no effect on you.\n- You cannot be decieved by frames or disguises.\n- You cannot Empower until you have recruited every living Horseman. You will be notified when it's available.\n- Each Horseman role should describe the specific benefit it gains when Empowered.\n- Roleblock, Conversion, and Detection Immune");
		
		e.addField("Goal:", "Recruit all living Horsemen and lead them to victory.");
	});

	register_role(["death", "969"], "Horsemen", "Death", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 969");

		e.addField("Alignment", "Unique Horseman Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Stalk a player's house at night, which may be your own. You will attack a random vicitor.");

		e.addField("Attributes:", "- As long as a different visitor is available, you will avoid attacking the Harbinger.\n- If nobody visits your target, you will kill your target instead.\n- When Empowered, you will attack every visitor of the house you stalk.\n- Conversion Immune and Astral");
		
		e.addField("Goal:", "Kill every other player, including the other Horsemen / Protect the Harbinger and eliminate all who would oppose the Horsemen.");
	});

	register_role(["pestilence", "pest", "970"], "Horsemen", "Pestilence", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 970");

		e.addField("Alignment", "Unique Horseman Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Spread Disease to a target of your choice in the night, silencing them in the following day.\n- Kill all players who currently have the Disease.");

		e.addField("Attributes:", "- The Disease effect will last indefinitely after it is inflicted, unless purged.\n- Your victims will not know they have been diseased.\n- While Empowered, you are allowed to use both of your abilities each night. Otherwise, you are limited to one.\n- Conversion and Chat-Impairment Immune.");
		
		e.addField("Goal:", "Kill every other player, including the other Horsemen / Protect the Harbinger and eliminate all who would oppose the Horsemen.");
	});

	register_role(["war", "971"], "Horsemen", "War", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 971");

		e.addField("Alignment", "Unique Horseman Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Force one player to fight another in the night.");

		e.addField("Attributes:", "- Your first target will be forced to use their highest-tier attack on the other.\n- Your first target will appear suspicious if investigated by the Sheriff.\n- If your first target has no attack, you will give them a Basic Attack to use on the other player.\n- Your first target will only know they were controlled. Optionally, you may notify them that they were Manipulated instead.\n- If your first target still fails to kill the second, you will kill the first target yourself.\n- You only visit your first target, not the second, even when Empowered.\n- If Empowered, both of your targets will attack each other, and both will appear suspicious.\n- Conversion and Redirect Immune");
		
		e.addField("Goal:", "Kill every other player, including the other Horsemen / Protect the Harbinger and eliminate all who would oppose the Horsemen.");
	});

	register_role(["famine", "972"], "Horsemen", "Famine", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 972");

		e.addField("Alignment", "Unique Horseman Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Starve up to two players each day.");

		e.addField("Attributes:", "- A Starved player will be notified once the night begins. If they use any ability in the night, they will be killed.\n- You will visit either target to kill them, should they try anything while starving.\n- If you're empowered, you will kill your first target even if they don't do anything. Your first target will not be notified that this will happen.\n- Empowerment will apply to you in the day after you get Empowered, rather than the night.\n- Conversion and Roleblock Immune");
		
		e.addField("Goal:", "Kill every other player, including the other Horsemen / Protect the Harbinger and eliminate all who would oppose the Horsemen.");
	});

	register_role(["conquest", "conq", "973"], "Horsemen", "Conquest", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 973");

		e.addField("Alignment", "Unique Horseman Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Conquer a player in the night.");

		e.addField("Attributes:", "- Conquering a player will attempt to convert them into your minion. They will keep their role, but their new goal will be to live to see you win the game.\n- If you cannot convert those you Conquer, you will kill them instead.\n- You cannot convert a target if:\n```\n- They are Conversion Immune\n- They are a NK or Evil Faction member\n- They are a TPo\n- You already have one living minion\n```\n- You will have a private chat with your Minion. If you get recruited, your Minion will join the Horseman Chat too.\n- You can still Conquer people once you have a Minion; you will simply always attack your target.\n- If Empowered, you will be allowed to convert someone into a second living  Minion.\n- You and your Minions will all have Conversion Immunity.");
		
		e.addField("Goal:", "Kill every other player, including the other Horsemen / Protect the Harbinger and eliminate all who would oppose the Horsemen.");
	});

	register_role(["yuletide", "yule", "974"], "Everfrost", "Yuletide", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 974");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. They gain an Ice Mark if they don't have one and are roleblocked if they do.\n**Winter Miracle** — Choose a player with an Ice Mark. They're converted to the Everfrost. You may only use this ability once per game, but you get your charge back if your target is conversion immune.");

		e.addField("Attributes:", "- Roleblock Immunity\n- Whenever a player is roleblocked by anything, they gain an Ice Mark, and you learn their name.\n- Whenever a player with an Ice Mark visits another non-Everfrost player or is visited by another non-Everfrost player, that player gains an Ice Mark and you learn their name.\n- One other Everfrost role that uses Ice Marks will always spawn as long as this one does.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["servant", "975"], "Neutral", "Servant", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 975");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You are aligned with a random faction, the town will be informed. You cannot align with the Town.\n- If you stay alive and reach the final three, the game automatically ends in your victory.\n- The faction does not have to be in the game, you could be everfrost aligned in a hallow match.");
		
		e.addField("Goal:", "Live to carry the (FACTION) to victory.");
	});

	register_role(["sacrificial_lord", "sacrificiallord", "sl", "lord", "976"], "Neutral", "Sacrificial Lord", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 976");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Mark someone for sacrifice and act upon a failed sacrifice.");

		e.addField("Attributes:", "- The town will be told you have marked someone for sacrifice.\n- If the target marked for sacrifice is not lynched that day, you can attack your target and one additional player.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["teaspoon", "teaspoons", "tsp", "artttap", "977"], "Neutral", "A Role That Throws Teaspoons At People", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 977");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose up to 5 different people to throw Teaspoons at.");

		e.addField("Attributes:", "- In the day, players with Teaspoons may choose to toss a Teaspoon at another player immediately.\n- Any given player cannot toss more than 3 Teaspoons per day, regardless of how many they may have.\n- All Teaspoons are secret. They are not announced, and the target only knows they got a Teaspoon, not who sent it.\n- At the end of the day, the person with the most Teaspoons will die. However, if there is a tie, nobody will die.\n- Teaspoons will last indefinitely until their holder dies.\n- You are immune to Teaspoons. If you hold the most at the end of the day, the player with the second-highest Teaspoon count will die instead.");
		
		e.addField("Goal:", "Kill at least 3 people using Teaspoons. You may win even if you die first.");
	});

	register_role(["poisoner", "pois", "978"], "Biohazard", "Poisoner", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 978");

		e.addField("Alignment", "Biohazard Head", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform an enhanced Factional Poison.");

		e.addField("Attributes:", "- Your target will eventually succumb to poison, regardless of defense, unless they are invincible.\n- Poison on players with no days will take effect instantly.\n- Poison on players with basic defense take a day to take effect.\n- Players with powerful defense will take two days to take effect.\nA doctor cannot heal your poison.\n- You are immune to poison.");
		
		e.addField("Goal:", "Poison all who would not submit to your chemicals.");
	});

	register_role(["polluter", "poll", "979"], "Biohazard", "Polluter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 979");

		e.addField("Alignment", "Biohazard Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform the factional poison.\n- Attack a player each night.");

		e.addField("Attributes:", "- Performing the factional poison will make the poison not take effect until you perform your day ability, where all players will be alerted to being poisoned.\n- You may also perform an immediate kill instead during the night.\n- Players with basic or higher defense are immune to the factional poison.\n- You are immune to poison.");
		
		e.addField("Goal:", "Poison all who would not submit to your chemicals.");
	});

	register_role(["controller", "980"], "Biohazard", "Controller", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 980");

		e.addField("Alignment", "Biohazard Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Predict a player's movement at night.");

		e.addField("Attributes:", "- If you successfully predict your targets visit, both players will be dealt an astral, basic poisoning.\n- If you do not predict your targets visit, only your first target will be poisoned.\n- You are immune to poison.");
		
		e.addField("Goal:", "Poison all who would not submit to your chemicals.");
	});

	register_role(["hazmat", "981"], "Biohazard", "Hazmat", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 981");

		e.addField("Alignment", "Biohazard Support", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Quarantine a player at night.");

		e.addField("Attributes:", "- Players who are quarantined are locked inside of their house that night, this is functionally equivalent to the Jailor's jail.\n- Quarantined players will be notified they are quarantined, quarantined players may visit, but will be dealt an unstoppable poison. All visits to the quarantined player will fail.\n- You are immune to poison.");
		
		e.addField("Goal:", "Poison all who would not submit to your chemicals.");
	});

	register_role(["cleaner", "982"], "Biohazard", "Cleaner", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 982");

		e.addField("Alignment", "Biohazard Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Purge a Biohazard member at night.\n- Purge all Biohazard members of effects that night.");

		e.addField("Attributes:", "- Your purge will cleanse Hex, Frames, and stop attacks.\n- You may only purge twice.\n- You are the first to promote to a kill-capable Biohazard role.\n- You are immune to poison.");
		
		e.addField("Goal:", "Poison all who would not submit to your chemicals.");
	});

	register_role(["toxin", "983"], "Biohazard", "Toxin", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 983");

		e.addField("Alignment", "Biohazard Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Gas a player at night, preventing them from receiving feedback or giving feedback.");

		e.addField("Attributes:", "- You are immune to poison.");
		
		e.addField("Goal:", "Poison all who would not submit to your chemicals.");
	});

	register_role(["chemist", "chem", "984"], "Biohazard", "Chemist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 984");

		e.addField("Alignment", "Biohazard Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may use each Biohazard member's ability once, except for the Biohazard Head and Biohazard Killing roles.");

		e.addField("Attributes:", "- You are immune to poison.");
		
		e.addField("Goal:", "Poison all who would not submit to your chemicals.");
	});

	register_role(["defector", "def", "985"], "Any", "Defector", {subCat: "Support", spawnCat: ["Mafia", "Coven", "Rock", "Plant", "Underworld", "Hallow", "Stalker", "Were", "Vampire", "Everfrost", "Umbrae", "PaleMoon", "Sith", "Insurgency", "Loyalist", "SCP", "Thundercry", "Crew", "Pokemon", "Fox", "Cult", "Horsemen", "Biohazard"]}, (e) =>
	{
		e.setDescription("Post 985");

		e.addField("Alignment", "Mafia/Coven/Rock/Plant/Underworld/Hallow/Stalker/Were/Vampire/Everfrost/Umbrae/Pale Moon/Sith/Insurgency/Loyalist/SCP/Thundercry/Crew/Pokemon/Fox/Cult/Horseman/Biohazard Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Variable");

		e.addField("Attributes:", "- Variable\n- At the start of the game, you are given the abilities and attributes of a random \"self-confirmable\" role (deemed by the host). You may not copy Town Power role abilities/attributes.");
		
		e.addField("Goal:", "Kill all who oppose whatever the fuck faction you rolled into.");
	});

	register_role(["haiku-er", "haikuer", "haiku", "986"], "Neutral", "Haiku-er", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 986");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose someone to speak in Haikus for the next day. If they do not follow this, they get killed with an Unstoppable Attack.");

		e.addField("Attributes:", "- The players must at least say one haiku to not get attacked.");
		
		e.addField("Goal:", "Kill 2 people with the power of poetry!");
	});

	register_role(["privateer", "987"], "Neutral", "Privateer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 987");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to prevent the usage of day abilities during the night. (2 uses)\n- Choose to withhold public information from the Town during the night. (2 uses)\n- Choose to disable whispers the following day during the night. (2 uses)");

		e.addField("Attributes:", "- Your ability is applied to the day after you use your night ability.\n- Public information includes any system messages that would be produced due to any Town roles (e.g. Mayor reveal, pre-nerf Caroler carol, etc.). This does not include death announcements.\n- Your ability will not be publicly announced when you use it. If someone tried to whisper or use a day ability when you have disabled them, they will be privately notified that it was unsuccessful.\n- You may only use one of your abilities per night.");
		
		e.addField("Goal:", "Live to see Town lose the game.");
	});

	register_role(["mastermind", "988"], "Unseen", "Mastermind", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 988");

		e.addField("Alignment", "Unseen Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Suicide (Any): At the end of the night, you will deal an Overkill attack to yourself. This ability cannot fail, under any circumstances.\n- Dirty Work (Day): Become the Assassin at the beginning of the night, if no other Unseen members are alive.\n- Convert (Night): Attempt to convert a player into joining the Unseen. Unlimited uses, but 1 day cooldown if successful. No more than 4 Unseen members can be alive at once. Hardcounter roles are unconvertable");

		e.addField("Attributes:", "- You will appear as a random Town role (you will know which one) to all investigative roles until the end of Night 3. Nothing can bypass this. Afterwards, you will retain Detection Immunity.\n- If you try to convert someone at the same time as someone else (by a Cult Leader or Vampire, for example), both of you will fail.");
		
		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["assassin", "989"], "Unseen", "Assassin", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 989");

		e.addField("Alignment", "Unseen Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Suicide (Any): At the end of the night, you will deal an Overkill attack to yourself. This ability cannot fail, under any circumstances.\n- Lacerate (Day): Cause a player to bleed instantaneously. They will know this, and will die in two nights unless healed. 3 uses.\n- Distract (Day): Silence a player for the rest of the day. They cannot talk or use abilities. 3 uses.\n- Assassinate (Night): Kill a player at night.\n- Two-For-One (Night): Kill two players at night. 1 use. Call now!");

		e.addField("Attributes:", "- If you are the starting Assassin and the Mastermind dies, you will take their place.\n- Anyone promoted to Assassin will reset charges of Lacerate, Distract, and Two-For-One (as in, even if the original one used all of the abilities, you will have all abilities available to you at maximum charge)");
		
		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["wanderer", "990", "2u"], "Unseen", "Wanderer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 990\nConverted from: Nervous Sleeper");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stalk (Night): Follow a player. If their target is given any notifications at all, kill your target.\n- Watch (Night): Stay at a player’s home and wait for someone. If your target is given any notifications, kill a random non-Unseen visitor.\n- Guard (Night): Attack all non-Unseen visitors to you. 2 uses.");

		e.addField("Attributes:", "- If your target kills you while using Stalk, you will be unable to kill them. This does not apply to Watch or Guard.");
		
		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["deducticreator", "991", "6u"], "Unseen", "Deducticreator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 991\nConverted from: Investicreator");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate (Night): Investigate a player to figure out who created their role.\n- Deduce (Day): Guess a person who created roles. At the beginning of the night, all Unseen will know how many of their roles are alive, and how they’re distributed between factions. 2 uses.");

		e.addField("Attributes:", "- Deduce cannot be affected by frames.");
		
		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["weaponsmith", "992", "11u"], "Unseen", "Weaponsmith", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 992\nConverted from: Tinkerer");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Craft (Night): Craft a gun. Any visitors will stop you from doing this successfully, but any Unseen can visit you (without using their ability) to guarantee that you are able to use your ability. You can have multiple guns at a time.\n- Shoot (Night): Spend a gun to attack a player at night. If your target survives, keep the gun.\n- Gift: At any time, give a gun to another player. There is no limit to how many times you can give a player a gun. They may, in turn, deal a Basic attack to a player. This is increased to Powerful if they are Unseen.");

		e.addField("Attributes:", "- Gift is usable at day and night.");
		
		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["marshal", "993", "20u", "948u"], "Unseen", "Marshal", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 993\nConverted from: Sheriff (either one)");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Interrogate (Night): Interrogate someone to find someone’s faction. This is affected by frames.\n- Brutal Interrogate (Night): Interrogate someone. You will roleblock them and find their exact role. 2 uses.\n- Scout (Day): Determine how many members of any given faction are alive. 2 uses.");

		e.addField("Attributes:", "- Brutal Interrogate will not roleblock if Everfrost is in the game. Scout will refund a use if the faction doesn’t exist, but you will not be able to use it for the rest of the day.");
		
		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["nightstalker", "994", "21u"], "Unseen", "Nightstalker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 994\nConverted from: Nightwatch");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch (Night): Select two players. Learn everything that happens to them.\n- Stalk (Night): Select a player. You will know who they target and get all feedback they get from their ability.");

		e.addField("Attributes:", "- When watching, you will learn what happens to them, but not who did what. If the action is ambiguous, you will pick it out: if someone is roleblocked, you will learn what specific role the roleblocker is.\n- If you Watch someone and they attack their visitors, you will survive and learn their role. They will be notified that they missed you.\n- Your Watch ability is Astral.");
		
		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["constructionist", "construct", "995", "25u"], "Unseen", "Constructionist", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 995\nConverted from: Plumber");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Install (Night): Place a hydrant at someone’s home. It will trigger for any result that the Constructionist chooses. However, they may also choose to trigger it if a specific subalignment visits the target. The hydrant will roleblock all visitors.\n- Uninstall (Night): Remove a target’s defense for the night. 3 uses.");

		e.addField("Attributes:", "- You cannot use Install on the same person two nights in a row, but the hydrant will last until it is triggered, and you may have multiple up at once.");
		
		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["day_archer", "dayarcher", "archer", "996", "30u"], "Unseen", "Day Archer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 996\nConverted from: Day Vigi");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot (Day): Shoot a player. 3 uses.\n- Risky Shot (Night): Shoot a player. If your target does not stay home, your ability will fail. 3 uses.");

		e.addField("Attributes:", "- The first time you use an ability, you’ll lose a charge of both abilities.");
		
		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["deductionist", "997", "35u", "149u"], "Unseen", "Deducitonist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 997\nConverted from: Investigator and Daffodil");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate (Night): Investigate a player to learn their true role.\n- Deduce (Day): Select any amount of players. Roleblock yourself tonight, but learn the roles that are within the group you selected. 1 use.");

		e.addField("Attributes:", "- Deduce’s results will not tell you who has which role.");
		
		e.addField("Goal:", "Unseen Goal");
	});

	register_role(["gargoyle", "gar", "998"], "Neutral", "Gargoyle", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 998");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Turn a player to stone at night.");

		e.addField("Attributes:", "- Stoned players will be revealed at the beginning of the day and cannot do anything at all, even talk or vote.\n- Once a stoned player is visited three times, they will be unstoned.\n- You may choose to turn yourself to stone but will still be able to use your abilities.\n- Instead, you may unstone yourself and all stoned players.\n- Once you turn yourself to stone, you may secretly attack a player that has been stoned for two nights during the day.\n- Players killed while they are turned to stone will not be revealed as dead until they are unstoned.\n- Stoned players still count towards the voting majority, even if dead.\n- Dead players are cleaned when unstoned if you were the one who unstoned them.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["polymorph", "poly", "999"], "Neutral", "Polymorph", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 999");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Congratulations, on any night, choose to become literally any other role you want in GIM. If another player is already that role, how sad, you die instead.");
		
		e.addField("Goal:", "Change your role and win as that new role.");
	});

	register_role(["so_many_roles", "somanyroles", "smr", "why_the_fuck", "whythefuck", "wtf", "wftatsmr", "1000"], "Neutral", "Why The Fuck Are There So Many Roles", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1000");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You'll receive a pool of 5 roles, 3 are in the game and 2 are not. You are only able to kill players with roles in your pool. Nothing happens if you target a role not in your pool - your ability will simply fail. Once all roles in the pool are dead, you'll get a new one.");

		e.addField("Attributes:", "- Roles of players that are dead can show up as a \"not in the game\" role, but not as an \"in the game\" role. Roles that don't exist in the game can show up multiple times.");
		
		e.addField("Goal:", "NK Goal and also spite noodle for stealing slot 500");
	});
};
