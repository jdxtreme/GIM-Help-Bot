module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["murderer-chan", "murdererchan", "murderer", "chan", "951"], "Neutral", "Murderer-chan", (e) =>
	{
		e.setDescription("Post 951");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Murder a player each night.\n- Murder a player each night.\n- Murder a player each night.");

		e.addField("Attributes:", "- Detection Immune\n- You may multitask.\n- Protection from Rasen (You can't be negatively affected in any way by Rasen. This includes lynches and mod actions.)\n- Rasen can't roll this role.");
		
		e.addField("Goal:", "Kill all who would oppose you except up to one person, who instead wins with you, but it can't be Rasen.");
	});

	register_role(["macho_man", "machoman", "macho", "952"], "Town", "Macho Man", (e) =>
	{
		e.setDescription("Post 952");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Test someone's might each night.");

		e.addField("Attributes:", "- Submit a player and an Attack value. You will be notified whether your target would survive an Attack of that value if said Attack would apply to them after all other actions resolve.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["soldier", "953"], "Town", "Soldier", (e) =>
	{
		e.setDescription("Post 953");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Go on alert outside someone else's house each night. (3 uses)");

		e.addField("Attributes:", "- When on alert, you will deal a Powerful attack to all players that visit your target that night.\n- Because rasen is unbased, let it be known that you will not kill yourself if you use your ability.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["aide", "954"], "Town", "Aide", (e) =>
	{
		e.setDescription("Post 954");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to care for at night.");

		e.addField("Attributes:", "- You will heal your target for both the night you target them and the night after.\n- You are immune to being roleblocked on the second night you protect a target.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["destined", "955"], "Town", "Destined", (e) =>
	{
		e.setDescription("Post 955");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose to combine the destinies of two players.");

		e.addField("Attributes:", "- Any player that targets one of your targets will also target your other target.\n- You will not duplicate the abilities of any player that is roleblock or redirect immune.");
		
		e.addField("Goal:", "Town Goal");
	});

	register_role(["abomination_of_salem", "abominationofsalem", "abomination", "abom", "aos", "956"], "Neutral", "Abomination of Salem", (e) =>
	{
		e.setDescription("Post 956");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Attack someone each night.");

		e.addField("Attributes:", "- You have all abilities and attributes, except factional ones, of all other roles in the game. You may elect at any time to remove any number of your abilities or attributes, but you will not be able to get them back.");
		
		e.addField("Goal:", "NK Goal");
	});

	register_role(["towns_fury", "townsfury", "fury", "957"], "Town", "Town's Fury", (e) =>
	{
		e.setDescription("Post 957");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- At the beginning of the game, you're given three random non-Town Power Town roles. You may choose a role to be from among those, except your ability rampages. (It also applies to all your target's visitors except you. If it already rampaged, it like double rampages? You get it.)");
		
		e.addField("Goal:", "Town Goal");
	});
};
