import { useState } from "react";
import { FormSection } from "./FormSection";
import { InputElement } from "./InputElement";
import { InputBox } from "./InputBox";
import { SubmitButton } from "./SubmitButton";
import { OutputSection } from "./OutputSection";
import { OutputItem } from "./OutputItem";

export default function App() {
  const [inputDay, setInputDay] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [validDay, setValidDay] = useState(false);
  const [validMonth, setValidMonth] = useState(false);
  const [validYear, setValidYear] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const months = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];
  const date = new Date();

  function getCurrentDateValues() {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();
    return { getYear: currentYear, getMonth: currentMonth, getDay: currentDay };
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitted(true);
    let { getDay, getMonth, getYear } = getCurrentDateValues();

    if (!inputDay || !inputMonth || !inputYear) {
      return;
    }
    if (inputDay > 31 || inputDay <= 0) {
      setValidDay(true);
      return;
    } else {
      setValidDay(false);
    }

    if (inputMonth > 12 || inputMonth <= 0) {
      setValidMonth(true);
      return;
    } else {
      setValidMonth(false);
    }

    if (inputYear > getYear) {
      setValidYear(true);
      return;
    } else {
      setValidYear(false);
    }
    if (inputDay > getDay) {
      getDay += months[getMonth - 1];
      getMonth--;
    }
    if (inputMonth > getMonth) {
      getMonth += 12;
      getYear--;
    }
    setDay(getDay - inputDay);
    setMonth(getMonth - inputMonth);
    setYear(getYear - inputYear);
  }
  return (
    <main className="main__container">
      <FormSection handleSubmit={handleSubmit}>
        <InputElement>
          <InputBox
            inputVal={inputDay}
            onSetDate={setInputDay}
            valid={validDay}
            invalidMessage={"Must be a valid day"}
            isSubmitted={isSubmitted}
            label="Day"
            pholder={"DD"}
            id="day"
            maxLength={2}
          />
          <InputBox
            inputVal={inputMonth}
            onSetDate={setInputMonth}
            valid={validMonth}
            invalidMessage={"Must be a valid month"}
            isSubmitted={isSubmitted}
            label="Month"
            pholder={"MM"}
            id="month"
            maxLength={2}
          />
          <InputBox
            inputVal={inputYear}
            onSetDate={setInputYear}
            valid={validYear}
            invalidMessage={"Must be in the past"}
            isSubmitted={isSubmitted}
            label="Year"
            pholder={"YYYY"}
            id="year"
            maxLength={4}
          />
        </InputElement>

        <SubmitButton />
      </FormSection>
      <OutputSection>
        <OutputItem label="years" total={year} />
        <OutputItem label="months" total={month} />
        <OutputItem label="days" total={day} />
      </OutputSection>
    </main>
  );
}
