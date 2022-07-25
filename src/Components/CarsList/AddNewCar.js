import React from 'react'
import styled from 'styled-components'
import { Button, TextField } from '@mui/material'
import { Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { makeid } from '../../managers/utility';



const allCarModels = {
    "TATA": ["Punch", "Nexon", "Harrier"],
    "HYUNDAI": ["i10", "Venue", "i20"],
    "KIA": ["Sonet", "Seltos", "Caravans"]
}

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



export default function AddNewCar() {
    const [carModels, setCarModels] = React.useState([])
    const [selectedMake, setSelectedMake] = React.useState([])


    const [formData, setFormData] = React.useState({
        id: makeid(10),
        make: "",
        model: "",
        variant: "",
        fuelType: "",
        dateUpdated: ""

    })

    const changeFormData = (e) => {
        if (e.target.name === "make") {
            setSelectedMake(e.target.value)
            setCarModels(allCarModels[e.target.value])
        }
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
        data.push(formData)
        let newData = JSON.stringify(data)
        localStorage.setItem("carData", newData)
        window.location.pathname = "/dashboard"
    }

    return (
        <Container>
            <Typography variant='h4'>Add Car</Typography>
            <AddForm>
                <InputField>
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Make</InputLabel>
                            <Select
                                onChange={(e) => changeFormData(e)}
                                name="make"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            >
                                <MenuItem value={"TATA"}>Tata</MenuItem>
                                <MenuItem value={"HYUNDAI"}>Hyundayi</MenuItem>
                                <MenuItem value={"KIA"}>Kia</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </InputField>
                <InputField>
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Model</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                name="model"
                                value={formData.model}
                                onChange={changeFormData}
                            >
                                {carModels.map((val) => (
                                    <MenuItem value={val}>{val}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField onChange={(e) => changeFormData(e)} id="outlined-basic" label="Fuel Economy" variant="outlined" name="fuelEconomy" />
                </InputField>
                <InputField>
                    <TextField id="outlined-basic" label="Length" variant="outlined" type={"number"} name="length" />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField onChange={(e) => changeFormData(e)} id="outlined-basic" label="Fuel Tank Capacity" variant="outlined" name="fuelCapacity" type={"number"} />
                </InputField>
                <InputField>
                    <TextField onChange={(e) => changeFormData(e)} id="outlined-basic" label="Fuel Type" variant="outlined" name="fuelType" />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField onChange={(e) => changeFormData(e)} id="outlined-basic" label="Variant" variant="outlined" name="variant" />
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
                    <TextField id="outlined-basic" onChange={changeFormData}  type="number" variant="outlined" label={"GST"} />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField id="outlined-basic" onChange={changeFormData}  type="number" variant="outlined" label={"CESS"} />
                </InputField>
                <InputField>
                    <TextField id="outlined-basic" onChange={changeFormData}  type="number" variant="outlined" label={"GST and Cess Value"} />
                </InputField>
                <InputField>
                    <TextField id="outlined-basic" onChange={changeFormData}  type="number" variant="outlined" label={"GST and Cess Value"} />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField id="outlined-basic" onChange={changeFormData}  type="number" variant="outlined" label={"Road Tax"} />
                </InputField>
                <InputField>
                    <TextField id="outlined-basic" onChange={changeFormData}  type="number" variant="outlined" label={"First Year insurance"} />
                </InputField>
            </AddForm>
            <AddForm>
                <InputField>
                    <TextField id="outlined-basic" onChange={changeFormData}  type="number" variant="outlined" label={"Other charges"} />
                </InputField>
                <InputField>
                    <TextField id="outlined-basic" onChange={changeFormData}  type="number" variant="outlined" label={"Total Approx On Road charges"} />
                </InputField>
            </AddForm>
            <AddForm>
                <Box sx={{ width: "100%", margin: "10px" }}>
                    <TextField InputLabelProps={{ shrink: true }} type={"file"} fullWidth value={formData.emiAmount} name="picture1" label="Front Image" onChange={changeFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "10px"}}>
                    <TextField InputLabelProps={{ shrink: true }} type={"file"} fullWidth value={formData.emiAmount} name="picture2" label="Rear Image" onChange={changeFormData} />
                </Box>
                </AddForm >
                <AddForm>
                <Box sx={{ width: "100%", margin: "10px"}}>
                    <TextField InputLabelProps={{ shrink: true }} type={"file"} fullWidth value={formData.emiAmount} name="picture3" label="Side Image" onChange={changeFormData} />
                </Box>
                <Box sx={{ width: "100%", margin: "10px"}}>
                    <TextField InputLabelProps={{ shrink: true }} type={"file"} fullWidth value={formData.emiAmount} name="picture4" label="Interior Image" onChange={changeFormData} />
                </Box>
            </AddForm>
            <AddForm>
                <Button variant='outlined' onClick={() => SubmitData()}> Submit </Button>
            </AddForm>

        </Container >
    )
}
