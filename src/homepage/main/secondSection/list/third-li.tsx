import { BigNumber,Text,ItemWrapper,StyledIMG } from "./first-li"
import firsterror from '/firsterror.png'
import seconderror from '/seconderror.png'
import styled from "styled-components"

export const ThirdLi=() => {
  return(
    <ColumnWrapper>
        <ItemWrapper>
            <BigNumber>3</BigNumber>
            <Text>
                Главный недостаток CorelDraw заключается в преобразовании документа во внутренний формат bitmap.
                Это особенно заметно при обработке растровых изображений, где могут возникнуть различные артефакты,
                такие как неожиданные грани, изменение цветов или полная инверсия изображения.
            </Text>
        </ItemWrapper>
        <ItemWrapper $justifycontent="center" $gap="140px">
            <ImageContainer width="255px" height="155px" $rotate={-7}><StyledIMG src={firsterror} width="100%" height="95%" alt="corelDraw filter error"/></ImageContainer>
            <ImageContainer width="261px" height="178px" $rotate={6}><StyledIMG src={seconderror} width="100%" height="95%" alt="corelDraw format error"/></ImageContainer>
        </ItemWrapper>
    </ColumnWrapper>
  )
}

const ColumnWrapper=styled.div`
    display: flex;
    flex-direction: column;
`
const ImageContainer=styled.div<{$rotate?:number,width?: string, height?: string}>`
    transform: ${({ $rotate }) =>`rotate(${$rotate}deg)`};
    width: ${({ width }) =>width};
    height: ${({ height }) =>height};
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:5px;
`