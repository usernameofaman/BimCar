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


export default function PurchaseDetails({ setPurchaseDetails }) {
    const [selectedMake, setSelectedMake] = React.useState([])
    const [formData, setFormData] = React.useState({
    })
    const [carModels, setCarModels] = React.useState(
        {
            "TATA": ["Punch", "Nexon", "Harrier"],
            "HYUNDAI": ["i10", "Venue", "i20"],
            "KIA": ["Sonet", "Seltos", "Caravans"]
        }
    )

    const checkUserIdle = () => {
        setTimeout(() => {
             if (parseInt(Date.now()) - parseInt(localStorage.getItem('lastInteraction')) > 2000)
            setPurchaseDetails(formData)
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
                        <InputLabel id="demo-simple-select-label">Ownership</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Ownership"
                            name="ownership"
                            value={formData.ownership}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"FIRST"}>First</MenuItem>
                            <MenuItem value={"SECOND"}>Second</MenuItem>
                            <MenuItem value={"THIRD"}>Third</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField fullWidth value={formData.boughtFrom} name="boughtFrom" label="Bought From" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={formData.boughtOn} name="boughtOn" label="Bought On" onChange={handleFormData} />
                </Box>
            </FormRow>
            <FormRow>

                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} fullWidth value={formData.boughtPrice} name="boughtPrice" label="Bought Price" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">GST Paid</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="GST Paid"
                            name="gstPaid"
                            value={formData.gstPaid}
                            onChange={handleFormData}
                        >
                            <MenuItem value={"YES"}>Yes</MenuItem>
                            <MenuItem value={"NO"}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField type={"number"} disabled={formData.gstPaid === "NO"} fullWidth value={formData.gstPaidPrice} name="gstPaidPrice" label="If yes how much" onChange={handleFormData} />
                </Box>
            </FormRow>
        </Container>
    )
}
