import styled from "styled-components"
import computer from '/computerPic.jpg'
export const FirstSection = () => {
    return (
      <SectionWrapper>
        <Gradient>
            <span>ПОЧЕМУ МЫ НЕ ИСПОЛЬЗУЕМ</span>
            <span style={{alignSelf:'flex-start',marginLeft:'250px'}}>CORELDRAW</span>
        </Gradient>
        <ComputerIMG/>
      </SectionWrapper>
    );
  };
  
  const SectionWrapper = styled.section`
    display: flex;
    width: 100vw;
    height: 650px;
    position: relative;
    overflow: hidden;
  `;
  
  const Gradient = styled.div`
    position: absolute; 
    top: 0;
    left: 0;
    width: 68.22%; 
    height: 100%;
    background: linear-gradient(
        123.33deg,
        #df5017 4.42%,
        rgba(223, 80, 23, 0.440343) 22.08%,
        rgba(223, 80, 23, 0.19) 35.36%,
        rgba(223, 80, 23, 0) 52.74%
      ),
      linear-gradient(
        90.01deg,
        #282533 65.15%,
        #282533 65.15%,
        rgba(40, 37, 51, 0.739583) 82.21%,
        rgba(40, 37, 51, 0) 99.99%
      );
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 400;
    line-height: 60px;
    color: white;
    flex-direction: column;
  `;
  
  const ComputerIMG = styled.div`
    width: 1070px;
    height: 100%;
    background-image: url(${computer});
    background-size: cover;
    background-position: 50% 33%;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;
    margin-left: 44.5%;
  `;