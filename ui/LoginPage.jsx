"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import Link from "next/link"

const LoginPage = () => {
	const router = useRouter()
	const [visibility, setVisibility] = useState("/eyeOff.png")
	const [buttonType, setButtonType] = useState("password")

	const handleToggleEye = () => {
		setVisibility(buttonType === "password" ? "eyeOn.png" : "eyeOff.png")
		setButtonType(buttonType === "password" ? "text" : "password")
	}

	const loginDetail = [
		{
			email: "Priyanshu",
			password: "Priyanshu12@",
		},

		{
			email: "Divyansh",
			password: "Divyansh@12",
		},
	]

	const [inputEmail, setInputEmail] = useState("")
	const [inputPassword, setInputPassword] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault()
		for (let i = 0; i < loginDetail.length; i++) {
			if (
				inputEmail === loginDetail[i].email &&
				inputPassword === loginDetail[i].password
			) {
				router.push("/admin/buses")
				return
			} else if (i === loginDetail.length - 1) {
				alert("Invalid Credentials")
				return
			} else {
				continue
			}
		}
	}

	return (
		<div className="h-[77%] w-[32%] bg-[#0f172a] rounded-[20px] hover:border-[1px] hover:border-white flex items-center justify-around flex-col">
			<h1 className="text-[30px] font-bold leading-tight tracking-tight text-white">
				Login
			</h1>
			<form
				action="#"
				className="h-[77%] w-full flex items-center justify-start flex-col gap-y-[30px]">
				<div className="flex flex-col items-start justify-center h-[20%] w-full gap-[10px] pl-[25px]">
					<label
						htmlFor="email"
						className="text-white text-[18px] font-semibold">
						Username
					</label>
					<Input
						height="50px"
						width="92%"
						placeholder="Enter your Username"
						bgcol="transparent"
						color="white"
						value={inputEmail}
						onChange={(e) => {
							setInputEmail(e)
						}}></Input>
				</div>
				<div className="flex flex-col items-start justify-center h-[20%] w-full gap-[10px] pl-[25px]">
					<label
						htmlFor="password"
						className="text-white text-[18px] font-semibold">
						Password
					</label>
					<div className="h-full w-full flex justify-start items-center">
						<Input
							height="50px"
							width="92%"
							placeholder="Enter your password"
							bgcol="transparent"
							color="white"
							value={inputPassword}
							onChange={(e) => {
								setInputPassword(e)
							}}
							type={buttonType}></Input>
						<img
							className="h-[30px] w-[30px] cursor-pointer relative right-[40px]"
							src={visibility}
							alt=""
							type="png"
							onClick={handleToggleEye}
						/>
					</div>
				</div>
				<div className="h-[10%] w-full flex items-center justify-end pr-[45px]">
					<Link
						href="/"
						className="text-blue-600 font-bold hover:underline">
						Forgot Password?
					</Link>
				</div>
				<Button
					bType="button"
					height="11%"
					width="88%"
					type="signIn"
					onClick={handleSubmit}>
					Login
				</Button>
				<p className="text-sm font-light text-gray-400">
					Don’t have an account yet?{" "}
					<Link
						href="/admin/signUp"
						className="font-medium text-[#2563EB] hover:underline text-primary-500">
						Sign up
					</Link>
				</p>
			</form>
		</div>
	)
}

export default LoginPage
