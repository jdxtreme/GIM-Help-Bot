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

			if(info.summary)
				e.setDescription(info.summary);

			if(info.color === "random")
				e.setColor(UTILS.rHex(6));
			else if(info.color !== "null")
				e.setColor(info.color || "808080");

			e.addField("Color:", "#" + info.color, true);
			e.addField("Type:", UTILS.titleCase(info.type), true);

			if(info.subcats)
			{
				e.addField("Subalignments: ", info.subcats);
			}
			else
			{
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

					e.addField("Subalignments:", subcatstr);
				}
			}

			if(info.features)
			{
				if(typeof info.features === "object")
					for(let i = 0; i < info.features.length; i++)
						e.addField("Features (Part " + (i+1) + "):", info.features[i]);
				else
					e.addField("Features:", info.features);
			}

			if(info.goal)
				e.addField("Goal:", info.goal);

			UTILS.embed(chn, e);
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

			case "any":
				g.GOOD[g.GOOD.length] = title;
				g.EVIL[g.EVIL.length] = title;
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
		summary: "\"Holy\" Evil; Members contribute \"Saint Points\" to buff the leader, the Saint, into the Paragon, while supporting and protecting it. Each role should define how they give Saint Points, typically by performing successful abilities.",
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
		icon: "https://cdn.discordapp.com/emojis/1044153698030465044.webp",
		summary: "Lycanthrope Evil; Members are weak but appear good in non-moon nights, but have raw strength in full-moon nights. Every FMN has a chance to become a \"Hunting Moon\" instead, which buffs every Were. Ignore the one Were Head role.",
		features: "- A Were Killing role will always spawn.\n- Factional chat\n- No factional kill\n- If the Were are in the game, each Full Moon has an X% chance to be a Hunting Moon, where X is 50 plus an additional 15 for each Full Moon since the last Hunting Moon.\n- During Hunting Moons, Weres have their Hunting Moon Enhancement attributes.\n- Hunting Moons are not announced to the Town.",
		goal: "Kill all non-lycanthropes."
	});

	register_faction(["everfrost", "ef"], "Everfrost", {
		color: "00FFFF",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1026034489203376128.webp",
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
		features: "- Exactly one Legendary and at least one Base or Single will always spawn.\n- Only one Single may spawn.\n- Evolved cannot spawn naturally; they must be transformed into from Base.\n- Factional chat\n- No factional kill until the Legendary dies",
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
		features: "- 968: Harbinger will always spawn\n- 93: Plaguebearer, 94: Pestilence, and 384: Pestilence, Horseman of the Apocalypse can't spawn with the Horsemen.\n- No factional chat, Horsemen members don't know each others' roles or names.\n- No factional kill\n- Horsemen Evil roles are recruited into the faction by the Harbinger, until the Harbinger dies",
		goal: "Kill every other player, including the other Horsemen. / Protect the Harbinger and eliminate all who would oppose the Horsemen. (when recruited)"
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

	register_faction(["koopa", "koopas"], "Koopa", {
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
		icon: "https://cdn.discordapp.com/emojis/1023145388968001627.webp",
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
		icon: "https://cdn.discordapp.com/emojis/1023503910352199691.webp",
		summary: "Instrument-themed Evil; Every role has a normal ability, a Rehearsal ability, and a Concert ability. The regular ability should generally be the weakest, or at least the most generally useful. The Rehearsal ability can be stronger; in general, Rehearsal makes the Concert occur one night sooner, but notifies all players within a radius that must be defined in the role's attributes, making it risky to use. The Concert itself is a global roleblocking event set to occur in a usually impossible late night in the game, making some amount of Rehearsing necessary, so the Concert ability should always be the strongest of the three.",
		features: "- Factional chat\n- No factional kill\n- The Band's Concert begins on day X and is announced to the Town. X is 4 if there's only one living member, 5 if there's two, 8 if there's three, 10 if there's four, and 12 if there's five or more.\n- Once the Concert begins, all non-Band players will be roleblocked through immunity the following night, there is no lynch that day, the Band may anonymously lynch a player if all members unanimously agree, and for the rest of the game, all Band members gain Basic defense and their abilities are enhanced.\n- If the Concert hasn't started and its starting day would be reduced to a day that's already past, it starts the next available day instead.\n- Rehearsing makes the Concert start one day earlier, but notifies half of the other players at random within the rehearser's rehearsal radius of them on the player list that someone was rehearsing near them.",
		goal: "Ensure the removal of those who will not listen to your music."
	});

	register_faction(["seven", "7"], "Seven", {
		color: "570861",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1023162697858166844.webp",
		summary: "Sin-themed Evil; Led by Satan, the Seven has a total member count capped at 4 and announces every single role that spawned at the start of the game. However, every role is fairly powerful, being guaranteed Basic Defense, Detection Immunity, and a 1-use Ultimate Ability. In addition, Satan can offer to Contract other players into the Seven's goal, but their acceptance will weaken the main members.",
		features: "- 1654: Satan and no more than 3 other members will always spawn.\n- Factional chat\n- Factional kill\n- The Town will be notified what Sins spawned at the start of the game.\n- All members have detection immunity and Basic defense.\n- Members lose their detection immunity when the first of Satan's contracts is accepted, their defense when the second is, and their factional kill when the third is.",
		goal: "Devolve the town into sin and chaos, eviscerate all who would try to banish you or Satan."
	});

	register_faction("x", "X", {
		color: "FF47FF",
		type: "evil",
		summary: "This faction is meant to be made of stronger versions of every role that has won at least one previous game, unified under one banner. It probably won't ever be balanced, but we can always try; the motto of GIM.",
		features: "- Only one X Power, one X Casual, and one X Conversion may spawn, and only two of the three may spawn\n- Factional chat\n- Factional kill\n- X Conversion roles cannot convert if there are 4 or more members.",
		goal: "Reestablish your control over the town and eliminate those not worthy to control it."
	});

	register_faction(["faunae", "fauna"], "Faunae", {
		color: "D4A12D",
		type: "neutral",
		summary: "Animal-themed Neutral; Led by the Lion, who is capable of killing a member of a non-Neutral player to take their goal for itself and for all other Faunae members to inherit. In turn, the other members either offensively support the Faunae (Predators) or defensively support the Faunae (Prey). No official post yet.",
		features: "- A Fauna Apex must spawn\n- Factional chat\n- No factional kill",
		goal: "Kill anyone who opposes the Faunae, or devour a player and complete their win condition."
	});

	register_faction(["gatherer", "gatherers", "mtg"], "Gatherer", {
		display: "Gatherers",
		color: "70A0B3",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1016403784714436658.webp",
		summary: "MTG-themed Evil; Led by a Gatherer Commander, they spend nights to generate Mana of a specific color, which is then used to fuel various abilities. The other subalignments are named off of the color they can generate, though some may be able to use other colors for bonus abilities.",
		features: ["- Exactly one Gatherer Commander will always spawn.\n- Factional chat\n- No factional kill unless no kill-capable Gatherers are alive. If it exists, it will cost (1) to use.\n- Members can generate Mana of one of five colors, which is shared between all members and can be spent by any of them to use abilities.\n- +1/+1 Counters are permanent items. Each second one will increase both your Attack and Defense by 1.", "- Most non-generating abilities require a certain number and color of Mana, following the below rules:\n**•** A color in parentheses will require a single mana of that given color, e.g. (Red)\n**•** Multiple of a color is expressed by repeating it, e.g. (Blue)(Blue)(Blue) mean 3 Blues.\n**•** A number in parentheses can be filled by Mana of any color. For example, (3) can be paid by (White)(Black)(Green)\n**•** All parentheses are to be treated separately. For instance, (Red)(1) means it costs specifically 1 Red on top of one Mana of any color."],
		goal: "Reduce your opposition to 0 HP."
	});

	register_faction(["civilization", "civilizations", "civil", "civ"], "Civilization", {
		display: "Civilizations",
		color: "C8A57D",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1021501737615499284.webp",
		summary: "Civilization (Game)-themed Evil; Led by a Militaristic, which carries out the factional kill by default, and an Economic, which generates Gold for the faction. Gold is a resource that various roles can utilize for more powerful abilities. All roles have at least one gold-free ability and are listed as Unique. Notably, this faction's kill is unusual in that it reveals the role that carried it out publicly, rather than the faction.",
		features: "- At least one Civilization Militaristic and one Civilization Economic will always spawn.\n- Factional kill, which each role has a unique death message when using\n- Factional chat\n- Members can generate gold, which is shared between all members and can be spent by any of them to use abilities. Abilities that cost gold consume that gold immediately upon activation. The faction starts with 5 gold.\n- If only one Civilization is alive, they may perform the factional kill alongside any other normal abilities.\n- A maximum of two people can be converted. If all Civilizations die, the conversions will be reversed.",
		goal: "Conquer the world through war."
	});

	register_faction(["netsec", "net"], "NETSEC", {
		color: "006B23",
		type: "good",
		icon: "https://cdn.discordapp.com/emojis/1025184304264908879.webp",
		summary: "Untrusted Crossover Good; Led by the Operation Leader, who always exists due to promotion. A complicated network exists that members can use as an alternate win condition by hacking through it. Each member has a \"Hacking Skill\" stat that ranges from \"None\" to \"Very High\", but it isn't specified what these exactly mean, same as some role-specific chance-based mechanics.",
		features: ["- 2166: Operation Leader will always spawn\n- No factional chat\n- No factional kill\n- NETSEC has a 4x3 network of nodes that members can hack. There is a laptop node on each row of the first column and a master node somewhere on the fourth. The host must arbitrarily place any number of laptop nodes on spaces on the second and third columns and up to four server nodes on spaces on the second, third, and fourth, and must connect the nodes across rows and columns such that all the nodes are somehow linked through any number of connections. There can't be two nodes on the same space.\n- Members of evil factions may see the full layout of the network. Other players, including NETSEC members, can only see the first column, and all nodes connected to captured nodes.", "- NETSEC members may capture nodes by hacking them. NETSEC roles have Hacking Skill, which which corresponds to the chance they have to successfully capture a node when hacking it. Very Low is 10%, and then each subsequent tier (Very Low < Low < Below Average < Average < Above Average < High < Very High) increases the chance by 5%. When hacking a laptop node, the chance is increased by 5%, and when hacking the master node, the chance is decreased by 5%. PWNing a node will always capture it unless it's the master node, in which case it only has a 50% chance to capture it.\n- If the master node is captured, NETSEC and the Town win the game."],
		goal: "Capture the REF network and retrieve the stolen data OR eliminate the REF. (you win with town.)",
		fieldSSC: ["field_operations", "fieldoperations", "field", "operations", "fieldops", "fo"]
	});

	register_faction(["metamorph", "morph"], "Metamorph", {
		color: "0A62B5",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1036185101949739010.webp",
		features: "- A Metamorph Killing will always spawn\n- Factional chat\n- No factional kill unless no Killing members are alive.\n- All original roles can swap roles with another player at night, with faction and goal staying the same. This will fail on Neutral roles with unique goals. Only one member may swap roles each night.",
		goal: "Emerge with a new form and destroy all opposition."
	});

	register_faction(["beast", "beasts"], "Beast", {
		display: "Beasts",
		color: "89BAFF",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1036118637326651422.webp",
		features: "- If the largest good faction is the Town, 2324: Unit will always spawn. If it's Florae, 2325: Roggle will spawn. If it's City, 2326: Drak will spawn. If it's Sentries, 2327: Songun will spawn. If it's Army, 2328: Tweed will spawn. If it's NETSEC, 2329: PixelRoggle will spawn. If it's NTF, 2330: Monitor will spawn.\n- Only one member of each subalignment may spawn.\n- Factional chat\n- No factional kill unless no kill-capable Beasts are alive.\n- Only one member may use a killing ability each night.\n- Members cannot win with Pokemon for any reason.\n- Members' Locked attributes and abilities only apply or can only be used when that member's Unlock Condition is met.",
		goal: "Kill all who would oppose you or something probably idfk"
	});

	register_faction(["ntf", "nft"], "NTF", {
		color: "78FF77",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1036120776883060736.webp",
		goal: "Eliminate threats to the digital world, or resecure it to deny access to the enemy."
	});

	register_faction(["partisan_of_the_sun", "partisanofthesun", "partisans_of_the_sun", "partisansofthesun", "partisan", "partisans", "sun", "pots"], "Partisan", {
		display: "Partisans of the Sun",
		color: "FFF196",
		type: "evil",
		features: "- Factional chat\n- Factional kill\n- At the beginning of Day 1, the Town will be notified that the glorious sun shines through hypocrisy. For the rest of the game, players can’t whisper, modkill themselves, or resign.\n- If there are ever more Partisans than non-Partisans, the Partisans win the game and all players who oppose the Partisans lose the game.\n- __If the Partisans win, each living member must resurrect one dead non-Partisan who hasn’t won. That player wins with the Partisans.__",
		goal: "Unite the Town under the sun."
	});

	register_faction(["mainframe"], "Mainframe", {
		color: "65E4E1",
		type: "good",
		features: "- Roles aren't made like other factions. (You can still make roles, unlike Androids. It's just not like creating other roles. Also, please check with Lunari before doing it <3)\n- Instead, templates are created that roles are derived from. Templates have content in [brackets] that allows roles to differ from other variants of each other.\n- In the role's name, two base64 characters are chosen to be added to the name, including a - and _ for non-alphanumerical characters. The last 4 or 5 digits included depend on the variant's post number.\n- No factional kill\n- No factional chat\n- Counts as good",
		goal: "Eliminate all threats to the Mainframe."
	});

	register_faction(["zombies", "zombie"], "Zombie", {
		display: "Zombies",
		color: "819075",
		type: "evil",
		features: "- Factional kill. The target is a random non-Zombie.\n- Factional chat",
		goal: "Consume the brains of all who oppose the Zombies."
	});

	register_faction(["nothing"], "Nothing", {
		color: "null",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1047497405878243409.webp",
		features: "- This faction has no subalignments or features.",
		goal: "-"
	});

	register_faction(["backrooms", "backroom", "br"], "Backrooms", {
		color: "E0D47C",
		type: "evil",
		features: "- Only up to three members may spawn.\n- Factional chat\n- No factional kill\n- All members are roleblock immune.",
		goal: "Convert the town into another Backrooms level."
	});

	register_faction(["beekeepers", "beekeeper", "bk"], "Beekeeper", {
		color: "F4C129",
		type: "evil",
		features: "- 2750: Beekeeper Head must spawn.\n- Cannot spawn unless there is at least one \"Beekeeper\" role. A \"Beekeeper\" role is one with \"beekeeper\" in its name, or one that uses bees to pay for ability costs.\n- Factional chat\n- No factional kill\n- Converted \"Beekeepers\" win with this faction and their original.",
		goal: "Take down the non bee-lievers."
	});

	register_faction(["rugby", "rugbys", "rugby's", "rugby_7_team", "rugby7team", "rugby_7s_team", "rugby7steam", "r7t"], "Rugby", {
		display: "Rugby 7's Team",
		color: "5AE6D0",
		type: "evil",
		features: "- Only up to seven members may spawn.\n- Factional chat\n- No factional kill\n- If less than seven members would spawn, two-thirds, rounded down, must be Backs, and the rest must be Forwards.\n- At the start of the game, one member gets the Ball.\n- While a player has the Ball, they have Powerful defense and their ability is replaced with \"Choose two targets. You deal a basic attack to the first target. If you kill the target, you kick the ball into the second target, attacking them.\"\n- Whenever one or more players attack a player with the Ball, a random one of those attackers gets the Ball.\n- If no member has the Ball, whenever one or more members visits a player with the Ball, a random one of those members gets the Ball.\n- If, over the course of a night, no member gets the Ball, all members' names are revealed at the start of the next day.",
		goal: "Kill everyone"
	});

	register_faction("latex", "Latex", {
		color: "393939",
		type: "evil",
		icon: "https://cdn.discordapp.com/emojis/1047367014068531230.webp",
		features: "- At least one Black member, one White member, and one Chromatic member must spawn.\n- No factional chat. Members know each others' identities.\n- Factional transfur (Attempt to convert a player to a random Latex role of the same subalignment as the user)\n- At the beginning of the game, each player is assigned a secret random willpower value between 50% and 85%, minus 5% for each stage of attack or defense that player has up to Overkill/Overprotective. If the factional transfur is used on that player, this is the chance that the conversion is successful.\n- The factional transfur can be blocked by all protective effects.\n- If a member attacks someone and fails, they have a 25% chance to transfur them.",
		goal: "Transfur all of your playmates ;)"
	});

	register_faction(["kombatants", "kombatant", "kombat"], "Kombat", {
		display: "Kombatants",
		color: "FBB546",
		type: "evil",
		features: "- Only up to four members may exist.\n- Factional chat\n- No factional kill unless no Killing members are alive.\n- Members' X-Ray attributes are unlocked if they are the last living member.\n- If more than one member is alive when the game ends, the Kombatants do not win.\n- If exactly one Kombatant and one non-Kombatant are alive, the game ends in the Kombatant victory.",
		goal: "Konquer the town and prove your worth."
	});

	register_faction("traptrix", "Traptrix", {
		color: "072A6C",
		type: "evil",
		features: ["- Only one Traptrix Power may spawn.\n- Factional chat\n- Factional kill\n- At the beginning of the game and every full moon night, each member receives a random trap hole, which is one of the following items that grants them one used of the listed ability:\n> Chaos Trap Hole: Choose a player. If their attack value is Basic or above and they visit someone tonight, kill both them and their target.\n> Traptrix Trap Hole: Kill all players who visit a player of your choice.\n> Bottomless Trap Hole: Kill a player if they have an attack value of Basic or above.\n> Treacherous Trap Hole: Kill two players. This can only be used if no other trap holes have been used.\n> Network Trap Hole: Kill a player if they interact with a player tonight without visiting that player.\n> Gravedigger's Trap Hole: Kill a player if they interact with a player tonight that they usually would not be able to.\n> Acid Trap Hole: If your target's defense is lower than Powerful, kill them.", "> Spikes Trap Hole: If your target attacks a player tonight, kill them. This may be used any number of times instead of just once."],
		goal: "Slay everybody who would oppose you."
	});

	register_faction(["galactic", "galaxy"], "Galactic", {
		display: "Galactics",
		color: "4E32A8",
		type: "evil",
		features: "- Factional kill, but only usable by the Empowered member.\n- No factional chat\n- All members know each other's identities and roles, as well as which member is Empowered.\n- All members are assigned a random non-Power Town role, of which they have the abilities and attributes of when not Empowered. They lose those abilities and attributes when Empowered, but regain them when not Empowered.\n- A random member becomes Empowered at the beginning of Day 2. If the currently Empowered member dies, a random member will become Empowered at the start of the next day.\n- The Empowered member can, during the day, switch who the Empowered member is. This takes effect at the beginning of the night, but only if the Empowered member trying to become unempowered is alive by that point.\n- Investigative roles see Galactics as their true role, even when not Empowered, unless given any effect that would alter this by an outside source.\n- At the beginning of Day 1, the Town will be notified of a large beam from the sky in a distance",
		goal: "Ensure the extermination of all who would stand in the way of the intergalactic empire."
	});

	register_faction(["minecraft", "mc"], "Minecraft", {
		color: "808080",
		type: "evil",
		features: "- A Minecraft Head role will always spawn\n- Factional chat\n- No factional kill\n- If the Head member dies, at the start of the next night, a random role becomes their role. They gain the Head member's resources, if any, but not their items.",
		goal: "Slay all else and turn them into gear (what??)"
	});

	register_faction(["everything"], "Everything", {
		color: "808080",
		type: "any",
		features: "- This faction has no roles.\n- If a role would spawn in this faction, a random role but converted to Everything (through immunities) will spawn instead.\n- Factional chat\n- Factional kill \n- Can count as \"good\". If it does, it doesn't have a factional chat or kill.",
		goal: "Kill everyone."
	});

	register_faction(["clocktower", "cocktower", "ct"], "Clocktower", {
		color: "2E62C9",
		type: "good",
		features: "- If a majority of the players at the start of the game would be Clocktower members, a random slot in the rolelist is replaced with Neutral Demonic, and for the rest of the game, roles aren't revealed upon death and dead players may speak in day chats.\n- No factional chat\n- No factional kill\n- Counts as good",
		goal: "Eliminate neighboring factions from ravenwood's bluff."
	});

	register_faction(["frog", "frogs"], "Frog", {
		display: "Frogs",
		color: "9BBE40",
		type: "evil",
		features: "- Exactly one Frog Killing must spawn\n- Factional chat\n- Factional kill",
		goal: "Keep your habitat from being destroyed and destroy those who want to destroy it."
	});

	register_faction(["kingdom_attackers", "kingdomattackers", "kingdom", "attackers", "ka"], "KA", {
		color: "D1D1D1",
		type: "evil",
		features: ["- Factional chat\n- Factional kill if no members have attacking cards\n- All members have Hell-Bent defense. Cards do not count as visits for Hell-Bent damage, and healing HP removes damage, which is processed after it's dealt and may save members from dying, or provides temporary defense of a tier equal to the amount of HP healed if used on a non-member.\n- All members have the following attribute: \n- Bonded: You cannot Duel a teammate unless forced by another player not in faction.\n- Members draw an Attack! (1), a Block! (12), and 3 random cards at the start of the game, and draw an additional random card at the start of each night.\n- Members may play any number of cards each night along with their abilities. Only one member may play attacking cards each night. Cards are unaffected by roleblocks and redirects.", "- Cards are drawn from this document: https://docs.google.com/document/d/1sh6G8P08ELZpy8uPzRb51BVf1t7b2KrcvdVogP_xSKc/edit?usp=drivesdk. Special cards are each 1/5th as likely to be drawn as normal ones, and Duel-won cards cannot be drawn or obtained except for from Duel?!s (44).\n- If a player is attacked by members of this faction multiple times in one night, the attacks become one attack of a tier equal to their combined value with all of those attacks' effects."],
		goal: "Eliminate all Town, Florae, Sentries, City, Army, Mainframe, Everything, Neutral Killings and opposing evil Factions. You may spare all Crew, Neutral Benigns, Chaos and Evils however."
	});

	register_faction(["monkey", "monkeys"], "Monkey", {
		display: "Monkeys",
		color: "B15C23",
		type: "evil",
		features: "- Only one of each suballingment may spawn\n- Factional chat\n- No factional kill\n- Members have two upgrade paths which can be unlocked upon fulfilling some condition, but each member can only choose one path.",
		goal: "Pop all who oppose you."
	});

	register_faction("chess", "Chess", {
		color: "FCF7CA",
		type: "evil",
		features: "- 3194: King will always spawn.\n- Factional chat\n- No factional kill\n- Each living player is a space. Members occupying a space are attacked if and only if the space they're occupying is.\n- If the space a member is occupying is lynched, that member must immediately move to another legal space.\n- If there is no King, but the King didn't die, the highest ranking piece (Queen > Rook > Bishop > Knight > Pawn) will become the King.",
		goal: "Protect the King from checkmate and deliver mate to the enemy."
	});

	register_faction(["linirean", "linireans"], "Linirean", {
		display: "Linireans",
		color: "808080",
		type: "evil",
		features: "- Only one Linirean Legend may spawn\n- Factional chat\n- No factional kill",
		goal: "Claim the kingdom for Linirea!"
	});

	register_faction("twilight", "Twilight", {
		color: "808080",
		type: "evil",
		features: "- 3196: Bella Swan must spawn, along with either 3197: Edward or 3198: Jacob, and one member of the opposite subalignment (Vampire and Werewolf). All subsequent members who spawn alternate subalignments between Vampire and Werewolf.\n- Factional chat\n- No factional kill\n-  If a Twilight Vampire or Werewolf takes no action for two nights in a row, they may become Edward or Jacob respectively if no player with that role is alive.\n- If there are no living Twilight Werewolves, a Vampire Fixation activates and empowers the abilities of Twilight Vampires.\n- If there are no living Twilight Vampires, a Werewolf Fixation activates and empowers the abilities of Twilight Werewolves.\n- All Twilight roles are unique.",
		goal: "Take out all who disturb this terrible romance"
	});

	register_faction(["criminal", "criminals"], "Criminal", {
		display: "Criminals",
		color: "5E5E5E",
		type: "evil",
		features: "- Factional chat\n- Factional kill\n- Roles not named \"Criminal\" are immediately renamed to \"Criminal\" when the game begins.\n- Members' role numbers aren't revealed if their roles would be revealed, learned, or mentioned, except when rolling roles or upon death.",
		goal: "Take down the town through various crimes."
	});

	register_faction(["inquisition", "inquisitor", "inquisitors"], "Inquisition", {
		color: "C52D16",
		type: "evil",
		features: "- At least one Inquisition Killing role must spawn.\n- Factional chat\n- No factional kill unless no Killing members are alive.\n- If a condemned player is lynched, all members may Prosecute the next night. This allows them to either deal an Astral Unstoppable attack, two Basic attacks, or a rampaging Powerful attack. \n- If a member is roleblocked while Prosecuting, they stay home and attack all visitors.",
		goal: "Rid the town of heretics and nonbelievers."
	});

	register_faction(["locust", "locusts"], "Locust", {
		display: "Locusts",
		color: "1EE14C",
		type: "evil",
		features: "- No factional chat\n- No factional kill\n- The member limit is double the normal informed minority member limit.\n- Luka is dead to **us**.",
		goal: "Convert everybody who shall oppose you!"
	});

	register_faction(["storyteller", "storytellers", "story"], "Storyteller", {
		display: "Storytellers",
		color: "E52E33",
		type: "evil",
		features: "- Only one role of each subalignment may spawn or exist at a time.\n- Factional chat\n- Factional kill\n- If any default subalignment is missing, a member may choose to skip their night action in order to change into a random role from that subalignment.\n- Members create a story that, when complete, will be read to the town, and all actions tied to it will happen immediately.",
		goal: "Tell a full story (Featuring an Introduction, Rising Action, Climax, Falling Action, and Conclusion) and kill anyone who does not submit to the Storytellers."
	});

	register_faction(["bounty_hunter", "bounty_hunters", "bountyhunters", "bountyhunter", "bounty", "hunter", "hunters", "bh"], "BountyHunter", {
		display: "Bounty Hunters",
		color: "CD895E",
		type: "evil",
		features: "- Factional chat\n- No Factional kill\n- At the start of the game, they receive X amount of roles, where X is the current players divided by 3. They must kill them all to achieve victory\n- If any of your contracts die, you gain a new contract. If you cannot gain a new contract, you immediately lose.\n- If one of your targets dies due to lynching, the host decides if you complete that contract. ",
		goal: "Complete your contracts."
	});
};
