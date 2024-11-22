import { Button, Slider, TextField } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";
import { calculateEMI } from "./utils/helper";
import { EMI } from "./types/emi";
import { Piechart } from "./components/piechart";

function App() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [rateofInterest, setRateofInterest] = useState(1);
  const [loanTenure, setLoanTenure] = useState(1);
  const [emiValues, setEmiValues] = useState<EMI>({
    emi: 0,
    principal: 0,
    totalInterest: 0,
    totalAmount: 0,
  });

  useEffect(() => {
    setEmiValues(calculateEMI(loanAmount, rateofInterest, loanTenure * 12));
  }, [loanAmount, rateofInterest, loanTenure]);

  return (
    <div className="Container">
      <div className="infosection">
        <TextField id="outlined-basic" label="First name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Mobile" variant="outlined" />
        <Button variant="contained">Submit</Button>
      </div>
      <div className="requirements">
        <div className="left">
          <div className="leftcontents">
            <label htmlFor="loanamount">Loan Amount</label>
            <div className="value">${loanAmount}</div>
          </div>
          <Slider
            defaultValue={loanAmount}
            min={1000}
            max={1000000}
            onChange={(_event: Event, value: number | number[]) => {
              setLoanAmount(value as number);
            }}
            aria-label="Default"
            valueLabelDisplay="auto"
          />

          <div className="leftcontents">
            <label htmlFor="rateofinterest">Rate of Interest</label>
            <div className="value">{rateofInterest}%</div>
          </div>
          <Slider
            defaultValue={rateofInterest}
            min={1}
            max={30}
            onChange={(_event: Event, value: number | number[]) => {
              setRateofInterest(value as number);
            }}
            aria-label="Default"
            valueLabelDisplay="auto"
          />

          <div className="leftcontents">
            <label htmlFor="loantenure">Loan Tenure</label>
            <div className="value">{loanTenure} Yr</div>
          </div>
          <Slider
            defaultValue={loanTenure}
            min={1}
            max={30}
            onChange={(_event: Event, value: number | number[]) => {
              setLoanTenure(value as number);
            }}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
          <div className="valuecontainer">
            <div className="emiValue">
              <div>Monthly EMI</div>
              <div>${emiValues.emi}</div>
            </div>
            <div className="emiValue">
              <div>Total intrest</div>
              <div>${emiValues.totalInterest}</div>
            </div>
            <div className="emiValue">
              <div>Principal Amount</div>
              <div>${emiValues.principal}</div>
            </div>
            <div className="emiValue">
              <div>Total Amount</div>
              <div>${emiValues.totalAmount}</div>
            </div>
          </div>
        </div>
        <div className="right">
          <Piechart
            data={[
              {
                value: emiValues.principal,
                label: "Principal Amount",
                color: "#5367ff",
              },
              {
                value: emiValues.totalInterest,
                label: "Intrest Amount",
                color: "#eef0ff",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
