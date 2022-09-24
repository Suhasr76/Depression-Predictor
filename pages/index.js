import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Graph from "../components/Graph";
import DetailedResult from "../components/DetailedResult";
//import Multiselect from "multiselect-react-dropdown";

export default function Home() {
  const [tweet, setTweet] = useState("I'm sad..");
  const [tweetHTML, setTweetHTML] = useState("");
  const [response, setResponse] = useState({});
  const [vectorizer, setVectorizer] = useState("");
  const [result, setResult] = useState("");
  const [clicked, setClicked] = useState(false);
  const vectorizerOptions = ["count", "td-idf"];
  const editorRef = useRef(null);
  const sample = [
    { model11: 0 },
    { model2: 0 },
    { model3: 1 },
    { model4: 0 },
    { model5: 1 },
  ];
  function viewResult(sample) {
    var count = 0;
    //console.log(sample);
    for (let i = 0; i < sample.length; i++) {
      //console.log(sample[i]);
      let temp = Object.keys(sample[i]);
      count += sample[i][temp];
      //console.log(count);
    }
    const mid = sample.length / 2;
    if (count > mid) {
      setResult("Depressed :(");
    } else {
      setResult("Happy Person :))");
    }
    //console.log(result);
  }

  async function predictTweet() {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setTweetHTML(editorRef.current.getContent());
    }
    const data = {
      tweet: tweet,
    };
    const response = await axios.post("/api/predict", data);
    setResponse(response.data);

    setResponse(sample);
    viewResult(sample);
    setClicked(true);
  }

  function vectorizerChange() {}

  return (
    <div className="w-screen h-screen ">
      <Head>
        <title>Depression Detector</title>
      </Head>
      <Navbar />
      <div className="py-10 w-screen h-screen  bg-cover bg-[url('/backgroundIndex.jpg')]">
        <div className="mx-5 text-4xl text-black  font-extrabold grid place-items-center py-2">
          Tweets based Depression Predictors
        </div>
        <div className="grid  place-items-center mx-5">
          <div className="  font-sans text-2xl font-bold mx-30">
            Accuracy of our models
          </div>
          <Graph />
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
          <div className="my-10">
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            {/* <Multiselect
              value={vectorizer}
              onChange={setVectorizer}
              options={vectorizerOptions.map((item, index) => {
                return {
                  label: item,
                  value: item,
                };
              })}
            /> */}
            <select
              className="w-[14vw] pl-1 ring-1 ring-gray-300 rounded-sm"
              value={vectorizer}
              onChange={(e) => {
                setVectorizer(e.target.value);
              }}
            >
              <option value="">Select</option>
              {vectorizerOptions.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            className="px-5 py-3 my-3 bg-blue-300 rounded-lg font-semibold hover:scale-105 transition-all"
            /* onClick={() => {
                log;
                predictTweet;
              }} */
            onClick={predictTweet}
          >
            Log editor content
          </button>

          <div>{JSON.stringify(response)}</div>
          <div>{JSON.stringify(tweet)}</div>
          <div>{JSON.stringify(tweetHTML)}</div>
          <div>{JSON.stringify(vectorizer)}</div>
          <div>{JSON.stringify(result)}</div>
        </div>

        {clicked && (
          <div className=" ">
            <div className="text-3xl font-sans">Results</div>
            <DetailedResult response={sample} />
          </div>
        )}
      </div>
    </div>
  );
}
