import React, { useEffect } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { verifyLocalStorageObjectData } from "../../../managers/utility";

const allCarModels = {
  TATA: ["Punch", "Nexon", "Harrier"],
  HYUNDAI: ["i10", "Venue", "i20"],
  KIA: ["Sonet", "Seltos", "Caravans"],
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FormRow = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0 10px 0;
`;

export default function CarData({  }) {
  useEffect(() => {
  }, []);


  const [selectedMake, setSelectedMake] = React.useState([]);
  const [carModels, setCarModels] = React.useState([]);
  const [formData, setFormData] = React.useState({

  });


  const handleFormData = (e) => {
    if (e.target.name === "make") {
      setSelectedMake(e.target.value);
      setCarModels(allCarModels[e.target.value]);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
    let storeData = {...formData}
    storeData[e.target.name] = e.target.value
    localStorage.setItem('car-acq-cardata',JSON.stringify(storeData))
  };

  return (
    <Container>
      <FormRow>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Car Vintage</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Car Vintage" name="carVintage" value={formData.carVintage} onChange={handleFormData}>
              <MenuItem value={"NEW"}>New</MenuItem>
              <MenuItem value={"OLD"}>Old</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Make</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Make" name="make" value={formData.make} onChange={handleFormData}>
              <MenuItem value={"TATA"}>Tata</MenuItem>
              <MenuItem value={"HYUNDAI"}>Hyundayi</MenuItem>
              <MenuItem value={"KIA"}>Kia</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age" name="model" value={formData.model} onChange={handleFormData}>
              {carModels.map((val) => (
                <MenuItem value={val}>{val}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.variant} name="variant" label="Variant" onChange={handleFormData} />
        </Box>
      </FormRow>
      <FormRow>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.yearOfMake} name="yearOfMake" label="Year of Make" type={"number"}  onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.onRoadPrice} name="onRoadPrice" label="Total On Road Price" type={"number"} onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.carRegistration1} name="carRegistration1" label="Car Registration Number" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.engineNo} name="engineNo" label="Engine Number" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth value={formData.chassisNo} name="chassisNo" label="Chasis Number" onChange={handleFormData} />
        </Box>
      </FormRow>
      <FormRow>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField type={"date"} InputLabelProps={{ shrink: true }} fullWidth value={formData.bookingDate} name="bookingDate" label="Booking Date" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth type={"number"} inputProps={{ maxLength: 4 }} value={formData.bookingAmount} name="bookingAmount" label="Booking Amount" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField fullWidth type={"number"} inputProps={{ maxLength: 4 }} value={formData.balanceToBePaid} name="balanceToBePaid" label="Balance To Be Paid" onChange={handleFormData} />
        </Box>
        <Box sx={{ width: "100%", margin: "0 10px 0 10px" }}>
          <TextField type={"date"} InputLabelProps={{ shrink: true }} fullWidth value={formData.deliveryDate} name="deliveryDate" label="Car Expected Delivery Date" onChange={handleFormData} />
        </Box>
      </FormRow>
    </Container>
  );
}
