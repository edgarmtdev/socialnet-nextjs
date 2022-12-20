import Link from "next/link";
import { CardFriend, Image, NameFriend } from "./styles";

export default function Friend({ friend }) {
  return (
    <Link href={"/profile/" + friend.id}>
      <CardFriend>
        <Image src={friend.profilePic} />
        <NameFriend>{friend.name.split(" ")[0]}</NameFriend>
      </CardFriend>
    </Link>
  );
}
