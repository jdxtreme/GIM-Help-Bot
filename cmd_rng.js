//<table>, <string>
function containsString(t, s)
{
	if(!t || !s)
		return false;

	for(let i in t)
		if(t[i].toLowerCase() === s.toLowerCase())
			return true;

	return false;
}

//[<min>, <max>] or [0, <max>)
function randInt(min, max)
{
	if(!max)
	{
		max = min - 1;
		min = 0;
	}

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//<Object: {rate}>
function randChances(t)
{
	let sum = 0;

	for(let i in t)
		sum = sum + Math.round(100 * t[i].rate);

	let choice = randInt(sum);
	sum = 0;

	for(let i in t)
	{
		sum = sum + Math.round(100 * t[i].rate);

		if(sum > choice)
			return t[i];
	}

	console.log("Warning: randChances returned null! Sum: " + sum + ", Choice: " + choice);
}

function isInt(v)
{
	return parseInt(v, 10).toString() === v;
}

module.exports = (g) =>
{
	const {PRE, commands, categories, roles, msg} = g;

	categories["RNG"] = true;
	let i = 0;
	
	function register_cmd(name, param, title, desc, func)
	{
		let cmd = 
		{
			id: "rng" + i,
			cat: "RNG",
			title,
			desc,
			param,
			func
		};

		i = i + 1;

		if(typeof name === "string")
			commands[name] = cmd;
		else
			for(let i in name)
				commands[name[i]] = cmd;
	}

	register_cmd(["random", "r"], "<number> | <min> <max>", "Random", "Generate a random number between 1 and <number> or between <min> and <max>.", (chn, message, e, args) =>
	{
		if(!args[0])
		{
			msg(chn, "-USAGE: " + PRE + "random <number> | <min> <max>");
			return;
		}

		if(!isInt(args[0]) || (args[1] && !isInt(args[1])))
		{
			msg(chn, "-ERROR: This function cannot accept non-integer values.");
			return;
		}

		let min = Number(args[0]);
		let max = Number(args[1]);

		msg(chn, randInt(min, max).toString());
	});

	register_cmd(["random_list", "randomlist", "rlist"], "<number>", "Random List", "Generate a randomly ordered list of numbers between 1 and <number>.", (chn, message, e, args) =>
	{
		if(!args[0])
		{
			msg(chn, "-USAGE: " + PRE + "rlist <number>");
			return;
		}

		if(!isInt(args[0]))
		{
			msg(chn, "-ERROR: This function cannot accept non-integer values.");
			return;
		}

		let n = Number(args[0]);

		if(n <= 0)
		{
			msg(chn, "-ERROR: '<number>' in '" + PRE + "rlist' must be greater than 0");
			return;
		}

		if(n > 100)
		{
			msg(chn, "-ERROR: '<number>' in '" + PRE + "rlist' cannot exceed 100");
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
			msg(chn, "-ERROR: '<number>' in '" + PRE + "rlist' must be a number.");
		else
			msg(chn, out);
	});
	
	register_cmd(["random_choice", "randomchoice", "rchoice", "choice"], "<option 1> <option 2> [options]...", "Random Choice", "Choose 1 option out of the provided list at random.", (chn, message, e, args) =>
	{
		if(args.length < 2)
		{
			msg(chn, "-ERROR: " + PRE + "rchoice must be provided with at least two options to choose from.");
			return;
		}

		msg(chn, args[randInt(args.length)]);
	});

	register_cmd(["random_role", "randomrole", "rrole", "role"], "[Faction] [Subalignment(s)...]", "Random Role", "Roll for a random role out of the list of those that are registered in the Bot. A Faction and Subalignment may both be specified in order to narrow down possible rolls. A full role card will be provided based on the results.\n\nSee =categories for a list of Factions.\n\nExact spelling will be required when specifying Factions and Subalignments, but they will not be case-sensitive.", (chn, message, e, args) =>
	{
		let cat1 = args[0];
		let subCat = [];
		let role = null;
		let incany = randInt(10) == 0;

		for(let a = 1; a < args.length; a++)
			subCat[a-1] = args[a];

		if(cat1)
		{
			let accept = false;
			let rollable = [];

			for(let r in roles)
			{
				let cmd = roles[r].cmd;
				let cat2 = [cmd.cat];
				let submatch = subCat.length === 0 || containsString(subCat, cmd.meta.subCat);

				if(cmd.meta.spawnCat)
					cat2 = ((typeof cmd.meta.spawnCat === "string") && [cmd.meta.spawnCat] || cmd.meta.spawnCat);

				if(cmd.cat === "Any" && cmd.meta.anyExCat && containsString(cmd.meta.anyExCat, cat1))
					continue;

				if((containsString(cat2, cat1) && submatch) || (incany && containsString(cat2, "any")))
					rollable[rollable.length] = {cmd, rate: cmd.meta.spawnRate || 1};

				if(!accept && containsString(cat2, cat1))
					accept = true;
			}

			if(accept)
				role = randChances(rollable);
		}
		else
			role = randChances(roles);

		if(role && role.cmd)
			role.cmd.func(chn, msg, e);
		else
			msg(chn, "-ERROR: No roles could be rolled.");
	});
};
