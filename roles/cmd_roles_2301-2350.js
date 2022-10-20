module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["pikachu", "2301"], "Pokemon", "Pikachu", {subCat: "Evolved"}, (e) =>
	{
		e.setDescription("Post 2301");

		e.addField("Alignment", "Pokemon Evolved", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Thunderbolt: Zap a player with a Basic attack. Whenever you use this, your attack tier increases. (3 uses)\n- Electroball: Roleblock a player AND whoever visits them. (3 uses)\n- Thunder Wave: Redirect two players to each other. (1 use)\n- Evolve: Evolve into Raichu (2303). May only be used if your attack tier is raised to Unstoppable.\n- Regional Evolve: Evolve into Alolan Raichu (2302). May only be used if you completed one of the following conditions as Pichu: Used Play Nice on someone that tried attacking OR used Nasty Plot on a Pokemember who wouldn't have killed a target if ya didn’t help.");

		e.addField("Attributes:", "- Agility: You're capable of using multiple abilities in the same night as long as you have enough uses.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["alolan_raichu", "alolanraichu", "alolan", "raichu", "ar", "2302"], "Pokemon", "Alolan Raichu", {subCat: "Regional", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2302");

		e.addField("Alignment", "Pokemon Regional", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (\"Levitating\")", true);

		e.addField("Abilities:", "- Thunder Punch: Choose one player to attack with a thunder punch. The impact is so large that it roleblocks their neighbors on the player list, but Pokemon players are immune. (∞ uses)\n- Disarming Voice: Disable all attacks targeting Pokemembers until the end of the next night. (2 uses)\n- Encore: Use one of the abilities from Pichu or Pikachu. (2 uses)\n- Quick Attack: Attack a player during the day. This attack resolves immediately. (1 use)\n- Shock Wave: Redirect three players to a player of your choice. (1 use)");

		e.addField("Attributes:", "- Agility: You're capable of using multiple abilities in the same night as long as you have enough uses.\n- Concept of Evolution: Your attack value will be whatever your attack value was as Pikachu when you evolved.\n- Surge Surfer: You'll levitate over the first attack that targets you every night. You can only be killed by an attack if you're attacked twice or more in the same night.\n- This role can't spawn unless it's evolved from Pikachu.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["raichu", "2303"], "Pokemon", "Raichu", {subCat: "Evolved"}, (e) =>
	{
		e.setDescription("Post 2303");

		e.addField("Alignment", "Pokemon Evolved", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Thunder Punch: Choose one player to attack with a thunder punch. Does nothing besides an attack. (∞ uses)\n- Encore: Use one of the abilities from Pichu or Pikachu. (1 use)\n- Shock Wave: Redirect two players to a player of your choice. (1 use)");

		e.addField("Attributes:", "- Agility: You're capable of using multiple abilities in the same night as long as you have enough uses.\n- Concept of Evolution: Your attack value will be whatever your attack value was as Pikachu when you evolved.");

		e.addField("Goal:", factions.Pokemon.goal);
	});

	register_role(["hivemind", "2304"], "Neutral", "Hivemind", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2304");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, convert a player, you don't share a factional chat. You may not send or receive whispers.");

		e.addField("Attributes:", "- Once a quarter of all living players remains unconverted, you may no longer convert. Survivors now have share a factional chat and their goal changed to \"Forget the original goal. Take out the hivemind or get out of there!\"\n- If no survivors die for 3 days afterwards, all survivors will escape, resulting in a victory for the survivors.");

		e.addField("Goal:", "Domination...");
	});

	register_role(["khmer", "2305"], "Civilization", "Khmer", {subCat: "Religious"}, (e) =>
	{
		e.setDescription("Post 2305");

		e.addField("Alignment", "Unique Civilization Religious", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place a temple at someone’s house each night.");

		e.addField("Attributes:", "- Players with a temple at their house will appear as Khmer to all investigative roles.\n- When all living players have a temple, the game immediately ends in a Civilization win.\n- You are detection immune, however anyone with a temple will appear as a Civilization.\n- Anyone with a temple who attacks you will see that they were roleblocked, and their temple will be destroyed.\n- You will know who has a temple on them each night.\n- You may never perform the Factional Kill, even as the last Civilization standing.");

		e.addField("Messages:", "“The Civilizations have won a religious victory!” (Win through Temples)");

		e.addField("Goal:", factions.Civilization.goal);
	});

	register_role(["wanna_see_you", "wannaseeyou", "wanna", "see", "wsy", "ws", "2306"], "Neutral", "Wanna See You", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2306");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Ride with a player each night. The two of you will each gain Invincible defense for the night and visit each other, doing nothing.");

		e.addField("Attributes:", "- The first time you're visited by one or more players, one of those players at random becomes your love and you learn their name and role.\n- If your love dies, you commit suicide.\n- You can't ride with your love until they've visited once more.\n- If your crush realises that you're your role or you speak with them directly before they've visited you twice more, you commit suicide.\n- If your love visits you thrice more, you will both win.");

		e.addField("Goal:", "Be alive when your love wins the game.");
	});

	register_role(["asura-chan", "2307"], "Neutral", "Asura-chan", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2307");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "\"Piercing\"", true);
		e.addField("Defense", "Basic", true);

		e.addField("Piercing:", "If you attack a player between you and your goal, your attack is one level above their defense value and bypasses all effects that would prevent it. Otherwise, it's Basic.");

		e.addField("Abilities:", "- Run away and escape, leaving the game and winning. You may only use this when there are no players between you and your goal on the player list.\n- Fly and step, attacking the four players above or the three players below you on the player list.\n- Cheat and sneak, Astrally attacking any three players and hiding their causes of death.\n- Prance and skip, moving yourself two spaces on the player list in a direction of your choice.");

		e.addField("Attributes:", "- Your goal ten spaces above or below you on the player list, whichever direction works. For example, if you're player 1, your goal is in between players 10 and 11.");

		e.addField("Goal:", "Ditch all the losers and their half-assed lies.");
	});

	register_role(["amalgamation_of_hatred", "amalgamationofhatred", "amalgamation", "hatred", "aoh", "ah", "2308"], "Neutral", "Amalgamation of Hatred", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2308");

		e.addField("Alignment", "Unique Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select two players to infuse them with hatred, causing them to become Rivals. 1 use, fails and refunded if they are opposing factions.");

		e.addField("Attributes:", "- Rivals learn who their rival is when they become one. They can no longer directly target the other, but voting is unchanged. They also must see the other dead to win, **but do not block a win, and lose if their rival is alive at the end of the game, even if they are dead.**");

		e.addField("Goal:", "See one of the Rivals eliminate the other, dead or alive.");
	});

	register_role(["eclipse's_familiar", "eclipse'sfamiliar", "eclipses_familiar", "eclipsesfamiliar", "eclipse's", "eclipses", "familiar", "ef", "2309"], "Neutral", "Eclipse's Familiar", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2309");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night.");

		e.addField("Attributes:", "- Nights are night and night as well as night. Players may use three nights' worth of actions each night.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["potion_master", "potionmaster", "potion", "master", "pm", "2310"], "Mafia", "Potion Master", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2310");

		e.addField("Alignment", "Mafia Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use a potion on another player each night.");

		e.addField("Attributes:", "- When using a potion, you may choose to heal your target, learn their role, or attack them.\n- Each choice has a two-night cooldown unless you have the Necronomicon.\n- Each cooldown ends when you gain the Necronomicon.\n- You are immune to effects that would alter how your target’s role appears to investigative effects.\n- You may receive the Necronomicon on night 3, provided no roles that have priority for it exist and you win the random chance. You also can get it after the current wielder dies.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["unbound", "2311"], "Neutral", "Unbound", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 2311");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player during the night. For the next day and night, they may perform up to three abilities. (3 uses)");

		e.addField("Attributes:", "- Abilities do not consume charges when their user is unbound. All abilities can be used during the day and night. Night abilities performed during the day will resolve immediately. Day abilities performed during the night will resolve at the end of the night. Unbound targets are roleblock immune, redirect immune, and can act if jailed or super-roleblocked.\n- You may not target the same player twice.\n- At the beginning of the game, the word \"not\" is removed from all rolecards except your own (including from contractions such as \"can't\" or \"don't\"). All roles are automatically cleaved (or any equivalent).");

		e.addField("Goal:", "Be the direct cause of at least four deaths with either your ability or attribute.");
	});

	register_role(["cowboy", "2312"], "Neutral", "Cowboy", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2312");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose a player to duel.");

		e.addField("Attributes:", "- When you duel a player, for each following night until one of you dies, each of you chooses one:\n> - Charge: You gain one charge.\n> - Shield: You gain Basic defense for the night.\n> - Gun: You deal a Basic attack to the other player. Costs 1 charge.\n> - Reflect: You gain Powerful defense for the night and redirect all Basic attacks against you to the attacker tonight. Costs 1 charge.\n> - Dynamite: You deal a Powerful attack to the other player unless they're attacking you. Costs 2 charges.\n- You cannot die by any means other than duels.\n- The first two times you would die in a duel, instead, end the duel and the other player may choose any of Shield, Gun, Reflect, or Dynamite to permanently have as an ability that they may multitask for the rest of the game and they gain 2 charges.");

		e.addField("Goal:", "Kill 2 players.");
	});

	register_role(["veteran't", "veterant", "2313"], "Town", "Veteran't", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2313");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose to restrain yourself. (3 uses)\n- Visit a target and shoot everyone who visits them instead. (1 use)");

		e.addField("Attributes:", "- Redirect and roleblock immune.\n- You will shoot anyone who visits you unless you restrain yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["sketchpad", "2314"], "Neutral", "Sketchpad", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 2314");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check to see if someone's role is Creative. If it is not, immediately deal an Unstoppable Attack to them. If they survive, you will force reroll their role to another Creative role from the same alignment.");

		e.addField("Attributes:", "- All roles are creative other than:\n> Roles that are literally just copies of another role from the GIM thread or from other games\n> Example: Post 94 Jester\n> Roles that are almost the same as another role from the thread or from other games, but with one or two difference that isnt enough to make it original.\n> Example: Post 2248 Vigilanter\n- In cases where the identical roles are two roles from the thread, such as Post 130 Icy Rock and Post 2243 Ice Cube, the role with the lowest Post Number will be considered as Creative, and all the other copies wont.\n- This cannot spawn unless at least 1 non Creative role spawns.");

		e.addField("Goal:", "Ensure all roles alive at the end of the game are Creative.");
	});

	register_role(["nk_with_rasen_mechanic", "nkwithrasenmechanic", "nk", "rasen", "mechanic", "nwrm", "nrm", "2315"], "Neutral", "NK With Rasen Mechanic", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2315");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack two players each night.\n- Timewarp during the day. (Choose a previous night's actions and rewrite their targets. Everything is reprocessed from that point, so players who were rewritten to die have their later actions undone, but new feedback isn't given. Timewarping resolves at day end and is announced. You may only timewarp once.)");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["killer_spider", "killerspider", "killer", "spider", "ks", "2316"], "Neutral", "Killer Spider", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2316\n*A-A-A-A-Aishite*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Trap a player in your web. You may use this each night along with one of your other abilities. You know who is currently in your web at all times. This ability resolves after all other night abilities unless specified otherwise.\n- Poison a player in your web. This attack is Basic.\n- Devour a player in your web, dealing an Unstoppable attack to them and cleaning them. You may only use this ability if you're in the web yourself. (1 use)");

		e.addField("Attributes:", "- Players are notified when they're trapped in your web. Players in your web are slowed down, and their abilities will be delayed by one night.\n- Players can spend a night escaping from the web, though this is affected by the delay as well. Escaping your web resolves after you trap someone.\n- A player escaping from your web delays poison effects by one night.\n- You are immune to your own delays.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["face_stealer", "facestealer", "face", "stealer", "fs", "2317"], "Neutral", "Face Stealer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2317");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night.");

		e.addField("Attributes:", "- While you're in the game, all typing- day channel, whispers, factional channels, etc.- are processed through the relay command of the GIM bot. If it's unavailable for some reason, this role is rerolled.\n- The first time you kill someone, they will still appear to be alive, you will appear to die instead of them, and you will take over their identity. You won't gain their role, but all the messages you send will appear to be from your target. You'll also have access to all channels they had access to.\n- After your first kill, every time you kill a target, you will leave your previous identity and cause it to appear as dead, and you will take over your newest victim's identity.\n- The target whose identity you leave will have their real role used in the graveyard, including you.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["bloodpuncher", "2318"], "Neutral", "Bloodpuncher", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2318");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select someone to punch out all their blood.");

		e.addField("Attributes:", "- Spinebreaker (2319) will always spawn.\n- Your target is not notified you punched out all their blood until they die from it.\n- Speaking of, every hour, the host rolls a d5, if it rolls a 1, your target from last night spontaneously loses all their blood and fucking dies. If they don't die by the end of the day, they die immediately before the night.\n- You win with Spinebreaker (2319), and have a factional chat with them.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["spinebreaker", "2319"], "Neutral", "Spinebreaker", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2319");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select someone to rip out their spine and break it.");

		e.addField("Attributes:", "- Bloodpuncher (2318) will always spawn.\n- Your target will cry out in pain from their spine being broken, causing every non-killing visitor to go home in fear. The ones that don't will also have their spine ripped out and snapped in half.\n- You win with Bloodpuncher (2318), and have a factional chat with them.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["human_insect", "humaninsect", "human", "insect", "hi", "2319", "2319a"], "Neutral", "Human Insect", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2319A\n*Do you feel the pain...? The pain of ||a million bugs slowly tearing your skin apart with slow bites, crawling under your skin?||*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Send your flies to devour someone. If they have a factional chat or Conversion Immunity, attack them. Otherwise, their role changes to Crawling\n- Once there are at least 3 Crawlings alive, choose to appease your insects. If you do, sacrifice all alive Crawlings (killing them) and turn into Insect Abomination");

		e.addField("Attributes:", "- In addition to your night ability, you may redirect one Crawling of your choice to another player of your choice.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["crawling", "2319b"], "Neutral", "Crawling", {subCat: "Other", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2319B\n*Barely alive, brainless, a nightmare for the eyes. Is this really a better fate than death?*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Devour someone, attacking them.\n- Appease your lord, killing yourself but allowing the Human Insect to perform their ability twice the next night.");

		e.addField("Attributes:", "- The first time you are attacked, instead you arent and the attacker becomes Scared\n- Two nights after being converted to this role, you die.\n> Scared: Roleblocked for one night and blackmailed for one day.");

		e.addField("Goal:", "Ensure the Human Insect/Insect Abomination wins the game.");
	});

	register_role(["insect_abomination", "insectabomination", "insect", "abomination", "ia", "2319c"], "Neutral", "Insect Abomination", {subCat: "Other", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2319C\n*8 eyes, 12 limbs, half human half fly...nature's worst creation.*");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Attack someone, rampaging.");

		e.addField("Attributes:", "- Your Defense is based on how many Crawlings were sacrificed for someone to turn into this role. 3: Powerful, 4: Invincible, 5: Overprotective, 5+: Immortal");

		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["failed_experiment", "failedexperiment", "failed", "experiment", "fe", "2320"], "Neutral", "Failed experiment", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2320\n||*Long, wrinkled limbs, disproportionately large flanks. Two heads, a mix of a chicken and a human, and a disgusting tumor on the shoulder, some sort of teratoma-- a gross, fleshy mass of tissue made out of nails, bones, teeth.*||");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Rampage someone.");

		e.addField("Attributes:", "- Every night you had at least one successfull kill, you deteriorate. The first time you deteriorate, you no longer rampage. All other times, you lower your Attack and Defense by one for the rest of the game. You stop deteriorating when your Attack and Defense are Basic.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["ferryman", "2321"], "Other", "FERRYMAN", {subCat: "Psychopomp"}, (e) =>
	{
		e.setDescription("Post 2321\n*Have you ever wondered what happens after death? You meet this fine fellow here. If you have the money, he'll take you beyond death and into wherever you deserve to be.*");

		e.addField("Alignment", "Unique Afterlife Psychopomp", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Shepard a dead player. This brings them into the Underworld faction, though they will remain dead. They will become a Vengeful Spirit (role upcoming) You can only have up to three Wandering Spirits.");

		e.addField("Attributes:", "- If a dead player has Cash (Cash is accumulated by hoarding uses of limited use abilities, or being a faction head or Pirate), you may instead Put Them To Rest, where if their role was hidden by any means, it is revealed, and they cannot be used by any necromancers or retributionists, for their soul is now at peace. They become a Rested Spirit (role also upcoming)\n- You cannot Shepard a player who was killed by public opinion");

		e.addField("Goal:", "Bring the dead to peace. You do not care who wins, so long as there are more Rested Spirits than Vengeful Spirits.");
	});

	register_role(["vengeful_spirit", "vengefulspirit", "vengeful", "spirit", "vs", "2322"], "Other", "Vengeful Spirit", {subCat: "Spirit", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2322\n*What do you think happens to those who die with unfinished business? They continue to linger, until that business is finished*");

		e.addField("Alignment", "Afterlife Spirit", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Find your Slayer: You may use this ability once during the day to find out who was responsible for your death.\n- From there, you can attempt a Spiteful Retribution. Spiteful Retribution has a cooldown of one night, but at night you attack your killer. This begins at a Basic, and ramps up by one damage level every night.");

		e.addField("Goal:", "Become a Restful Spirit by slaying your killer.");
	});

	register_role(["restful_spirit", "restfulspirit", "restful", "spirit", "rs", "2323"], "Other", "Restful Spirit", {subCat: "Peace", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 2323\n*However, when someone passes on and is content with the life they've led, they can experience true peace.*");

		e.addField("Alignment", "Afterlife At Peace", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Console Loved One: Pull a person from your faction into a one-on-one conversation at night. This will not override Jailors, and functions similarly to a dead Medium's Seance. It will also protect this person with an Invincible defense for the night, while the ruler of wherever you ended up safeguards your conversation.");

		e.addField("Attributes:", "- At Rest: You cannot be summoned or revived by any means.");

		e.addField("Goal:", "You are at peace. You do not wish for anything.");
	});

	register_role(["unit", "2324"], "Beast", "Unit", {subCat: "Fire"}, (e) =>
	{
		e.setDescription("Post 2324");

		e.addField("Alignment", "Beast Fire", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shielding: Give another Beast Basic Defense for the night. If they are attacked, you will counterattack with a Basic Attack. This may self-target. Locked: Defend a second Beast.\n- Laser Cannon: Hit your target with a Basic Attack. If they survive, you will lower their defense by one level for the next night, to a minimum of Vulnerable. Locked: If you successfully kill, you will permanently upgrade your attack to Powerful.\n- Repetition (Locked, 3-shot): Use an ability that was used on you the previous night.");

		e.addField("Attributes:", "- Players killed by you will be shown as Blasted by Unit\n- You are aware of what abilities you are targeted by each night and what roles they came from.\n- Locked: If only two Beasts remain, the other Beast will gain permanent Basic Defense.\n- Unlock Condition: If the Town was the largest ‘Good’ faction at the start of the game, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["roggle", "2325"], "Beast", "Roggle", {subCat: "Fire"}, (e) =>
	{
		e.setDescription("Post 2325");

		e.addField("Alignment", "Beast Fire", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Wreck: Deal a Powerful Attack to your target. Locked: Additionally, their role will be hidden.\n- Dino Fireball: Deal a Basic Attack to your target and roleblock them. Locked: Additionally, ignore any protective roles targeting your target. They will be informed that they failed, but not why.\n- Volcano Strike (Locked, 1-shot): Deal a Powerful Rampage Attack to your target and Basic Attack anyone who visits you.");

		e.addField("Attributes:", "- Players killed by you will be shown as Crushed by Roggle\n- Locked: The first time you are targeted by a Florae Investigative role, you will counterattack with a Basic Attack.\n- Unlock Condition: If the Florae was the largest ‘Good’ faction at the start of the game, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["drak", "2326"], "Beast", "Drak", {subCat: "Air"}, (e) =>
	{
		e.setDescription("Post 2326");

		e.addField("Alignment", "Beast Air", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Headwind: Choose two players. They will target each other instead of their original targets. This does not redirect City votes. Locked: In addition, you will learn what abilities were used.\n- Divebomb: Deal a Basic Attack to your target. If you are killed during this night, this attack will be Unstoppable instead. Locked: In addition, rampage, regardless of attack power.\n- Oppressive Winds (Locked, 2-shot): Roleblock four players.");

		e.addField("Attributes:", "- Players killed by you will appear as Divebombed by Drak\n- Locked: The first time a Beast is selected for an Investigation vote while you are alive, you or the targeted Beast may choose what the result is. (If you disagree for whatever reason, their choice takes priority)\n- Unlock Condition: If the City was the largest ‘Good’ faction at the start of the game, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["songun", "2327"], "Beast", "Songun", {subCat: "Air"}, (e) =>
	{
		e.setDescription("Post 2327");

		e.addField("Alignment", "Beast Air", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Supersonic: Redirect a target randomly. They will not be redirected to a Beast. Locked: If they don’t visit anyone, they will instead deal an Overkill Attack to themselves.\n- Marching Tune: Invigorate a Beast. They will become roleblock and redirect immune for the night. Locked: In addition, if they are attacking, the attack will be upgraded by one tier, to a maximum of Overkill.\n- Blaring Sirens (Day, Locked, 2-shot): Choose a target. They will be Authorized tonight, and a random player Authorized by the Sentry Power role today simply will not be Authorized.");

		e.addField("Attributes:", "- Players killed by you will appear as Blasted by Songun\n- Locked: If you are Authorized, you will see who visits you and may choose up to 2 visitors each night to roleblock passively and astrally.\n- Unlock Condition: If the Sentries was the largest ‘Good’ faction at the start of the game, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["tweed", "2328"], "Beast", "Tweed", {subCat: "Dark"}, (e) =>
	{
		e.setDescription("Post 2328");

		e.addField("Alignment", "Beast Dark", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Vulnerable", true);

		e.addField("Abilities:", "- Umbramagia: Hit your target with a Basic Attack. In addition, you will blind a random player who visited your target that night, causing them to see no night feedback. Locked: In addition, you will Demotivate the blinded player.\n- Curse: Target two players. Their Defense will be lowered by 1 level, to a minimum of Vulnerable, for this night. Locked: In addition, you will Demotivate one target at random.\n- Crushing Despair (Locked, 2-shot): Stay at home for the night and raise your Defense to Basic. Anyone who visits a Beast tonight will become Demotivated.");

		e.addField("Attributes:", "- Players killed by you will appear as Voided by Tweed\n- If you die because of your Vulnerable Defense, you will appear as a role of your choice and with the cause of death Voided by Tweed.\n- Locked: If a player who is already Demotivated becomes Demotivated another time, their defense will lower permanently by 1 tier. If this would cause their Defense to fall below Vulnerable, they will die by heart attack. Beasts cannot become Demotivated.\n- Locked: If all Army players discounting the Marshal are Demotivated, the Marshal will instantly be hit by an Overkill Attack.\n- Unlock Condition: If the Army was the largest ‘Good’ faction at the start of the game, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["pixelroggle", "2329"], "Beast", "PixelRoggle", {subCat: "Light"}, (e) =>
	{
		e.setDescription("Post 2329");

		e.addField("Alignment", "Beast Light", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pixelate: Target a player. If the ability they use has multiple effects, it is reduced to only the first one. Locked: In addition, you learn what effects, if any, were canceled.\n- Surprise Attack: Deal an Astral Basic Attack to a player. Locked: If the target is hacking a node tonight, anyone else hacking that node will have their success chances reduced by 5% (ie 20% -> 15%)\n- Obstruct (Locked, 2-shot): Choose a node on the network. All hack attempts on it will fail tonight. This cannot be used on the Master Node.");

		e.addField("Attributes:", "- Players killed by you will appear as Collapsed by PixelRoggle\n- Locked: Each night, you may choose a node. You will appear to be hacking it to any Investigative that detect visits or hacks.\n- Unlock Condition: If the NETSEC was the largest ‘Good’ faction at the start of the game, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["monitor", "2330"], "Beast", "Monitor", {subCat: "Light"}, (e) =>
	{
		e.setDescription("Post 2330");

		e.addField("Alignment", "Beast Light", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Disable: Target a player. If they have more than one ability, you will disable one at random until the end of the next night. Otherwise, this does nothing. Locked: You will also disable one attribute they have.\n- Scramble Connection (Locked, 1-shot): Target a player. If they are in Node Maintenance the next day, they will Hack for the Beast faction, even if they are NTF.\n- Disconnect (Day, Locked, 1-shot): Skip Node Maintenance for the day. Must be used before Node Maintenance starts.");

		e.addField("Attributes:", "- Players killed by you will appear as Wiped by Monitor\n- Locked: If any Beast is in Node Maintenance during the day, you will learn what all players in that Maintenance choose and what, if any, abilities were gained from it.\n- Unlock Condition: If the NTF was the largest ‘Good’ faction at the start of the game, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["anj", "2331"], "Beast", "Anj", {subCat: "Light"}, (e) =>
	{
		e.setDescription("Post 2331");

		e.addField("Alignment", "Beast Light", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Cura: Target a player. If they are attacked, you will give them Powerful Defense. Both you and your target will know if you save them.\n- Prayer (2-shot): Give all members of the Beast faction, excluding yourself, Basic Defense. Locked: You gain one additional shot of this.\n- Shining Light (Locked, 2-shot): Target a Beast. You will passively and astrally roleblock the first person who attempts to kill your target by any means while you are still alive. This cannot save the target from a lynch.");

		e.addField("Attributes:", "- Players killed by you will appear as Judged by Anj\n- Locked: You have a 2-shot Basic autovest.\n- Unlock Condition: If you save a player from death by any means, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["novacryst", "2332"], "Beast", "Novacryst", {subCat: "Light"}, (e) =>
	{
		e.setDescription("Post 2332");

		e.addField("Alignment", "Beast Light", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Generate Barrier (2-shot): Place two ‘barriers’ on the player list for tonight, splitting the player list in two. Any actions that target a player on the other side of the barrier will fail. Locked: Beasts ignore the barriers and may target anyone.\n- Antithesis (1-shot): Reverse attacking and defending abilities. Any ability that deals an attack will instead grant defense of the same tier, and any ability that grants defense will instead deal an attack of the same tier.\n- Release Energy (Locked): Every time you are attacked after unlocking this, you will store the attack, which you may then use as a night action without invoking the direct attack limit.");

		e.addField("Attributes:", "- Players killed by you will appear as Refracted by Novacryst\n- If you are attacked and survive, you will instantly deal a counterattack with a tier one lower than the original attack’s power to the attacker.\n- You have a 2-shot Powerful autovest.\n- Unlock Condition: After you are attacked for the first time, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["indra", "2333"], "Beast", "Indra", {subCat: "Dark"}, (e) =>
	{
		e.setDescription("Post 2333");

		e.addField("Alignment", "Beast Dark", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Electrocute: Deal a Basic attack to a player. If they are Damp, this attack is Powerful instead and will Rampage on any other Damp players visiting your target.\n- Stormy Skies: Target a player. They will become Damp until the end of the next night. Locked: You may now use this ability during the day.\n- Darkest Night (Locked, 1-shot): Target up to four players Astrally. They will not receive any night feedback tonight and become Damp until the end of the next night.");

		e.addField("Attributes:", "- Players killed by you will appear as Electrocuted by Indra\n- Players who visit you will become Damp.\n- Players are not informed that they are Damp.\n- Locked: You know all players who are Damp at any given time.\n- Unlock Condition: If you are visited twice in one night, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["scurver", "2334"], "Beast", "Scurver", {subCat: "Dark"}, (e) =>
	{
		e.setDescription("Post 2334");

		e.addField("Alignment", "Beast Dark", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Crunch: Deal a Powerful Attack to a player. You cannot use Crunch the next night. Locked: This attack is now Unstoppable and does not have a cooldown.\n- Tidal Wave (2-shot): Target a player. They will be roleblocked by you tonight and Astrally the next night. Locked: In addition, you can choose to deal a Basic Attack to them.\n- Last Stand (Locked, 1-shot): The next day, the first person to vote for you will instantly be hit by an Overkill Attack. This ability cannot be unlocked by Snowball, and it cannot be refilled or recharged by any means.");

		e.addField("Attributes:", "- Players killed by you will appear as Crushed by Scurver\n- Locked: You have passive Basic Defense\n- Unlock Condition: if you are the last remaining Beast, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["skullbug", "2335"], "Beast", "Skullbug", {subCat: "Dark"}, (e) =>
	{
		e.setDescription("Post 2335");

		e.addField("Alignment", "Beast Dark", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scuttle About: Visit a player. This visit has no effects. Locked: In addition, the player you visit will be framed as a role of your choosing for the night.\n- Sting: Deal a Basic Attack to your target. Locked: In addition, your target will be permanently framed as a role of your choosing if they survive.\n- Behind The Scenes Manipulation (Locked, 1-shot): All Investigative results done by ‘Good’ players tonight will be wrong. How this is executed is up to host discretion.");

		e.addField("Attributes:", "- Players killed by you will appear as Stung by Skullbug\n- At the beginning of the game, you may choose a disguise role to appear as to Investigative roles.\n- Locked: All Beasts may now choose disguise roles.\n- Unlock Condition: If you are targeted by an Investigative role, or if your action is seen by an Investigative role, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["babawin", "2336"], "Beast", "Babawin", {subCat: "Air"}, (e) =>
	{
		e.setDescription("Post 2336");

		e.addField("Alignment", "Beast Air", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tailwind (2-shot): Support a Beast, making them roleblock immune for the night and increasing their ability’s attack tier by 1, if applicable. Locked: In addition, they will gain a secret additional vote tomorrow that they can cast tomorrow.\n- Windy Reversal (2-shot): Target two players. If the first attacks for any reason, that attack will be redirected to the second. Locked: Additionally, if the second attacks for any reason, that attack will be redirected to the first.\n- Tornado’s Uproar (Locked, 1-shot): Target a player. If you are lynched tomorrow, the player you targeted will be lynched as well.");

		e.addField("Attributes:", "- Players killed by you will appear as Blown Away by Babawin\n- Locked: If a day ends with a Beast lynch, the Beasts may use a second attacking ability the next night.\n- Unlock Condition: After you receive a total of at least 3 votes over the course of the game, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["grigg", "2337"], "Beast", "Grigg", {subCat: "Air"}, (e) =>
	{
		e.setDescription("Post 2337");

		e.addField("Alignment", "Beast Air", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sylvan Flame: Deal a Basic Attack to your target. Locked: This ability does a Powerful Attack if at least 3 Beasts are alive, and an Unstoppable Attack if 5 or more Beasts are alive.\n- Disappearance: Deal a None Attack to your target. If they die tonight, their death will not be revealed until a player attempts to visit them (starting on the next night). Locked: This now deals a Basic Attack.\n- Attain Perfection (Locked, 1-shot): If no Beasts die between now and the end of the day following the next, the Beasts will instantly win. (ie if this is used on Night 2, Beasts win on the End of Day 4). This cannot be used if you are the only living Beast.");

		e.addField("Attributes:", "- Players killed by you will appear as Grilled by Grigg\n- Locked: Your presence in the game is announced if you are alive and Unlocked at the beginning of Day 3.\n- Unlock Condition: If no Beasts died before the end of Day 2 (including lynch), Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["9mm_kiwi", "9mmkiwi", "9mm", "kiwi", "9k", "2338"], "Beast", "9mm Kiwi", {subCat: "Fire"}, (e) =>
	{
		e.setDescription("Post 2338");

		e.addField("Alignment", "Beast Fire", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Flame Shot: Deal a Basic Attack to your target. If you kill them, their role will appear as [BURNED]. Locked: If they survive, you will disable their ITA for the next day.\n- Take Flight (2-shot): At the end of the night, you will see all players who visit you, and you may choose up to two to roleblock. Locked: In addition, any ITAs against you tomorrow will miss.\n- Take Aim (Locked, 1-shot): You are guaranteed to hit your first ITA shot tomorrow.");

		e.addField("Attributes:", "- Players nightkilled by you will appear as Shot by 9mm Kiwi\n- Locked: While you are alive, all Beasts have their ITA hit chances increased by 5%.\n- Unlock Condition: If the game has ITAs, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["imp", "2339"], "Beast", "Imp", {subCat: "Fire"}, (e) =>
	{
		e.setDescription("Post 2339");

		e.addField("Alignment", "Beast Fire", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Impale: Deal a Basic Attack to your target. If they survive, but only had Basic Defense, they will be muted and unable to vote the next day.\n- Singe: Deal a Basic Attack to your target and cause any attacks they perform tonight to fail. Locked: If they have been involved in a host error at any point in this game, deal a Powerful Attack and guaranteed roleblock instead.\n- Make Mischief (Locked, 1-shot): The host must make an ‘error’ that benefits the Beast faction tonight.");

		e.addField("Attributes:", "- Players killed by you will appear as Roasted by Imp\n- Locked: You are aware of all host errors that occur.\n- Unlock Condition: If the game is a Bastard game or if there is a host error, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["gef", "2340"], "Beast", "Gef", {subCat: "Water"}, (e) =>
	{
		e.setDescription("Post 2340");

		e.addField("Alignment", "Beast Water", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Bite: Deal a Basic Attack to your target. They will also Flinch, which has all properties of a roleblock, except they are not notified of it.\n- Storm Surge (2-shot): Choose up to 3 players. For the next three nights, one of them will Flinch, with the order determined by ascending post count order. Locked: In addition, you will learn the order.\n- Snowball (Locked, 1-shot): Occurs instantaneously. All Beasts are Unlocked for this phase. They will become Locked again after the phase ends.");

		e.addField("Attributes:", "- Players killed by you will appear as Bitten by Gef\n- Locked: You have passive Basic Defense.\n- Unlock Condition: If any beast has used all of their abilities (including Locked abilities) at least once, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["florg", "2341"], "Beast", "Florg", {subCat: "Water"}, (e) =>
	{
		e.setDescription("Post 2341");

		e.addField("Alignment", "Beast Water", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attracting Light: Target a player. Anyone who visits them will instead be redirected to visit you. Locked: In addition, anyone hit by this will be redirected to you the next night as well.\n- Sea Vent (3-shot): Place a trap on a player. The next night, a random person who visits that player will be redirected to visit you. Attacks will never be redirected by this. Locked: Newly placed traps last for an additional night.\n- Devour (Locked, 2-shot): Deal a Powerful Attack to anyone who visits you and gain Basic Defense.");

		e.addField("Attributes:", "- Players killed by you will appear as Devoured by Florg\n- Locked: If you are not visited during the night, you will gain an additional charge of Devour.\n- Unlock Condition: After drawing a total of at least three visits to you using your abilities, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["demicampus", "2342"], "Beast", "Demicampus", {subCat: "Water"}, (e) =>
	{
		e.setDescription("Post 2342");

		e.addField("Alignment", "Beast Water", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Revised Location: Transport yourself with another player, causing visits towards them to visit you instead and vice versa. Locked: This will not redirect Killing abilities originally targeting the person you’re swapping with.\n- Boiling Basking: Anyone who visits you tonight will be roleblocked Astrally if they try to visit you again. Locked: Additionally, if they are a Killing role, attempting to visit you again will cause them to attack themselves.\n- Betrayal (Locked, 1-shot): Target a player. If they are a Killing role, you will know what role they are and may choose any target for their ability tonight. This ignores redirect immunity, but does not count against your Guilt attribute.");

		e.addField("Attributes:", "- Players killed by you will appear as Boiled by Demicampus\n- Locked: All Good Killing players now have a hidden guilt mechanic causing them to hit themselves with an Overkill Attack the night after killing another Good player.\n- Unlock Condition: If a Killing (or equivalent) role kills a member of their own faction, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["lupup", "2343"], "Beast", "Lupup", {subCat: "Water"}, (e) =>
	{
		e.setDescription("Post 2343");

		e.addField("Alignment", "Beast Water", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None/Basic", true);

		e.addField("Abilities:", "- Howl to the Moon (1-shot): Your presence will be revealed to the town, but all Investigative abilities will fail tonight. This may only be used on Full Moon nights.\n- Mauling: Deal a Basic Attack to your target. Locked: If it is a Full Moon night, the attack becomes a Powerful Rampage attack.\n- Solar Eclipse (Locked, 1-shot): During the next day, no player may be lynched/voted. If the town was already unable to lynch/vote for some reason, you will instead disable the Day Chat- players will only be able to communicate via whisper.");

		e.addField("Attributes:", "- Players killed by you will appear as Mauled by Lupup\n- Locked: You have Basic Defense during Full Moons\n- Unlock Condition: After the first Full Moon, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["bgeln", "2344"], "Beast", "Bgeln", {subCat: "Earth"}, (e) =>
	{
		e.setDescription("Post 2344");

		e.addField("Alignment", "Beast Earth", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Gastric Acid (1-shot): Deal a Basic Attack to a player. If they survive, you will set their Defense to None and prevent any Protective roles from visiting them for the following night. Locked: Gain 2 additional shots.\n- Overgrowth (1-shot): Astrally target a player. They will be roleblocked and unable to whisper or speak the next day. Locked: Gain 2 additional shots.\n- Dissolve (Locked, 1-shot): Target a player and name a role. If that player is that role, they will be hit by an Astral Overkill attack. If this fails, the ammo will not be refunded.");

		e.addField("Attributes:", "- Players killed by you will appear as Melted by Bgeln\n- Unlock Condition: If any player claims (by host determination) a Power (or factional equivalent) role belonging to a ‘Good’ faction, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["bolar", "2345"], "Beast", "Bolar", {subCat: "Earth"}, (e) =>
	{
		e.setDescription("Post 2345");

		e.addField("Alignment", "Beast Earth", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Astonish: Target a player during the night. They will be restricted to 10 messages in Day Chat the next day. Locked: This effect lasts for two days.\n- Revelation: Target a player during the night. They will be unable to send or receive whispers for the next day. Locked: This effect lasts for two days.\n- A Hat Made of ENERGY! (Locked, 1-shot): The next day, all players will be under the effects of both Astonish and Revelation.");

		e.addField("Attributes:", "- Players killed by you will appear as AWED BY BOLAR (yes hosts, it must be capital letters)\n- Locked: If you are lynched, you may choose to deal an Overkill attack to the player who caused you to Unlock.\n- Unlock Condition: If any of the words “hat”, “energy”, “robot”, or a randomly selected five letter word that the host informs you of at the start of the game is spoken by a non-Beast, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["terrnip", "2346"], "Beast", "Terrnip", {subCat: "Earth"}, (e) =>
	{
		e.setDescription("Post 2346");

		e.addField("Alignment", "Beast Earth", true);
		e.addField("Attack", "Basic (Variable)", true);
		e.addField("Defense", "None (Variable)", true);

		e.addField("Abilities:", "- Grassplosion: Deal a Basic Attack to a player. Locked: This attack will have one of the following modifiers: Rampage (attack target’s visitors), Chain (attack target’s target), Astral (does not count as a visit), Cleaning (hides target’s role as CLEANED if successful), Powered (deals a randomly selected attack tier from None to Overkill)\n- Uproot (3-shot): Target a player. They will be redirected to target a random player each night unless they spend a night taking no action. They will be informed of having this status.\n- Chaotic Mess (Locked, 2-shot): During the next day, all whispers will appear to be correct, but will instead be sent to random targets. In addition, you will see all whispers sent and know their original targets.");

		e.addField("Attributes:", "- Players killed by you will appear as Blown Up by Terrnip\n- Locked: Your defense each night will be randomly selected, from Vulnerable to Invincible. You will be told what your defense is each night.\n- Unlock Condition: If any ability that has a random target or effect targets you, Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["stywracj", "2347"], "Beast", "Stywracj", {subCat: "Earth"}, (e) =>
	{
		e.setDescription("Post 2347");

		e.addField("Alignment", "Beast Earth", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Defend: Target another Beast. One random attack or negative effect against them will be redirected to you. Locked: This can redirect up to two effects and will not inform the original ability user that they were redirected.\n- Endure (2-shot): If you would die tonight, you simply do not. In addition, you will learn the identity of anyone who deals a negative effect to you, including attacks.\n- Dino Roar (Locked, 1-shot): All Protective (or similar) roles are Astrally roleblocked tonight, piercing roleblock immunity.");

		e.addField("Attributes:", "- You are immune to most negative effects (besides attacks/lynches)- If the host deems it to be “harmful”, it does not effect you, you will know what happened, but the original ability user will not be informed that they failed. Investigations do not count as “harmful”, roleblocks and redirects do.\n- You have passive Basic Defense.\n- Unlock Condition: If you are targeted by a Protective or Support role that would deal a harmful effect to you (including attacking), Unlock.");

		e.addField("Goal:", factions.Beast.goal);
	});

	register_role(["blackmailer", "2348"], "Mafia", "Blackmailer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2348");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one person each night to Blackmail.");

		e.addField("Attributes:", "- Blackmailed targets cannot talk during the day.\n- You can hear private messages.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["whitemailer", "2349"], "Town", "Whitemailer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 2349");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one person each night to Whitemail.");

		e.addField("Attributes:", "- Whitemailed targets can read all whispers during the day.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["greymailer", "2350"], "Neutral", "Greymailer", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 2350");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one person each night to Greymail.");

		e.addField("Attributes:", "- Greymailed targets can talk normally during the day disregarding any effects that may inhibit or otherwise impact their speech.\n- Choose a player during the day to receive their whispers for the remainder of the day.\n- Players will be greymailed for the day phase after you Greymail them.");

		e.addField("Goal:", "Have a greymailed target send at least 69 messages during the day phase, at least three times.");
	});
};
