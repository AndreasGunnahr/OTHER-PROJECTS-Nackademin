import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PrimaryLayout from "layouts/PrimaryLayout";
import LoginForm from "components/LoginForm";
import { activateUser } from "utilities/userServices";

const Login = () => {
  const [activation, setActivation] = useState(null);
  const history = useHistory();
  const searchParams = new URLSearchParams(useLocation().search);

  const checkActivateUser = async () => {
    if (searchParams.get("uid") && searchParams.get("token")) {
      const payload = {
        uid: searchParams.get("uid"),
        token: searchParams.get("token"),
      };

      const { response } = await activateUser(payload);

      if (response.detail.includes("Stale")) {
        setActivation("Account already activated");
        return history.push("/login");
      }
      setActivation("Successful activation of your account");
    }
  };

  useEffect(() => {
    checkActivateUser();
  }, []);

  return (
    <PrimaryLayout placement={"center"}>
      <LoginForm activation={activation} />
    </PrimaryLayout>
  );
};

export default Login;
