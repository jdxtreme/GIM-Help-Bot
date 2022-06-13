module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["horse", "1"], "Neutral", "Horse", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Roleblock someone each night. The next person they visit will be roleblocked.\n- Redirect someone each night. The next person they visit will be redirected to you. (2 uses)");

		e.addField("Attributes:", "- Roleblock immune.\n- Can use multiple abilities, but may only use one ability each per night.");

		e.addField("Goal:", "Live to see no kills occur on any given night. You can't win on Night 1.");
	});

	register_role(["nervous_sleeper", "nervoussleeper", "2"], "Town", "Nervous Sleeper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a player at night.");

		e.addField("Attributes:", "- If your target visits someone who dies, deal an Unstoppable attack to them. If they visit you and you die, you will not attack them.\n- If you stay home, you will instead attack your visitors.\n- If you attack a Townie, you cannot act the next night. The first time you do this, degrade to Powerful attack.\n- You may only stay home twice.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["wm_godfather", "wmgodfather", "godfather", "3"], "Mafia", "WM Godfather", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 3");

		e.addField("Alignment", "Unique Mafia Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Order your goon to perform the factional Mafia kill each night.");

		e.addField("Attributes:", "- When you order your goon to perform the factional Mafia kill, you will not visit the target. You will also appear to stay home to a Tracker.\n- If a Lookout sees your goon visit their target, they will see that a goon visited their target, instead of seeing a player's name.\n- Your goon can be killed as a result of visiting your target. If they are, you will no longer be able to order them to perform the factional Mafia kill.\n- If your goon is attacked by a Bodyguard, the Bodyguard will still survive, and your goon will not. The Bodyguard will be notified that they killed your goon.\n- You appear to be a member of the Town when investigated.");

		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["role_jury", "rolejury", "4"], "Neutral", "Role Jury", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 4");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Pick a player every night.");

		e.addField("Attributes:", "- If they're a role deemed unbalanced, deal an Overkill attack.\n- Your attack pierces through every form of defense and nothing can be saved. You will even kill things such as God.\n- At the start of the game, after every role has been locked in, the host must go through the entire rolelist and deem every role unbalanced or not.\n- You bypass Boy Scout, and ignore all effects that would make you not bypass Boy Scout. You also have a higher effect-cancelling priority than Boy Scout so Rasen cant do anything about It haha suck my dick. (You will also murder the Boy Scout to death with exactly 123,765,098,127 stab wounds)\n- The text in () above Is not actually part of the role and Is just there for comedic effect\n- If the host doesnt deem any role unbalanced, then Role Jury Is immediately rerolled.");

		e.addField("Goal:", "Kill every unbalanced role.");
	});

	register_role(["reaper", "5"], "Neutral", "Reaper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 5");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "-Choose a player to stalk at night. For this night and the next, you will learn who they visit. Two nights from now, you will attack whoever they visited. If your target visited nobody during either night, you will attack your target instead.");

		e.addField("Attributes:", "-Everything you do is Astral.\n-You can only stalk two players at a time.");

		e.addField("Goal:", "Be the last player standing.");
	});

	register_role(["investicreator", "6"], "Town", "Investicreator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 6");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate someone specifically to spite Zage. You will find out the creator of their role. See it's an actual investigator. It works. Probably. *Spites Zage.*");

		e.addField("Attributes:", "- *Spites Zage*\n- Framed targets show Zage as the creator.");

		e.addField("Goal:", "Town Goal but spite Zage.");
	});

	register_role(["soldier_but_on_steroids", "soldierbutonsteroids", "soldier", "7"], "Neutral", "Soldier But On Steroids", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 7");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful And A Half", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Shoot a player with your shotgun at night.");

		e.addField("Attributes:", "- You will also shoot anyone who visits your target. This counts as using your main ability, which means that anyone who visits them will get shot, and anyone who visits them also gets shot, and so on.");

		e.addField("Goal:", "Shoot everyone.");
	});

	register_role(["angel_of_death", "angelofdeath", "aod", "8"], "Neutral", "Angel of Death", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 8");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Target a player. You will deal an Unstoppable attack to them and gain 1 soul. You will leave behind a dead body that appears to be alive. It will only appear as dead the day after.\n- Place a bet on someone during the day. If they get lynched, gain 2 souls.\n- Gain powerful defense for the night. If you succesfully protect yourself from an Attack, gain 2 souls. Cost: 1 soul\n- Guess someone's role. If you're correct, gain 2 souls. If you're wrong, remove 2 souls. Cost: 1 soul\n- Deal an Unstoppable Rampage Attack to up to 3 players. Gain 4 souls if the amount of people you killed Is 3, 2 souls If It Is between 4 and 6, and 1 soul if its 7 or higher. Cost: 6 souls.");

		e.addField("Attributes:", "- You start with 3 souls.");

		e.addField("Goal:", "Kill the Town and anyone that may oppose you.");
	});

	register_role(["sleeper_agent", "sleeperagent", "9"], "Mafia", "Sleeper Agent", {spawnCat: "Town", subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 9");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Starts as a Townie. Becomes a Random Mafia once the last Mafia dies.\n- The Mafia know who you are and cannot perform actions that negatively affect you.\n- Spawns in Random Town slots.");

		e.addField("Goal:", "Kill everyone that won't submit to the mafia.");
	});

	register_role(["amnestic_wizard", "amnesticwizard", "amnestic", "10"], "Coven", "Amnestic Wizard", {spawnCat: "Town", subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 10");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Starts as a Townie. Becomes a Random Coven once the last Coven dies.\n- The Coven know who you are and cannot perform actions that negatively affect you.\n- Spawns in Random Town slots.");

		e.addField("Goal:", "Kill all who would oppose the Coven.");
	});

	register_role(["tinkerer", "11"], "Town", "Tinkerer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 11");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night you aren't visited, craft a gun.");

		e.addField("Attributes:", "- You can attack a player with your gun, dealing a Powerful attack to them.\n- You may only hold one gun at a time.\n- If you attack a player with a gun, you cannot craft a gun that night.\n- Your gun is consumed even if your target does not die.\n- You can give guns to other players, which thry can use to deal a Basic attack in place of their normal ability. Each player can only recieve one gun.\n- If you are resurrected for any reason, you will not have a gun even if you had one when you died.\n- Control Immune");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["god", "12"], "Neutral", "God", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 12");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Overprotective", true);

		e.addField("Abilities:", "- Use the ability of any role that exists at night. You may use multiple different abilities at once. You may use multiple of the same ability at a time.");

		e.addField("Attributes:", "- You can always talk in any Day chat, regardless of the phase or what day it actually is. Even if it's Day 9, you can still talk in the Day 1 chat. You may also talk in all private chats (informed minority, dead, see jailor/wisteria, etc) but cannot see player chats.\n- Lynch Immunity");

		e.addField("Goal:", "Eliminate all Survivors.");
	});

	register_role(["gunman", "13"], "Neutral", "Gunman", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 13");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone at night.- Hide yourself to gain Basic Defense, Control Immunity, Roleblock Immunity, and role-masking from Consiglieres and Potion Masters. 4 uses.");

		e.addField("Attributes:", "- Shooting a Non-Mafia or Non-Coven will result in you unable to attack or hide the next night.");

		e.addField("Goal:", "Live to see the Mafia/Coven Lose.");
	});

	register_role(["godfather", "14"], "Mafia", "Godfather", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 14");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- Detection Immunity to Sheriff");

		e.addField("Goal:", "Mafia Goal.");
	});

	register_role(["mafia_traitor", "mafiatraitor", "15"], "Mafia", "Mafia Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 15");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Gain all abilities and attributes of a random Town role. You may use the Mafia chat. You may *not* perform the factional Mafia kill.");

		e.addField("Goal:", "Mafia Goal.");
	});

	register_role(["coven_traitor", "coventraitor", "16"], "Coven", "Coven Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 16");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Gain all abilities and attributes of a random Town role. You may use the Coven chat. You may *not* inherit the Necronomicon.");

		e.addField("Goal:", "Coven Goal.");
	});

	register_role(["n-escapable_killer", "nescapablekiller", "n-escapable", "17"], "Neutral", "N-escapable Killer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 17");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player at night. You may not target players whose Discord usernames start with the letter \"n\", lowercase or uppercase.");

		e.addField("Attributes:", "- You instead deal an Overkill attack if you target a player whose Discord username starts with the letter \"a\", lowercase or uppercase.");

		e.addField("Goal:", "Eliminate all other roles whose names start with the letters \"N\" or \"A\".");
	});

	register_role(["prodigy", "18"], "Neutral", "Prodigy", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 18");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to get inspiration from every night.\n-Choose to mature.");

		e.addField("Attributes:", "- Getting inspiration means you will copy one of your targets ability.\n- Maturing transforms you into a copy of a role randomly chosen of players that you got inspiration from.");

		e.addField("Goal:", "Succesfully mature and complete your new goal.");
	});

	register_role(["nice_or_fight", "niceorfight", "19"], "Neutral", "Nice or Fight?", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 19");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose two players that are not yourself, and predict the outcome of your ability.");

		e.addField("Attributes:", "- Both players are given a prompt: Share, or Steal? If both players select Share, then you will choose to give one player a permanent attack increase (if the role does not have an attacking ability, they will gain one), or a permanent defense increase. If one player selects Share and the other chooses Steal, the player who chose Steal receives both a permanent attack and defense upgrade, and the person who chose Share gets nothing. If both player select Steal, neither gets any permanent upgrade, and both are dealt a Powerful attack.");

		e.addField("Goal:", "Correctly predict the outcome of your ability twice.");
	});

	register_role(["sheriff", "20"], "Town", "Sheriff", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 20");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Interrogate someone to find if they're sus.");

		e.addField("Attributes:", "- Town, and Neutral (not killing) roles are automatically assumed to be Not Suspicious, unless stated otherwise.\n- Mafia, Coven, and Neutral Killing roles are all assumed to be Suspicious, unless stated otherwise.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["nightwatch", "21"], "Town", "Nightwatch", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 21");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Take a walk at night, observing all actions that occur to two select players.");

		e.addField("Attributes:", "- You will learn what happens to them, but not who did what. If the action is ambiguous, you will pick it out: if someone is roleblocked, you will learn what specific role the roleblocker is.\n- If you visit someone and they attack their visitors, you will survive and learn their role. They will be notified that they missed you.\n- Your ability is Astral.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["saboteur", "22"], "Neutral", "Saboteur", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 22");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sabotage a person at night, or Sabotage voting in the day.");

		e.addField("Attributes:", "- You are able to sabotage a person at night to roleblock them and learn their role. You can also Sabotage voting anytime during the day to make votes anonymous, nullify Mayor's voting powers, and make your votes count for 2. This lasts until the day ends.");

		e.addField("Goal:", "Live to see the town lose.");
	});

	register_role(["bodyswapper", "23"], "Neutral", "Bodyswapper", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 23");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Swap: Choose a player. You become their role and force them to become a Bodyswapper.");

		e.addField("Attributes:", "- If you're still a Bodyswapper by the time the game ends, you lose.");

		e.addField("Goal:", "Swap with someone and follow your new role's goal.");
	});

	register_role(["metagician", "24"], "Neutral", "Metagician", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 24");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Work wonders on any player at night, including yourself. This has a different effect based on how many times they rerolled their roles:\n> - 0 times: They gain Powerful defense for the night.\n> - 1 time: They can't use abilities tonight or the following day.\n> - 2+ times: They're dealt an Unstoppable attack.\n- Peer into a target's thoughts during the day. You will receive a full backlog of everything sent in their private channel during the current game, with all role names, rolecards, and things that would directly identify roles censored.");

		e.addField("Goal:", "Win with the faction whose members rerolled the least times on average. You will know what this faction is at the beginning of the game.");
	});

	register_role(["plumber", "25"], "Town", "Plumber", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 25");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place a hydrant at someone house.");

		e.addField("Attributes:", "- If the Hydrant triggers, it will roleblock all visitors.\n- The Hydrant will trigger if a circumstance is met, chosen by the Plumber at the start of the night.\n- The next night, the Hydrant will desactivate and you can put a new one on another person's\n- You cannot place an hydrant on the same player's house two nights in a row.\n\nWhat Plumber can choose:\n1. If your target gets attacked, your Hydrant will activate.\n2. If your target gets roleblocked or controlled, your Hydrant will activate.\n3. If any active nighttimes abilities are used on your target, your Hydrant will activate\n4.  If your target gets visited by someone suspicious (based on sheriff results), your Hydrant will activate.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["artificial_disease_developer", "artificialdiseasedeveloper", "artificial_disease", "artificialdisease", "add", "27"], "Neutral", "Artificial Disease Developer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 27");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Infect a player with your disease.\n- Or, reduce your attack level by one, but nobody can be infected if you reduce your attack level.\n- Once per game, you may set your attack level to Unstoppable, but your disease will never be able to spread again.");

		e.addField("Attributes:", "- Your disease spreads similarly to Plaguebearer's plague, but each person can only spread it to one other person per night, including you. Everyone will know when they are infected if you have a Basic (or higher) attack, and if they were infected by visiting a target, or by getting visited (activates at Powerful or higher attack). Each night that someone is infected, they have a 33% chance of being dealt an astral attack at the current attack level. Your attack level increases at the very end of all full moon nights.");

		e.addField("Goal:", "NK Goal");
	});

	register_role(["coven_leader", "covenleader", "cl", "28"], "Coven", "Coven Leader", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 28");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None (Basic w/ Necro)", true);
		e.addField("Defense", "None (Basic w/ Necro)", true);

		e.addField("Abilities:", "- Control someone into someone else during the night, learning their role in the process.");

		e.addField("Attributes:", "- Detection immunity to Sheriff, Basic Defense & Controlling also deals a Basic Attack w/ Necronomicon\n- Necronomicon priority");

		e.addField("Goal:", "Coven Goal");
	});

	register_role(["civilian", "29"], "Town", "Civilian", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 29");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone each night.");

		e.addField("Attributes:", "- Civilian has all abilities and attributes of three random Town roles from the game Town of Salem in addition to its other abilities.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["day_vigilante", "dayvigilante", "day_vigi", "dayvigi", "30"], "Town", "Day Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 30");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone, except you can only do it during the day because you hate the dark. Also you just walk up to the person point blank and shoot them in the head so your attacks are powerful instead of basic.");

		e.addField("Attributes:", "- You can only use your ability thrice.\n- Shooting a town member disables your ability the following day.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["bloodthirsty", "31"], "Mafia", "Bloodthirsty", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 31");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform the Factional Mafia Kill.");

		e.addField("Attributes:", "- If, when you perform the factional mafia kill, the target will not end up dead the next day, you may choose to deal a Powerful Attack to 2 players in the game. If you do, you may not perform the FMK.");

		e.addField("Goal:", "Mafia Goal");
	});

	register_role("32", "Other", "No", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 32 cannot be rolled. F tier. Next.");
	});

	register_role(["indifference", "33"], "Neutral", "The Indifference", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 33");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the beginning of the game, gain the abilities of 1 random role from every faction in the game--your abilities do not have to be that of a living role. Your abilities will come with the restrictions and drawbacks the original role had, so long as that restriction does not somehow result in your death.");

		e.addField("Attributes:", "- You cannot gain the abilities of the Jailor, Martyr, Medium, Vampire Hunter, Hunter, Bodyguard, Godfather or Saint.\n- You cannot have abilities of two roles which are \"equivalents:\" If you gain the abilities of the Veteran, you will not be able to gain the abilities of the Damp Rock, Prince, Remnant, Medusa, etc. \n- You cannot perform a factional night kill, get the Necronomicon or see evil chats.\n- If you use the ability of a role who would normally be roleblock or control immune, you will gain that immunity.");

		e.addField("Goal:", "Be alive when the faction corresponding to your last used ability wins.");
	});

	register_role(["orchestrator_of_the_genocide_of_all_things_pertaining_to_the_role_firefighter", "ootgoatpttrf", "34"], "Neutral", "Orchestrator of The Genocide of All Things Pertaining To The Role 'Firefighter'", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 34");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Interrogate a player each night.");

		e.addField("Attributes:", "- If they are a Firefighter, Firefighter Hunter, Firefighter Hunter Hunter, Firefighter Hunter Hunter Hunter, Firefighter Hunter Hunter Hunter Hunter, etc, you will Mark them.\n- If all Firefighter-pertaining roles are Marked (except yourself), you will deal an Unstoppable attack to all of them. Afterwards, the Town is immediately occupied by the UN for crimes against humanity, leading to everyone except yourself losing all win conditions, making them effectively incapable of winning.");

		e.addField("Goal:", "Exterminate the Firefighter scum");
	});

	register_role(["investigator", "35"], "Town", "Investigator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 35");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player.");

		e.addField("Attributes:", "- You will receive 5 roles. Two will always be Town roles, one will always be a role that opposes the Town, and one will always be their actual role. Investigating them again will not give a new result.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["effort_murderer", "effortmurderer", "36"], "Neutral", "Effort Murderer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 36");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check someone at night. If they are a role that has more than 750 characters, attack them.");

		e.addField("Attributes:", "- Imagine putting effort into a role lmaoooooo imagiiiiine\n- Will die upon their goal being completed.");

		e.addField("Goal:", "Kill three people.");
	});

	register_role(["investiletter", "37"], "Town", "Investiletter", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 37");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player at night.");

		e.addField("Attributes:", "- You will learn what letter their role starts with.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["tenacious", "38"], "Mafia", "Tenacious", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 38");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform the Factional Mafia Kill.");

		e.addField("Attributes:", "- Once the rolelist has been rolled by the host, if Tenacious was rolled, before the roles are given out, 3 other roles must be rerolled into non killing roles, UNLESS the rolelist already gas guaranteed Evil Faction slots.\n- Once you are the last mafia standing, your Factional Mafia Kill Is an Unstoppable Rampaging attack.\n- Players will know at the start of the day when a Tenacious Is the last mafia standing.");

		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["wordle", "39"], "Town", "Wordle", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 39");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guess the first 5 letters of your target's role. You'll know which letters were correct and in the correct spots, you'll know which letters exist but are in the wrong spots, and you'll know which letters don't exist at all.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["locust", "40"], "Neutral", "Locust", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 40");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert someone into a Locust during the night. Every Night.");

		e.addField("Attributes:", "- Can talk with other Locusts during the night\n- No restrictions, unless stated otherwise, as to whom can be converted to a Locust. Additionally, each Locust player may convert during the night.\n- Cope, Seethe, and Mald");

		e.addField("Goal:", "Convert every living player into a Locust.");
	});

	register_role(["clock", "41"], "Neutral", "Clock", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 41");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every even night, roleblock and attack a player.");

		e.addField("Attributes:", "- All players that do a night action after your target does theirs will also be roleblocked.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["nlove", "bazinga", "42"], "Neutral", "Nlove", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 42");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select one player at night. That person can only say 'bazinga' ever.");

		e.addField("Goal:", "Make everyone only say bazinga.");
	});

	register_role(["witch_doctor", "witchdoctor", "43"], "Neutral", "Witch Doctor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 43");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, heal two players. They will also be healed the next night.");

		e.addField("Attributes:", "- You will know whenever you save a target from death.\n- For every player that you’ve saved in the past, you may, instead, attack two players. Your attacks cannot be saved by your own heals.");

		e.addField("Goal:", "Kill everyone who would oppose you.");
	});

	register_role(["attributor", "44"], "Neutral", "Attributor", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 44");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player at night, and come up with an attribute. They will have that attribute starting tomorrow morning, as long as the host approves (host shouldn't approve if it's unfun or unbalanced).");

		e.addField("Attributes:", "- Can't self target.");

		e.addField("Goal:", "Give someone an attribute that makes a difference in the game, i.e. it actually changes something. They must die before the game ends, though, and not via your attributes. Also survive until the end of the game.");
	});

	register_role(["forest_spirit", "forestspirit", "46"], "Town", "Forest Spirit", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 46");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit someone and chat with them, creating a memory.\n- Check the memories of a dead player.");

		e.addField("Attributes:", "- If your dead target was visited by someone you have a memory of, you will know.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["stardust_angel", "stardustangel", "stardust", "47"], "Town", "Stardust Angel", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 47");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cover someone in stardust each night.\n- Once per game, cover all of your visitors in stardust.");

		e.addField("Attributes:", "- If someone covered in stardust attacks a target, grant the target Powerful defense.\n- Stardust lasts only for the night (meaning the next night they're no longer covered in stardust unless you cover them again)\n- You will not know if you healed anybody.");

		e.addField("Goal:", "Town Goal");
	});

	register_role(["admin", "48"], "Neutral", "Admin", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 48");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- In the night, create a new rule, which must be based on one of the below templates. It will be announced once the next day starts.\n> 1. Do not say the following word: [word]\n> 2. Do not target [named person] with any ability during the [Day or Night].\n> 3. Do not ping or vote for [named person].");

		e.addField("Attributes:", "- All rules will accumulate and last until you die.\n- If you get revived, his previous rules are immediately reinstated.\n- If a player other than you breaks a rule, they are hit by an attack of a tier equal to the amount of times they have broken a rule.\n- If you break a rule, you are modkilled.");

		e.addField("Goal:", "Kill at least 3 rule-breakers, other than yourself.");
	});

	register_role(["host", "49"], "Neutral", "Host", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 49");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You may choose to become the host as you get this role. If you do, the host takes your spot as a player and you give them a random role, then reroll all other roles. If you don't, you may choose a letter of the alphabet, and you will be assigned a random role starting with that letter.\n- The host may choose to reroll this role without letting you become the host.");

		e.addField("Goal:", "N/A");
	});

	register_role(["archangel", "50"], "Neutral", "Archangel", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 50");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities", "- Each night, choose 3 players to judge.");

		e.addField("Attributes:", "- During the day, your targets choose privately whether they want to be dealt a Basic Attack the following night or not.\n If none of them say yes, they will all be dealt a Powerful Attack the following night instead.");

		e.addField("Goal:", "Kill all who would oppose you.");
	});
};
