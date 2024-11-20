import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [annualIncome, setAnnualIncome] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  const [loanTenure, setLoanTenure] = useState('')
  const [propertyValue, setPropertyValue] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('')
  const [annualIncomeError, setAnnualIncomeError] = useState('')
  const [loanAmountError, setLoanAmountError] = useState('')
  const [loanTenureError, setLoanTenureError] = useState('')
  const [propertyValueError, setPropertyValueError] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleAnnualIncomeChange = (e) => {
    setAnnualIncome(e.target.value);
  }

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
  }

  const handleLoanTenureChange = (e) => {
    setLoanTenure(e.target.value);
  }

  const handlePropertyValueChange = (e) => {
    setPropertyValue(e.target.value);
  }

  const handleSubmit = () => {
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true
    //validate user inputs, if the user entered invalid values then return from the function.
    if (!firstName.trim()) {
      setFirstNameError("First name is required")
      isValid = false
    } else {
      setFirstNameError("")
    }

    if (!lastName.trim()) {
      setLastNameError("Last name is required")
      isValid = false
    } else {
      setLastNameError('')
    }

    if (!email.trim()) {
      setEmailError("Email is required")
      isValid = false
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email")
      isValid = false
    } else {
      setEmailError('')
    }

    if (!phoneNumber.trim()) {
      setPhoneNumberError("Phone number is required")
      isValid = false
    } else if (!phoneRegex.test(phoneNumber)) {
      setPhoneNumberError("Please enter a valid phone number")
      isValid = false
    } else {
      setPhoneNumberError("")
    }

    if (isNaN(annualIncome) || annualIncome <= 10000) {
      setAnnualIncomeError("Enter a valid income")
      isValid = false
    } else {
      setAnnualIncomeError("")
    }

    if (isNaN(loanAmount) || loanAmount <= 10000) {
      setLoanAmountError("Enter a valid loan amount")
      isValid = false
    } else {
      setLoanAmountError("")
    }

    if (isNaN(loanTenure) || loanTenure <= 30) {
      setLoanTenureError("Enter a valid tenure")
      isValid = false
    } else {
      setLoanTenureError("")
    }

    if (isNaN(propertyValue) || propertyValue <= 10000) {
      setPropertyValueError("Enter a valid value")
      isValid = false
    } else {
      setPropertyValueError("")
    }

    // if (isNaN(annualIncome) || annualIncome <= 10000) {
    //   error = "Enter a valid income"
    //   isValid = false
    // } else {
    //   error = ''
    // }

    // if (isNaN(loanAmount) || loanAmount <= 10000) {
    //   error = "Enter a valid loan amount"
    //   isValid = false
    // } else {
    //   error = ''
    // }

    // if (isNaN(tenure) || tenure >= 30) {
    //   error = "Enter a valid tenure"
    //   isValid = false
    // } else {
    //   error = ''
    // }

    // if (isNaN(propertyValue) || propertyValue <= 10000) {
    //   error = "Enter a valid value"
    //   isValid = false
    // } else {
    //   error = ''
    // }


  }
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className="formContainer">
          <div className="field">
            <label>
              First name
            </label>
            <input placeholder="Enter your first name" value={firstName} onChange={handleFirstNameChange} />
            <div className='error'>{firstNameError}</div>
          </div>
          <div className="field">
            <label>
              Last name
            </label>
            <input placeholder="Enter your last name" value={lastName} onChange={handleLastNameChange} />
            <div className='error'>{lastNameError}</div>
          </div>
          <div className="field">
            <label>
              Email
            </label>
            <input placeholder="Enter your email" value={email} onChange={handleEmailChange} />
            <div className='error'>{emailError}</div>
          </div>
          <div className="field">
            <label>
              Phone number
            </label>
            <input placeholder="Enter your phonenumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
            <div className='error'>{phoneNumberError}</div>
          </div>
          <div className="field">
            <label>
              Annual income
            </label>
            <input placeholder="Enter your Annual income" value={annualIncome} onChange={handleAnnualIncomeChange} />
            <div className='error'>{annualIncomeError}</div>
          </div>
          <div className="field">
            <label>
              Loan amount
            </label>
            <input placeholder="Enter your Loan amount" value={loanAmount} onChange={handleLoanAmountChange} />
            <div className='error'>{loanAmountError}</div>
          </div>
          <div className="field">
            <label>
              Loan tenure
            </label>
            <input placeholder="Enter your tenure" value={loanTenure} onChange={handleLoanTenureChange} />
            <div className='error'>{loanTenureError}</div>
          </div>
          <div className="field">
            <label>
              Property Value
            </label>
            <input placeholder="Enter Property value" value={propertyValue} onChange={handlePropertyValueChange} />
            <div className='error'>{propertyValueError}</div>
          </div>

          <button onClick={handleSubmit}>Submit</button>

        </div>
      </div>
    </div>
  );
}

export default App;
