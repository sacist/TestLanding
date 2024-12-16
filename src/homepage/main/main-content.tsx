import { FirstSection } from "./firstSection/first-section"
import { useState,useEffect } from "react";
import { SectionOneMobile } from "./firstSection/mobile-version";
import { SecondSection } from "./secondSection/second-section";
import {SliderSection } from "./thirdSection/third-section";
import styled from "styled-components";

export const MainContent=() => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 830);


    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 830);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return(
    <>
    {isMobile?(<SectionOneMobile/>)
    :(
    <MainWrapper> 
      <FirstSection/>
      <SecondSection/>
      <SliderSection/>
    </MainWrapper>
    )}
    </>
  )
}

const MainWrapper=styled.main`
`