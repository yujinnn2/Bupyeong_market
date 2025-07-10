import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section03Section = styled.section`
  padding: var(--padding-sec);

  & img {
    width: 3rem;
  }
`;

const Section03Text = styled.div`
  text-align: left; 
  letter-spacing: -2px;
  & h3 {
    color: var(--Black-01);
    font-size: 4rem;
    font-weight: 700;
  }

  & p {
    color: var(--Grey-01); /* 변수명 확인 */
    font-size: 2.4rem;
    font-weight: 600;
  }

  & input {
    border: none;
    outline: none;
    border-bottom: 3px solid var(--Black-01);
    width: 80%;
    padding: 1.3rem;
    font-size: 2rem;
  }

  & input::placeholder {
    font-size: 2rem;
  }

  & button {
    border: none;
    background: none;
  }

  & button > i {
    font-size: 2rem;
  }
`;

const Section03TagWrapper = styled.div`
  position: relative;
  width: 41.9rem;
  height: 31.8rem;
`;

const TagWrapperTag01 = styled.div`
  padding: 10px 20px;
  width: 14.5rem;
  border-radius: 30px 30px 0 30px;
  background: var(--sub-Color4);
  position: absolute;
  top: 7.55%;
  left: 20.53%;
  transform: translate(0, 0);
  box-shadow: 3px 13px 25.4px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  z-index: 1;

  & img {
    width: 4.2rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
  }

  & p {
    color: var(--White-01);
    font-size: 2.4rem;
    font-weight: 600;
    margin-left: 0.7rem;
    margin-bottom: 0rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 5px 15px 30px 0 rgba(0, 0, 0, 0.18);

    & img {
      transform: scale(1.1);
    }

    & p {
      transform: translateX(2px);
    }
  }
`;
const TagWrapperTag02 = styled.div`
  padding: 10px 20px;
  width: 14.5rem;
  border-radius: 30px 30px 0 30px;
  background: var(--White-01);
  position: absolute;
  top: 37.42%;
  left: 0%;
  transform: translate(0, 0);
  box-shadow: 3px 13px 25.4px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  z-index: 1;

  & img {
    width: 3.4rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
  }

  & p {
    color: var(--black-01);
    font-size: 2.4rem;
    font-weight: 600;
    margin-left: 0.7rem;
    margin-bottom: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 5px 15px 30px 0 rgba(0, 0, 0, 0.18);

    & img {
      transform: scale(1.1);
    }

    & p {
      transform: translateX(2px);
    }
  }
`;

const TagWrapperTag03 = styled.div`
  padding: 10px 20px;
  width: 12.5rem;
  border-radius: 30px 30px 0 30px;
  background: var(--White-01);
  position: absolute;
  top: 74.21%;
  left: 8.83%;
  transform: translate(0, 0);
  box-shadow: 3px 13px 25.4px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  z-index: 1;

  & img {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
  }

  & p {
    color: var(--black-01);
    font-size: 2.4rem;
    font-weight: 600;
    margin-left: 0.7rem;
    margin-bottom: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 5px 15px 30px 0 rgba(0, 0, 0, 0.18);

    & img {
      transform: scale(1.1);
    }

    & p {
      transform: translateX(2px);
    }
  }
`;

const TagWrapperTag04 = styled.div`
  padding: 10px 20px;
  width: 12.5rem;
  border-radius: 30px 30px 0 30px;
  background: var(--Black-02);
  position: absolute;
  top: 0%;
  left: 71.6%;
  transform: translate(0, 0);
  box-shadow: 3px 13px 25.4px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  z-index: 1;

  & img {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
  }

  & p {
    color: var(--White-01);
    font-size: 2.4rem;
    font-weight: 600;
    margin-left: 0.7rem;
    margin-bottom: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 5px 15px 30px 0 rgba(0, 0, 0, 0.18);

    & img {
      transform: scale(1.1);
    }

    & p {
      transform: translateX(2px);
    }
  }
`;

const TagWrapperTag05 = styled.div`
  padding: 10px 20px;
  width: 17rem;
  border-radius: 30px 30px 0 30px;
  background: var(--White-01);
  position: absolute;
  top: 24.21%;
  left: 58.3%;
  transform: translate(0, 0);
  box-shadow: 3px 13px 25.4px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  z-index: 1;

  & img {
    width: 2.5rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
  }

  & p {
    color: var(--Black-01);
    font-size: 2.4rem;
    font-weight: 600;
    margin-left: 0.7rem;
    margin-bottom: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 5px 15px 30px 0 rgba(0, 0, 0, 0.18);

    & img {
      transform: scale(1.1);
    }

    & p {
      transform: translateX(2px);
    }
  }
`;

const TagWrapperTag06 = styled.div`
  padding: 10px 20px;
  width: 13rem;
  border-radius: 45px 45px 0 45px;
  background: #29ae51;
  position: absolute;
  top: 54.09%;
  left: 52.51%;
  transform: translate(0, 0);
  box-shadow: 3px 13px 25.4px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  z-index: 1;

  & img {
    width: 2.5rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
  }

  & p {
    color: var(--White-01);
    font-size: 2.4rem;
    font-weight: 600;
    margin-left: 0.7rem;
    margin-bottom: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 5px 15px 30px 0 rgba(0, 0, 0, 0.18);

    & img {
      transform: scale(1.1);
    }

    & p {
      transform: translateX(2px);
    }
  }
`;

function Section03() {
    const navigate = useNavigate();
  return (
    <Section03Section>
      <div className="container d-flex">
        <div className="col-md-6">
          <Section03Text>
            <h3>지금 나에게 필요한건?</h3>
            <p className="mb-45">부평시장의 다양한 상점을 소개합니다!</p>
            <div className="input_wrapper d-flex">
              <input
                type="text"
                placeholder="국내산 한우 차돌박이를  검색해보세요!"
              />
              <button onClick={() => navigator("/market")}>
                <i className="xi-arrow-right"></i>
              </button>
            </div>
          </Section03Text>
        </div>
        <Section03TagWrapper className="col-md-6">
          <TagWrapperTag01 className="d-flex" onClick={() => navigate("/market")}>
              <img src="assets/images/sec03_icon_fish.png" alt="생선" />
            <p>생선</p>
          </TagWrapperTag01>

          <TagWrapperTag02 className="d-flex" onClick={() => navigate("/market")}>
            <img src="assets/images/sec03_icon_meat.png" alt="고기" />
            <p>고기</p>
          </TagWrapperTag02>

          <TagWrapperTag03 className="d-flex" onClick={()=>navigate("/market")}>
            <img src="assets/images/sec03_icon_fruit.png" alt="과일" />
            <p>과일</p>
          </TagWrapperTag03>

          <TagWrapperTag04 className="d-flex" onClick={()=>navigate("/market")}>
            <img src="assets/images/sec03_icon_clothes.png" alt="의류" />
            <p>의류</p>
          </TagWrapperTag04>

          <TagWrapperTag05 className="d-flex" onClick={()=>navigate("/market")}>
            <img src="assets/images/sec03_icon_detergent.png" alt="생활용품" />
            <p>생활용품</p>
          </TagWrapperTag05>

          <TagWrapperTag06 className="d-flex" onClick={()=>navigate("/market")}>
            <img src="assets/images/sec03_icon_vege.png" alt="채소" />
            <p>채소</p>
          </TagWrapperTag06>
        </Section03TagWrapper>
      </div>
    </Section03Section>
  );
}

export default Section03;
