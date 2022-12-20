import { HeadComponent } from "../../components/utils/HeadComponent";
import MyFeed from "../../components/home";
import { useSelector } from "react-redux";

export default function Home() {
  const { dataOfFriends } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <HeadComponent title={"Feed | SocialNet"} />
      <MyFeed dataOfFriends={dataOfFriends} user={user} />
    </>
  );
}
