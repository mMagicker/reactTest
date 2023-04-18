import React from "react";
import CryptoJS from "crypto-js";

export default function Crypto() {
  const encrypt = (text: string, key: string) => {
    let encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(text),
      CryptoJS.enc.Utf8.parse(key),
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return encrypted.toString();
  };
  const key = "3Rr0zlmzo1ITAeYQ";
  const doEnc = () => {
    const res = encrypt("123测试", key);
    console.log(res);
  };
  return (
    <div>
      <button onClick={doEnc}>click</button>
    </div>
  );
}
