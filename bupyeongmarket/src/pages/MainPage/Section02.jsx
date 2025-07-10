import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section02Section = styled.section`
  opacity: 1;
  transform: translateY(100px); /* 약간 아래에서 시작 */
  transition: all 1.5s;
  padding: var(--padding-sec);

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  .d-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem; /* gap 조절 가능 */
  }

  .title h3 {
    color: var(--black-01);
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }

  .card {
    border-radius: 50px;
  }

  .item-card {
    position: relative;
    cursor: pointer;
  }

  .item-card:hover .overlay {
    opacity: 1;
  }

  .overlay {
    background-color: var(--sub-Color4-purple);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px 40px 0 40px;
    transition: all 0.3s;
  }

  .overlay p {
    color: var(--White-01);
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .overlay-next {
    padding: 8px 40px;
    background: var(--White-01);
    border-radius: 30px;
  }
`;

function Section02() {
  const navigate = useNavigate();

  const items = [
    { src: "assets/images/sec02_01.png", text: "먹거리" },
    { src: "assets/images/sec02_02.png", text: "해산물" },
    { src: "assets/images/sec02_03.png", text: "의류·패션잡화" },
    { src: "assets/images/sec02_04.png", text: "꽃·공예품" },
  ];
  
  return (
    <Section02Section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h3 className="mb-50">시장 둘러보기</h3>
          </div>
        </div>
      </div>
      <div className="d-grid gap-3 card-wrap">
        {items.map(({ src, text }, idx) => (
          <div className="col-md-12 card" key={idx}>
            <div className="item-card" onClick={() => navigate("/market")} style={{cursor: 'pointer'}}>
              <img src={src} alt={text} />
              <div className="overlay">
                <p className="overlay-text">{text}</p>
                <div className="overlay-next">
                  <img src="assets/images/icon/icon__next.svg" alt="오른쪽 화살표 아이콘" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Section02Section>
  );
}

export default Section02;

