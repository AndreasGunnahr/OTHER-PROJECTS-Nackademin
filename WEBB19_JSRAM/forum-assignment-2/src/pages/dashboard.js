import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "redux/actions/user.action";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Dashboard page
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Dashboard;
