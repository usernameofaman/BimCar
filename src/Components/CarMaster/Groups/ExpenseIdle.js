import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



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

export default function ExpenseIdle({setExpenseIdleData}) {
    const [formData, setFormData] = React.useState([
        {
            expenseDate: "",
            expenseNumber: 1,
            remarks: "",
        }
    ])

    const checkUserIdle = () => {
        setTimeout(() => {
            if (parseInt(Date.now()) - parseInt(localStorage.getItem('lastInteraction')) > 2000)
            setExpenseIdleData(formData)
        }, 2000)
    }

    const handleFormData = (e, id) => {
        let currentData = [...formData];
        let currentObject = currentData[id]
        currentObject[e.target.name] = e.target.value;
        currentData[id] = currentObject;
        setFormData(currentData)
        checkUserIdle()
        localStorage.setItem("lastInteraction", Date.now());
    }

    const removeExpense = (id) => {
        if(formData.length === 1)
            return
        let currentData = [...formData];
        currentData.splice(id, 1)
        currentData.map((item, index) => {
            item.expenseNumber = index + 1
        })
        setFormData(currentData)
    }

    const addExpense = () => {
        let currentData = [...formData];
        if (currentData.length <= 10) {
            currentData.push({
                expenseDate: "",
                expenseNumber: currentData[currentData.length-1].expenseNumber + 1,
                remarks: "",
            })
            setFormData(currentData)
        }

    }
    return (
        <Container>
            {formData.map((item, id) => (
                <FormRow key={id}>
                    <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                        <TextField fullWidth value={item.expenseNumber} disabled name="expenseNumber" label="Expense Number" onChange={(e) => handleFormData(e,id)} />
                    </Box>
                    <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                        <TextField InputLabelProps={{ shrink: true }} type={"date"} fullWidth value={item.expenseDate} name="expenseDate" label="Date" onChange={(e) => handleFormData(e,id)} />
                    </Box>
                    <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                        <TextField fullWidth value={item.remarks} name="remarks" label="Remarks" onChange={(e) => handleFormData(e,id)} />
                    </Box>
                    <Fab onClick={addExpense} style={{ minWidth: "60px", marginRight: "4px" }} color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab onClick={() => removeExpense(id)} style={{ minWidth: "60px" }} color="white" aria-label="add">
                        <RemoveIcon />
                    </Fab>
                </FormRow>
            ))}
        </Container>
    )
}
