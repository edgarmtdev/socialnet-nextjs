import { ImSpinner } from "react-icons/im";

export default function Spinner() {
  return (
    <div className="absolute w-full h-screen bg-[#00000060] top-0 z-30 left-0">
      <ImSpinner className="animate-spin w-10 h-10 absolute top-[50%] left-[49%] text-white" />
    </div>
  );
}
