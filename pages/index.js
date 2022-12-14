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
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
import Overview from "../components/Overview";

export default function Home() {
  const [tweet, setTweet] = useState("Ex. I'm sad..");
  const [tweetHTML, setTweetHTML] = useState("");
  const [response, setResponse] = useState({});
  const [vectorizer, setVectorizer] = useState("");
  const [result, setResult] = useState("");
  const [clicked, setClicked] = useState(false);
  const [showDetailed, setShowDetailed] = useState(false);
  const vectorizerOptions = ["count", "td-idf"];
  const editorRef = useRef(null);
  const router = useRouter();
  var count = 0;
  const sample = [
    { model11: 0 },
    { model2: 1 },
    { model3: 1 },
    { model4: 0 },
    { model5: 1 },
  ];
  function viewResult(sample) {
    if (sample==1) {
      setResult("Depressed :(");
    } else {
      setResult("Happy Person :))");
    }
    //console.log(result);
  }

  async function predictTweet() {
    if (editorRef.current) {
      console.log(editorRef.current.getContent({format: 'text'}));
      setTweetHTML(editorRef.current.getContent({format: 'text'}));
    }
    const data = {
      text: editorRef.current.getContent({format: 'text'}),
    };
    const response = await axios.post("/api/predict", data);
    setResponse(response.data);
    console.log(response.data);
    viewResult(response.data.result);
    setClicked(true);

    router.push("#results");
  }

  return (
    <div className=" ">
      <div className="sticky top-0 z-50">
        <Navbar
          links={[
            {
              title: "Home",
              link: "/",
            },
            {
              title: "Overview",
              link: "#overview",
            },
            {
              title: "Predict",
              link: "#predict",
            },
            {
              title: "Models and Dataset",
              link: "/models_dataset",
            },
          ]}
        />
      </div>
      <Head>
        <title>Depression Detector</title>
      </Head>

      <div className="py-10 w-screen h-min-screen  bg-cover bg-[url('/backgrounIndex.jpg')]">
        <div className="mx-5 text-4xl text-white  font-extrabold grid place-items-center py-2">
          Tweets based Depression Predictors
        </div>
        <div id="overview">
          <Overview />
        </div>

        <div className="bg-transparent transition-all ring-1 ring-sky-400 rounded-sm m-[100px] p-10 grid place-items-center">
          {/* <div className="pb-3 text-sky-400 font-mono text-2xl font-bold">
              Enter the tweet
            </div> */}
          <div id="predict" className="   ml-2  ">
            <div className="text-4xl text-sky-400 font-bold    ml-40 pl-5 mb-4 font-poppins ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Enter the tweet...")
                    .start()
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Four More Years!")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("Are you ready to celebrate!!")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("Hi Twitter. Thank you")
                    .pauseFor(500)
                    .deleteAll();
                }}
                options={{ loop: true }}
              />
            </div>
            <input
              value={tweet}
              onChange={(e) => {
                setTweet(e.target.value);
              }}
              className="px-3 py-2 ring-1 ring-gray-800 w-[50vw] "
            ></input>
          </div>
          <div className="my-10 ml-2 w-[110vh] overflow-hidden z-10">
            <Editor
              style={{ zIndex: 100 }}
              tinymceScriptSrc="/tinymce_6.2.0/tinymce/js/tinymce/tinymce.min.js"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                selector: "textarea",
                content_css: "dark",
                skin: "oxide-dark",
                height: 500,

                menubar: true,
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
          </div>
          <button id="results"
            className="px-5 py-3 mr-10 text- my-3 font-extrabold text-white bg-sky-400 rounded-lg   hover:scale-105 transition-all"
            onClick={()=>{predictTweet()}}
          >
            Submit
          </button>

         
        </div>

        {clicked && (
          <div >
            <div
              
              className="ml-[24vw] w-[50vw] m-3 px-10 py-5 ring-1 ring-sky-400 rounded-md"
            >
              <div className=" grid place-items-center text-3xl text-gray-300 font-bold font-sans">
                Results - {response.result}
              </div>
            </div>
            
          </div>
        )}
        <div className="grid mt-16 place-items-center mx-5">
              <div className="  text-gray-400 font-sans text-2xl font-bold mx-30">
                Accuracy of our models
              </div>
              <Graph />
            </div>
      </div>
    </div>
  );
}
