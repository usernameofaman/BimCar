import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Container = styled.div`
  background-color: aliceblue;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoginBox = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Spacing = styled.div`
  margin: 10px;
`

export default function Login({ setLoggedIn }) {
  const [username, setUserName] = React.useState("")
  const [password, setPassword] = React.useState("")
  const validatePass = () => {
    if (username === "vedindia" && password === "ved"){
      localStorage.setItem("loggedIn","true")
      window.location.href = "/dashboard/car-data"
    }
    else
      window.alert("Invalid Credentials")
  }
  return (
    <Container>
      <LoginBox>
        <Spacing>
          <img src='/images/logo.png' style={{ width: "200px" }} />
        </Spacing>
        <Spacing>
          Log In
        </Spacing>
        <Spacing>
          <TextField onChange={(e) => setUserName(e.target.value)} id="outlined-basic" label="Username" variant="outlined" />
        </Spacing>
        <Spacing>
          <TextField onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" type={"password"} />
        </Spacing>

        <Button variant='contained' onClick={() => validatePass()}> Login</Button>
      </LoginBox>
    </Container>
  )
}
