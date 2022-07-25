import React, { useEffect } from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Styled from "styled-components";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { verifyLocalStorageObjectData } from "../../managers/utility";
import General from "./Groups/General";
import { makeid } from "../../managers/utility";
import Customer from "./Groups/Customer";
import CarData from "./Groups/CarData";
import Finance from "./Groups/Finance";

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
`;

const SubmitBox = Styled.div`
  display: flex;
  justify-content: center;
  margin-top : 10px;
  padding: 20px 0 40px 0;
`;

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    // borderBottom: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function EditCarAcquisition() {
  useEffect(() => {
    getEditData();
  }, []);

  const getEditData = async () => {
    //     let data
    //     if(window.location.pathname.includes("edit-car-master")){
    //       data = await verifyLocalStorageObjectData("carMaster")
    //     }
    //     let url = window.location.pathname.split("/")
    //     data.map((item) => {
    //       if(item.id === url[url.length-1]){
    //         console.log("DATAIS",item.carInfo)
    //         setCarInfo(item.carInfo)
    //       }
    //   })
  };

  const addCarMasterData = async () => {
    let customerData = await verifyLocalStorageObjectData("car-acq-customer");
    let financeData = await verifyLocalStorageObjectData("car-acq-finance");
    let generalData = await verifyLocalStorageObjectData("car-acq-general");
    let cardata = await verifyLocalStorageObjectData("car-acq-cardata");
    let acqData = { ...cardata, customerData: customerData, financeData: financeData, generalData: generalData };
    let tableData = localStorage.getItem("carAcquisition");
    if (!tableData) tableData = [];
    tableData = JSON.parse(tableData);
    tableData.push(acqData);
    console.log(tableData);
    localStorage.setItem("carAcquisition", JSON.stringify(tableData));
    localStorage.removeItem("car-acq-customer");
    localStorage.removeItem("car-acq-finance");
    localStorage.removeItem("car-acq-general");
    localStorage.removeItem("car-acq-cardata");
    window.location.pathname = "/dashboard/car-acquisition"

  };

  return (
    <Container>
      <SubmitBox>
        <Typography style={{ margin: "10px 0 10px 0" }} variant="h4">
          Car Acquisition
        </Typography>
      </SubmitBox>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>General Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <General />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Customer Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Customer />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Car Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CarData />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Finance Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Finance />
        </AccordionDetails>
      </Accordion>
      <SubmitBox>
        <Button onClick={addCarMasterData} variant="contained">
          Submit
        </Button>
      </SubmitBox>
    </Container>
  );
}
