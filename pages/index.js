import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Home() {
  const [tweet, setTweet] = useState("Nishanth is a asshole..");

  async function predictTweet() {
    const data = {
      tweet: tweet,
    };
    const response = await axios.post("/api/predict", data);
  }

  return (
    <div className="w-screen h-screen ">
      <Head>
        <title>Depression Detector</title>
      </Head>
      <Navbar />
      <div className="py-10 bg-blue-100">
        <div className="mx-5 text-4xl font-bold grid place-items-center py-10">
          Tweets based Depression Predictors
        </div>
        <div className="bg-blue-200  transition-all ring-1 ring-black rounded-sm m-[100px] p-10 grid place-items-center">
          <div className="grid place-items-center">
            <div className="pb-3 font-mono text-2xl font-bold">
              Enter the Tweet
            </div>
            <input
              value={tweet}
              onChange={(e) => {
                setTweet(e.target.value);
              }}
              className="px-3 py-2 ring-1 ring-gray-800 w-[50vw]"
            ></input>
          </div>
          <button
            onClick={predictTweet}
            className="px-5 py-3 my-3 bg-blue-300 rounded-lg font-semibold hover:scale-105 transition-all"
          >
            Predict !!
          </button>
        </div>
      </div>
    </div>
  );
}
