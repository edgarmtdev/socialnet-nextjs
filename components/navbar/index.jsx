import Link from "next/link";
import { useState } from "react";
import { CgUserlane } from "react-icons/cg";
import { useSelector } from "react-redux";
import Button from "./auth";
import Dropdown from "./dropdown";
import Routes from "./routes";
import { Links, Nav, NavContainer, NavTitle } from "./styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { logged, user } = useSelector((state) => state.auth);

  return (
    <Nav>
      <Link href={logged ? "/home" : "/"}>
        <NavTitle>
          <CgUserlane width={100} height={100} />
          <span>Home</span>
        </NavTitle>
      </Link>
      <NavContainer>
        {!logged ? (
          <Links>
            <Button route={"/auth/login"} title={"LogIn"} isLogin={true} />
            <Button route={"/auth/signup"} title={"SignUp"} />
          </Links>
        ) : (
          <>
            <Links idLogged={true}>
              <Routes user={user} setOpen={setOpen} open={open} />
            </Links>
            <Dropdown open={open} setOpen={setOpen} user={user} />
          </>
        )}
      </NavContainer>
    </Nav>
  );
}
