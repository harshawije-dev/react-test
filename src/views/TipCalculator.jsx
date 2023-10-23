import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "../features/slices/calculateSlice";

const TipCalculator = () => {
  const [subTotal, setSubtotal] = useState(0);

  const amount = useSelector((state) => state.calc.value);
  const dispatch = useDispatch();

  useMemo(() => {
    setSubtotal(amount + subTotal);
  }, [amount]);

  return (
    <div className="w-[75%]">
      <div>
        <h2>Tip Calculator</h2>
        <p>{subTotal}</p>
      </div>
      <hr />
      <div>
        <input
          className="form-control"
          type="number"
          onChange={(data) => setSubtotal(Number(data.target.value))}
        />
      </div>
      <div>
        <button
          type="button"
          className="btn"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <h2>{amount}</h2>
        <button
          type="button"
          className="btn"
          onClick={() => {
            dispatch(reset());
            setSubtotal(() => subTotal - amount);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default TipCalculator;
