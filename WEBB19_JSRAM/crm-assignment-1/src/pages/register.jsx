import PrimaryLayout from "layouts/PrimaryLayout";
import RegisterForm from "components/RegisterForm";

export default function Register() {
  return (
    <PrimaryLayout placement={"top"}>
      <RegisterForm />
    </PrimaryLayout>
  );
}
