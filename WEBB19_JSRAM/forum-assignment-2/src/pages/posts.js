import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { postFormData, postValidate } from "constants/postFormRules";
import { postActions } from "redux/actions/post.action";
import { categoriesAction } from "redux/actions/category.action";
import useModal from "hooks/useModal";

import PrimaryLayout from "layouts/PrimaryLayout";
import PostList from "components/PostList";
import Sidebar from "components/Sidebar";
import Modal from "components/Modal";

const Dashboard = () => {
  const { isShowing, toggle } = useModal();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts?.all_posts);

  useEffect(() => {
    dispatch(categoriesAction.getAll());
    dispatch(postActions.getAll());
  }, []);

  return (
    <PrimaryLayout col={2}>
      <PostList posts={posts} />
      <Sidebar show={toggle} section="posts" />
      <Modal
        title={"Create a new post"}
        isShowing={isShowing}
        hide={toggle}
        data={postFormData}
        validate={postValidate}
        type="post"
      />
    </PrimaryLayout>
  );
};

export default Dashboard;
