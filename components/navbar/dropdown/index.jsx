import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiUser } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { auth } from "../../../config/firebase";
import { logOut } from "../../../features/auth";
import ProfilePic from "../../utils/ProfilePic";
import { Item, Menu, User } from "./styles";

export default function Dropdown({ open, setOpen, user }) {
  const dispatch = useDispatch();

  const router = useRouter();
  const logout = () => {
    router.replace("/auth/login");
    dispatch(logOut());
    signOut(auth);
    setOpen(false);
  };

  return (
    <Menu primary={open ? true : false}>
      <ul>
        <User>
          <ProfilePic src={user.profilePic} size={"md"} />
          {user.name}
        </User>
        <Link href={`/profile/${user.idUser}`}>
          <Item onClick={() => setOpen(!open)}>
            <BiUser width={5} height={5} />
            Profile
          </Item>
        </Link>
        <Item signout={true} onClick={logout}>
          <HiOutlineLogout width={40} height={40} />
          Logout
        </Item>
      </ul>
    </Menu>
  );
}
