import React from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../features/posts";

export default function Default({ children }) {
  return <>{children}</>;
}
