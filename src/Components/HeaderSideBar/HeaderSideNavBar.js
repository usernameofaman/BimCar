import React, { useState } from 'react'
import Header from './Header'
import styled from 'styled-components'
import AllCars from '../CarsList/AllCars'
import AddNewCar from '../CarsList/AddNewCar'
import Menu3 from '../OptionalMenu/Menu3'
import CarDetails from '../CarsList/CarDetails'
import CarMaster from '../CarMaster/CarMaster'
import AddCarMaster from '../CarMaster/AddCarMaster'
import CarAcquisition from '../CarAcquisition/CarAcquisition'
import AddCarAcquisition from '../CarAcquisition/AddCarAcquisition'
import SellCar from '../CarSelling/CarSale'
import AddSellCar from '../CarSelling/AddCarSelling'


const Container = styled.div`
  width : 100%;
  height : 100vh;
  display : flex;
`

const HomeComponent = ({ selectedMenu }) => {
  let url = window.location.pathname;
  url = url.split("/")
  return (
    
    <>
      {url.includes("car-data") && <AllCars/>}
      {url.includes("add-new-car") && <AddNewCar/>}
      {url.includes("car-details") && <CarDetails/>}
      {url.includes("car-master") && <CarMaster/>}
      {url.includes("add-car-master") && <AddCarMaster/>}
      {url.includes("edit-car-master") && <AddCarMaster/>}
      {url.includes("car-acquisition") && <CarAcquisition/>}
      {url.includes("add-car-acquisition") && <AddCarAcquisition/>}
      {url.includes("sell-car") && <SellCar/>}
      {url.includes("add-sell-car") && <AddSellCar/>}
      {selectedMenu === "OPTION4" && <Menu3/>}
    </>
  )
}

export default function HeaderSideNavBar() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  return (
    <>
      <Header setHamburgerMenu={setHamburgerMenu} hamburgerMenu={hamburgerMenu}/>
      <Container>
        <HomeComponent>
        </HomeComponent>
      </Container>
    </>

  )
}
