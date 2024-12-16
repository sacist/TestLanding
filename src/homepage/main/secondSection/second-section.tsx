import styled from "styled-components"
import { SecondSecTitle } from "./title"
import { SecondSecList } from "./list/list"
import { SideContent } from "./side-content"
export const SecondSection=() => {
  return(
    <SectionWrapper>
      <Wrapper>
          <SecondSecTitle/>
          <SecondSecList/>
      </Wrapper>
      <SideContent/>
    </SectionWrapper>
  )
}

const Wrapper=styled.div`
    width: 1180px;
    display: flex;
    flex-direction: column;
    margin-left: 250px;
`
const SectionWrapper=styled.section`  
    display: flex;
    margin-top: 100px;
`