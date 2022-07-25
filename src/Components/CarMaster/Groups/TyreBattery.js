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

export default function TyreBattery({ setTyreBatteryData }) {
    const [formData, setFormData] = React.useState({
    })


    const checkUserIdle = () => {
        setTimeout(() => {
             if (parseInt(Date.now()) - parseInt(localStorage.getItem('lastInteraction')) > 2000)
            setTyreBatteryData(formData)
        }, 2000)
    }

    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        checkUserIdle()
        localStorage.setItem("lastInteraction", Date.now());
    }
    return (	
        <Container>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.tyreNoLF} name="tyreNoLF" label="Tyre number Left Front" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.tyreInstallationLF} name="tyreInstallationLF" label="Installation Date (L-F)" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.tyreNoRF} name="tyreNoRF" label="Tyre number Right Front" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.tyreInstallationRF} name="tyreInstallationRF" label="Installation Date (R-F)" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.tyreNoLR} name="tyreNoLR" label="Tyre number Left Rear" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.tyreInstallationLR} name="tyreInstallationLR" label="Installation Date (L-R)" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.tyreNoRR} name="tyreNoRR" label="Tyre number Right Rear" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.tyreInstallationRR} name="tyreInstallationRR" label="Installation Date (R-R)" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.steponyTyreNumber} name="steponyTyreNumber" label="Stepony Tyre Number" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.steponyInstallation} name="steponyInstallation" label="Installation Date" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.batteryMake} name="batteryMake" label="Battery Make" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.batteryNumber} name="batteryNumber" label="Battery Number" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.batteryInstallation} name="batteryInstallation" label="Installation Date" onChange={handleFormData} />
                </Box>
            </FormRow>	
        </Container>
    )
}
