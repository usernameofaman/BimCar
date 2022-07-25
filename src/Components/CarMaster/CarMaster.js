import * as React from 'react';
import styled from 'styled-components'
import Table from './Table'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export default function CarMaster() {
    const [carMasterData, setCarMasterData] = React.useState([
        {
            carInfo: {
                DateOfPurchase: "1 October 2019",
                make: "Toyota",
                model: "Etios",
                variant: "NT",
                carRegistration1: "DL01JH9339",
                engineNo: "IJEEKOKLKKO933884",
                chassisNo: "CHASSYNUMBER22339934",
                registrationExpiry: "1 December 2023",
                yearOfMake: "2017",
                yearOfRegistration: "2017",
                state : "MP",
                id: "3378282728"
            },
            id: "alphatata"
        },
        {
            carInfo: {
                DateOfPurchase: "1 October 2019",
                make: "Hyundai",
                model: "i10",
                variant: "Nios",
                carRegistration1: "DL04HK2939",
                engineNo: "UDDJFIKKSJ223839",
                chassisNo: "CHASSYNUMBER2232234",
                registrationExpiry: "12 January 2023",
                yearOfMake: "2017",
                yearOfRegistration: "2017",
                state : "MP",
                id: "338373739"
            },
            id: "alphatatabase"
        },
        {
            carInfo: {
                DateOfPurchase: "1 October 2019",
                make: "Hyundai",
                model: "Creta",
                variant: "LX",
                carRegistration1: "DL02JH9239",
                engineNo: "ENGINECRETA",
                chassisNo: "CHASSYCRETA",
                registrationExpiry: "1 July 2023",
                yearOfMake: "2018",
                yearOfRegistration: "2019",
                state : "DL",
                id: "i93hhdd8993kkd"
            },
            id: "alphacreta"
        },
        {
            carInfo: {
                DateOfPurchase: "1 October 2019",
                make: "Mahindra",
                model: "Bolero",
                variant: "NX",
                carRegistration1: "DL04HK3333",
                engineNo: "ENGINEBOLERO",
                chassisNo: "CHASSIBOLERO",
                registrationExpiry: "12 November 2022",
                yearOfMake: "2018",
                yearOfRegistration: "2019",
                state : "DL",
                id: "338373ueej739"
            },
            id: "alphabolero"
        },

        
    ])
    return (
        <Container>
            <Table data = { carMasterData } updateData={setCarMasterData}/>
        </Container>
    );
}
