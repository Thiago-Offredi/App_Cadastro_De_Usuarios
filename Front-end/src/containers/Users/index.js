import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import Avatar from '../../assets/img2.svg'
import Seta from '../../assets/seta.svg'
import Lixeira from '../../assets/lixeira.svg'
import H1 from '../../components/Title'
import  ContainerItens  from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Container,
  Image,
  
  
  User,
} from './styles'


const Users = () => {
  // const users = [];
  const [users, setUsers] = useState([])
  const history= useHistory()


  useEffect(() => {
    // React HOOK => use Effect(efeito colateral)
    // Quando a aplicação inicia ou carrega ele é chamado 
    //Quando um estado que está no array de depedencia do  effect é alterado

    async function fecthUser() {
      const { data: allUsers } = await axios.get("http://localhost:3001/users")
      setUsers(allUsers);
    }
    fecthUser()

  }, [])
  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers);
  }
  function goBackPage(){
    history.push("/")
  }

  return (

    <Container >
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens isBlur={"true"}>
        <H1>Usuários</H1>


        <ul>
          {
            users.map(user => (
              <User key={user.id}>
                <p> {user.name}</p><p>{user.age} </p>
                <button onClick={() => deleteUser(user.id)}> <img alt="Lixeira" src={Lixeira} /></button>
              </User>
            ))}
        </ul>
        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Seta} />Voltar</Button>
      </ContainerItens>


    </Container>
  )
}
export default Users