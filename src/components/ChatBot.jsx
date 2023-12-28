import { useState } from "react";
import chatbotImg from "../assets/chatbot.png";
import InputBox from "./InputBox";

export default function ChatBot() {
  const [displayBox, setDisplayBox] = useState(false);
  return (
    <div className=" absolute right-8 bottom-5 flex items-end flex-col">
      {displayBox && <InputBox />}
      <img
        src={chatbotImg}
        alt="chatbotimg"
        className="w-20 h-20 mt-4 cursor-pointer"
        onClick={() => setDisplayBox((prev) => !prev)}
      />
    </div>
  );
}
