import React from 'react'
import styled from 'styled-components'
import Table from "./Table"


const Container = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  margin-top: 10px;
  padding : 0 20px 0 20px;
`



export default function AllCars() {

  return (
    <Container>
      <Table/>
    </Container>
  )
}