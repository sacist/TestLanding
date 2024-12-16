import styled from "styled-components"
import { FirstLi } from "./first-li"
import { SecondLi } from "./second-li"
import { ThirdLi } from "./third-li"
import { Text } from "./first-li"
import { ThirdLiSubItem } from "./third-li-sub-item"
import { FourthLi } from "./fourth-li"
import { FifthLi } from "./fifth-li"
export const SecondSecList = () => {

  return (
    <StyledList>
      <StyledListItem>
        <FirstLi />
        <Text $margintop="40px">
          Более тысячи специалистов по всему миру
          активно участвуют в разработке и обеспечивают
          высокое качество продуктов и их разнообразные возможности.
        </Text>
        <Text $margintop="20px">В то время как CorelDraw ограничивается только CorelDraw.</Text>
      </StyledListItem>
      <StyledListItem $margintop="20px">
        <SecondLi />
      </StyledListItem>
      <StyledListItem $margintop="20px">
        <ThirdLi />
        <Text>
          В отличие от этого, Illustrator лишен подобных неожиданностей и обладает полной совместимостью с
          форматами PDF и EPS, необходимыми для полиграфии. Важно отметить, что, несмотря на
          возможность сохранения файлов в формате PDF, CorelDraw плохо распознает PDF файлы, что может
          привести к потере некоторых элементов макета. Поэтому при подготовке макета для офсетной
          полиграфии Illustrator остается оптимальным выбором.
        </Text>
        <ThirdLiSubItem></ThirdLiSubItem>
      </StyledListItem>
      <StyledListItem>
        <FourthLi />
      </StyledListItem>
      <StyledListItem>
        <FifthLi />
        <Text $margintop="40px">
        Используя среду Adobe, мы вкладываемся в инновации, качество и признание в мировом масштабе. Присоединяйтесь
        к нам в этом увлекательном путешествии в мир творчества, где каждый проект становится настоящим произведением
        искусства.
        </Text>
      </StyledListItem>
    </StyledList>
  )
}

const StyledList = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;
const StyledListItem = styled.li<{ $margintop?: string }>`
  display: block;
  width: 100%;
  display: flex;
  flex-direction:column;
  margin-top: ${({ $margintop }) => $margintop};
`;