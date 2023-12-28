import "./App.css";
import AudioRecorder from "./components/AudioRecorder";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
    <div className="flex items-center justify-center w-screen h-screen bg-[#343434] relative">
      <AudioRecorder />
      <ChatBot/>
    </div>
    </>
  );
}

export default App;
