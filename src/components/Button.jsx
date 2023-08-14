import { styled } from "styled-components";
import arrow from "../assets/arrow.svg";

const Button = ({ handleValueChange }) => {
  return (
    <Article>
      <hr />
      <img onClick={handleValueChange} src={arrow} alt="Arrow Down" />
    </Article>
  );
};

export default Button;

const Article = styled.article`
  position: relative;
  img {
    display: block;
    max-width: 6.5rem;
    width: 100%;
    padding: 1.8rem;
    background-color: #854dff;
    border-radius: 50%;
    position: absolute;
    top: -3rem;
    left: 11.5rem;
    box-shadow: 0 0 0 8px white;
  }
  hr {
    display: block;
    border: 0;
    height: 0.1rem;
    background-color: #dcdcdc;
    margin: 6rem 0;
  }

  @media (min-width: 768px) {
    img {
      max-width: 9rem;
      padding: 2rem;
      top: -4.5rem;
      left: 66rem;
      cursor: pointer;
    }
    hr {
      margin: 7rem 0;
    }
    img:hover {
      background-color: #151515;
    }
  }
`;
