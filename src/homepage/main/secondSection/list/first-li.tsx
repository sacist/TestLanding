import styled from "styled-components"
import illustrator from '/Aill.jpg'
import pdf from '/pdf.png'
import premiere from '/premiere.png'
import photoshop from '/photoshop.jpg'
import indesign from '/indesign.png'
import aftereff from '/aftereff.jpg'


export const FirstLi = () => {
    return (
        <ItemWrapper>
            <BigNumber>1</BigNumber>
            <TextWrapper>
                <Text>Adobe - это компания, представляющая широкий спектр продуктов, среди которых вы, вероятно, знакомы с основными:</Text>
                <CollageTable>
                    <CollageItem><StyledIMG src={illustrator} width="150px" height="40px" alt="Adobe Illustrator"/></CollageItem>
                    <CollageItem><StyledIMG src={pdf} width="53.22px" height="54.25px" alt="PDF file"/></CollageItem>
                    <CollageItem><StyledIMG src={premiere} width="159.55px" height="39px" alt="Adobe Premiere"/></CollageItem>
                    <CollageItem><StyledIMG src={photoshop} height="40px" width="135px" alt="Adobe Photoshop"/></CollageItem>
                    <CollageItem><StyledIMG src={indesign} width="135px" height="39px" alt="Adobe Indesign"/></CollageItem>
                    <CollageItem><StyledIMG src={aftereff} width="146.25px" height="39px" alt="Adobe After Effects"/></CollageItem>
                </CollageTable>
                <Text $textalign="right" $fontsize="18px" $marginright="60px" $margintop="20px">а также более 90 других продуктов</Text>
            </TextWrapper>
        </ItemWrapper>
    )
}
export const ItemWrapper=styled.div<{$justifycontent?:string,$gap?:string,$margintop?:string,$marginleft?:string,$position?:string,$zindex?:number,$bottom?:string}>`
    display: flex;
    justify-content: ${({$justifycontent})=>$justifycontent};
    gap: ${({$gap})=>$gap};
    margin-top: ${({ $margintop }) =>$margintop};
    margin-left: ${({ $marginleft }) =>$marginleft};
    position: ${({$position})=>$position};
    z-index: ${({$zindex})=>$zindex};
    bottom: ${({$bottom})=>$bottom};
`
export const BigNumber = styled.div`
    font-size: 183px;
    font-weight: 700;
    background: linear-gradient(172.77deg, #8A2645 15.55%, #291725 56.17%, #171422 75.48%);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
`
export const Text = styled.div<{ $fontsize?: string, $textalign?: string, $margintop?: string, $marginright?: string,$weight?:number }>`
    font-size: 22px;
    font-size:${({ $fontsize }) =>$fontsize};
    font-weight: 400;
    font-weight: ${({ $weight }) =>$weight};
    text-align: ${({ $textalign }) =>$textalign};
    color: white;
    margin-top: 28px;
    margin-top: ${({ $margintop }) =>$margintop};
    margin-right: ${({ $marginright }) =>$marginright};
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 42px;
`
const CollageTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px 41px;
  margin-top: 41px;
`;

const CollageItem = styled.div`
  background: white;
  width: 268px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 4px 4px 10px 0px #00000040;
`;
export const StyledIMG = styled.img<{ width?: string, height?: string}>`
    width: ${({ width }) =>width};
    height: ${({ height }) =>height};
    object-fit: cover;
`