import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section04Section = styled.section`
     padding: var(--padding-sec);
`

const Section04ColMd12 = styled.div `
        text-align: center;
        margin-bottom: 100px;
        & > h3 {
                   color: var(--Black-01);
            font-size: 6rem;    
            font-weight: 700;
        }
        & > p {
                    color: var(--Grey-01);
            font-size: 20px;
            font-weight: 700;
        }
`

const Section04Text = styled.div`
 padding:20px 00px 20px 0px;
  & > h4 {
    color: var(--Black-01);
    font-size: 26px;
    font-weight: 700;
  }

  & > p {
    color: var(--Grey-01);
    font-size: 20px;
    font-weight: 400;
  }
`;



function Section04() {

  const navigate = useNavigate();

  return (
    <Section04Section>
    <div className="container">
      <div className="row">
        <Section04ColMd12 className="col-md-12">
          <h3>주요 소식</h3>
          <p>가장 빠르고 정확한 소식, 당신에게 먼저 전해드립니다!</p>
        </Section04ColMd12>
        <div className="col-md-6"  onClick={()=>navigate("/event")}>
            <img src="assets/images/news01.png" alt="선착순 한정 이벤트" />
            <Section04Text>
              <h4>선착순 한정! 서둘러 주세요</h4>
              <p>한정 수량, 지금 아니면 놓칩니다! 기회는 딱 한 번, 서두르세요!</p>
            </Section04Text>

        </div>
        <div className="col-md-6" onClick={()=>navigate("/event")}>
            <img src="assets/images/news02.png" alt="특별한 이벤트" />
            <Section04Text>
              <h4>우리 시장의 특별한 이벤트, 함께 즐기세요!</h4>
              <p>다채로운 혜택과 즐거움이 가득합니다. 모두가 기다려온 축제에 여러분을 초대합니다!</p>
            </Section04Text>
        </div>
      </div>
    </div>
    </Section04Section>
  );
}

export default Section04;