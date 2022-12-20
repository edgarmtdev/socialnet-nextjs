import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import ProfilePic from "../../utils/ProfilePic";
import { Cicle, Item } from "./styles";

export default function Routes({ user, setOpen, open }) {
  return (
    <>
      <Link href={"/friends"}>
        <Item>Friends</Item>
      </Link>
      <Link href={"/people/allusers"}>
        <Item>People</Item>
      </Link>
      <Cicle onClick={() => setOpen(!open)}>
        <ProfilePic src={user.profilePic} size={"sm"} />
        <BiChevronDown
          className={` w-6 h-6 transition ${open && "rotate-180 transition"}`}
        />
      </Cicle>
    </>
  );
}
