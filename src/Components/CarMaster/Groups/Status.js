import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';



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

export default function Status({ setCarStatus }) {
    const [selectedMake, setSelectedMake] = React.useState([])
    const [formData, setFormData] = React.useState({

    })

    const checkUserIdle = () => {
        setTimeout(() => {
            if (parseInt(Date.now()) - parseInt(localStorage.getItem('lastInteraction')) > 2000)
                setCarStatus(formData)
        }, 2000)
    }
    const handleFormData = (e) => {
        if (e.target.name === "make") {
            setSelectedMake(e.target.value)
        }
        setFormData({ ...formData, [e.target.name]: e.target.value })
        checkUserIdle()
        localStorage.setItem("lastInteraction", Date.now());
    }
    return (
        <Container>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Vehicle status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="vehicleStatus"
                            name="vehicleStatus"
                            value={formData.vehicleStatus}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"ACCIDENTAL"}>Accidental</MenuItem>
                            <MenuItem value={"NON-ACCIDENTAL"}>Non-accidental</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Transmission</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Transmission"
                            name="transmisson"
                            value={formData.transmisson}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"MANUAL"}>Manual</MenuItem>
                            <MenuItem value={"AUTOMATIC"}>AMT</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Fuel</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Fuel"
                            name="fuel"
                            value={formData.fuelType}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"MANUAL"}>Petrol</MenuItem>
                            <MenuItem value={"DIESEL"}>Diesel</MenuItem>
                            <MenuItem value={"ELECTRIC"}>Electric</MenuItem>
                            <MenuItem value={"HYBRID"}>Hybrid</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.kmDone} name="kmDone" label="KM Done" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.currentStatus} name="currentStatus" label="Current Status" onChange={handleFormData} />
                </Box>
            </FormRow>
        </Container>
    )
}
