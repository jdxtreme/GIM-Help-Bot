//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["really_pettish_person", "reallypettishperson", "pettish_person", "pettishperson", "really_pettish", "reallypettish", "pettish", "rpp", "mafiainterviews", "3401"], "Mafia", "Really Pettish Person", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3401\n\"*So what can you provide for the Mafia?*\"\n\"*I've been told I have a rather prickly personality.*\"");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Loiter around the front lawn of a fellow Mafia member tonight. Your first attribute will also apply to them for the night.");

		e.addField("Attributes:", "- You will attack anyone who visits you and prickle their will, leaving it indecipherable.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["scruffles", "mafiadoggo", "mafiainterviews", "3402"], "Mafia", "Scruffles", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3402\n\"*So what can you provide for the Mafia?*\"\n\"*woof*\"");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Bark at a player, nullifying their ability tonight but forcing them to visit you tomorrow tonight.\n- Bark encouragingly at an ally, allowing them to take two actions the next night. (Costs 3 affection points)");

		e.addField("Attributes:", "- Each time you're visited, you gain an affection point.\n- If you have less than 3 affection points, you may still pre-emptively bark encouragingly if you believe you'll gain enough affection points to fulfill the requirement.\n- \"C'mon, he's so cute! How could you \\*not\\* let Scruffles in?\" ... \"You already named it?\"");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["portal_killer", "portalkiller", "pk", "mafiainterviews", "3403"], "Neutral", "Portal Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3403\n\"*...and I'm an excellent assassin with 15 years of experience. I know this Town like the back of my palm. And I can make portals with my mind.*\"\n\"*Sorry, we don't need someone with your skillset in the Mafia.*\"\n\"*Are you serious.*\"");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night. You may multitask this with another one of your other abilities tonight.\n- Create a portal between two players's houses tonight, effectively transporting them. However, your portals only affect the first person to visit each of them, randomized if the visits have the same priority.\n- Create a portal from one player's house to another tonight. The first person to visit your first target will be redirected to your second target. ");

		e.addField("Attributes:", "- You have heightened instincts; at night, you'll immediately be informed if anyone is planning on directly attacking you. You may change your night targets with this information in mind.\n- If your attack goes through a portal (if you transport your own attack), its attack tier is upgraded to Powerful and it will bypass protective effects.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["paralyzer", "3404"], "Neutral", "Paralyzer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3404");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, Paralyze a player. They can't talk in any chat, can't do actions or vote, do not count towards the vote total, and are effectively dead. However they do not count as dead (for things like Medium and Necromancer).");

		e.addField("Attributes:", "- Paralyzing a player fails if the target was healed that night (paralyzing otherwise ignores defense).\n- Paralyzed players can't be revived (because they aren't dead).\n- One random player at the start of the game counts as paralyzed for Paralyzer's win condition (but is not paralyzed)");

		e.addField("Goal:", "Live as the only evil in with a majority Town who is Paralyzed (not killed)");
	});

	register_role(["metalsmith", "ms", "3405"], "Storyteller", "Metalsmith", {subCat: "RisingAction"}, (e) =>
	{
		e.setDescription("Post 3405\n\"*I'm a busy person. Don't dawdle; tell me what you need or get out.*\"");

		e.addField("Alignment", "Storyteller Rising Action", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, choose a player's house to scour. You'll search their living space for materials, roleblocking them and learning their faction in the process.\n- Once per game, you may choose to stay at home, roleblocking and learning the name and faction of all who would visit you.");

		e.addField("Attributes:", "- At the start of the game, you learn which factions are in play.\n- If you roleblock at least one player from all non-Storyteller factions in the game, including Neutrals, the Rising Action becomes \"*The protagonist spends the night in wake, meticulously smithing a legendary sword, one which children would come to fawn over. The protagonist takes to the battlefield, bearing their new weapon.*\" When the story is completed with this rising action, the Storytellers' factional kill is upgraded to Powerful, bypasses protective effects and attacks two targets a night.");

		e.addField("Goal:", factions.Storyteller.goal);
	});

	register_role(["liar", "3406"], "Neutral", "Liar", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3406\n*They’re not harmful, you see! They just… benefit my own agenda. A little white lis if you will!*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, you may make a public statement anonymously. This statement has to be a lie. ");

		e.addField("Attributes:", "- This statement is seen to have come from a different role of your choice that is capable of displaying a message to all Townies.\n- Three statements you make during the day must be lies. If they’re not, you’re modkilled. You may not tell the same lie more than once per day.\n- If a member of the good faction confirms that they believe or agree with one of your lies, you learn their role at the start of the night phase. If multiple people do so, you do not learn which role belongs to who.\n- If someone points out that what you said is a lie, your role is publicly revealed.");

		e.addField("Goal:", "Tell a minimum of 15 lies without being caught.");
	});

	register_role(["high_school_wing_supervisor", "highschoolwingsupervisor", "wing_supervisor", "wingsupervisor", "supervisor", "high_school_supervisor", "highschoolsupervisor", "hsws", "3407"], "Neutral", "High School Wing Supervisor", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3407\n*You're late! Go back, sign in with the office, get a late pass.. no running in the halls! Detention for you!*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Give someone a detention slip each day. The next night, they may still perform their night ability, however if they do then all REFs and NKs will learn their role and action as soon as it is submitted.");

		e.addField("Attributes:", "- The host may not be late. All actions submitted 24 hours after the phase begins will be invalidated.\n- The host is sent to detention if the phase ends more than 6 hours after the given time, and all feedback given for the next phase is relayed to you. Or the host can be a goodie two-shoes, stay in detention and not give out feedback.");

		e.addField("Goal:", "Live to see the Town lose.");
	});

	register_role(["dimensional_executioner", "dimensionalexecutioner", "dimensional", "executioner", "de", "3408"], "Neutral", "Dimensional Executioner", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3408\n*What do you mean? Of course I don't hold grudges.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- At the start of the game, a random player besides you will become your target. The host will tell you your target through DMs rather than in your private channel. ");

		e.addField("Goal:", "Get your target lynched at any cost. You can win after the game ends.");
	});

	register_role(["teleporter_man", "teleporterman", "tm", "3409"], "Linirean", "teleporter man", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3409\n*-ERROR: Unknown command: =arcanemagus*");

		e.addField("Alignment", "Linirean Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Twilight Arcane Masquerade**: Swap two players tonight.\n- **rampage attack**: Rampage at someone's house.");

		e.addField("Attributes:", "- You have a mystical barrier that protects against one attack.\n- You may only use one ability per night.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["the_audience", "theaudience", "audience", "ta", "3410"], "Any", "The Audience", (e) =>
	{
		e.setDescription("Post 3410");

		e.addField("Alignment", "Any", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic/Variable", true);

		e.addField("Attributes:", "- This cannot spawn naturally.\n- The host may allow this to spawn if 3 or more non-players (not spectators) choose to become the Audience.\n- The Audience automatically becomes a random role in an existing good faction, or a random role in an existing evil faction. They change the name as well.\n- The Audience has the defense of their role or Basic defense, whichever is higher.\n- The Audience sends messages by 2/3rds of the Audience agreeing on a message to send at a time.\n- The Audience vote is decided by majority vote within the Audience.\n- The Audience's ability is decided by majority vote within the Audience.\n- The Audience shares a chat between them. If they would have access to an evil chat, all audience members have full access to it.\n- The host may change specific details of this role if needed.\n- This role is not considered a Traveler. It just happens to spawn midgame.");
	});

	register_role(["arsonist+", "arsonistplus", "arsonist", "arso+", "3411"], "Neutral", "Arsonist+", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3411");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Douse someone in gasoline.\n- Ignite all doused players.");

		e.addField("Attributes:", "- Detection immune, doused players will appear to be your role to all investigative effects.\n- You will douse anyone who visits you or other doused players.\n- 1-use Powerful autovest.\n- If you are roleblocked you will burn the roleblocker, burning their will (making it unreadable) and attacking them.\n- Players will know if they are doused.\n- Gasoline immunity, you cannot get doused.");

		e.addField("Goal:", "Ensure everyone dies, you dont need to be alive.");
	});

	register_role(["arsonist-", "arsonistminus", "negativearsonist", "arsonist", "arso-", "3412"], "Neutral", "Arsonist-", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3412");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "It's Complicated", true);

		e.addField("Abilities:", "- Douse someone in gasoline.\n- Ignite all doused players.");

		e.addField("Attributes:", "- Doused players will appear to be your role to all investigative effects.\n- Gasoline immunity, you cannot get doused.\n- At night, the last player you doused may decide to become a Firefighter (418).\n- At night, you die to Basic Attacks but not Powerful or Unstoppable.\n- Instead of Igniting all doused players, you transform all doused players into Firefighters (418).\n- Firefighters may choose to convert back to the role they were before they were firefighters after using the Firefighter's ability once.");

		e.addField("Goal:", "Be last one standing or have ignited every player in town at least once.");
	});

	register_role(["heart_attack", "heartattack", "heart", "ha", "3413"], "Town", "Heart Attack", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3413");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- (Day) Have a heart attack and fucking die dealing 87 overkill attacks to yourself.");

		e.addField("Attributes:", "- Doing your ability gives all TPs a better knowledge of the medical world and are able to give defense one tier higher than they usually do the rest of the game.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["day_boy_scout", "dayboyscout", "boy_scout", "boyscout", "dbs", "3414"], "Town", "Day Boy Scout", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 3414\n*Be prepared at dawn.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prepare a player each day.");

		e.addField("Attributes:", "- They will be defended against literally everything possibly imaginable that could harm them at all period full stop no exceptions. You bypass things that specifically negate protection or literally anything else that could theoretically prevent your protection from working from roleblocks to the end of the world to whatever. Boy Scouts are prepared for everything. \n- You can only defend yourself once (Boy Scouts are upstanding citizens and would never be selfish however sometimes it is required)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["mob_vigilante", "mobvigilante", "vigilante", "mv", "3415"], "Town", "Mob Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3415");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot a player at night if you have bullets.");

		e.addField("Attributes:", "- You start with 0 bullets.\n- Each time someone is attacked (but not by you), you gain 1 bullet.\n- Your attack becomes Basic if you have 2 bullets, Powerful if you have 3 bullets, and Unstoppable if you have 6 bullets.\n- If you shoot an innocent player you lose all bullets and can't gain any more.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["zodiac_killer", "zodiackiller", "zodiac", "zk", "3416"], "Neutral", "Zodiac Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3416");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Kill up to 2 Victims at night.");

		e.addField("Attributes:", "-  During the day, players whose name you whisper to a good player become Victims the next night if the player you whispered to responded. (This effect wears off the next night)\n- Players whose name was whispered to you also become Victims the next night.\n- The names can be in any location in the whisper (ie: \"Hey Rasen, don't visit Duwiiton, I trapped his house\") would make both Rasen and Duwiiton victims.");

		e.addField("Goal:", "Kill everyone.");
	});

	register_role(["geomancer", "3417"], "Town", "Geomancer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3417");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Divine the future at night by selecting 3 targets. Choose one you think will be attacked, one you think will attack someone, and one you think will do neither.");

		e.addField("Attributes:", "- If you get your Divination right, you may learn the role of any target you have selected in a Divination in the past.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["secret_mayor", "secretmayor", "mayor", "sm", "3418"], "Town", "Secret Mayor", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3418\n*Originally I called this role Secret Hitler but it doesn't work because this role is on Town's side.*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose 5 players to participate in an Election. The next night, they may vote either Liberal or Fascist (which is public info the next day). The policy with the majority vote is enacted.\n- At night, once per game you may learn a player's faction.");

		e.addField("Attributes:", "- When a policy is enacted, the corresponding effect happens. You progress from the 1st effect to the 5th. For example:\n\nLiberal:\n1st. Nothing\n2nd. Nothing\n3rd. Nothing\n4th. Nothing\n5th. Investigate 4 player's exact roles, surpassing and cleansing frames. All Town players gain the ability to deal a basic attack at night instead of their normal ability.\n\nFascist:\n1st. Secret Mayor learns a player's role at night.\n2nd. Secret Mayor learns a player's role at night. This surpasses frames.\n3rd. Secret Mayor picks a player. If that player is Town, when the Secret Mayor dies, the chosen player may consent to have their abilities replaced by Secret Mayor (3418), and their progress for policies picks up where the previous Secret Mayor's left off.\n4th. Secret Mayor lynches a player at night. (This is undefendable because it's the same as a day lynch. Except at night. Lynch immune roles don't die from this. This is not an attack or a visit.)\n5th. The Town can't vote to lynch during the day.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["performer_of_geomancy", "performerofgeomancy", "geomancy_performer", "geomancyperformer", "pog", "3419"], "Town", "Performer of Geomancy", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 3419\n*Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defence", "None", true);

		e.addField("Abilities:", "- At night, choose to spend two nights using Geomancy on a player. On the second night, they will gain temporary complete death immunity, and their action will succeed no matter what for the rest of the game.");

		e.addField("Attributes:", "- If you are targeted by a beneficial protective or support ability, you only need one night to use your ability. If this happens on your first night of Geomancy, you'll instantly perform the effects. If this happens on your second night of Geomancy the shortened time will apply to your next use.\n- You visit your target both nights when using your ability.\n- You may target yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["forgerer", "forger", "3420"], "Mafia", "Forgerer", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 3420");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Forge a player's documents each night.");

		e.addField("Attributes:", "- As you forge a player's documents, you may choose a role and write a last will.\n- If your forged target dies that night, they will appear to have been the role that you chose, and their last will will appear as the last will you wrote.\n- You may only forge thrice.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["forgerest", "forger", "3421"], "Mafia", "Forgerest", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 3421");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Forge a player's documents each night.");

		e.addField("Attributes:", "- As you forge a player's documents, you may choose a role and write a last will.\n- If your forged target dies that night, they will appear to have been the role that you chose, and their last will will appear as the last will you wrote.\n- You may only forge four times.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["forgereriest", "forger", "3422"], "Mafia", "Forgereriest", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 3422");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Forge a player's documents each night.");

		e.addField("Attributes:", "- As you forge a player's documents, you may choose a role and write a last will.\n- If your forged target dies that night, they will appear to have been the role that you chose, and their last will will appear as the last will you wrote.\n- You may only forge five times.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["forgereriester", "forger", "3423"], "Mafia", "Forgereriester", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 3423");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Forge a player's documents each night.");

		e.addField("Attributes:", "- As you forge a player's documents, you may choose a role and write a last will.\n- If your forged target dies that night, they will appear to have been the role that you chose, and their last will will appear as the last will you wrote.\n- You may only forge six times.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["bed_wed_behead", "bed,wed,behead", "bedwedbehead", "bed_wed", "bedwed", "bwb", "3424"], "Neutral", "Bed, Wed, Behead", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3424\n*As advertised.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, choose any number of your effects to not have to use the next night. You may only do this once.");

		e.addField("Attributes:", "- At the beginning of each night, three players other than yourself will be given to you at random. You must choose one to roleblock, another to become Lovers with, and a third to attack.");

		e.addField("Goal:", "Bed a sexy player, wed a player that'd be a good partner, and behead an annoying player. Qualifications can be based on personality, role, or whatever; the host decides what counts.");
	});

	register_role(["buddy_buddy", "buddybuddy", "bb", "guardianangelbutworse", "3425"], "Neutral", "Buddy Buddy", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3425\n*you serious? whyd you make the role so boring? this is just guardian angel but worse*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, heal a player.");

		e.addField("Attributes:", "- At the beginning of the game you are given a player. They are your Buddy.");

		e.addField("Goal:", "Win with your Buddy's faction.");
	});

	register_role(["healerman", "hm", "buddybuddybutworse", "3426"], "Neutral", "Healerman", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3426\n*you serious? whyd you make the role so boring? this is just buddy buddy but worse*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, heal a player.");

		e.addField("Goal:", "Win with a random player.");
	});

	register_role(["unescort", "escort", "3427"], "Town", "Unescort", {subCat: "Unsupport"}, (e) =>
	{
		e.setDescription("Post 3427");

		e.addField("Alignment", "Town Unsupport", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target. They gain roleblock immunity for the night");

		e.addField("Attributes:", "- You are the only available target for roleblocking roles as long as you are alive.\n- This is mechanically a Town role in every way except for win condition.");

		e.addField("Goal:", "Make the good faction lose (May win while dead)");
	});

	register_role(["unvigilante", "vigilante", "3428"], "Town", "Unvigilante", {subCat: "Unkilling"}, (e) =>
	{
		e.setDescription("Post 3428");

		e.addField("Alignment", "Town Unkilling", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot yourself at night. (3 uses)");

		e.addField("Attributes:", "- If you shoot yourself on a night where you are converted into a non-Town role, then you shoot a random Townie instead and keep your original role.\n- This is mechanically a Town role in every way except win condition.");

		e.addField("Goal:", "Make the good faction lose (May win while dead)");
	});

	register_role(["medicalman", "mm", "healermanbutworse", "3429"], "Neutral", "Medicalman", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3429\n*you serious? whyd you make the role so boring? this is just healerman but worse*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect someone.");

		e.addField("Goal:", "Win with someone.");
	});

	register_role(["unsheriff", "sheriff", "3430"], "Town", "Unsheriff", {subCat: "Uninvestigative"}, (e) =>
	{
		e.setDescription("Post 3430");

		e.addField("Alignment", "Town Uninvestigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target to interrogate them, learning if they are suspicious or not.");

		e.addField("Attributes:", "- Everyone appears suspicious to you.\n- You also learn their exact role via a poem sent by the host (for the fun of it).\n- This is mechanically a Town role in every way except for win condition.");

		e.addField("Goal:", "Make the good faction lose (May win while dead)");
	});

	register_role(["doctor", "medicalmanbutworse", "3431"], "Neutral", "Doctor", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3431\n*you serious? whyd you make the role so boring? this is just medicalman but worse*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal target.");

		e.addField("Goal:", "Win with player.");
	});

	register_role(["really_bad_doctor", "reallybaddoctor", "bad_doctor", "baddoctor", "rbd", "3432"], "Town", "Really Bad Doctor", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 3432\n*50% of doctors graduate in the bottom half of their class.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Heal a target.");

		e.addField("Attributes:", "- You have an 50% chance of attacking your target instead, which goes down by 10% every time you attack someone. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["delusional_doctor", "delusionaldoctor", "delusional", "dd", "3433"], "Town", "Delusional Doctor", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 3433\n*I don’t feel scared because I don’t know.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect a player each night, healing them and giving them Powerful defence for the night.");

		e.addField("Attributes:", "- A random Town member that would've been on Night 1 will become your patient, moribund and bed-ridden, functionally exactly equivalent to death in all but name. Their respiratory system is damaged beyond what is salvageable. They will die at the end of Night 5.\n- While your patient is bed-ridden, if your night target is attacked, you'll fail to protect them. Instead, you will give your target protection immunity for the night. If they die, you'll take a flower from them, you'll say there was nothing you could've done. Next morning, along with their cause of death, it will be announced that they were found missing their lungs.\n- The night after you get a flower, you'll be working, roleblocking yourself. You'll give your patient the flower. Your patient will be revived at the start of the next day. It's beautiful.\n- After the game ends, the patient is dealt an Overkill attack. It's only now that you understand the worth of what you took. You'll deal an Overkill attack to yourself as well.");

		e.addField("Goal:", "Lynch all criminals and evildoers and save your patient.");
	});

	register_role(["unveteran", "veteran", "3434"], "Town", "Unveteran", {subCat: "Unkilling"}, (e) =>
	{
		e.setDescription("Post 3434");

		e.addField("Alignment", "Town Unkilling", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- At night, go on alert. (3 uses)");

		e.addField("Attributes:", "- You will heal all your visitors that night and gain Basic defense.\n- Anyone who doesn’t visit you is marked.\n- After alerting, attack up to 3 marked players a night at random until there are no more.\n- This is mechanically a Town role in every way except for win condition.");

		e.addField("Goal:", "Make the good faction lose (May win while dead)");
	});

	register_role(["ancient_relic", "ancientrelic", "ancient", "relic", "ar", "3435"], "Town", "Ancient Relic", {subCat: "Suppkillectpowergative", spawnSubCat: "Support, Killing, Protective, Power, Investigative"}, (e) =>
	{
		e.setDescription("Post 3435\n*Its metallic parts have long rusted. It seemed to have an ulterior purpose, eliminating those who threaten.*");

		e.addField("Alignment", "Town Support/Killing/Protective/Power/Investigative", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- On D2, receive a rolecard from a random sentry relevant to your slot. That will be your role, but will be Town aligned. Also there's no such thing as \"authorization\".\n- As you are booting up, you will be blackmailed on Day 1, and roleblocked on Night 1.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["replicator", "3436"], "Town", "Replicator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3436\n*Looks just like the real thing!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Create a replica of a player each night.");

		e.addField("Attributes:", "- All abilities that would be used on your target are instead used on the replica. If the replica dies, it's destroyed and your target's role is revealed.\n- You may only make three replicas.\n- Your target can't speak or take game actions and doesn't count for majority until the replica is destroyed.\n- Your target can't speak or take game actions and doesn't count for majority after the replica is destroyed. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["one_who_geomances", "onewhogeomances", "owg", "3437"], "Town", "One Who Geomances", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3437\n*I don't even know what this word means, honestly.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose to spend two nights geomancing (?) three players. At the end of the second night, if, among those three players, during those two nights, at least one attacked someone, at least one was attacked, and at least one did neither, give all three temporary complete death immunity and learn their roles and their actions will succeed no matter what for the rest of the game.");

		e.addField("Attributes:", "- You visit your targets both nights when using your ability.\n- You may target yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["geodemancer", "3438"], "Town", "Geodemancer", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3438\n*The word Geo makes me think of rocks.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Throw a geode at a player, causing it to crack open.");

		e.addField("Attributes:", "- The geode will deal a basic attack to the player.\n- When the geode cracks open, it will reveal a gem with the same color as your target’s faction’s color. You learn this color.\n- If your target is neutral, the geode will have no gem.\n- Your ability is astral, and trackers will see you visit the ground.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["valkyrie", "3439"], "Linirean", "Valkyrie", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3439");

		e.addField("Alignment", "Linirean Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack someone at night. Can only be used when teammates are dead.");

		e.addField("Attributes:", "- Your attack power increases as more of your teammates die.");

		e.addField("Goal:", factions.Linirean.goal);
	});

	register_role(["rutabaga_knight", "rutabagaknight", "rutabaga", "knight", "rk", "3440"], "Town", "Rutabaga Knight", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 3440\n*I'll protect this Town with all my rutabagas.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target each night. You'll set their defence to Vulnerable for the night, but protect their closest alive neighbours with Basic defence.");

		e.addField("Attributes:", "- Your visits are Astral and don't count toward Vulnerable defence.\n- You cannot be protected by your own ability.\n- You may self-target.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["rutabaga_mercenary", "rutabagamercenary", "rutabaga", "mercenary", "rm", "3441"], "Town", "Rutabaga Mercenary", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3441\n*The last thing they'll see is my rutabaga.*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a target to guard each night. You'll protect them with Basic defence, but attack both their closest neighbours, taking dead players into account.");

		e.addField("Attributes:", "- Once per game, you may select yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["zagreus", "3442"], "FallenAngel", "Zagreus", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3442\n*The Underworld Prince, repeatedly killing dead people and also demons and also rats just to go upstairs.*");

		e.addField("Alignment", "Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Attack a player each night.\n- Use your special on a player at night, attacking them. One night cooldown.\n- Use your Cast on a player at night, attacking them. 3 uses.");

		e.addField("Attributes:", "- You may use two abilities each night.\n- Whenever you kill a good faction member, you gain a Boon, which either augments your attack, special, or Cast with an ability of your choice from among three random roles, or lets you gain an attribute of one of those roles.\n- Whenever you kill a non-Fallen Angel, non-good faction member, you gain a Daedalus Hammer, which replaces your attack or special with an ability of your choice from among three random killing roles. It's still augmented by your Boons.\n- Whenever you kill a Fallen Angel, you gain a new Aspect of your weapon, augmenting your special with an ability of your choice from any Unique role.\n- You get an additional Aspect if you kill 258: Hades.\n**Sin of Nukes???** — If you're the last Fallen Angel remaining, you can multitask and your special doesn't have a cooldown and your Cast has infinite uses and all your attacks rampage and are Unstoppable. ");

		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["stopwatch", "⏱️", "3443"], "Town", "Stopwatch", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3443\n*Tick tock, mothafucka*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn the priority level of every ability used on your target. Priorities can be found in the GIM Comprehensive Rules document.");

		e.addField("Attributes:", "- The host must answer all questions regarding role ability priorities truthfully if asked.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["clicker", "3444"], "Town", "Clicker", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3444\n*This thing can tell the fitness of any person it visits based off of living conditions and lifestyle, as this obviously translates to real life speediness*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player.\n- You learn the amount of priorities the visited player has. (Without any factional abilities or third party abilities added)\n- If the target has 1 priority, you learn the priority. If it has more than one, you learn a random priority, but you know weather or not is the fastest or slowest. (Again before any modifications)\n- If the visited player has 3 or more abilities, you know what place the priority comes in if they were to all race.");

		e.addField("Attributes:", "- The host must answer all questions regarding role ability priorities truthfully if asked. ");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["boss_with_four_health_bars", "bosswithfourhealthbars", "boss", "four_health_bars", "fourhealthbars", "bwfhb", "bw4hb", "3445"], "Neutral", "Boss with Four Health Bars", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3445\n*My sixth phase will surely end you!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Hellbent (x4!)", true);

		e.addField("Abilities:", "- Attack a player each night.");

		e.addField("Attributes:", "- You have four Hellbent health bars that can each take 5 damage as usual. Being lynched doesn't kill you and instead depletes your current health bar.\n- If you've lost your first health bar, your attacks rampage.\n- If you've lost your second health bar, your attacks are Overkill.\n- If you've lost your third health bar, your attacks rampage again.\n- You can attack an additional player each full moon.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["janitor+", "janitorplus", "janitor", "3446"], "Mafia", "Janitor+", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 3446");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Clean your target's house, this will hide all night feedback they would have recieved from another role.\n- Follow a target, if they visit someone that dies tonight you will clean that player's body.");

		e.addField("Attributes:", "- If you clean the house of an investigative target, you will steal their role feedback.\n- Cleaning a player's body will hide their role, will and cause of death, they will appear as Cleaned, you will privately learn all of that.\n- You may only follow your faction members twice.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["slumlord", "sl", "3447"], "Town", "Slumlord", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3447");

		e.addField("Alignment", "Town Investigation", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night you may choose to Check Conditions. You only have 2 charges of this.\n- You are told the total amount of statuses among all Town members from last night. (Ie: 1x frames, 4x doused, 2x poisoned, 1x blackmailed etc)\n- At night, you may choose a player to Collect Rent from instead of Checking Conditions.\n- You astrally visit them (because you sent a lackey to collect rent for you) and are told if they visited anyone tonight. If they are home, you successfully collected rent from them.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["serial_killer_killer", "serialkillerkiller", "killer_killer", "killerkiller", "skk", "sk", "3448"], "Town", "Serial Killer Killer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3448");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check if someone is a Serial Killer role. If they are, attack them with one tier above their defense value");

		e.addField("Attributes:", "- This role cannot spawn without more than 2 SK roles.\n- If you are roleblocked, you will automatically attack your roleblocker along with your target.\n- Roleblockers who you attack will automatically have their roleblock attempt fail.\n- Roleblockers that you attack will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["50/50", "fifty_fifty", "fiftyfifty", "3449"], "Town", "50/50", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3449\n*Triple the chance! Of half the times?*");

		e.addField("Alignment", "Town Investigation", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn a player's faction at night.");

		e.addField("Attributes:", "- You may use your ability 3 times per night. You must use it on different targets.\n- You are immune to frames.\n- Your ability has a 50% chance to show your target as Town if they're not Town, or as a random evil faction that exists if they are Town.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["trifty", "3450"], "Town", "Trifty", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 3450\n*My results are always accurate! I triple check them!*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn a player's faction at night.");

		e.addField("Attributes:", "- You may use your ability up to 3 times at night.\n- You must always choose the same target.\n- You are immune to frames.\n- Your ability has a 50% chance to show your target as Town if they're not Town, or as a random evil faction that exists if they are Town.");

		e.addField("Goal:", factions.Town.goal);
	});
};
