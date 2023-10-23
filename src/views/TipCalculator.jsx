import React from "react";

const TipCalculator = () => {
  return (
    <div>
      <h2>Tip Calculator</h2>
      <div>
        <p>Total</p>
        <h5></h5>
        <label htmlFor="">Add tip</label>
        <div>
          <button
            type="button"
            className="bg-slate-300 px-4 py-2 rounded-lg flex justify-center items-center"
          >
            <p className="font-semibold text-xl">+</p>
          </button>
          <h4></h4>
          <button type="button">-</button>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
