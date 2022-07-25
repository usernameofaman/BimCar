import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { verifyLocalStorageObjectData } from '../../../managers/utility';



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


export default function Finance({setFinanceDetails , financeDetails}) {
    useEffect(() => {
        getCarMasterData()
    }, [])

    const getCarMasterData = async () => {
        let url
        if(window.location.pathname.includes("edit-car-master"))
            url = window.location.pathname
        url = url.split("/")
        url = url[url.length-1]
        let carMasterData = await verifyLocalStorageObjectData('carMaster')
        console.log("url",carMasterData)
        carMasterData.map((item) => {
            if(item.id === url && item.financeDetails)
                setFormData(item.financeDetails)
        })
    }

    const [formData, setFormData] = React.useState({
    })

    const checkUserIdle = () => {
        setTimeout(() => {
            if (parseInt(Date.now()) - parseInt(localStorage.getItem('lastInteraction')) > 2000)
            setFinanceDetails(formData)
            localStorage.setItem('cm-em-finance-info', JSON.stringify(formData))
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
                        <InputLabel id="demo-simple-select-label">Finance Taken</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Finance Taken"
                            name="financeTaken"
                            value={formData.financeTaken}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"YES"}>Yes</MenuItem>
                            <MenuItem value={"NO"}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} disabled={formData.financeTaken === "NO"} fullWidth value={formData.financeAmount} name="financeAmount" label="If yes how much" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.financerDetails} name="financerDetails" label="FinancerDetails" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.emiAmount} name="emiAmount" label="EMI Amount" onChange={handleFormData} />
                </Box>

                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.emiDuration} name="emiDuration" label="EMI Duration (Months)" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.rateOfInterest} name="rateOfInterest" label="Rate of Interest" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.emiStartDate} name="emiStartDate" label="EMI Start Date" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.emiEndDate} name="emiEndDate" label="EMI End Date" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.anyOneTimePayments} name="anyOneTimePayments" label="Any one time payment" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.balanceOnDate} name="balanceOnDate" label="Balance as on date" onChange={handleFormData} />
                </Box>
            </FormRow>
        </Container>
    )
}
