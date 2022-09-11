function commaCheck(UTILS, t, s)
{
	if(t)
		return UTILS.containsString(t.split(','), s);
	else
		return false;
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
	const {PRE, UTILS, add_cmd, msg, overwrite, SERVER_DATA, is_day, toggle_day, relay} = g;
	let i = 0;
	
	function register_cmd(name, param, title, desc, meta, func)
	{
		if(!func)
		{
			func = meta;
			meta = {};
		}

		add_cmd(name, {
			id: "g" + i,
			cat: "Game",
			title,
			desc,
			param,
			meta,
			func: (chn, message, e, args) =>
			{
				let id = message.guild.id;

				if(!SERVER_DATA[id])
					SERVER_DATA[id] = {players: [], relay: []};

				func(chn, message, e, args);
			}
		});

		i = i + 1;
	}

	register_cmd(["add_player", "addplayer"], "<Player ID> <#Player Channel> [Nickname(s)...]", "Add Player", "Add a player into the bot's local storage, enabling use with Whispers.", {admin_only: true}, (chn, message, e, args) =>
	{
		if(!args[0] || !args[1])
		{
			msg(chn, "-USAGE: " + PRE + "add_player <Player ID> <#Player Channel> [Nickname(s)...]");
			return;
		}

		let pdata = SERVER_DATA[message.guild.id].players;
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

			for(let i = 0; i < pdata.length; i++)
			{
				if(pdata[i].channel === player_channel.id)
				{
					msg(chn, "-Cannot register duplicate player.");
					return;
				}
			}

			let num = pdata.length;

			pdata[num] =
			{
				id: user.id,
				num: num+1,
				channel: player_channel.id,
				nicknames: [],
				alive: true,
				tags: {}
			};

			for(let i = 2; i < args.length; i++)
				pdata[num].nicknames[i-2] = args[i].toLowerCase();

			overwrite();

			msg(chn, "+Player " + (num+1) + " registered successfully!");
		});
	});

	register_cmd(["del_player", "delplayer"], "<Player Name or Number or *>", "Delete Player", "Remove a player from the bot's local storage.", {admin_only: true}, (chn, message, e, args) =>
	{
		if(!args[0])
		{
			msg(chn, "-USAGE: " + PRE + "del_player <Player Name or Number or *>");
			return;
		}

		let pdata = SERVER_DATA[message.guild.id].players;
		let players = (args[0] === "*" ? Object.keys(pdata) : [args[0]]);

		if(UTILS.isInt(args[0]))
			players[0] = parseInt(args[0])-1;

		if(players.length === 0)
		{
			msg(chn, "-ERROR: Player data is empty.");
			return;
		}

		for(let i = players.length-1; i >= 0; i--)
		{
			let player = UTILS.isInt(players[i])
				? pdata[players[i]]
				: getPlayerByName(pdata, players[i]);

			if(!player)
			{
				msg(chn, "-ERROR: Player \"" + (args[0] === "*" ? players[i] : args[0]) + "\" is not valid.");
				continue;
			}

			let delnum = player.num;

			pdata.splice(delnum-1, 1);

			for(let n = delnum-1; n < pdata.length; n++)
				pdata[n].num = n+1;

			msg(chn, "+Deleted player " + delnum);
			overwrite();
		}
	});

	register_cmd(["view_players", "viewplayers", "players"], "", "View Players", "Display the current data of registered players.\n\n**Warning, this can reveal meta info if used in public channels.**", {admin_only: true}, (chn, message, e, args) =>
	{
		let pdata = SERVER_DATA[message.guild.id].players;

		if(pdata.length === 0)
		{
			msg(chn, "-There is no player data to display.");
			return;
		}

		e.setAuthor({name: "Player Data (" + message.guild.name + ")"});
		e.setColor("#0000FF");

		for(let i = 0; i < pdata.length; i++)
		{
			let plr = pdata[i];
			let nicks = "Nicks: ";
			let tags = "";

			if(!plr)
			{
				console.log("No player for number: " + i);
				continue;
			}

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
	});

	register_cmd(["toggle_day", "toggleday"], "", "Toggle Day", "Toggle between Night and Day, determining if whispers are allowed or not.", {admin_only: true}, (chn, message, e, args) =>
	{
		toggle_day(message.guild.id);

		if(is_day(message.guild.id))
			msg(chn, "+It is now Day.");
		else
			msg(chn, "-It is now Night.");

		overwrite();
	});

	register_cmd(["is_day", "isday"], "", "Is Day", "Check if it's current Day or not in the bot.", (chn, message, e, args) =>
	{
		if(is_day(message.guild.id))
			msg(chn, "+It is currently Day.");
		else
			msg(chn, "-It is currently Night.");
	});

	register_cmd(["toggle_alive", "togglealive"], "<Player Name or Number>", "Toggle alive", "Toggle between a player's status as Alive or Dead, determining if whispers are allowed or not.", {admin_only: true}, (chn, message, e, args) =>
	{
		if(!args[0])
		{
			msg(chn, "-Usage: " + PRE + "toggle_alive <Player Name or Number>");
			return;
		}

		let pdata = SERVER_DATA[message.guild.id].players;

		let player = UTILS.isInt(args[0])
			? pdata[parseInt(args[0])-1]
			: getPlayerByName(pdata, args[0]);

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
	});

	register_cmd("whisper", "<Player Name or Number> <Message>", "Whisper", "Whisper to a player of your choice. You may whisper them by their name or Player Number.\n\nThis command can only be used within your own player channel.", (chn, message, e, args) =>
	{
		const SENT = "+Sent!";
		let pdata = SERVER_DATA[message.guild.id].players;

		if(!args[0] || !args[1])
		{
			msg(chn, "-Usage: " + PRE + "whisper <Player Name or Number> <Message>");
			return;
		}

		let sender = UTILS.getPlayerByID(pdata, message.member.id);

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

		if(!is_day(message.guild.id) || sender.tags.mute)
		{
			msg(chn, "-ERROR: You cannot use whispers right now.");
			return;
		}

		let limit = (sender.whispers || 0);
		if(sender.tags.limit && limit >= parseInt(sender.tags.limit, 10))
		{
			msg(chn, "-ERROR: You are out of whispers.");
			return;
		}

		if(sender.tags.silent)
		{
			msg(chn, SENT);
			return;
		}

		let recipient = UTILS.isInt(args[0])
			&& pdata[parseInt(args[0])-1]
			|| getPlayerByName(pdata, args[0]);

		let redirected = {};
		if(recipient)
			redirected[recipient.num] = true;

		while(recipient && recipient.tags.redirect && !redirected[recipient.tags.redirect])
		{
			recipient = pdata[parseInt(recipient.tags.redirect)-1];
			redirected[recipient.num] = true;
		}

		if(!recipient)
		{
			msg(chn, "-ERROR: Player \"" + args[0] + "\" is not valid.");
			return;
		}

		if(sender === recipient)
		{
			msg(chn, "-ERROR: You cannot whisper to yourself.");
			return;
		}

		if(!recipient.alive)
		{
			msg(chn, "-ERROR: Player \"" + args[0] + "\" is dead.");
			return;
		}

		if(recipient.cannot_receive || commaCheck(UTILS, sender.tags.block, recipient.num))
		{
			msg(chn, "-ERROR: You cannot whisper to that person.");
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

		if(sender.tags.limit)
			sender.whispers = (sender.whispers || 0) + 1;

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

		for(let i = 0; i < pdata.length; i++)
		{
			let plr = pdata[i];

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

	register_cmd("tag", "<Player Name or Number or *> <Key> [Value]", "Tag", "Give a player a Tag, a type of variable related to gameplay.\n\nUse * to set a tag for every single player instead.\n\nTo check what a Tag currently is, use this command without providing a Value.\n\nTo remove a Tag, use this command with the Value set to \"-\" (without the quotes).\n\nTo list usable tags, use the =tags command.", {admin_only: true}, (chn, message, e, args) =>
	{
		if(!args[0] || !args[1])
		{
			msg(chn, "-Usage: " + PRE + "tag <Player Name or Number or *> <Key> [Value]");
			return;
		}

		let pdata = SERVER_DATA[message.guild.id].players;
		let players = (args[0] === "*" ? Object.keys(pdata) : [args[0]]);

		if(UTILS.isInt(args[0]))
			players[0] = parseInt(args[0])-1;

		if(players.length === 0)
		{
			msg(chn, "-ERROR: Player data is empty.");
			return;
		}

		for(let i = 0; i < players.length; i++)
		{
			let player = UTILS.isInt(players[i])
				? pdata[players[i]]
				: getPlayerByName(pdata, players[i]);

			if(!player)
			{
				msg(chn, "-ERROR: Player \"" + (args[0] === "*" ? players[i] : args[0]) + "\" is not valid.");
				continue;
			}

			if(!player.tags)
				player.tags = {};

			let value = args[2] || "";

			for(let n = 3; n < args.length; n++)
				value = value + " " + args[n];

			if(value === "-")
			{
				delete player.tags[args[1]];
				msg(chn, "+Tag \"" + args[1] + "\" deleted.");
			}
			else if(value !== "")
			{
				player.tags[args[1]] = value;
				msg(chn, "+Tag \"" + args[1] + "\" set to \"" + value + "\".");
			}
			else
				msg(chn, "+Tag \"" + args[1] + "\" is currently set to \"" + (player.tags[args[1]] || "null") + "\".");
		}

		overwrite();
	});

	register_cmd("tags", "", "Tags", "Provide a list of all known tags.", (chn, message, e, args) =>
	{
		e.setAuthor({name: "List of Tags"});
		e.setDescription("Reminder: To remove a tag, or set it to False, use `=tag <player> <tag> -`");

		e.addField("announce <#channel>", "Target's sent whispers will be announced to the provided channel, which only includes the sender and recipient, NOT the message itself.");
		e.addField("block <PN1,PN2,PN3,etc...>", "Tagged player is blocked from sending whispers to the listed person or people, but may still recieve whispers from those players. Use only commas to separate Player Numbers if the target player is unable to whisper to multiple specific people, i.e. `5,8,12`.");
		e.addField("cannot_receive <true>", "Tagged player will not receive direct whispers, and overhearing will fail. Attempts to whisper to them will notify senders that they cannot.");
		e.addField("daily_reset <true>", "At the start of each day, this will reset a player's whisper count if enabled. Does nothing if whispers are not limited.");
		e.addField("deaf <true>", "Tagged player will not receive direct whispers, though overhearing is unaffected. Attempts to whisper to them will still appear to succeed.");
		e.addField("limit <number>", "Limit the amount of whispers a player is allowed to send. By default, they can't be replenished, unless the player also has the `daily_reset` tag. Setting this to 0, a negative number, or a non-number will disable whispers for that player.");
		e.addField("mute <true>", "Tagged player will be unable to send whispers. They will be notified if they try.");
		e.addField("overhear_all <true>", "Tagged player overhears all whispers");
		e.addField("overhear_target <PN1,PN2,PN3,etc...>", "Tagged player overhears all whispers sent to and from the player(s) with each number. Use only commas to separate Player Numbers if the target player is unable to whisper to multiple specific people, i.e. `5,8,12`.");
		e.addField("silent <true>", "Tagged player will be unable to send whispers. They will NOT know if they try; they will instead be sent a false confirmation message.");
		e.addField("redirect <Player No.>", "Whispers sent to the tagged player will instead be sent to the player with that Number. Overhearing and announcements will reveal the true recipient of the whispers. To prevent loops, a whisper can never be redirected to someone that it was already redirected away from.");
		e.addField("relay <#channel>", "Target's sent whispers will be relayed to the provided channel, which ONLY includes the full message, NOT the sender or recipient.");
		e.addField("relay_nick <Name>", "If present, the player with this tag will show up as that nickname when their messages and sent via relay channels. Their color and PFP will be removed as well. You can set per-channel nicknames using this format: `channelID:nickame,channelID:nickname`. Use commas to separate each nickname or channel-nickname pair, and colons to separate channel IDs from nicknames. You may have a nickname without a channelID specified, which will apply to all channels that don't have their own specific nickname.");

		chn.send({embeds: [e]});
	});

	register_cmd(["add_relay", "addrelay", "relay"], "<#Input> <#output> [twoWay?]", "Add Relay", "Create a relay from one channel to another.\n\nIf a third parameter is provided, a second relay will be created, to send messages in #output back to #input.\n\nDon't worry, relayed messages won't be relayed in an infinite loop.", {admin_only: true}, (chn, message, e, args) =>
	{
		if(!args[0] || !args[1])
		{
			msg(chn, "-Usage: " + PRE + "add_relay <#Input> <#output> [twoWay?]");
			return;
		}

		let rdata = SERVER_DATA[message.guild.id].relay;
		let inp = args[0].substring(2, args[0].length-1);
		let out = args[1].substring(2, args[1].length-1);

		let input = message.guild.channels.cache.get(inp);
		let output = message.guild.channels.cache.get(out);

		if(!input || !output)
		{
			msg(chn, "-ERROR: One of the provided channels are invalid.");
			return;
		}

		rdata[rdata.length] = {inp, out};
		msg(chn, "+Relay created: " + inp + " to " + out);

		if(args[2])
		{
			rdata[rdata.length] = {inp: out, out: inp};
			msg(chn, "+Relay created: " + out + " to " + inp);
		}

		overwrite();
	});

	register_cmd(["list_relays", "listrelays", "list_relay", "listrelay", "relays"], "", "List Relays", "List all currently active channel relays. Be careful not to use this in a publicly available channel, or you might modconfirm the existence of a secret chat.", {admin_only: true}, (chn, message, e, args) =>
	{
		let rdata = SERVER_DATA[message.guild.id].relay;

		if(rdata.length === 0)
		{
			msg(chn, "-There are no active relays.");
			return;
		}

		let output = "Relays:";

		for(let i = 0; i < rdata.length; i++)
			output = output + "\n" + i + ". <#" + rdata[i].inp + "> to <#" + rdata[i].out + ">";

		msg(chn, output, true);
	});

	register_cmd(["del_relay", "delrelay"], "<Number 1> [Number 2] [Number N]...", "Relay", "Delete a given relay, or list of relays. Use =list_relays to check each relay's number.\n\nNegative and non-integer values will not delete anything.", {admin_only: true}, (chn, message, e, args) =>
	{
		if(!args[0])
		{
			msg(chn, "-Usage: " + PRE + "del_relay <Number 1> [Number 2] [Number N]...");
			return;
		}

		let rdata = SERVER_DATA[message.guild.id].relay;
		let newrelay = [];
		let output = "";

		for(let i = 0; i < rdata.length; i++)
		{
			if(!UTILS.containsString(args, String(i)))
				newrelay[newrelay.length] = rdata[i];
			else
				output = output + (output.length === 0 ? " " : ", ") + i;
		}

		if(newrelay.length === rdata.length)
		{
			msg(chn, "-No relays could be deleted.");
			return;
		}

		rdata.splice(0, rdata.length);

		for(let i = 0; i < newrelay.length; i++)
			rdata[i] = newrelay[i];

		msg(chn, "Deleted:" + output);
		overwrite();
	});
};
