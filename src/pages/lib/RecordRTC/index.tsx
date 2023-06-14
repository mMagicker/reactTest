import React, { useEffect, useRef } from "react";
import type { RecordRTC } from "recordrtc";

export default function Record() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const init = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then(async function (stream) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        console.log("RecordRTC", RecordRTC);

        let recorder = RecordRTC(stream, {
          mimeType: "video/webm",
          type: "video",
          height: 400,
          width: 400,
        });
        recorder.startRecording();

        const sleep = (m) => new Promise((r) => setTimeout(r, m));
        await sleep(3000);

        recorder.stopRecording(function () {
          let blob = recorder.getBlob();
          // console.log(blob);
          // invokeSaveAsDialog(blob);

          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = 'test.webm';
          a.click();
        
        });
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        controls={false}
        autoPlay
        style={{ width: "400px", height: "400px", borderRadius: "50%" }}
      ></video>
    </div>
  );
}
