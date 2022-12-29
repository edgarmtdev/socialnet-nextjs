import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { sighInMethods } from "../../../libs/auth";
import ButtonProvider from "./button";
import { Providers } from "./styles";

export default function SectionProvider() {
  return (
    <Providers>
      <ButtonProvider
        icon={<FcGoogle className="w-6 h-6" />}
        provider={sighInMethods.google}
        title={"Google"}
      />
      <ButtonProvider
        icon={<FaFacebookSquare className="text-blue-700  w-6 h-6" />}
        provider={sighInMethods.facebook}
        title={"Facebook"}
      />
      <ButtonProvider
        icon={<AiFillGithub className="w-6 h-6" />}
        provider={sighInMethods.github}
        title={"Github"}
      />
    </Providers>
  );
}
