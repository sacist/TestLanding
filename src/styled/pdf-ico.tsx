import styled from 'styled-components';

const PDFIconContainer = styled.div`
  width: 100px;
  height: 120px;
  position: relative;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PDFLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: #e21b1b;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  font-family: Arial, sans-serif;
`;

const PDFLogo = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #e21b1b;
  font-family: "Arial", sans-serif;
  text-transform: uppercase;
`;

const PDFIcon = () => {
  return (
    <PDFIconContainer>
      <PDFLabel>PDF</PDFLabel>
      <PDFLogo>⭳</PDFLogo>
    </PDFIconContainer>
  );
};

export default PDFIcon;