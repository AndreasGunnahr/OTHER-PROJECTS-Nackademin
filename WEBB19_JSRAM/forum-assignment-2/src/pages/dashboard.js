import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PrimaryLayout from "layouts/PrimaryLayout";
import PostList from "components/PostList";
import Sidebar from "components/Sidebar";
import { postActions } from "redux/actions/post.action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(postActions.getAll());
  }, []);

  return (
    <PrimaryLayout>
      {posts && <PostList posts={posts} />}
      <Sidebar />
    </PrimaryLayout>
  );
};

export default Dashboard;
