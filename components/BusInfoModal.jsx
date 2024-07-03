import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"

const BusInfoModal = ({ closeModal, busInfo}) => {

    const [contact, setContact] = useState("");
    const [busNumber, setBusNumber] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [driverName, setDriverName] = useState("");

    const busDetails = {
        	[busInfo]:{
        		"busNumber":busNumber,
                "driverName":driverName,
        		"contact":contact,
        		"origin":origin,
        		"destination":destination,
        		"busStartDate":startDate,
        		"busStartTime":startTime,
                "wayPoints":[
                    {
                        "location":"PSIT KANPUR",
                        "time":"7:50 AM"
                    },
                    {
                        "location":"PSIT KANPUR",
                        "time":"7:50 AM"
                    },
                    {
                        "location":"PSIT KANPUR",
                        "time":"7:50 AM"
                    }
                ],
                "speed":"40 km/h",
                "currentLocation":{
                    "latitude":"",
                    "longitude":""
                },
                "lastStop":"",
                "nextStop":"",
                "delay":"",
        		}
    }

    return(
        <div className="h-full w-full bg-[rgb(229_231_235)] rounded-[20px] flex justify-start items-center px-[20px]">
            <Button
					type="close"
					height="40px"
					width="40px"
					rounded="50%"
					onClick={closeModal}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="35px"
						viewBox="0 -960 960 960"
						width="35px"
						fill="#000000">
						<path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
					</svg>
				</Button>
            <form action="#" className="h-[90%] w-[90%] flex items-center justify-center flex-col gap-[40px]">
                <div className="h-[30px] w-full flex items-center justify-start flex-row">
                    <h1 className="w-[200px] text-[20px] font-semibold">
                        Driver Contact No.:
                    </h1>
                    <Input 
                    height="40px"
                    width="52%"
                    placeholder="Enter Contact number"
                    color="black"
                    value={contact}
                    onChange={(e) => {
                        setContact(e)
                    }}
                    required="required">
                    </Input>
                </div>
                <div className="h-[30px] w-full flex items-center justify-start flex-row">
                    <h1 className="w-[200px] text-[20px] font-semibold">
                        Driver Name:
                    </h1>
                    <Input 
                    height="40px"
                    width="52%"
                    placeholder="Enter Driver Name"
                    color="black"
                    value={driverName}
                    onChange={(e) => {
                        setDriverName(e)
                    }}
                    required="required">
                    </Input>
                </div>
                <div className="h-[30px] w-full flex items-center justify-start flex-row">
                    <h1 className="w-[200px] text-[20px] font-semibold">
                        Bus Number:
                    </h1>
                    <Input 
                    height="40px"
                    width="52%"
                    placeholder="Enter Bus number"
                    color="black"
                    value={busNumber}
                    onChange={(e) => {
                        setBusNumber(e)
                    }}
                    required="required">
                    </Input>
                </div>
                <div className="h-[30px] w-full flex items-center justify-start flex-row">
                    <h1 className="w-[200px] text-[20px] font-semibold">
                        Origin:
                    </h1>
                    <Input 
                    height="40px"
                    width="52%"
                    placeholder="Enter Origin"
                    color="black"
                    value={origin}
                    onChange={(e) => {
                        setOrigin(e)
                    }}
                    required="required">
                    </Input>
                </div>
                <div className="h-[30px] w-full flex items-center justify-start flex-row">
                    <h1 className="w-[200px] text-[20px] font-semibold">
                        Destination:
                    </h1>
                    <Input 
                    height="40px"
                    width="52%"
                    placeholder="Enter Destination"
                    color="black"
                    value={destination}
                    onChange={(e) => {
                        setDestination(e)
                    }}
                    required="required">
                    </Input>
                </div>
                <div className="h-[30px] w-full flex items-center justify-start flex-row">
                    <h1 className="w-[200px] text-[20px] font-semibold">
                        Bus Start Date:
                    </h1>
                    <Input 
                    height="40px"
                    width="52%"
                    placeholder="Enter Bus Start Date"
                    color="black"
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e)
                    }}
                    required="required">
                    </Input>
                </div>
                <div className="h-[30px] w-full flex items-center justify-start flex-row">
                    <h1 className="w-[200px] text-[20px] font-semibold">
                        Bus Start Time:
                    </h1>
                    <Input 
                    height="40px"
                    width="52%"
                    placeholder="Enter Bus Start Time"
                    color="black"
                    value={startTime}
                    onChange={(e) => {
                        setStartTime(e)
                    }}
                    required="required">
                    </Input>
                </div>
                <Button
					type="base"
					height="60px"
					width="100px"
					rounded="10px"
					onClick={() => {
                        console.log(busDetails);
                    }}>
                        Submit
				</Button>

            </form>
        </div>
    )
}

export default BusInfoModal