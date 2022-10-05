module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["day_voidling", "dayvoidling", "voidling", "dv", "2201"], "Neutral", "Day Voidling", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2201");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Immediately send someone into the void during the day.");

		e.addField("Attributes:", "- They're completely removed from the game for that day and night.\n- They come back the next day.\n- You cannot target the same person twice in a row.");

		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["night_day_vigilante", "nightdayvigilante", "night_day_vigi", "nightdayvigi", "ndv", "2202"], "Town", "Night Day Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2202");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone during the night.");

		e.addField("Attributes:", "- This kill is resolved as soon as the host sees the action, and if the target dies they may not perform their night ability.\n- You have 3 bullets and may not shoot N1\n- If you shoot a Town member you will lose all of your bullets.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["your_turn_to_die", "yourturntodie", "yttd", "ytd", "2203"], "Neutral", "Your Turn To Die", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2203");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- Night 3, Force half of all living players into the Main Game.");

		e.addField("Attributes:", "- The game has 2 phases: a \"Trading Phase\" and a \"Main Game Phase.\" The \"Main Game Phase\" is divided into 2 Phases. The \"Preliminary Phase\" and \"Voting Phase.\"\n- Each Phase lasts 24 hours (except the Main Game Phase, who lasts 48)\n- At the beginning of the Trading Phase, everyone is assigned a card: One person gets the Keymaster card, another gets the Sage card, and a final one gets the Sacrifice card. Everyone else gets Commoner cards.\n- For the rest of the Trading Phase, players may choose any player (including themselves)'s card to be traded with another player of their choice. The player(s) do not know who caused the trade, or who originally had the card they were traded with. They will only know a trade has happened, and what their new card is.\n- During the Preliminary Phase, players discuss and vote for players. At the end of this Phase, half of the players with the most votes will be the only available players to vote in the next phase, and everyone else is saved.");

		e.addField("Attributes (cont.):", "- During the Voting Phase, players discuss and vote for players. Then, at the end of the game, the players with the most votes is dealt an Unstoppable Attack (or something else happens according to the card they had).");

		e.addField("Cards:", "**Commoner**\n> This does nothing.\n> If they have the most votes at the end of the Voting Phase, they will be dealt an Unstoppable Attack.\n\n**Keymaster**\n> This does nothing.\n> If they have the most votes at the end of the Voting Phase, everyone (themselves included) is dealt an Unstoppable Attack.\n\n**Sage**\n> At any point during the Voting Phase, the Sage can use their Divination to learn the current Identity of the Keymaster. 1 use. The Sage cannot lie about their results.\n> If they have the most votes at the end of the Voting Phase, they will be dealt an Unstoppable Attack.\n\n**Sacrifice**\n> The Sacrifice can place two votes during the Preliminary Phase and Voting Phase.\n> If the Sacrifice has the most votes at the end of the Voting Phase, everyone except the Sacrifice is dealt an Unstoppable Attack. The Sacrifice can choose one player that will not be dealt an Unstoppable Attack alongside the Sacrifice.");

		e.addField("Goal:", "Survive the Main Game.");
	});

	register_role(["new_role", "newrole", "before_viri_closes", "beforeviricloses", "viri", "speedrun", "canrbvctcas", "2204"], "Neutral", "Create A New Role Before Viri Closes The Channel Any% Speedrun", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2204");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Immediately reopen <#970046125065265202> for this phase.\n- Immediately cause all actions that would've taken place at the end of the phase to occur immediately. Any other actions sent during this phase will process immediately.");

		e.addField("Attributes:", "- Viri can cope seethe and mald");

		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["mayor_10_votes", "mayor10votes", "mayor_10", "mayor10", "mbwtv", "mbw10v", "2205"], "Town", "Mayor But With 10 Votes", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2205");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, reveal yourself as the Mayor But With 10 Votes.");

		e.addField("Attributes:", "- For the rest of the game, your vote counts as 10, a Doctor cannot heal you, and you cannot whisper or be whispered to.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mayor_28_stab_wounds", "mayor28stabwounds", "mayor_28", "mayor28", "mbwtesw", "mbw28sw", "2206"], "Town", "Mayor But With 28 Stab Wounds", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2206");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, reveal yourself as the Mayor But With 28 Stab Wounds.");

		e.addField("Attributes:", "- For the rest of the game, your vote counts as 28, a Doctor cannot heal you, you cannot whisper or be whispered to, and you will be dealt 28 consecutive Basic attacks as soon as you reveal.\n- You have a (20 * x)% chance to compulsively reveal at the beginning of each day, where x is the day number.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["readymade", "2207"], "Neutral", "Readymade", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2207");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Choose up to four players each night. Redirect each of them to random players, then attack them.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- As you roll this role, you get a random good role that could spawn in the current game and that the host deems to be \"self-confirmable\". You become that role, but you have Basic defense. At the start of Night 4, you also become Readymade, and you lose your other role's goal.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["memory_dance", "memorydance", "memory", "dance", "md", "2208"], "Neutral", "Memory Dance", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2208");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Duel someone at Memory Dance during the day. They are super-roleblocked the night after.");

		e.addField("Attributes:", "- During the day, you choose any combination of ⬆️ ⬇️ ➡️ ⬅️ 🧍 symbols. Max of 8 symbols.\n- Then, the host opens up a chat that only your target can see called #memory-dance.\n- As soon as your target types out \"Ready\" in their player channel, the host types out your chosen combination in the memory dance channel. Then, they make the channel unviewable by your target, and your target must type out the combination in their player channel.\n- If they get a perfect combination, they win and you get a -2 to the amount of symbols you can use (8 then 6 then 4 then 2, but no lower than 2). If they dont, you win, and get to deal a Variable attack to them depending on how many errors they made. 1: Basic, 2: Powerful, 3: Unstoppable, 4: Overkill. If they make more than 4 errors, they die, and this cant be stopped by anything.");

		e.addField("Goal:", "Win 3 games of Memory Dance.");
	});

	register_role(["charge_card_battle", "chargecardbattle", "charge", "card", "battle", "ccb", "2209"], "Neutral", "Charge Card Battle", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2209");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Duel someone at Charge Card Battle during the day. They are super-roleblocked the night after.");

		e.addField("Attributes:", "- How Charge Card Battle works:\n> Both you and your opponent have 8 hearts and start with 0 energy\n> Each turn, you both pick 3 cards.\n> Then, the first cards are compared, as are the seconds and the thirds.\n> When you lose all hearts, you lose.\n- In the case of Special vs Beam, Special goes through.\n- If you win, you deal an Unstoppable Attack to your target.\n- If you lose, you cant use your ability the next day.");

		e.addField("Cards:", "Charge: Charge 1 Energy.\nBeam: Use 1 Energy to deal 2 Hearts of damage.\nSpecial: Use 3 Energy to deal 3 Hearts of damage.\nBlock: Completely nullify a Beam or a Special.");

		e.addField("Goal:", "Win 3 games of Charge Card Battle.");
	});

	register_role(["antipoisoner", "2210"], "Town", "Antipoisoner", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 2210\n*This will only hurt a little.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone at night to give them a dose of antipoison.");

		e.addField("Attributes:", "- If your target is attacked the night after you target them, they will gain Unstoppable defense for that night.\n- If your target is dealt a delayed attacked the night after you target them, the delayed attack will instead take effect immediately.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role("2211", "Town", "2211", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2211");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Change the next day to be day 2211 (and continue as normal)\n- Make each players postcount and votecount for the last day  be equal to 2211 (meaning the hammer yesterday was 2211*the number of players on the person)\n- Change the playerlist to be equal to 2211(number of players in game=2211)\n- Change the length of every player's name and role to be equal to 2211 (their roles and names arent changed; just it counts as that)");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["susurrator", "sus", "2212"], "Sentry", "Susurrator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2212");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit an Authorized target at night to overhear whispers they send and receive in the following day.\n- Visit an Authorized target to learn their feedback at the end of the night, excluding conversion and other investigative abilities. (2 uses)");

		e.addField("Attributes:", "- Whispers you send cannot be overheard or announced.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["mortal_fighter", "mortalfighter", "mortal", "fighter", "mf", "2213"], "Neutral", "Mortal Fighter", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2213");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- [Blackmail yourself] When using this ability, you may pay the cost. If you do, redirect another player to a player of your choice.\n- [Remove one of your \"game X winner\" roles] When using this ability, you may pay the cost. If you do, deal a rampaging Powerful attack to a player of your choice.\n- [Confess your love for a randomly chosen spectator in at least 50 words] When using this ability, you may pay the cost. If you do, deal an Overkill attack to a player of your choice.\n- [Change your profile picture to cropped hentai for at least 24 hours] When using this ability, you may pay the cost. If you do, deal a Basic attack to up to four players of your choice.");

		e.addField("Attributes:", "- Roleblock and redirect immune\n- You may multitask.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["another_tpwr", "anothertpwr", "another", "tpwr", "at", "2214"], "Town", "another tpwr", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2214");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- You're another random Town Power role.\n- You don't know you were originally 2214: another tpwr.\n- Reroll rules apply as if you were rerolling the Town Power role you are.\n- You can spawn alongside another Town Power role.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["not_town_power", "nottownpower", "ntp", "ntpo", "2215"], "Town", "Not Town Power", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2215");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- You copy the exact role card of a random Town Power role. Except for the alignment. You don't copy that.\n- You know you're Not Town Power (2215).\n- You can coexist with a normal Town Power, seeing as you're Not Town Power.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["royal_jester", "royaljester", "royal", "jester", "rj", "2216"], "Neutral", "Royal Jester", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2216");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Once per game, give someone the goal of seeing you executed. If they are a town member or a Neutral that hasn't, their goal is replaced, and if you die in the night they become a Jester. If they are a Neutral that has won or an evil factional member, your ability fails and you do not learn this.\n- Once per game the day after you are lynched, haunt someone who voted you the night you died who didn't have the goal of seeing you lynched. If you target a non-town member or someone who had the goal of seeing you lynched, a random good faction member that voted you dies instead. If only evils voted you, you can haunt evils.");

		e.addField("Attributes:", "- One-time basic defense");

		e.addField("Goal:", "Get lynched by any means necessary.");
	});

	register_role(["equaliser", "equalizer", "2217"], "Neutral", "Equaliser", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2217");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Roleblock a player.\n- Heal a player besides yourself. You cannot use this ability until Night 4.\n- Attack a player. You cannot use this ability until Night 4.");

		e.addField("Attributes:", "- On Night 3, you will join the faction of which faction has the most percentage of dead players. Neutrals are not included in this.\n- Example: There are 4 Everfrost members and 10 Town members. 2 Everfrost members are dead but 4 Town members are dead. You will actually join Everfrost, they have 50% of dead players compared to Town of 40% dead people. If there is a tie percentage, you will join a random faction from the tie.\n- If you join a REF, you will also join their factional chat. You can't use their factional kill though.\n- If no one is dead, you will become a NK with the goal to kill everyone.\n- You may multitask.");

		e.addField("Goal:", "Survive until Night 3 and complete your goal.");
	});

	register_role(["painter", "2218"], "Town", "Painter", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2218");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player to learn a reference for a drawing.\n- Spend a night drawing a canvas of a reference you had. This will take up both the current night and the next night, and if you are controlled, roleblocked, jailed, dead, etc, your ability will fail.");

		e.addField("Attributes:", "- When you successfully draw a canvas, you'll learn exactly who visited your target and what they were doing.\n- When you die, all completed canvases are revealed, even if your role was hidden.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["archmage_of_ice", "archmageofice", "archmage", "ice", "aoi", "2219"], "Coven", "Archmage of Ice", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2219");

		e.addField("Alignment", "Coven Killing", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Encase a player in ice. Your ability will fail if their current defense is the same or higher than your attack power.");

		e.addField("Attributes:", "- Your target will functionally be dead, but nobody will be aware of this except them. They will not have the dead role or be in the dead chat, but cannot talk, vote, or use any abilities (unless they could normally while dead). They still count towards majority, and only count as dead when someone would win to Coven.\n- With the Necronomicon, anyone who visits a frozen player is roleblocked. Anyone who visits a frozen player twice in a row will automatically be frozen and you'll be notified of this. Furthermore, your attack power is increased to Unstoppable.");
		
		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["berserk_of_decimation", "berserkofdecimation", "berserk", "decimation", "bod", "2220"], "Mafia", "Berserk of Decimation", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2220");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, select any amount of players. In (0.25x#) days, all of them will be attacked at the beginning of that day.");

		e.addField("Attributes:", "- You cannot perform the factional kill while you are queued to attack players.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["emp", "2221"], "Neutral", "EMP", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2221");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select any player to set up an EMP at their house.");

		e.addField("Attributes:", "- All Sentries visiting your target will be roleblocked tonight and the following night.");

		e.addField("Goal:", "Live to see the Sentries lose.");
	});

	register_role(["scribblenaut", "2222"], "Neutral", "Scribblenaut", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2222");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose an adjective to give to someone, the host will give them a custom Passive/Effect/Debuff based on the selected adjective.");

		e.addField("Attributes:", "- You may self-target once, the adjective you give yourself will not count for your goal.\n- If a player dies with an adjective, it will be added behind their role name on death. (Ex: Energized Mafioso)");

		e.addField("Goal:", "Make sure 2 of your adjectives affect the game in some way. (Causing a death, Protecting someone, Giving info)");
	});

	register_role(["unbalancer", "2223"], "Neutral", "Unbalancer", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2223\n*You are alone! I will not help you!*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Roleblock a player and grant another roleblock immunity.\n- Heal a player and reduce another's defense. Unusable until N4.\n- Attack a player and increase another's defense. Unusable until N4.");

		e.addField("Attributes:", "- On Night 3, you will join the faction which has the least percentage of dead players, you selfish piece of shit. Neutrals are not included in this.\n- If you join an REF, you're basically a true member and can do anything a normal member could.\n- If nobody is dead, your ability is delayed until someone dies.\n- You may multitask.");

		e.addField("Goal:", "Survive until you get a new goal, then complete that one.");
	});

	register_role(["event_king", "eventking", "event", "king", "2224"], "Neutral", "Event King", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 2224");

		e.addField("Alignment", "Unique Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Every event from <#1024807072358998046> except events 5, 19, and 20 are active. You are the King from event 15.");

		e.addField("Goal:", "Good/Evil King goal");
	});

	register_role(["fucker", "2225"], "Neutral", "Fucker", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2225");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- During the day, you can kill one person. If you choose to kill, you are immune to votes for that day. However, everyone will know it was you, you bastard. You can only do this once.\n- You can attack a person during the night.");

		e.addField("Goal:", "\"You cannot share victory with any faction that has to be alive to win.\"");
	});

	register_role(["sk", "sk_with_basic_defense", "sk_basic_defense", "skwithbasicdefense", "skbasicdefense", "2226"], "Neutral", "SK with basic defense", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2226");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["sk", "sk_without_basic_attack", "sk_without", "skwithoutbasicattack", "skwithout", "2227"], "Neutral", "SK \"without\" basic attack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2227");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/7/7c/RoleIcon_SerialKiller.png";

		e.addField("Alignment", "Neutral \"Killing\"", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Visit a target. They will deal a Basic attack to themself at the end of the night.");

		e.addField("Attributes:", "- If you are roleblocked, your roleblocker will deal a Basic attack to themself.\n- If your roleblocker dies, the roleblock attempt will fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead, and they will not deal a Basic attack to themself.\n- While you do still visit your targets, you do not count as attacking them. This means that you do not trigger effects such as the Superguard's (172) counterattack.");

		e.addField("Messages:", "\"They appear to have committed suicide, with the number \"2227\" written on the ground in their own blood.\" (Day, Cause of Death message)\n\"You attacked yourself, but you survived!\" (Visited by 2228, with at least Basic defense)");
		
		e.addField("Goal:", "Let all who would oppose you die.");
	});

	register_role(["mr_boddy_from_clue", "mrboddyfromclue", "boddy", "clue", "mbfc", "2228"], "Town", "Mr Boddy from Clue", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2228");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "**Whodunnit?**: Visit three targets. If exactly one of them is not a member of the town, you will learn it. 2 uses per night.\n**The Corpse**: If you die, a random townie will gain your Whodunnit ability in addition to their own.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["emissary", "2229"], "Sentry", "Emissary", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2229");

		e.addField("Alignment", "Sentry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transport two Authorized targets.\n- Transport any player with an Authorized target. (2 uses)\n- Transfer the effects between two Authorized targets. Anything that happens to target A will also happen to target B, and vice versa. (1 use)");

		e.addField("Attributes:", "- If you're Authorized, you may self-target.");
		
		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["gardener", "2230"], "Town", "Gardener", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2230");

		e.addField("Alignment", "Unique Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a plant to grow each day.\n- Choose a plant to use each night.");

		e.addField("Attributes:", "- Plants can be used the second night after they're grown.\n- You can't grow a plant on Day 1.");

		e.addField("Plants:", "- Yarrow: Grants the target Powerful defense against attacks other than from Werewolves, Weres, Vampires, or Coven members.\n- Wolfsbane: Grants target Powerful defence against Werewolves and Weres. Will kill attacking Werewolves/Weres. Will kill Werewolf/Were if used on it.\n- Garlic: Grants target Powerful defence against Vampires. Will kill attacking Vampire. Will kill Vampire if used on it.\n- Witch Hazel: Grants target Powerful defense against attacks from Coven members and cures poison.\n- Deadly Nightshade: Deals Powerful attack to target. If used on Town member, all plants lose killing properties.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["hypnotist", "hypno", "2231"], "Neutral", "Hypnotist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2231");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player at night to lull them to sleep and steal their possessions.\n- Use the ability you stole the previous night.");

		e.addField("Attributes:", "- During the phase after you target a player, you will be able to use the day and/or night abilities of their role. You will be notified what they are when you hypnotize them. Any drawbacks relating to causing harm to Town members will not apply to you.\n- Your target will be notified that they were lulled to sleep on the night you hypnotize them. The following night, they will be unable to use their night ability.\n- You have a Basic autovest that protects you the first time you are attacked.");

		e.addField("Goal:", "Good faction should LOSE!");
	});

	register_role(["boombox", "2232"], "Town", "Boombox", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2232\n*You have a boombox. It's loud.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- *Classical Music*: Play classical music in front of someone's house. They will fall asleep, roleblocking them as well as all of their visitors.\n- *Heavy Metal*: Blast rock music at someone's house. They wake up, and will see who visited them that night.\n- *Earworm-y Pop*: Get your music stuck in someone's head. The next night, your target must visit their same target if they can. If they cannot, then they are roleblocked.\n- *Run to the Store*: Make a mad dash for the store. You gain Vulnerable defense for the night. Afterwards, you gain 3 batteries.");

		e.addField("Attributes:", "- You start with 3 batteries, which are used to power your boombox.\n- Whenever you choose to use an ability that involves your boombox (all of them except for the last one), you consume 1 battery.\n- Whenever you have 0 batteries, you must run to the store to grab more batteries before using a different ability.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["town", "2233"], "Town", "Town", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2233");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Rig the vote during the day to ignore whoever was supposed to be lynch and lynch your own target.\n- Evict someone at night. When they refuse, you attack them.");

		e.addField("Attributes:", "- Your target will always refuse to be evicted, as that's just flavor text.\n- If you're investigated, the results for every Town role in the game will be given to your investigator.\n- The above attribute will give separate messages. So, a Sheriff checking Town with 7 town roles that exist will get the \"Not Suspicious\" message 7 times.\n- The frames placed on other players don't apply, frames placed on you do. So, a Sheriff checking you while you're Hexed with 7 town will find you to be a member of the Coven 7 times.\n- The first time you're attacked, you live and are redirected to your attacker.\n- Control, roleblock, and redirect immune. You bypass your own redirect immunity.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["martha_linchester", "marthalinchester", "martha", "linchester", "ml", "2234"], "Neutral", "Martha Linchester", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2234");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Convert another player to a role generally considered a monster.");

		e.addField("Attributes:", "- All monster themed roles are notified you exist and can win with you.\n- Attempting to convert Jd (406), Lunarifish(1531), Jd, Tides of Invention (2041), or Lunari, Summoner Virtuoso (2089), will automatically result in an overkill attack coming your way.\n> - They will be handed the following text:\n> Jd: \"A ghost attempted to haunt you, but you fought back!\"\n> Lunari: \"A ghost attempted to haunt you, but someone you know fought them!\"\n> - You will be handed the text: \"You tried to convert your target, but they had a shotgun! You died!\"\n- Attempting to convert a naturally spawned monster will notify you that they were already a monster.\n- It is up to the host's discretion as to what is a monster and what isn't.");

		e.addField("Goal:", "Haunt the town and rule over all monsters.");
	});

	register_role(["greench", "2235"], "Neutral", "Greench", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2235");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to steal presents from another player (Day)");

		e.addField("Attributes:", "- This role may only spawn during the <@172002275412279296> bot's \"Starlight Festival\" event. It is \"guaranteed\" to spawn on any rolelist during that time.\n- When you attempt to steal presents from another player, that player must not succeed in any \"Starlight Festival\" events from the <@172002275412279296> bot in order for your thievery to succeed.\n- There WILL be a channel for starlight festival events. If a starlight festival event spawns, you may not participate.\n- Stealing a present successfully disables their action until they succeed.");

		e.addField("Goal:", "Prevent the GIM tree from leveling up during your time OR kill all who would oppose you.");
	});

	register_role(["guardian", "2236"], "Other", "Guardian", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2236\n- Also, this role can't be rolled. Ima remove it later so don't bother adding it to the bot.");
	});

	register_role(["scythia", "scythian", "2237"], "Civilization", "Scythia", {subCat: "Militaristic", censor: ["Scythian horse archer"]}, (e) =>
	{
		e.setDescription("Post 2237");

		e.addField("Alignment", "Unique Civilization Militaristic", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Perform the Factional Kill\n- Perform the Factional Kill in addition to another Civilization. (Costs 7 Gold)");

		e.addField("Attributes:", "- While you are alive, all Civilizations including yourself are conversion immune and cannot have their role cards tampered with externally.\n- This role cannot spawn with any conversion-capable Civilizations.");

		e.addField("Messages:", "“They were shot by a Scythian horse archer.” (Factional Kill)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["maori", "2238"], "Civilization", "Maori", {subCat: "Scientific", censor: "Maori Toa"}, (e) =>
	{
		e.setDescription("Post 2238");

		e.addField("Alignment", "Unique Civilization Scientific", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send a player on an ocean voyage. 3 uses.\n- Convince a target in the ocean to live in bliss, changing their role to (96) Survivor. (Costs 5 Gold)");

		e.addField("Attributes:", "- Players sent on ocean voyages disappear from the town for three days and three nights. They cannot talk, vote/be voted, whisper/be whispered, or target/be targeted. They will disappear from any factional chats they’re a part of, and do not count towards the majority. If they are the only one preventing the game from ending, the game will end anyway.\n- Sending a player away does not influence their faction’s promotion mechanics, if any. (e.g. sending away the Plant Killing does not let the Plants use a factional kill)\n- You may perform your ability N1.\n- You may not perform the Factional Kill until you are the last Civ alive.");

		e.addField("Messages:", "“They were bludgeoned by a Maori Toa.” (Factional Kill)\n“You have embarked on a relaxing voyage.” (Target sent on voyage)\n“You have succumbed to bliss. You no longer care for factional warfare.” (Becoming Survivor)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["poland", "polish", "2239"], "Civilization", "Poland", {subCat: "Religious", censor: ["Polish Winged Hussar", "Jadwiga"]}, (e) =>
	{
		e.setDescription("Post 2239");

		e.addField("Alignment", "Unique Civilization Religious", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to canonize a player at night.\n- Reveal yourself as Jadwiga during the day, resurrecting all saints and giving yourself permanent lynch immunity. (Costs 8 Gold +3 for each saint) (One Use, can only be used with at least one saint dead.)");

		e.addField("Attributes:", "- If a player you attempt to canonize dies that night or the next day by any means, they will be registered as a saint. Their win condition changes to “Conquer the world through war”, may speak in the factional chat, and gain one use of their ability while dead. They do not appear as a Civilization in the graveyard, and are by all other means dead.\n- You may not target the same person that is targeted by the Civ using the Factional Kill.\n- When you reveal, you may no longer use your first ability.");

		e.addField("Messages:", "“They were slain by a Polish Winged Hussar.” (Factional Kill)\n“Jadwiga has deemed you worthy! You have been canonized.” (Target when converted)\n“[Player] has revealed themself as Jadwiga! All saints have been resurrected!” (Reveal)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["china", "chinese", "2240"], "Civilization", "China", {subCat: "Economic", censor: ["Chinese Crouching Tigers", "Great Wall"]}, (e) =>
	{
		e.setDescription("Post 2240");

		e.addField("Alignment", "Unique Civilization Economic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Build a wonder at a target’s house.\n- Build the Great Wall of China. (Costs 12 Gold)");

		e.addField("Attributes:", "- Wonders redirect all players visiting within 2 houses (not including dead houses) to the house with the wonder. You generate 1 gold for each redirected player.\n- The Great Wall permanently prevents players from visiting the other half of the town. The host determines where the half is divided.\n- When you pay to build the Great Wall, the town will be notified that the Great Wall is under construction. You may not act the next night, and the Great Wall does not go into effect until the day after.\n- The Great Wall will be destroyed when China dies.\n- Passively generate 2 gold each night.");

		e.addField("Messages:", "“They were ambushed by Chinese Crouching Tigers.” (Factional Kill)\n“The Great Wall of China is under construction!” (Public notification)");
		
		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["dazzingly", "dazz", "2241"], "Neutral", "Dazzingly", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2241");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Attack and clean someone each night.");

		e.addField("Attributes:", "- You will attack and clean anyone who visits you at night.\n- Each time you kill a player, note their faction.\n- On Full Moons, your attacks are Overkill and ignore all protective effects.");

		e.addField("Goal:", "Live to see the faction you have killed the most members of, which must be at least 2, lose the game.");
	});

	register_role(["angel", "2242"], "Neutral", "Angel", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2242\n*\"And for those who would strike down the newest blood, I bring upon you my divine retribution.\"*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give your target invincible defense, and purge them of all negative effects tonight. (3 uses)");

		e.addField("Attributes:", "- You are given a target at the beginning of the game with a winrate lower then 50%.\n- If your target dies, you will die as well.");

		e.addField("Goal:", "Guide your target to victory. Neither of you have to be alive to win.");
	});
};
