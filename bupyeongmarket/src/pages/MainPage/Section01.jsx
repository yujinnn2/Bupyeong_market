import styled from "styled-components";

const Section01Section = styled.section`
  background: url("assets/images/sec01_01.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding: var(--padding-sec);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > h2 {
    color: var(--White-01);
    font-size: 10rem;
  }
`;

function Section01 () {
  return (
    <Section01Section>
      <h2>Bupyeong General <br/>Market</h2>
    </Section01Section>
  );
}

export default Section01;