import styled from "styled-components"

export const SecondSecTitle=() => {
  return(
    <TitleWrapper>
        <TitleText>В мире дизайна мы сделали выбор в пользу Adobe, оставив за бортом формат CorelDraw.</TitleText>
        <TitleText>Давайте разберем, почему именно Adobe стал нашим надежным союзником в творчестве.</TitleText>
    </TitleWrapper>
  )
}
const TitleWrapper=styled.div`
    width: 100%;
    height: 152px;
    border-radius: 30px;
    background: linear-gradient(90.95deg, #FFA462 0%, #B45350 21.79%, #8A2645 48.93%, #291725 84.55%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
`
const TitleText=styled.span`
    font-size: 22px;
    font-weight: 400;
    line-height: 30.8px;
    text-decoration-skip-ink: none;
    color: white;
`