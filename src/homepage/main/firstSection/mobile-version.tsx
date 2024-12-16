import styled from 'styled-components';

export const SectionOneMobile = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Title>ПОЧЕМУ МЫ НЕ ИСПОЛЬЗУЕМ CORELDRAW</Title>
        </TitleWrapper>
        <Text>
          В мире дизайна мы сделали выбор в пользу Adobe, отказавшись от формата CorelDraw. Давайте разберемся, почему именно Adobe стал нашим надежным союзником в творчестве.
        </Text>
        <NumberedList>
          <ListItem>
            <ListNumber>1</ListNumber>
            <ListText>
              Adobe — это компания, представляющая широкий спектр продуктов, среди которых вы, вероятно, знакомы с основными:
              <ul>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Premiere</li>
                <li>Adobe After Effects</li>
                <li>Adobe InDesign</li>
              </ul>
            </ListText>
          </ListItem>
          <ListItem>
            <ListNumber>2</ListNumber>
            <ListText>
              Более тысячи специалистов по всему миру активно участвуют в разработке и обеспечении высокого качества продуктов Adobe, что делает их надежным инструментом для создания креативных проектов.
            </ListText>
          </ListItem>
          <ListItem>
            <ListNumber>3</ListNumber>
            <ListText>
              Главный недостаток CorelDraw заключается в невозможности трансформировать документ по внутренним форматам растровых изображений. Это приводит к невозможности точной работы с изображениями и графическими элементами.
            </ListText>
          </ListItem>
          <ListItem>
            <ListNumber>4</ListNumber>
            <ListText>
              Современная лицензия CorelDraw может оцениваться в 600 долларов в год, что делает этот продукт дорогим для многих пользователей, особенно при наличии более дешевых и функциональных альтернатив.
            </ListText>
          </ListItem>
          <ListItem>
            <ListNumber>5</ListNumber>
            <ListText>
              Работа с CorelDraw требует значительного времени на обучение, а также знаний о его специфике и функционале, что делает процесс обучения и работы не таким гибким и быстрым.
            </ListText>
          </ListItem>
        </NumberedList>
      </ContentWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  width: 100%;
  height: auto;
  padding: 50px 10%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 40px 5%;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: white;
  line-height: 1.3;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin-bottom: 40px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const NumberedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style-type: none;
  padding-left: 0;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: calc(20% - 30px);
  padding: 15px 90px;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 80%;
    padding: 10px 20px;
  }
`;

const ListNumber = styled.div`
  font-size: 120px;
  font-weight: 700;
  color: white;
  margin-right: 15px;
  background: linear-gradient(172.77deg, #8A2645 15.55%, #291725 56.17%, #171422 75.48%);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
`;

const ListText = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
