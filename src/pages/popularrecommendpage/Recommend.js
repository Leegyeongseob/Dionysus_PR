import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import img1 from "../../img/popularrecommendpageimg/pexels-markusspiske-121191.jpg";
import bg from "../../img/popularrecommendpageimg/pexels-pixabay-2145.jpg";

// Container 스타일 컴포넌트를 생성합니다.
const Container = styled.div`
  width: 100%; // 너비를 100%로 설정합니다.
  display: flex; // 플렉스 박스로 설정합니다.
  flex-direction: column; // 세로 방향으로 아이템을 배치합니다.
  justify-content: center; // 수직 가운데 정렬합니다.
  align-items: center; // 수평 가운데 정렬합니다.
  margin: 0 auto; // 좌우 여백을 자동으로 설정합니다.
  padding: 20px; // 안쪽 여백을 설정합니다.
  position: absolute; // 상대적인 위치를 설정합니다.
  h1 {
    width: 280px; // 너비를 300px로 설정합니다.
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray; // 배경색을 회색으로 설정합니다.
    font-size: 21px; // 글꼴 크기를 설정합니다.
    margin: auto; // 가운데 정렬합니다.
    margin-bottom: 20px; // 하단 여백을 설정합니다.
    border-radius: 20px; // 테두리의 둥근 정도를 설정합니다.
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
  }
`;

// WineContainer 스타일 컴포넌트를 생성합니다.
const WineContainer = styled.div`
  width: auto;
  height: auto;
  display: flex; // 플렉스 박스로 설정합니다.
  justify-content: center; // 수평 가운데 정렬합니다.
  align-items: center; // 수직 가운데 정렬합니다.
  flex-wrap: wrap; // 아이템이 넘칠 경우 줄 바꿈을 합니다.
  gap: 20px; // 아이템 사이의 간격을 설정합니다.
  margin: 30px;
`;

// WineItem 스타일 컴포넌트를 생성합니다.
const WineItem = styled.div`
  width: ${({ isBig }) =>
    isBig ? "855px" : "400px"}; // isBig에 따라 너비를 설정합니다.
  height: ${({ isBig }) =>
    isBig ? "600px" : "300px"}; // isBig에 따라 높이를 설정합니다.
  background-color: ${({ bgColor }) =>
    bgColor}; // isBig에 따라 배경색을 설정합니다.
  /* display: flex; // 플렉스 박스로 설정합니다.
  flex-direction: row; // 세로 방향으로 아이템을 배치합니다.
  justify-content: center; // 수직 가운데 정렬합니다.
  align-items: center; // 수평 가운데 정렬합니다. */
  cursor: pointer; // 포인터 모양의 커서를 설정합니다.
  transition: all 0.5s ease; // 전환 효과를 설정합니다.
  top: ${({ isBig }) => (isBig ? "120px" : "0")};
  position: ${({ isBig }) =>
    isBig ? "absolute" : "relative"}; // isBig에 따라 위치를 설정합니다.
  z-index: ${({ isBig }) =>
    isBig ? "2" : "1"}; // isBig에 따라 z-index 값을 설정합니다.
  border-radius: 5% 5%;
`;

const ItemTitle = styled.div`
  width: 100%;
  height: 148px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemTitleText = styled.p`
  margin-top: 20px;
  font-size: ${({ isBig }) => (isBig ? "20px" : "25px")};
`;
// WineItemImage 스타일 컴포넌트를 생성합니다.
const WineItemImage = styled.img`
  margin-top: 5px;
  width: 100%;
  height: 100%;
  object-fit: fill; // 이미지가 요소에 맞게 잘릴 수 있도록 설정합니다.
  border-radius: 0 0 5% 5%;
`;

// Input 스타일 컴포넌트를 생성합니다.
const Input = styled.input`
  width: 600px; // 너비를 600px로 설정합니다.
  padding: 8px; // 안쪽 여백을 설정합니다.
  text-align: center; // 텍스트를 가운데 정렬합니다.
  margin-bottom: 20px; // 하단 여백을 설정합니다.
  border: 1px solid #ccc; // 테두리 스타일을 설정합니다.
  border-radius: 4px; // 테두리의 둥근 정도를 설정합니다.
  font-size: 16px; // 글꼴 크기를 설정합니다.
  @media (max-width: 700px) {
    width: 300px;
    height: 30px;
  }
`;

// List 스타일 컴포넌트를 생성합니다.
const List = styled.ul`
  width: 600px; // 너비를 600px로 설정합니다.
  border: 10px solid white; // 테두리 스타일을 설정합니다.
  list-style: none; // 리스트 스타일을 제거합니다.
  padding: 0; // 안쪽 여백을 제거합니다.
  margin: auto; // 가운데 정렬합니다.
`;

// ListItem 스타일 컴포넌트를 생성합니다.
const ListItem = styled.li`
  display: flex; // 플렉스 박스로 설정합니다.
  align-items: center; // 수직 가운데 정렬합니다.
  padding: 10px; // 안쪽 여백을 설정합니다.
  border-bottom: 1px solid #ccc; // 아이템 사이에 경계선을 설정합니다.
`;

// ItemImage 스타일 컴포넌트를 생성합니다.
const ItemImage = styled.img`
  width: 50px; // 너비를 50px로 설정합니다.
  height: 50px; // 높이를 50px로 설정합니다.
  margin-right: 10px; // 오른쪽 여백을 설정합니다.
  object-fit: cover; // 이미지가 요소에 맞게 잘릴 수 있도록 설정합니다.
`;

// ItemDescription 스타일 컴포넌트를 생성합니다.
const ItemDescription = styled.div`
  flex: 1; // 남은 공간을 모두 차지하도록 설정합니다.
`;
// 와인 아이템 내용을 감싸는 Wrapper 스타일 컴포넌트를 생성합니다.
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; // 수직 가운데 정렬합니다.
  align-items: center; // 수평 가운데 정렬합니다.
  position: ${({ isBig }) =>
    isBig ? "absolute" : "relative"}; // isBig에 따라 위치를 설정합니다.
`;
const RecommendIconDiv = styled.div`
  width: 100%;
  height: 480px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 5% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const IconBox = styled.div`
  width: 327px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
const Recommend = () => {
  const [isBig, setIsBig] = useState(null);
  const [isclick, setisclick] = useState(null);
  const toggleSize = (index) => {
    setIsBig(isBig === index ? null : index);
  };
  const clickToggle = (index2) => {
    setisclick(isclick === index2 ? null : index2);
  };
  return (
    <Container>
      <h1>다양한 주류 추천</h1>
      {/* 주류 전체 목록 내용 */}
      <WineContainer>
        <WineItem
          onClick={() => toggleSize(0)}
          isBig={isBig === 0}
          bgColor="rgba(112, 101, 19, 1)"
        >
          {/* 클릭을 했을 때 화면 커지는 부분 */}
          {isBig === 0 ? (
            <>
              <Wrapper>
                <ItemTitle>
                  <ItemTitleText isBig={isBig}>기분에 따른 추천</ItemTitleText>
                </ItemTitle>
                <RecommendIconDiv>
                  <IconBox
                    onClick={() => {
                      clickToggle(0);
                    }}
                    isclick={isclick === 0}
                  >
                    <IconImg
                      src={
                        process.env.PUBLIC_URL + "/recommendationicon/행복.png"
                      }
                    />
                  </IconBox>
                  <IconBox
                    onClick={() => {
                      clickToggle(0);
                    }}
                    isclick={isclick === 0}
                  >
                    <IconImg
                      src={
                        process.env.PUBLIC_URL + "/recommendationicon/슬픔.png"
                      }
                    />
                  </IconBox>
                  <IconBox
                    onClick={() => {
                      clickToggle(0);
                    }}
                    isclick={isclick === 0}
                  >
                    <IconImg
                      src={
                        process.env.PUBLIC_URL + "/recommendationicon/화남.png"
                      }
                    />
                  </IconBox>
                  <IconBox
                    onClick={() => {
                      clickToggle(0);
                    }}
                    isclick={isclick === 0}
                  >
                    <IconImg
                      src={
                        process.env.PUBLIC_URL + "/recommendationicon/사랑.png"
                      }
                    />
                  </IconBox>
                </RecommendIconDiv>
              </Wrapper>
            </>
          ) : (
            <>
              <Wrapper>
                <ItemTitle>
                  <ItemTitleText isBig={isBig}>기분에 따른 추천</ItemTitleText>
                </ItemTitle>
                <WineItemImage src={bg} alt="와인 이미지" />
              </Wrapper>
            </>
          )}
        </WineItem>
        <WineItem
          onClick={() => toggleSize(1)}
          isBig={isBig === 1}
          bgColor="rgba(182, 113, 20, 1)"
        >
          {isBig === 1 ? (
            <Wrapper>
              <ItemTitle>
                <ItemTitleText>날씨에 따른 추천</ItemTitleText>
              </ItemTitle>
              <RecommendIconDiv>
                <IconBox
                  onClick={() => {
                    clickToggle(1);
                  }}
                  isclick={isclick === 1}
                >
                  <IconImg
                    src={
                      process.env.PUBLIC_URL + "/recommendationicon/맑음.png"
                    }
                  />
                </IconBox>
                <IconBox
                  onClick={() => {
                    clickToggle(1);
                  }}
                  isclick={isclick === 1}
                >
                  <IconImg
                    src={
                      process.env.PUBLIC_URL + "/recommendationicon/흐림.png"
                    }
                  />
                </IconBox>
                <IconBox
                  onClick={() => {
                    clickToggle(1);
                  }}
                  isclick={isclick === 1}
                >
                  <IconImg
                    src={process.env.PUBLIC_URL + "/recommendationicon/비.png"}
                  />
                </IconBox>
                <IconBox
                  onClick={() => {
                    clickToggle(1);
                  }}
                  isclick={isclick === 1}
                >
                  <IconImg
                    src={process.env.PUBLIC_URL + "/recommendationicon/눈.png"}
                  />
                </IconBox>
              </RecommendIconDiv>
            </Wrapper>
          ) : (
            <Wrapper>
              <ItemTitle>
                <ItemTitleText>날씨에 따른 추천</ItemTitleText>
              </ItemTitle>
              <WineItemImage src={bg} alt="와인 이미지" />
            </Wrapper>
          )}
        </WineItem>
        <WineItem
          onClick={() => toggleSize(2)}
          isBig={isBig === 2}
          bgColor="rgba(82, 1, 33, 1)"
        >
          {isBig === 2 ? (
            <Wrapper>
              <ItemTitle>
                <ItemTitleText>음식에 따른 추천</ItemTitleText>
              </ItemTitle>
              <RecommendIconDiv>
                <IconBox
                  onClick={() => {
                    clickToggle(2);
                  }}
                  isclick={isclick === 2}
                >
                  <IconImg
                    src={
                      process.env.PUBLIC_URL + "/recommendationicon/한식.png"
                    }
                  />
                </IconBox>
                <IconBox
                  onClick={() => {
                    clickToggle(2);
                  }}
                  isclick={isclick === 2}
                >
                  <IconImg
                    src={
                      process.env.PUBLIC_URL + "/recommendationicon/일식.png"
                    }
                  />
                </IconBox>
                <IconBox
                  onClick={() => {
                    clickToggle(2);
                  }}
                  isclick={isclick === 2}
                >
                  <IconImg
                    src={
                      process.env.PUBLIC_URL + "/recommendationicon/양식.png"
                    }
                  />
                </IconBox>
                <IconBox
                  onClick={() => {
                    clickToggle(2);
                  }}
                  isclick={isclick === 2}
                >
                  <IconImg
                    src={
                      process.env.PUBLIC_URL + "/recommendationicon/중식.png"
                    }
                  />
                </IconBox>
              </RecommendIconDiv>
            </Wrapper>
          ) : (
            <Wrapper>
              <ItemTitle>
                <ItemTitleText>음식에 따른 추천</ItemTitleText>
              </ItemTitle>
              <WineItemImage src={bg} alt="와인 이미지" isBig={isBig !== 2} />
            </Wrapper>
          )}
        </WineItem>
      </WineContainer>
      <Input type="text" placeholder="무엇을 찾고 계신가요?" />
      <List>
        <ListItem>
          <ItemImage src={img1} alt="와인 1" />
          <ItemDescription>
            <span>와인 1 - 50,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        <ListItem>
          <ItemImage src={img1} alt="와인 2" />
          <ItemDescription>
            <span>와인 2 - 30,000원</span>
          </ItemDescription>
        </ListItem>
        {/* 필요한 만큼 리스트 아이템을 추가할 수 있습니다. */}
      </List>
      {/* <HorizontalLine /> */}
    </Container>
  );
};

export default Recommend;