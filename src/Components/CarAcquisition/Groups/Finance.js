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

export default function FinanceDetails() {
  const [formData, setFormData] = React.useState({
    id: makeid(10),
  });

  const changeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    let storeData = {...formData}
    storeData[e.target.name] = e.target.value
    localStorage.setItem('car-acq-finance',JSON.stringify(storeData))
  };

  return (
    <Container>
      <AddForm>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth onChange={(e) => changeFormData(e)} type="number" id="outlined-basic" label="Advance To Take from customer" variant="outlined" name="advanceToTake" value={formData.advanceToTake} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth onChange={(e) => changeFormData(e)} type="number" id="outlined-basic" label="Advance already taken" variant="outlined" name="advanceTaken" value={formData.advanceTaken}/>
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth onChange={(e) => changeFormData(e)} id="outlined-basic" label="Financer" variant="outlined" name="financer" value={formData.financer}/>
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth onChange={(e) => changeFormData(e)} id="outlined-basic" label="Finance Commited" variant="outlined" name="financeCommited" value={formData.financeCommited}/>
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth onChange={(e) => changeFormData(e)} id="outlined-basic" label="Finance Received" variant="outlined" name="financeReceived" value={formData.financeReceived}/>
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth onChange={(e) => changeFormData(e)} id="outlined-basic" type={"number"} label="Finance Rate" variant="outlined" name="financeRate" value={formData.financeRate}/>
        </Box>
      </AddForm>
    </Container>
  );
}
