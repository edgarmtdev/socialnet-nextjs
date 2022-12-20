import React from "react";
import Navigation from "./navigation";

export default function ProfileLayout({ children }) {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
}
