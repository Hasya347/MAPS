import { Application, ApplicationError } from "../types/application"
const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validateForm=(app: Application):{isValid: boolean, errors: ApplicationError}=>{
    let isValid= true
    const errors:ApplicationError={
        firstName:'',
        lastName:'',
        email:'',
        phone: '',
        loanAmount:'',
        loanTenure:'',
        propertyValue :'',
        annualIncome:'' ,
      }
    if (!app.firstName.trim()) {
        errors.firstName="First name is required"
        isValid = false
      } else {
        errors.firstName=""
      }
  
      if (!app.lastName.trim()) {
        errors.lastName="Last name is required"
        isValid = false
      } else {
        errors.lastName=''
      }
  
      if (!app.email.trim()) {
        errors.email="Email is required"
        isValid = false
      } else if (!emailRegex.test(app.email)) {
        errors.email="Please enter a valid email"
        isValid = false
      } else {
        errors.email=''
      }
  
      if (!app.phone.trim()) {
        errors.phone="Phone number is required"
        isValid = false
      } else if (!phoneRegex.test(app.phone)) {
        errors.phone="Please enter a valid phone number"
        isValid = false
      } else {
        errors.phone=""
      }
  
      if (app.annualIncome <= 1000) {
        errors.annualIncome="Enter a valid income"
        isValid = false
      } else {
        errors.annualIncome=""
      }
  
      if ( app.loanAmount <= 1000) {
        errors.loanAmount="Enter a valid loan amount"
        isValid = false
      } else {
        errors.loanAmount=""
      }
  
      if ( app.loanTenure ===0 || app.loanTenure>30) {
        errors.loanTenure="Enter a valid tenure"
        isValid = false
      } else {
        errors.loanTenure=""
      }
  
      if (app.propertyValue <= 1000) {
        errors.propertyValue="Enter a valid value"
        isValid = false
      } else {
        errors.propertyValue=""
      }
      return {
        errors, isValid
      }
}