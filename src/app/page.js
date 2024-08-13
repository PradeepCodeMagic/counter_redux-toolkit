"use client"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/Counter/CounterSlice";

import WsImg from "../../public/images/ws.jpg"

export default function Home() {

    const dispatch=useDispatch();
    const myCounter=useSelector((state)=>state.WsCounter.value);

  


  return (
    <>
      <center>
      <button onClick={()=>dispatch(decrement())} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">-</button>
      <br />
      <h2> Counter : {myCounter} </h2>
      <button onClick={()=>dispatch(increment())} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">+</button>

      </center>
      
    </>
  );
}
