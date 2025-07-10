import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Section05section = styled.section`
padding: var(--padding-sec);
`
const Section05ColMd12 = styled.div`
        text-align: center;
        margin-bottom: 100px;
       & h3 {
                   color: var(--Black-01);
            font-size: 6rem;    
            font-weight: 700;
       } 
       & p {
                   color: var(--Grey-01);
            font-size: 20px;
            font-weight: 700;}
`
const Section05ColMd6 = styled.div`
   & h4 {
               color: var(--black-01);
            font-size: 26px;
            font-weight: 700;
   
   }
    & p {
           color: var(--Grey-01);
                font-size: 20px;
                font-weight: 400;
    }
`
const Section05Text = styled.div`
padding:20px 00px 20px 0px;
`


function Section05() {

  const navigate = useNavigate();

  return (
    <Section05section>
    <div className="container">
      <div className="row">
        <Section05ColMd12 className="col-md-12">
          <h3>주변 관광지</h3>
          <p>맛집 탐방 후엔 가까운 관광지에서 특별한 추억을 만들어봐요!</p>
        </Section05ColMd12>
        <Section05ColMd6 className="col-md-6"  onClick={()=>navigate("/near")}>
            <img src="assets/images/place01.png" alt="선착순 한정 이벤트" />
            <Section05Text>
              <h4>선착순 한정! 서둘러 주세요</h4>
              <p>한정 수량, 지금 아니면 놓칩니다! 기회는 딱 한 번, 서두르세요!</p>
            </Section05Text>

        </Section05ColMd6>
        <Section05ColMd6 className="col-md-6" onClick={()=>navigate("/near")}>
            <img src="assets/images/place02.png" alt="특별한 이벤트" />
            <Section05Text>
              <h4>우리 시장의 특별한 이벤트, 함께 즐기세요!</h4>
              <p>다채로운 혜택과 즐거움이 가득합니다. 모두가 기다려온 축제에 여러분을 초대합니다!</p>
            </Section05Text>
        </Section05ColMd6>
      </div>
    </div>
    </Section05section>
  );
}

export default Section05;