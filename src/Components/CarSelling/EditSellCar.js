import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { makeid } from "../../managers/utility";

const allCarModels = {
  TATA: ["Punch", "Nexon", "Harrier"],
  HYUNDAI: ["i10", "Venue", "i20"],
  KIA: ["Sonet", "Seltos", "Caravans"],
};

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

const FormRow = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0 10px 0;
`;

export default function EditCarSell() {
  const [carModels, setCarModels] = React.useState([]);
  const [selectedMake, setSelectedMake] = React.useState([]);

  const [formData, setFormData] = React.useState({
    id: makeid(10),
  });

  const handleFormData = (e) => {
    if (e.target.name === "make") {
      setSelectedMake(e.target.value);
      setCarModels(allCarModels[e.target.value]);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitData = () => {
    console.log(formData)
    let localData = localStorage.getItem('carSell')
    if(!localData) localData = []
    localData = JSON.parse(localData);
    localData.push({...formData})
    localStorage.setItem('carSell',JSON.stringify(localData))
    window.location.pathname = "/dashboard/edit-sell-car"
  };

  return (
    <Container>
      <Typography variant="h4">View/Edit Sell Car Details</Typography>
      <FormRow>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField type={"date"} InputLabelProps={{ shrink: true }} fullWidth value={formData.dateUpdated} name="dateUpdated" label="Date Updated" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.entity} name="entity" label="Entity" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.registrationNo} name="registrationNo" label="Registration Number" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.chassisNo} name="chassisNo" label="Chassis Number" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.soldTo} name="soldTo" label="To Whom Sold" onChange={handleFormData} />
        </Box>
        </FormRow>
        <FormRow>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.newOwnerAddress} name="newOwnerAddress" label="New Owner Address" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.googleLinkAddress} name="googleLinkAddress" label="Google link to address" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Transfer Done</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Transfer Done" name="transferDone" value={formData.transferDone} onChange={handleFormData}>
              <MenuItem value={"YES"}>Yes</MenuItem>
              <MenuItem value={"NO"}>No</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </FormRow>
      <FormRow>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.salePriceWOGST} name="salePriceWOGST" label="Sale Price Without GST" type={"number"} onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.gstOnSale} name="gstOnSale" label="GST on Sale Price" type={"number"} onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.totalDealValue} name="totalDealValue" label="Total Deal Value" type={"number"} onChange={handleFormData} />
        </Box>
        </FormRow>
        <FormRow>
          
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.commision} name="commision" label="Commision" type={"number"} onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.dealer} name="dealer" label="Dealer" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.profitLoss} name="profitLoss" label="Profit / Loss" type={"number"} onChange={handleFormData} />
        </Box>
      </FormRow>
     
      <AddForm>
        <Button variant="outlined" onClick={() => SubmitData()}>
          {" "}
          Submit{" "}
        </Button>
      </AddForm>
    </Container>
  );
}
