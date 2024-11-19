document.getElementById("registerform").addEventListener("submit", function (submitevent) {
    submitevent.preventDefault()
    //Get the values from the inputs
    const firstName = document.getElementById("firstname").value
    const lastName = document.getElementById("lastname").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("phonenumber").value
    const loanAmount = parseFloat(document.getElementById("loanamount").value.trim())
    const tenure = parseFloat(document.getElementById("loantenure").value.trim())
    const annualIncome = parseFloat(document.getElementById("annualincome").value.trim())
    const propertyValue = parseFloat(document.getElementById("propertyvalue").value.trim())

    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true
    //validate user inputs, if the user entered invalid values then return from the function.
    if (!firstName.trim()) {
        document.getElementById('firstnameerror').textContent = "First name is required"
        isValid = false
    } else {
        document.getElementById('firstnameerror').textContent = ''
    }

    if (!lastName.trim()) {
        document.getElementById('lastnameerror').textContent = "Last name is required"
        isValid = false
    } else {
        document.getElementById('lastnameerror').textContent = ''
    }

    if (!email.trim()) {
        document.getElementById('emailerror').textContent = "Email is required"
        isValid = false
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailerror').textContent = "Please enter a valid email"
        isValid = false
    } else {
        document.getElementById('emailerror').textContent = ''
    }

    if (!phoneNumber.trim()) {
        document.getElementById('phoneerror').textContent = "Phone number is required"
        isValid = false
    } else if (!phoneRegex.test(phoneNumber)) {
        document.getElementById('phoneerror').textContent = "Please enter a valid phone number"
        isValid = false
    } else {
        document.getElementById('phoneerror').textContent = ''
    }

    if (isNaN(annualIncome) || annualIncome <= 10000) {
        document.getElementById('annualincomeerror').textContent = "Enter a valid income"
        isValid = false
    } else {
        document.getElementById('annualincomeerror').textContent = ''
    }

    if (isNaN(loanAmount) || loanAmount <= 10000) {
        document.getElementById('loanamounterror').textContent = "Enter a valid loan amount"
        isValid = false
    } else {
        document.getElementById('loanamounterror').textContent = ''
    }

    if (isNaN(tenure) || tenure >= 30) {
        document.getElementById('tenureerror').textContent = "Enter a valid tenure"
        isValid = false
    } else {
        document.getElementById('tenureerror').textContent = ''
    }

    if (isNaN(propertyValue) || propertyValue <= 10000) {
        document.getElementById('propertyvalueerror').textContent = "Enter a valid value"
        isValid = false
    } else {
        document.getElementById('propertyvalueerror').textContent = ''
    }


    //if user has entered valid values then submit the form
    if (isValid) {
        alert('Successfully submited')
        document.getElementById("firstname").value = ''
        document.getElementById("lastname").value = ''
        document.getElementById("email").value = ''
        document.getElementById("phonenumber").value = ''
        document.getElementById("loanamount").value = ''
        document.getElementById("loantenure").value = ''
        document.getElementById("annualincome").value = ''
        document.getElementById("propertyvalue").value = ''
    }

})