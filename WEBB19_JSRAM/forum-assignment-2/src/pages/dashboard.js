import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PrimaryLayout from "layouts/PrimaryLayout";
import PostList from "components/PostList";

const Dashboard = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch()

  // }, [])

  return (
    <PrimaryLayout>
      <PostList />
    </PrimaryLayout>
  );
};

export default Dashboard;
