module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["creepy_girl", "creepygirl", "651"], "Neutral", "Creepy Girl", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 651\n*Probably not even cursed.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Give someone your doll at night. Only usable on Night 1 or if you come back into possession of your doll.\n- Force your doll onto another player at night (1 use).\n- Choose to roleblock the player with your doll at night (2 use).");

		e.addField("Attributes:", "- Players that receive your doll will be notified that they have come into possession of a creepy doll.\n- The player who possesses your doll may choose to give the doll to another player during the night. They may not do this alongside their normal night ability unless they can multitask.\n- Forcing the doll onto another player will override the decision of the player with the doll. They will be notified if this is the case.\n- When you roleblock the player with your doll, you will also learn their identity.\n- If the player with your doll is lynched, you will come into possession with the doll again at the beginning of the night and may choose another player to receive the doll.");
		
		e.addField("Goal:", "Have the player in possession of your doll die at night.");
	});

	register_role(["wannabe", "652"], "Mafia", "Wannabe", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 652");

		e.addField("Alignment", "Mafia Espionage", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill a player at night.");

		e.addField("Attributes:", "- Once you kill a player, you will join the mafia chat.\n- Once you kill a player, you will be given 5 random mafia roles, pick one to become permanently.\n- If you pick a Mafia (Espionage) role, you will stay in the mafia chat.\n- The host can decide which roles would be too powerful for Wannabe to remember, and can prevent them from being options.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["sawbones", "653"], "Mafia", "Sawbones", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 653*Joining an organized crime syndicate is one way to get your student loans paid off.*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one member of the Mafia to heal each night. (4 use)");

		e.addField("Attributes:", "- Healing a member of the Mafia acts exactly like a Doctor heal.\n- You may heal yourself.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["phisher", "654"], "Mafia", "Phisher", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 654\n*THIS IS [One Purchase] YOU WILL [Regret] FOR THE REST OF YOUR LIFE!*");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to phish each night.");

		e.addField("Attributes:", "- Phished players will be forced to target you.\n- If your ability would cause you to be killed (including delayed kills, i.e. poison), it will be cancelled, and you will be notified.\n- You will be notified if your target was immune to your phishing.\n- Your target will **not** be notified that they were redirected.\n- You are roleblock and redirect immune.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["fox", "655"], "Neutral", "Fox", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 655");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scream at night, upgrading the attack value of all attacks for the night.");

		e.addField("Attributes:", "- You may only scream once.\n- You may not scream night one.\n- The Town will be notified you have screamed.\n- Every kill during a scream grants you an extra charge.\n- If the Foxes win, you will win regardless of if you are living or have fulfilled your win condition.\n- You have access to the fox night chat if the foxes spawn.");
		
		e.addField("Goal:", "See three players die during a scream.");
	});

	register_role(["deity", "656"], "Umbrae", "Deity", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 656");

		e.addField("Alignment", "Umbra Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Turn an Umbrae's visit astral, you cannot target the Prophet.\n- (Day Ability : {1} Use) Empower the Full Moon and turn it into a Blood Moon.");

		e.addField("Attributes:", "- During the Blood Moon, you have Powerful defense.\n- During a Blood Moon, you may issue a Basic, Astral attack.\n- During the Full Moon, you have Basic defense.\n- If you are the last remaining Umbrae member you will become the Prophet.\n- Detection Immunity\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["prophet", "657"], "Umbrae", "Prophet", {subCat: "Assault"}, (e) =>
	{
		e.setDescription("Post 657");

		e.addField("Alignment", "Umbra Assault", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "None (Variable)", true);

		e.addField("Abilities:", "- Kill a player each night.");

		e.addField("Attributes:", "- Under a full moon you have basic defense.\n- Under a Blood Moon you have powerful attack.\n- Under no moon, you have no defense.\n- Under a Blood Moon your defense is powerful.\n- If you are jailed twice, you may issue your attack inside of jail.\n- Roleblock Immunity.\n- Detection Immunity during non-moon nights.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["invoker", "658"], "Umbrae", "Invoker", {subCat: "Assault"}, (e) =>
	{
		e.setDescription("Post 658");

		e.addField("Alignment", "Umbra Assault", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill one person each night, disguising their cause of death.");

		e.addField("Attributes:", "- You are role block immune.\n- Under a Full Moon, your visit is astral.\n- Under a Blood Moon, you will mimic the mechanics of your disguised cause of death.\n(Werewolf/Pestilence Rampage, Juggernaut's Powerful Attack, Arsonist's Unstoppable Ignition)\n- Detection Immunity during non-moon nights.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["fabricator", "659"], "Umbrae", "Fabricator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 659");

		e.addField("Alignment", "Umbra Support", true);
		e.addField("Attack", "None (Variable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Replace a person's body every Full Moon night.");

		e.addField("Attributes:", "- Killed players will appear as alive to the town until they are voted up to the stand, or if they are visited by another person during the night or any night after they die.\n- A fabricated player being voted up to stand can be pardoned or executed as normal.\n- On Blood Moon nights, you may kill and fabricate a player.\n- A player you have successfully fabricated will be seen as \"Fabricated\" during a death flip, and their last will is not shown.\n- You will know your target's role and will.\n- Detection Immunity during non-moon nights.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["matriarch", "660"], "Umbrae", "Matriarch", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 660");

		e.addField("Alignment", "Umbra Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Empower a teammate when the moon is out.");

		e.addField("Attributes:", "- During a Full Moon, replenish a teammates charge, or let them act twice the next night if they have full charges.\n- During a Blood Moon, choose a teammate to let them use their Blood Moon powers the next night.\n- You can only use the Full Moon ability and the Blood Moon ability on the same person once.\n- You are able to use the Blood Moon ability and the Full Moon ability on the same person.\n- You cannot target the Deity.\n- Detection Immunity during non-moon nights.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["tyro", "661"], "Umbrae", "Tyro", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 661");

		e.addField("Alignment", "Umbra Support", true);
		e.addField("Attack", "None (Variable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player each night, disguising as their role.");

		e.addField("Attributes:", "- During the Blood Moon, you may issue a direct, powerful attack.\n- If the Prophet is killed you will take his place before anyone else.\n- After killing a player, you may choose an untaken Umbrae role to convert into.\n- Roleblock Immunity\n- Control Immunity\n- Detection Immunity during non-moon nights, unless you are disguised.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["seer", "662"], "Umbrae", "Seer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 662");

		e.addField("Alignment", "Umbra Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cloud a players mind once per game, preventing them from receiving feedback.\n- (Day Ability: {1} Use) Call upon the Full Moon to make a blinding fog once per game.");

		e.addField("Attributes:", "- Anyone who was killed in the fog will have their roles shown as (Unknown) and will have their wills cleaned.\n- Cause of death in the fog will be hidden.\n- Calling fog from a blood moon will cause the next days discussion phase to be skipped.\n- The Umbrae will see the cause of death, roles, and wills of those undiscernable by the fog.\n- Detection Immunity during non-moon nights, unless you are disguised.\n- Conversion Immunity");
		
		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["savior", "663"], "Neutral", "Savior", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 663");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Protect one player at night, granting them invincible defense.");

		e.addField("Attributes:", "- If you successfully protect a player, your target's attack will be reflected upon them. This includes astral, indirect, and overkill attacks.\n- Any player you successfully protect have their normal win condition, but can alternatively live to see the game end, and MUST see you alive.");
		
		e.addField("Goal:", "Kill or Convert one player.");
	});

	register_role(["iconoclast", "icon", "664"], "Neutral", "Iconoclast", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 664\n*Such strength...unparalleled. They could bring this town to ruin.*");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Investigate two players, learning their role. This bypasses detection immunity.\n- Choose to call an assembly the following night with all the NKs in the game.");

		e.addField("Attributes:", "- If both of the targets of your investigation are NK roles, they will be united, gaining an alternate win condition of the other winning.\n- During an assembly, all NKs can speak freely. After an assembly has been called until the next night, all NKs can win with each other. If there is no NK victory by that time, you will die.\n- Iconoclast can only roll if there are at least two NK in the game.");
		
		e.addField("Goal:", "Live to see a Neutral Killing win the game");
	});

	register_role(["spirit_medium", "spiritmedium", "sm", "665"], "Neutral", "Spirit Medium", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 665");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Speak with the dead at night, you may use a dead players body, unless they are a killer.");

		e.addField("Attributes:", "- You can use any body an unlimited amount of times.\n- All dead players will win if you live until the end of the game.\n- If your action would cause a player to die (even if its something like a transport), your ability will fail.\n- You will resurrect two days after your death, but the dead players will no longer be able to win with you.");
		
		e.addField("Goal:", "Live to see the end of the game.");
	});

	register_role(["striker", "666"], "Neutral", "Striker", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 666\n*You little thangs ain't worth the cleanup.*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose to wrangle a player at night.\n- Choose to shoot a player with your carmine-crafted blessing-tipped rifle at night (3 use, only usable on Full Moons).");

		e.addField("Attributes:", "- Wrangling a player will roleblock them through immunity and deal an Astral Basic attack to them. It will appear as if your target visited you.\n- Shooting a player with your carmine-crafted blessing-tipped rifle will deal an Unstoppable Astral attack to them. If there's a blood moon out, your attack will be Rampaging. However, if you are visited while using your rifle, you will instead deal a Powerful attack to all players visiting you. You may shoot three players, and you may only shoot during a full moon.\n- Any investigative abilities will show you as innocent and incapable of killing.\n- You are sensible enough to not kill yourself if you somehow end up targeting yourself.\n- You may win with **Loona** if you both spawn.");
		
		e.addField("Goal:", "Kill all who may oppose you.");
	});

	register_role(["loona", "667"], "Neutral", "Loona", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 667");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful/Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Maul a player each night, attacking them and all their visitors with a __Powerful__ attack.\n- If you are visited, your visitors will be silently poisoned with a 2 day delayed __Unstoppable__ attack.");

		e.addField("Attributes:", "- You will role-block all players that threaten to expose you. (Investigation Roles)\n- You may win with the **Striker** if you both spawn.");
		
		e.addField("Goal:", "Kill all who threaten your business. (NK Goal with flavor)");
	});

	register_role(["time_magician", "timemagician", "tm", "time", "668"], "PaleMoon", "Time Magician", {subCat: "Protection"}, (e) =>
	{
		e.setDescription("Post 668");

		e.addField("Alignment", "Pale Moon Protection", true);
		e.addField("Attack", "None (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send someone back in time at night.\n- Once per game, revive a dead Pale Moon.");

		e.addField("Attributes:", "- If they die the same night you send them back in time, their death Is delayed for 2 rounds\n- If they are attacked again while their death Is delayed, they will die.\n- You will revive a dead Pale Moon as a completely lifeless zombie. They cant be voted, talked or whispered to. You may decide to give this Zombie to yourself or any other Pale Moon.\n- If someone attacks a target with a Zombie, the Zombie will die instead.\n- When the PMCS begins, you will gain two charges of revival, and may revive any player. They still cannot be talked, voted or whispered to, nor can they get targeted at night, but you will use them to deal an Astral Unstoppable Attack at a player. If you dont, you will still give them to yourself or another Pale Moon member.");
		
		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["camerata", "669"], "Mafia", "Camerata", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 669\n*\"When everything changes, nothing changes.\" That is the creed of the Camerata.*");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Wield the Transistor, attacking and absorbing a player.\n- Use one obtained ability.");

		e.addField("Attributes:", "- If you are attacking, the Mafia cannot perform a factional kill that night.\n- Players killed by the Transistor will have their abilities granted to you, and they will be able talk in the Mafia faction chat at night.\n- If you die during the day, the Transistor is passed to a random member of the Mafia, allowing them to make attacks and utilise abilities instead of their regular night action. Absorbed abilities and charges carry over.\n- The Transistor may only make three attacks.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

		register_role(["wizard_with_a_gun", "wizardwithagun", "wizard", "gun", "wwag", "wg", "670"], "Coven", "Wizard with a Gun", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 670\n*Ron, Ron! Look what I found! These are so much better than wands!*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fucking shoot someone.");

		e.addField("Attributes:", "- With the Necronomicon, your gun becomes a double barrel shotgun, allowing you to target two players at night and deal Rampage attacks.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["gangster_with_a_wand", "gangsterwithawand", "gangster", "wand", "gwaw", "gw", "671"], "Mafia", "Gangster with a Wand", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 671\n*Don't mess with the magic stick!*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Turn someone into a frog.");

		e.addField("Attributes:", "- Frogging lasts for the next day and night.\n- Frogs must say \"ribbit\" every other message and must react to at least 20 messages with 🐸\n- Frogs cannot hop more than two houses away from them.\n- Frogs will appear as \"Frog\" upon death, and always show up as a Frog to (2467) Frogvestigator.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["wand_with_a_gang", "wandwithagang", "wand", "gang", "wwag", "wg", "672"], "Town", "Wand with a Gang", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 672\n*You better... wait, what?*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cast a spell on a player each night, using another random Town Support role's ability on them. You will know what ability you used.\n- Sic your gang on a player at night, attacking them once at each priority layer. Each attack is considered a different ability that can each individually be redirected, prevented, etc. You may only sic your gang on a player once.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["triangle", "673"], "Neutral", "Triangle", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 673\n*⚠️ You're in danger!⚠️*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Invincible)", true);

		e.addField("Abilities:", "- During the day, choose three targets. At night, you may choose to either:\n> - Transport them (1 -> 2, 2 -> 3, 3 -> 1)\n> - Roleblock them\n> - Redirect them all to a player of your choice.\n> - Kill them (1 use)");

		e.addField("Attributes:", "- You may not target yourself, but you may redirect targets to yourself.\n- You have Invincible defense on nights divisible by three.\n- If there are less than three valid targets, you may not perform any abilities.\n- Roleblock and redirect immune");

		e.addField("Goal:", "See the Town lose the game.");
	});

	register_role(["wirefly_hive", "wireflyhive", "wirefly", "hive", "wh", "674"], "Neutral", "Wirefly Hive", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 674");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose a player to swarm.");

		e.addField("Attributes:", "- At the beginning of the night after you swarm a player, grant them Basic defense for the night. Then, flip a coin. If you win the flip, increase your attack value by two stages for the night (it starts at None), and increase your target's defense by one stage, and if you lose the flip, set your attack value back to None. Then, you may attack your target, which resolves immediately. If you don't, repeat this process.\n- You may repeat your process as many times you have time in the night, but you can't \"flip the coin up to a googolplex times until I win 80 flips in a row and can kill my target\". You have to manually go through every flip with the host.\n- You can increase your attack value and your target's defense value indefinitely (They become something like Overoverover...overoverkill).\n- You can pretty much give up once your target's at Overoveroverprotective and you're back at None.");

		e.addField("Attributes:", "- Once you're done flipping, or when the night ends, your target will learn that they were swarmed by a 674: Wirefly Hive and the exact sequences of wins and losses you got.\n- You have a Basic autovest.");

		e.addField("Goal:", "See the Town lose.");
	});

	register_role(["grave_watcher", "gravewatcher", "grave", "watcher", "gw", "675"], "Town", "Grave Watcher", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 675\n*The Grave Watcher's abilities are fueled by the souls that pass them by.*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch the town from afar and take note of anyone who targets or interacts with dead players tonight.\n- Guard a player, protecting them with Powerful defense and preventing one visit on them. If the target is visited multiple times, prevent a random visit with the highest priority. This ability is regarded as having the highest possible priority. [Unlocked upon three Town deaths.]\n- Strike a target with a shovel. Deals a Basic attack if the target is non-Town, but will backfire and hit the Grave Watcher instead if their target is a Town member. [Unlocked upon two non-Town deaths.]");

		e.addField("Attributes:", "- Gain roleblock and conversion immunity. [Unlocked upon two total deaths.]\n- Gain a focused mind, able to multitask and self-target. [Unlocked upon four total deaths.]\n- Gain Basic defence. [Unlocked upon six total deaths.]\n- The Grave Watcher’s vote now counts as three. [Unlocked upon eight total deaths.]");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["archmage_of_blood", "archmageofblood", "archmage", "blood", "aob", "ab", "676"], "Coven", "Archmage of Blood", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 676");

		e.addField("Alignment", "Coven Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, sacrifice the blood of another Coven member, permanently reducing their defense by 1. **You may self-target.** If you sacrifice a Coven member when they are at Vulnerable defense, they die.\n- Attack a player at night with a sword, dealing a Basic attack.\n- Infuse your sword with blood, increasing the attack to Powerful. Costs 1 Blood Soul.\n- Cast a projectile at a target, dealing an Astral Basic attack. Costs 2 Blood Souls.\n- Launch a fury of blood at a target, decimating them and dealing an Unstoppable Rampage attack. Costs 5 Blood Souls and requires the Necronomicon.");

		e.addField("Attributes:", "- You start with 2 Blood Souls. You gain 1 for each Coven sacrifice, and 1 for each person that a member of the Coven (except you, excluding your first two abilities) kills.\n- With the Necronomicon, you unlock an additional ability, and sacrificing Coven members grants 8 Blood Souls.\n- If you are the final Coven member, you may sacrifice other players, however you cannot reduce their defense beyond None.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["phlebotomist", "phleb", "677"], "Town", "Phlebotomist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 677\n*Don't question my methods if they work.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, take two people's blood samples. You will learn their blood types.\n- At night, watch someone. You will learn the blood type of all of their visitors and whoever your target visited, though not exactly who these are. You get these results separate from one another.");

		e.addField("Attributes:", "- At the start of the game, everyone is assigned a random blood type (A, B, AB, O) excluding positives and negatives. Each person has a 40% chance of O, 30% chance of A, 20% chance of B and 10% chance of AB. This is hidden to them.\n- When someone's death is revealed, you will learn the blood type of their killer.\n- You may target dead people with your day ability.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["daolaogui", "doal", "678"], "Spirit", "Daolaogui", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 678\n*\"This rain... the wind... I fear we're being haunted by a Daolaogui. Cover your ears.\"*");

		e.addField("Alignment", "Spirit Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Take over a player's body and control them into another. You'll learn your first target's role and feedback. Your target will send a deafening scream at whoever you control them into, roleblocking the secondary target and preventing them from communicating the next day.");

		e.addField("Attributes:", "- Upon spawning in the game, you'll shroud the Town in violent rain and roaring winds. Players will only be able to visit targets up to five houses away from them. Spirits and Astral users aren't affected by this. Your powers will wear off by the start of Night 4 and this attribute will no longer apply.\n- Each day, for every player who whispers to you, you may use your ability one extra time the following night.");

		e.addField("Goal:", factions.Spirit.goal);
	});

	register_role(["sleuth", "679"], "Sentry", "Sleuth", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 679");

		e.addField("Alignment", "Sentry Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tag a player's house during the night and/or remove a tag from a player's house during the day.\n- Learn the names of everyone who visited a (currently) tagged player (during/after their tagging). 1 Use.");

		e.addField("Attributes:", "- All players who cannot win with a \"good\" faction using their current role will be notified when a player is tagged, or when their tag is removed.\n- You gain an extra use of your second ability every time a kill-capable role incapable of winning with a \"good\" faction dies.");

		e.addField("Goal:", factions.Sentry.goal);
	});

	register_role(["rasen", "680"], "Discordian", "Rasen", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 680");

		e.addField("Alignment", "Discordian Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use any ability with a title at night, like 1197: Echo's Triple Tap or 632: Glacier's Arctic Cold.");

		e.addField("Attributes:", "- At the beginning of the game, you may change up to five words anywhere in the Grand Idea Mafia (hell) Comprehensive Rules document to any other word each other than \"Discordian(s)\" for the duration of the game. Those rules take precedence over any other rules for that game.");

		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["privateer", "681"], "Mafia", "Privateer", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 681");

		e.addField("Alignment", "Mafia Espionage", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform the Factional Mafia Kill for the Mafia. 3 Uses\n- Select a player to raid during the day.");

		e.addField("Attributes:", "- If you perform the Factional Mafia Kill, you will deal a Powerful attack. The Mafia will still decide who you target and not be made aware of this.\n- During the night, you will raid the player you chose during the day. You will roleblock your target, and you will both play the Pirate's Scimitar/Pistol/Rapier minigame. If you win, however, you will reduce their defense to none for the current and next night instead of killing them.\n- If you are in the process of raiding a player, you may not replace the Factional Mafia Kill.");
		
		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["despot", "682"], "Insurgency", "Despot", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 682");

		e.addField("Alignment", "Unique Insurgency Head", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Give a random Insurgent a bomb during the day.\n- Give a bomb to a specific player during the day instead.\n- Learn the name of another Insurgent player during the night. 1 Use\n- Attack a target during the night IF there are no other Insurgents. You will be informed when this is the case.");

		e.addField("Attributes:", "- When given a bomb, the player may, instead of their normal night action, perform a basic attack to a chosen player. However, if this chosen player is also an Insurgent, they will instead hand the bomb to them for use the next night.\n- If you die, a random Insurgent will be promoted to the Despot. Insurgent (Informant)s are prioritized last.\n- Detection immunity to the Sheriff.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["consultant", "consult", "683"], "Insurgency", "Consultant", {subCat: "Informant"}, (e) =>
	{
		e.setDescription("Post 683");

		e.addField("Alignment", "Unique Insurgency Informant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Wiretap a player during the night.\n- Copy a player's last will during the day. 3 Uses.");

		e.addField("Attributes:", "- When you wiretap a player, you will be given all notifications given to them from then on.\n- When you copy a player's last will, you will be able to read it yourself.\n- You will be notified if any whispers to and from you are eavesdropped or interfered with; when this happens, you may choose to edit what the contents of the whisper appears to be to the eavesdropper.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["insider", "684"], "Insurgency", "Insider", {subCat: "Informant"}, (e) =>
	{
		e.setDescription("Post 684");

		e.addField("Alignment", "Unique Insurgency Informant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player for their exact role during the Night.\n- Pretend to do the action of the role you're disguised as during the Night. May be used in conjunction w/ Investigation.\n- Invite a player into communications with you during the day.");

		e.addField("Attributes:", "- The night after inviting a player, they will permanently be put into a private channel with you and any other invited players.\n- Before the start of the game, you will be assigned to infiltrate a random (EXISTANT) evil faction. You may choose a role in that faction to appear as. You will be placed into that evil faction, appearing as that role to all other players in the evil faction.\n- You may not appear to be a \"leader\" type role (i.e. Godfather, Coven Leader/Lich, Sun (Production), Rock (Killing), etc.)\n- Cannot be rolled w/ only one evil faction.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["rogue", "685"], "Insurgency", "Rogue", {subCat: "Saboteur"}, (e) =>
	{
		e.setDescription("Post 685");

		e.addField("Alignment", "Insurgency Saboteur", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Confuse a player during the night.\n- Report to a player during the day. 2 Uses");

		e.addField("Attributes:", "- Confused players will be roleblocked, but won't be informed of such. Investigative roles will still gain results, however these results will be randomized. In cases where they view people (i.e. Lookout and Tracker), report the correct number, but randomize which people.\n- When you report to a player during the day, they will gain your exact role if they are an Insurgent.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["elite", "686"], "Insurgency", "Elite", {subCat: "Saboteur"}, (e) =>
	{
		e.setDescription("Post 686");

		e.addField("Alignment", "Insurgency Saboteur", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to bribe a player during the day. 2 Uses");

		e.addField("Attributes:", "- When you attempt to bribe a player, they will be notified. They may choose to accept or deny the bribe. Accepting the bribe gives you their exact role. Denying the bribe has no effect.\n- You have 2 extra votes you may use each day. They will only be labeled as the Elite's votes, however you may not change them after voting.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["herring", "687"], "Insurgency", "Herring", {subCat: "Saboteur"}, (e) =>
	{
		e.setDescription("Post 687");

		e.addField("Alignment", "Insurgency Saboteur", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Size up a player's house during the night, removing their defense that night and blocking all Town Protective abilities on them from succeeding.\n- Read into a player during the day, learning whether or not they are a member of the Town or not. 2 Uses.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["deserter", "688"], "Insurgency", "Deserter", {subCat: "Hitman"}, (e) =>
	{
		e.setDescription("Post 688");

		e.addField("Alignment", "Insurgency Hitman", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Storm a player's house during the night. 3 Uses\n- Determine if a player is kill-capable during the day. 2 Uses.");

		e.addField("Attributes:", "- When you storm a player's house during the night, you will check if they have a kill-capable ability. If they do, you will attack them, and roleblock them past immunity.\n- Any player capable of performing a factional kill will come up as kill-capable when you check them, along with normal kill-capable roles.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["zealot", "689"], "Insurgency", "Zealot", {subCat: "Hitman"}, (e) =>
	{
		e.setDescription("Post 689");

		e.addField("Alignment", "Unique Insurgency Hitman", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player during the night.\n- Probe a player during the day, learning if they have ever publicly voted for an Insurgent (even if rescinded). 2 Uses.");

		e.addField("Attributes:", "- This attack will rampage. You will also attack yourself in the process.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["virtuoso", "virt", "690"], "Insurgency", "Virtuoso", {subCat: "Hitman"}, (e) =>
	{
		e.setDescription("Post 690");

		e.addField("Alignment", "Insurgency Hitman", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Confiscate a player's weaponry during the day.\n- Interrogate a player during the night, determining whether they are Suspicious (Sheriff results). 2 Uses");

		e.addField("Attributes:", "- If your confiscation target were to use an ability capable of killing the following night, you will roleblock them past immunity. You will then gain one use of that exact attack. You *may* confiscate bombs, if it isn't implied enough.");
		
		e.addField("Goal:", factions.Insurgency.goal);
	});

	register_role(["governor", "gov", "691"], "Loyalist", "Governor", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 691");

		e.addField("Alignment", "Loyalist Head", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful (None)", true);

		e.addField("Abilities:", "- During the day, you may reveal yourself as the Governor, regaining your position to gain 3 total votes during the day. You cannot reveal if another role with a revealing ability already has and is alive.");

		e.addField("Attributes:", "- Powerful Defense until attacked twice.\n- You will not know who is a Loyalist, but you will know their roles. You cannot access the Loyalist chat, and you cannot perform any Loyalist factional ability. If all other Loyalists die, you will be notified, and you can perform the factional kill.\n- You cannot, under any circumstances, have your goal or role changed while other Loyalists are alive.");
		
		e.addField("Goal:", "Survive to the end of the game and eradicate those who will not submit to the Governor's rule.");
	});

	register_role(["militant", "692"], "Loyalist", "Militant", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 692");

		e.addField("Alignment", "Loyalist Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- You may only use your ability twice, and it will only succeed on Town roles. This does not affect the factional kill if you perform it.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["scribe", "693"], "Loyalist", "Scribe", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 693");

		e.addField("Alignment", "Loyalist Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Predict if a role exists. You will know if it does or doesn't.");

		e.addField("Attributes:", "- On even number nights, if the role does exist, you will get 5 names, at least one is that role. If it doesn't exist, you will know how many roles of that alignment do. \"Exist\" does not include the dead, unless their role was hidden.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["state_knight", "stateknight", "state", "694"], "Loyalist", "State Knight", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 694");

		e.addField("Alignment", "Loyalist Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect a player at night, granting Powerful defense and killing any non-Loyalist attacker.");

		e.addField("Attributes:", "- If you visit the same player as a Loyalist, you will instead attack the person the next night. You will not give the target Powerful defense or kill any attackers. You may protect someone the night you are attacking someone.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["fraudster", "fraud", "695"], "Loyalist", "Fraudster", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 695");

		e.addField("Alignment", "Loyalist Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reverse the votes the following day. Whoever has the *least* votes will be lynched. In a tie, a random non-Loyalist target will be selected. A Loyalist can only die to this if they are the only one with the lowest votes.");

		e.addField("Attributes:", "- You may only do this twice.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["deceptionist", "decep", "696"], "Loyalist", "Deceptionist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 696");

		e.addField("Alignment", "Loyalist Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target a player. If they die, you may change their full last will, cause of death, and role. You will receive all correct information. You will also steal their ability for one night.");

		e.addField("Attributes:", "- The night after you successfully use your main ability, you cannot use it. You must do nothing or use your stolen ability. If you are the only Loyalist left, aside from the Governor, you may perform the factional kill and use your ability in the same night. You may only do this once.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["assassin", "697"], "Loyalist", "Assassin", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 697");

		e.addField("Alignment", "Loyalist Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, guess a player's role. If you correctly guess it, you will immediately kill them. Required votes to lynch will be decreased as needed, and their vote will no longer count. The Town will only be told that an Assassin killed your target. If your guess is incorrect, you will kill yourself.");

		e.addField("Attributes:", "- You may only use your ability twice. If your target is immune to your attack, both of you will survive, and the Town will receive no notification.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["field_medic", "fieldmedic", "fm", "medic", "698"], "Loyalist", "Field Medic", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 698");

		e.addField("Alignment", "Loyalist Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect a player at night, giving them Powerful defense. If they are not attacked, you will learn their role. If they are attacked, you will learn the attacker's name, even if you cannot save your target. Loyalist killers will bypass the defense you give and do not count as an attack to you.");

		e.addField("Attributes:", "- You will learn the names of all killers, if multiple target your target.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["propagandist", "propogandist", "prop", "699"], "Loyalist", "Propagandist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 699");

		e.addField("Alignment", "Loyalist Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player at night. Said player will be unable to vote or whisper the next day. If they are roleblock immune, they will be able to whisper, but not vote.");

		e.addField("Attributes:", "- Roleblock Immunity");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});

	register_role(["illuminator", "ill", "700"], "Loyalist", "Illuminator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 700");

		e.addField("Alignment", "Loyalist Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Illuminate a bright path at night at someone's house, causing anyone with Basic defense or lower to be unable to see when trying to visit them, and end up visiting someone else entirely.");

		e.addField("Attributes:", "- Unless this absolutely would break the game, (determined by hosts), Control immunity will not stop this.");
		
		e.addField("Goal:", factions.Loyalist.goal);
	});
};
