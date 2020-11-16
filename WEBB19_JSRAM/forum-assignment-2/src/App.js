import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/actions/user.action";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button
        onClick={() =>
          dispatch(
            login({ email: "pelle@willandskill.se", password: "pellesvanslos" })
          )
        }
      >
        -
      </button>
    </div>
  );
};

export default App;
