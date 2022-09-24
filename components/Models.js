import React from "react";
import CollapseCard from "./CollapseCard";

import Graph from "./Graph";

export default function Models() {
  const opts = {
    height: "390",
    width: "640",
    playVars: {
      autoplay: 1,
    },
  };
  // _onReady(event){
  //   event.target.pauseVideo();}
  return (
    <div className="bg-[url('/backgrounIndex.jpg')] min-w-screen bg-cover    ">
      <p
        id="dataset"
        className="text-white font-extrabold text-center pt-[80px] text-4xl"
      >
        The Dataset collected had 11 columns which includes the following
      </p>
      <div
        className="grid grid-cols-3 w-[90vw] gap-[40px] py-10 mx-10 text-white content-center
          text-center"
      >
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all text-sky-400 ring-2 ring-gray-300">
          Index
        </label>
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all text-gray-400 ring-2 ring-gray-300">
          post_id
        </label>
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all  text-sky-400 ring-2 ring-gray-300">
          post_created
        </label>
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all text-gray-400 ring-2 ring-gray-300">
          post_text
        </label>
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all  text-sky-400 ring-2 ring-gray-300">
          user_id
        </label>
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all  text-gray-400 ring-2 ring-gray-300">
          followers
        </label>
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all  text-sky-400 ring-2 ring-gray-300">
          friends
        </label>
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all text-gray-400 ring-2 ring-gray-300">
          favourites
        </label>
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all text-sky-400 ring-2 ring-gray-300">
          statuses
        </label>
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all text-gray-400 ring-2 ring-gray-300">
          retweets
        </label>
        <label className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all text-sky-400 ring-2   ring-gray-300">
          label
        </label>
      </div>

      <div id="models" className=" flex flex-row space-x-20 mt-10 mx-20 py-10 ">
        <p className="text-sky-400 text-2xl font-extrabold text-center">
          Using the above columns correlation between different sets of columns
          has been found. Out of all the columns the one which mattered the most
          was, label indiacting if the person was depressed or not.{" "}
        </p>
      </div>
      <p className="text-white font-extrabold text-center pt-10 text-4xl">
        The models which were used are:
      </p>
      <br />

      <div className="py-10 text-center  text-white font-extrabold   pt-10 text-2xl ">
        {/* <h2>
          <i>
            <b>Multionomial Naive Bayes</b>
          </i>
        </h2> */}
        <CollapseCard title="Multionomial Naive Bayes">
          <div className="flex flex-row space-x-20 mx-20 py-10 ">
            <div className="text-sky-400 text-2xl text-center font-extrabold">
              The Multinomial Naive Bayes algorithm is a Bayesian learning
              approach popular in Natural Language Processing (NLP). The program
              guesses the tag of a text, such as an email or a newspaper story,
              using the Bayes theorem. <br />
              <br />
              {/* <YouTube videoId="8vv9julkQEA" 
            opts={opts} onReady={this._onReady} />; */}
            </div>
            <img src="./images/MNB.jpeg" height="250" width="250" />
          </div>
          <div className="my-20 ml-[50vh] ratio ratio-16x9">
            <iframe
              width="720"
              height="360"
              src="https://www.youtube.com/embed/8vv9julkQEA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </CollapseCard>
      </div>

      <div className="divright text-white font-extrabold text-center pt-10 text-2xl">
        <CollapseCard title="GLOVE">
          <div className="flex flex-row space-x-20 mx-20 py-10 ">
            <img src="./images/Glove.jpeg" height="250" width="250" />
            <div className="text-gray-400 text-2xl text-center font-extrabold">
              GloVe is an unsupervised learning algorithm for obtaining vector
              representations for words. Training is performed on aggregated
              global word-word co-occurrence statistics from a corpus, and the
              resulting representations showcase interesting linear
              substructures of the word vector space.
            </div>
          </div>

          <div className="my-20 ml-[50vh] ratio ratio-16x9">
            <iframe
              width="720"
              height="360"
              src="https://www.youtube.com/embed/Fn_U2OG1uqI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </CollapseCard>
      </div>

      <div className="divleft text-white font-extrabold text-center pt-10 text-2xl">
        <CollapseCard title="Gaussian Naive Bayes">
          <div className="flex flex-row space-x-20 mx-20 py-10 ">
            <div className="text-sky-400 text-2xl text-center font-extrabold">
              <p className="p">
                Naïve Bayes is a probabilistic machine learning algorithm used
                for many classification functions and is based on the Bayes
                theorem. Gaussian Naïve Bayes is the extension of naïve Bayes.
                While other functions are used to estimate data distribution,
                Gaussian or normal distribution is the simplest to implement as
                you will need to calculate the mean and standard deviation for
                the training data.
              </p>
              <br />
            </div>
            <img src="./images/GNB.png" height="220" width="250" />
          </div>

          <div className="my-20 ml-[50vh] ratio ratio-16x9">
            <iframe
              width="720"
              height="360"
              src="https://www.youtube.com/embed/H3EjCKtlVog"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>{" "}
          </div>
        </CollapseCard>
      </div>

      <div className="divright text-white font-extrabold text-center pt-10 text-2xl">
        <CollapseCard title="Sequential RNN">
          <div className="flex flex-row space-x-20 mx-20 py-10 ">
            <img src="./images/SequentialRNN.jpeg" height="230" width="250" />
            <div className="text-gray-400 text-2xl text-center font-extrabold">
              <p className="p">
                Recurrent Neural Network (RNN) is a Deep learning algorithm and
                it is a type of Artificial Neural Network architecture that is
                specialized for processing sequential data. RNNs are mostly used
                in the field of Natural Language Processing (NLP).
                <br />
              </p>
              <br /> <br /> <br />
            </div>
          </div>

          <div className="my-20 ml-[50vh] ratio ratio-16x9">
            <iframe
              width="720"
              height="360"
              src="https://www.youtube.com/embed/SBTbLN1W1RY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </CollapseCard>
        <div className="mt-16 grid  place-items-center mx-5">
          <div className="  text-white-400 font-sans text-2xl font-bold mx-30">
            <i>Accuracy of our models</i>
          </div>
          <Graph />
        </div>
      </div>
      {/* <div className="divleft">
        <h2>
          <i>
            <b>TBD</b>
          </i>
        </h2>
        <br />
        <p className="p"></p>
      </div> */}
    </div>
  );
}
