args = {...}

for _, filename in ipairs(args) do
	local lines = {}
	for line in io.lines(filename) do
		lines[#lines+1] = line
	end

	local i = 0
	for a, line in ipairs(lines) do
		if line:find(", %(e%)") and not line:find("}, %(e%)") then
			i = i + 1
			local cat = nil

			for b = a, a+10 do
				local l2 = lines[b]

				if not cat and l2:find("%(\"Alignment\",") then
					local quote = nil
					local space = nil

					for c = #l2, 1, -1 do
						if not quote then
							if l2:sub(c, c) == '"' then
								quote = c
							end
						elseif not space then
							if l2:sub(c, c) == ' ' then
								space = c
							end
						end
					end

					if l2:sub(space+1, space+1) == '"' then
						print("Role "..i..": Skipping. No subalignment.")
					elseif quote and space then
						cat = l2:sub(space+1, quote-1)
						print("Role "..i..": "..cat)
					else
						print("ERROR: Line "..a..": Quote and Space check failed? - "..l2)
					end
				end
			end

			if cat then
				lines[a] = line:gsub(", %(e%)", ", {subCat: \""..cat.."\"}, (e)")
			else
				print("Error: Role "..i..": No subalignment found?")
			end
		elseif line:find("}, %(e%)") then
			i = i + 1
			print("Role "..i..": Already given Meta.")
		end
	end

	local fileout = io.open("sub_"..filename, 'w')
	for _, line in ipairs(lines) do
		fileout:write(line..'\n')
	end
	fileout:close()
end
