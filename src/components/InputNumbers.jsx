import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";

const InputNumbers = ({ onChange }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleValueChange = () => {
    onChange(day, month, year);
  };

  return (
    <Labels>
      <section>
        <div>
          <label htmlFor="day">day</label> <br />
          <input
            onChange={(e) => setDay(e.target.value)}
            type="number"
            id="day"
            placeholder="DD"
            value={day}
          />
        </div>
        <div>
          <label htmlFor="month">month</label> <br />
          <input
            onChange={(e) => setMonth(e.target.value)}
            type="number"
            id="month"
            placeholder="MM"
            value={month}
          />
        </div>
        <div>
          <label htmlFor="year">year</label> <br />
          <input
            onChange={(e) => setYear(e.target.value)}
            type="number"
            id="year"
            placeholder="YYYY"
            value={year}
          />
        </div>
      </section>
      <Button handleValueChange={handleValueChange} />
    </Labels>
  );
};

export default InputNumbers;

const Labels = styled.section`
  section {
    display: flex;
    gap: 1.5rem;
  }

  input {
    max-width: 8.8rem;
    width: 100%;
    padding: 1.6rem 0 1.6rem 1.9rem;
    border: 0.1rem solid #dcdcdc;
    border-radius: 0.8rem;
    font-size: 1.8rem;
    outline: 0;
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input::placeholder {
    opacity: 0.8;
  }
  input:focus {
    border: 0.1rem solid #854dff;
  }
  label {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: #716f6f;
  }

  @media (min-width: 768px) {
    input {
      max-width: 16rem;
      font-size: 2rem;
    }
    label {
      font-size: 1.6rem;
    }
  }
`;
