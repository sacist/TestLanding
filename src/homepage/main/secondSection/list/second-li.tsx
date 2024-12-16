import { Text,BigNumber,ItemWrapper } from "./first-li"


export const SecondLi=() => {
  return(
    <ItemWrapper> 
        <BigNumber>2</BigNumber>
        <Text $margintop='80px'>
            Поддержка CorelDraw практически отсутствует в Европе и США,
            поскольку более 98% типографий в этих регионах не используют данный формат.
        </Text>
    </ItemWrapper>
  )
}

