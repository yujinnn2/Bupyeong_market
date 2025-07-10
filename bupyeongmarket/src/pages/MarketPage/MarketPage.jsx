import styled from "styled-components";
import MainTop from "../../components/MainTop";
import { useState, useEffect } from "react";

const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 15px 30px;
  border-radius: 15px;
`;
const RecentSearchDiv = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-size: 1.4rem;
    font-weight: 500;
  }
  & > strong {
    font-size: 1.8rem;
  }
  & > span {
    margin: 0 5px 0 10px;
  }
`;
const TagWrapDiv = styled.div`
  display: flex;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background: var(--Grey-04);
    border-radius: 5px;
    margin: 0 5px;
    color: var(--Grey-01);
  }
  & p {
    font-size: 1.4rem;
  }
  & i {
    font-size: 2rem;
  }
`;
const GridContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 40px 0 60px;
`;
const BoxDiv = styled.div`
  border: 1px solid var(--Grey-03);
  padding: 20px;
  border-radius: 18px;
  background: var(--White-01);
  display: flex;
  flex-direction: column;
`;
const IconDiv = styled.div`
  width: 40px;
  margin-bottom: 1rem;
`;
const TitleH3 = styled.h3`
  font-size: 18px;
  margin: 0 0 8px;
  font-weight: 600;
  color: #333;
`;
const DescriptionP = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;
const ListWrapDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
`;
const ListDiv = styled.div`
  display: flex;
  padding: 2rem;
  background: var(--White-01);
  border-radius: 20px;
  border: 1px solid var(--Grey-03);
  margin-bottom: 40px;
`;
const ContentDiv = styled.div`
  display: flex;
`;
const ContentImgDiv = styled.div`
  margin-right: 40px;
  width: 180px;
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  & h3 {
    font-size: 2.4rem;
    margin-right: 1rem;
  }
  & > div {
    width: 22px;
  }
`;
const InfoDiv = styled.div`
  font-size: 1.8rem;
`;
const LocateDiv = styled.div`
  display: flex;
  margin-bottom: 10px;

  & > div {
    width: 24px;
  }
`;
function MarketPage () {
  const [marketList, setMarketList] = useState([]);

  useEffect(() => {
    fetch("/assets/json/market.json")
      .then((response) => response.json())
      .then((data) => setMarketList(data))
      .catch((error) => console.error("데이터 로드 실패:", error));
  }, []);

  const MarketList = marketList.map((item, index) => {
    return (
      <ListDiv key={index}>
        <ContentDiv>
          <ContentImgDiv>
            <img src={item.img} alt="정육점 매장의 정면 모습" />
          </ContentImgDiv>
          <div>
            <TitleDiv>

              <h3>
                {item.name}
              </h3>
              <div>
                <img src="/assets/images/icon/icon__check.svg" alt="파란색 체크 표시 아이콘" />
              </div>
            </TitleDiv>
            <InfoDiv>
              <LocateDiv>
                <div>
                  <img src="/assets/images/icon/icon__map.svg" alt="지도모양 아이콘" />
                </div>
                <p>
                  {item.locate}
                </p>
              </LocateDiv>
              <p>
                {item.description}
              </p>
            </InfoDiv>
          </div>
        </ContentDiv>
        <span>상세보기</span>
      </ListDiv>
    );
  });

  return (
    <>
      <MainTop />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <SearchInput type="text" placeholder="검색어 입력" />
              </div>
            </div>
          </div>

          <div className="row">
            <RecentSearchDiv className="mt-20">
              <p>
                <strong>22</strong>개 검색됨
                <span>· 최근검색</span> :
              </p>
              <TagWrapDiv>
                <div>
                  <p>#고기</p>
                  <i className="xi-close-min"></i>
                </div>
                <div>
                  <p>#고기</p>
                  <i className="xi-close-min"></i>
                </div>
                <div>
                  <p>#고기</p>
                  <i className="xi-close-min"></i>
                </div>
                <div>
                  <p>#고기</p>
                  <i className="xi-close-min"></i>
                </div>
                <div>
                  <p>#고기</p>
                  <i className="xi-close-min"></i>
                </div>
                <div>
                  <p>#고기</p>
                  <i className="xi-close-min"></i>
                </div>
              </TagWrapDiv>
            </RecentSearchDiv>
          </div>
          <div className="row">
            <GridContainerDiv>
              <BoxDiv>
                <IconDiv>
                  <img src="/assets/images/icon/icon__meat.svg" alt="고기 아이콘" />
                </IconDiv>
                <TitleH3>육류</TitleH3>
                <DescriptionP>100% 국내산, 신선함 제대로!</DescriptionP>
              </BoxDiv>
              <BoxDiv>
                <IconDiv>
                  <img src="/assets/images/icon/icon__fish.svg" alt="생선 아이콘" />
                </IconDiv>
                <TitleH3>수산물</TitleH3>
                <DescriptionP>싱싱함이 살아있는 바다 직송!</DescriptionP>
              </BoxDiv>
              <BoxDiv>
                <IconDiv>
                  <img src="/assets/images/icon/icon__fork.svg" alt="식기류 아이콘" />
                </IconDiv>
                <TitleH3>먹거리</TitleH3>
                <DescriptionP>싱싱한 농산물, 믿고 먹는 맛!</DescriptionP>
              </BoxDiv>
              <BoxDiv>
                <IconDiv>
                  <img src="/assets/images/icon/icon__shirt.svg" alt="옷 아이콘" />
                </IconDiv>
                <TitleH3>의류</TitleH3>
                <DescriptionP>매일 입고 싶은 편안함!</DescriptionP>
              </BoxDiv>
            </GridContainerDiv>
          </div>
          <div className="row">
            <p className="col-md-1">정렬:</p>
          </div>

          <div className="row">
            <div className="col-md-12">
              <ListWrapDiv>
                {MarketList}
              </ListWrapDiv>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketPage;