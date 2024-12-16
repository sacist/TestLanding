import { ItemWrapper,StyledIMG } from "./first-li"
import pdf from '/pdf.png'
import AILogo from '/AILogo.png'
import CorelLogo from '/CorelLogo.png'
import AIPic1 from '/AIPic1.png'
import AIPic2 from '/AIPic2.png'
import AIPic3 from '/AIPic3.png'
import CorellPic from '/CorellPic.png'
import styled from "styled-components"


export const ThirdLiSubItem=() => {
    return(
      <>   
        <ItemWrapper $margintop="30px" $marginleft="515px" $gap="19px">
          <svg width="137" height="46" viewBox="0 0 137 46" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop:'45px'}}>
              <path d="M0.997898 43.4371C2.10383 42.3862 3.19883 41.3465 4.30477 40.2956C4.37713 39.95 4.55001 39.6361 4.87983 39.4086C5.47352 38.9992 6.01148 38.5796 6.56072 38.1709L13.9192 31.1873C15.2223 29.9555 17.0734 31.7712 15.9166 33.123C14.8145 34.4183 13.6444 35.6258 12.4509 36.767C52.8159 22.708 93.7044 10.1412 135.407 0.617642C136.05 0.474191 136.32 1.43679 135.679 1.60247C92.2144 12.9207 49.1394 25.6664 7.09101 41.5077C6.7079 41.8804 6.30257 42.2535 5.91946 42.6263C9.57013 42.2689 13.2208 41.9115 16.8827 41.565C18.6806 41.4034 18.6907 44.1705 16.9264 44.3426C11.9668 44.854 7.00644 45.3209 2.0352 45.799C0.825712 45.9181 0.154421 44.2171 0.99754 43.4149L0.997898 43.4371Z" fill="white"/>
          </svg>
          <ShadowBall><StyledIMG src={pdf} width="54px" height="54px"/></ShadowBall>
          <svg width="137" height="46" viewBox="0 0 137 46" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop:'45px'}}>
              <path d="M135.947 43.4371C134.841 42.3862 133.746 41.3465 132.64 40.2956C132.568 39.95 132.395 39.6361 132.065 39.4086C131.471 38.9992 130.933 38.5796 130.384 38.1709L123.026 31.1873C121.723 29.9555 119.871 31.7712 121.028 33.123C122.13 34.4183 123.3 35.6258 124.494 36.767C84.1289 22.708 43.2405 10.1412 1.53736 0.617642C0.895045 0.474191 0.624319 1.43679 1.26629 1.60247C44.7304 12.9207 87.8054 25.6664 129.854 41.5077C130.237 41.8804 130.642 42.2535 131.025 42.6263C127.375 42.2689 123.724 41.9115 120.062 41.565C118.264 41.4034 118.254 44.1705 120.018 44.3426C124.978 44.854 129.938 45.3209 134.91 45.799C136.119 45.9181 136.79 44.2171 135.947 43.4149L135.947 43.4371Z" fill="white"/>
          </svg>
        </ItemWrapper>
        <ItemWrapper $marginleft="330px" $gap="581px"  $position="sticky" $zindex={12302130}>
          <ShadowBall><StyledIMG src={AILogo} width="54px" height="54px"/></ShadowBall>
          <ShadowBall><StyledIMG src={CorelLogo} width="54px" height="54px"/></ShadowBall>
        </ItemWrapper>
        <ItemWrapper $gap="18px" $position="relative" $bottom="10px">
          <AiVSCorellPics $image={AIPic1}></AiVSCorellPics>
          <AiVSCorellPics $image={AIPic2}></AiVSCorellPics>
          <AiVSCorellPics $image={AIPic3}></AiVSCorellPics>
          <AiVSCorellPics $image={CorellPic} $marginleft="166px"></AiVSCorellPics>
        </ItemWrapper>
      </>

)}

const ShadowBall=styled.div`
    width: 97px;
    height: 97px;
    border-radius:50%;
    background: linear-gradient(147.64deg, #FFFFFF 30.8%, #C1C0C4 57.13%, #86848D 72.92%, #343140 82.7%);
    box-shadow: -4px -4px 6px 0px #FFFFFF80 inset;
    box-shadow: -3px -3px 20px 0px #FFFFFF2E;
    box-shadow: 10px 10px 20px 0px #000000CC;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AiVSCorellPics=styled.div<{$image?:string,$marginleft?:string}>`
  background-image: ${({ $image }) =>`url(${$image})`};
  background-size: cover;
  background-position: center;
  width:246px;
  height:350px;
  border-radius:10px;
  margin-left: ${({ $marginleft }) =>$marginleft};
`