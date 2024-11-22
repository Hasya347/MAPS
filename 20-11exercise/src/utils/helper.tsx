import { EMI } from "../types/emi";
export const calculateEMI = (
  loanAmount: number,
  annualInterestRate: number,
  tenureInMonths: number
): EMI => {
  // Convert annual interest rate to monthly interest rate
  const monthlyInterestRate = annualInterestRate / (12 * 100);

  // Calculate EMI
  const EMI =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, tenureInMonths)) /
    (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);

  // Calculate Total Amount Payable
  const totalAmount = EMI * tenureInMonths;

  // Calculate Total Interest
  const totalInterest = totalAmount - loanAmount;

  // Return all calculated values
  return {
    emi: Math.round(EMI),
    principal: Math.round(loanAmount),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount),
  };
};
