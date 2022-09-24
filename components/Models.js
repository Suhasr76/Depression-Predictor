import React from "react";
import YouTube from 'react-youtube';

export default function Models() {
 
  const opts={
    height: '390',
    width:'640',
    playVars:{
      autoplay:1,},
    }
    // _onReady(event){
    //   event.target.pauseVideo();}
    return(
    <div className="bg-[url('/backgrounIndex.jpg')] min-w-screen bg-cover    ">
     
        <p className="text-white font-extrabold text-center pt-10 text-4xl">The Dataset collected had 11 columns which includes the following</p>
        <div className="grid grid-cols-5 w-full gap-2 py-10 mx-4 text-white content-center
          text-center">
          <label className="  text-sky-400 border-4 border-red-400">Index</label>
          <label className="  text-gray-400 border-4 border-red-400">post_id</label>
          <label className="   text-sky-400 border-4 border-red-400">post_created</label>
          <label className="  text-gray-400 border-4 border-red-400">post_text</label>
          <label className="   text-sky-400 border-4 border-red-400">user_id</label>
          <label className="   text-gray-400 border-4 border-red-400">followers</label>
          <label className="   text-sky-400 border-4 border-red-400">friends</label>
          <label className="  text-gray-400 border-4 border-red-400">favourites</label>
          <label className="  text-sky-400 border-4 border-red-400">statuses</label>
          <label className="  text-gray-400 border-4 border-red-400">retweets</label>
          <label className="  text-sky-400 border-4   border-red-400">label</label>
        </div>
        
        <div className="flex flex-row space-x-20 mx-20 py-10 ">
        <p className="text-sky-400 text-2xl font-extrabold text-center">
          Using the above columns correlation between different sets of columns
          has been found. Out of all the columns the one which mattered the most
          was, label indiacting if the person was depressed or not. </p>
           
       
      
         </div>
        <p className="text-white font-extrabold text-center pt-10 text-4xl">The models which were used are:</p>
        <br />
      
      <div className="py-10 text-center  text-white font-extrabold   pt-10 text-2xl " >
        <h2>
          <i>
            <b>Multionomial Naive Bayes</b>
          </i>
        </h2>
        <div className="flex flex-row space-x-20 mx-20 py-10 ">
          <div className="text-sky-400 text-2xl text-center font-extrabold">
          The Multinomial Naive Bayes algorithm is a Bayesian learning approach
          popular in Natural Language Processing (NLP). The program guesses the
          tag of a text, such as an email or a newspaper story, using the Bayes
          theorem. <br />
          <br />
 
         
          {/* <YouTube videoId="8vv9julkQEA" 
            opts={opts} onReady={this._onReady} />; */}
          </div>
          <img src="./images/MNB.jpeg" height="250" width="250" />
        </div>
 
        <br />
       
      </div>
      <div class="divright text-white font-extrabold text-center pt-10 text-2xl">
        <h2>
          <i>
            <b>Glove</b>
          </i>
        </h2>
        <div className="flex flex-row space-x-20 mx-20 py-10 ">
          <img src="./images/Glove.jpeg" height="250" width="250" />
          <div className="text-gray-400 text-2xl text-center font-extrabold">
          GloVe is an unsupervised learning algorithm for obtaining vector
          representations for words. Training is performed on aggregated global
          word-word co-occurrence statistics from a corpus, and the resulting
          representations showcase interesting linear substructures of the word
          vector space.
        
       
      
        </div>
        </div>
      </div>
      <div class="divleft text-white font-extrabold text-center pt-10 text-2xl">
        <h2>
          <i>
            <b>Gaussian Naive Bayes</b>
          </i>
        </h2>
          <div className="flex flex-row space-x-20 mx-20 py-10 ">
          <div className="text-sky-400 text-2xl text-center font-extrabold">
          <p class="p">
          Naïve Bayes is a probabilistic machine learning algorithm used for
          many classification functions and is based on the Bayes theorem.
          Gaussian Naïve Bayes is the extension of naïve Bayes. While other
          functions are used to estimate data distribution, Gaussian or normal
          distribution is the simplest to implement as you will need to
          calculate the mean and standard deviation for the training data.
        
        </p>
        <br />
        </div>
        <img src="./images/GNB.png" height="220" width="250" />
    
      </div>
      </div>
      <div class="divright text-white font-extrabold text-center pt-10 text-2xl">
        <h2>
          <i>
            <b>Sequential RNN</b>
          </i>
        </h2>
        <div className="flex flex-row space-x-20 mx-20 py-10 ">
         
          <img src="./images/SequentialRNN.jpeg" height="230" width="250" /> 
          <div className="text-gray-400 text-2xl text-center font-extrabold">
          <p class="p">
    
          Recurrent Neural Network (RNN) is a Deep learning algorithm and it is
          a type of Artificial Neural Network architecture that is specialized
          for processing sequential data. RNNs are mostly used in the field of
          Natural Language Processing (NLP).
          <br />
         
        </p>
        <br /></div></div>
       
      </div>
      {/* <div class="divleft">
        <h2>
          <i>
            <b>TBD</b>
          </i>
        </h2>
        <br />
        <p class="p"></p>
      </div> */}
    </div>
  );
  
   
}
