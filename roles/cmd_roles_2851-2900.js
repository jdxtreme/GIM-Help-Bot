//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["powerstones", "ps", "2851"], "Neutral", "Power Stones", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2851\n*Guys, I changed it! Now it has a different mechanic!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use one stone on someone to deal a Basic attack.\n- Use two stones on someone to deal a Powerful attack.\n- Use three stones on someone to deal an Unstoppable attack.\n- Use four stones on someone to deal an Overkill attack.\n- Use five stones on someone to deal an Overoverkill attack.");

		e.addField("Attributes:", "- You have five stones each night.\n- You may use as many abilities as you like as long as you have enough stones.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["pow", "ps", "2852"], "Neutral", "Pow", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2852\n*Guys, I nerfed it! Only 3 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to three players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["po", "ps", "2852"], "Neutral", "Po", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2852\n*Guys, I nerfed it! Only 2 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to two players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["p", "ps", "2853"], "Neutral", "P", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2853\n*Guys, I nerfed it! Only 1 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to one player each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["", "ps", "2854"], "Neutral", "‎ ", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2854\n*Guys, I nerfed it! Only 0 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to zero players each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["ꟼ", "backwardsp", "backwardp", "p", "ps", "2855"], "Town", "ꟼ", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2855\n*Guys, I nerfed it! Only -1 KPN, guys!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Negative (544)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to one player each night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["s", "ps", "2856"], "Town", "s", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2856\n*Guys, I nerfed it! Only -1 KPN, guys!*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Revive up to one player each night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bob", "bobthebuilder", "builder", "btb", "bullettimebattle", "2857"], "Neutral", "Bob the Builder", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2857");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Build a house. Everyone will learn that there is a house.");

		e.addField("Attributes:", "- First person to go into any given house increases their defense by 2 tiers. Anyone can claim this in their private channel, first come first server. No one knows who goes into any given house.");

		e.addField("Goal:", "Get 3 people in houses.");
	});

	register_role(["scp-993", "scp993", "2858"], "SCP", "SCP-993", {subCat: "Safe"}, (e) =>
	{
		e.setDescription("Post 2858\n*SCP-993's anomalous properties become obvious when the program is viewed. Anyone watching aged ten years or older will immediately fall unconscious when the program begins and will remain incapacitated until the end of the program, later reporting a stabbing headache immediately before blacking out. Children under the age of ten viewing SCP-993 later report that it teaches and advocates activities such as cannibalism, murder, torture, [DATA EXPUNGED]. These activities appear to become ingrained in the subject's mind; repeated exposure to SCP-993 can result in permanent psychotic and schizophrenic symptoms.*");

		e.addField("Alignment", "SCP Safe", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Every night, you may choose to either control another player, or convince another player to deal a basic attack to another player for you.");

		e.addField("Attributes:", "- You visiting another player is astral.\n- You will learn 3 roles that they could be.");

		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["traveller", "2859"], "Neutral", "Traveller", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2859");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Each night, visit a player's house and give them a souvenir. Souvenirs may be used in the mentioned phase and the player can multitask it. ");

		e.addField("Attributes:", "- You can't give more than one souvenir to a person and you can never self-target. You may only give each souvenir once.\n- You will learn the faction of people who you visit.\n- This role can't spawn if there are more than 4 factions.\n- Souvenirs:\n> Wooden Ornmanets: The player will gain Powerful defence during the night it's used.\n> Glass Pegasus: When used during the night, the player will be able to read whispers during the next day.\n> Cookies: When used during the day, the player's vote will count as 2.\n> World Map: The player will learn who visited them during the night it's used.\n> Novel: When used during the night on a specific target, the player will find the target's role.\n> Chocolate: When used during the night, the player will become lynchproof during the next day.");

		e.addField("Goal:", "Give one souvenir to a member of every faction in the game including Neutrals.");
	});

	register_role(["confused_marksman", "confusedmarksman", "marksman", "cm", "2860"], "Town", "Confused Marksman", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2860");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Mark a player each night. (You must mark on night 1)");

		e.addField("Attributes:", "- You have a 85% chance of marking yourself.\n- On the next night, if you have marked yourself, you die. If you have marked another player, learn their faction.");

		e.addField("Goal:", "Learn another players faction, and if they are evil get them voted out. (Otherwise, Town goal.)");
	});

	register_role(["loosehead_prop", "looseheadprop", "loosehead", "lhp", "lp", "2861"], "Rugby", "Loosehead Prop", {subCat: "Forward"}, (e) =>
	{
		e.setDescription("Post 2861\n*\"Coach can I start?\"*");

		e.addField("Alignment", "Rugby Forward", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose 3 players to Shoulder Charge.\n- If you target the Ball-carrier, steal possession of the Ball.\n- All non-evil targets are roleblocked.\n- The day after using your ability, you will be Yellow Carded unless at least one of your targets was the Ball-carrier, forcing you to not be able to speak as if you were blackmailed. (If for some reason, you were forced to speak under blackmail, you would say \"I am Yellow Carded\".)");

		e.addField("Attributes:", "- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["tightheadprop", "tighthead_prop", "tighthead", "thp", "tp", "2862"], "Rugby", "Tighthead Prop", {subCat: "Forward"}, (e) =>
	{
		e.setDescription("Post 2862\n*You have the balls to cheat and need to cheat to get the balls.*");

		e.addField("Alignment", "Rugby Forward", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, use an Illegal Technique that was not used the previous night.\n- After using an Illegal Technique, you will be Yellow Carded, forcing you to not be able to speak as if you were blackmailed.");

		e.addField("Attributes:", "- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Illegal Techniques:", "- High Tackle: Deal a basic attack to a player.\n- Obstruction: Target a Rugby player who has the Ball. Gain powerful defense and redirect any attacks they get to yourself.\n- Bring Down Maul: Target two players. Reduce their defense level by 1.");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["hooker", "2863"], "Rugby", "Hooker", {subCat: "Forward"}, (e) =>
	{
		e.setDescription("Post 2863\n*They only have one joke.*");

		e.addField("Alignment", "Rugby Forward", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, you may take the Ball from any Rugby player.\n- Each night you fail to kill a player with the Ball, your attack level increases by 1 until you lose the Ball.");

		e.addField("Attributes:", "- You know the name of any non-Rugby player who steals the Ball.\n- At night, if you have the Ball and successfully kill someone, you instead pass the ball to your second target and don't attack them.\n- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["scrum-half", "scrumhalf", "sh", "2864"], "Rugby", "Scrum-Half", {subCat: "Back"}, (e) =>
	{
		e.setDescription("Post 2864\n*\"I'm open! I'm open!\" - never gets the ball*");

		e.addField("Alignment", "Rugby Back", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, a Rugby player Ball-carrier may choose to target you to pass the ball to you instead of doing the factional kill.\n- At night, choose two players. The first player is controlled to visit the second player.");

		e.addField("Attributes:", "- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["fly-half", "flyhalf", "fh", "2865"], "Rugby", "Fly-Half", {subCat: "Back"}, (e) =>
	{
		e.setDescription("Post 2865\n*greediest player*");

		e.addField("Alignment", "Rugby Back", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, mark a player to Grapple, role-blocking them.\n- When you possess the Ball and kill someone, you kill the last Grappled player as well as your second target.");

		e.addField("Attributes:", "- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["centre", "2866"], "Rugby", "Centre", {subCat: "Back"}, (e) =>
	{
		e.setDescription("Post 2866\n*we're playing rugby, he's playing 4d chess*");

		e.addField("Alignment", "Rugby Back", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose to Analyze a player up to 3 times.\n- When you Analyze, you learn the names of all players who visited them and who they visited.");

		e.addField("Attributes:", "- When you lose possession of the Ball, you learn the name of the player who stole it.\n- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["winger", "2867"], "Rugby", "Winger", {subCat: "Back"}, (e) =>
	{
		e.setDescription("Post 2867\n*duwiiton went on a 4-month break from discord because he was playing winger and got concussed*");

		e.addField("Alignment", "Rugby Back", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose a player to Zoom Past.\n- When you gain possession of the ball, you astrally roleblock all players you Zoomed Past, and they can't attack you.");

		e.addField("Attributes:", "- You appear innocent.\n- Factional chat\n- Gains powerful defense if carrying the Ball\n- Replaces abilities with factional kill if carrying the Ball");

		e.addField("Goal:", factions.Rugby.goal);
	});

	register_role(["can't", "cant", "2868"], "Neutral", "Can't", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2868");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You can't (pick 1 per night):\n> - Die for the night. 3 uses.\n> - Be lynched the next day. 2 uses.\n> - Be visited (all players visiting you will be roleblocked) for the night. 2 uses.‎");

		e.addField("Attributes:", "- You can't:\n> - Be changed (conversion immunity).\n> - Be blocked (roleblock immunity).");

		e.addField("Goal:", "Survive until the end of the game.");
	});
	
	register_role(["blackmailer", "blackmailor", "2869"], "Mafia", "Blackmailor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2869");

		e.addField("Alignmont", "Mafia Support", true);
		e.addField("Attack", "Nono", true);
		e.addField("Dofonso", "Nono", true);

		e.addField("Abilitios:", "‎- Chooso ono porson oach night to Blackmail.");

		e.addField("Attributos:", "- Blackmailod targots cannot talk or roact during tho day.\n- You can hoar privato mossagos.");

		e.addField("Goal:", "Kill anyono that will not submit to tho Mafia.");
	});
	
	register_role(["athiest", "atheist", "2870"], "Neutral", "Athiest", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2870\n*What if... their were no evils?*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, you may initiate a vote against the host. If the host dies, all good players win. If the host does not die, all players lose. Their will not be a public announcement on a vote being called, it is player run. \n- You will be given a different role each night, until the same number of nights passed as players. If the game goes to the night with the same number of players, without the host being executed, every player automatically loses. The roles given is completely random. ‎");

		e.addField("Attributes:", "- The host may break all the rules in rasen-rules they are able to, assuming this role is in the game. \n- If this role roles, all players have the \"see the host fall\" win condition. (They are not informed of this)\n- Everybody has immortal defense if this role is in game.\n- If investigated, you will appear as a random role.");

		e.addField("Goal:", "Slay the host.");
	});
	
	register_role(["blackmailer", "blockmailor", "2871"], "Mafia", "Blockmailor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2871");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Choose one person each night to Block their mail.");

		e.addField("Attributes:", "- Blockmailed targets are blocked from talking or reacting during the day.\n- You can hear private messages.");

		e.addField("Goal:", factions.Mafia.goal);
	});
	
	register_role(["spaggyt3", "spaggy", "2872"], "Discordian", "Spaggyt3", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2872");

		e.addField("Alignment", "Discordian Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Force all TI’s to go onto you.\n- Badly fake claim, giving yourself the ability of an evil role of your choice for the night.‎");

		e.addField("Attributes:", "- The evil role you choose cannot be able to kill more than one person.\n- When using your first ability, TIs will be notified that “There’s someone else that’s caught your attention, so you checked them instead.”\n- You’re always suspicious.\n- If you’re hung, complain how everyone is always targeting you, and then don’t get hung. (1 time)\n- The first person to attempt to hang you again after this is immediately dealt an overkill attack. This cannot be prevented.");

		e.addField("Goal:", factions.Discordian.goal);
	});
	
	register_role(["systemssoftwarespecialist", "softwarespecialist", "sss", "1535u", "2873"], "Unseen", "Systems Software Specialist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2873\nConverted from: Operator (1535)");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Debug someone each night, learning the 50-role file their post number falls into.\n- Encrypt someone during the day. The host will nerf their role card in a method of their choosing, only fading once you die. (1 day cooldown)");

		e.addField("Attributes:", "- While you are alive, all Unseen roles are immune to effects that would permanently change their roles, such as conversion, ability granting/stealing effects, etc.\n- At the beginning of the game, or as soon as you are converted, one 50-role file doesn't exist. The file must not contain any player's role in it. Roles in this file cannot be copied or referred to by any abilities. You know what file this is; the town doesn't.");

		e.addField("Goal:", factions.Unseen.goal);
	});
	
	register_role(["bee-ssionary", "beessionary", "1175u", "2874"], "Unseen", "Bee-ssionary", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2874\nConverted from: Beekeeper Hivemind (1175)");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee to sting a player, disabling their ability for one day and one night.\n- Use 2 bees to investigate a player, learning their role and who they visit.\n- Use 3 bees to deal a Powerful attack to a player. Visitors to that player will be stung (see first ability).‎");

		e.addField("Attributes:", "- You will earn 1 bee every night. You may use up to two bee abilities each night.\n- All Unseen (or Beekeeper if present) players have your other abilities and attributes in addition to their own.\n- All other players will think they have the abilities and attributes of (1175) Beekeeper Hivemind. However, the ability will fail in some way if attempted to use.");

		e.addField("Goal:", factions.Unseen.goal);
	});
	
	register_role(["celestial_eye", "celestialeye", "ce", "2277u", "2875"], "Unseen", "Celestial Eye", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 2875\nConverted from: All-Seeing Eye (2277)");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Observe three players tonight. You will learn everyone who visits them. You receive each result individually.‎");

		e.addField("Attributes:", "- You cannot self-target.\n- If you watch an Unseen member, you will grant them Basic defense against direct attacks and deal a Basic attack to any attackers. \n- You cannot watch the same Unseen member twice in a row, nor can you watch three Unseen members in the same night.\n- Your visits are Astral.");

		e.addField("Goal:", factions.Unseen.goal);
	});
	
	register_role(["teleporter", "2876"], "Town", "Teleporter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2876\n*Don't worry! Disintegration is harmless if we just reassemble you at another location!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- Kill two players each night. Then, immediately add two new players to the game with the names and roles of the players killed this way.");

		e.addField("Attributes:", "- The players you kill each control the new players added with their roles and names.\n- Each new player enters the game one spot below the player you killed that does not control them on the player list.\n- Once the new players are added, the dead players you killed are permanently removed from the game if they're dead and their roles and wills aren't revealed. \n- If you fail to kill a player for any reason, there will simply be two of them I guess.\n- You have redirect immunity.");

		e.addField("Goal:", factions.Town.goal);
	});
	
	register_role(["bloodlust", "2282u", "2877"], "Unseen", "Bloodlust", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 2877\nConverted from: Reformed Murderer (2282)");

		e.addField("Alignment", "Unseen Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night. They will die, no matter what.\n- Attempt to reach out to someone during the day. (2 Uses)‎");

		e.addField("Attributes:", "- At the beginning of the game, a random faction (with a factional kill) will be selected. All kills done by you will appear to have been from that faction. It may or may not be an actual faction in the game, it just needs to have a factional kill.\n- Roleblock, control, redirect, and prevention immune.\n- You must kill someone every night.\n- If you reach out to a member of the Unseen, you will join their factional chat. Otherwise, nothing happens.\n- If you run out of uses for your second ability, your win condition will change to “Kill all who would oppose you.”");

		e.addField("Goal:", factions.Unseen.goal);
	});
	
	register_role(["yourlordandsavior", "yourlordandsaviour", "lordandsavior", "lordandsaviour", "ylas", "yls", "2536u", "1596u", "2878"], "Unseen", "Your Lord and Savior", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2878\nConverted from: Priest to Higher Powers (1596) or The Higher Powers (2536)");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Ask any question during the night. You will learn the answer.\n- Smite someone at night, killing them. (3 uses, ∞ if last Unseen)\n- Reach out to someone at night. (0 uses)");

		e.addField("Attributes:", "- You may multitask.\n- You cannot be promoted to the Assassin.\n- You gain one use of your third ability every time an Unseen member that you didn’t convert dies.\n- Reaching out to someone will convert them to the Unseen. If they are Town, they will be converted to their Unseen variant. If they are not Town, they will keep their role card but join your factional chat and gain your win condition.");

		e.addField("Goal:", factions.Unseen.goal);
	});
	
	register_role(["thegamemaster", "gamemaster", "tgm", "gm", "2879"], "Town", "The GameMaster", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 2879\n*We can be stronger… Together*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- ‎You can see into private channels, administer actions, votes, and have the same power the host does. The hosts decisions override your own.\n- You are allowed to redirect two people per game, and whoever you redirect cannot be attacked for the night.");

		e.addField("Attributes:", "- You cannot vote or speak.\n- Nobody will be able to target you with actions or vote you.\n- If you are caught making a mod error, you automatically lose.\n- If you prevent the host from making a mod error, you get one more use of your ability.");

		e.addField("Goal:", "Ensure the game runs without any errors being made, or see the town win.");
	});
	
	register_role(["powerfulstone", "ps", "2880"], "Neutral", "Powerful Stone", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2880\n*Guys, I buffed it! Only 13 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to thirteen players each night.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
	
	register_role(["jeanettebelleville", "jeanette", "belleville", "jb", "2881"], "City", "Jeanette Belleville", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2881\n*\"J-Just because it's evil and horrible and gross and disgusting doesn't mean it's bad!\"*");

		e.addField("Alignment", "City Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 parasite to sting a player, preventing them from voting the following day.\n- Use 2 parasites to roleblock another player.\n- Use 3 parasites to deal a powerful attack to a player.‎");

		e.addField("Attributes:", "-  You will earn 1 parasite every night. You can use 2 abilities per night.");

		e.addField("Goal:", factions.City.goal);
	});
	
	register_role(["powerfulnessificationieststone", "powerfulnessificationiest", "ps", "2882"], "Neutral", "Powerfulnessificationiest Stone", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2882\n*Guys, I buffed it! Only 30 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to thirty players each night.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
	
	register_role(["powerfulsupercalifragilisticexpiralidociosstone", "powerfulsupercalifragilisticexpiralidocios", "supercalifragilisticexpiralidociosstone", "ps", "2883"], "Neutral", "Powerfulsupercalifragilisticexpiralidociosstone Stone", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2883\n*Guys, I buffed it! Only 100 KPN, guys!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack up to one hundred players each night.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
	
	register_role(["stone", "ps", "2884"], "Neutral", "Stone", {subCat: "Benign", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2884\n*Guys, I balanced it! Only 0 KPN, guys!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Goal:", "Live to the end of the game.");
	});

	register_role(["vigormortis", "vm", "2885"], "Neutral", "Vigormortis", {subCat: "Demonic"}, (e) =>
	{
		e.setDescription("Post 2885");

		e.addField("Alignment", "Neutral Demonic", true);
		e.addField("ATTACK", "Basic", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Each night, choose a player: they die. Evils you kill this way keep their ability and roleblock 1 Town neighbor. Your kills are cleaned.‎");

		e.addField("Attributes:", "- You appear innocent.\n- If you survive until the end of the game, all evils will win, and the good faction will automatically lose.‎\n- All Neutral Killing roles and REF's are aware of who you are at the start of the game, and have an alternate wincon of protecting you whilst eliminating all Good faction members.");

		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["luka", "2886"], "Discordian", "Luka", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2886\n*I dont know what to write here.*");

		e.addField("Alignment", "Discordian Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- **Battle!** (One Use): Engage in a mock pokemon battle with somebody, choosing an OU viable pokemon. They will do the same, if they do not one will be provided for them from the host. It will be 1 on 1. You then will engage in a battle, using the smogon damage calculator as a gauge for damage taken and damage received. If they lose this battle, they are instantly modkilled.\n- **Lillie GIF**: Send your target any gif of Lillie. If they respond with anything positive, they get to live. If they do not, you will attack them.\n- **Extermination** (Two Uses): Your target instantly dies. On D10, town will host a vote on weither they should let any of your targets live. Targets who are voted yes on get to live, targets who are voted no on get to die.");

		e.addField("Attributes:", "- You may multitask, however, you can only use each ability once in a night.\n- You're always seen as non-suspicious.‎");

		e.addField("Goal:", factions.Discordian.goal);
	});

	register_role(["badkahost", "kahost", "bkh", "rasen", "2887"], "Neutral", "Bad KA Host", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2887\n*@Bionic and @Accentillia have been placed in a Duel?!! Accent wins the Duel?!! @Bionic and @Accentillia have been placed in a Duel?!! Accent wins the Duel?!! @Bionic and @Accentillia have been placed in a Duel?!! Accent wins the Duel?!! @Bionic and @Accentillia have been placed in a Duel?!! Accent wins the Duel?!! @Bionic and @Accentillia have been placed in a Duel?!! Accent wins the Duel?!! @Bionic and @Accentillia have been placed in a Duel?!! Accent wins the Duel?!! @Bionic and @Accentillia have been placed in a Duel?!! Accent wins the Duel?!! @Bionic and @Accentillia have been placed in a Duel?!! Accent wins the Duel?!!*");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Hellbent\n*(You can't die at night. Whenever you're visited at night, you take 1 damage. Once you take 5 damage, you die.)*", true);

		e.addField("Abilities:", "- Play a Mace?! on a player each night, dealing an Unstoppable attack to them and a Basic attack to each of their closest living neighbours. You may only use this ability once.‎");

		e.addField("Attributes:", "- Whenever a player uses a limited-use ability, they gain a use of that ability.\n- Players may copy abilities as though Rule 16 didn't apply.\n- Attacking abilities resolve immediately.\n- As normal night abilities resolve, the host will randomly forget to process one ability. It will instead resolve ten minutes after the next day begins.\n- The host may not create any emergency rules and must interpret all rules and role cards as literally as possible.\n- This role may only roll in rolelists that are more than 80% Any slots.\n- Bionic can't kill Spaggy.\n- If this role has an alias in the bot that's a player's name, any attack it deals to that player is Overkill.‎");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["hungryhungryhippos", "hungryhungryhippo", "hungryhippos", "hungryhippo", "hippos", "hippo", "hhh", "2888"], "Neutral", "Hungry Hungry Hippos", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2888\n*hehehehehehe* bites fingers with the hippos *hehehehehehe*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "‎- At the start of the game, the abilities, attributes, and flavor text of four random role cards are written in a channel. While everyone can see this channel, there are only four anonymous participants at random, one of which is you. Each player will take turns selecting 1-3 words from this pool to add to a new role card. The words can be placed anywhere in the card. A player may opt to finalize their custom role card, and their original role card will be replaced with that. They will be removed from the turn queue.\n- The other three players may not tamper with their role name, alignment, subalignment or win condition. However, you must craft a role name and win condition yourself. An alignment and subalignment will be added for you at the host's discretion after your card is complete.\n- All role cards must be crafted by Day 3, otherwise the contestants' role cards are replaced with whatever they have.");

		e.addField("Goal:", "Create a new card, make the host cope, and win.");
	});

	register_role(["white_knight", "whiteknight", "wk", "2889"], "Latex", "White Knight", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 2889\n*\"From what I've seen, These things like to absorb their prey entirely, making themselves a sort of centaur of sorts.\" -Dr.█████, MIT.*");

		e.addField("Alignment", "Latex White", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- You may choose to make yourself a centaur. You must pick one other player, and they get dealt a powerful attack. If they die, you lose this ability. If not, you keep it.\n- You may choose to transport two players.");

		e.addField("Attributes:", "- Your targets have a 10% chance of engaging a transfur.‎");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["black_knight", "blacknight", "2890"], "Latex", "Black Knight", {subCat: "Black"}, (e) =>
	{
		e.setDescription("Post 2890\n*\"They appear to have extreme sensitivity towards sound. However, the chemical makeup of the Latex gives them poor eyesight. They seem rather intrigued by moving objects, however.\" -Dr.█████████, MIT.*");

		e.addField("Alignment", "Latex Black", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, you may choose to visit another player. If anyone visits them, transfur one random player that visits them. If your target visits you, transfur them instead.‎");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["stiger", "2891"], "Latex", "Stiger", {subCat: "Chromatic"}, (e) =>
	{
		e.setDescription("Post 2891\n*\"Have we ever implemented a way to poison these things, because that spider... the thing's really pissing me off.\" -Dr.███, MIT.*");

		e.addField("Alignment", "Latex Chromatic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- At night, visit another player. If they visit another latex, you will transfur them.");

		e.addField("Attributes:", "- You cannot visit other latex creatures.‎");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["traffic_cone", "trafficcone", "tc", "2892"], "Latex", "Traffic Cone", {subCat: "Chromatic"}, (e) =>
	{
		e.setDescription("Post 2892\n*\"Whoever's idea this was, you're paying for ██████'s funeral, [EXPLICIT].\" -Dr.█████████████, MIT.*");

		e.addField("Alignment", "Latex Chromatic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may choose to visit another player, if you do, all visits against them will fail.‎");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["raven", "2893"], "Latex", "Raven", {subCat: "Black"}, (e) =>
	{
		e.setDescription("Post 2893\n*\"The birds are a nice idea, but how do we ensure that they remain indoors?\" -Dr.█████████, MIT.*");

		e.addField("Alignment", "Latex Black", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- At night, you may choose to visit another player. You will learn who they visit.");

		e.addField("Attributes:", "- Your visits are Astral.‎");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["yuin", "2894"], "Latex", "Yuin", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 2894\n*\"These things like to camouflage themselves. Wonder how that wo- oh [EXPLICIT], OH [EXPLICIT]!\" -Dr.████████, MIT, moments before he \"went missing\".*");

		e.addField("Alignment", "Latex White", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "‎- At the beginning of the game, pick a hero sided role that is legal to spawn. If the host does not rule 17 said role, you gain all their abilities and attributes, and will appear to be that role until the Latex has voting majority.\n- If someone attempts to attack you, you will die, but they will become this role, regardless of their willpower, role conversion legality, and conversion immunity. However, they will retain their original abilities and attributes.\n- If your role would normally commit suicide over killing a townie, you won't.\n- You cannot negatively target other latexes.");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["yufeng", "2895"], "Latex", "Yufeng", {subCat: "Black"}, (e) =>
	{
		e.setDescription("Post 2895\n*\"A variation of their wingless cousins. While some have reported to have flight, They often don't.\" -Dr.██████, MIT.*");

		e.addField("Alignment", "Latex Black", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, you may choose to visit another player. If anyone tries to attack them, transfur them.‎");

		e.addField("Attributes:", "- Your visits are Astral unless your target's attacked.\n- If there's an attacker, everyone visiting, as well as your target, will be notified that something swooped by outside, and everyone who visits your target will have their ability fail unless they are another latex, and your target will be roleblocked unless they are another latex.\n- You can only transfur one attacker at a time.‎");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["white_minion", "whiteminion", "wm", "2896"], "Latex", "White Minion", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 2896\n*\"These things are the reason the latex isn't bulletproof. consequently, they shouldn't have been fireproof as well. These things spread like crazy. We're lucky they don't often try to escape.\" -Dr.K███████, MIT.*");

		e.addField("Alignment", "Latex White", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Establish a chat between two players.‎");

		e.addField("Attributes:", "- There's already a chat with at least one of the players, the chats will merge into one.\n- Targets will have a 25% chance to be transfurred in the process‎");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["circle", "2897"], "Latex", "Circle", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 2897\n*\"Just one of the two... err... \"kitsune\" creatures Dr.████ has worked on since his term started. I think that he might make 7 more of these things. They're kind creepy though, just the tail?\"-Dr.███████,  MIT.*");

		e.addField("Alignment", "Latex White", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "‎- Once you successfully transfur someone, you may roleblock another player at night.");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["kade", "2898"], "Latex", "Kade", {subCat: "White"}, (e) =>
	{
		e.setDescription("Post 2898\n*\"The first of many components my project for a* Kitsune^ *, it has gotten along well with one of the tails, however, I am unsure if it can support multiple at once.\"-Dr.████,  MIT.\n^-Translator's Note: A kistune is a trickster fox creature in Ancient Japanese mythology. I suggest looking up the wikipedia article on them. -Mr.█████*");

		e.addField("Alignment", "Latex White", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- ‎During the day, select another player to stalk. At night, they will unable to do anything, And will have to hide in a cupboard, shower, or bed. You may choose to check either the restroom, kitchen, or bedroom. Bedroom beats bed, Restroom beats shower, and Kitchen beats cupboard. If you find them, you will transfur them, guaranteed.");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["leaf_latex", "leaflatex", "ll", "2899"], "Latex", "Leaf Latex", {subCat: "Chromatic"}, (e) =>
	{
		e.setDescription("Post 2899\n*\"If I had $1000 for how many time I've found one of these things in the Greenhouse instead of their bubble, I'd probably would have enough to repair the greenhouse. Not sure why they like it so much there, but they seem rather interested in how things work.\" -Dr.K███████, MIT.*");

		e.addField("Alignment", "Latex Chromatic", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "‎- At night, visit another player, you will learn their subalignment.");

		e.addField("Goal:", factions.Latex.goal);
	});

	register_role(["feng_yu", "fengyu", "fy", "2900"], "Latex", "Feng Yu", {subCat: "Chromatic"}, (e) =>
	{
		e.setDescription("Post 2900\n*\"Dr.████████ made this thing, turns out, it's a vicious predator, and will prefer to kill its prey. Depends on its mood. Poor doc was found dead a week after the thing was made. I've been trying to get K to kill this thing for months now, but he's not letting me hear the end of it.\" -Dr.██████, MIT.*");

		e.addField("Alignment", "Latex Chromatic", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, visit another player, you will attempt to kill them. If the attack fails, attempt to transfur them instead.");

		e.addField("Goal:", factions.Latex.goal);
	});
};
