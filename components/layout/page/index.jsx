import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../config/firebase";
import { login, logOut } from "../../../features/auth";
import { getofFriends, getPosts } from "../../../features/posts";
import { getUsers } from "../../../features/users";
import Navbar from "../../navbar/index";
import Spinner from "../../utils/Spinner";
import { PageLayout } from "./styles";

const Page = ({ children }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.post);

  useEffect(() => {
    onAuthStateChanged(auth, (result) => {
      if (result) {
        dispatch(
          login({
            name: result.displayName,
            email: result.email,
            profilePic: result.photoURL,
            provider: result.providerId,
            idProvider: result.uid,
          })
        ).then((data) => {
          console.log(data);
          dispatch(getPosts());
          dispatch(getofFriends());
          dispatch(getUsers());
        });
      } else {
        dispatch(logOut());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {" "}
      <Navbar />
      <PageLayout>{children}</PageLayout>
    </>
  );
};

export default Page;
