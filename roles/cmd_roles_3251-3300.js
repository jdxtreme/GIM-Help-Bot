//Credit: Vikuale2

module.exports = (g) =>
{
	const {register_role, factions, GOOD, EVIL} = g;

	register_role(["walrus", "3251"], "Neutral", "Walrus", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3251");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- One per day, can pm the host to start a walrus the next night");

		e.addField("Attributes:", "- Send a youtube link that the host posts.\n- Everyone will rate the content of the link from 1-10.\n- The mean vote (rounded down) gets to choose between a one shot doc, one shot tracker or one shot roleblock for the next night; if more than half the current players are the mean vote, they all get hit with a basic shot at the end of the night");

		e.addField("Goal:", "Host 4 walruses.");
	});
 
	register_role(["cop", "3252"], "Town", "Cop", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3252");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone to see if they’re a Criminal.");

		e.addField("Attributes:", "- Criminals are any role within the Criminal faction.\n- This role may not spawn if the Criminals are not present.\n- When you find a criminal, you will throw them into your prison.\n- You have a night chat with all of your prisoners, at once. You will appear to be a Cop when you talk.\n- Criminals in your jail won’t be able to interact or be interacted with at night.\n- If you have all criminals in your prison, publicly announce each one of them. Then, hang them all at once. This uses the daily lynch for 2 days (unless there is only 1 or 2 criminals, in which case it will only use that day’s lynch) but the day will continue as normal or until day is skipped.\n- When all criminals die, become a random town killing role. I don’t care. It’s up to the host I guess.");

		e.addField("Goal:", "Kill all criminals then complete your town’s wincon.");
	});
 
	register_role(["partisan_locust", "partisanlocust", "pl", "3253"], "Locust", "Partisan Locust", {subCat: "Sun"}, (e) =>
	{
		e.setDescription("Post 3253");

		e.addField("Alignment", "Locust of the Sun", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert another player to this role. No cooldown and all Partisan Locusts can use this on the same night.");

		e.addField("Attributes:", "- At the beginning of Day 1, or immediately if this spawns late (only if there were previously none), the Town will be notified that the glorious sun shines through hypocrisy. For the rest of the game, players can’t whisper, modkill themselves, or resign.\n- If the Locusts win, each living Partisan Locusts must resurrect one dead non-Locust who hasn’t won. That player wins with the Locusts.");

		e.addField("Goal:", "Convert the Town under the sun.");
	});
 
	register_role(["pesticide", "3254"], "Other", "Pesticide", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3254");

		e.addField("Alignment", "Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Guardian Angel", true);

		e.addField("Abilities:", "- Kill all Locusts");

		e.addField("Attributes:", "- If there are no locusts, I guess you're useless");

		e.addField("Goal:", "kill ppl idk");
	});
 
	register_role(["locust_emperor", "locustemperor", "le", "3255"], "Locust", "Locust Emperor", {subCat: "Empire"}, (e) =>
	{
		e.setDescription("Post 3255");

		e.addField("Alignment", "Locust of the Empire", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert somebody into a random non existing locust.\n- Send a message to the entire town, consisting of up to 500 characters.");

		e.addField("Attributes:", "- You bypass conversion immunity.\n- You may multitask.\n- If this is in game, every locust gains the win condition “Re-establish the locust empire!”");

		e.addField("Goal:", factions.Locust.goal);
	});
 
	register_role(["everfrost_locust", "everfrostlocust", "el", "3256"], "Locust", "Everfrost Locust", {subCat: "Winter"}, (e) =>
	{
		e.setDescription("Post 3256");

		e.addField("Alignment", "Locust of the Winter", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert somebody into an Everfrost locust.\n- Roleblock somebody, inflicting cold snap.");

		e.addField("Attributes:", "- You bypass conversion immunity.\n- You may multitask.\n- At the begging of day one, the town will be notified that “The eternal winter is coming!”.");

		e.addField("Goal:", factions.Locust.goal);
	});
 
	register_role(["monkey_locust", "monkeylocust", "ml", "3257"], "Locust", "Monkey Locust", {subCat: "Monkey"}, (e) =>
	{
		e.setDescription("Post 3257");

		e.addField("Alignment", "Locust of the Monkey", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert somebody into a monkey locust.");

		e.addField("Attributes:", "- You may only choose one upgrade path, outlined in bold.\n- You bypass conversion immunity.\n**Many Conversion**\n- After converting two people, you may convert two people instead of one.\n- After converting four people, upon use of your ability, you convert random people until your faction hits the ref cap.\n**Killing Locusts**\n- After converting two people, you instead kill people instead of converting them.\n- After killing two people, you may kill four people in one night.");

		e.addField("Goal:", factions.Locust.goal);
	});
 
	register_role(["i_dont_want_a_lot_for_christmas", "idontwantalotforchristmas", "thereisjustonethingineed", "idwalfc", "idnwalfc", "3258"], "Neutral", "I don't want a lot for Christmas", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3258\n*There is just one thing I need tonight~*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Wish to not have a lot for christmas, granting a random player the \"Christmas\" status.");

		e.addField("Attributes:", "- Everyone that visits you gets the Christmas status.\n- Everyone that a player with Christmas visits gets Christmas.\n- You copy an ability from each target you directly infect with Christmas.\n- Once all alive players have the Christmas Status you transform into Mariah Carey and the town is notified that \"Mariah Carey has defrosted!\".");

		e.addField("Goal:", "Defrost and become Mariah Carey.");
	});
 
	register_role(["mariah_carey", "mariahcarey", "mariah", "carey", "3258b"], "Neutral", "Mariah Carey", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3258\n*All I want for Christmas...is you!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Wish to have a player at night, rampaging at their house.");

		e.addField("Attributes:", "- All abilities you copied through the Christmas status carry over to this role.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
 
	register_role(["beekeeper_locust", "beekeeperlocust", "bkl", "3259"], "Locust", "Beekeeper Locust", {subCat: "Bees"}, (e) =>
	{
		e.setDescription("Post 3259\n*The conversion scale has reached bzzz*");

		e.addField("Alignment", "Locust of the Bees", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Spend one bee, converting somebody into a beekeeper locust.\n- Spend two bees, converting two people into beekeeper locusts.\n- Spend three bees, converting four people into a beekeeper locust.");

		e.addField("Attributes:", "- You bypass all conversion immunity.\n- You gain one bee at the start of each night.");

		e.addField("Goal:", factions.Locust.goal);
	});
 
	register_role(["locus", "3260"], "Other", "Locus", {subCat: "t"}, (e) =>
	{
		e.setDescription("Post 3260");

		e.addField("Alignment", "t", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Become an equation.");

		e.addField("Attributes:", "- You are a place.");

		e.addField("Goal:", "t");
	});
 
	register_role(["queen", "3261"], "Inquisition", "Queen", {subCat: "Government"}, (e) =>
	{
		e.setDescription("Post 3261\n*You are a magical royal who curses all dissenters.*");

		e.addField("Alignment", "Unique Inquisition Government", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Condemn one player and all their visitors.\n- You may prosecute the night after a player you condemned is lynched.");

		e.addField("Attributes:", "- You will learn who you condemned each night.");

		e.addField("Goal:", factions.Inquisition.goal);
	});
 
	register_role(["bishop", "3262"], "Inquisition", "Bishop", {subCat: "Government"}, (e) =>
	{
		e.setDescription("Post 3262\n*You are a royal priest who can condemn many people at once.*");

		e.addField("Alignment", "Unique Inquisition Government", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Condemn one player.\n- Condemn all players you’ve previously condemned.\n- You may prosecute the night after a player you condemned is lynched.");

		e.addField("Goal:", factions.Inquisition.goal);
	});
 
	register_role(["privateer", "3263"], "Inquisition", "Privateer", {subCat: "Government"}, (e) =>
	{
		e.setDescription("Post 3263\n*You are a thief hired by a corrupt government.*");

		e.addField("Alignment", "Inquisition Government", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Condemn one player.\n- You may prosecute the night after a player you condemn is lynched.\n- You swap roles with whoever you condemn for a night.");

		e.addField("Attributes:", "- Players who you swap roles with may not prosecute, nor swap roles with anther player.");

		e.addField("Goal:", factions.Inquisition.goal);
	});
 
	register_role(["enforcer", "3264"], "Inquisition", "Enforcer", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3264\n*You are a police officer who imposes curfews on the town.*");

		e.addField("Alignment", "Inquisition Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Empose a curfew on the town, causing all inquisition members to roleblock their targets. (3 uses)");

		e.addField("Attributes:", "- While this role is alive, all inquisition members are Roleblock immune.");

		e.addField("Goal:", factions.Inquisition.goal);
	});
 
	register_role(["accountant", "3265"], "Inquisition", "Accountant", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3265\n*You are an employee of the king who makes sure all evidence adds up.*");

		e.addField("Alignment", "Inquisition Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target one player, they may use their action twice tonight.");

		e.addField("Attributes:", "- You may target fellow Inquisition members");

		e.addField("Goal:", factions.Inquisition.goal);
	});
 
	register_role(["marshall", "3266"], "Inquisition", "Marshall", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3266\n*You are a guard who redirects people to other houses.*");

		e.addField("Alignment", "Inquisition Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Direct visitors from one player to another player each night.");

		e.addField("Attributes:", "- Anyone who attempts to visit your first target will instead visit your second target.\n- Both of your targets will be told that they were transported.");

		e.addField("Goal:", factions.Inquisition.goal);
	});
 
	register_role(["mafia_locust", "mafialocust", "ml", "3267"], "Locust", "Mafia Locust", {subCat: "Mafia"}, (e) =>
	{
		e.setDescription("Post 3267");

		e.addField("Alignment", "Locust of the Mafia", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, you may convert somebody into a Mafia Locust.");

		e.addField("Attributes:", "- If you die, a random Mafia Locust unlocks their ability to convert, and gains this attribute.");

		e.addField("Goal:", factions.Locust.goal);
	});
 
	register_role(["depressed_citizen", "depressedcitizen", "depressed", "dc", "3268"], "Town", "Depressed Citizen", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3268");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Unstoppable (Self)", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- At night, you have a 25% chance of committing suicide.\n- If you are visited you instead commit suicide on a random visitor due to poor vision, which deals your unstoppable attack to them.\n- You may visit a player at night to prevent your 25% chance of committing suicide.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["wm_dilettante", "wmdilettante", "dilettante", "3269"], "Mafia", "WM Dilettante", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3269");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Learn an art at the beginning of the game.\n- Perform your learned art at night.");

		e.addField("Attributes:", "- On the first night of the game, you may choose a Town role to learn the art of. You will gain all active abilities of that role, including immunities.\n- You cannot learn Town Killing, Town Power, or a unique Town role.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["hawaiianpikachus_bartender", "hawaiianpikachusbartender", "hawaiianpikachu", "haws_bartender", "hawsbartender", "haw", "bartender", "hpb", "hb", "3270"], "Mafia", "HAWAIIANpikachu's Bartender", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3270");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Serve drinks at someone's house each night.");

		e.addField("Attributes:", "- If your target leaves their house, you will serve drinks to them. They will randomly visit one of their neighbors instead of their original target. They will be notified of this.\n- If you serve drinks to a visitor, they will randomly visit one of your target's neighbors instead. They will be notified of this.\n- If you attempt to serve drinks at the house of a Town Power or Town Killing role, they will turn you away. Both you and your target will be notified of this.\n- You have no effect on the Transporter, Witch, or any Mafia or killing roles.\n- You may not serve drinks at the same house two nights in a row.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["wm_musician", "wmmusician", "musician", "3271"], "Mafia", "WM Musician", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 3271");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Lull someone to sleep at night, or serenade the town at night.‎");

		e.addField("Attributes:", "- Players will know that they were lulled to sleep.\n- When you lull someone to sleep, you will remove all notifications from them. This does not include death messages.\n- When you serenade the town, you will stop the following day phase from happening.\n- You may not lull the same person to sleep two nights in a row.\n- You may only serenade the town once.‎");

		e.addField("Goal:", factions.Mafia.goal);
	}) 
 
	register_role(["offense_attorney", "offenseattorney", "offence_attorney", "offenceattorney", "3272"], "Mafia", "Offense Attorney", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3272");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Yell at a player at night. They perform the factional mafia kill on their target.\n- If they can't, you instead deal a basic attack to them.");

		e.addField("Attributes:", "- You can be ordered by the Godfather as if you were a Mafioso.\n- You can only yell at each player once.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["coven_locust", "covenlocust", "cl", "3273"], "Locust", "Coven Locust", {subCat: "Coven"}, (e) =>
	{
		e.setDescription("Post 3273");

		e.addField("Alignment", "Locust of the Coven", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert one person into a Coven Locust.\n- If you have the Locustnomicon, you kill a person in addition to your convert.");

		e.addField("Attributes:", "- At night one, it will be announced that their are only 2 nights till the locusts receive the locustnomicon!\n- At night 3, it\n- Locusts you convert do not gain the above attributes.\n- You bypass all conversion immunity.\n- You have Basic defence with the Locustnomicon.");

		e.addField("Goal:", factions.Locust.goal);
	});
 
	register_role(["pest_removal_services", "pestremovalservices", "pest_removal", "pestremoval", "removal_services", "removalservices", "prs", "3274"], "Town", "Pest Removal Services", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3274");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Target a player. If they are capable of converting players, you will kill them with an Overkill Attack.\n- Spray Pesticide across the entire town, dealing an Overkill Attack to anyone who has a role with conversion capabilities. This ability cannot be used until Night 4.");

		e.addField("Attributes:", "- You cannot be converted to another role or faction in any way, shape or form. This attribute cannot be bypassed or otherwise removed.\n- If you are visited by a role that can convert, you will deal an Overkill Attack to them.\n- This role can only spawn if there is at least one role that it can kill.\n- This role cannot have its text modified by any sources. This includes transferring, changing, or otherwise altering abilities and attributes.");

		e.addField("Goal:", factions.Town.goal);
	});
 
	register_role(["traptrix_atypus", "traptrixatypus", "atypus", "ta", "3275"], "Traptrix", "Traptrix Atypus", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3275\n*I'll heal you if you come just a little bit closer.*");

		e.addField("Alignment", "Traptrix Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- Every chance to draw trap holes, you draw two instead of one.\n- While this role is in game, all traptrix roles are treated as having powerful attack.\n- You are unaffected by the first two \"hostile\" visits towards you.\n- Hostile is defined as would have a negative impact on the game in a substantial way.\n- If visits fail against you, the visitor is not informed");

		e.addField("Goal:", factions.Traptrix.goal);
	});
 
	register_role(["traptrix_pinguicula", "traptrixpinguicula", "pinguicula", "tp", "3276"], "Traptrix", "Traptrix Pinguicula", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3276\n*Why don't you just come over.. For a little bite?*");

		e.addField("Alignment", "Traptrix Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- If anybody visits you or your target, they will start to be digested.");

		e.addField("Attributes:", "- Digested players ability fails the night after they become digested.\n- Two nights after becoming digested, they lose their ability and it is given to Traptrix Pinguicula.\n- Players are not informed of the Digestion.");

		e.addField("Goal:", factions.Traptrix.goal);
	});
 
	register_role(["traptrix_arachnocampa", "traptrixarachnocampa", "arachnocampa", "ta", "3277"], "Traptrix", "Traptrix Arachnocampa", {subCat: "Insect"}, (e) =>
	{
		e.setDescription("Post 3277\n*Whatever you do, watch your step, and make sure to keep looking up.*");

		e.addField("Alignment", "Traptrix Insect", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Hang above a player, suffocating them if they do not take an action tonight.");

		e.addField("Attributes:", "- Suffocated players die within two nights.\n- Suffocated players actions dont do anything if they do choose to take it.\n- If a suffocated player takes an action that would visit another player, or are visited by at least two friendly town, they are no longer suffocated. ");

		e.addField("Goal:", factions.Traptrix.goal);
	});
 
	register_role(["traptrix_pudica", "traptrixpudica", "pudica", "tp", "3278"], "Traptrix", "Traptrix Pudica", {subCat: "Plant"}, (e) =>
	{
		e.setDescription("Post 3278\n*If you touch me, you will face hell.*");

		e.addField("Alignment", "Traptrix Plant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may visit a player.");

		e.addField("Attributes:", "- Any player who visits you or you visit shrinks, lowering their attack value and defense value.\n- A shrunk player loses all abilities and attributes the host deems that they would need to have a moderate amount of height for.");

		e.addField("Goal:", factions.Traptrix.goal);
	});
 
	register_role(["shaman", "3279"], "KA", "Shaman", {subCat: "Spiritual"}, (e) =>
	{
		e.setDescription("Post 3279");

		e.addField("Alignment", "KA Spiritual", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Hellbent", true);

		e.addField("Abilities:", "- **Shroud**: You cannot die during night the night you use this, and all guesses against you will fail. (2 uses)\n- **Dangerous Prowess**: Healing aura deals a basic tonight instead of healing. (2 uses)\n- **Calling**: Gain a special card of your choosing. You cannot take the same card twice using this effect. (2 uses, 3 night cooldown)\n- **Heavens Help**: Select a dead player; gain one HP. You may not select the same player twice.");

		e.addField("Attributes:", "- **Afterlife's Debt**: If somebody publicly says [I guess X as the shaman], X being a player, and they were correct, you die.\n- **Shaman's Revenge**: If somebody is incorrect about a guess, they die. This resolves immediately, and all actions and words spoken after this are null and void. \n- **Healing Aura**: Heal the two players next to you.");

		e.addField("Goal:", factions.KA.goal);
	});
 
	register_role(["tf_are_these_shitass_roles_man", "tfaretheseshitassrolesman", "tfatsarm", "tfatsrm", "tatsrm", "tf", "3280"], "Neutral", "Tf Are These Shitass Roles Man", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3280");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Overoveroverkill", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Attack a player each night. They die if they are one of your targets, and live if they aren't.");

		e.addField("Attributes:", "- You hate all roles between role 3000 and 3285. At the start of the game, you are informed of all roles in the game whose post number is within that range. The players with these roles are your targets.\n- You have Basic defense until the first time you are attacked.\n- If you attack someone who would die to your attack, literally nothing can prevent them from dying unless you are roleblocked.  You do not interact with any ability that would stop you from killing, except for roleblockers.\n- Players who are converted into a role that would be your target do not become your targets.");

		e.addField("Goal:", "End the game with everyone you can kill dead.");
	});
 
	register_role(["ar_patient", "arpatient", "patient", "arp", "3281"], "Neutral", "AR Patient", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3281");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- On odd nights, choose one player to attack.\n- You will attack exactly one person that visits you each night.");

		e.addField("Attributes:", "- You will clean those you kill directly.\n- Players that die from visiting you will have only their alignment shown and their will destroyed.\n- If you do not select a target, you will attack someone at random.\n- If you are roleblocked, you will kill one of your visitors instead of your target.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
 
	register_role(["ar_apprentice", "arapprentice", "apprentice", "ara", "3282"], "Neutral", "AR Apprentice", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3282");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night, you may choose someone to learn from.\n- You cannot learn from someone night 1.");

		e.addField("Attributes:", "- You will become the role you learn from.\n- If you learn from a unique role, you will inherit their win condition and night chat until they die, upon which you will inherit their role.");

		e.addField("Goal:", "Learn a role and complete that role's objective.");
	});
 
	register_role(["ar_fenrir", "arfenrir", "fenrir", "arf", "3283"], "Neutral", "AR Fenrir", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3283");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Stalk two targets each night.\n- Choose whether to activate overdrive or bloodlust. (coin ability)");

		e.addField("Attributes:", "- If you choose overdrive, you will attack both your targets if they win together.\n- If you choose bloodlust, you will attack both your targets if they do not win together.\n- You must wait a night after successfully killing players twice in a row.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
 
	register_role(["ar_huntsman", "arhuntsman", "huntsman", "arh", "3284"], "Neutral", "AR Huntsman", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3284");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose your prey during the day, then camp outside someone's house at night.");

		e.addField("Attributes:", "- You may camp outside your house.\n- You will kill your prey if they visit your target.\n- If you are attacked, you will attack your attacker and stay home.\n- If you protect someone twice, you will die.");

		e.addField("Goal:", "Shoot one prey dead while they are visiting someone.");
	});
 
	register_role(["ar_mercenary", "armercenary", "mercenary", "arm", "3285"], "Neutral", "AR Mercenary", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3285");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Guard a player each night, granting them powerful defense against direct attacks.\n- Use your gun and stun a player, roleblocking them.");

		e.addField("Attributes:", "- If you save your target or no one visits them, they will become your partner and tell you their faction.\n- You may not protect the same player twice in a row.\n- You have a makeshift vest which protects you until you are attacked.\n- After getting a partner you may stun a player twice.\n- You will suicide if your target loses before the game ends.");

		e.addField("Goal:", "See your partner win.");
	});
 
	register_role(["zage_can_cope_tbh", "zagecancopetbh", "zage", "copetbh", "zcct", "3286"], "Neutral", "Zage Can Cope Tbh", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3286");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock a player.");

		e.addField("Attributes:", "- You roleblock all your visitors.");

		e.addField("Goal:", "Roleblock 75% of the numbers of players.");
	});
 
	register_role(["ar_pirate", "arpirate", "arp", "3287"], "Neutral", "AR Pirate", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 3287");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may duel someone at night, roleblocking them and plundering all of their visitors.");

		e.addField("Attributes:", "- If you duel a plundered player, you will attack them.\n- If you duel a player three times, you will attack them.\n- You will learn the roles of the players that visit your target.\n- Roleblock immune");

		e.addField("Goal:", "Successfully loot from 3 plundered players.");
	});
 
	register_role(["ar_juggernaut", "arjuggernaut", "arj", "3288"], "Neutral", "AR Juggernaut", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 3288");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You may attack a player at night.");

		e.addField("Attributes:", "- Detection immunity\n- You may not attack Night 1.\n- With each kill, your powers grow.\n- On your first kill, you gain Roleblock and Control Immunity.\n- On your second kill, you rampage when you attack.\n- On your third kill, you lose your Detection Immunity and will ignore all effects that would protect a player.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
 
	register_role(["allay", "3289"], "Minecraft", "Allay", {subCat: "Passive"}, (e) =>
	{
		e.setDescription("Post 3289");

		e.addField("Alignment", "Unique Minecraft Passive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- **Pick Up Item**: Pick up an item, giving the Minecraft (Head) role one item of your choice. (1 use)\n- **Play Jukebox**: Play a random music theme. This theme will be posted at the start of the next day, and you unlock the Dance! Ability till the end of the next night. \n- **Dance!**: Dance, roleblocking five players of your choice due to how cute you are.\n- **Follow!**: Learn who a player visits and their role. The player will be informed that they have been followed by an Allay.\n- **Farm Crystal!**: Farm a crystal, giving a Amethyst Shard to the current Minecraft (Head) role.\n- **Retrieve!**: Give the Minecraft (Head) role a previously used item of your choosing. ");

		e.addField("Attributes:", "- **Owners Sense*: You are unaffected by all actions on players you follow tonight.\n- **Old Times**: If you are jailed, you die at the end of the night. \n- **Panicked State**: You have a one time basic scum shield. If attacked, you enter a panicked state, and your ability targets random players tonight. While panicked, you cannot Play Jukebox or Farm Crystal.\n- **Drop Item**: If you are killed, the head role gains a random minecraft item. ");

		e.addField("Goal:", factions.Minecraft.goal);
	});
 
	register_role(["ar_survivor", "arsurvivor", "survivor", "ars", "3290"], "Neutral", "AR Survivor", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 3290");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Visit one player each night, obtaining their wincon and redirecting all harmful visits from them onto yourself.");

		e.addField("Attributes:", "- You will not gain a night chat if you have a factional role's win condition.\n- Your new wincon does not change until after all deaths are processed.\n- You may not change win conditions in consecutive nights.\n- You will be informed of your current wincon.");

		e.addField("Goal:", "Live to see your most recent target win the game.");
	});
 
	register_role(["ar_scarecrow", "arscarecrow", "scarecrow", "ars", "3291"], "Neutral", "AR Scarecrow", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3291");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- You may stalk someone at night, scaring away anyone that visits them.");

		e.addField("Attributes:", "- You have a straw coat that grants you Basic defense until you are attacked.\n- You will know who your target visits.\n- You cannot be roleblocked.");

		e.addField("Goal:", "Live to see Town lose the game.");
	});
 
	register_role(["ar_lapidarist", "aplapidarist", "lapidarist", "arl", "3292"], "Coven", "AR Lapidarist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3292");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may crystallize someone at night, or spend a night to craft a crystal.");

		e.addField("Attributes:", "- You start with two Crystals.\n- Crystals reflect abilities back to where they came from.\n- If your crystallized target visits you, you will deal a Basic Attack to them. Their Last Will will be unreadable.\n- With the Necronomicon, you have unlimited Crystals and will deliver a Basic Attack to your target.");

		e.addField("Goal:", factions.Coven.goal);
	});
 
	register_role(["ar_mystic", "armystic", "mystic", "arm", "3293"], "Coven", "AR Mystic", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3293");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may curse a player on even numbered nights.");

		e.addField("Attributes:", "- Curses last two nights or until someone is attacked by the curse.\n- You will attack one player that visits a cursed target.\n- You will learn the roles that visit your cursed target.\n- With the Necronomicon, you may curse every night and will attack any player that is freed from the curse.");

		e.addField("Goal:", factions.Coven.goal);
	});
 
	register_role(["ar_poisoner", "arpoisoner", "poisoner", "arp", "3294"], "Coven", "AR Poisoner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 3294");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may blight a player at night, or poison a blighted player.");

		e.addField("Attributes:", "- Blights block your target from using their role's night ability. (Standard Roleblock message)\n- Poisoning a blighted player will deal a Basic Attack to them. They will die the following night if they had no defense.\n- With the Necronomicon, you will deal a Blight and a Basic Attack to your target.");

		e.addField("Goal:", factions.Coven.goal);
	});
 
	register_role(["ar_agent", "aragent", "agent", "ara", "3295"], "Mafia", "AR Agent", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 3295");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may smoke bomb a target every night.");

		e.addField("Attributes:", "- You have infinite smoke bombs.\n- You may not smoke bomb the same player two nights in a row.\n- Your smoke bombs obscures the results of night abilities used on your target. They are notified that their target was smoke bombed.\n- Your smoke bombs obscures what happens to your target. They are notified that they were smoke bombed.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["axolotl", "3296"], "Minecraft", "Axolotl", {subCat: "Passive"}, (e) =>
	{
		e.setDescription("Post 3296");

		e.addField("Alignment", "Minecraft Passive", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **Hunt Fish**: Hunt for a fish, giving the Minecraft (Head) role a random fish.\n- **Remove Fatigue**: Target two players. If either player dies, you have move twice.\n- **Regenerate**: Regenerate a player, removing all negative effects and giving them one more tier of defense tonight.\n- **Hunt Drowned**: Give the Minecraft (Head) role a Trident.");

		e.addField("Attributes:", "- **Play Dead**: If killed, you do not show as dead. You may not speak that day. You revive at the end of the night night. This ability only triggers once.\n- You may target teammates.\n- This role may not spawn with Drowned, Cod, Pufferfish, Salmon, Tropical Fish, or Tadpoles.\n- Fish is defined as Drowned, Cod, Pufferfish, Salmon, Tropical Fish, and Tadpoles.");

		e.addField("Goal:", factions.Minecraft.goal);
	});
 
	register_role(["ar_consigliere", "arconsigliere", "consigliere", "arc", "3297"], "Mafia", "AR Consigliere", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3297");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player each night, learning their exact role.");

		e.addField("Attributes:", "- You will know how many players with your target's subalignment are alive at the moment.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["ar_disguiser", "ardisguiser", "disguiser", "ard", "3298"], "Mafia", "AR Disguiser", {subCat: "Deception"}, (e) =>
	{
		e.setDescription("Post 3298");

		e.addField("Alignment", "Mafia Deception", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a Mafia member to disguise at Night.\n- They will remain disguised until the next night.");

		e.addField("Attributes:", "- Disguised Players show up as the Role chosen, investigated and upon death (Lynch or at Night).\n- You cannot disguise the same Player twice in a row.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["ar_recon", "arrecon", "recon", "arr", "3299"], "Mafia", "AR Recon", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3299");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Watch and track one person at night to see who visits them and who they visit.");

		e.addField("Goal:", factions.Mafia.goal);
	});
 
	register_role(["ar_scout", "arscout", "scout", "ars", "3300"], "Mafia", "AR Scout", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 3300");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may accompany someone at night, learning all night feedback that your target receives.");

		e.addField("Attributes:", "- Your target cannot be roleblocked or controlled and will have their visit Astral that night.\n- You may accompany the Mafia.\n- You cannot accompany the same person twice in a row.\n- Roleblock and control immune");

		e.addField("Goal:", factions.Mafia.goal);
	});
};
