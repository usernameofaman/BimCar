import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button, TextField } from '@mui/material'
import { Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const Container = styled.div`
    display: flex;
    padding : 20px;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const AddForm = styled.div`
    display: flex;
    flex-direction: row;
`
const InputField = styled.div`
    padding: 5px;
    width: 100%;
`



export default function CarDetails() {
    const [formData, setFormData] = React.useState({
        id: makeid(10),
        make: "",
        model: "",
        variant: "",
        fuelType: "",
        dateUpdated: ""

    })

    useEffect(() => {
        let url = window.location.pathname.split("/");
        let id = url[url.length - 1]
        getObjectById(id)
    }, [])

    const getObjectById = (id) => {
        let data = localStorage.getItem("carData");
        if (data)
            data = JSON.parse(data);
        else
            window.alert("No Data Found")

        data.map((item, index) => {
            if (item.id === id) {
                setFormData(item)
            }
        })
    }

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const changeFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const SubmitData = () => {
        let letSubmit = true
        let keyName = ""
        Object.keys(formData).map((key) => {
            if (formData[key] === "") {
                letSubmit = false
                keyName = key
                return
            }
        })
        if (!letSubmit) {
            window.alert(`Please fill ${keyName}`)
            return
        }
        let data = localStorage.getItem("carData")
        if (data)
            data = JSON.parse(data)
        else
            data = []
        // data.push(formData)
        data.map((item, index) => {
            if (item.id === formData.id) {
                data.splice(index, 1, formData)
            }
        })
        let newData = JSON.stringify(data)
        localStorage.setItem("carData", newData)
        window.location.pathname = "/dashboard/car-data"
    }

    return (
        <Container>
            <Typography variant='h4' style={{ marginBottom: "20px" }}>View / Edit Car Details</Typography>
            <AddForm>
                <InputField>
                    <TextField value={formData.model} onChange={(e) => changeFormData(e)} id="outlined-basic" label="Model" variant="outlined" name="model" />
                </InputField>
                <InputField>
                    <TextField value={formData.make} onChange={(e) => changeFormData(e)} id="outlined-basic" label="Make" variant="outlined" name="make" />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField value={formData.fuelEconomy} onChange={(e) => changeFormData(e)} id="outlined-basic" label="Fuel Economy" variant="outlined" name="fuelEconomy" />
                </InputField>
                <InputField>
                    <TextField value={formData.length} onChange={(e) => changeFormData(e)} id="outlined-basic" label="Length" variant="outlined" type={"number"} name="length" />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField value={formData.fuelCapacity} onChange={(e) => changeFormData(e)} id="outlined-basic" label="Fuel Tank Capacity" variant="outlined" name="fuelCapacity" type={"number"} />
                </InputField>
                <InputField>
                    <TextField value={formData.fuelType} onChange={(e) => changeFormData(e)} id="outlined-basic" label="Fuel Type" variant="outlined" name="fuelType" />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField value={formData.variant} onChange={(e) => changeFormData(e)} id="outlined-basic" label="Variant" variant="outlined" name="variant" />
                </InputField>

                <InputField>
                    <TextField onChange={(e) => changeFormData(e)} type={"date"} name="dateUpdated" />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Body type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            >
                                <MenuItem value={"SEDAN"}>Sedan</MenuItem>
                                <MenuItem value={"XUV"}>XUV</MenuItem>
                                <MenuItem value={"HATCHBACK"}>HatchBack</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </InputField>
                <InputField>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Standard</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            >
                                <MenuItem value={"BS4"}>BS4</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </InputField>
                <InputField>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Seats</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                name="seats"
                            >
                                <MenuItem value={4}>Four</MenuItem>
                                <MenuItem value={5}>Five</MenuItem>
                                <MenuItem value={6}>Six</MenuItem>
                                <MenuItem value={7}>Seven</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </InputField>
                <InputField>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Airbags</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                name="airbags"
                            >
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Transmission</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                name="transmission"
                            >
                                <MenuItem value={4}>Four</MenuItem>
                                <MenuItem value={5}>Five</MenuItem>
                                <MenuItem value={6}>Six</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </InputField>
                <InputField>
                    <TextField onChange={(e) => changeFormData(e)} value={formData.onRoadPrice} name="onRoadPrice" id="outlined-basic" label="Car Price Ex Delhi" variant="outlined" />
                </InputField>
                <InputField>
                    <TextField id="outlined-basic" type="number" variant="outlined" label={"GST"} />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField id="outlined-basic" type="number" variant="outlined" label={"CESS"} />
                </InputField>
                <InputField>
                    <TextField id="outlined-basic" type="number" variant="outlined" label={"GST and Cess Value"} />
                </InputField>
                <InputField>
                    <TextField id="outlined-basic" type="number" variant="outlined" label={"GST and Cess Value"} />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField id="outlined-basic" type="number" variant="outlined" label={"Road Tax"} />
                </InputField>
                <InputField>
                    <TextField id="outlined-basic" type="number" variant="outlined" label={"First Year insurance"} />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField id="outlined-basic" type="number" variant="outlined" label={"Other charges"} />
                </InputField>
                <InputField>
                    <TextField id="outlined-basic" type="number" variant="outlined" label={"Total Approx On Road charges"} />
                </InputField>
            </AddForm>
            <AddForm>
                <Button variant='outlined' onClick={() => SubmitData()}> Submit </Button>
            </AddForm>

        </Container >
    )
}
