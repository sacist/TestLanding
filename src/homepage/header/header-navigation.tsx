import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';
import { setSelectedPage,$selectedPage } from "../../store/select-store";
import { useUnit } from "effector-react";

export const HeaderNav=() => {
    const selectedPage=useUnit($selectedPage)
    console.log(1);
  return(
    <NavWrapper>
        <StyledLink to='/' selected={selectedPage===1} onClick={()=>setSelectedPage(1)}>Направления</StyledLink>
        {selectedPage===1 && <PageIndictor>{'⌵'}</PageIndictor>}
        <StyledLink to='/portfolio' selected={selectedPage===2} onClick={()=>setSelectedPage(2)}>Портфолио</StyledLink>
        {selectedPage===2 && <PageIndictor>{'⌵'}</PageIndictor>}
        <StyledLink to='/contacts' selected={selectedPage===3} onClick={()=>setSelectedPage(3)}>Контакты</StyledLink>
        {selectedPage===3 && <PageIndictor>{'⌵'}</PageIndictor>}
    </NavWrapper>
  )
}
const NavWrapper=styled.div`
    display: flex;
    align-items: center;
    color: white;
    margin-left:12%;
    gap: 30%;
    @media (max-width: 768px) {
      margin-left: 2%;
      gap: 20%;
      width: 20%;
    }
  `
  const StyledLink = styled(RouterLink)<{ selected?:boolean}>`
    font-size: 16px;
    font-weight: 400; 
    text-decoration: none;
    font-family: ${({ selected }) => (! selected &&'"Abel", sans-serif')};
    color: white;
    @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;  
  }
  `;
  const PageIndictor=styled.div`
    rotate: -90deg;
    margin-left: -27%;
    cursor: default;
    user-select: none;
    @media (max-width: 768px) {
      margin-left: -17%;
    }
  `