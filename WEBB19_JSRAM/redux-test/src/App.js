import { useDispatch, useSelector } from "react-redux";
import { incrementAsync, decrement } from "actions/CounterActions";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(incrementAsync())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;
