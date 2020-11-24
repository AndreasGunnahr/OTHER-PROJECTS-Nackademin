import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postActions } from "redux/actions/post.action";
import { useParams } from "react-router-dom";
import { userActions } from "redux/actions/user.action";
import { useHistory } from "react-router-dom";

const useForm = (type, validate) => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!error && submitting) {
      if (type === "post") dispatch(postActions.create(values, history));
      if (type === "reply")
        dispatch(postActions.createReplies({ ...values, parent: id }));
      if (type === "register") dispatch(userActions.register(values, history));
      if (type === "login") dispatch(userActions.login(values));
      setSubmitting(false);
    }
  }, [error, submitting]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    setError(validate(values));

    if (!error) {
      setSubmitting(true);
    }
  };

  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    error,
  };
};

export default useForm;
