import PrimaryLayout from "layouts/PrimaryLayout";
import LoginForm from "components/LoginForm";

export default function Login() {
  return (
    <PrimaryLayout placement={"center"}>
      <LoginForm />
    </PrimaryLayout>
  );
}
