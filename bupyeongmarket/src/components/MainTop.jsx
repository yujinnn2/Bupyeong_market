import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MaintopDiv = styled.div`
  padding: var(--padding-sec);
`;
const MainLogoDiv = styled.div`
  margin: 0 auto;
  width: 30%;

  & > img {
    width: 100%;
  }
`;

function MainTop() {
  const navigate = useNavigate();

  return (
    <MaintopDiv>
      <MainLogoDiv onClick={() => navigate("/")}>
        <img src="/assets/images/market/main_logo.png" alt="전통과 현대가 어우러진 명품시장가 씌여진 로고 이미지" />
      </MainLogoDiv>
  </MaintopDiv>
  );
}

export default MainTop;