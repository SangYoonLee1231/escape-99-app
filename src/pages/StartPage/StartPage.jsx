import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const StartPage = () => {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate('/level-select');
  };

  return (
    <MainBody>
      <TitleImage />
      <SubTitle>
        <Text>방탈출 초보부터 고수까지</Text>
        <Text>모두를 위한 방탈출 능력 미니 테스트</Text>
        <Text fontSize="small">▶︎ 응시자 수 : 2888명 (6/14 기준) ◀︎</Text>
        {/* <Text>Made by SYL</Text> */}
      </SubTitle>
      <StartButton onClick={onAboutClick}>START</StartButton>
    </MainBody>
  );
};

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 95vh;
`;

const TitleAnimation = keyframes`
  0% {
    opacity: 0.4;
    /* height: 110%;
    weight: 110%; */
  };
  15% {
    opacity: 1;
    /* height: 100%;
    weight: 100%; */
  }
  95% {
    opacity: 1;
    /* height: 100%;
    weight: 100%; */
  }
  100% {
    opacity: 0.4;
    /* height: 110%;
    weight: 110%; */
  }
`;

const TitleImage = styled.img.attrs({
  src: `./images/etc/title.png`,
  width: '300px',
  // height: '100px',
})`
  animation: ${TitleAnimation} 3s infinite;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 128px;
  margin: 4vh 0vh;
  border: 3px solid white;
  border-radius: 20px;
  background-color: black;
  color: white;
  font-family: 'SEBANG_Gothic';
  font-size: 16px;
`;

const Text = styled.span`
  font-size: ${props => props.fontSize || 'medium'};
  font-weight: 600;
  margin: 7px;
`;

const StartButton = styled.button`
  width: 150px;
  height: 60px;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 5vh;
  font-size: x-large;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid wheat;
  }
`;

export default StartPage;
