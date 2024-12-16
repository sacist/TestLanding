import styled from "styled-components"
import computerPic from '/computerPic.jpg'
import asidePic1 from '/asideContentPic1.jpg'
import asidePic2 from '/asideContentPic2.jpg'
import { Text } from "./list/first-li"
export const SideContent = () => {
    const textArray: Array<string> = ['почему мы не используем', 'в команде Creat работают', 'откуда мы черпаем идеи', 'в команде Creat работают']
    const textArrayCapital: Array<string> = ['CorelDraw', 'только лучшие', 'для дизайна', 'только лучшие']
    const picsArray: Array<string> = [computerPic, asidePic1, asidePic2, asidePic1]
    return (
        <AsideWrapper>
            {textArray.map((val, ind) => (
                    <AsideItem $image={picsArray[ind]} key={ind}>
                            <AsideItemElement>
                                <AsideItemElementTextWrapper>
                                    <Text $fontsize="11px" $margintop="0" $weight={700}>{val}</Text>
                                    <Text $fontsize="13.39px" $margintop="0" $weight={700}>{textArrayCapital[ind]}</Text>
                                </AsideItemElementTextWrapper>
                                <AsideItemElementButton>⭢</AsideItemElementButton>
                            </AsideItemElement>
                            <Gradient></Gradient>
                    </AsideItem>
            ))}
        </AsideWrapper>
    )
}

const AsideWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    width: 220px;
    margin-left: 20px;
    gap: 10px;
`
const AsideItem = styled.div<{ $image?: string }>`
    width: 220px;
    height: 220px;
    background-image: ${({ $image }) => `url(${$image})`};
    display:flex;
    background-size: cover;
    justify-content:center;
    border-radius:14.35px;
    position:relative;
`
const AsideItemElement = styled.div`
    border: 0.96px solid #FFFFFF;
    box-shadow: 1.91px 1.91px 9.57px 0px #FFFFFFCC;
    border-radius: 23.91px;
    width: 207.57px;
    height: 35.87px;
    margin-top: 170px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    z-index: 2;
`
const AsideItemElementTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`
const AsideItemElementButton = styled.button`
    width: 35.87px;
    height: 35.87px;
    border-radius: 23.91px;
    background: linear-gradient(91.25deg, #DF5017 -4.25%, #F9CB74 108.11%);
    box-shadow: 1.91px 1.91px 2.87px 0px #FFFFFF80 inset;
    box-shadow: 1.91px 1.91px 9.57px 0px #DF5017;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
`
const Gradient=styled.div`
    background: linear-gradient(180deg, rgba(23, 20, 34, 0) 0%, rgba(23, 20, 34, 0.9) 55.17%);
    width: 220px;
    height: 110.96px;
    border-radius: 0px 0px 14.35px 14.35px;
    opacity: 0px;
    position: absolute;
    top: 120px;
    z-index: 1;
`