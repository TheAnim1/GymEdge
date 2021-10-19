import React, { useState } from "react";
import './BmiCalculator.css';

const BmiCalculator = () => {
    const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
    return (
        <div>
          <div className="bg-img p-5">
          <div className="container bmi-misc p-5">
            <div className="row">
                <div className="col-md-6">
                <h1 className="mb-5">CALCULATE YOUR <span className="span-color">BMI</span> </h1>
                <div className="mb-2">
                <input
                type="text"
                className="bmi-input mt-2"
                onChange={(e) => setHeight(e.target.value)}
                placeholder="height in cm"
                />
                <input
                className="bmi-input mt-2"
                type="text"
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight in kg"
                />
                </div>
                <button className="bmi-btn mt-2" onClick={handleBmi}>Calculate</button>
                <h1>{bmi}</h1>
                <h2 className="bmi-info-color">{info}</h2>
                </div>

                <div className="col-md-6">
                <div className="container table-responsive py-5">
                <table className="table table-bordered table-style">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">BMI</th>
                        <th scope="col">Weight Status</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Below 18.5</th>
                        <td>Underweight</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">18.5 - 24.9</th>
                        <td>Healthy</td>
                    </tr>
                    <tr>
                        <th scope="row">25 - 29.9</th>
                        <td>Overweight</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">30 and Above</th>
                        <td>Obese</td>
                        
                    </tr>
                    </tbody>
                </table>
    </div>

                </div>
            </div>
          </div>
          </div>
      </div>
    );
};

export default BmiCalculator;