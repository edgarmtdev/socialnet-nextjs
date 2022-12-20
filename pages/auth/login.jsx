import LoginModule from "../../components/auth/login";
import { HeadComponent } from "../../components/utils/HeadComponent";

export default function Login() {
  // useAuthState('/home')
  return (
    <>
      <HeadComponent title={"Login"} />
      <LoginModule />
    </>
  );
}
