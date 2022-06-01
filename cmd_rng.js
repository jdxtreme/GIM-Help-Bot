//[min, max] or [0, max)
function randInt(min, max)
{
	if(!max)
	{
		max = min - 1;
		min = 0;
	}

	return Math.floor(Math.random() * (max - min + 1)) + min;
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

	register_cmd("random", "<number> | <min> <max>", "Random", "Generate a random number between 1 and <number> or between <min> and <max>.", (chn, message, e, args) =>
	{
		if(!args[0])
		{
			msg(chn, "-USAGE: " + PRE + "random <number> | <min> <max>");
			return;
		}

		let max = Number(args[0]);
		let min = Number(args[1]);

		msg(chn, randInt(min, max));
	});

	register_cmd(["random_list", "randomlist", "rlist"], "<number>", "Random List", "Generate a randomly ordered list of numbers between 1 and <number>.", (chn, message, e, args) =>
	{
		if(!args[0])
		{
			msg(chn, "-USAGE: " + PRE + "rlist <number>");
			return;
		}

		let n = Number(args[0]);

		if(n <= 0)
		{
			msg(chn, "-ERROR: '<number>' in '" + PRE + "rlist' must be greater than 0");
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
	
	register_cmd(["random_list", "randomlist", "rchoice", "choice"], "<option 1> <option 2> [options]...", "Random Choice", "Choose 1 option out of the provided list at random.", (chn, message, e, args) =>
	{
		if(args.length < 2)
		{
			msg(chn, "-ERROR: " + PRE + "rchoice must be provided with at least two options to choose from.");
			return;
		}

		msg(chn, args[randInt(args.length)]);
	});

	register_cmd(["random_role", "randomrole", "rrole", "role"], "[Faction]", "Random Role", "Roll for a random role out of the list of those that are registered in the Bot. A Faction may both be specified in order to narrow down possible rolls. A full role card will be provided based on the results.\n\nSee =categories for a list of Factions.\n\nExact spelling will be required when specifying Factions, but they will not be case-sensitive.", (chn, message, e, args) =>
	{
		let cat = args[0];
		let role = roles[Math.random() * roles.length];
		let incany = randInt(5) == 0;

		if(cat)
		{
			let rollable = [];

			for(let r in roles)
			{
				let cmd = roles[r];

				if(cmd.cat.toLowerCase() === cat.toLowerCase() || (incany && cmd.cat.toLowerCase() === "any"))
					rollable[rollable.length] = cmd;
			}

			role = rollable[randInt(rollable.length)];
		}
		else
			role = roles[randInt(roles.length)];

		if(role)
			role.func(chn, msg, e);
		else
			msg(chn, "-ERROR: No roles could be rolled.");
	});
};
