module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["murderer-chan", "murdererchan", "murderer", "chan", "951"], "Neutral", "Murderer-chan", (e) =>
	{
		e.setDescription("Post 951");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Murder a player each night.\n- Murder a player each night.\n- Murder a player each night.");

		e.addField("Attributes:", "- Detection Immune\n- You may multitask.\n- Protection from Rasen (You can't be negatively affected in any way by Rasen. This includes lynches and mod actions.)\n- Rasen can't roll this role.");
		
		e.addField("Goal:", "Kill all who would oppose you except up to one person, who instead wins with you, but it can't be Rasen.");
	});

	register_role(["macho_man", "machoman", "macho", "952"], "Town", "Macho Man", (e) =>
	{
		e.setDescription("Post 952");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Test someone's might each night.");

		e.addField("Attributes:", "- Submit a player and an Attack value. You will be notified whether your target would survive an Attack of that value if said Attack would apply to them after all other actions resolve.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["soldier", "953"], "Town", "Soldier", (e) =>
	{
		e.setDescription("Post 953");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Go on alert outside someone else's house each night. (3 uses)");

		e.addField("Attributes:", "- When on alert, you will deal a Powerful attack to all players that visit your target that night.\n- Because rasen is unbased, let it be known that you will not kill yourself if you use your ability.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["aide", "954"], "Town", "Aide", (e) =>
	{
		e.setDescription("Post 954");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to care for at night.");

		e.addField("Attributes:", "- You will heal your target for both the night you target them and the night after.\n- You are immune to being roleblocked on the second night you protect a target.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["destined", "955"], "Town", "Destined", (e) =>
	{
		e.setDescription("Post 955");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to combine the destinies of two players.");

		e.addField("Attributes:", "- Any player that targets one of your targets will also target your other target.\n- You will not duplicate the abilities of any player that is roleblock or redirect immune.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["abomination_of_salem", "abominationofsalem", "abomination", "abom", "aos", "956"], "Neutral", "Abomination of Salem", (e) =>
	{
		e.setDescription("Post 956");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack someone each night.");

		e.addField("Attributes:", "- You have all abilities and attributes, except factional ones, of all other roles in the game. You may elect at any time to remove any number of your abilities or attributes, but you will not be able to get them back.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["towns_fury", "townsfury", "fury", "957"], "Town", "Town's Fury", (e) =>
	{
		e.setDescription("Post 957");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- At the beginning of the game, you're given three random non-Town Power Town roles. You may choose a role to be from among those, except your ability rampages. (It also applies to all your target's visitors except you. If it already rampaged, it like double rampages? You get it.)");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["puppetmaster", "puppet", "pm", "958"], "Neutral", "Puppet Master", (e) =>
	{
		e.setDescription("Post 958");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose two targets, Player A and Player B.");

		e.addField("Attributes:", "- Player A will visit Player B, dealing a Basic Attack to them.\n- If there are any Protectives on Player B, they will perform their action on Player A rather than you.\n- Player A will not know they were controlled into another player that night; they will perform their regular night action as well as attack another player.\n- You will be seen to have visited Player A rather than Player B.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["cult_leader", "cultleader", "cleader", "959"], "Cult", "Cult Leader", (e) =>
	{
		e.setDescription("Post 959\n*All hail Mithras. All hail Corax. The true gods of this plane. You will spread their stories to every member of this Town…whether they like it or not.*");

		e.addField("Alignment", "Cult Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, sacrifice a target Cult member to gain 2 charges of Eradicate. Other members gain 1 charge of their 1st ability. Your target will die at the end of that night.\n- At night, attempt to convert the target player into joining the Cult.\n- At night, unleash ancient power within Mithras, attacking 2 target players at once. You have 3 uses of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- If conversion fails 3 times in a row, you will convert a random convertible player.\n- Maximum of 4 living Cult members at once.\n- If you die, the most recently converted Cult member will become the new Cult Leader.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["acolyte", "960"], "Cult", "Acolyte", (e) =>
	{
		e.setDescription("Post 960\n*Brainwashed to blindly follow your leader…you must do everything in your power to bend your neighbors to their will. It is your only purpose.*");

		e.addField("Alignment", "Cult Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, guess a player's class. If you're correct, they will be poisoned at the end of that night and will die the following night. You have 1 use of this ability.\n- At night, choose a target and drop their defense to None. You have 3 uses of this ability.\n- At night, if one of the Cult Leader's Eradicate targets survives the night, the Cult Leader will gain a use of Rupture. You have 1 use of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Killing members.\n- Once you become the Cult Leader, you gain an additional use of Rupture.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["invoker", "961"], "Cult", "Invoker", (e) =>
	{
		e.setDescription("Post 961\n*They must stay alive for the town to heed your stories…they must.*");

		e.addField("Alignment", "Cult Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, use the Chains of Corax to occupy a target player tonight. You have 3 uses of this ability.\n- At night, use the Strings of Mithras to redirect a target player to another tonight. You have 2 uses of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Support members that are roleblock and/or redirect immune.\n- This role is roleblock and redirect immune.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["enforcer", "962"], "Cult", "Enforcer", (e) =>
	{
		e.setDescription("Post 962\n*You have traded your life to keep the vessel of Mithras and Corax alive. Ensure that your stories are shared, lest you not die in vain.*");

		e.addField("Alignment", "Cult Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, if the Cult Leader is attacked, the attack will be redirected to you. You have 3 uses of this ability.\n- At night, pray to Mithras, granting every Cult member Basic defense. You have 1 use of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Protective members.\n- If you die from any attack, all Cult members get an extra use of their ability.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["apostle", "963"], "Cult", "Apostle", (e) =>
	{
		e.setDescription("Post 963\n*Bitter that your position in this town has been stripped away, you have no choice but to turn to the evil deities that lurk just beyond. Truth is, you don’t quite believe in these yourself, but…it’s the only way to regain control of your town.*");

		e.addField("Alignment", "Cult Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, disable your target player's voting, then force them to vote for a different target player. You have 2 uses of this ability.\n- At night, your target player will receive framed results from using investigative abilities tonight. You have 3 uses of this ability.\n- At night, summon shadows to report the contents of all whispers tomorrow. You have 2 uses of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Power members.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["seeker", "964"], "Cult", "Seeker", (e) =>
	{
		e.setDescription("Post 964\n*You peer through Corax’s eye. You see all there is to see. But your power is frail, weak. Use it to protect the stories of your gods.*");

		e.addField("Alignment", "Cult Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, reveal to the Cult who any town member with a day ability will be targeting tonight. This is revealed at the start of the night. You have 2 uses of this ability.\n- At night, determine a player’s sub-alignment. You have 3 uses of this ability.\n- At night, discover who a player targets and who targets them. You have 2 uses of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Investigative members.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["ritualist", "965"], "Cult", "Ritualist", (e) =>
	{
		e.setDescription("Post 965\n*In another time, you would be upset at how your powers are being abused for “evil”. Now, however, you know you are not evil. You are merely…enlightened.*");

		e.addField("Alignment", "Cult Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, curse a player. If they die tonight, their role and last will will not be revealed to anyone except you.\n- At night, give your target player a false message that they were healed that night. You have 3 uses of this ability.\n- At night, make a Cult member appear as Town to any investigative roles. You have 2 uses of this ability.");

		e.addField("Attributes:", "- You may only perform one ability per phase.\n- This role is converted from Town Support members who are not roleblock or redirect immune.\n- If you are sacrificed, the Cult Leader will gain 3 charges of their double attack ability rather than 2.");
		
		e.addField("Goal:", "Eliminate the Town and all other rival factions.");
	});

	register_role(["going_to_sleep", "goingtosleep", "sleep", "gts", "igts", "966"], "Neutral", "I'm Going To Sleep", (e) =>
	{
		e.setDescription("Post 966");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- 3 times per game, go to sleep at night. Gain powerful defense the first two times, but basic the last.");

		e.addField("Attributes:", "- Anyone who visits you that would gain feedback has a 75% chance to receive incorrect feedback. Anyone else has a 50% chance for their ability to fail. Yes, this also applies to attackers who would normally bypass your defense.");
		
		e.addField("Goal:", "Survive to the end of the game.");
	});

	register_role(["delinquent", "967"], "Neutral", "Delinquent", (e) =>
	{
		e.setDescription("Post 967");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal something from someone each night.\n- Choose to use an ability you stole.");

		e.addField("Attributes:", "- If your target has any charges of a limited use ability, you will steal the charge. If they have multiple abilities with a charge left, you will take the first ability listed on the role card with a charge.\n- You may choose to use any charges that you have taken, but you may not steal and use a charge at night.");
		
		e.addField("Goal:", "Live to see Town lose the game.");
	});

	register_role(["harbinger", "968"], "Horsemen", "Harbinger", (e) =>
	{
		e.setDescription("Post 968");

		e.addField("Alignment", "Unique Horseman Head", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check a player each night. If they're a Horseman, you will recruit them and allow them to win with you and any other Horsemen.\n- Empower a recruited Horseman for the night.\n- Attack a player. You can only use this if all other Horsemen are dead.");

		e.addField("Attributes:", "- Once you have recruited at least one Horseman, you will form a factional chat with them. This chat will be closed if you die, however.\n- All other Horsemen abilities will have no effect on you.\n- You cannot be decieved by frames or disguises.\n- You cannot Empower until you have recruited every living Horseman. You will be notified when it's available.\n- Each Horseman role should describe the specific benefit it gains when Empowered.\n- Roleblock, Conversion, and Detection Immune");
		
		e.addField("Goal:", "Recruit all living Horsemen and lead them to victory.");
	});

	register_role(["death", "969"], "Horsemen", "Death", (e) =>
	{
		e.setDescription("Post 969");

		e.addField("Alignment", "Unique Horseman Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Stalk a player's house at night, which may be your own. You will attack a random vicitor.");

		e.addField("Attributes:", "- As long as a different visitor is available, you will avoid attacking the Harbinger.\n- If nobody visits your target, you will kill your target instead.\n- When Empowered, you will attack every visitor of the house you stalk.\n- Conversion Immune and Astral");
		
		e.addField("Goal:", "Kill every other player, including the other Horsemen / Protect the Harbinger and eliminate all who would oppose the Horsemen.");
	});

	register_role(["pestilence", "pest", "970"], "Horsemen", "Pestilence", (e) =>
	{
		e.setDescription("Post 970");

		e.addField("Alignment", "Unique Horseman Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Spread Disease to a target of your choice in the night, silencing them in the following day.\n- Kill all players who currently have the Disease.");

		e.addField("Attributes:", "- The Disease effect will last indefinitely after it is inflicted, unless purged.\n- Your victims will not know they have been diseased.\n- While Empowered, you are allowed to use both of your abilities each night. Otherwise, you are limited to one.\n- Conversion and Chat-Impairment Immune.");
		
		e.addField("Goal:", "Kill every other player, including the other Horsemen / Protect the Harbinger and eliminate all who would oppose the Horsemen.");
	});

	register_role(["war", "971"], "Horsemen", "War", (e) =>
	{
		e.setDescription("Post 971");

		e.addField("Alignment", "Unique Horseman Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Force one player to fight another in the night.");

		e.addField("Attributes:", "- Your first target will be forced to use their highest-tier attack on the other.\n- Your first target will appear suspicious if investigated by the Sheriff.\n- If your first target has no attack, you will give them a Basic Attack to use on the other player.\n- Your first target will only know they were controlled. Optionally, you may notify them that they were Manipulated instead.\n- If your first target still fails to kill the second, you will kill the first target yourself.\n- You only visit your first target, not the second, even when Empowered.\n- If Empowered, both of your targets will attack each other, and both will appear suspicious.\n- Conversion and Redirect Immune");
		
		e.addField("Goal:", "Kill every other player, including the other Horsemen / Protect the Harbinger and eliminate all who would oppose the Horsemen.");
	});

	register_role(["famine", "972"], "Horsemen", "Famine", (e) =>
	{
		e.setDescription("Post 972");

		e.addField("Alignment", "Unique Horseman Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Starve up to two players each day.");

		e.addField("Attributes:", "- A Starved player will be notified once the night begins. If they use any ability in the night, they will be killed.\n- You will visit either target to kill them, should they try anything while starving.\n- If you're empowered, you will kill your first target even if they don't do anything. Your first target will not be notified that this will happen.\n- Empowerment will apply to you in the day after you get Empowered, rather than the night.\n- Conversion and Roleblock Immune");
		
		e.addField("Goal:", "Kill every other player, including the other Horsemen / Protect the Harbinger and eliminate all who would oppose the Horsemen.");
	});

	register_role(["conquest", "conq", "973"], "Horsemen", "Conquest", (e) =>
	{
		e.setDescription("Post 973");

		e.addField("Alignment", "Unique Horseman Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Conquer a player in the night.");

		e.addField("Attributes:", "- Conquering a player will attempt to convert them into your minion. They will keep their role, but their new goal will be to live to see you win the game.\n- If you cannot convert those you Conquer, you will kill them instead.\n- You cannot convert a target if:\n```\n- They are Conversion Immune\n- They are a NK or Evil Faction member\n- They are a TPo\n- You already have one living minion\n```\n- You will have a private chat with your Minion. If you get recruited, your Minion will join the Horseman Chat too.\n- You can still Conquer people once you have a Minion; you will simply always attack your target.\n- If Empowered, you will be allowed to convert someone into a second living  Minion.\n- You and your Minions will all have Conversion Immunity.");
		
		e.addField("Goal:", "Kill every other player, including the other Horsemen / Protect the Harbinger and eliminate all who would oppose the Horsemen.");
	});

	register_role(["yuletide", "yule", "974"], "Everfrost", "Yuletide", (e) =>
	{
		e.setDescription("Post 974");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player each night. They gain an Ice Mark if they don't have one and are roleblocked if they do.\n**Winter Miracle** — Choose a player with an Ice Mark. They're converted to the Everfrost. You may only use this ability once per game, but you get your charge back if your target is conversion immune.");

		e.addField("Attributes:", "- Roleblock Immunity\n- Whenever a player is roleblocked by anything, they gain an Ice Mark, and you learn their name.\n- Whenever a player with an Ice Mark visits another non-Everfrost player or is visited by another non-Everfrost player, that player gains an Ice Mark and you learn their name.\n- One other Everfrost role that uses Ice Marks will always spawn as long as this one does.");
		
		e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
	});

	register_role(["servant", "975"], "Neutral", "Servant", (e) =>
	{
		e.setDescription("Post 975");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You are aligned with a random faction, the town will be informed. You cannot align with the Town.\n- If you stay alive and reach the final three, the game automatically ends in your victory.\n- The faction does not have to be in the game, you could be everfrost aligned in a hallow match.");
		
		e.addField("Goal:", "Live to carry the (FACTION) to victory.");
	});

	register_role(["sacrificial_lord", "sacrificiallord", "sl", "lord", "976"], "Neutral", "Sacrificial Lord", (e) =>
	{
		e.setDescription("Post 976");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Mark someone for sacrifice and act upon a failed sacrifice.");

		e.addField("Attributes:", "- The town will be told you have marked someone for sacrifice.\n- If the target marked for sacrifice is not lynched that day, you can attack your target and one additional player.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["teaspoon", "teaspoons", "tsp", "artttap", "977"], "Neutral", "A Role That Throws Teaspoons At People", (e) =>
	{
		e.setDescription("Post 977");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose up to 5 different people to throw Teaspoons at.");

		e.addField("Attributes:", "- In the day, players with Teaspoons may choose to toss a Teaspoon at another player immediately.\n- Any given player cannot toss more than 3 Teaspoons per day, regardless of how many they may have.\n- All Teaspoons are secret. They are not announced, and the target only knows they got a Teaspoon, not who sent it.\n- At the end of the day, the person with the most Teaspoons will die. However, if there is a tie, nobody will die.\n- Teaspoons will last indefinitely until their holder dies.\n- You are immune to Teaspoons. If you hold the most at the end of the day, the player with the second-highest Teaspoon count will die instead.");
		
		e.addField("Goal:", "Kill at least 3 people using Teaspoons. You may win even if you die first.");
	});
};
