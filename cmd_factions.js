module.exports = (g) =>
{
	const {PRE, UTILS, add_cmd, commands} = g;
	g.factions = {};
	g.aliases = {};
	g.GOOD = [];
	g.EVIL = [];
	g.NEUTRAL = [];

	let i = 0;
	
	function register_faction(name, title, info)
	{
		info.func = (chn, message, e, args) =>
		{
			e.setAuthor({name: "The " + (info.display || title), iconURL: info.icon});
			e.setDescription(info.summary);

			if(info.color === "random")
				e.setColor(UTILS.rHex(6));
			else
				e.setColor(info.color || "808080");

			e.addField("Color:", "#" + info.color, true);
			e.addField("Type:", UTILS.titleCase(info.type), true);

			let subcats = {};

			for(let cmd in commands)
			{
				let data = commands[cmd];

				if(data.cat === title && data.meta.subCat)
					subcats[data.meta.subCat] = true;
			}

			subcats = Object.keys(subcats);

			if(subcats.length > 0)
			{
				let subcatstr = subcats[0];

				for(let i = 1; i < subcats.length; i++)
					subcatstr = subcatstr + ", " + subcats[i];

				e.addField("Subalignments:", subcatstr)
			}

			if(info.features)
			{
				if(typeof info.features === "object")
					for(let i = 0; i < info.features.length; i++)
						e.addField("Features (Set " + (i+1) + "):", info.features[i]);
				else
					e.addField("Features:", info.features);
			}

			if(info.goal)
				e.addField("Goal:", info.goal);

			chn.send({embeds: [e]});
		};

		add_cmd(name, {
			id: "f" + i,
			cat: "Faction",
			title,
			desc: "View details and aliases of the \"" + title + "\" Faction.",
			func: info.func
		});

		if(typeof name === "string")
			info.aliases = [name];
		else
			info.aliases = name;

		g.factions[title] = info;

		switch(info.type)
		{
			case "good":
				g.GOOD[g.GOOD.length] = title;
				break;

			case "evil":
				g.EVIL[g.EVIL.length] = title;
				break;

			case "neutral":
				g.NEUTRAL[g.NEUTRAL.length] = title;
				break;
		}

		for(let i = 0; i < info.aliases.length; i++)
		{
			let alias = info.aliases[i].toLowerCase();

			if(g.aliases[alias])
				throw "Error: Duplicate Alias: " + alias;

			g.aliases[alias] = title;
		}

		i = i + 1;
	}

	register_faction("town", "Town", {
		color: "80FF00",
		type: "good",
		icon: "https://cdn.discordapp.com/emojis/974880541348331541.webp",
		summary: "Vanilla Good; Lead by a Town Power, which can be somewhat stronger than typical Town roles. Beyond that, pretty much anything goes.",
		features: "- Only one Town Power may spawn.\n- No factional chat\n- No factional kill\n- Counts as \"good\"",
		goal: "Lynch every criminal and evildoer."
	});

	register_faction(["mafia", "maf"], "Mafia", {
		color: "FF0000",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/974880541298020402.webp",
		summary: "Vanilla Evil; Possibly lead by a random Mafia Head, but this is unspecified. Otherwise, anything goes.",
		features: "- Factional kill (Basic attack)\n- Factional chat",
		goal: "Kill anyone that will not submit to the Mafia."
	});

	register_faction("coven", "Coven", {
		color: "BF5FFF",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/974880541180575784.webp",
		summary: "Supernatural/Witchcraft-themed Evil; Majority of roles have a situational or indirect killing ability. At the start of Night 3, a random member will receive the Necronomicon. Each role defines how they benefit from holding it. Due to the lack of a factional kill, it generally should be some means to directly attack players, usually alongside its regular ability. Certain roles, particularly Coven Heads, may specifically receive the Necronomicon first. Most often, some type of witch leads the group, if any leader is spawned.",
		features: "- Factional chat\n- No factional kill\n- A random Coven member is given the Necronomicon at the beginning of Night 3, which boosts their abilities and grants them detection immunity. The Coven Leader or the Lich always receives the Necronomicon first and the Medusa or the Magician always receives it last, if applicable. If the member with the Necronomicon dies, it's passed to another random member.",
		goal: "Kill all who would oppose the Coven."
	});

	register_faction(["neutral", "neutrals"], "Neutral", {
		display: "Neutrals",
		color: "808080",
		type: "neutral",
		icon: "https://cdn.discordapp.com/emojis/980943261587865650.webp",
		summary: "Neutrals fend for themselves, with a wide range of possible goals depending on each role. You can never truly be sure if you trust a neutral, although there are some you always know that you can never trust.",
		goalNK: "Kill all who would oppose you."
	});

	register_faction(["rock", "rocks"], "Rock", {
		display: "Rocks",
		color: "404040",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/975690756390010891.webp",
		summary: "Rock-themed Evil; Anything goes, except stones are not rocks, and fuck you Rasen.",
		features: "- Factional kill (Basic attack)\n- Factional chat",
		goal: "Kill anyone that may oppose the Rocks."
	});

	register_faction(["plant", "plants"], "Plant", {
		display: "Plants",
		color: "008000",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1005325782215819376.webp",
		summary: "Plants VS Zombies Evil; Members produce \"Sun\", and abilities cost a certain amount of \"Sun\" to use. Although one Plant Production always spawns, each role should have at least the ability to produce one sun each night, in case the Plant Production dies. Other than that, they tend to have numerous abilities that require differing amounts of sun, granting the faction a wide range of options after a night or two of production.",
		features: "- A Plant Killing and a Plant Production will always spawn\n- Factional chat\n- No factional kill until all Plant Killings are dead\n- Members produce sun at night, which is shared between all members and can be spent by any of them to use abilities.",
		goal: "Kill anyone who may oppose the Plants."
	});

	register_faction(["underworld", "uw"], "Underworld", {
		color: "C51C00",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/987959165341294592.webp",
		summary: "Fiery Evil; Members use a Factional Douse so that the leader, the Apocalypse, can ignite all Doused targets to kill them at once. Since the Apocalypse always exists, other members shouldn't worry about killing things on their own, and should instead focus on either occasionally contributing to the effort of dousing, or supporting the faction with other utilities.",
		features: "- 336: Apocalypse will always spawn\n- Factional douse that the Apocalypse can ignite.\n- Factional chat\n- If the Apocalypse dies, a random Underworld Offensive member will be promoted to the Apocalypse if possible. Otherwise, another random Underworld member will be promoted.",
		goal: "Kill all who oppose the Underworld sect."
	});

	register_faction("hallow", "Hallow", {
		color: "FFC272",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/993413133597147247.webp",
		summary: "\"Holy\" Evil; Members contribute \"Saint Points\" to buff the leader, the Saint, into the Paragon, while supporting and protecting it. Presumably, contributing a Saint Point would require forgoing any other night action, but this is unspecified.",
		features: "- 502: Saint will always spawn\n- Factional chat\n- No factional kill until the Saint dies\n- Other Hallow members can gain \"Saint points\", which the Saint requires X of to transform into the much stronger Paragon, where X is the number of other living Hallow members. The Town will be notified that the Hallow has awakened their god when the Saint transforms.",
		goal: "Kill all who object to the Hallow's will."
	});

	register_faction(["stalker", "stalkers"], "Stalker", {
		display: "Stalkers",
		color: "000000",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/988001997477269535.webp",
		summary: "Dark/Mysterious Evil; Members focus on preventative and cancelation abilities, but this isn't absolutely required.",
		features: "- Factional kill\n- Factional chat",
		goal: "Kill all who object to the presence of the Stalkers."
	});

	register_faction("were", "Were", {
		color: "804000",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/974886993517490256.webp",
		summary: "Lycanthrope Evil; Members are weak but appear good in non-moon nights, but have raw strength in full-moon nights. Every FMN has a chance to become a \"Hunting Moon\" instead, which buffs every Were. Ignore the one Were Head role.",
		features: "- A Were Killing role will always spawn.\n- Factional chat\n- No factional kill\n- If the Were are in the game, each Full Moon has an X% chance to be a Hunting Moon, where X is 50 plus an additional 15 for each Full Moon since the last Hunting Moon.\n- During Hunting Moons, Weres have their Hunting Moon Enhancement attributes.\n- Hunting Moons are not announced to the Town.",
		goal: "Kill all non-lycanthropes."
	});

	register_faction(["vampire", "vampires", "vamp", "vamps"], "Vampire", {
		display: "Vampires",
		color: "7B8968",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/975231005713645618.webp",
		summary: "Vampire-themed (duh) Evil; Some members are capapble of conversion, others work more like a traditional Mafia.",
		features: "- A Vampire Killing role will always spawn, but there can only be one Vampire Killing role at a time.\n- If there are no Vampire Killing roles left, a random other Vampire role will become a Lampir.\n- Factional chat\n- No factional kill",
		goal: "Convert or kill everyone who would oppose you."
	});

	register_faction(["everfrost", "ef"], "Everfrost", {
		color: "00FFFF",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/977636071833759785.webp",
		summary: "Winter Evil; Lead by Eyisa, members spread coldness through a Factional Roleblock and other abilities. Later, a member may \"Coldsnap\" and kill previously roleblocked players. Each member also has a one-use \"Ultimate Ability\", which is usually what's used to Coldsnap or mass-roleblock people.",
		features: "- 631: Eyisa, Goddess of Winter will always spawn.\n- Factional roleblock\n- Factional chat\n- Town roles that roleblock can't spawn with the Everfrost.\n- The Town will be notified that the eternal winter is coming at the beginning of Day 1.",
		goal: "Eliminate all who don't submit to the endless winter."
	});

	register_faction(["umbrae", "umbra"], "Umbrae", {
		color: "498080",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/979822258543550484.webp",
		summary: "Cultist Evil; Members are weak and appear good in non-moon nights, but strong in full-moon nights. Its leader, the Deity, can turn a single Full Moon into a Blood Moon to greatly buff all members.",
		features: "- An Umbrae Assault role will always spawn.\n- 656: Deity will spawn as long as the Umbrae has at least two members.\n- Factional chat\n- No factional kill\n- If an Umbra Assault member or the Deity dies, the Prophet will be promoted to that role if possible. Otherwise, another random Umbrae member will be promoted.\n- The Umbrae have enhanced abilities on Blood Moons. If the Umbrae is in the game, a Blood Moon always happens on Night 4, and then the Umbrae can choose to call a Blood Moon on any other night from Night 5 onwards. The Town will be notified if there's a Blood Moon.",
		goal: "Kill all who would oppose the Umbrae."
	});

	register_faction(["pale_moon", "palemoon", "pale_moon_circus", "palemooncircus", "pm", "pmc"], "PaleMoon", {
		display: "Pale Moon Circus",
		color: "400080",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1011552521652801586.webp",
		summary: "Circus-themed Evil; They hand out tickets and try to support and protect their leader, the Ringmaster, until the night of the Pale Moon Circus Show, where every ticketed player dies and every member gains access to incredibly strong killing abilities.",
		features: "- 102: Ringmaster and at least one other Pale Moon member will always spawn.\n- Factional chat\n- No factional kill\n- The Pale Moon Circus Show begins on Day 5 and is announced to the Town. Once the Circus Show begins, all Pale Moon members' abilities are enhanced for the rest of the game.\n- The Circus Show is cancelled if the Ringmaster dies before Night 2, or if every member of the Pale Moon dies before the show.",
		goal: "Kill anybody who would oppose the Pale Moon."
	});

	register_faction("sith", "Sith", {
		color: "800000",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/974882271783968839.webp",
		summary: "Star Wars Sith-themed Evil; Led by a random Sith Commanding role, they convert Good members and some Neutrals into random Sith roles. However, they are countered by the Jedi Knight, which they guarantee to spawn by existing.",
		features: "- A Sith (Commanding) will always spawn.\n- Factional kill\n- Factional chat\n- If the Sith is in the game, a 614: Jedi Knight must spawn.",
		goal: "Eliminate those that do not submit to the Dark Side/Live to see the town lose."
	});

	register_faction(["insurgency", "insurgent", "insurgents"], "Insurgency", {
		color: "B00B69",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/993409239764717569.webp",
		summary: "Rebellion-themed Evil; Members don't know each other, but are led by the Despot which provides other members with factional kills, and are unified over time by at least one Insurgent Informant.",
		features: "- 682: Despot will always spawn.\n- An Insurgency Informant role will always spawn as long as the Insurgency has at least two members.\n- There can be, at most, one Insurgancy Informant role for every 3 Insurgency members.\n- Insurgency members don't know each others' roles or names.\n- No factional chat\n- No factional kill",
		goal: "Eliminate all who oppose the Insurgency."
	});

	register_faction(["loyalist", "loyalists"], "Loyalist", {
		display: "Loyalists",
		color: "93C47D",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/996214205982187681.webp",
		summary: "Corrupt Government-themed Evil; Members know each other, except for the Governor, who they must find and protect at all costs. Factional kill plus an alternating Factional Protection/Investigation each night. If the Governor dies, no member can win. If the Governor survives long enough, it can reveal itinfo and use its extra voting power to eliminate the rest of the opposition.",
		features: "- 691: Governor and at least one other Loyalist member will always spawn.\n- The Governor is excluded from factional abilities unless they're the only Loyalist, at which point they may perform the factional kill.\n- The Governor knows other Loyalist members' roles, but not their names, and they don't know who the Governor is.\n- Factional chat\n- Factional kill\n- Factional investigation on odd nights (finds target's role exactly), factional protection on even nights (gives target Powerful defense).",
		goal: "Keep the Governor alive the entire game and eradicate those who will not submit to the Governor's rule."
	});

	register_faction("scp", "SCP", {
		color: "AAAAAA",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/976658193323282462.webp",
		summary: "SCP-themed (duh) Evil; Some members have situational killing abilities, and/or other utilities based on the source material. Beyond that, anything goes as long as each member is a specific SCP.",
		features: "- Factional kill\n- Factional chat",
		goal: "Prevent the Foundation from recontaining you at all costs."
	});

	register_faction("thundercry", "Thundercry", {
		color: "FFFF00",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/996214265012813944.webp",
		summary: "Storm/Bird-themed Evil; Led by a random Thundercry Onslaught, members can draw from a limited pool of Strikes to place them on any player. Members gain defense and other small buffs while Striked players are alive, but Strikes by themselves aren't inherently harmful.",
		features: "- Exactly one Thundercry Onslaught role will always spawn.\n- If the Onslaught member dies, a random Thundercry memmber will become their role.\n- The Thundercry starts with 4 Strikes, which all members can Astrally place on any player instead of their night action. They gain a Strike every three nights if they don't have any left.\n- Strikes are publicly announced at the start of the day after they're placed, and are removed after death.",
		goal: "Eliminate all who stand against the Thundercry."
	});

	register_faction("crew", "Crew", {
		color: "EDC240",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/980989425137901588.webp",
		summary: "Pirate-themed Evil; Presumably lead by a random Crew Captain (unspecified), which would be necessary due to an unspecified-but-presumed lack of a Factional Kill. Members are only opposed to Good and Evil factions. They can win with any Neutral role, except possibly Genocidal (unspecified).",
		features: "- Factional chat\n- No factional kill (presumably)\n- The Crew's presence does not stop the game from ending unless it is the only evil faction opposing a good one.",
		goal: "Kill all main factions. (The Crew can win with all Neutrals.)"
	});

	register_faction(["pokemon", "pokémon"], "Pokemon", {
		color: "BB2F2F",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1007197839576809492.webp",
		summary: "Pokemon-themed (duh) Evil; Led by a random Pokemon Legendary, pretty much anything goes as long as members are Pokemon with named attributes and abilities from the games. Each one also comes with a special \"Pokemon Ability\", but it's unspecified how this differs from any other ability or attribute, if at all.",
		features: "- Exactly one Legendary and at least one Base or Single will always spawn.\n- Evolved cannot spawn naturally; they must be transformed into from Base.\n- Factional chat\n- No factional kill until the Legendary dies",
		goal: "Kill anyone that opposes the Pokemon."
	});

	register_faction(["fox", "foxes"], "Fox", {
		display: "Foxes",
		color: "D67D4D",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/999505172503994450.webp",
		summary: "Japanese Fox-themed Evil; Led by a random Fox Head, pretty much anything goes as long as each member is suitably Japenese.",
		features: "- A Fox Head will always spawn\n- Factional chat\n- Factional kill\n- Fox Omegas don't have access to the factional kill or chat, don't know who the other members of the Foxes are, and don't win with the Foxes, until they fulfill their condition to join the Foxes. The other Foxes know the roles of Fox Omegas that exist, but not players' names.",
		goal: "Kill anyone that opposes the Foxes."
	});

	register_faction("cult", "Cult", {
		color: "243A5F",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/981974951756185680.webp",
		summary: "Throne of Lies Evil; Led by the Cult Leader, who converts a Good player into a subalignment-specific Cult Role every other night.",
		features: "- 959: Cult Leader and at least one other Cult member will always spawn\n- Factional chat\n- No factional kill\n- Town members converted to the Cult become Cult roles based on their alignment.\n- If the Cult Leader dies, the most recently converted member, or the member with the lowest player number, will be promoted to Cult Leader.",
		goal: "Eliminate the Town and all other rival factions."
	});

	register_faction(["horsemen", "horseman"], "Horsemen", {
		color: "6936DB",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/998691858207228026.webp",
		summary: "Horsemen of the Apocalypse-themed Evil; Lead by the Harbinger, who attempts to find and unite the other members to later buff them and allow them to work together. If the Harbinger dies, the faction dissolves, and all other members are left to fight each other and fend for themselves.",
		features: "- 968: Harbringer will always spawn\n- 93: Plaguebearer, 94: Pestilence, and 384: Pestilence, Horseman of the Apocalypse can't spawn with the Horsemen.\n- No factional chat, Horsemen members don't know each others' roles or names.\n- No factional kill\n- Horsemen Evil roles are recruited into the faction by the Harbringer, until the Harbringer dies",
		goal: "Kill every other player, including the other Horsemen. / Protect the Harbringer and eliminate all who would oppose the Horsemen. (when recruited)"
	});

	register_faction("biohazard", "Biohazard", {
		color: "1FCF1F",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/997757370191069234.webp",
		summary: "Poison-themed Evil; Lead by the Hazmat, they use a Factional Plague, a four-day delayed death that additionally spreads via visits, as well as various other poisoning abilities. Appears to be broken/unfinished for the time being.",
		features: "- 981: Hazmat will always spawn.\n- All members have the following attribute:\n`- You are immune to the plague.`\n- Factional chat\n- Factional plague\n- The plague is a status effect that spreads by being plagued by a member of the Biohazard or by visiting or being visited by another player with the plague. Upon receiving the plague, you will be notified and you will die in four days. Additionally, if you are plagued while you already have the plague, you will die.",
		goal: "Poison all who are not immune to your chemicals."
	});

	register_faction("unseen", "Unseen", {
		color: "620035",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1017324343233085462.webp",
		summary: "Throne of Lies Evil; Led by the Assassin who is technically supposed to be the only one who can reliably kill, and the Mastermind who can convert a Good member into a role-specific Unseen role. Yes, there is to be an Unseen counterpart of every single Good role. Deal with it.",
		features: "- 988: Mastermind and 989: Assassin will always spawn.\n- Factional chat\n- No factional kill\n- Town members converted to the Unseen become Unseen roles based on their original role.\n- Only one Unseen Power can be alive at a time - if you attempt to convert another Town Power role, it will fail.\n- If the Mastermind dies, the Assassin becomes the Mastermind.\n- If the Assassin dies or becomes the Mastermind, the newest Unseen member will become an Assassin.\n- Only the starting Assassin can become the Mastermind; if the second Mastermind dies, they will not be replaced.",
		goal: "Eliminate those you wish to not convert, or those who will not join you."
	});

	register_faction("city", "City", {
		color: "15C59E",
		type: "good",
		icon: "https://cdn.discordapp.com/emojis/985026316506103878.webp",
		summary: "RP Hub-themed Good; Possibly lead by a random City Power, but this is unspecified. Their presence majorly overwrites voting mechanics; Day Votes are to use a Town Investigative ability on a target with publicly announced results, while anonymous, roleblockable Night Votes will actually be capapble of lynching someone.",
		features: "- Cannot spawn alongside Town.\n- If the City is in the game, the day lynch is replaced by an investigation, where players vote on a player and a Town Investigative role's ability, other than one that finds its target's exact role, to use on that player. The result will be announced to all players.\n- If the City is in the game, there is a lynch at night, but votes aren't public until the end of the night, and roleblocking prevents votes.\n- No factional chat\n- No factional kill\n- Counts as \"good\"",
		goal: "Protect the city from those that wish to do harm to it."
	});

	register_faction(["fallenangel", "fallen_angel", "fallen", "angel", "fa"], "FallenAngel", {
		display: "Fallen Angels",
		color: "FFFFFF",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/994857702671007854.webp",
		summary: "Devil/Sin-themed Evil; Every member gets stronger as their numbers decrease, but none are able to win while dead. If only one member remains, their Sin-themed attribute activates, granting them a massive power boost.",
		features: "- Factional chat\n- No factional kill\n__- Dead members lose even if the faction wins.__\n- Members don't know what each other are doing each night.\n- Aura: Fallen Angels have no defense if the faction has four or more living members, Basic if there's three, Powerful if there's two, and Invincible if there's only one.\n- Piercing: Fallen Angels deal Basic attacks to non-Fallen Angels and attacks a level above the current Aura level to their teammates, which also bypasses all effects that would prevent it.",
		goal: "Live to crush all who would oppose the Fallen Angels."
	});

	register_faction(["agent", "agents"], "Agent", {
		display: "Agents",
		color: "7F5252",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/999505200236736562.webp",
		summary: "Alphabetical Evil; Lead by an Agent Head, members lack a factional chat. However, each member knows each others' roles and \"codewords\", which they can attempt to discreetly share in public chats to learn each others' names under the noses of other factions.",
		features: "- Exactly one Agent Lead role and at least one other Agent will always spawn.\n- Each Agent is assigned two uncommon \"codewords\" at the start of the game.\n- Agents know other Agents' roles and codewords, but not their names.\n- No factional chat\n- Factional kill\n- If multiple Agents try to use the factional kill, all but the highest player on the hierarchy will fail and be told that another Agent used it.\n- Hierarchy: Lead > Killing > Sabotage > Support > Communication. Lower post numbers take priority in event of a tie.\n- When attempting to use the factional kill, Agents may submit a secondary replacement action that they will take if a higher priority Agent uses the factional kill.",
		goal: "Eliminate everyone who cannot be subverted by the Agents."
	});

	register_faction(["=random", "=randoms", "randoms"], "Random", {
		color: "random",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/994284946225115176.webp",
		summary: "Random-themed (duh) Evil; Lead by the role named Random, they use RNG-themed abilities to get anything done. Results may vary. Pretty much anything suitably random goes.",
		features: "- 1255: Random will always spawn.\n- Factional chat\n- No factional kill\n- If the Random dies, a random Random will become the Random.",
		goal: "Kill all who would oppose the Randoms."
	});

	register_faction("last", "Last", {
		color: "376f4E",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1007931649792692294.webp",
		summary: "Made up of three specific roles, with other REF slots being replaced by Neutral Evil slots. One member is marked the \"First\", another the \"Second\", and lastly the \"Third\". They cycle between those three titles, along with the attributes and abilities they come with.",
		features: "- 1285: Endbringer, 1286: Equinox, and 1287: Eclipser will always spawn. If more than three members would be required to spawn for any reason, the fourth member is 1622: Forgotten. All remaining members are replaced by Neutral Evil roles.\n- On the first night, a random Last becomes the First, another the Second, and another the Third. Every following night, the Third becomes the Second, the Second the First, and the First the Third. Each Last can use only the ability corresponding to their position each night.\n- Members have detection immunity while the First, but lose their defense while the Third.\n- When there are only two members remaining, the Third is removed from the order, and the Second is considered both the Second and the Third and can use both those abilities at once. When there's only one, they're permanently the First and can use all three abilities at once.\n- Lasts' abilities have no negative effects against other Lasts.\n- Factional chat\n- No factional kill",
		goal: "See the end brought about, and your enemies erased."
	});

	register_faction(["spirit", "spirits"], "Spirit", {
		display: "Spirits",
		color: "CEFDFC",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1015469674990944276.webp",
		summary: "Ghost-themed Evil; Led by a random Spirit Head or Spirit Killing, every member starts out incredibly powerful, but will lose power each night. Additionally, if the game lasts to Night 7 and beyond, dead members cannot win.",
		features: "- A Spirit Head or Spirit Killing will always spawn.\n- Factional chat\n- No factional kill until all Spirit Head and Spirit Killing roles die.\n- Spirits have the following values and attributes depending on the night:\nNight 1: Unstoppable attack, Powerful defense to all members, Detection immunity to all members, non-killing roles may use their ability twice.\nNight 2: Unstoppable attack, Basic defense to all members, Detection immunity to all members, non-killing roles may use their ability twice.\nNight 3: Powerful attack, Basic defense to Spirit Head, Detection immunity to all members\nNight 4: Powerful attack, Basic defense to Spirit Head, Detection immunity to Spirit head\nNight 5: Basic attack, no defense\nNight 6: Basic attack, no defense, Spirit chat will close and be rendered unusable\nNight 7+: Basic attack, no defense, Spirit members must survive to win and any Spirit roles that are already dead lose instantly",
		goal: "Eradicate the living who you seek revenge of. / Eradicate the living who you seek revenge of whilst keeping yourinfo in your undead form. (Night 7+)"
	});

	register_faction(["mathematic", "mathematics", "math"], "Mathematic", {
		display: "Mathematics",
		color: "CEFDFC",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1005331570607005758.webp",
		summary: "Math-themed (duh) Evil; Lead by a Math Head, they have an amount of \"Points\" used to perform abilities, factional kills, and non-Head role changes, gained when other players visit Math members. Each role is a function, to interact with both Points, and apply the \"Solved X by Y\" status to enemies, replacing their ability with \"visit Y random players with no effect\" for the next X nights. Unspecified as to what happens if a player with more than one ability becomes Solved, and if they are forced to use their replaced ability, or are allowed not to use it.",
		features: ["- A Mathematics Head must always spawn first, followed by an Operation, Algebraic, and then Geometric\n- Factional chat\n- The Mathematics Faction starts with points equal to twice the amount of players\n- Whenever anyone in the Mathematics Faction is visited, the faction gains a point\n- All Mathematics abilities, except for Operation roles, cost points\n- All Mathematics members may, instead of their regular night action, choose to deal a Basic/Powerful/Unstoppable Attack to another player and gain the equivalent Defense for tonight and the next night at the cost of 10/20/40 points\n- At any time, except for the Mathematics Head, Mathematics players may change their role into any other role of their choice in the faction (except for Heads) at the cost of 10 points\n- The Mathematics Head, at any time before their death, may name a successor who will become the new Mathematics Head upon their death. If no successor is named or the successor is dead, the successor is random.", "- “Solved X by Y” is a status on a player that lasts X nights, starting from the night after it is received, and changes the victim’s ability to “visit Y random players with no effect” at the end of each night. X goes down by 1 at the end of each night until it hits 0, then Solved is removed. If a player is already Solved and is Solved again, add the 2 Xs together and take the higher Y to create the new Solved state."],
		goal: "Erase all who don’t believe in the power of numbers."
	});

	register_faction(["sentry", "sentries"], "Sentry", {
		display: "Sentries",
		color: "4CB9D4",
		type: "good",
		icon: "https://cdn.discordapp.com/emojis/1005334084983193674.webp",
		summary: "Secret Service-themed Good; Led by a random Sentry Power, capable of \"Authorizing\" targets to allow most other Sentry roles to target them, with few exceptions.",
		features: "- A Sentry Power must always spawn.\n- Sentries may only visit authorized targets.\n- Sentries don't know each others' roles or names.\n- No factional chat\n- No factional kill\n- Counts as \"good\"",
		goal: "Rid the town of any dissidents to the Sentries."
	});

	register_faction(["toppat", "toppats", "toppat_clan", "toppatclan", "tc"], "Toppat", {
		display: "Toppat Clan",
		color: "B01C12",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1002935333723328572.webp",
		summary: "Henry Stickmin-themed Evil; Led by the Right Hand Man and a random member assigned as the Chief. Each member has a specific bonus for being the Chief. In addition, most members have either one or both of the following day abilities: Raiding a non-Toppat player to weaken and possibly kill them while also buffing a Toppat member, or Investigating a player to gain the option to control them.",
		features: ["- 1402: Right Hand Man will always spawn if there are 2 or more members.\n- At the beginning of the game, a random non-Executive Toppat will be made the Chief. The Chief may deal a Basic attack to a player each night, which they may use along with their night action if they were the first Chief or are the last Toppat alive.\n- If the Chief dies, the Right Hand Man will become Chief, then Toppat Executives, then random Toppats.\n- If the Chief is lynched, the next day, the gallows will be destroyed and there may not be a lynch.\n- Toppat Operators, Toppat Executives, and the Chief have the additional ability of raiding a player during the day, roleblocking them and reducing their attack and defense by a stage for the next night, and dealing a Powerful attack to them if they've killed a Chief. The raider may select any Toppat to increase the attack and defense of by a stage and grant detection immunity and Astral for the night.", "- Toppat Supports, Toppat Executives, and the Chief have the additional ability of investigating and surveying a player during the day, learning the target's faction, or their role if you've already surveyed them before, and allowing them to, at the cost of not using their ability, control their target's action the next night.\n- Factional chat\n- No factional kill"],
		goal: "Destroy all who refuse to submit to the Toppats."
	});

	register_faction("koopa", "Koopa", {
		color: "4D8A45",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1014037144873992232.webp",
		summary: "Super Mario-themed Evil; Led by some version of Bowser, who is the only one allowed to speak in the Factional Chat until he dies, though other Koopa info will be posted there too. Beyond that, anything goes, as long as it's some Super Mario character/creature that could feasably appear in Bowser's army.",
		features: "- A Koopa King will always spawn.\n- Factional chat, but, if the King is alive, only they may talk\n- No factional kill, but a Factional attacker is chosen each night by the talkers in Faction chat, Koopa Killings and All-rounders who weren't chosen will have their Attack reduced to None, A Support or Protective Koopa may also be chosen, they will gain a Basic attack ability that night.\n- Other Koopa cannot whisper to the King.\n- All information gathered by Koopa, such as roles learned or whispers overheard, will be shared in the factional chat.",
		goal: "Kill all who would oppose Lord Bowser."
	});

	register_faction(["creator", "creators"], "Creator", {
		display: "Creators",
		color: "D95252",
		type: "evil",
		summary: "GIM Role Creator-themed Evil; Four specific roles will always spawn, with any remaining REF slots being replaced by Neutral Evil ones. The Founder is their leader, who gains killing power with each dead Creator. Alternatively, if the Founder dies, the other remaining members will become stronger and gain a Powerful Factional Kill. Unlike other factions, they are not allowed to spare any Neutrals.",
		features: "- 1473: The Founder, 1474: The Designer, 1475: The Balancer, and 1476: The Simulator will always spawn. If more than four members would be required to spawn for any reason, the remaining members are replaced by Neutral Evil roles.\n- If The Founder dies, all other Creators will become enraged, gaining Basic defense and multitasking.\n- Factional chat\n- No factional kill until The Founder dies, at which point the Creators gain a Powerful factional kill that doesn't take up their night actions.\n__- The Creators cannot win until every non-Creator is dead.__",
		goal: "Witness the end of the chaos that you have created. Kill absolutely every non-Creator."
	});

	register_faction("warfleet", "Warfleet", {
		color: "000080",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1013747272003092500.webp",
		summary: "Navy Warship-themed Evil; Led by the Warlord, which can permanently upgrade a member every other night. Offensive members, and to a lesser degree upgraded Defensive members, typically have bonuses attached to their factional attacks, with limited-use preparatory abilities they can use if another member, such as the every-other-night-useless Warlord, handles that night's factional kill.",
		features: "- 1491: Warlord will always spawn.\n- If there are at least three members, there must be one of each subalignment. If there are only two, they must be of different subalignments.\n- If the Warlord dies, a random member will become the Warlord. They'll revert to their previous role if the Warlord is revived.\n- Upgrade: Warfleet roles have Upgrade attributes that permanently apply after the phase they are Upgraded by the Warlord.\n- Factional chat\n- Factional kill",
		goal: "Destroy your landfaring opposition, and conquer their territory as your own."
	});

	register_faction(["android", "androids"], "Android", {
		display: "Androids",
		color: "AAFF40",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1006734381559337020.webp",
		summary: "Procedurally-generated Evil; Roles are randomly built from three sets of 8 items each, and an additional random toggle for if their ability is used in the Day or Night, leading to 1024 possible permutations.",
		features: ["- Factional chat\n- Factional kill\n- All roles in this faction are created on the spot from the following format. {X // Y //Z} means a random one of the choices separated by slashes in the braces.", "`Post [Random number from 10001 to 11024]\m[String of 6 random uppercase letters] (Android Support)\nAbilities:\n- Hack a player {each night/each day}. You will {deal a Basic attack to them // learn their role // grant them death immunity for the phase // prevent them from taking game actions for the phase // nullify their attributes for the phase // fail all game actions targetting them // reroll their role to one from the same faction // remove them from the next day phase}.`", "`Attributes:\n- When you use your ability, {your target will learn that they were targetted by an Android // you will not be able to use it on that target again // your defense is lowered by a tier the next night if your target isn't a member of the Town // a random non-Android will learn five names, at least one of which is an Android // a random non-Anrdoid will gain a one-use Basic attack // the next Android ability that resolves will fail // you will be dealt a Basic attack in seven phases // a random Android's abilites and attributes are revealed to the Town the next day phase}\n- {You are immune to effects that would interfere with your abilities // You cannot be killed by Powerful attacks // It takes two more votes to lynch you // You may use your ability once while dead // You will appear as [a random Town role] to all investigative effects // You can talk to the dead at night // You can hear all whispers // You know all Neutral roles in the game}.`"],
		goal: "Crush all inferior beings."
	});

	register_faction(["florae", "flora"], "Florae", {
		color: "81B17A",
		type: "good",
		summary: "Flower-themed Good; A direct counterpart to ToS Town, but with no guaranteed leader. For now, you can ignore the note below about Florae Power roles, as non exist. Other than that, pretty much anything goes as long as the role is named after a flower.",
		features: ["- Only one Florae Power may spawn.\n- No factional chat\n- No factional kill\n- Counts as \"good\""],
		goal: "Exterminate all who would harm your tribe."
	});

	register_faction(["sk", "serial_killer", "serialkiller", "serial_killers", "serialkillers"], "SK", {
		display: "Serial Killers",
		color: "336EFF",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1007310929278554173.webp",
		summary: "ToS Serial Killer-themed Evil; Every role is a modified clone of ToS Serial Killer, or SK for short. It's led by the Serial Killer Leader, who has the potential to recruit a non-SK-faction SK, on the off chance that one happened to spawn that game.",
		features: ["- 1524: Serial Killer Leader will always spawn if a non-Serial Killer role with \"SK\" in its name spawns alongside this faction.\n- All members have the following attributes:\n`- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.`\n- Factional chat\n- No factional kill"],
		attributes: "- If you are roleblocked, you will attack the role blocker in addition to your target.\n- When you automatically kill a roleblocker, the roleblock attempt will fail.\n- Roleblockers that target you will have their wills covered in blood, making it unreadable.\n- At night, you may choose to spare roleblockers instead.",
		goal: "Stab everyone who would oppose you in a very serial way."
	});

	register_faction("army", "Army", {
		color: "E8D578",
		type: "good",
		icon: "https://cdn.discordapp.com/emojis/1013454909099749468.webp",
		summary: "Military-themed Good; Led by the Marshal, who is distinctly vital for the faction's victory. Fortunately for you, it has strong defenses, and a Mayor-style reveal ability. It's common for other Army roles to gain an extra use for one or two abilities upon the reveal of the Marshal, but it's not guaranteed.",
		features: "- 1536: Marshal and at least one Army Protector will always spawn.\n- No factional chat\n- No factional kill\n- Counts as \"good\"\n- If the Marshal dies, the Army has three days to win. After that, if the Army would win, the game is declared a draw instead.",
		goal: "Eliminate all who would not follow martial law."
	});

	register_faction(["discordian", "discordians", "discord"], "Discordian", {
		display: "Discordians",
		color: "7289DA",
		type: "evil",
		summary: "Discord User-themed Evil; Roles are based on and named after specific members of the \"Grand Idea Mafia (hell)\" server. Not much more is known about it at this point, as there is no official post for it, and not much of a pattern between roles due to the amount of contributors already.",
		goal: "Eliminate everyone who doesn't actually exist."
	});

	register_faction("band", "Band", {
		color: "FCBA03",
		type: "evil",
		summary: "Instrument-themed Evil; Every role has a normal ability, a Rehearsal ability, and a Concert ability. The regular ability should generally be the weakest, or at least the most generally useful. The Rehearsal ability can be stronger; in general, Rehearsal makes the Concert occur one night sooner, but notifies all players within a radius that must be defined in the role's attributes, making it risky to use. The Concert itself is a global roleblocking event set to occur in a usually impossible late night in the game, making some amount of Rehearsing necessary, so the Concert ability should always be the strongest of the three.",
		features: "- Factional chat\n- No factional kill\n- The Band's Concert begins on day X and is announced to the Town. X is 4 if there's only one living member, 5 if there's two, 8 if there's three, 10 if there's four, and 12 if there's five or more.\n- Once the Concert begins, all non-Band players will be roleblocked through immunity the following night, there is no lynch that day, the Band may anonymously lynch a player if all members unanimously agree, and for the rest of the game, all Band members gain Basic defense and their abilities are enhanced.\n- If the Concert hasn't started and its starting day would be reduced to a day that's already past, it starts the next available day instead.\n- Rehearsing makes the Concert start one day earlier, but notifies half of the other players at random within the rehearser's rehearsal radius of them on the player list that someone was rehearsing near them.",
		goal: "Ensure the removal of those who will not listen to your music."
	});

	register_faction(["seven", "7"], "Seven", {
		color: "570861",
		type: "evil",
		summary: "Sin-themed Evil; Led by Satan, the Seven has a total member count capped at 4 and announces every single role that spawned at the start of the game. However, every role is fairly powerful, being guaranteed Basic Defense, Detection Immunity, and a 1-use Ultimate Ability. In addition, Satan can offer to Contract other players into the Seven's goal, but their acceptance will weaken the main members.",
		features: "- 1654: Satan and no more than 3 other members will always spawn.\n- Factional chat\n- Factional kill\n- The Town will be notified what Sins spawned at the start of the game.\n- All members have detection immunity and Basic defense.\n- Members lose their detection immunity when the first of Satan's contracts is accepted, their defense when the second is, and their factional kill when the third is.",
		goal: "Devolve the town into sin and chaos, eviscerate all who would try to banish you or Satan."
	});

	register_faction("x", "X", {
		color: "FF47FF",
		type: "evil",
		summary: "Empowered Crossover-themed Evil; This faction is meant to be made of stronger versions of every role that has won at least one previous game. It does not have an official post yet, so not much more is known.",
		goal: "X Goal"
	});

	register_faction(["coa", "cult_of_animals", "cultofanimals"], "COA", {
		display: "Cult of Animals",
		color: "BA7D1A",
		type: "evil",
		summary: "Animal-themed Evil; Led by Victoria the Vulture, who has the option to devour any other member to empower herself. Members must survive to win. Other than Victoria herself, most members are not that strong, and any offensive or countering abilities will not be able to harm Victoria. No official post yet.",
		goal: "Destroy those who will not worship Victoria, and appease her to avoid sacrifice."
	});

	register_faction(["faunae", "fauna"], "Faunae", {
		color: "D4A12D",
		type: "neutral",
		summary: "Animal-themed Neutral; Led by the Lion, who is capable of killing a member of a non-Neutral player to take their goal for itself and for all other Faunae members to inherit. In turn, the other members either offensively support the Faunae (Predators) or defensively support the Faunae (Prey). No official post yet.",
		goal: "Kill anyone who opposes the Faunae, or devour a player and complete their win condition."
	});

	register_faction(["gatherer", "gatherers", "mtg"], "Gatherer", {
		display: "Gatherers",
		color: "70A0B3",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1016403784714436658.webp",
		summary: "MTG-themed Evil; Led by a Gatherer Commander, they spend nights to generate Mana of a specific color, which is then used to fuel various abilities. The other subalignments are named off of the color they can generate, though some may be able to use other colors for bonus abilities.",
		features: ["- Exactly one Gatherer Commander will always spawn.\n- Factional chat\n- No factional kill unless no kill-capable Gatherers are alive. If it exists, it will cost (1) to use.\n- Only one member may use an attacking ability each night unless otherwise specified.\n- Members can generate Mana of one of five colors, which is shared between all members and can be spent by any of them to use abilities.\n- +1/+1 Counters are permanent items. Each second one will increase both your Attack and Defense by 1.", "- Most non-generating abilities require a certain number and color of Mana, following the below rules:\n**•** A color in parentheses will require a single mana of that given color, e.g. (Red)\n**•** Multiple of a color is expressed by repeating it, e.g. (Blue)(Blue)(Blue) mean 3 Blues.\n**•** A number in parentheses can be filled by Mana of any color. For example, (3) can be paid by (White)(Black)(Green)\n**•** All parentheses are to be treated separately. For instance, (Red)(1) means it costs specifically 1 Red on top of one Mana of any color."],
		goal: "Reduce your opposition to 0 HP."
	});

	register_faction(["civilization", "civil", "civ"], "Civilization", {
		color: "C8A57D",
		type: "evil",
		summary: "Civilization (Game)-themed Evil; Though there's no official post with features, it at least has a factional kill/chat, though it appears that Militaristic roles are expected to carry it out at least as long as they're alive. Gold is a resource that every role it at least able to use, although only Economic roles appear to be able to generate it. All roles have at least one gold-free ability, and are listed as Unique. Notably, this faction's kill is unusual in that it reveals the role that carried it out publicly, rather than the faction.",
		goal: "Conquer the world through war."
	});
};
