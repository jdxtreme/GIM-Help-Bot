const HOME = "970041597590929519";

function commaCheck(UTILS, t, s)
{
	if(t)
		return UTILS.containsString(t.split(','), s);
	else
		return false;
}

function getPlayerByID(players, id)
{
	for(let i = 0; i < players.length; i++)
		if(players[i].id === id)
			return players[i]
}

function getPlayerByName(players, name)
{
	name = name.toLowerCase();

	for(let a = 0; a < players.length; a++)
		for(let b = 0; b < players[a].nicknames.length; b++)
			if(players[a].nicknames[b] === name)
				return players[a]
}

function firstname(p)
{
	let name = p.nicknames[0] || "unknown (bug)";

	return name.substring(0, 1).toUpperCase() + name.substring(1);
}

module.exports = (g) =>
{
	const {PRE, UTILS, add_cmd, msg, overwrite, PLAYER_DATA, is_day, toggle_day} = g;
	let i = 0;
	
	function register_cmd(name, param, title, desc, func, admin_only)
	{
		add_cmd(name, {
			id: "g" + i,
			cat: "Game",
			title,
			desc,
			param,
			meta: {},
			func: (chn, message, e, args) =>
			{
				if(!admin_only || message.member.permissions.has("ADMINISTRATOR") && message.guildId === HOME)
					func(chn, message, e, args);
				else
					msg(chn, "-You do not have elevated permissions for this bot.");
			}
		});

		i = i + 1;
	}

	register_cmd(["add_player", "addplayer"], "<Player ID> <#Player Channel> [Nickname(s)...]", "Add Player", "Add a player into the bot's local storage, enabling use with Whispers.", (chn, message, e, args) =>
	{
		if(!args[0] || !args[1])
		{
			msg(chn, "-USAGE: " + PRE + "register <Player ID> <#Player Channel> [Nickname(s)...]");
			return;
		}

		let user_promise = message.guild.members.fetch(args[0]).catch(console.error);
		let player_channel = message.guild.channels.cache.get(args[1].substring(2, args[1].length-1));

		user_promise.then((user) =>
		{
			if(!user || !player_channel)
			{
				if(!user)
					msg(chn, "-Invalid member ID: " + args[0]);

				if(!player_channel)
					msg(chn, "-Invalid player channel: " + args[1]);

				return;
			}

			for(let i = 0; i < PLAYER_DATA.length; i++)
			{
				if(PLAYER_DATA[i].channel === player_channel.id)
				{
					msg(chn, "-Cannot register duplicate player.");
					return;
				}
			}

			let num = PLAYER_DATA.length;

			PLAYER_DATA[num] =
			{
				id: user.id,
				num: num+1,
				channel: player_channel.id,
				nicknames: [],
				alive: true,
				tags: {}
			};

			for(let i = 2; i < args.length; i++)
				PLAYER_DATA[num].nicknames[i-2] = args[i].toLowerCase();

			overwrite();

			msg(chn, "+Player " + (num+1) + " registered successfully!");
		});
	}, true);

	register_cmd(["view_players", "viewplayers", "players"], "", "View Players", "Display the current data of registered players.\n\n**Warning, this can reveal meta info if used in public channels.**", (chn, message, e, args) =>
	{
		if(PLAYER_DATA.length === 0)
		{
			msg(chn, "-There is no player data to display.");
			return;
		}

		e.setAuthor({name: "PLAYER_DATA"});
		e.setColor("#0000FF");

		for(let i = 0; i < PLAYER_DATA.length; i++)
		{
			let plr = PLAYER_DATA[i];
			let nicks = "Nicks: ";
			let tags = "";

			for(let n = 0; n < plr.nicknames.length; n++)
			{
				nicks = nicks + plr.nicknames[n];

				if(n < plr.nicknames.length-1)
					nicks = nicks + ", ";
			}

			if(plr.tags && Object.keys(plr.tags).length > 0)
			{
				tags = "\nTags:";

				for(let tag in plr.tags)
					tags = tags + "\n\"" + tag + "\": \"" + plr.tags[tag] + "\"";
			}

			e.addField("Player " + (i+1), "Name: <@" + plr.id + ">\nChannel: <#" + plr.channel + ">\n" + nicks + "\nAlive: " + (plr.alive ? "true" : "false") + tags, true);
		}

		chn.send({embeds: [e]});
	}, true);

	register_cmd("toggle_day", "", "Toggle Day", "Toggle between Night and Day, determining if whispers are allowed or not.", (chn, message, e, args) =>
	{
		toggle_day();

		if(is_day())
			msg(chn, "+It is now Day.");
		else
			msg(chn, "-It is now Night.");

		overwrite();
	}, true);

	register_cmd("toggle_alive", "<Player Name or Number>", "Toggle alive", "Toggle between a player's status as Alive or Dead, determining if whispers are allowed or not.", (chn, message, e, args) =>
	{
		if(!args[0])
		{
			msg(chn, "-Usage: " + PRE + "toggle_alive <Player Name or Number>");
			return;
		}

		let player = UTILS.isInt(args[0])
			&& PLAYER_DATA[parseInt(args[0])-1]
			|| getPlayerByName(PLAYER_DATA, args[0]);

		if(!player)
		{
			msg(chn, "-ERROR: Player \"" + args[0] + "\" is not valid.");
			return;
		}

		player.alive = !player.alive;

		if(player.alive)
			msg(chn, "+They live.");
		else
			msg(chn, "-They die.");

		overwrite();
	}, true);

	register_cmd("whisper", "<Player Name or Number> <Message>", "Whisper", "Whisper to a player of your choice. You may whisper them by their name or Player Number.\n\nThis command can only be used within your own player channel.", (chn, message, e, args) =>
	{
		const SENT = "+Sent!";

		if(!args[0] || !args[1])
		{
			msg(chn, "-Usage: " + PRE + "whisper <Player Name or Number> <Message>");
			return;
		}

		let sender = getPlayerByID(PLAYER_DATA, message.member.id);

		if(!sender)
		{
			msg(chn, "-ERROR: You are not a registered player!");
			return;
		}

		if(chn.id !== sender.channel)
		{
			msg(chn, "-ERROR: You may only send whispers from within your own Player Channel.");
			return;
		}

		if(!sender.alive)
		{
			msg(chn, "-ERROR: You cannot whisper while dead.");
			return;
		}

		let recipient = UTILS.isInt(args[0])
			&& PLAYER_DATA[parseInt(args[0])-1]
			|| getPlayerByName(PLAYER_DATA, args[0]);

		let redirected = {};
		if(recipient)
			redirected[recipient.num] = true;

		while(recipient && recipient.tags.redirect && !redirected[recipient.tags.redirect])
		{
			recipient = PLAYER_DATA[parseInt(recipient.tags.redirect)-1];
			redirected[recipient.num] = true;
		}

		if(!recipient)
		{
			msg(chn, "-ERROR: Player \"" + args[0] + "\" is not valid.");
			return;
		}

		if(!recipient.alive)
		{
			msg(chn, "-ERROR: Player \"" + args[0] + "\" is dead.");
			return;
		}

		if(sender === recipient)
		{
			msg(chn, "-ERROR: You cannot whisper to yourself.");
			return;
		}

		if(commaCheck(UTILS, sender.tags.block, recipient.num))
		{
			msg(chn, "-ERROR: You cannot whisper to that person.");
			return;
		}

		if(!is_day() || sender.tags.mute)
		{
			msg(chn, "-ERROR: You cannot use whispers right now.");
			return;
		}

		if(sender.tags.silent)
		{
			msg(chn, SENT);
			return;
		}

		let rchannel = message.guild.channels.cache.get(recipient.channel);

		if(!rchannel)
		{
			msg(chn, "-ERROR: Recipient's channel is invalid. This is probably a bug.");
			return;
		}

		let whisper = args[1];

		for(let i = 2; i < args.length; i++)
			whisper = whisper + ' ' + args[i];

		if(!recipient.tags.deaf)
			msg(rchannel, "Whisper from " + firstname(sender) + ": " + whisper, true);
		msg(chn, SENT);

		if(sender.tags.announce || sender.tags.relay)
		{
			if(sender.tags.announce === sender.tags.relay)
			{
				let relay = message.guild.channels.cache.get(sender.tags.relay.substring(2, sender.tags.relay.length-1))

				if(relay)
					msg(relay, firstname(sender) + " whispered to " + firstname(recipient) + ": " + whisper, true);
				else
					msg(chn, "-ERROR: Invalid Relay Channel.");
			}
			else
			{
				if(sender.tags.announce)
				{
					let announce = message.guild.channels.cache.get(sender.tags.announce.substring(2, sender.tags.announce.length-1))

				if(announce)
					msg(announce, firstname(sender) + " whispered to " + firstname(recipient) + ".", true);
				else
					msg(chn, "-ERROR: Invalid Announce Channel.");
				}
				else
				{
					let relay = message.guild.channels.cache.get(sender.tags.relay.substring(2, sender.tags.relay.length-1))

					if(relay)
						msg(relay, "Someone whispered to someone: " + whisper, true);
					else
						msg(chn, "-ERROR: Invalid Announced Relay Channel.");
				}
			}
		}

		for(let i = 0; i < PLAYER_DATA.length; i++)
		{
			let plr = PLAYER_DATA[i];

			if(plr.tags && plr !== sender && plr !== recipient && 
					(plr.tags.overhear_all || 
					commaCheck(UTILS, plr.tags.overhear_target, sender.num) || 
					commaCheck(UTILS, plr.tags.overhear_target, recipient.num)))
			{
				let pchannel = message.guild.channels.cache.get(plr.channel);

				msg(pchannel, "Whisper from " + firstname(sender) + " to " + firstname(recipient) + ": " + whisper, true);
			}
		}
	});

	register_cmd("tag", "<Player Name or Number or *> <Key> [Value]", "Tag", "Give a player a Tag, a type of variable related to gameplay.\n\nUse * to set a tag for every single player instead.\n\nTo check what a Tag currently is, use this command without providing a Value.\n\nTo remove a Tag, use this command with the Value set to \"-\" (without the quotes).\n\nTo list usable tags, use the =tags command.", (chn, message, e, args) =>
	{
		if(!args[0] || !args[1])
		{
			msg(chn, "-Usage: " + PRE + "tag <Player Name or Number or *> <Key> [Value]");
			return;
		}

		let players = (args[0] === "*" ? Object.keys(PLAYER_DATA) : [parseInt(args[0])-1]);

		for(let i = 0; i < players.length; i++)
		{
			let player = UTILS.isInt(players[i])
				&& PLAYER_DATA[players[i]]
				|| getPlayerByName(PLAYER_DATA, players[i]);

			if(!player)
			{
				msg(chn, "-ERROR: Player \"" + players[i] + "\" is not valid.");
				continue;
			}

			if(!player.tags)
				player.tags = {};

			if(args[2] === "-")
			{
				delete player.tags[args[1]];
				msg(chn, "+Tag \"" + args[1] + "\" deleted.");
			}
			else if(args[2])
			{
				player.tags[args[1]] = args[2];
				msg(chn, "+Tag \"" + args[1] + "\" set to \"" + args[2] + "\".");
			}
			else
				msg(chn, "+Tag \"" + args[1] + "\" is currently set to \"" + (player.tags[args[1]] || "null") + "\".");
		}

		overwrite();
	}, true);

	register_cmd("tags", "", "Tags", "Provide a list of all known tags.", (chn, message, e, args) =>
	{
		e.setAuthor({name: "List of Tags"});
		e.setDescription("Reminder: To remove a tag, or set it to False, use `=tag <player> <tag> -`");

		e.addField("announce <#channel>", "Target's sent whispers will be announced to the provided channel, which only includes the sender and recipient, NOT the message itself.");
		e.addField("block <PN1,PN2,PN3,etc...>", "Tagged player is blocked from sending whispers to the listed person or people, but may still recieve whispers from those players. Use only commas to separate Player Numbers if the target player is unable to whisper to multiple specific people, i.e. `5,8,12`.");
		e.addField("deaf <true>", "Tagged player will not receive direct whispers, though overhearing is unaffected. Attempts to whisper to them will still appear to succeed.");
		e.addField("mute <true>", "Tagged player will be unable to send whispers. They will be notified if they try.");
		e.addField("overhear_all <true>", "Tagged player overhears all whispers");
		e.addField("overhear_target <PN1,PN2,PN3,etc...>", "Tagged player overhears all whispers sent to and from the player(s) with each number. Use only commas to separate Player Numbers if the target player is unable to whisper to multiple specific people, i.e. `5,8,12`.");
		e.addField("silent <true>", "Tagged player will be unable to send whispers. They will NOT know if they try; they will instead be sent a false confirmation message.");
		e.addField("redirect <Player No.>", "Whispers sent to the tagged player will instead be sent to the player with that Number. Overhearing and announcements will reveal the true recipient of the whispers. To prevent loops, a whisper can never be redirected to someone that it was already redirected away from.");
		e.addField("relay <#channel>", "Target's sent whispers will be relayed to the provided channel, which ONLY includes the full message, NOT the sender or recipient.");

		chn.send({embeds: [e]});
	});
};
