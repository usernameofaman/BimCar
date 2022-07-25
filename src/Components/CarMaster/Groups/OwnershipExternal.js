import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';



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


export default function OwnerShipExternal({ setOwnershipExternal }) {
    const [formData, setFormData] = React.useState({
    })

    const checkUserIdle = () => {
        setTimeout(() => {
            if (parseInt(Date.now()) - parseInt(localStorage.getItem('lastInteraction')) > 2000)
            setOwnershipExternal(formData)
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
                </FormRow>
                <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.insuranceTransferDate} name="insuranceTransferDate" label="Insurance Transfer Date" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type="number" fullWidth value={formData.profitLoss} name="profitLoss" label="Profit Loss" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.ruDate} name="ruDate" label="RU Date" onChange={handleFormData} />
                </Box>
            </FormRow>
        </Container>
    )
}
