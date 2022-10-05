module.exports = (g) =>
{
	const {register_role, factions, EVIL} = g;

	register_role(["unholy_knight", "unholyknight", "unholy", "1101", "57u"], "Unseen", "Unholy Knight", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1101\nConverted from: Crusader");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Stand Guard (Night): Protect a player, granting Powerful defense, and attacking one random visitor.\n- Targeted Strike (Night): Protect a player, granting Powerful defense. You may select a subalignment type or player, or both (or several of both) to specifically attempt to attack. 2 uses.\n- For The Unseen God! (Day): Attack one random voter of the Mastermind. If the Mastermind is dead, this will target the Assassin instead. 1 use.");

		e.addField("Attributes:", "- You *can* kill Vampires.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["rhapsodist", "rhap", "1102"], "Town", "Rhapsodist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1102\n*Perspicacious and assiduous as ever.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Research a player at night about their role.");

		e.addField("Attributes:", "- The host will put their role name into https://www.thesaurus.com/ and pick the most fancy-sounding synonym on the page, which you will learn.\n- If their role has multiple words, the root noun is chosen.\n- If there is no page available, you will instead receive a sheriff result (suspicious/not suspicious).\n(Note - Synonyms for words aren't guaranteed to go both ways.)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bounty_hunter", "bountyhunter", "bounty", "hunter", "1103"], "Neutral", "Bounty Hunter", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1103");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You can use a protective vest to protect yourself at night. These vests give you Basic defense and may be used only 3 times.");

		e.addField("Attributes:", "- You will be given a random bounty every night.");

		e.addField("Goal:", "Live to see your bounties die through any means necessary.");
	});

	register_role(["tatsus_creation", "tatsuscreation", "tatsus", "tatsu's_creation", "tatsu'screation", "tatsu's", "creation", "tc", "1104", "1059u"], "Unseen", "Tatsu's Creation", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1104\nConverted from: Experiment");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack (Night) - Attack someone at night.\n- Smth Else (Night) (1-use) - Attack an additional target tonight.");

		e.addField("Attributes:", "- Roleblock Immunity\n- Control Immunity\n- You clean people who you kill, hiding their will and role. You do not get this information.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["clone", "1105"], "Any", "Clone", {anyExCat: ["Town", "Neutral"]}, (e) =>
	{
		e.setDescription("Post 1105");

		e.addField("Alignment", "Any", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- Clone someone during the day to use their role at night.");

		e.addField("Attributes:", "- Whenever you clone someone, for the next night and the next day, you will be that role for all intents and purposes except for win con. You will still be able to clone during the day if you are another role.\n- You will be on a random factional evil team. (for balanced lists, you will be one of the evil factions that can spawn, and you can spawn in a REF slot).\n- You may not start as town aligned.\n- If you copy a role that lets you change your win con, you will be told your ability failed the following night, and you will not become that role.");

		e.addField("Goal:", "Kill all who would oppose you and your faction.");
	});

	register_role(["apiarist", "1106", "792u"], "Unseen", "Apiarist", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1106\nConverted from: Beekeeper");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use 1 bee and sting a player and they will be roleblocked and their attributes will be roleblocked.\n- Use 2 bees, investigate 3 players and find their roles.\n- Use 3 bees and deal a powerful attack to 2 players.");

		e.addField("Attributes:", "- You will earn 1 bee every night.\n- You can use 3 abilities per night.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["medic", "1107", "58u"], "Unseen", "Medic", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1107\nConverted from: Doctor");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Heal (Night): Heal a player, granting Powerful defense and curing poison, bleeding, or other similar effects.\n- Self-Heal (Night): Heal yourself, 1 use.\n- Anti-Heal (Night): Cause a player to bleed. They will die in two nights unless healed. 2 uses.");

		e.addField("Attributes:", "- Your target will be notified if they were bled.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["surprise", "1108"], "Neutral", "Surprise", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1108");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose another player each day. Three random abilities from three random roles will be used on them, but they resolve immediately. This won't roll abilities that only work at night (i.e. roleblocks), investigative abilities, or other lame stuff.");

		e.addField("Attributes:", "- This role appears when you least expect it.");

		e.addField("Goal:", "Surprise the town.");
	});

	register_role(["paladin", "1109"], "Town", "Paladin", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1109");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scout (Day): Learn if your target was visited by any conversion capable faction last night. You will learn which faction visited them, or all if multiple did.\n- Listen In (Day): Select a conversion capable faction, you will hear their messages. Messages that refer to a player by name will have the name censored, regardless of who is being referred to. 1 use only.\n- Examine (Night): Check a player to see if they are a member of a conversion capable faction. You will learn which faction and will bypass Detection Immunity.\n- Retaliate (Night): If you or your target is converted, block the conversion and attack the converter. You may prevent multiple conversions, but will not attack other non-converting roles, including killing roles. 2 uses.");

		e.addField("Attributes:", "- \"Conversion capable faction\" refers to those factions which fit the definition which was previously given.\n- You are able to be converted, unless using Retaliate.\n- If all conversion roles and factions are completely eradicated, you will turn into a random Town Power role. Standard reroll rules apply, however the amount of rerolls you had at the beginning of the game will transfer over.\n- If you spawn without a conversion capable faction in the game, immediately become a new Town Power role.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["deluxe", "del", "1110"], "Any", "Deluxe", {subCat: "Killing", spawnCat: EVIL}, (e) =>
	{
		e.setDescription("Post 1110");

		e.addField("Alignment", "Any Evil Faction (Killing)", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, choose a player. You will attack them, but then they will also magically be converted into whichever faction you're a part of.\n- At night, choose a dead player to revive.");

		e.addField("Attributes:", "- You can only revive a single player.\n- Your conversions must comply with any member limit that your faction has.");

		e.addField("Goal:", "Win with whichever faction you're a member of.");
	});

	register_role(["incarnation_of_you", "incarnationofyou", "incarnation", "you", "1111"], "Neutral", "Incarnation of You", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1111");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Incarnation of You has all abilities and attributes that the player who rolls it has been during all previous GIM games. See Abomination of Salem (956) for specifics.\n- You must have played at least 2 games of GIM to roll this role.");

		e.addField("Goal:", "- If you have a >50% winrate: Live to see the Town lose the game.\n- If you have a <50% winrate: Win with the Town.");
	});

	register_role(["sightseer", "1112"], "Umbrae", "Sightseer", {subCat: "Agent"}, (e) =>
	{
		e.setDescription("Post 1112");

		e.addField("Alignment", "Umbra Agent", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Eviscerate (Day): Cause a target to begin bleeding, they will die in two nights unless healed. Cannot be protected against unless by a Day Town Protective. 2 uses.\n- Blood Check (Night): Check a player for umbral blood. You will be notified if they are a member of your team.");

		e.addField("Attributes:", "- No access to the factional chat.\n- No access to promotion until they are the last member, in which they will become the Umbra (Assault).\n- Does not know team members.\n- Conversion Immunity");

		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["acheron", "1113"], "Coven", "Acheron", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1113\n*From the river frontier of the underworld, you shall rise.*");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per game, revive a townie and initiate them into the Coven.");

		e.addField("Attributes:", "- Town Power roles turn into Lunatic Hell Fairy (949)\n- Town Investigative roles turn into Synesthesia (478)\n- Town Killing roles turn into M-63 Plamen Artillery Piece (299)\n- Town Protective roles turn into Thaumaturge (300)\n- Town Support roles turn into Augur (428)\n- Any other subalignments turn into Bloodbender (903)\n- With the Necronomicon, you may use any of the unboosted abilities of the roles above. They function as if you were that role for that night.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["underdog", "1114"], "Mafia", "Underdog", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1114");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Cinderella Story** — Whenever you fail to kill someone, unlock the next set of bracketed text in your Uppercut ability.");

		e.addField("Attributes:", "- **Uppercut** — Attack someone every full moon. [This attack is Powerful and bypasses protective effects.] [You'll also deal a Basic attack to a random one of your target's non-Mafia visitors.] [You can use this ability twice each night.] [You only have one use of this ability.]\n- **Underhanded Deal** — Spend the night to unlock the next set of bracketed text in your Uppercut ability. You may only do this Night 3 and onwards.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["chopper", "1115"], "Mafia", "Chopper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1115");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night, {mod}killing them. {This uses up a charge, which you only have two of.}\n- **Cleave** during the day.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["curse_of_first_blood", "curseoffirstblood", "curse", "first_blood", "firstblood", "cofb", "1116"], "Neutral", "Curse of First Blood", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 1116");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Modkill", true);
		e.addField("Defense", "\"Modkill-resistant\"", true);

		e.addField("Attributes:", "- If you are attacked first, counter the attack with a modkill level attack and steal their role. You lose Modkill attack and defense upon doing so.\n- If you die first via lynching, you automatically revive, steal a random role contrary to the majority of the game, and kill all your guilty voters.\n- If you do not die first, you become a jester (Post 90).");

		e.addField("Goal:", "Die first, then win with your new goal.");
	});

	register_role(["jailor_power", "jailorpower", "jailor_tpo", "jailortpo", "jailor", "jbiftp", "1117"], "Town", "Jailor, but it's finally Town Power", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1117");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may choose one person during the day to Jail for the night.");

		e.addField("Attributes:", "- You may anonymously talk with your prisoner.\n- You can choose to execute your prisoner, except during Night 1.\n- The jailed target can't perform their night ability.\n- If you execute a Town member, you forfeit further executions.\n\n- All other visiting abilities used on the jailed person will fail; they will be notified that their target was jailed.\n- The jailed target gains Powerful Defense.\n- Your death note can be whatever you want.\n- If another night chat is opened with you you can use both that and your jail chat seperately.\n- You can spawn with Everfrost.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["author", "1118"], "Umbrae", "Author", {subCat: "Agent"}, (e) =>
	{
		e.setDescription("Post 1118");

		e.addField("Alignment", "Umbra Agent", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Moonlight (Day): Haul a player off to jail, they will believe to have been jailed by a Jailor.\n- Eliminate (Night): Execute your prisoned player, this may be done night one. 2 uses.\n- Moon Pressure (Night): Immediately learn your target’s role. 1 use.");

		e.addField("Attributes:", "- Roleblock, Control, Conversion immune.\n- Does not attend the nightly Umbrae meeting.");

		e.addField("Goal:", factions.Umbrae.goal);
	});

	register_role(["amme", "1119"], "City", "Amme", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1119");

		e.addField("Alignment", "City Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night, visit a player. You will roleblock them.");

		e.addField("Attributes:", "- Roleblock Immunity");

		e.addField("Goal:", factions.City.goal);
	});

	register_role(["vladimir_wise", "vladimirwise", "vladimir", "wise", "1120"], "City", "Vladimir Wise", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1120");

		e.addField("Alignment", "City Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night, attack a player. You may do this 3 times. You cannot kill on N1");

		e.addField("Attributes:", "- If you kill another City member, you cannot kill for the rest of the game.");

		e.addField("Goal:", factions.City.goal);
	});

	register_role(["europa_tau", "europatau", "europa", "tau", "1121"], "City", "Europa Tau", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1121");

		e.addField("Alignment", "City Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Look into a target's opposition at night. You will know how many people opposing your target voted them yesterday.");

		e.addField("Goal:", factions.City.goal);
	});

	register_role(["kumiho", "1122"], "Fox", "Kumiho", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 1122");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- The seducer of the fox kind. Every night you may choose a player. For the rest of the game this player will have a vote power of 0 against you. This ability can be used a total of 3 times.");

		e.addField("Attributes:", "- Cannot perform the factional kill and use ability the same night.");

		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["ahri", "1123"], "Fox", "Ahri", {subCat: "Beta"}, (e) =>
	{
		e.setDescription("Post 1123");

		e.addField("Alignment", "Fox Beta", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- A spirit realm fox. They are able to control the emotions of a player. Your target may not perform actions on any players they have previously performed one on the following night.");

		e.addField("Attributes:", "- Cannot perform the factional kill and use ability the same night.");

		e.addField("Goal:", factions.Fox.goal);
	});

	register_role(["sirena_luz", "sirenaluz", "sirena", "luz", "1124"], "City", "Sirena Luz", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1124");

		e.addField("Alignment", "City Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At night, visit another player. You will kill one random non-city visitor. Your target also gains Basic Defense for the night, if they do not already have defense. All City visitors will learn your name.");

		e.addField("Goal:", factions.City.goal);
	});

	register_role(["raphael_de_la_pena", "raphaeldelapena", "raphael", "rdlp", "1125"], "City", "Raphael De la Peña", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1125");

		e.addField("Alignment", "City Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night, visit one player. If anybody tries to attack them, they will get roleblocked.");

		e.addField("Goal:", factions.City.goal);
	});

	register_role(["specter", "1125"], "Stalker", "Specter", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 1125");

		e.addField("Alignment", "Unique Stalker Espionage", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Embody another player at night.");

		e.addField("Attributes:", "- You will deal a Powerful attack to one random player who is targeting your target. You can attack players who do not visit your target, or leave their homes at all.\n- Your ability cannot be stopped by jail or imprisonment, or any ability which stops other abilities, except by you being directly roleblocked.\n- All those eligible for death who are not attacked will learn your name.\n- You can attack other Stalker players, but you will always attack them last.\n- Your attack is considered a direct and a non-direct attack, meaning you can be killed by Bodyguards, Trappers, etc.");

		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["julia_piero", "juliapiero", "julia", "piero", "1126"], "City", "Julia Piero", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1126");

		e.addField("Alignment", "City Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every day, pick 3 players to put on a show for. You will receive their roles, but you won't know who has what role.");

		e.addField("Attributes:", "- You cannot perform for the same group of 2, nor can you perform for someone twice in a row.");

		e.addField("Goal:", factions.City.goal);
	});

	register_role(["apparition", "1127"], "Stalker", "Apparition", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 1127");

		e.addField("Alignment", "Unique Stalker Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Absorb a dead player at night.");

		e.addField("Attributes:", "- Roleblock and Control Immunity\n- You will gain 2 charges of the non-killing abilities of the dead player.\n- You can use up to 2 abilities per day/night cycle.\n- Players targeted by your abilities are notified that an Apparition visited them.\n- You cannot absorb abilities that kill. You do not gain Defense from absorbing abilities.\n- You can absorb Town Power abilities.\n- If you absorb a Mayor and reveal, the extra votes will disappear the next day.\n- You can target dead players any number of times, but you cannot absorb and use a stolen ability in the same night.");

		e.addField("Goal:", factions.Stalker.goal);
	});

	register_role(["alex_wispon", "alexwispon", "alex", "wispon", "1128"], "City", "Alex Wispon", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1128");

		e.addField("Alignment", "City Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every day, pick one player to put into your home.\n- Your target will not be able to perform actions, nor can they vote on who to kill during the trial.");

		e.addField("Attributes:", "- You have a private chat with your target.\n- Any actions against your target will fail if they are negative (death, convert), but succeed if they are positive (heals, protects)\n- You may choose to execute your target. You may do this 4 times.\n- If you execute another member of the city, you will not be able to kill again until an evil dies. Unless this is your second time, in which case you cannot kill for the rest of the game.");

		e.addField("Goal:", factions.City.goal);
	});

	register_role(["tsukihi_mizuki", "tsukihimizuki", "tsukihi", "mizuki", "1129"], "City", "Tsukihi Mizuki", {subCat: "Casual"}, (e) =>
	{
		e.setDescription("Post 1129");

		e.addField("Alignment", "City Casual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every day, you may choose to plant fire rings. You may do this 5 times.");

		e.addField("Attributes:", "- When you plant a fire ring, everyone who tries to visit you will have their action fail. This includes being kidnapped by Alex and kills.\n- You will learn everyone who failed their action on you at the end of the night.");

		e.addField("Goal:", factions.City.goal);
	});

	register_role(["boy_scout", "boyscout", "1130"], "Town", "Boy Scout", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1130");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Prepare a player each night.");

		e.addField("Attributes:", "- They will be defended against literally everything possibly imaginable that could harm them at all period full stop no exceptions. You bypass things that specifically negate protection or literally anything else that could theoretically prevent your protection from working from roleblocks to the end of the world to whatever. Boy Scouts are prepared for everything.\n- You can only defend yourself once (Boy Scouts are upstanding citizens and would never be selfish however sometimes it is required)");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["crow", "1131"], "Thundercry", "Crow", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1131");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- During the day, choose to observe a player, learning all whispers they received and sent that day the following night. If your target dies that night, they will be cleaned.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- If one or more Striked players are alive, you gain access to an extra anonymous vote.\n- If two or more Striked players are alive, you gain basic defense.");

		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["firebolt", "1132"], "Thundercry", "Firebolt", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1132");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Investigate a player, learning their exact role.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- Detection immune players will show up as a random Town role.\n- If a player who was investigated or Striked last night is lynched, a Strike is gained and you may take two actions the following night.\n- If two or more Striked players are alive, you gain basic defense.");

		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["sunder", "1133"], "Thundercry", "Sunder", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 1133");

		e.addField("Alignment", "Thundercry Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- During a full moon, prepare to place a transitory Strike. Transitory Strikes are the same as regular Strikes, but disappear after one night.\n- Once per game, choose instead to prepare 5 transitory Strikes.\n- Control a Striked player and learn their role.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- Learn which players are Striked at the start of each night.\n- If two or more Striked players are alive, you gain basic defense.\n- You do not have access to the factional Thundercry chat.");

		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["buzzard", "1134"], "Thundercry", "Buzzard", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 1134");

		e.addField("Alignment", "Thundercry Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Survey the town, learning the exact role of every currently Striked player. This bypasses detection immunity.\n- Guard the graveyard, preventing details of all deaths tonight of being released until the day after.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes:", "- When guarding the graveyard, you will be able to see the roles, wills and last messages received of newly dead players.\n- If one or more Striked players are alive, you may choose to clean one player when guarding the graveyard.\n- If two or more Striked players are alive, you gain basic defense.\n- You do not have access to the factional Thundercry chat.");

		e.addField("Goal:", factions.Thundercry.goal);
	});

	register_role(["cinder_elemental", "cinderelemental", "cinder", "elemental", "ce", "1135"], "Gatherer", "Cinder Elemental", {subCat: "Red"}, (e) =>
	{
		e.setDescription("Post 1135\n*Their rage can grow to such proportions that they explode in a cloud of fire.*");

		e.addField("Alignment", "Gatherer Red", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Generate (Red) each night.\n- (Red)(X): Attack another player each night. The tier of the attack is equal to the amount of non-Red Mana spent on this ability, to a maximum of Overkill.");

		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["architect", "1136", "276u"], "Unseen", "Architect", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1136\nConverted from: Fortifier");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fortify - Learn how many of each type of faction visit the targetted player\n- Guard (2 uses) - Pick a target, and learn the name of a player that visits your target and their role. If nobody visits, learn the role of your target instead.\n- Aim (Day Ability) - Pick a target. For the rest of the game, learn who that target visits each night. You may not have more than 1 aimed target at all times.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["poltroon", "1137", "252u"], "Unseen", "Poltroon", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1137\nConverted from: Coward");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guide - Pick 2 targets (cannot self target). All attacks dealt towards Target A will be redirected to Target B.\n- Hide (2 uses) - Pick a target. Redirect all attacks dealt towards yourself to that target.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["squid", "1138"], "Neutral", "Squid", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 1138");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Ink someone at night and copy an inked player's powers during the day.");

		e.addField("Attributes:", "- Inking someone roleblocks them that night, and stops them from getting any feedback the next night. They will be told they were inked when their feedback is removed, not when they are roleblocked.\n- You can choose someone you have inked to copy their abilities the following night. You may only copy each player's abilities once. You may multitask, even if the role would otherwise not let you. You may also choose to permanently keep one of their attributes.\n- Twice per game you can ink 2 people at night instead of just 1.");

		e.addField("Goal:", "Have at least all but 1 person inked by the end of the game. (You do not count for or against this goal).");
	});

	register_role(["timekeeper", "1139", "350u"], "Unseen", "Timekeeper", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1139\n*Warden of time. Life and death at every tick.*\nConverted from: Horologist");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Decorate (Day): Mount one of two clocks at a player's house.\n- Midnight Strike (Night, 3 uses): One of the players with a clock is able to make up to three night actions. The other will be unable to make any action.");

		e.addField("Attributes:", "- Players will know if they have a clock at the beginning of each night.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["psychiatrist", "1140", "254u"], "Unseen", "Psychiatrist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1140\nConverted from: Therapist");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Session - Learn a player’s subalignment.\n- Therapy -  Make the Unseen appear “not-suspicious” tonight.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["legislator", "1141", "259u"], "Unseen", "Legislator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 1141\nConverted from: Politician");

		e.addField("Alignment", "Unseen Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tax - Steal a target's player ability. You will not know what you stole, but you will know if you stole. You also roleblock them.\n- Pay - Look at the abilities you stole, then give It to a target player. 2 uses.");

		e.addField("Attributes:", "- You are immune to abilities that grant detection immunity or otherwise make you appear not suspicious.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["bombarder", "1142", "281u"], "Unseen", "Bombarder", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1142\nConverted from: Dynamite");

		e.addField("Alignment", "Unseen Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Plant Bomb - Plant a bomb at a target's player house\n- Move Bomb - Move a Bomb\n- Detonate - Detonate a Bomb");

		e.addField("Attributes:", "- Bomb deals a Powerful Rampage Attack.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["warden", "1143", "431u"], "Unseen", "Warden", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 1143\nConverted from: Guardian");

		e.addField("Alignment", "Unseen Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guard - Stand guard at a target's house, redirecting all of their visitors into another target of your choosing.\n- Distract - Redirect everyone who visits the Unseen into yourself. 2 uses.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["invited", "1144", "346u"], "Unseen", "Invited", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1144\nConverted from: Guest");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Accompany - Learn who your target visits. 2 uses.\n- Visit - Learn who visits your target.\n- Invite - Pick 2 targets. Target B Is notified of Target A's visitors. May self target.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["president", "1145", "347u"], "Unseen", "President", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1145\nConverted from: Governor");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Reveal - The next day, you have a secret 3 vote. 1 use.\n- Shoot - Deal a basic attack to someone. 2 uses.");

		e.addField("Attributes:", "- If you die, the next night, all Unseen can use their ability twice.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["dross_scorpion", "drossscorpion", "dross", "scorpion", "ds", "1146"], "Gatherer", "Dross Scorpion", {subCat: "Artifact"}, (e) =>
	{
		e.setDescription("Post 1146\n*They skitter out of the mists to consume fresh kill before Mephidross has a chance to corrode it away.*");

		e.addField("Alignment", "Gatherer Artifact", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Generate (Colorless) each night.\n- (2): Attack another player each night.");

		e.addField("Attributes:", "- Whenever you kill someone, you may choose a player the next day, which may be yourself. Grant them Roleblock Immunity for the following night.");

		e.addField("Goal:", factions.Gatherer.goal);
	});

	register_role(["fashionista", "1147", "353u"], "Unseen", "Fashionista", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 1147\nConverted from: Model");

		e.addField("Alignment", "Unseen Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sing - Reveal all roles that visited your target to the Town the following day. 2 uses.\n- Attract - Pick a role and a target. If the role exists in the game, It will be redirected to your target.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["impersonator", "1148"], "Mafia", "impersonator", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 1148\n*Don't worry, after you die, you will still be \"alive\" by me...hehe...*");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- If you perform the factional Mafia kill, your target is cleaned, and you will gain all of their abilities.");

		e.addField("Attributes:", "- The first time you are investigated, you will appear to be the role that you most recently cleaned.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["examiner", "1149", "361u"], "Unseen", "Examiner", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 1149\nConverted from: Analyst");

		e.addField("Alignment", "Unseen Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Analyze - Learn the faction of a target player.\n- Examine - Pick 2 targets, and learn if their roles coincide.");

		e.addField("Goal:", factions.Unseen.goal);
	});

	register_role(["fire_mage", "firemage", "fire", "1150"], "Neutral", "Fire Mage", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1150\n*I will consume everyone in fire and flames!*");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Start a fire on your target. If someone visits this your target while they're burning, the second person will start burning as well.\n- Disguise as another role in GIM. When you are investigated you will appear as this role. 1 use.");

		e.addField("Attributes:", "- You attack burning players after 2 days have passed. This attribute will activate even though you're dead.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
};
