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
width: 100%;
  display: flex;
  margin: 10px 0 10px 0;
`;
const InputField = styled.div`
  padding: 5px;
  width: 100%;
`;

export default function Customer() {
  const [formData, setFormData] = React.useState({
    id: makeid(10),
  });

  const changeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    let storeData = {...formData}
    storeData[e.target.name] = e.target.value
    localStorage.setItem('car-acq-customer',JSON.stringify(storeData))
  };

  return (
    <Container>
      <AddForm>
          <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Customer Identified</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" name="customerIdentified" label="Customer identified">
                <MenuItem value={"YES"}>Yes</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth onChange={(e) => changeFormData(e)} id="outlined-basic" label="Customer" variant="outlined" name="customer" />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth onChange={(e) => changeFormData(e)} id="outlined-basic" label="Address" variant="outlined" name="address" />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth onChange={(e) => changeFormData(e)} id="outlined-basic" label="Google Link to Address" variant="outlined" name="googleLinkToAddress" />
        </Box>
      </AddForm>
    </Container>
  );
}
