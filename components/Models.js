import React from "react";

export default function Models() {
  return (
    <div>
      <div class="Data">
        <p>The Dataset collected had 11 columns which includes the following</p>
        <ul>
          <li>Index</li>
          <li>post_id</li>
          <li>post_created</li>
          <li>post_text</li>
          <li>user_id</li>
          <li>followers</li>
          <li>friends</li>
          <li>favourites</li>
          <li>statuses</li>
          <li>retweets</li>
          <li>label</li>
        </ul>
        <p>
          Using the above columns correlation between different sets of columns
          has been found. Out of all the columns the one which mattered the most
          was, label indiacting if the person was depressed or not. The
          correlation values with respect to label is spurious which led us to
          dropping out some columns leaving us with post_text and label as the
          final 2 columns. Using these we have trained 5 different models and
          determined the final result by voting of the predictions from each of
          the model.
        </p>
        <p>The models which were used are:</p>
        <br />
      </div>
      <div class="divleft">
        <h2>
          <i>
            <b>Multionomial Naive Bayes</b>
          </i>
        </h2>
        <p class="p">
          The Multinomial Naive Bayes algorithm is a Bayesian learning approach
          popular in Natural Language Processing (NLP). The program guesses the
          tag of a text, such as an email or a newspaper story, using the Bayes
          theorem. <br />
          <br />
          It calculates each tags likelihood for a given sample and outputs the
          tag with the greatest chance. The Naive Bayes classifier is made up of
          a number of algorithms that all have one thing in common: each feature
          being classed is unrelated to any other feature. A features existence
          or absence has no bearing on the inclusion or exclusion of another
          feature.
        </p>
        <br />
        <img src="./images/MNB.jpeg" height="250" width="250" />
      </div>
      <div class="divright">
        <h2>
          <i>
            <b>Glove</b>
          </i>
        </h2>
        <p class="p">
          GloVe is an unsupervised learning algorithm for obtaining vector
          representations for words. Training is performed on aggregated global
          word-word co-occurrence statistics from a corpus, and the resulting
          representations showcase interesting linear substructures of the word
          vector space.
        </p>

        <p class="p">
          The GloVe model is trained on the non-zero entries of a global
          word-word co-occurrence matrix, which tabulates how frequently words
          co-occur with one another in a given corpus. Populating this matrix
          requires a single pass through the entire corpus to collect the
          statistics.
        </p>
        <br />
        <img src="./images/Glove.jpeg" height="250" width="250" />
      </div>
      <div class="divleft">
        <h2>
          <i>
            <b>Gaussian Naive Bayes</b>
          </i>
        </h2>
        <p class="p">
          Naïve Bayes is a probabilistic machine learning algorithm used for
          many classification functions and is based on the Bayes theorem.
          Gaussian Naïve Bayes is the extension of naïve Bayes. While other
          functions are used to estimate data distribution, Gaussian or normal
          distribution is the simplest to implement as you will need to
          calculate the mean and standard deviation for the training data.
        </p>
        <p class="p">
          The Gaussian probability density function can be used to make
          predictions by substituting the parameters with the new input value of
          the variable and as a result, the Gaussian function will give an
          estimate for the new input values probability.{" "}
        </p>
        <br />
        <img src="./images/GNB.png" height="220" width="250" />
      </div>
      <div class="divright">
        <h2>
          <i>
            <b>Sequential RNN</b>
          </i>
        </h2>
        <p class="p">
          Recurrent Neural Network (RNN) is a Deep learning algorithm and it is
          a type of Artificial Neural Network architecture that is specialized
          for processing sequential data. RNNs are mostly used in the field of
          Natural Language Processing (NLP).
          <br />
          <br /> RNN maintains internal memory, due to this they are very
          efficient for machine learning problems that involve sequential data.
          RNNs are also used in time series predictions as well.
        </p>
        <br />
        <img src="./images/SequentialRNN.jpeg" height="230" width="250" />
      </div>
      <div class="divleft">
        <h2>
          <i>
            <b>TBD</b>
          </i>
        </h2>
        <br />
        <p class="p"></p>
      </div>
    </div>
  );
}
