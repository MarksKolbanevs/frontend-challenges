import React, { useState } from 'react';
import './index.scss';
import DateInput from './DateInput';

function App() {
  const [day,setDay] = useState(String);
  const [month,setMonth] = useState(String);
  const [year,setYear] = useState(String);

  const [calculatedDay,setCalculatedDay] = useState('--');
  const [calculatedMonth,setCalculatedMonth] = useState('--');
  const [calculatedYear,setCalculatedYear] = useState('--');
  
  const [dayError,setDayError] = useState(String);
  const [monthError,setMonthError] = useState(String);
  const [yearError,setYearError] = useState(String);

  const handleDayChange = (value:string) =>{ 
    setDay(value);
  }

  const handleMonthChange = (value:string) =>{
    setMonth(value);
  }

  const handleYearChange = (value:string) =>{
    setYear(value);
  }

  function validateInputs(){
    const dayRegex = /^(0?[1-9]|[1-2]\d|3[0-1])$/;
    const monthRegex = /^(0?[1-9]|1[0-2])$/;
    const yearRegex = /^\d{4}$/;
    let passed = true;
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    const parsedYear = parseInt(year);

    if(day.length <= 0){
      setDayError('This field is required');
      passed = false;
    }

    if(month.length <= 0){
      setMonthError('This field is required');
      passed = false;
    }

    if(year.length <= 0){
      setYearError('This field is required');
      passed = false;
      return false;
    }

    if(!dayRegex.test(day)){
      setDayError('Enter valid day!');
      passed = false;
    }

    if(!monthRegex.test(month)){
      setMonthError('Enter valid month!');
      passed = false;
    }
    
    if(parsedYear > currentYear){
      setYearError('Must be in the past!');
      passed = false;
      return;
    }

    if(!yearRegex.test(year)){
      setYearError('Enter valid year!');
      passed = false;
    }

    if(passed){
      setDayError('');
      setMonthError('');
      setYearError('');
      return true;
    }else{
      return false;
    }
  }

  function calculateYear(){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    let currentDay = currentDate.getDate();

    const parsedYear = parseInt(year);
    const parsedMonth = parseInt(month);
    const parsedDay = parseInt(day);

    const calculatedYear = currentYear - parsedYear;
    const calculatedMonth = currentMonth - parsedMonth;
    const calculatedDay = currentDay - parsedDay;

    setCalculatedDay(""+calculatedDay);
    setCalculatedMonth(""+calculatedMonth);
    setCalculatedYear(""+calculatedYear);
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if(!validateInputs()){
      return;
    }
    calculateYear();
  }

  return (
    <section>
      <main>
        <form className='time-inputs-container' onSubmit={handleSubmit}>
          <DateInput placeholder="DD" errorMessage = {dayError} name="DAY" onInputChange={handleDayChange}/>
          <DateInput placeholder="MM" errorMessage = {monthError} name="MONTH" onInputChange={handleMonthChange}/>
          <DateInput placeholder="YYYY" errorMessage = {yearError} name="YEAR" onInputChange={handleYearChange}/>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </button>
        </form>
        <div className='text-holder'>
          <h1 className='purple'>{calculatedYear}</h1><h1>years</h1>
        </div>
        <div className='text-holder'>
          <h1 className='purple'>{calculatedMonth}</h1><h1>months</h1>
        </div>
        <div className='text-holder'>
          <h1 className='purple'>{calculatedDay}</h1><h1>days</h1>
        </div>
      </main>
    </section>
  );
}

export default App;
