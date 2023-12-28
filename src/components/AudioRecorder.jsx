import { useRef, useState } from "react";
import { ReactMic } from "react-mic";

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioData, setAudioData] = useState({});
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef(null);

  const startHandle = ()=>{
    setIsRecording(true);
    setRecordingTime(0)
    startRecordingTimer()
  }
  const stopHandle = ()=>{
    setIsRecording(false);
    stopRecordingTimer();
  }
  const onStop = (recordedData) => {
    console.log(recordedData);
    setIsRecording(false);
    setAudioData(recordedData.blobURL);
  };

  const startRecordingTimer = () => {
    timerRef.current = setInterval(() => {
      setRecordingTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopRecordingTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  return (
    <div className="flex items-start  flex-col p-8 border-black  border-4 rounded-2xl   ">
      <h1 className="text-4xl font-bold text-gray-400">{"Audio Record"}</h1>

      <div className="text-2xl font-semibold mt-5">
        <p className="text-gray-400">Recording Time: {formatTime(recordingTime)}</p>
      </div>

      <div className="mt-4">
        <ReactMic
          record={isRecording}
          className="sound-wave"
          onStop={onStop}
          strokeColor="#000000"
          
        />
      </div>

      <div className="text-2xl font-semibold my-5">
        <button
          onClick={startHandle}
          className=" bg-green-500 rounded-lg text-white px-4 text-center"
        >
          {"start"}
        </button>
        <button
          onClick={stopHandle}
          className="ml-5 bg-red-500 rounded-lg text-white px-4 text-center"
        >
          {"stop"}
        </button>
      </div>

      <div>
        <audio controls src={audioData} />
      </div>
    </div>
  );
}
