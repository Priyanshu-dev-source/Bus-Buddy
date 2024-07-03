const Button = ({
	children,
	className,
	bType = "button",
	type = "base",
	height = "100%",
	width = "100%",
	highlight = false,
	rounded,
	buttonColor,
	onClick,
}) => {
	const types = {
		fill: "text-[20px] rounded-[20px] text-black focus:bg-[rgb(229_231_235)] hover:border-[1px] focus:border-[1px] focus:border-black border-black font-bold hover:bg-[rgb(229_231_235)] flex items-center justify-center",
		base: "rounded-[10px] flex items-center justify-center bg-black hover:bg-gray-600 font-bold text-white tracking-wider",
		signIn: "text-[18px] font-bold rounded-[10px] text-white focus:border-2 focus:border-white border-white bg-[#2563EB] hover:bg-[#0066B2]",
		add: "bg-[#E5E7EB] hover:bg-[rgb(173_173_173)] flex items-center justify-center flex-col",
		close: "absolute flex items-center justify-center right-[10px] top-[8px] hover:bg-[rgb(173_173_173)]",
	}
	const bgColor = highlight ? "rgb(229 231 235)" : buttonColor

	// console.log(types.type);
	// console.log(height)
	return (
		<button
			type={bType}
			className={types[type]}
			style={{
				height: height,
				width: width,
				backgroundColor: bgColor,
				borderRadius: rounded,
			}}
			onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
