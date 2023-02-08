import React, { useState, useRef } from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import People from '../../assets/pessoas.svg'
import Seta from '../../assets/seta.svg'
import H1 from '../../components/Title'
import  ContainerItens  from "../../components/ContainerItens";
import Button from "../../components/Button"
import {
  Container,
  Image,
  InputLabel,
  Input,
} from './styles'
const App = () => {
  // const users = [];
  const [users, setUsers] = useState([])
  const history= useHistory()
  const inputName = useRef()
  const inputAge = useRef()
  async function addNewUser() {
    const {data:newUser} = await axios.post("http://localhost:3001/users",
      {
        name: inputName.current.value,
        age: inputAge.current.value,
      });
      console.log(newUser);
     setUsers([...users, newUser,]);
     history.push("/usuarios")
    }
  return (
    <Container >
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel >Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome:" required="Name is required"/>
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade:" required="Age is required"/>
        <Button  onClick={addNewUser}>Cadastrar <img alt="seta" src={Seta} /></Button>
      </ContainerItens>
    </Container>
  )
}
export default App