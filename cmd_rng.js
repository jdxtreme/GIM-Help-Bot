function checkSubCats(UTILS, targets, meta, ind)
{
	let subcat = meta.subCat;

	if(meta.spawnSubCat)
		subcat = meta.spawnSubCat;

	if(!subcat || Object.keys(targets).length === 0)
		return true;

	if(typeof subcat === "string")
		return targets[subcat.toLowerCase()];
	else
	{
		for(let i = 0; i < subcat.length; i++)
			if(targets[subcat[i].toLowerCase()] && (!meta.syncCats || !UTILS.isInt(ind) || ind === i))
				return targets[subcat[i].toLowerCase()];
	}
}

function stringToEventData(str)
{
	let spec = str.toLowerCase();
	let first = spec.substring(0, 1);
	let last = spec.substring(spec.length-1);
	spec = spec.substring((first === "n" || first === "d") ? 1 : 0, (last === "+" || last === "-") ? spec.length-1 : spec.length);

	return {spec, first, last};
}

function fillPhase(phase, spec, last, limit)
{
	phase[spec] = true;

	if(last === "+")
		for(let i = spec+1; i <= limit; i++)
			phase[i] = true;

	if(last === "-")
		for(let i = 1; i <= spec-1; i++)
			phase[i] = true;
}

module.exports = (g) =>
{
	const {PRE, UTILS, add_cmd, roles, events, aliases, factions, GOOD, EVIL, NEUTRAL} = g;

	let i = 0;
	
	function register_cmd(name, param, title, desc, meta, func)
	{
		if(!func)
		{
			func = meta;
			meta = {};
		}

		add_cmd(name, {
			id: "rng" + i,
			cat: "RNG",
			title,
			desc,
			param,
			meta,
			func
		});

		i = i + 1;
	}

	register_cmd(["random", "r"], "<number> | <min> <max>", "Random", "Generate a random number between [1, <number] or between [<min>, <max>].", {minArgs: 1}, (chn, message, e, args) =>
	{
		if(!UTILS.isInt(args[0]) || (args[1] && !UTILS.isInt(args[1])))
		{
			UTILS.msg(chn, "-ERROR: This function cannot accept non-integer values.");
			return;
		}

		let min = Number(args[0]);
		let max = Number(args[1]);

		if(!args[1])
		{
			max = min;
			min = 1;
		}

		UTILS.msg(chn, "Rolled: " + UTILS.randInt(min, max));
	});

	register_cmd(["random_list", "randomlist", "rlist"], "<number>", "Random List", "Generate a randomly ordered list of numbers between 1 and <number>.", {minArgs: 1}, (chn, message, e, args) =>
	{
		if(!UTILS.isInt(args[0]))
		{
			UTILS.msg(chn, "-ERROR: This function cannot accept non-integer values.");
			return;
		}

		let n = Number(args[0]);

		if(n <= 0)
		{
			UTILS.msg(chn, "-ERROR: '<number>' in '" + PRE + "rlist' must be greater than 0");
			return;
		}

		if(n > 100)
		{
			UTILS.msg(chn, "-ERROR: '<number>' in '" + PRE + "rlist' cannot exceed 100");
			return;
		}

		let list = [1];

		for(let i = 1; i < n; i++)
		{
			let ind = Math.floor(Math.random() * (i + 1));
			list.splice(ind, 0, i + 1);
		}

		let out = "";

		for(let i = 0; i < n; i++)
			out += list[i] + "\n";

		if(out === "")
			UTILS.msg(chn, "-ERROR: '<number>' in '" + PRE + "rlist' must be a number.");
		else
			UTILS.msg(chn, out);
	});
	
	register_cmd(["random_choice", "randomchoice", "rchoice", "choice"], "<option 1> <option 2> [options]...", "Random Choice", "Choose 1 option out of the provided list at random.", {minArgs: 2}, (chn, message, e, args) =>
	{
		UTILS.msg(chn, args[UTILS.randInt(args.length)]);
	});
	
	register_cmd(["random_hex", "randomhex", "rhex", "hex"], "", "Random Hex", "Generate and view a random color made of 6 hexadecimal characters.", (chn, message, e, args) =>
	{
		let color = UTILS.rHex(6);
		e.setAuthor({name: "#" + color});
		e.setColor(color);

		UTILS.embed(chn, e);
	});
	
	register_cmd(["random_faction", "randomfaction", "rfaction", "faction"], "[Good|Evil|Neutral]", "Random Faction", "Generate a random Faction. You may specify if you want a Good, Evil, or Neutral faction.\n\nNote that this cannot generate the actual Neutral alignment.", (chn, message, e, args) =>
	{
		let spec = args[0];
		let list = [];

		if(spec)
		{
			spec = spec.toLowerCase();

			switch(spec)
			{
				case "good":
					list = GOOD;
					break;

				case "evil":
					list = EVIL;
					break;

				case "neutral":
					list = [];

					for(let n = 0; n < NEUTRAL.length; n++)
						if(NEUTRAL[n] !== "Neutral")
							list[list.length] = NEUTRAL[n];

					break;

				default:
					UTILS.msg(chn, "-Unknown faction type: \"" + args[0] + "\"");
					return;
			}
		}
		else
		{
			let facs = Object.keys(factions);

			for(let n = 0; n < facs.length; n++)
				if(facs[n] !== "Neutral")
					list[list.length] = facs[n];
		}

		let fac = UTILS.randElem(list);

		factions[fac].func(chn, message, e, args);
	});

	g.randomRole = (chn, message, e, args, nosend) =>
	{
		let role = null;
		let incany = UTILS.randInt(10) == 0;
		let specs = null;
		let exSpecs = null;
		let accept = false;
		let rollable = [];

		if(args.length > 0)
		{
			for(let i = 0; i < args.length; i++)
			{
				let splits = args[i].toLowerCase().split(':');

				switch(args[i].toLowerCase())
				{
					case "tk": splits = ["town", "killing"]; break;
					case "tp": splits = ["town", "protective"]; break;
					case "ti": splits = ["town", "investigative"]; break;
					case "ts": splits = ["town", "support"]; break;
					case "tpo": splits = ["town", "power"]; break;
					case "nk": splits = ["neutral", "killing"]; break;
					case "nc": splits = ["neutral", "chaos"]; break;
					case "ne": splits = ["neutral", "evil"]; break;
					case "nb": splits = ["neutral", "benign"]; break;
					case "mh": splits = ["mafia", "head"]; break;
					case "mk": splits = ["mafia", "killing"]; break;
					case "ms": splits = ["mafia", "support"]; break;
					case "md": splits = ["mafia", "deception"]; break;
					case "me": splits = ["mafia", "espionage"]; break;
					case "ce": splits = ["coven", "evil"]; break;
				}

				let cat = splits[0];
				let exc = false;

				if(UTILS.isNeg(cat))
				{
					cat = cat.substring(1);
					exc = true;
				}

				if(aliases[cat.toLowerCase()])
					cat = aliases[cat.toLowerCase()].toLowerCase();

				if(exc)
				{
					if(!exSpecs)
						exSpecs = {};

					if(!exSpecs[cat])
						exSpecs[cat] = {};

					for(let n = 1; n < splits.length; n++)
					{
						let sub = splits[n];

						if(UTILS.isNeg(sub))
							sub = sub.substring(1);

						exSpecs[cat][sub] = true;
					}
				}
				else
				{
					if(!specs)
						specs = {};

					if(!specs[cat])
						specs[cat] = {};

					for(let n = 1; n < splits.length; n++)
					{
						let sub = splits[n];
						let exs = false;

						if(UTILS.isNeg(sub))
						{
							sub = sub.substring(1);
							exs = true;
						}

						if(exs)
						{
							if(!exSpecs)
								exSpecs = {};

							if(!exSpecs[cat])
								exSpecs[cat] = {};

							exSpecs[cat][sub] = true;
						}
						else
							specs[cat][sub] = true;
					}
				}
			}
		}

		for(let r in roles)
		{
			let cmd = roles[r].cmd;
			let catMatch = true;

			let cats = [cmd.cat];
			if(cmd.meta.spawnCat) cats = ((typeof cmd.meta.spawnCat === "string") && [cmd.meta.spawnCat] || cmd.meta.spawnCat);

			if(cmd.meta.cannotRoll || (cmd.cat === "Any" && !incany))
				continue;

			if(specs || exSpecs)
			{
				catMatch = false;

				if(cmd.cat === "Any" && (!cmd.meta.spawnCat || UTILS.containsString(cmd.meta.spawnCat, "Any")))
				{
					if(specs)
					{
						for(let cat in specs)
						{
							if((!cmd.meta.anyExCat || !UTILS.containsString(cmd.meta.anyExCat, cat)) && checkSubCats(UTILS, specs[cat.toLowerCase()], cmd.meta))
							{
								catMatch = true;
								break;
							}
						}
					}
					else
						catMatch = true;

					if(exSpecs)
					{
						for(let cat in exSpecs)
						{
							if(checkSubCats(UTILS, exSpecs[cat.toLowerCase()], cmd.meta))
							{
								catMatch = false;
								break;
							}
						}
					}
				}
				else
				{
					if(specs)
					{
						for(let t = 0; t < cats.length; t++)
						{
							if(specs[cats[t].toLowerCase()] && checkSubCats(UTILS, specs[cats[t].toLowerCase()], cmd.meta, t))
							{
								catMatch = true;
								break;
							}
						}
					}
					else
						catMatch = true;

					if(exSpecs)
					{
						for(let t = 0; t < cats.length; t++)
						{
							if(exSpecs[cats[t].toLowerCase()] && checkSubCats(UTILS, exSpecs[cats[t].toLowerCase()], cmd.meta, t))
							{
								catMatch = false;
								break;
							}
						}
					}
				}
			}

			if(catMatch)
			{
				rollable[rollable.length] = roles[r];

				if(!accept && cmd.cat !== "Any")
					accept = true;
			}
		}

		if(accept)
			role = UTILS.randChances(rollable);

		if(role && role.cmd)
		{
			role.cmd.func(chn, message, e, [], nosend);
			return role;
		}
		else
			UTILS.msg(chn, "-ERROR: No roles could be rolled.");
	};

	register_cmd(["random_role", "randomrole", "rrole", "role"], "[category[:subcategory]...]...", "Random Role", "Roll for a random role out of the list of those that are registered in the Bot. A full role card will be provided based on the results.\n\nYou may optionally provide a list of categories as parameters. Only a role that can fit at least one category will be provided.\n\nYou may also specify a subcategory for each category. This is done using the format of `category:subcategory`. The same category can have more than one listed subcategory, e.g. `category:apple:bannana:cyanide`\n\nPut a - or a ! before specified categories or subcategories to instead exclude them.\n\nSee =categories for a list of categories and subcategories.\n\nExact spelling will be required when specifying categories and subcategories, but they will not be case-sensitive.", g.randomRole);

	register_cmd(["random_event", "randomevent", "revent", "event"], "[[n|d][##][+|-]]...", "Random Event", "Roll for a random event out of the list of those that are registered in the Bot. A full event card will be provided based on the results.\n\nYou may optionally provide a list of phases as parameters. Only a role that can fit at least one phase will be provided.\n\nYou may put a `d` or `n` before any phase number to specify it as applying to only Day or Night phases, respectively.\n\nPut a - or a + after a phase to include events from before or after the specified point, respectively.\n\nExamples: `D1 D2 D3`, `D2-`, `N3+`", (chn, message, e, args, nosend) =>
	{
		let event = null;
		let days = null;
		let nights = null;
		let rollable = [];
		let sanity_limit = 20;

		if(args.length > 0)
		{
			for(let i = 0; i < args.length; i++)
			{
				let {spec, first, last} = stringToEventData(args[i]);

				if(!UTILS.isInt(spec))
				{
					UTILS.msg(chn, "-ERROR: Provided parameter \"" + args[i] + "\" does not provide a valid phase number.");
					return
				}

				spec = parseInt(spec);

				if(spec > sanity_limit)
				{
					UTILS.msg(chn, "-ERROR: There's no way a game is lasting even remotely as long as that, don't even try.");
					return
				}

				if(first !== "n")
				{
					days = days || {};
					fillPhase(days, spec, last, sanity_limit)		
				}

				if(first !== "d")
				{
					nights = nights || {};
					fillPhase(nights, spec, last, sanity_limit)	
				}
			}
		}

		for(let ev in events)
		{
			let cmd = events[ev].cmd;
			let phaseMatch = true;

			if(cmd.meta.cannotRoll)
				continue;

			if(cmd.meta.eventData && (days || nights))
			{
				let specs = cmd.meta.eventData.split(' ');
				phaseMatch = false;

				for(let i = 0; i < specs.length; i++)
				{
					let {spec, first, last} = stringToEventData(specs[i]);

					if(!UTILS.isInt(spec))
					{
						UTILS.msg(chn, "-ERROR: Command \"" + cmd.Title + "\" has invalid phase specification \"" + specs[i] + "\". This is a bug.");
						return
					}

					spec = parseInt(spec);
					let metaPhases = {};
					fillPhase(metaPhases, spec, last, Math.max(spec, sanity_limit));

					for(let p in metaPhases)
					{
						if((first !== 'd' && nights && nights[p]) || (first !== 'n' && days && days[p]))
						{
							phaseMatch = true;
							break;
						}
					}

					if(phaseMatch)
						break;
				}
			}

			if(phaseMatch)
				rollable[rollable.length] = events[ev];
		}

		if(rollable.length > 0)
			event = UTILS.randChances(rollable);

		if(event && event.cmd)
		{
			event.cmd.func(chn, msg, e, [], nosend);
			return event;
		}
		else
			UTILS.msg(chn, "-ERROR: No roles could be rolled.");
	});
};
