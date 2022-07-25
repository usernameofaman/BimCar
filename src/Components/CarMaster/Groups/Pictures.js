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


export default function Pictures() {
    const [formData, setFormData] = React.useState({
    })
    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (

        <Container>
            <FormRow>

                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"file"} fullWidth value={formData.emiAmount} name="picture1" label="Front Image" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"file"} fullWidth value={formData.emiAmount} name="picture2" label="Rear Image" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"file"} fullWidth value={formData.emiAmount} name="picture3" label="Side Image" onChange={handleFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"file"} fullWidth value={formData.emiAmount} name="picture4" label="Interior Image" onChange={handleFormData} />
                </Box>
            </FormRow>
        </Container>
    )
}
