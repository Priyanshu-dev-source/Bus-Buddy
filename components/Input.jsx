"use client"

const Input = ({
	height = "100%",
	width = "100%",
	placeholder = "Enter bus number",
	bgcol = "white",
	color = "white",
	value,
	onChange,
	type = "text",
	required,
}) => {
	// console.log(height)
	return (
		<input
			style={{
				height: height,
				width: width,
				backgroundColor: bgcol,
				color: color,
			}}
			className="md:w-full rounded-[10px] px-[15px] border-[2px] border-gray-300 text-[15px]"
			type={type}
			placeholder={`${placeholder}`}
			value={value}
			color={color}
			onChange={(e) => {
				onChange(e.target.value)
			}}
			required={required}></input>
	)
}

export default Input
