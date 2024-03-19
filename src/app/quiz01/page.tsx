"use client";
import React, { useState } from "react";

type Props = {};

export default function Quiz01({}: Props) {
  const [starNumber, setStarNumber] = useState<number>(0);
  const [starPattern, setStarPattern] = useState<string[]>([]);
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStarNumber(Number(e.target.value));
  };

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let star:string = "";
    let arr:string[] = [];
    if (starNumber % 2 !== 0) {
      for (let i:number = 1; i <= starNumber; i++) {
        star += "*";
        arr.push(star);
      }
      setStarPattern(arr);
    }
    if (starNumber % 2 == 0) {
      for (let j:number = starNumber; j >= 1; j--) {
        for (let k:number = 1; k <= j; k++) {
          star += "*";
        }
        arr.push(star);
        star = "";
      }
      setStarPattern(arr);
    }
  };

  return (
    <form>
      <label htmlFor="star">Number of Star : </label>
      <input
        id="star"
        name="star"
        type="number"
        value={starNumber}
        min={'0'}
        onChange={handleOnchange}
      ></input>
      <button onClick={handleSubmit}>Go</button>
      <div>
        {starPattern &&
          starPattern.map((el, index) => <div key={index}>{el}</div>)}
      </div>
    </form>
  );
}
