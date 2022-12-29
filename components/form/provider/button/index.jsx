import React from "react";
import { useRouter } from "next/router";
import { loginProvider } from "../../../../libs/auth";
import { Button } from "./styles";

export default function ButtonProvider({ icon, provider, title }) {
  const router = useRouter();

  const loginWithProvider = (provider) => {
    loginProvider(provider);
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    router.replace("/home");
  };

  return (
    <Button type="button" onClick={() => loginWithProvider(provider)}>
      <span>{icon}</span>
    </Button>
  );
}
