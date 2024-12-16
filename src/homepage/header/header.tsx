import styled from "styled-components";
import { HeaderNav } from "./header-navigation";
import { AuthButtons } from "./auth-buttons";
export const Header=() => {

  
  return(
    <HeaderWrapper>
      <HeaderNav/>
      <AuthButtons/>
    </HeaderWrapper>
  )
}

const HeaderWrapper=styled.header`
    width: 100vw;
    height: 8.395vh;
    background: linear-gradient(90.09deg, #9E0B37 0.98%, #FFC531 72.22%, #9E0B37 99.95%);
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      width: 100vw;
    }
    `
