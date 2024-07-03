import Button from "../components/Button"
import EditIcon from "../public/editIcon.svg"
import DeleteIcon from "../public/deleteIcon.svg"
import BusInfoModal from "./BusInfoModal"
// import { useState } from "react"

const AdminBusDetailCard = ({ uuid, busIndex, onDelete, modalOpen }) => {
	return (
		<div className="h-[150px] w-[95%] rounded-[20px] flex items-center justify-around flex-col border-black border-2">
			<div className="h-[10%] w-full font-light flex items-center px-[20px] relative mt-[10px]">
				UUID: {uuid}
			</div>
			<div className="h-[90%] w-full flex items-center justify-around flex-row relative mb-[15px]">
				<h1 className="font-bold text-[30px]">Bus No. {busIndex}</h1>
				<h1 className="font-semibold text-[20px]">Driver Name</h1>
				<h1 className="font-semibold text-[20px]">UP-AS2308</h1>
				<div className="h-[60px] w-[130px] flex items-center justify-between flex-row">
					<Button onClick={modalOpen}
						height="50px"
						width="45%"
						rounded="10px"
						buttonColor="rgb(229 231 235)">
						{<EditIcon />}
					</Button>
					<Button
						height="50px"
						width="45%"
						rounded="10px"
						buttonColor="rgb(229 231 235)"
						onClick={onDelete}>
						{<DeleteIcon />}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default AdminBusDetailCard
