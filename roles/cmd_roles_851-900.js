module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["soul_thief", "soulthief", "851"], "Neutral", "Soul Thief", (e) =>
	{
		e.setDescription("Post 851");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful (Unhealable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Steal the soul of a player at night.\n- Use the ability of a soul you have.");

		e.addField("Attributes:", "- You will immediately learn the role of your victims. Protections that heal (like Doctor) will not protect against your attack, but any protections that retaliate (like Bodyguard) will. Your target will not appear to die until either their soul disintegrates or you replace their soul, but they will have all other attributes of being dead, except the dead chat. You may have one soul at a time, and a soul lasts for two nights after obtaining it until it disintegrates. You may whisper as a person whose soul you have, and anyone who tries to whisper a player who had their soul stolen will have it sent to you, but the Town will not know this.");
		
		e.addField("Goal:", "Be the last player standing.");
	});

	register_role(["satellite", "852"], "Neutral", "Satellite", (e) =>
	{
		e.setDescription("Post 852");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Freeze all town abilities once per game, delaying their ability from taking action until the next night, if a player delayed is dead, then the ability would fail instead of going through.");

		e.addField("Attributes:", "- Dying will prevent you from going through with this ability.");
		
		e.addField("Goal:", "Live to see the town lose the game.");
	});

	register_role(["hangman", "853"], "Neutral", "Hangman", (e) =>
	{
		e.setDescription("Post 853");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- At the beginning of the game, receive 3 targets. Those players have an evil role.\n- If any of your targets die at night, You become a Jester (Post 90).");
		
		e.addField("Goal:", "Get your targets lynched.");
	});

	register_role(["tactician", "854"], "Insurgency", "Tactician", (e) =>
	{
		e.setDescription("Post 854");

		e.addField("Alignment", "Unique Insurgent Bouncer", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Fortify a player's house during the night, permanently increasing their Defense by one level. 3 Uses.\n- Scrutinize a player during the day. 2 Uses.");

		e.addField("Attributes:", "- When you scrutinize a player, you will be given 2 subalignments (Protective, Support, etc.) One of these subalignments is your target's subalignment.- Roleblock & Control Immunity");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["free_bird", "freebird", "855"], "Town", "Free Bird", (e) =>
	{
		e.setDescription("Post 855");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone each night. The next ability they use (including that night) won't be able to be stopped by anything, no matter what.\n- Divebomb a player at night, dealing a Powerful attack to them at night. You may only do this once.\n- Fly free during the day. You leave the game. If the game has ended by the start of the next day, you'll win. Otherwise, you'll lose.");

		e.addField("Attributes:", "- You can always talk in every non-private channel. \n- Your abilities can't be stopped by anything, no matter what.");
		
		e.addField("Goal:", "Lynch every criminal and evildoer, or escape the Town freely.");
	});

	register_role(["haha_suffer", "suffer", "856"], "Neutral", "Haha Suffer", (e) =>
	{
		e.setDescription("Post 856");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Once Per Game, You Can Write A Post That Goes Exactly To The Character Limit. You Make A Role Based On That Post. With The Host Approval's, You Become That Role. However The Goal Will Be The Same As This Role\n -Once Per Game, Choose A Topic. Everyone Must Make An Essay On That Topic That Goes To Exactly The Character Limit. You Then Rate Everyone's Essays. If They Get A Rating Of 5 Or Lower, They Are Modkilled. However, You Must Be Fair In Your Ratings. If The Host Feels Like You Are Not Being Fair, You Are Instantly Modkilled");

		e.addField("Attributes:", "- Any forced post must go to the Discord Character Limit. Otherwise, the writer is modkilled.\n- Roleblock Immunity\n- Control Immunity\n- Conversion Immunity\n- Redirect Immunity\n- Anyone That Attacks You Has To Write A Post About How You Died That Goes To The Discord Character Limit\n- Anyone That Rolls This Role Gains One Free Reroll\n- Everyone Will Hate Accent For This Role However It Is Pretty Funny Not Gonna Lie\n- One Of Every Pokémon Wins Against The Lions Every Time Due To Even If You Went By In Game Mechanics There Is This Set Called Funbro That Never Runs Out Of PP\n -AAAAAAAAAAAAAAAA");
		
		e.addField("Goal:", "See At Least Two Converted Players Win");
	});

	register_role(["sk", "sk_with_basic_attack", "sk_basic", "857"], "Neutral", "SK", (e) =>
	{
		e.setDescription("Post 857");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["sk_with_powerful_attack", "sk_powerful", "858"], "Neutral", "SK with powerful attack", (e) =>
	{
		e.setDescription("Post 858");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["sk_with_unstoppable_attack", "sk_unstoppable", "859"], "Neutral", "SK with unstoppable attack", (e) =>
	{
		e.setDescription("Post 859");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["sk_with_overkill_attack", "sk_overkill", "860"], "Neutral", "SK with overkill attack", (e) =>
	{
		e.setDescription("Post 860");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["scp_2006", "scp2006", "861"], "SCP", "SCP 2006", (e) =>
	{
		e.setDescription("Post 861");

		e.addField("Alignment", "SCP Keter", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Use the attack that you copied from another role.");

		e.addField("Attributes:", "- You originally have 0 attack but you will copy latest attack from any role. Example: on night 1 you have 0 attack but on day 2 someone was killed by shinigami so you will copy that attack on night 2. If there are multiple attacks then choose only one.\n- Doesn't copy self.");
		
		e.addField("Goal:", "Kill everyone who is not on the SCP team.");
	});

	register_role(["abyss", "862"], "Stalker", "Abyss", (e) =>
	{
		e.setDescription("Post 862");

		e.addField("Alignment", "Unique Stalker Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Send a player to the Abyss at night.");

		e.addField("Attributes:", "- Your target's ability will fail, but they will still visit their targets, rendering them vulnerable to anything which affects or interacts with visitors.\n- Your target will receive a generic roleblock message.\n- You cannot act on full moons.");
		
		e.addField("Goal:", "Kill all who object to the presence of the Stalkers.");
	});

	register_role(["sk_powerful_kill_all_sks", "skpowerfulkillallsks", "sk_killer", "skkiller", "863"], "Neutral", "SK but with powerful attack, and their goal is only to kill all SKs", (e) =>
	{
		e.setDescription("Post 863");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack your target");

		e.addField("Attributes:", "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their last will covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.");
		
		e.addField("Goal:", "Kill all SKs (Serials Killers)");
	});

	register_role(["mortician", "864"], "Insurgency", "Mortician", (e) =>
	{
		e.setDescription("Post 864");

		e.addField("Alignment", "Insurgent Saboteur", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a person's house to rob during the night.\n- Choose someone to perform an autopsy on during the day. 2 Uses.");

		e.addField("Attributes:", "- If the person you choose to rob dies that night, you will gain one use of their primary night ability, as determined by the host.\n- When you perform an autopsy on a player, if they die the following night, their cause of death will be obscured, to yourself included. However, you will learn who killed them.");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["wiretapper", "865"], "Insurgency", "Wiretapper", (e) =>
	{
		e.setDescription("Post 865");

		e.addField("Alignment", "Insurgent Saboteur", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Jam a player during the night.\n- Wiretap a player's whispers during the day. 2 Uses.");

		e.addField("Attributes:", "- When you Jam a player, the following day, they may not vote, whisper, or talk in non-private channel private chats. Basically, only thing they can do during the day is talk in the day chat & use day abilities.\n- When you Wiretap a player's whispers, the first 3 whispers from each person sent to that player will be eavesdropped by you.");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["otolarynologist", "otolary", "866"], "Town", "Otolarynologist", (e) =>
	{
		e.setDescription("Post 866");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit a player during the day. If their ability to chat has been impaired in any way, you will restore it back to normal.");

		e.addField("Attributes:", "- Your ability to chat cannot be impaired in any way.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["ayase_rimura_hopes_last_frontier", "ayase_rimura", "ayaserimura", "hopes_last_frontier", "hopeslastfrontier", "867"], "Neutral", "Ayase Rimura, Hope's Last Frontier", (e) =>
	{
		e.setDescription("Post 867");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "Cinderella Story — Whenever you fail to kill someone, unlock the next set of bracketed text in your Glass Slipper ability.");

		e.addField("Attributes:", "Glass Slipper — Attack someone each night. [This attack can't be blocked, redirected, or otherwise prevented by any means whatsoever.] [This attack is Unstoppable and Astral.] [You'll also deal an Unstoppable attack to all their visitors and gain Invincible defense.] [You die.]\nShimmering Determination — Spend the night to unlock the next set of bracketed text in your Glass Slipper ability. You may only do this Night 3 and onwards.");
		
		e.addField("Goal:", "Prove that you're stronger than the rest.");
	});

	register_role(["edward_brown", "edwardbrown", "868"], "Neutral", "Edward Brown, The Lingering Gun", (e) =>
	{
		e.setDescription("Post 868");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone with a foldable chair and leave them unconscious. They will NOT be able to use abilities OR talk within the day chat until one day has passed. However, one of the players within the game (At random) HAS A GUN and if you knock this specific player out you will obtain the gun. Additionally if they die THE GUN IS YOURS.\n- Once you have obtained the gun you can finally use this ability. You will ATTACK SOMEONE WITH THE GUN BY THROWING IT AT THEM and deal a powerful attack to them.");

		e.addField("Attributes:", "- You do not (Currently) have a gun. However, you are NOT useless without it.\n- Additionally roles that have guns according to flavor (Like Sniper Post 341) will count as a person that has a gun according to your ability actually.\n- Do not worry though because you can continue to use your foldable chair EVEN AFTER having found your gun, and in fact you are quite good at dual-wielding so you can actually use them both simultaneously.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["duelist", "869"], "Town", "Duelist", (e) =>
	{
		e.setDescription("Post 869");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "*Size Up the Competition* — Choose two players at night. You'll learn their role's post number, rounded to the nearest 10.\n*Make a Challenge* — Choose a player during the day. The next night, both of you will be unable to use night abilities and instead be placed in a public duel. You'll each secretly choose a player other than either of you. Whichever player picked the player with the higher post number is dealt a Powerful attack; if you both picked the same player, youw in. The players' roles aren't revealed.");

		e.addField("Attributes:", "- You have a layer of Powerful defense that can block one attack.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["guerilla", "870"], "Insurgency", "Guerilla", (e) =>
	{
		e.setDescription("Post 870");

		e.addField("Alignment", "Insurgent Hitman", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to camp outside a player's house during the day\n- Choose to communicate to Insurgents during the day. 2 Uses.");

		e.addField("Attributes:", "- When you camp outside a player's house, the following night, if someone attempts to attack that player, their ability will fail and you will attack them. ~~I am putting to many 'RB attacker and replace their attack' roles in this alignment lmao~~\n- When you choose to communicate to Insurgents, they will be informed who's house you chose to camp outside at the start of next night. You will also learn who decides to visit your target the following night.");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["sensei", "871"], "Town", "Sensei", (e) =>
	{
		e.setDescription("Post 871");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may grant yourself Basic Defense at night; Additionally, if you are attacked when you do this, you will deal a Basic Attack back to the attacker (Unless the attacker's visit is Astral)\n- At night, you may visit a player. They will gain one of these abilities based on how many times you have already visited them during this game:\n • 0 prior visits: You may grant yourself Basic Defense at night.\n • 1 prior visit: You may grant yourself Basic Defense at night; Additionally, if you are attacked when you do this, you will deal a Basic Attack back to the attacker (Unless the attacker's visit is Astral).\n • 2 prior visits: You may use any of the Sensei (Post 871)'s night abilities.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["defamer", "872"], "Insurgency", "Defamer", (e) =>
	{
		e.setDescription("Post 872");

		e.addField("Alignment", "Insurgent Hitman", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Halve the majority required by half during the day (for that day). 1 Use.\n- Check bounties during the day. 2 Uses.");

		e.addField("Attributes:", "- When you halve the majority, anyone who exceeds the threshold will be immediately lynched, however the day will be extended afterwards until a (not halved) majority is reached to enter nightfall, or the normal time to end the day phase is reached.\n- You will be immediately revealed as the Defamer after halving majority.\n- When you check bounties, you will learn if any Insurgents are being voted for that day. You will not learn who specifically the Insurgent(s) is/are.");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["amputator", "873"], "Town", "Amputator", (e) =>
	{
		e.setDescription("Post 873");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect {another} player at night, granting them Powerful defense {but roleblocking them}.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["marothoner", "874"], "Town", "Marothoner", (e) =>
	{
		e.setDescription("Post 874");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run to a player's house. The following night, you can run to two houses, and then three houses etc. If you do not visit anyone, your streak is broken and you can only visit one player per night.\n- Roleblock all players you visit. The number of houses you can visit at night is halved (rounded up).\n- Redirect all players you visit to target you.");

		e.addField("Attributes:", "- Players you visit will know they've been visited by the Marathoner.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["general", "875"], "Insurgency", "General", (e) =>
	{
		e.setDescription("Post 875");

		e.addField("Alignment", "Insurgent Informant", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Put on a bulletproof vest, giving yourself Basic Defense. 3 Uses.\n- Send a telegram to a chosen player during the day. 2 Uses.");

		e.addField("Attributes:", "- You know all roles at the start of the game.\n- If you ever reveal yourself, or are correctly suspected of being the General publicly (in a day chat), you will be immediately modkilled. Common sense applies, i.e. if someone guesses everyone to be the General you won't be slain.\n- You may not send whispers, and while whispers towards you will succeed, you may not view the contents.\n- When you send a telegram, you may send a player a message, 64 characters in length or less, requesting an action of them. You may not use this telegram to reveal yourself or anyone else's roles.");
		
		e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
	});

	register_role(["butcher", "876"], "Town", "Butcher", (e) =>
	{
		e.setDescription("Post 876");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- {Prepare your blade at night, then} chop up another player {the next night}, dealing a Powerful attack to them {if they don't have defense}. {You commit suicide immediately if you kill a Town member.}\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["archaeologist", "877"], "Town", "Archaeologist", (e) =>
	{
		e.setDescription("Post 877");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Dig up remains near a player's house at night, learning {8 roles at random, at least 3 of which are Town and 2 of which are evil, one of which is} their role.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["nimbus", "878"], "Thundercry", "Nimbus", (e) =>
	{
		e.setDescription("Post 878");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Secretly remove a Strike from a player.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes", "- You learn the faction of every Striked player, and the exact role of players you remove Strikes from.\n- If two or more Striked players are alive, you gain basic defense.");
		
		e.addField("Goal:", "Eliminate all who stand against the Thundercry.");
	});

	register_role(["sculptor", "879"], "Town", "Sculptor", (e) =>
	{
		e.setDescription("Post 879");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- {Ready a statue at night, then} carve a statue in the likeness of {another} player {the next night}. All visits {except Powerful or higher attacks} will be redirected to the statue.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["tempest", "880"], "Thundercry", "Tempest", (e) =>
	{
		e.setDescription("Post 880");

		e.addField("Alignment", "Thundercry Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Move a Strike from a player to another player.\n- Prepare a Strike on a player. Strikes will activate the following morning.");

		e.addField("Attributes", "- Moving Strikes happens before any other actions resolve at night.\n- The new Striked player will be announced in the morning, as if they were normally Striked.\n- You may both prepare a Strike and use your nightly ability on the same night.\n- If two or more Striked players are alive, you gain basic defense.");
		
		e.addField("Goal:", "Eliminate all who stand against the Thundercry.");
	});

	register_role(["lumberjack", "881"], "Town", "Lumberjack", (e) =>
	{
		e.setDescription("Post 881");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- {Saw a tree at night, then} fell it on the house of a player {other than you the next night}. The tree will deal a Powerful attack to all {Townies and} evil faction members who visit them.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["painter", "882"], "Mafia", "Painter", (e) =>
	{
		e.setDescription("Post 882");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Paint over your target's house during the night. Besides yourself, all their visitors will unknowingly target one of your target's neighbours instead, at random.\n- Paint the town red during the night (literally). Everyone killed that night will have their role and will smeared by paint, leaving them obscured. Killing roles will know the roles of anyone they successfully killed. You can use this ability once per game.");

		e.addField("Attributes", "- You can use multiple abilities per night.");
		
		e.addField("Goal:", "Mafia Goal");
	});

	register_role(["cleaveland", "883"], "Town", "Lumberjack", (e) =>
	{
		e.setDescription("Post 883");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night, dealing a Basic attack to them. You will {not} deal an Unstoppable attack to them and all the players who visit them and all the players they visit and you will {not} gain all immunities as well as total death immunity for the night.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["easier_egg", "easteregg", "easter", "884"], "Neutral", "Easter Egg!", (e) =>
	{
		e.setDescription("Post 884");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, choose a message, and a place to hide your Easter Egg. (1 use)");

		e.addField("Attributes:", "- You can choose to hide your Easter Egg in the channel description of the next day chat, an unarchived thread with the thread creation message deleted, the name of the role of one of the bots (Tatsu or GIM Help Bot), or a role given to the host. In each of these cases, the words \"You've found an Easter Egg!\" will be hidden in whichever location you choose.\n - The first person to notice/point out your Easter Egg receives your message, and will gain a prize of their choice. The prize can be either a one-time role investigation on a target of their choice, an automatic Powerful shield for the next time they're attacked, or a one use Powerful attack night ability.\n- Easter Eggs expire after the day ends.\n- If you win, your ability gains infinite uses.");
		
		e.addField("Goal:", "Successfully use your ability, and get through the day without anyone noticing your Easter Egg.");
	});

	register_role(["tattletale", "tattle", "885"], "Town", "Tattletale", (e) =>
	{
		e.setDescription("Post 885");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each night, visit a player. Every player you visit will learn the role of the player you last visited.");

		e.addField("Attributes:", "- You can't visit yourself.");
		
		e.addField("Goal:", "Town Goal except the \"o\" is long so it actually sounds like tune but you still pronounce the w so it's like tone except weirder.");
	});

	register_role(["princess", "886"], "Neutral", "Princess", (e) =>
	{
		e.setDescription("Post 886");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Force someone to kneel to you at night, this person will be forced to visit you. Anyone you make kneel will have their visitors visit you, too.");

		e.addField("Attributes:", "- If you die the night you complete your goal, you will lose.\n- Visitors will be notified of your ability, even if they originally visited your kneel target.");
		
		e.addField("Goal:", "Survive to see five players visit you.");
	});

	register_role(["veteran_with_a_big_knife", "veteranwithabigknife", "vetknife", "887"], "Town", "Veteran with a Big Knife", (e) =>
	{
		e.setDescription("Post 887");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose to {go on alert at night. You will gain Basic defense for the night and} attack anyone {who visits you} with {a Powerful attack that's not as strong as} an extremely large and Unstoppable knife. {This uses up an alert, which you only have three of}.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["obnoxiously_cleaved_executioner", "obnoxiouslycleavedexecutioner", "cleaveexe", "888"], "Neutral", "Obnoxiously Cleaved Executioner", (e) =>
	{
		e.setDescription("Post 888");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player {to investigate} each night.\n> - {You will learn whether or not} they are a member of the Town.\n - Choose a player {to target} at night. \n> - {If they are a member of the Town, they will become your target. If} they are lynched{, you will win}.\n> - {If} they {are not a member of the Town, you} will commit suicide and lose.\n> - {If} your target {dies at night, you} will commit suicide and lose.\n> - You may {only} have {one} target at {a} time.\n> - You may {not investigate and} target {in the same night.}\n- Choose a player to execute at night.\n> - You will deal an Unstoppable attack to them {if they are a member of the Town}.\n> - You may {only} execute after you{r target} has been lynched.\n> - Once you successfully execute {a member of the Town}, you may {no longer} execute.\n**Cleave** — During the day, cut down your limits. The next night, you may use your abilities twice and they act as if they didn't have the text in braces. You may only use this ability once.");

		e.addField("Attributes", "- Targeting is Astral and immune to transports.\n- If your target is lynched and you successfully execute someone, you win the game.\n- You have a layer of Basic defense that can block one attack.\n- You may use each of your abilities up to twice at night if you Cleaved the previous day. ");
		
		e.addField("Goal:", "Kill all who would oppose you, or do the thing in the attributes.");
	});

	register_role(["kleavor", "889"], "Neutral", "Kleavor", (e) =>
	{
		e.setDescription("Post 889");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- {At night,} choose a player {other than yourself}. You will be given their rolecard, which you may add {one set of} curly brackets to. They will be {notified that this happe}ned.\n- **Cleave** all text in curly brackets {on your rolecard} during the day.");
		
		e.addField("Goal:", "Cause someone to die as a direct result of cleaving.");
	});

	register_role(["necropheonix", "890"], "Neutral", "Necropheonix", (e) =>
	{
		e.setDescription("Post 890");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Scorch someone each night.");

		e.addField("Attributes:", "- Whenever two or more players die at night, one of them won't die and you'll possess them as long as you're dead and not possessing someone. They'll appear to have had too-strong defense to their attackers.\n- You'll gain access to their private channel and they'll gain the ability to deal a Powerful attack to someone along with their original role's abilities each night.\n- Their win condition is changed to yours.");
		
		e.addField("Goal:", "Eliminate all who would oppose you and the bodies you possess.");
	});

	register_role(["double_axe_murderer", "doubleaxemurderer", "double_axe", "doubleaxe", "dam", "891"], "Neutral", "Double Axe Murderer", (e) =>
	{
		e.setDescription("Post 891");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose <up to> {one <player> to <attack at night, dealing}> three <{Basic attacks to that} player and> role<block{ing them through immunitie>s,} and {you <won't be able to} make {votes to> lynch <people> the< next day, or else you'll} die {due to extre>m<e tiredness th>at day}.\n- **Cleave** the text in braces in your ability during the day.\n- **Chop** the text in chevrons in your ability during the night.");
		
		e.addField("Goal:", "Kill all who would oppose you.");
	});

	register_role(["amber", "892"], "Rock", "Amber", (e) =>
	{
		e.setDescription("Post 892");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Preserve a dead body in Amber every night.");

		e.addField("Attributes:", "- The night you preserve them, you will be able to use their ability on any player (including yourself), and their ability now rampages.\n- You cannot preserve someone in Amber more than once in the entire game.");
		
		e.addField("Goal:", "Rock Goal");
	});
};
