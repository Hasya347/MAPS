import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Applications } from './components/Applications';
import { Application } from './types/application';
import { validateForm } from './utils/helper';
const initialData:Application ={
    firstName:'',
    lastName:'',
    email:'',
    phone: '',
    loanAmount:0,
    loanTenure:0,
    propertyValue :0,
    annualIncome:0 ,
}
const initialError={
  firstName:'',
  lastName:'',
  email:'',
  phone: '',
  loanAmount:'',
  loanTenure:'',
  propertyValue :'',
  annualIncome:'' ,
}
function App() {
   const [applicationsData, setApplicationsData] = useState<Application[]>([])
  const [loanForm, setLoanForm]=useState<Application>(initialData)
  const [errors, setErrors]=useState(initialError)
  const [isValidForm, setIsValidForm] = useState(false)

  const handleValueChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let updatedValue={...loanForm, [e.target.name]: e.target.value}
    if(['loanAmount','annualIncome', 'propertyValue', 'loanTenure'].includes(e.target.name)){
      updatedValue={...loanForm, [e.target.name]: Number(e.target.value)}
    }
    setLoanForm({...updatedValue})
    const {isValid, errors} = validateForm(updatedValue)
    setIsValidForm(isValid)
    setErrors({...errors})
  }


  const handleSubmit = () => {
   
    const {isValid, errors} = validateForm(loanForm)
    setErrors({...errors})
    //validate user inputs, if the user entered invalid values then return from the function.
   
    if(isValid){
      alert('Submitted your loan form successfully')

      setApplicationsData([...applicationsData,loanForm])
      setLoanForm(initialData)
    }
  }

  const deleteApplication=(index: number)=>{
    applicationsData.splice(index,1)
    setApplicationsData([...applicationsData])
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
            <input id="firstName" name='firstName' placeholder="Enter your first name" value={loanForm.firstName} onChange={handleValueChange}/>
            <div className='error'>{errors.firstName}</div>
          </div>
          <div className="field">
            <label>
              Last name
            </label>
            <input id="lastName" name='lastName' placeholder="Enter your last name" value={loanForm.lastName} onChange={handleValueChange}/>
            <div className='error'>{errors.lastName}</div>
          </div>
          <div className="field">
            <label>
              Email
            </label>
            <input name="email" placeholder="Enter your email" value={loanForm.email} onChange={handleValueChange}/>
            <div className='error'>{errors.email}</div>
          </div>
          <div className="field">
            <label>
              Phone number
            </label>
            <input name="phone" placeholder="Enter your phonenumber" value={loanForm.phone} onChange={handleValueChange}/>
            <div className='error'>{errors.phone}</div>
          </div>
          <div className="field">
            <label>
              Annual income
            </label>
            <input name="annualIncome" placeholder="Enter your Annual income" value={loanForm.annualIncome} onChange={handleValueChange}/>
            <div className='error'>{errors.annualIncome}</div>
          </div>
          <div className="field">
            <label>
              Loan amount
            </label>
            <input name="loanAmount" placeholder="Enter your Loan amount" value={loanForm.loanAmount} onChange={handleValueChange}/>
            <div className='error'>{errors.loanAmount}</div>
          </div>
          <div className="field">
            <label>
              Loan tenure
            </label>
            <input name="loanTenure" placeholder="Enter your tenure" value={loanForm.loanTenure} onChange={handleValueChange}/>
            <div className='error'>{errors.loanTenure}</div>
          </div>
          <div className="field">
            <label>
              Property Value
            </label>
            <input name="propertyValue" placeholder="Enter Property value" value={loanForm.propertyValue} onChange={handleValueChange}/>
            <div className='error'>{errors.propertyValue}</div>
          </div>

          <button disabled={!isValidForm} onClick={handleSubmit}>Submit</button>

        </div>
        <Applications data={applicationsData} remove={deleteApplication}/>
      </div>
    </div>
  );
}

export default App;
