import styled from 'styled-components'
import Background from '../../assets/bg2.svg'


export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
min-height: 100vh;
height: 100%;
`;

export const Image = styled.img`
margin-top:30px ;
`;

export const H1 = styled.h1`

font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 40px;
text-align: center;
color: #FFFFFF;
margin-bottom:80px;

`





export const User = styled.li` 
    display: flex;
    justify-content: space-around;
    align-items: center ;
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 20px;
    p{
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`