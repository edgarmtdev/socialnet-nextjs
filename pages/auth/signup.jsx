import { HeadComponent } from "../../components/utils/HeadComponent";
import { useAuthState } from "../../hooks/useAuthState";
import SignupModule from "../../components/auth/signup";

export default function Signup() {
  // useAuthState('/home')
  return (
    <>
      <HeadComponent title={"Register"} />
      <SignupModule />
    </>
  );
}
