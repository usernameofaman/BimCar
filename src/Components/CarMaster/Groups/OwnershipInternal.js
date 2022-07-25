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


export default function OwnerShipInternal({setOwnershipInternal}) {
    const [formData, setFormData] = React.useState({
    })

    const checkUserIdle = () => {
        setTimeout(() => {
             if (parseInt(Date.now()) - parseInt(localStorage.getItem('lastInteraction')) > 2000)
            setOwnershipInternal(formData)
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
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.ouDate} name="ouDate" label="OU Date" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.ownerName} name="ownerName" label="Owner Name" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.rcTransferDate} name="rcTransferDate" label="RC Transfer Date" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.insuranceTransferDate} name="insuranceTransferDate" label="Insurance Transfer Date" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.currentInsuranceProvider} name="currentInsuranceProvider" label="Current Insurance Provider" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.currentPolicyNumber} name="currentPolicyNumber" label="Curent Policy Number" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.currentPolicyExpiry} name="currentPolicyExpiry" label="Current Policy Expiry" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Policy Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="policyType"
                            name="policyType"
                            value={formData.ownership}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"COMPREHENSIVE"}>Comprehensive</MenuItem>
                            <MenuItem value={"THIRD_PARTY"}>Third Party</MenuItem>
                            <MenuItem value={"ZERO_DEPTH"}>Zero Depth</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.carRegistration2} name="carRegistration2" label="Car Registration 2" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.carRegistration3} name="carRegistration3" label="Car Registration 3" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">State 2</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="state2"
                            name="state2"
                            value={formData.state2}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"MADHYA_PRADESH"}>Madhya Pradesh</MenuItem>
                            <MenuItem value={"DELHI"}>Delhi</MenuItem>
                            <MenuItem value={"UTTAR_PRADESH"}>Uttar Pradesh</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">State 3</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="state3"
                            name="state3"
                            value={formData.state3}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"MADHYA_PRADESH"}>Madhya Pradesh</MenuItem>
                            <MenuItem value={"DELHI"}>Delhi</MenuItem>
                            <MenuItem value={"UTTAR_PRADESH"}>Uttar Pradesh</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </FormRow>
        </Container>
    )
}
