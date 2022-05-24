/*
Format:

register_role(["role_cmd_name", "other_role_cmd_name", "###"], "Alignment", "Actual Role Name", (e) =>
{
	e.setDescription("Post ###");

	e.addField("Alignment", "Alignment Subalignment", true);
	e.addField("Attack", "None/Basic/Whatever", true);
	e.addField("Defense", "Powerful/Invincible/Whatever", true);

	e.addField("Abilities:", "- Ability 1\n- Ability 2\n - etc...");

	e.addField("Attributes:", "- Attribute 1\n- Attribute 2\n- etc...");

	e.addField("Goal:", "Goal here.");
});

Other Notes:

- If a role is Unique, put it with its alignment (e.g. "Unique Town Killing")

- If a role has additional immunities under the listed attack/defense, put those immunities as additional attributes.

- If a role has " within part of its description, you can use \" so that the bot can use the " character without breaking the code. (e.g. "a fake cause of \"death\" (ww, sk, etc).")

- If a role doesn't list its attack and defense stats, try to come up with them based off of the listed abilities and attributes. If even those don't specify anything, assume basic for any ability that provides attack or defense, or "None" if a role mentions neither.

- If a role only has Abilities or Attributes, but not the other, then just delete that role's e.addField() for whichever one would go unused.

- If a role uses or comes with an image, you can use e.setImage("URL");

- If a role mentions a specific channel on the Discord Server, use the format "<#970046125065265202>". That example will mention the "#roles" channel. You need to enable Discord Developer Mode in your settings to be able to copy channel IDs.
*/

module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["revenant", "201"], "Neutral", "Revenant", (e) =>
	{
		e.setDescription("Post 201");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player.\n- During the day/night, while choose a role to appear as in the graveyard when you feign death.\n- At night, choose to feign your death, and a fake cause of \"death\" (ww, sk, etc).");

		e.addField("Attributes:", "- When \"feigning death\", you will be alive, but will register as dead.\nYour displayed role in the graveyard when feigning death will be the one you chose with your second ability (you will appear to die by the role that killed you by default). Your cause of death when feigning death will be displayed on the graveyard according to what role you chose with your 3rd ability. The default displayed role is Survivor. If you actually die, your role in the graveyard is updated to Revenant.\n\n- You may only attack if you have successfully feigned death, and you can only attack on every other night. If more than half of players are dead, your attacks will be upgraded to Powerful.\n\n-If you have not already feigned your death, the first time you are killed, you will secretly survive and feign your death.");
		e.addField("Attributes (cont):", "- Players may still target you with their abilities, but they will gain no comfirmation tuat targetting you was successful, nor will they gain feedback from using their ability on you.\nPlayers may also vote/lynch players in the graveyard (you can also be killed this way).\n\n- While feigning death, the following will occur:\nYou will have access to the dead chat.\nYou will be incapable of voting.\nYou can not speak in the public day chat.\nYou cannot be directly whispered to, but you may speak in whisper channels.");

		e.addField("Goal:", "Kill all who oppose you.");
	});
};
