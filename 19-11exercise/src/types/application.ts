export type Application={
    firstName: string
    lastName: string
    email: string
    phone: string
    loanAmount:number
    loanTenure: number
    propertyValue: number
    annualIncome: number
}

export type ApplicationError={
    firstName: string
    lastName: string
    email: string
    phone: string
    loanAmount:string
    loanTenure: string
    propertyValue: string
    annualIncome: string
}