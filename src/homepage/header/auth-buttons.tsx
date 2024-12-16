import styled from "styled-components"


export const AuthButtons=() => {
  
    return(
        <ButtonsWrapper>
            <LoginButton>Войти</LoginButton>
            <RegistrationButton>Регистрация</RegistrationButton>
        </ButtonsWrapper>
    )
}

const ButtonsWrapper=styled.div`
    margin-left: 45%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      margin-left: 40%;
      flex-direction: column-reverse;
    }
`
const LoginButton=styled.button`
    color: white;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 15.31px;
    text-align: left;
    text-decoration-skip-ink: none;
    @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 7px;
    color: #271616;
  }

  @media (max-width: 480px) {
    font-size: 12px;  
  }
`
const RegistrationButton=styled.button`
    background: #9E0B37B3;
    box-shadow: 
    4px 4px 6px 0px #FFFFFF80 inset,
    4px 4px 20px 0px #DF5017CC;
    padding: 24px 72px 24px 72px;
    border-radius:40px;
    border: none;
    font-size: 17px;
    font-weight: 400;
    color: white;
    width: 160px;
    height: 49px;
    cursor: pointer ;
    margin-left: 19%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      padding: 16px 48px;
      font-size: 14px;
      width: 140px; 
      height: 44px; 
      background: transparent;
      border: none;
      box-shadow: none;
      color: #271616;
      padding: 0px 0px 0px 0px;
  }

  @media (max-width: 480px) {
    font-size: 12px; 
    width: 120px;    
    height: 40px;    
  }
`