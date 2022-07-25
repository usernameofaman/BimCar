import React, { useEffect } from 'react'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CarInfo from './Groups/CarInfo';
import Status from './Groups/Status';
import Insurance from './Groups/Insurance';
import Styled from 'styled-components'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIos'
import PurchaseDetails from './Groups/PurchaseDetails';
import Finance from './Groups/Finance';
import Pictures from './Groups/Pictures';
import OwnerShipExternal from './Groups/OwnershipExternal';
import OwnerShipInternal from './Groups/OwnershipInternal'
import ServiceData from './Groups/ServiceData';
import TyreBattery from './Groups/TyreBattery';
import { Button } from '@mui/material';
import ExpenseIdle from './Groups/ExpenseIdle';
import { verifyLocalStorageObjectData } from '../../managers/utility';
import { makeid } from '../../managers/utility';

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
`

const SubmitBox = Styled.div`
  display: flex;
  justify-content: center;
  margin-top : 10px;
  padding: 20px 0 40px 0;
`


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function AddCarMaster() {

  useEffect(() => {
      getEditData()
  },[])

  const getEditData = async () => {
    let data
    if(window.location.pathname.includes("edit-car-master")){
      data = await verifyLocalStorageObjectData("carMaster")
    }
    let url = window.location.pathname.split("/")
    data.map((item) => {
      if(item.id === url[url.length-1]){
        console.log("DATAIS",item.carInfo)
        setCarInfo(item.carInfo)
      }
  })}

  const [carInfo, setCarInfo] = React.useState({

  })

  const [carStatus, setCarStatus] = React.useState({

  })

  const [insuranceDetails, setInsuranceDetails] = React.useState({

  })

  const [puchaseDetails, setPurchaseDetails] = React.useState({

  })
  const [financeDetails, setFinanceDetails] = React.useState({

  })
  const [OwnershipInternal, setOwnershipInternal] = React.useState({

  })
  const [OwnershipExternal, setOwnershipExternal] = React.useState({

  })
  const [serviceData, setServiceData] = React.useState({

  })
  const [tyreBatteryData, setTyreBatteryData] = React.useState({

  })

  const [expenseIdleData, setExpenseIdleData] = React.useState({

  })


  const addCarMasterData = () => {
    let data = localStorage.getItem("carMaster");
    if (data)
      data = JSON.parse(data)
    else
      data = []

    data.push({
      carInfo: carInfo,
      carStatus: carStatus,
      insuranceDetails: insuranceDetails,
      puchaseDetails: puchaseDetails,
      OwnershipInternal:OwnershipInternal,
      OwnershipExternal:OwnershipExternal,
      serviceData:serviceData,
      tyreBatteryData:tyreBatteryData,
      expenseIdleData:expenseIdleData
    })
    localStorage.setItem("carMaster", JSON.stringify(data))
    window.location.pathname = "/dashboard/car-master"
  }

  return (
    <Container>
      <SubmitBox>
        <Typography style={{ margin: "10px 0 10px 0" }} variant='h4'>{window.location.pathname.includes("edit-car-master") ? "Edit Car Master" : "Add Car To Car Master" }</Typography>
      </SubmitBox>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Car Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CarInfo carInfo={carInfo} setCarInfo={setCarInfo} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Status setCarStatus={setCarStatus} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Insurance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Insurance setInsuranceDetails={setInsuranceDetails} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Purchase Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PurchaseDetails setPurchaseDetails={setPurchaseDetails} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Finance Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Finance financeDetails={financeDetails} setFinanceDetails={setFinanceDetails} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Pictures</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Pictures />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ownership Internal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <OwnerShipInternal setOwnershipInternal={setOwnershipInternal} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ownership External</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <OwnerShipExternal setOwnershipExternal={setOwnershipExternal} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Service Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ServiceData setServiceData={setServiceData} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Tyre Battery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TyreBattery setTyreBatteryData={setTyreBatteryData} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Expense while idle</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ExpenseIdle setExpenseIdleData={setExpenseIdleData} />
        </AccordionDetails>
      </Accordion>
      <SubmitBox>
        <Button onClick={addCarMasterData} variant='contained'>Submit</Button>
      </SubmitBox>
    </Container>
  )
}
