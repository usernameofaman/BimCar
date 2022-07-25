import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { verifyLocalStorageObjectData } from '../../../managers/utility';


const allCarModels = {
    "TATA": ["Punch", "Nexon", "Harrier"],
    "HYUNDAI": ["i10", "Venue", "i20"],
    "KIA": ["Sonet", "Seltos", "Caravans"]
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const FormRow = styled.div`
    width: 100%;
    display: flex;
    margin: 10px 0 10px 0;
`

export default function CarInfo({ setCarInfo, carInfo }) {

    useEffect(() => {
        getCarMasterData()
    }, [])

    const getCarMasterData = async () => {
        let url
        if(window.location.pathname.includes("edit-car-master"))
            url = window.location.pathname
        url = url.split("/")
        url = url[url.length-1]
        console.log("url",url)
        let carMasterData = await verifyLocalStorageObjectData('carMaster')
        carMasterData.map((item) => {
            if(item.id === url && item.carInfo)
                setFormData(item.carInfo)
        })
    }

    const [selectedMake, setSelectedMake] = React.useState([])
    const [carModels, setCarModels] = React.useState([])
    const [formData, setFormData] = React.useState({
        make: "",
        model: "",
        engineNo: "",
        chassisNo: "",
        state: "",
        yearOfRegistration: "",
        yearOfMake: "",
        registrationExpiry: ""
    })
    const checkUserIdle = () => {
        setTimeout(() => {
            if (parseInt(Date.now()) - parseInt(localStorage.getItem('lastInteraction')) > 2000) {
                setCarInfo(formData)
            }
        }, 2000)
    }


    const handleFormData = (e) => {
        if (e.target.name === "make") {
            setSelectedMake(e.target.value)
            setCarModels(allCarModels[e.target.value])
        }
        setFormData({ ...formData, [e.target.name]: e.target.value })
        checkUserIdle()
    }

    return (
        <Container>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Make</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Make"
                            name="make"
                            value={formData.make}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"TATA"}>Tata</MenuItem>
                            <MenuItem value={"HYUNDAI"}>Hyundayi</MenuItem>
                            <MenuItem value={"KIA"}>Kia</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Model</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            name="model"
                            value={formData.model}
                            onChange={handleFormData}
                        >
                            {carModels.map((val) => (
                                <MenuItem value={val}>{val}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.variant} name="variant" label="Variant" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.carRegistration1} name="carRegistration1" label="Car Registration Number" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.engineNo} name="engineNo" label="Engine Number" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.chassisNo} name="chassisNo" label="Chasis Number" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.registrationExpiry} name="registrationExpiry" label="Registration Expiry" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth type={"number"} inputProps={{ maxLength: 4 }} value={formData.yearOfMake} name="yearOfMake" label="Year of Make" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth type={"number"} inputProps={{ maxLength: 4 }} value={formData.yearOfRegistration} name="yearOfRegistration" label="Year of Registrations" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={handleFormData}
                            value={formData.state}
                            name="state"
                            label="State"
                        >
                            <MenuItem value={"Madhya Pradesh"}>Madhya Pradesh</MenuItem>
                            <MenuItem value={"Tamil Nadu"}>Tamil Nadu</MenuItem>
                            <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
                            <MenuItem value={"Delhi"}>Delhi</MenuItem>
                            <MenuItem value={"Panjab"}>Panjab</MenuItem>
                            <MenuItem value={"Haryana"}>Haryana</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </FormRow>
        </Container>
    )
}
