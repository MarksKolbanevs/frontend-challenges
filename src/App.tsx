import React, { useState } from 'react';
import './index.scss';
import SubmitButton from './SubmitButton';

function App() {
  const [error,setError] = useState(String);
  const [email,setEmail] = useState(String);
  const [emailSubmitted,setEmailSubmitted] = useState(Boolean);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event : any) =>{
    event.preventDefault();
    if(!emailRegex.test(email)){
      setError('Valid email required!');
      return;
    }
    setEmailSubmitted(true);
  }

  const handleChange = (event : any) =>{
    let value = event.target.value;
    setEmail(value);
    setError('');
  }

  return (
    <section className='subscription-section'>
      {emailSubmitted === false ?
      <div className='subscription-container'>
              <div className='left-container'>
                <div className='centered-container'>
                  <div className='hero-text'>
                    <h1>Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                  </div>
                  <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                  </ul>
                  <form className='email-form' onSubmit={handleSubmit}>
                    <div className='label-container'>
                      <label htmlFor="email">Email address</label>
                      {error ? <h4>Valid email required!</h4> : null}
                    </div>
                  <input name="email" className={error ? 'input-error' : ''} onChange = {handleChange} placeholder='email@company.com'/>
                    <SubmitButton text="Subscribe to monthly later"/>
                  </form>  
                </div>
                </div>
                <div className='right-container'>
                  <img src="./assets/images/illustration-sign-up-mobile.svg"/>
                </div>         
      </div>
      :
      <div className='submited-container'>
          <main>
            <img src="./assets/images/icon-success.svg"/>
            <div className='hero-text'>
              <h1>Thanks for subscribing!</h1>
              <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription</p>
            </div> 
          </main>
          <SubmitButton text = "Dismiss message"/>
      </div>
      }
    </section>
  );
}

export default App;
