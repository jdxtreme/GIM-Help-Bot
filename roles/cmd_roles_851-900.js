module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["soul_thief", "soulthief", "851"], "Neutral", "Soul Thief", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 851");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful (Unhealable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal the soul of a player at night.\n- Use the ability of a soul you have.");

		e.addField("Attributes:", "- You will immediately learn the role of your victims. Protections that heal (like Doctor) will not protect against your attack, but any protections that retaliate (like Bodyguard) will. Your target will not appear to die until either their soul disintegrates or you replace their soul, but they will have all other attributes of being dead, except the dead chat. You may have one soul at a time, and a soul lasts for two nights after obtaining it until it disintegrates. You may whisper as a person whose soul you have, and anyone who tries to whisper a player who had their soul stolen will have it sent to you, but the Town will not know this.");
		
		e.addField("Goal:", "Be the last player standing.");
	});

	register_role(["satellite", "852"], "Neutral", "Satellite", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 852");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Freeze all town abilities once per game, delaying their ability from taking action until the next night, if a player delayed is dead, then the ability would fail instead of going through.");

		e.addField("Attributes:", "- Dying will prevent you from going through with this ability.");
		
		e.addField("Goal:", "Live to see the town lose the game.");
	});

	register_role(["hangman", "853"], "Neutral", "Hangman", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 853");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- At the beginning of the game, receive 3 targets. Those players have an evil role.\n- If any of your targets die at night, You become a Jester (Post 90).");
		
		e.addField("Goal:", "Get your targets lynched.");
	});

	register_role(["tactician", "854"], "Insurgency", "Tactician", {subCat: "Bouncer"}, (e) =>
	{
		e.setDescription("Post 854");

		e.addField("Alignment", "Unique Insurgent Bouncer", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fortify a player's house during the night, permanently increasing their Defense by one level. 3 Uses.\n- Scrutinize a player during the day. 2 Uses.");

		e.addField("Attributes:", "- When you scrutinize a player, you will be given 2 subalignments (Protective, Support, etc.) One of these subalignments is your target's subalignment.- Roleblock & Control Immunity");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["free_bird", "freebird", "855"], "Town", "Free Bird", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 855");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone each night. The next ability they use (including that night) won't be able to be stopped by anything, no matter what.\n- Divebomb a player at night, dealing a Powerful attack to them at night. You may only do this once.\n- Fly free during the day. You leave the game. If the game has ended by the start of the next day, you'll win. Otherwise, you'll lose.");

		e.addField("Attributes:", "- You can always talk in every non-private channel. \n- Your abilities can't be stopped by anything, no matter what.\n- You can't whisper or be whispered to, because you're way too cool.");
		
		e.addField("Goal:", "Lynch every criminal and evildoer, or escape the Town freely.");
	});

	register_role(["haha_suffer", "suffer", "856"], "Neutral", "Haha Suffer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 856");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Once Per Game, You Can Write A Post That Goes Exactly To The Character Limit. You Make A Role Based On That Post. With The Host Approval's, You Become That Role. However The Goal Will Be The Same As This Role\n -Once Per Game, Choose A Topic. Everyone Must Make An Essay On That Topic That Goes To Exactly The Character Limit. You Then Rate Everyone's Essays. If They Get A Rating Of 5 Or Lower, They Are Modkilled. However, You Must Be Fair In Your Ratings. If The Host Feels Like You Are Not Being Fair, You Are Instantly Modkilled");

		e.addField("Attributes:", "- Any forced post must go to the Discord Character Limit. Otherwise, the writer is modkilled.\n- Roleblock Immunity\n- Control Immunity\n- Conversion Immunity\n- Redirect Immunity\n- Anyone That Attacks You Has To Write A Post About How You Died That Goes To The Discord Character Limit\n- Anyone That Rolls This Role Gains One Free Reroll\n- Everyone Will Hate Accent For This Role However It Is Pretty Funny Not Gonna Lie\n- One Of Every Pokémon Wins Against The Lions Every Time Due To Even If You Went By In Game Mechanics There Is This Set Called Funbro That Never Runs Out Of PP\n -AAAAAAAAAAAAAAAA");
		
		e.addField("Goal:", "See At Least Two Converted Players Win");
	});

	register_role(["sk", "sk_with_basic_attack", "sk_basic", "857"], "Neutral", "SK", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 857");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["sk", "sk_with_powerful_attack", "sk_powerful", "858"], "Neutral", "SK with powerful attack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 858");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["sk", "sk_with_unstoppable_attack", "sk_unstoppable", "859"], "Neutral", "SK with unstoppable attack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 859");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["sk", "sk_with_overkill_attack", "sk_overkill", "860"], "Neutral", "SK with overkill attack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 860");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["scp-2006", "scp2006", "861"], "SCP", "SCP 2006", {subCat: "Keter"}, (e) =>
	{
		e.setDescription("Post 861");

		e.addField("Alignment", "SCP Keter", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the attack that you copied from another role.");

		e.addField("Attributes:", "- You originally have 0 attack but you will copy latest attack from any role. Example: on night 1 you have 0 attack but on day 2 someone was killed by shinigami so you will copy that attack on night 2. If there are multiple attacks then choose only one.\n- Doesn't copy self.");
		
		e.addField("Goal:", "Kill everyone who is not on the SCP team.");
	});

	register_role(["abyss", "862"], "Stalker", "Abyss", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 862");

		e.addField("Alignment", "Unique Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send a player to the Abyss at night.");

		e.addField("Attributes:", "- Your target's ability will fail, but they will still visit their targets, rendering them vulnerable to anything which affects or interacts with visitors.\n- Your target will receive a generic roleblock message.");
		
		e.addField("Goal:", "Kill all who object to the presence of the Stalkers.");
	});

	register_role(["sk", "sk_powerful_kill_all_sks", "skpowerfulkillallsks", "sk_killer", "skkiller", "863"], "Neutral", "SK but with powerful attack, and their goal is only to kill all SKs", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 863");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Kill all SKs (Serials Killers)");
	});

	register_role(["mortician", "864"], "Insurgency", "Mortician", {subCat: "Saboteur"}, (e) =>
	{
		e.setDescription("Post 864");

		e.addField("Alignment", "Insurgent Saboteur", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a person's house to rob during the night.\n- Choose someone to perform an autopsy on during the day. 2 Uses.");

		e.addField("Attributes:", "- If the person you choose to rob dies that night, you will gain one use of their primary night ability, as determined by the host.\n- When you perform an autopsy on a player, if they die the following night, their cause of death will be obscured, to yourself included. However, you will learn who killed them.");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["wiretapper", "865"], "Insurgency", "Wiretapper", {subCat: "Saboteur"}, (e) =>
	{
		e.setDescription("Post 865");

		e.addField("Alignment", "Insurgent Saboteur", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Jam a player during the night.\n- Wiretap a player's whispers during the day. 2 Uses.");

		e.addField("Attributes:", "- When you Jam a player, the following day, they may not vote, whisper, or talk in non-private channel private chats. Basically, only thing they can do during the day is talk in the day chat & use day abilities.\n- When you Wiretap a player's whispers, the first 3 whispers from each person sent to that player will be eavesdropped by you.");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["perceptive", "866"], "Town", "Perceptive", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 866");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- If you receive a whisper from any player from an evil faction during the day, your night action will automatically target that player instead of your original target. (If there are multiple players from evil factions who whispered to you, it will select one of them at random.)");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["ayase_rimura_hopes_last_frontier", "ayase_rimura", "ayaserimura", "hopes_last_frontier", "hopeslastfrontier", "867"], "Neutral", "Ayase Rimura, Hope's Last Frontier", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 867");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "Cinderella Story — Whenever you fail to kill someone, unlock the next set of bracketed text in your Glass Slipper ability.");

		e.addField("Attributes:", "Glass Slipper — Attack someone each night. [This attack can't be blocked, redirected, or otherwise prevented by any means whatsoever.] [This attack is Unstoppable and Astral.] [You'll also deal an Unstoppable attack to all their visitors and gain Invincible defense.] [You die.]\nShimmering Determination — Spend the night to unlock the next set of bracketed text in your Glass Slipper ability. You may only do this Night 3 and onwards.");
		
		e.addField("Goal:", "Prove that you're stronger than the rest.");
	});

	register_role(["edward_brown", "edwardbrown", "868"], "Neutral", "Edward Brown, The Lingering Gun", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 868");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone with a foldable chair and leave them unconscious. They will NOT be able to use abilities OR talk within the day chat until one day has passed. However, one of the players within the game (At random) HAS A GUN and if you knock this specific player out you will obtain the gun. Additionally if they die THE GUN IS YOURS.\n- Once you have obtained the gun you can finally use this ability. You will ATTACK SOMEONE WITH THE GUN BY THROWING IT AT THEM and deal a powerful attack to them.");

		e.addField("Attributes:", "- You do not (Currently) have a gun. However, you are NOT useless without it.\n- Additionally roles that have guns according to flavor (Like Sniper Post 341) will count as a person that has a gun according to your ability actually.\n- Do not worry though because you can continue to use your foldable chair EVEN AFTER having found your gun, and in fact you are quite good at dual-wielding so you can actually use them both simultaneously.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["duelist", "869"], "Town", "Duelist", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 869");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "*Size Up the Competition* — Choose two players at night. You'll learn their role's post number, rounded to the nearest 10.\n*Make a Challenge* — Choose a player during the day. The next night, both of you will be unable to use night abilities and instead be placed in a public duel. You'll each secretly choose a player other than either of you. Whichever player picked the player with the higher post number is dealt a Powerful attack; if you both picked the same player, youw in. The players' roles aren't revealed.");

		e.addField("Attributes:", "- You have a layer of Powerful defense that can block one attack.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["guerilla", "870"], "Insurgency", "Guerilla", {subCat: "Hitman"}, (e) =>
	{
		e.setDescription("Post 870");

		e.addField("Alignment", "Insurgent Hitman", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to camp outside a player's house during the day\n- Choose to communicate to Insurgents during the day. 2 Uses.");

		e.addField("Attributes:", "- When you camp outside a player's house, the following night, if someone attempts to attack that player, their ability will fail and you will attack them. ~~I am putting to many 'RB attacker and replace their attack' roles in this alignment lmao~~\n- When you choose to communicate to Insurgents, they will be informed who's house you chose to camp outside at the start of next night. You will also learn who decides to visit your target the following night.");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["sensei", "871"], "Town", "Sensei", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 871");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may grant yourself Basic Defense at night; Additionally, if you are attacked when you do this, you will deal a Basic Attack back to the attacker (Unless the attacker's visit is Astral)\n- At night, you may visit a player. They will gain one of these abilities based on how many times you have already visited them during this game:\n • 0 prior visits: You may grant yourself Basic Defense at night.\n • 1 prior visit: You may grant yourself Basic Defense at night; Additionally, if you are attacked when you do this, you will deal a Basic Attack back to the attacker (Unless the attacker's visit is Astral).\n • 2 prior visits: You may use any of the Sensei (Post 871)'s night abilities.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["defamer", "872"], "Insurgency", "Defamer", {subCat: "Hitman"}, (e) =>
	{
		e.setDescription("Post 872");

		e.addField("Alignment", "Insurgent Hitman", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Halve the majority required by half during the day (for that day). 1 Use.\n- Check bounties during the day. 2 Uses.");

		e.addField("Attributes:", "- When you halve the majority, anyone who exceeds the threshold will be immediately lynched, however the day will be extended afterwards until a (not halved) majority is reached to enter nightfall, or the normal time to end the day phase is reached.\n- You will be immediately revealed as the Defamer after halving majority.\n- When you check bounties, you will learn if any Insurgents are being voted for that day. You will not learn who specifically the Insurgent(s) is/are.");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["amputator", "873"], "Town", "Amputator", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 873");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect {another} player at night, granting them Powerful defense {but roleblocking them}.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["marothoner", "maro", "874"], "Town", "Marothoner", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 874");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run to a player's house. The following night, you can run to two houses, and then three houses etc.\n- Roleblock all players you visited last night. The number of houses you can visit at night is halved (rounded up).\n- Redirect all players you visited last night to target you.");

		e.addField("Attributes:", "- You can either run to as many houses as you can, or not run at all.\n- After not using an ability during the night, your streak is broken and you start at visiting one house per night again.\n- You may only use one of your abilities each night.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["general", "875"], "Insurgency", "General", {subCat: "Informant"}, (e) =>
	{
		e.setDescription("Post 875");

		e.addField("Alignment", "Insurgent Informant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Put on a bulletproof vest, giving yourself Basic Defense. 3 Uses.\n- Send a telegram to a chosen player during the day. 2 Uses.");

		e.addField("Attributes:", "- You know all roles at the start of the game.\n- If you ever reveal yourself, or are correctly suspected of being the General publicly (in a day chat), you will be immediately modkilled. Common sense applies, i.e. if someone guesses everyone to be the General you won't be slain.\n- You may not send whispers, and while whispers towards you will succeed, you may not view the contents.\n- When you send a telegram, you may send a player a message, 64 characters in length or less, requesting an action of them. You may not use this telegram to reveal yourself or anyone else's roles.");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["butcher", "876"], "Town", "Butcher", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 876");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- {Prepare your blade at night, then} chop up another player {the next night}, dealing a Powerful attack to them {if they don't have defense}. {You commit suicide immediately if you kill a Town member.}\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["archaeologist", "877"], "Town", "Archaeologist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 877");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Dig up remains near a player's house at night, learning {8 roles at random, at least 3 of which are Town and 2 of which are evil, one of which is} their role.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["nimbus", "878"], "Thundercry", "Nimbus", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 878");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Secretly remove a Strike from a player.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes", "- You learn the faction of every Striked player, and the exact role of players you remove Strikes from.\n- If two or more Striked players are alive, you gain basic defense.");
		
		e.addField("Goal:", "Eliminate all who stand against the Thundercry.");
	});

	register_role(["sculptor", "879"], "Town", "Sculptor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 879");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- {Ready a statue at night, then} carve a statue in the likeness of {another} player {the next night}. All visits {except Powerful or higher attacks} will be redirected to the statue.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["eurus", "880"], "Thundercry", "Eurus", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 880");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Move a Strike from a player to another player.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes", "- Moving Strikes happens before any other actions resolve at night.\n- The new Striked player will be announced in the morning, as if they were normally Striked.\n- You may both prepare a Strike and use your nightly ability on the same night.\n- If two or more Striked players are alive, you gain basic defense.");
		
		e.addField("Goal:", "Eliminate all who stand against the Thundercry.");
	});

	register_role(["lumberjack", "881"], "Town", "Lumberjack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 881");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- {Saw a tree at night, then} fell it on the house of a player {other than you the next night}. The tree will deal a Powerful attack to all {Townies and} evil faction members who visit them.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["painter", "882"], "Mafia", "Painter", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 882");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Paint over your target's house during the night. Besides yourself, all their visitors will unknowingly target one of your target's neighbours instead, at random.\n- Paint the town red during the night (literally). Everyone killed that night will have their role and will smeared by paint, leaving them obscured. Killing roles will know the roles of anyone they successfully killed. You can use this ability once per game.");

		e.addField("Attributes", "- You can use multiple abilities per night.");
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["cleaveland", "883"], "Neutral", "Lumberjack", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 883");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night, dealing a Basic attack to them. You will {not} deal an Unstoppable attack to them and all the players who visit them and all the players they visit and you will {not} gain all immunities as well as total death immunity for the night.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["easier_egg", "easteregg", "easter", "884"], "Neutral", "Easter Egg!", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 884");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, choose a message, and a place to hide your Easter Egg. (1 use)");

		e.addField("Attributes:", "- You can choose to hide your Easter Egg in the channel description of the next day chat, an unarchived thread with the thread creation message deleted, the name of the role of one of the bots (Tatsu or GIM Help Bot), or a role given to the host. In each of these cases, the words \"You've found an Easter Egg!\" will be hidden in whichever location you choose.\n - The first person to notice/point out your Easter Egg receives your message, and will gain a prize of their choice. The prize can be either a one-time role investigation on a target of their choice, an automatic Powerful shield for the next time they're attacked, or a one use Powerful attack night ability.\n- Easter Eggs expire after the day ends.\n- If you win, your ability gains infinite uses.");
		
		e.addField("Goal:", "Successfully use your ability, and get through the day without anyone noticing your Easter Egg.");
	});

	register_role(["tattletale", "tattle", "885"], "Town", "Tattletale", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 885");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, visit a player. Every player you visit will learn the role of the player you last visited.");

		e.addField("Attributes:", "- You can't visit yourself.");
		
		e.addField("Goal:", "Town Goal except the \"o\" is long so it actually sounds like tune but you still pronounce the w so it's like tone except weirder.");
	});

	register_role(["princess", "886"], "Neutral", "Princess", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 886");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Force someone to kneel to you at night, this person will be forced to visit you. Anyone you make kneel will have their visitors visit you, too.");

		e.addField("Attributes:", "- If you die the night you complete your goal, you will lose.\n- Visitors will be notified of your ability, even if they originally visited your kneel target.");
		
		e.addField("Goal:", "Survive to see five players visit you.");
	});

	register_role(["veteran_with_a_big_knife", "veteranwithabigknife", "vetknife", "887"], "Town", "Veteran with a Big Knife", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 887");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose to {go on alert at night. You will gain Basic defense for the night and} attack anyone {who visits you} with {a Powerful attack that's not as strong as} an extremely large and Unstoppable knife. {This uses up an alert, which you only have three of}.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["obnoxiously_cleaved_executioner", "obnoxiouslycleavedexecutioner", "cleaveexe", "888"], "Neutral", "Obnoxiously Cleaved Executioner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 888");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player {to investigate} each night.\n> - {You will learn whether or not} they are a member of the Town.\n - Choose a player {to target} at night. \n> - {If they are a member of the Town, they will become your target. If} they are lynched{, you will win}.\n> - {If} they {are not a member of the Town, you} will commit suicide and lose.\n> - {If} your target {dies at night, you} will commit suicide and lose.\n> - You may {only} have {one} target at {a} time.\n> - You may {not investigate and} target {in the same night.}\n- Choose a player to execute at night.\n> - You will deal an Unstoppable attack to them {if they are a member of the Town}.\n> - You may {only} execute after you{r target} has been lynched.\n> - Once you successfully execute {a member of the Town}, you may {no longer} execute.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");

		e.addField("Attributes", "- Targeting is Astral and immune to transports.\n- If your target is lynched and you successfully execute someone, you win the game.\n- You have a layer of Basic defense that can block one attack.\n- You may use each of your abilities up to twice at night if you Cleaved the previous day. ");
		
		e.addField("Goal:", "Kill all who would oppose you, or do the thing in the attributes.");
	});

	register_role(["kleavor", "889"], "Neutral", "Kleavor", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 889");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- {At night,} choose a player {other than yourself}. You will be given their rolecard, which you may add {one set of} curly brackets to. They will be {notified that this happe}ned.\n- **Cleave** all text in curly brackets {on your rolecard} during the day.");
		
		e.addField("Goal:", "Cause someone to die as a direct result of cleaving.");
	});

	register_role(["necropheonix", "890"], "Neutral", "Necropheonix", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 890");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scorch someone each night.");

		e.addField("Attributes:", "- Whenever two or more players die at night, one of them won't die and you'll possess them as long as you're dead and not possessing someone. They'll appear to have had too-strong defense to their attackers.\n- You'll gain access to their private channel and they'll gain the ability to deal a Powerful attack to someone along with their original role's abilities each night.\n- Their win condition is changed to yours.\n- You may self-target.");
		
		e.addField("Goal:", "Eliminate all who would oppose you and the bodies you possess.");
	});

	register_role(["double_axe_murderer", "doubleaxemurderer", "double_axe", "doubleaxe", "dam", "891"], "Neutral", "Double Axe Murderer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 891");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose <up to> {one <player> to <attack at night, dealing}> three <{Basic attacks to that} player and> role<block{ing them through immunitie>s,} and {you <won't be able to} make {votes to> lynch <people> the< next day, or else you'll} die {due to extre>m<e tiredness th>at day}.\n- **Cleave** the text in braces in your ability during the day.\n- **Chop** the text in chevrons in your ability during the night.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["amber", "892"], "Rock", "Amber", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 892");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Preserve a dead body in Amber every night.");

		e.addField("Attributes:", "- The night you preserve them, you will be able to use their ability on any player (including yourself), and their ability now rampages.\n- You cannot preserve someone in Amber more than once in the entire game.");
		
		e.addField("Goal:", "Rock Goal");
	});

	register_role(["wolfi-induced_game_canning", "wolfiinducedgamecanning", "game_canning", "gamecanning", "wolfi", "893"], "Neutral", "Revenge of The Wolfi-Induced Game Canning", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 893");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Trollos");

		e.addField("Attributes:", "- While this role is alive, the host must first post the attached gif before anything else when the day phase starts. They then must immediately end the day phase.\n- While this role is alive, the host must first post the attached gif in <#970059745807437876> before anything else when the night phase starts. They then must immediately end the night phase.\n- While this role is alive, the game may not draw or otherwise naturally end. Copeium.\n- If this causes the host to can the game, in the next game, assuming it uses the same role list, any player may choose to keep their original role and alignment placement. God knows they aren't going to share it while the host is stuck in horse plinko hell.");
		
		e.addField("Goal:", "Survive until the host posts 10 Horse Plinko gifs.");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/978724142255841300/HorsePlinko.gif");
	});

	register_role(["hare", "894"], "Neutral", "The Hare", {subCat: "Other"}, (e) =>
	{
		e.setDescription("Post 894");

		e.addField("Alignment", "Neutral Other", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player each day, they will be notified of your visit.");

		e.addField("Attributes:", "- You will gain a night chat with them for that night.\n- They may choose to spare you or kill you.\n- If they choose to kill you, they will gain a permanent stage of defense and deal you an unstoppable attack.\n- If they choose to spare you, their defense will become invincible for that night alone.");
		
		e.addField("Goal:", "Survive to see the end of the game, and be spared three times.");
	});

	register_role(["yrexi", "god_of_madness", "godofmadness", "895"], "Neutral", "Yrexi, God of Madness", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 895");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Drive a player insane each night.");

		e.addField("Attributes:", "- All effects of their abilities this night will be replaced by Unstoppable attacks; then, they will deal an Unstoppable attack to themself. (The death message will be \"They were killed by [their role].\")\n- Conversion, Roleblock, Redirect Immune");
		
		e.addField("Goal:", "Eliminate all who would oppose you.");
	});

	register_role(["illusionist", "896"], "Town", "Illusionist", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 896");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Halt all deaths (besides your own) during the night. 3 Uses.");

		e.addField("Attributes:", "- When you perish, all players who's' deaths you halted will immediately die as well.\n- Town Protective visits on you will automatically fail.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["blitzen", "blixem", "897"], "Neutral", "Blitzen (Blixem)", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 897");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None/Modkill", true);
		e.addField("Defense", "None/\"True\"", true);

		e.addField("Abilities:", "- Pick someone to play against in the day.\n- Falsify the game in the night.");

		e.addField("Attributes:", "- The host picks the kind of game you play (atomic, FoW, giveaway, etc...)\n- Every game is blitz 1|1\n- Falsifying a game means whoever lost will instead win\n- Falsifying must happen before the 10th move\n- Whoever loses is dealt a modkill\n- Whoever wins gets true defense (not even a mod kill can kill)");
		
		e.addField("Goal:", "Win 2 games or be the last person standing");
	});

	register_role(["mind_melder", "mindmelder", "898"], "Neutral", "Mind Melder", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 898");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose four players and a category of items during the day.");

		e.addField("Attributes:", "- The four players you choose must pick an item that fits the category. There must be at least five items that fit the category, and the category needs to be fairly common sense. Any players that choose the same item as another player will be dealt a Powerful Astral attack at the end of the night.\n- One random person will also be sent the prompt. You will not be notified who this is, and they will not die if they choose the same item as another player, but if anyone that you chose chooses the same item as this player, that player will be attacked.\n- You may not meld the night after you've killed players.");
		
		e.addField("Goal:", "Kill anyone who may oppose you.");
	});

	register_role(["jest_amne", "jestamne", "899a", "899"], "Neutral", "Jest Amne", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 899A");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Become Psychopath\n- Remember a dead player's role\n- Haunt someone after death");

		e.addField("Attributes:", "- At any point after a jester has died or night 5 has passed, become Psychopath (899B)\n- At any point after night 3, remember a dead players role, this role's attributes, abilities, goals, and chats are added to your role card\n- Haunt someone after death like a jester would");
		
		e.addField("Goal:", "Be lynched, become Psychopath (899B), do your new role's Goal");
	});

	register_role(["psychopath", "899b", "899"], "Neutral", "Psychopath", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 899B");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Abilities:", "- At night, finish the job.\n- Trap: Prepare in the day. Gain Invincible Defense and deal a Basic Attack to all your visitors except for one. 2 uses.\n- Premeditate: Prepare in the day. Gain Powerful Defense, use an Astral Powerful Attack on a player of your choice, and automatically use a Powerful Attack on one person who visits you.\n- Snap: Prepare in the day. Gain Basic Defense, deal an Unstoppable Attack to a player of your choice, and deal a Powerful Attack to everyone else who visits your target. (2 uses)");

		e.addField("Attributes:", "- Cannot be rolled naturally.\n- If you remembered a role as the Jest Amne, you will keep that role when you become the Psychopath. However, you will lose your previous goal.");
		
		e.addField("Goal:", "Kill all who stand in your way. You may choose to spare a solo member of an evil faction, but you may not spare the Mafia, Neutral Benigns, or Neutral Evils.");
	});

	register_role(["perfectionist", "900"], "Neutral", "Perfectionist", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 900");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit someone. If their post # isn't a perfect square (4, 9, 16, 25, etc.), you will kill them.");
		
		e.addField("Goal:", "Kill all players whose post # isn't a perfect square");
	});
};
