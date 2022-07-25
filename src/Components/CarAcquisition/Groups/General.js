import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { makeid } from "../../../managers/utility";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AddForm = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputField = styled.div`
  padding: 5px;
  width: 100%;
`;

export default function CarAcquisition({}) {
  const [formData, setFormData] = React.useState({
    id: makeid(10),
  });

  const changeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    let storeData = {...formData}
    storeData[e.target.name] = e.target.value
    localStorage.setItem('car-acq-general',JSON.stringify(storeData))
  };

  return (
    <Container>
      <AddForm>
        <InputField>
          <TextField onChange={(e) => changeFormData(e)} type={"date"} name="dateUpdated" />
        </InputField>
        <InputField>
          <TextField onChange={(e) => changeFormData(e)} type={"date"} name="dateOfAcquisition" />
        </InputField>
        <InputField>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select onChange={(e) => changeFormData(e)} name="type" labelId="demo-simple-select-label" id="demo-simple-select" label="Type">
                <MenuItem value={"BOOKING"}>Booking</MenuItem>
                <MenuItem value={"ATTACHMENT"}>Attachment</MenuItem>
                <MenuItem value={"PURCHASE"}>Purchase</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </InputField>
      </AddForm>
      <AddForm>
        <InputField>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Purpose</InputLabel>
              <Select onChange={(e) => changeFormData(e)} name="purpose" labelId="demo-simple-select-label" id="demo-simple-select" label="Purpose">
                <MenuItem value={"LEASE"}>Lease</MenuItem>
                <MenuItem value={"SALE"}>Sale</MenuItem>
                <MenuItem value={"BIMCAR"}>Bimcar</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </InputField>
        <InputField>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Entity</InputLabel>
              <Select onChange={(e) => changeFormData(e)} name="type" labelId="demo-simple-select-label" id="demo-simple-select" label="Purpose">
                <MenuItem value={"BIMCAR"}>Bimcar</MenuItem>
                <MenuItem value={"SPL1"}>SPL 1</MenuItem>
                <MenuItem value={"SPL2"}>SPL 2</MenuItem>
                <MenuItem value={"OTHER"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </InputField>
        <InputField>
          <TextField onChange={(e) => changeFormData(e)} id="outlined-basic" label="Dealer" variant="outlined" name="dealer" />
        </InputField>
        <InputField>
          <TextField onChange={(e) => changeFormData(e)}  id="outlined-basic" label="Length" variant="outlined" type={"number"} name="length" />
        </InputField>
      </AddForm>
    </Container>
  );
}
