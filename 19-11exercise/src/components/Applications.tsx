import { Application } from '../types/application'
import './Applications.css'

type Props={
    data: Application[]
    remove: (index: number)=> void

}

export const Applications = ({data, remove}:Props) => {
  return (
    <div className="applicationsContainer">
    <table>
        <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Amount</th>
      <th>Income</th>
      <th>Tenure</th>
      <th>Property value</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
        {data.map((item, index)=>(
            <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.loanAmount}</td>
                <td>{item.annualIncome}</td>
                <td>{item.loanTenure}</td>
                <td>{item.propertyValue}</td>
                <td><button onClick={()=>remove(index)}>Delete</button></td>
            </tr>
        ))}
    </tbody>
  </table>
  </div>
  )
}