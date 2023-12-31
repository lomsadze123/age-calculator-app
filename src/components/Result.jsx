import { styled } from "styled-components";

const Result = ({ years, months, days }) => {
  return (
    <Section>
      <div>
        <h2>{!!years || years === 0 ? years : "- -"}</h2> <p>years</p>
      </div>
      <div>
        <h2>{!!months || months === 0 ? months : "- -"}</h2> <p>months</p>
      </div>
      <div>
        <h2>{!!days || days === 0 ? days : "- -"}</h2> <p>days</p>
      </div>
    </Section>
  );
};

export default Result;

const Section = styled.section`
  div {
    display: flex;
    align-items: center;
  }

  p,
  h2 {
    font-size: 5.5rem;
    color: #151515;
    font-style: italic;
    font-weight: 900;
    line-height: 6rem;
    letter-spacing: -0.1rem;
  }
  h2 {
    color: #854dff;
    margin-right: 1.5rem;
  }

  @media (min-width: 768px) {
    p,
    h2 {
      font-size: 10rem;
      line-height: 11rem;
    }
  }
`;
