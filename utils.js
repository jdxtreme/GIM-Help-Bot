const UTILS = {};

//<table>, <string>
UTILS.containsString = (t, s) =>
{
	if(!t || !s)
		return false;

	for(let i in t)
		if(String(t[i]).toLowerCase() === String(s).toLowerCase())
			return true;

	return false;
}

UTILS.display = (value, level) =>
{
	level = level || 1;

	switch(typeof value)
	{
		case "string":
			return '"' + value + '"';

		case "object":
			if(!value)
				return "null";
			else if(Array.isArray(value))
			{
				if(value.length === 0)
					return "[]";

				let disp = "[" + UTILS.display(value[0]);

				for(let i = 1; i < value.length; i++)
					disp = disp + ", " + UTILS.display(value[i]);

				return disp + "]";
			}
			else
			{
				let keys = Object.keys(value);

				if(keys.length === 0)
					return "{}";

				let disp = "{\n" + UTILS.tabLevel(level+1) + UTILS.display(keys[0]) + ": " + UTILS.display(value[keys[0]], level+1);

				for(let i = 1; i < keys.length; i++)
					disp = disp + ",\n" + UTILS.tabLevel(level+1) + UTILS.display(keys[i]) + ": " + UTILS.display(value[keys[i]], level+1);

				return disp + "\n" + UTILS.tabLevel(level) + "}";
			}

		default:
			return String(value);
	}
}

UTILS.isInt = (v) =>
{
	if(typeof v !== "string")
		v = String(v);

	return parseInt(v, 10).toString() === v;
}

UTILS.isNeg = (arg) =>
{
	if(typeof arg !== "string" || arg.length === 0)
		return false;

	return arg.charAt(0) === "-" || arg.charAt(0) === "!";
}

//<Object: {rate}>
UTILS.randChances = (t) =>
{
	let sum = 0;

	for(let i in t)
		sum = sum + Math.max(Math.round(100 * t[i].rate), 0);

	let choice = UTILS.randInt(sum);
	sum = 0;

	for(let i in t)
	{
		sum = sum + Math.max(Math.round(100 * t[i].rate), 0);

		if(sum > choice)
			return t[i];
	}

	console.log("Warning: randChances returned null! Sum: " + sum + ", Choice: " + choice);
}

UTILS.randElem = (arr) =>
{
	if(arr.length === 0)
		return null;

	return arr[UTILS.randInt(arr.length)];
}

//[<min>, <max>] or [0, <max>)
UTILS.randInt = (min, max) =>
{
	if(!max)
	{
		max = min - 1;
		min = 0;
	}

	if(max < min)
	{
		let n = min;
		min = max;
		max = n;
	}

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

UTILS.rHex = (n) =>
{
	if(n)
	{
		let output = "";

		for(let i = 0; i < n; i++)
			output = output + UTILS.rHex();

		return output;
	}

	let h = Math.floor(Math.random() * 16);

	if(h >= 10)
		return String.fromCharCode(55 + h);
	else
		return String(h);
}

UTILS.tabLevel = (level) =>
{
	let tabs = "";

	for(let i = 0; i < level; i++)
		tabs = tabs + '\t';

	return tabs;
}

UTILS.titleCase = (str) =>
{
	str = String(str);

	return str.substring(0, 1).toUpperCase() + str.substring(1);
}

module.exports = UTILS;
