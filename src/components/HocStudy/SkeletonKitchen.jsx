import React from "react";
import styled from "styled-components";
// import { CardsContainer } from './DishGrid';
// import theme from '../ui/theme';

const ContainerStyle = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const Card = styled.div`
  width: 220px;
  margin: 0 1rem 1rem 0;
`;

const ImageContainerStyle = styled.div`
  margin-bottom: 1.2rem;
`;

const ImageStyle = styled.div`
  padding-bottom: 99.95%;
  position: relative;
  overflow: hidden;
  width: 100%;
  background: ${theme.color.lightGray};
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const TextStyle = styled.div`
  height: 1rem;
  margin: 0.5rem 0;
  width: ${(props) => props.width}%;
  background: ${theme.color.lightGray};
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
`;

const Category = styled.div`
  height: 40px;
  margin: 0.5rem;
  width: ${(props) => props.width}px;
  background: ${theme.color.lightGray};
  border-radius: 20px;
  flex-grow: 0;
`;

const Skeleton = () => {
  const cards = [];
  for (let i = 0; i < 10; i = i + 1) {
    cards.push(
      <Card key={i}>
        <ImageContainerStyle>
          <ImageStyle />
        </ImageContainerStyle>
        <TextStyle width={Math.random() * 60 + 40} />
        <TextStyle width={Math.random() * 60 + 40} />
      </Card>
    );
  }

  const categories = [];
  for (let i = 0; i < 6; i = i + 1) {
    categories.push(<Category key={i} width={Math.random() * 50 + 100} />);
  }

  return (
    <ContainerStyle>
      <Categories>{categories}</Categories>
      {/* <CardsContainer>{cards}</CardsContainer> */}
    </ContainerStyle>
  );
};

export default Skeleton;
