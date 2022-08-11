module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["robber", "751"], "Neutral", "Robber (Stealer is too unique of a name ngl)", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 751");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "None... yet >:D");

		e.addField("Attributes:", "- During the day, choose someone. You will temporarily steal their ability.\n- You can use your abilities at night.\n- After 2 nights of having the ability, you will return it to the original target.\n- You may use multiple abilities in 1 night.");
		
		e.addField("Goal:", "Use 3 different abilities.");
	});

	register_role(["preacher", "752"], "Neutral", "Preacher", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 752");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prevent all lethal actions from being taken on your target.");

		e.addField("Attributes:", "- Roleblock Immunity.");
		
		e.addField("Goal:", "Save two players.");
	});

	register_role(["archduke_franz_ferdinand", "archdukefranzferdinand", "archduke", "franz", "ferdinand", "753"], "Neutral", "Archduke Franz Ferdinand", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 753");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hide behind your bodyguards, giving you Invincible Defense for that night. 4 Uses.");

		e.addField("Attributes:", "- You are publicly revealed to be Archduke Franz Ferdinand at the start of the game.\n- Any kill-capable role must see you dead by the end of the game to win, along with their original goal. In the case of roles with factional kills, only the leader of that faction needs to kill you. However, the game will end if they have eliminated all opposing factions before you.\n- For flavor text intents and purposes, the game thematically takes place in Belgrade. Good luck.");
		
		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["scp-173", "scp173", "peanut", "754"], "SCP", "SCP-173", {subCat: "Euclid"}, (e) =>
	{
		e.setDescription("Post 754");

		e.addField("Alignment", "Unique SCP Euclid", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every non-full moon night, you may visit somebody. This will either one random visitor, the person you visit themselves, or someone who visits you aside from any SCPs.");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["my_various_knives", "myvariousknives", "knives", "mvk", "755"], "Neutral", "My Various Knives", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 755");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose any player(s) to attack. The maximum possible amount is equal to the current Night's number.\n- 1 Use: Next Night, all of your attacks are upgraded to Powerful tier. This won't be refunded if you get roleblocked that night.");

		e.addField("Attributes:", "- If someone successfully kills you with a non-astral attack during the night, you will automatically attack them back.");
		
		e.addField("Goal:", "Ensure that every other player dies. You may win if you're the last player standing or if absolutely everyone dies.");
	});

	register_role(["thousand-faced_shadow", "thousandfacedshadow", "tfs", "thousand", "756"], "Neutral", "Thousand-Faced Shadow", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 756");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Deal a Basic attack to someone each night.");

		e.addField("Attributes:", "- When you successfully kill someone, you may have their role, will, and cause of death be displayed as whatever you want.\n- When you successfully kill someone, choose another killing role in the game not deemed unbalanced by the Role Jury. You become that role, except you're Neutral Killing and you keep your existing abilities and attributes. (Your goal and alignment stay the same, you don't have access to factional chats or kills, etc.)\n- As long as your role is Thousand-Faced Shadow, you may make any number of actions each night as long as those actions each come from a different role.");
		
		e.addField("Goal:", "Eliminate all who would oppose you.");
	});

	register_role(["insurgent_mercenary", "insurgentmercenary", "mercenary", "merc", "757"], "Insurgency", "(Insurgent) Mercenary", {subCat: "Bouncer"}, (e) =>
	{
		e.setDescription("Post 757");

		e.addField("Alignment", "Insurgent Bouncer", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Patrol a player's house during the night. Astral\n- Oversee a conversation between two players during the day, learning all whispers between them. They will not be notified. 2 Uses.");

		e.addField("Attributes:", "- When you patrol a player's house, you will give them Powerful Defense. Additionally, any non-attack visits on them will automatically fail.\n- You will be notified the first time each day that a player whispers another; you will not be notified if there's a reply.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["shadow", "758"], "Neutral", "Shadow", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 758");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Engulf a player in shadows at night, ceasing their ability to receive or give notifications that night, including attacks, witchings, or anything elsewise.");

		e.addField("Attributes:", "- Your ability can not be stolen, you cannot be converted.");
		
		e.addField("Goal:", "Successfully keep five notifications from being sent, to or from.");
	});

	register_role(["insurgent_martyr", "insurgentmartyr", "martyr", "759"], "Insurgency", "(Insurgent) martyr", {subCat: "Bouncer"}, (e) =>
	{
		e.setDescription("Post 759");

		e.addField("Alignment", "Unique Insurgent Bouncer", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guard a player's house during the night.\n- Preach to two player during the day. 2 Uses");

		e.addField("Attributes:", "- When you guard a player, you will grant them Powerful Defense. If a player attacks your target, you will both deal a Powerful Attack to each other. Basically an Insurgent Bodyguard.\n- When you preach to players, you will learn if they are capable of winning together.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["leonard_hofstadter", "leonardhofstadter", "leonard", "hofstadter", "760"], "Town", "Leonard Hofstadter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 760");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player that has been bazinga'd to calm them down. they will be BM'd, but the day after they can speak freely.");

		e.addField("Attributes:", "- Can only spawn if Nlove is present\n- Cannot be bazinga'd");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["watch_over_us", "watchoverus", "person", "aptwou", "761"], "Neutral", "A person to watch over us.", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 761");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "Watch over a player at night, if they would die that night, you will instead speak to their attacker in a private channel, they will be notified you are 761. The attacker may rescind their attack, or continue.");

		e.addField("Attributes:", "- Your ability cannot be stolen, removed, or otherwise prevented, this bypasses jail.");
		
		e.addField("Goal:", "See one life spared by your cause.");
	});

	register_role(["unknown", "762"], "Any", "Unknown", {anyExCat: ["Neutral"]}, (e) =>
	{
		e.setDescription("Post 762");

		e.addField("Alignment", "Any (Non-Neutral)", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- In the day or night, choose any players, living or dead, and choose an ability number to attempt to use. (e.g. first ability, second, third, etc.) If your role has that ability and it can target the player(s) you choose, it will happen.\n- In the day or night, guess your role and learn if you are correct.");

		e.addField("Attributes:", "- You are given a random role that can roll in your rolelist slot, along with its abilities, attributes, and goal, but you do not know what it is.\n- If you attempt to use an ability from your goal but fail, you will learn the exact reason; wrong number of targets, cannot be used that phase, etc.\n- Until you guess yourself, you can only use one ability per phase.\n- If your role normally uses a factional chat, it cannot do so until you guess yourself correctly.\n- You cannot copy any role with the ability to reveal itself publicly.");
		
		e.addField("Goal:", "Correctly Guess your role. Alternatively, you can win if you fulfill your role's goal before guessing yourself.");
	});

	register_role(["willbreaker", "763"], "Neutral", "Willbreaker", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 763");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each day, choose a player. For the duration of the next night, they can't access their private channel and you can. You make all actions for them that night.");

		e.addField("Attributes:", "- They will be informed that they mysteriously blacked out, and they won't know what actions you took for them.\n- You can force players to commit suicide, but the Town will be informed that their suicide was unnatural, and you can't make them take any night actions if you do this.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["scp-096", "scp096", "shy_guy", "shyguy", "764"], "SCP", "SCP-096", {subCat: "Euclid"}, (e) =>
	{
		e.setDescription("Post 764");

		e.addField("Alignment", "Unique SCP Euclid", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every full moon night, you may rampage at someone elses house.");

		e.addField("Attributes:", "- You will not kill any members of your team.\n- If someone visits you, they die.\n- Your victims are cleaned");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["astute_gif_user", "astutegifuser", "gif", "765"], "Neutral", "Astute Gif User", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 765");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a target, and a GIF (from Discord's GIF search thing) of your choice. The host will post that image in the target's player channel without any context.");

		e.addField("Attributes:", "- You may only communicate via GIFS from Discord's GIF search, even in your own private channel.\n- You GIFs *can* have text on them. :)");
		
		e.addField("Goal:", "Make sure you successfully have a conversation with at least four unique people and survive until the end of the game.");
	});

	register_role(["snowstorm", "766"], "Everfrost", "Snowstorm", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 766");

		e.addField("Alignment", "Everfrost Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, select two targets. If Target A votes Target B the following morning, roleblock Target A.\n**Piercing Death** — Roleblock all players that have voted you over the course of the game, then coldsnap. Can be used the night after your death. You may only use this ability once each game.");

		e.addField("Attributes:", "- Roleblock Immune\n- Whenever a player is roleblocked by anything at night besides an Everfrost Attribute, during the next morning, the first person they vote will be roleblocked the following night.");
		
		e.addField("Goal:", factions.Everfrost.goal);
	});

	register_role(["black_hole", "blackhole", "bh", "767"], "Neutral", "Black Hole", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 767");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Merge yourself with another player permanently. Together, you and people you merged with will be referred to as the Blob in this role card. This ability can be used alongside your other ability and be used in your Player Channel, despite your own attributes.\n- Choose the action of one of the players in the Blob. This is subjected to your attributes of the Blob Chat.");

		e.addField("Attributes:", "- Only one player in the Blob may submit an action per phase, no mater how many players have been added to it. The last submitted action is the one that actually gets used.\n- A chat for players in the Blob will be provided for them to endlessly bicker and fight in.\n- Goals and abilities are NOT changed by being added to the Blob.\n- Once a player is in the Blob, they cannot submit actions in their player channel. They must use the Blob Chat instead.\n- The Blob will remain even if the Black Hole dies.\n- The Black Hole cannot die to being lynched.");
		
		e.addField("Goal:", "Live to see every living player joined with you within the Blob. The other players in the Blob will lose if this comes to pass, unless they have already fulfilled their goal.");
	});

	register_role(["scp-049", "scp049", "plague_doctor", "plaguedoctor", "768"], "SCP", "SCP-049", {subCat: "Euclid"}, (e) =>
	{
		e.setDescription("Post 768");

		e.addField("Alignment", "Unique SCP Euclid", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Instead of killing somebody, you may instead revive a dead player secretly as an SCP-049-2 instance. It cannot vote, but can perform a basic attack or roleblock another player. It lasts for 2 days before dying.");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["scp-682", "scp682", "769"], "SCP", "SCP-682", {subCat: "Keter"}, (e) =>
	{
		e.setDescription("Post 769");

		e.addField("Alignment", "Unique SCP Keter", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack 1 player with basic attack.");

		e.addField("Attributes:", "- You will adapt to the environment.\n- If you are roleblocked twice gain roleblock immunity.\n- If you fail attack twice gain powerful attack.\n- If you are attacked twice gain powerful defense.\n- If you are voted twice gain 2 votes.");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["scp-106", "scp106", "larry", "770"], "SCP", "SCP-106", {subCat: "Keter"}, (e) =>
	{
		e.setDescription("Post 770");

		e.addField("Alignment", "Unique SCP Keter", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- When visiting, you don't kill right away, instead, they must pick a number from 1-10. If they choose the right number, they live, if they don't, they die. The number is randomized every time.");

		e.addField("Attributes:", "- Once a SCP-106 has been confirmed to be in play, one town member may volunteer to sacrifice themselves (Modkill level attack) to kill SCP-106(Modkill level attack). The vote counts as a lynch and requires the standard trial rules for the game to pass.");
		
		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["attorney_amber_hard", "attorneyamberhard", "attorney", "amber_hard", "amberhard", "771"], "Mafia", "Attorney Amber Hard", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 771");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Punish Rumor: Before the start of the day, choose a person who might get the most votes and be elected first. Anyone who chooses to do so will be severely beaten the following night.\n- Defender: If you did not guess the first vote yesterday (ie someone voted not to vote or voted for a different person), you are a strong defender, and tomorrow you can hear the voices of two players instead.");

		e.addField("Attributes:", "- In the day, you will hear voices of a player at random, which includes anything they type in their player channel, except for votes.\n- This post is based off of a Google misTranslated version of \"Amber Heard's Lawyer\"");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["arsonist", "772"], "Mafia", "Arsonist", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 772");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to bamboozle each night. Each of their night messages will be replaced with a night message from another role in the GIM roles thread chosen at random.\n- Choose to syncopate at night. You'll learn all the false night messages given by your first ability and to whom they were given, and you can choose any number of them to make actually happen. You may only syncopate once.");

		e.addField("Attributes:", "- You have a large titanium wall in front of your house until you syncopate that roleblocks the first 2.5 players who would attack you.\n- You can't say the words \"vote\", \"for\", or \"role\" on Day 4, and you can't vote on Day 4.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["king", "773"], "Town", "The King", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 773");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack\n- 2 Uses: Heal yourself by 1 HP\n- 1 Use: Remove all negative status effects off of yourself, such as douses, hexes, etc.\n- 1 Use: Learn a player's role. Cannot be used before Night 3.");

		e.addField("Attributes:", "- The King has 6 HP. Any attack that would kill him will instead reduce his HP by 1.\n- The King can only die if his HP reaches 0, or he is lynched.\n- Anything that heals the King will increased his HP, up to a maximum of 6.\n- The King is automatically revealed at the start of the game.\n- If the King dies, Town has exactly 2 days and 2 nights afterwards to kill all of their enemies. If time is up and Town hasn't won yet, they will automatically lose.\n- The King cannot use or hear whispers.\n- The King can only be rerolled by choice at the start of the game. Other roles are incapable of forcefully rerolling the King into another role.\n- If you kill a townie, you will lose a charge from a random ability that has one. If you don't have ability charges to use, you will instead lose the ability to attack.\n- The M-63 Plamen Artillery Piece can only attack the King up to 2 times per night.");

		e.addField("Attributes (cont.)", "- At the start of the game, the King may opt to name his Kingdom (AKA the current game) into anything he wants. This feature is very important and entirely cosmetic.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["hypocrite_lawmaker", "hypocritelawmaker", "hypocrite", "lawmaker", "774"], "Neutral", "Hypocrite Lawmaker", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 774");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Modkill", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Each night, make a rule concerning players' actions in the public day chat. That rule is announced at the start of the next day.\n- Anyone who breaks that rule except you is modkilled. You must break each rule you make the day after you make it, or you're modkilled.\n- You can't choose to not make a rule, and being roleblocked/etc. doesn't affect your rule-making.\n- Rules go away after you die.");
		
		e.addField("Goal:", "Survive until the end of the game, or have three wrongdoers punished for breaking your rules, or break five of your own rules without being caught.");
	});

	register_role(["gerrymanderer", "gerry", "775"], "Neutral", "Gerrymanderer", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 775");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Split the town into voting sects at night.");

		e.addField("Attributes:", "- The night you gerrymander, you may distribute all alive players into any number of sects with the minimum number of sects being three. Every sect counts as one vote, and the player that the sect votes for is the player with majority of votes within the sect (if there is a tie, the player who achieved the most votes first will be voted for).\n- The voting sects will take effect the day after you establish them and will only last for that day.\n- You may gerrymander twice.\n- You have Basic defense until the first time you are attacked.");
		
		e.addField("Goal:", "Live to see Town lose the game.");
	});

	register_role(["foreigner", "776"], "Any", "Foreigner", (e) =>
	{
		e.setDescription("Post 776");

		e.addField("Alignment", "Any", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Deal a Basic attack to any target each night. You may only use this ability twice.\n- You have an additional ability based on the faction you're in, which the host decides when this role is rolled. This ability pertains to the specific characteristics of this faction, such as a Necronomicon ability if you're Coven, a coldsnap ultimate if you're Everfrost, etc. The ability can't have any mechanics that aren't seen on any other roles, and it should be intentionally weaker than the average role in that faction.");

		e.addField("Attributes:", "- This role can roll under any faction and any alignment, including Town and Neutral.\n- You have a layer of Basic defense that can block one attack.");
		
		e.addField("Goal:", "Whatever the goal of your faction is. (*You have the Survivor's goal if you're Neutral Benign, the Witch's if you're Neutral Evil, etc.*)");
	});

	register_role(["wraith", "777"], "Mafia", "Wraith", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 777");

		e.addField("Alignment", "Unique Mafia Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Appear to a player at night.");

		e.addField("Attributes:", "- If the player dies, you will assume unlimited charges of their abilities, unless those abilities include conversion of any kind.\n- You can appear to players who are killed by an ability which prevents other visits (Jailor, Wisteria, etc)\n- You may only use one ability per night, including appearing to a player.\n- If the player does not die, they will learn you are the Wraith. This will not apply if the player is protected or has their visitors stopped.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["gifted_child", "giftedchild", "gifted", "778"], "Neutral", "Gifted Child", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 778");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Predict a player's allegiance at night.\n- Choose to don a bulletproof vest at night.");

		e.addField("Attributes:", "- Choose a player and give a guess at what their faction is. If you are correct, your streak raises by one. If you are incorrect, the streak resets.\n- Your results are not affected by frames.\n- You have two bulletproof vests that you may use at any point throughout the game.\n- You may no longer use your first ability once you have won.\n- You may not predict your own alignment.");
		
		e.addField("Goal:", "Gain a streak of 3.");
	});

	register_role(["translethal", "779"], "Town", "Translethal", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 779");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transfer any killing actions between two players at night.");

		e.addField("Attributes:", "- You will redirect **any** killing abilities that targets one of your targets to the other target.\n- Your ability does not produce a notification.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["angel_of_wrath", "angelofwrath", "angel", "aow", "780"], "Neutral", "Angel of Wrath", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 780");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Attack a player.");

		e.addField("Attributes:", "- Flying (You can't be blocked by protective roles.)\n- First strike (You have the highest possible priority.)\n- Vigilance (You can attack each night and each day.)\n- Trample (Excess damage you deal is dealt to your target's visitors.)\n- Haste (You can make one attack before the game begins.)\n- Protection from Mafia (You can't be affected in any way by Mafia roles' abilities.)\n- Protection from Neutral Killing (You can't be affected in any way by Neutral Killing roles' abilities.)");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["heavenbound", "hb", "781"], "Thundercry", "Heavenbound", {subCat: "Onslaught"}, (e) =>
	{
		e.setDescription("Post 781");

		e.addField("Alignment", "Unique Thundercry Onslaught", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Call down divine lightning, rampaging at all Striked players' houses. For every non-Striked player you kill, you gain one Strike to use.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- When placing a Strike, all players who target you will have their ability fail.\n- If two or more Striked players are alive, you gain basic defense.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["osprey", "782"], "Thundercry", "Osprey", {subCat: "Onslaught"}, (e) =>
	{
		e.setDescription("Post 782");

		e.addField("Alignment", "Unique Thundercry Onslaught", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Redirect all visits to a player to yourself, and gain one Strike to use.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- At the beginning of every night, all Striked players alive grants you 1 Volt Point. A Striked player dying causes you to lose 1 Volt Point. As you gain Volt Points, you become more powerful.\n> 2 VP: Basic attack only on Full Moon\n> 3 VP: Basic attack whenever\n> 4 VP: Roleblock and Control Immunity\n> 5 VP: Powerful attack\n> 6 VP: Lynchproof once per game\n> 7 VP: Can make two actions per night\n- If two or more Striked players are alive, gain basic defense.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["astra", "783"], "Thundercry", "Astra", {subCat: "Onslaught"}, (e) =>
	{
		e.setDescription("Post 783");

		e.addField("Alignment", "Unique Thundercry Onslaught", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attack a player at night.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- The night after a Striked player dies, you may make a powerful attack and roleblock on top of your normal action. This does not stack if multiple Striked players die on the same night.\n- If two or more Striked players are alive, gain basic defense.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["fulgur", "784"], "Thundercry", "Fulgur", {subCat: "Onslaught"}, (e) =>
	{
		e.setDescription("Post 784");

		e.addField("Alignment", "Unique Thundercry Onslaught", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attack one living neighbour of every Striked player OR attack a single player.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- You may place up a Strike on top of doing your nightly action.\n- If two or more Striked players are alive, gain basic defense.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["jackdaw", "785"], "Thundercry", "Jackdaw", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 785");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Caw at a player, decreasing their defense by one stage until they are healed or protected. If a player who has no defense is targeted, they gain Vulnerable defense, and will die if visited by two or more people. Targets will know their defense has been lowered.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- If one or more Striked players are alive, players who visit your target will also have their defense lowered.\n- If two or more Striked players are alive, gain basic defense.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["hurricane", "786"], "Thundercry", "Hurricane", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 786");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Interfere with a player, secretly changing their target to be a Striked player of your choosing.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- If one or more Striked players are alive, learn the faction and alignment of players you visit.\n- If two or more Striked players are alive, gain basic defense.");
		
		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["gladiator", "glad", "787"], "Neutral", "Gladiator", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 787");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- In the day, challenge someone to a Duel that occurs in the following night.\n- Attack (Only usable in a Duel)\n- Increase your Defense by 1 during your opponent's next turn only. (Only usable in a Duel)\n- Use an Overkill attack. (1 use per game, only usable in a Duel)");

		e.addField("Attributes:", "- While a Duel is active, you can only target your opponent, and your opponent can only target you.\n- When a Duel starts, a private chat will be made for you and your opponent.\n- During the Duel, other people cannot roleblock or control you or your opponent. Roleblock and control abilities are still usable within the Duel.\n- During a Duel, you and your opponent each take turns using abilities on each other. Any participant cannot use the same ability two turns in a row.\n- The first turn in a Duel is always yours.\n- The first to die in a Duel loses. The winner can choose to increase either their Attack or Defense by 1 tier, permanently.\n- If both players survive 5 turns, the Duel ends in a tie, and nothing happens.\n- After a Duel, you and your opponent cannot use any more actions that night.");
		
		e.addField("Goal:", "Kill at least 3 people using Duels and survive undefeated until the end of the game. Losing one Duel means losing the whole game, even if you survive.");
	});

	register_role(["reset_button", "resetbutton", "reset", "788"], "Neutral", "Reset Button", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 788");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If you die, everyone is revived and everyone's role is rerolled, regardless of circumstances.");
		
		e.addField("Goal:", "Die, and reset the game");
	});

	register_role(["communicator", "comm", "789"], "Loyalist", "Communicator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 789");

		e.addField("Alignment", "Loyalist Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, you may create a private channel between two people, where they can communicate at all times, even if one is dead, jailed, etc. You may use this while dead.");

		e.addField("Attributes:", "- You may hear all whispers.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["atomic_international_chess_grandmaster", "atomicinternationalchessgrandmaster", "atomic", "aicm", "790"], "Town", "Atomic International Chess Grandmaster", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 790");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful/Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player during the day. The following night, you will challenge them to a Atomic Blitz 3 | 2 chess game on chess.com");

		e.addField("Attributes:", "- The following night, both players are required to participate in the chess game, unless for OOC reasons they are physically unable to. You will roleblock your target.\n- Winning by checkmate will deal a Powerful attack to your target. Winning by any other method (resignation, time control, and notably king capture) will deal a rampage Powerful attack from the radiation, and your target will take an Unstoppable attack. Losing will deal a normal Powerful attack to you, regardless of how you lost. If you draw, play another game.\n- At no point during the game may kings come into contact with each other. This is to prohibit stalling. If anyone violates this rule, they will be modkilled and banned.\n- All players that die to this role will have a shared link of the match posted as their cause of death, alongside your role.\n- You may reroll this into another Town Killing for free.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["synaesthesia", "syna", "synae", "791"], "Coven", "Synaesthesia", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 791");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player and a sense to perceive them with.");

		e.addField("Attributes:", "- You will perform an action to your target based on the sense that you chose as well as one other random sense.\n- Your sense of sight will reveal your target's faction.\n- Your sense of smell will reveal how many charges of any limited-use abilities your target has remaining. If they do not have a limited-use ability, you will be notified about this.\n- Your sense of touch will reveal your target's attack and defense values.\n- Your sense of hearing will reveal if your target has any night chats and the last message sent in all of them if they do have any night chats.\n- Your sense of taste will reveal if your target has any non-death immunities, such as roleblock or redirection immunity.\n- With the Necronomicon, you unlock the sixth sense, which deals an Astral Basic attack to your target.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["beekeeper", "bee", "bk", "792"], "Town", "Beekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 792");
		e.author.iconURL = "https://cdn.discordapp.com/emojis/976566462133174342.webp";

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to sting a player, preventing them from using an ability the following night.\n- Use 2 bees to investigate a player and find their role.\n- Use 3 bees to deal a powerful attack to a player.");

		e.addField("Attributes:", "- You will earn 1 bee every night. You can use 2 abilities per night.");

		e.addField("Goal:", "Keybeeper Goal");
	});

	register_role(["inductor", "793"], "Town", "Inductor", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 793");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone each night, see if they win with the Mayor.");

		e.addField("Attributes:", "- All town, florae, neutral benigns, neutral evils that do not need to see the town dead, and any conversion roles that can turn town will appear as winnable with mayor. frames will show as the target being unable to win.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["keybeeper", "key", "kb", "794"], "Town", "Keybeeper", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 794");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Beep 1 key and give another player Basic defense for the night. (*Beeping keys uses up the keys.*)\n- Beep 2 keys to transport 2 players.\n- Beep 3 keys to give someone an invincible autovest but making them unable to use night abilities until it's broken.");

		e.addField("Attributes:", "- You will earn 1 key every night. You can use 2 abilities per night.\n- You may transport yourself or give yourself autovest.");

		e.addField("Goal:", "Beekeeper Goal");
	});

	register_role(["police", "795"], "Town", "Police", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 795");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Inspect someone's home CCTV footage and stand guard for any unwanted trespassers, or put on a bulletproof vest.");

		e.addField("Attributes:", "- Anyone who visits your target for the first time will be roleblocked as you will arrest them for trespassing, then promptly set them free at the end of the night. If this is not their first time, you will arrest them, roleblocking them, then execute them for a repeat offense of trespassing. You will not affect astral visits. You may wear a bulletproof vest twice per game.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["rook", "796"], "Neutral", "The Rook", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 796");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Beat someone with a rook piece each night, disallowing them access to the next day chat.");

		e.addField("Goal:", "See someone you beat lynched.");
	});

	register_role(["avatar_of_victory", "avatarofvictory", "aov", "victory", "797"], "Neutral", "Avatar of Victory", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 797");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- This role is random role that won a previous GIM game. If the role's been changed since then, it's the original version (the one that won that game).");
	});

	register_role(["onlyshots", "798"], "Neutral", "OnlyShots", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 798");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, select a player to challenge to a TETR.IO set. This will roleblock them at night. If you win, you will kill them. If you lose, you must have had 3 score or more, or you will die.");

		e.addField("Attributes:", "- You must use an alternative account to hide your identity. You must play in a private custom game. All rules of the set must remain as default, except for the First To (FT) setting. It must be set to 7. You will wipe the wills of people you kill.");

		e.addField("Goal", factions.Neutral.goalNK);
	});

	register_role(["s_tier", "stier", "s", "799"], "Neutral", "S Tier", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 799");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check a player and learn their role's rating in <#972887492359508048>. Then, deal your target an attack based off of that tier.\nA, S, and above: none\nB: Basic\nC or unrated: Powerful\nD: Unstoppable\nF, and below: Overkill");

		e.addField("Attributes:", "- A role's rating will be simplified to just its letter. For example, \"F-\" will be seen as just \"F\" by this role.");

		e.addField("Goal", "Ensure the death of every person whose role is B tier or below. This excludes yourself and anyone with a role that hasn't been rated yet.");
	});

	register_role(["hexer", "800"], "Neutral", "Hexer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 800");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic (Powerful)", true);

		e.addField("Abilities:", "- Kill six target players each night.\n- Change your defense to Powerful for the night. You may use this ability along with your first but you may only do this once.");

		e.addField("Attributes:", "- Your ability requires exactly six legal targets. If there aren't six players to kill, you can't kill.\n- You may self-target with your attack.");

		e.addField("Goal", factions.Neutral.goalNK);
	});
};
