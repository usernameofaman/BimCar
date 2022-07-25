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

export default function ServiceData({ setServiceData }) {
    const [formData, setFormData] = React.useState({
        make: "",
        model: ""
    })

    const checkUserIdle = () => {
        setTimeout(() => {
             if (parseInt(Date.now()) - parseInt(localStorage.getItem('lastInteraction')) > 2000)
            setServiceData(formData)
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
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.pollutionDate} name="pollutionDate" label="Pollution Done On" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.pullutionExpiryDate} name="pullutionExpiryDate" label="Pollution Expiry Date" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.kmDone} name="kmDone" label="KM Done" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.kmNotingDate} name="kmNotingDate" label="KM Noting Date" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.serviceDate} name="serviceDate" label="Service Date" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.serviceDoneKM} name="serviceDoneKM" label="Service Done (KM)" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.serviceDueDate} name="serviceDueDate" label="Service Due On" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.serviceDueKM} name="serviceDueKM" label="Service Due On (KM)" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.oilChangeDate} name="oilChangeDate" label="Oil Change Date" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.oilChangeDoneKM} name="oilChangeDoneKM" label="Oil Change Done (KM)" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.oilChangeDueDate} name="oilChangeDueDate" label="Oil Change Due On" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.oilChangeDueKM} name="oilChangeDueKM" label="Oil Change Due On (KM)" onChange={handleFormData} />
                </Box>
            </FormRow>
        </Container>
    )
}
