let posting = {};

module.exports = (g) =>
{
	const {PRE, UTILS, MessageEmbed, add_cmd, roles, factions} = g;

	let i = 0;
	
	function register_cmd(name, param, title, desc, func)
	{
		add_cmd(name, {
			id: "a" + i,
			cat: "Archive",
			title,
			desc,
			param,
			meta: {adminOnly: true},
			func
		});

		i = i + 1;
	}

	register_cmd(["repost_roles", "repostroles"], "<acknowledgement>", "Repost Roles", "Repost all imported role commands into a single channel", (chn, message, e, args) =>
	{
		if(!args[0])
		{
			UTILS.msg(chn, "-Are you sure? This will cause a lot of spam in this channel if misused.\n-USAGE: " + PRE + "repost_roles <acknowledgement>");
			return;
		}

		if(posting[chn.guild.id])
			clearInterval(posting[chn.guild.id]);

		let i = 0;
		posting[chn.guild.id] = setInterval(() =>
		{
			if(!chn || !chn.guild.channels.cache.get(chn.id))
			{
				clearInterval(posting[chn.guild.id]);
				delete posting[chn.guild.id];
				return;
			}

			if(roles[i].cmd.cat !== "Android")
				roles[i].cmd.func(chn, message, new MessageEmbed(), []);

			i++;

			if(i >= roles.length)
			{
				clearInterval(posting[chn.guild.id]);
				delete posting[chn.guild.id];
			}
		}, 2000);
	});

	register_cmd("cancel", "", "Cancel", "Cancel the current repost", (chn) =>
	{
		if(!posting[chn.guild.id])
		{
			UTILS.msg(chn, "-The bot is already not reposting anything here.");
			return;
		}

		clearInterval(posting[chn.guild.id]);
		delete posting[chn.guild.id];

		UTILS.msg(chn, "+Stopped reposting.");
	});
};
