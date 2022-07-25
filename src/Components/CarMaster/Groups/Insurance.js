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


export default function Insurance({ setInsuranceDetails }) {
    const [formData, setFormData] = React.useState({
    })
    const checkUserIdle = () => {
        setTimeout(() => {
             if (parseInt(Date.now()) - parseInt(localStorage.getItem('lastInteraction')) > 2000)
                setInsuranceDetails(formData)
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
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Insurance Provider</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Insurance Provider"
                            name="insuranceProvider"
                            value={formData.insuranceProvider}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"ACKO"}>Acko</MenuItem>
                            <MenuItem value={"BAJAJ_ALLIANZE"}>Bajaj Allianze</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.policyNumber} name="policyNumber" label="Policy Number" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.policyExpiry} name="policyExpiry" label="Policy Expiry" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Policy Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Policy Type"
                            name="policyType"
                            value={formData.policyType}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"COMPREHENSIVE"}>Comprehensive</MenuItem>
                            <MenuItem value={"THIRD_PARTY"}>Third Party</MenuItem>
                            <MenuItem value={"ZERO_DEPTH"}>Zero Depth</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </FormRow>
        </Container>
    )
}
