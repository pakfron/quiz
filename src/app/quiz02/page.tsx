"use client";
import React, { useState } from "react";

type Props = {};

export default function Quiz02({}: Props) {
  const [one, setOne] = useState<string>("");
  const [two, setTwo] = useState<string>("");
  const [three, setThree] = useState<string>("");
  const [four, setFour] = useState<string>("");
  const [five, setFive] = useState<string>("");

  const oneOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOne(e.target.value);
    console.log(one);
  };
  const twoOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwo(e.target.value);
    console.log(one);
  };
  const threeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThree(e.target.value);
    console.log(one);
  };
  const fourOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFour(e.target.value);
    console.log(one);
  };
  const fiveOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFive(e.target.value);
    console.log(one);
  };

  const handleGo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (one !== "") {
      const calTwo: string = String((one * 7) / 100);
      setTwo(calTwo);
      const calThree: string = String(one * 1.07);
      setThree(calThree);
      const calFour: string = String((one * 3) / 100);
      setFour(calFour);
      const calFive: string = String(one * 1.04);
      setFive(calFive);
    } else if (two !== "") {
      const callOne: string = String((two * 100) / 7);
      setOne(callOne);
      const calThree: string = String(callOne * 1.07);
      setThree(calThree);
      const calFour: string = String((callOne * 3) / 100);
      setFour(calFour);
      const calFive: string = String(callOne * 1.04);
      setFive(calFive);
    } else if (three !== "") {
      const callOne: string = String((three * 100) / 107);
      setOne(callOne);
      const calTwo: string = String((callOne * 7) / 100);
      setTwo(calTwo);
      const calFour: string = String((callOne * 3) / 100);
      setFour(calFour);
      const calFive: string = String(callOne * 1.04);
      setFive(calFive);
    } else if (four !== "") {
      const callOne: string = String((four * 100) / 3);
      setOne(callOne);
      const calTwo: string = String((callOne * 7) / 100);
      setTwo(calTwo);
      const calThree: string = String(callOne * 1.07);
      setThree(calThree);
      const calFive: string = String(callOne * 1.04);
      setFive(calFive);
    } else if (five!==""){
        const callOne: string = String((five * 100) / 104);
        setOne(callOne);
        const calTwo: string = String((callOne * 7) / 100);
      setTwo(calTwo);
        const calThree: string = String(callOne * 1.07);
        setThree(calThree);
        const calFour: string = String((callOne * 3) / 100);
        setFour(calFour);
        
    }
  };
  const handleClear = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    setOne("")
    setTwo("")
    setThree("")
    setFour("")
    setFive("")
  }
  return (
    <form className="ml-5">
      <div className="text-lg">ผู้ใช้กรอกได้ 1 ช่อง</div>
      <table className="border">
        <tbody>
          <tr>
            <th className="border w-[200px] border-black">100</th>
            <th className="border w-[200px] border-black">7</th>
            <th className="border w-[200px] border-black">107</th>
            <th className="border w-[200px] border-black">3</th>
            <th className="border w-[200px] border-black">104</th>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                className="border border-black text-center"
                value={one}
                onChange={(e) => {
                  oneOnChange(e);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black text-center"
                value={two}
                onChange={(e) => {
                  twoOnChange(e);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black text-center"
                value={three}
                onChange={(e) => {
                  threeOnChange(e);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black text-center"
                value={four}
                onChange={(e) => {
                  fourOnChange(e);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black text-center"
                value={five}
                onChange={(e) => {
                  fiveOnChange(e);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-4 mt-2">
        <button
          className="font-bold py-2 px-4 rounded bg-blue-500 text-white"
          onClick={(e) => handleGo(e)}
        >
          Go
        </button>
        <button className="font-bold py-2 px-4 rounded bg-blue-500 text-white" onClick={(e)=>handleClear(e)}>
          clear
        </button>
      </div>
    </form>
  );
}
