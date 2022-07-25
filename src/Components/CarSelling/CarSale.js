import React from 'react'
import Table from './Table'
import styled from 'styled-components'


const Container = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  margin-top: 10px;
  padding : 0 20px 0 20px;
`


export default function CarAcquisition() {
  return (
    <Container>
      <Table />
    </Container>
  )
}
