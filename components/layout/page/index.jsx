import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../config/firebase";
import DropdownContext from "../../../context/dropdown";
import { login, logOut } from "../../../features/auth";
import { getofFriends, getPosts } from "../../../features/posts";
import { getUsers } from "../../../features/users";
import Navbar from "../../navbar/index";
// import Spinner from "../../utils/Spinner";
import { PageLayout } from "./styles";

const Page = ({ children }) => {
  const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.post);

  const { state, event } = React.useContext(DropdownContext);

  React.useEffect(() => {
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
      <Navbar onClick={() => state && event(!state)} />
      <PageLayout onClick={() => state && event(!state)}>{children}</PageLayout>
    </>
  );
};

export default Page;
