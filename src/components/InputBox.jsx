import { useState } from "react";

export default function InputBox() {
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState([""]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && message.trim() !== "") {
      setDisplayMessage((prev) => [...prev, message.trim()]);
      setMessage("");
    }
  };
  return (
    <div className="h-[300px] w-[250px] bg-gray-400  relative rounded-2xl overflow-hidden">
     <div className="flex flex-col items-end p-2 space-y-2 flex-wrap overflow-y-auto">
        {displayMessage &&
          displayMessage.map((item, index) => (
            <p key={index} className="text-right border-2 border-white rounded-2xl p-2 overflow-hidden">
              {item}
            </p>
          ))}
      </div>
      <input
        type="text"
        placeholder="Type Here..."
        className="w-full absolute bottom-0 p-2 rounded-2xl outline-none border-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
