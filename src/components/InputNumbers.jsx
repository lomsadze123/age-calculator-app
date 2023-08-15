import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";

const InputNumbers = ({ onChange }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const currentYear = new Date().getFullYear();

  const calculateAge = () => {
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);
    const timeDiff = currentDate - birthDate;

    const ageDate = new Date(timeDiff);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    return { years, months, days };
  };

  const handleValueChange = () => {
    if (
      day !== "" &&
      month !== "" &&
      year !== "" &&
      day <= 31 &&
      month <= 12 &&
      year < currentYear
    ) {
      const age = calculateAge();
      onChange(age.days, age.months, age.years);
    }
  };

  return (
    <Labels>
      <section>
        <div>
          <Label about={day > 31} htmlFor="day">
            day
          </Label>{" "}
          <br />
          <Input
            about={day > 31}
            onChange={(e) => setDay(e.target.value)}
            type="number"
            id="day"
            placeholder="DD"
            value={day}
          />
          {day > 31 && <h3>Enter valid day</h3>}
        </div>
        <div>
          <Label about={month > 12} htmlFor="month">
            month
          </Label>{" "}
          <br />
          <Input
            about={month > 12}
            onChange={(e) => setMonth(e.target.value)}
            type="number"
            id="month"
            placeholder="MM"
            value={month}
          />
          {month > 12 && <h3>Enter valid month</h3>}
        </div>
        <div>
          <Label about={year > currentYear} htmlFor="year">
            year
          </Label>{" "}
          <br />
          <Input
            about={year > currentYear}
            onChange={(e) => setYear(e.target.value)}
            type="number"
            id="year"
            placeholder="YYYY"
            value={year}
          />
          {year >= currentYear && <h3>Enter valid year</h3>}
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
  h3 {
    font-size: 1.2rem;
    color: #ff5959;
    font-weight: 500;
    font-style: italic;
    margin-top: 0.6rem;
  }
  input {
    max-width: 8.8rem;
    width: 100%;
    padding: 1.6rem 0 1.6rem 1.9rem;
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
  label {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    input {
      max-width: 16rem;
      font-size: 2rem;
    }
    label {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1.6rem;
    }
  }
`;
const Label = styled.label`
  color: ${(props) => (props.about ? "#ff5959" : "#716f6f")};
`;
const Input = styled.input`
  &:focus {
    border: 0.1rem solid #854dff;
  }
  border: ${(props) =>
    props.about ? "0.1rem solid #ff5959" : "0.1rem solid #dcdcdc"};
`;
