import styled, { keyframes } from "styled-components"
import React from 'react';
import tablePic from '/tablePic.png'
import CofeePic from '/CofeePic.png'
import TVPic from '/TVPic.png'
import LeMonPic from '/LeMonPic.png'
import LewskiPic from '/LewskiPic.png'
import BibiPic from '/BibiPic.jpg'
import VegetoriaPic from '/VegetoriaPic.png'
import LezetPic from '/LezetPic.png'
import SirenPic from '/SirenPic.jpg'
import TayouPic from '/TayouPic.png'

export const SliderSection = () => {
  const initialArrayLeft: string[] = [BibiPic, VegetoriaPic, LezetPic, SirenPic, TayouPic]
  const initialArrayRight: string[] = [tablePic, CofeePic, TVPic, LeMonPic, LewskiPic]
  const updatedArrayRight = Array(23).fill(initialArrayRight).flat();
  const updatedArrayLeft = Array(23).fill(initialArrayLeft).flat();
  return (
    <SectionWrapper>
      <SliderWrapperRight>
        {updatedArrayRight.map((val, ind) => (
          <React.Fragment key={ind}>
            <ImageContainer $image={val}></ImageContainer>
          </React.Fragment>
        ))}
      </SliderWrapperRight>
      <SliderWrapperLeft>
        {updatedArrayLeft.map((val, ind) => (
          <React.Fragment key={ind}>
            <ImageContainer $image={val}></ImageContainer>
          </React.Fragment>
        ))}
      </SliderWrapperLeft>
    </SectionWrapper>
  );
};
const slideLeft = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-2400%); }
`
const slideRight = keyframes`
  0% { transform: translateX(-2400%); }
  100% { transform: translateX(100%); }
`

const SliderWrapperLeft = styled.div`
    height: 280px;
    margin-top: 20px;
    gap: 20px;
    display: flex;
    animation: ${slideLeft} 360s linear infinite;
`
const SliderWrapperRight = styled.div`
    height: 280px;
    margin-top: 80px;
    gap: 20px;
    display: flex;
    animation: ${slideRight} 350s linear infinite;
`
const ImageContainer = styled.div<{ $image?: string }>`
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-position: center;
  width:402.5px;
  height:100%;
  border-radius:20px;
  flex-shrink:0;
`
const SectionWrapper = styled.section`
  
`