import Head from "next/head";
import React from "react";
import Typewriter from "typewriter-effect";
export default function Overview() {
  return (
    <div>
      <Head></Head>
      <div className="mx-5 text-2xl text-white  font-extrabold grid place-items-center py-2"><i>Overview</i></div>
      <div class="d1">
        <p className="py-2 mt-4 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all text-center text-gray-400 ring-2 ring-gray-300">
          Depression is a mood disorder that causes a persistent feeling of
          sadness and loss of interest. Also called major depressive disorder or
          clinical depression, it affects how you feel, think and behave and can
          lead to a variety of emotional and physical problems. You may have
          trouble doing normal day-to-day activities, and sometimes you may feel
          as if life isnt worth living.
        </p>
       </div>
        <div id="models" className=" flex flex-row space-x-20 my-10 mx-20 py-10 ">
          <div className="py-2 mx-10    transition-all text-center text-white   " >
            Depression is a common mental disorder. Globally, it is estimated
            that 5% of adults suffer from depression.
            
            Depression is a leading cause of disability worldwide and is a major
            contributor to the overall global burden of disease.
          
            More women are affected by depression than men. 
          <br />
      
            <b>
              <i>Depression can lead to suicide.</i>
            </b>
        
        </div>
 
      <img
        src="./images/how-to-cope-with-anxiety-and-depression-722x406.jpg"
        height="250"
        width="450"
        class="img_depression_page_1"
      />
</div>
<div className="mx-5 text-2xl text-white  font-extrabold grid place-items-center py-2"><i>Symptoms and patterns</i></div>
      <div class="d2">
        <p className="py-2 mx-10 hover:shadow-md hover:shadow-blue-500 hover:ring-blue-400 transition-all text-center text-gray-400 ring-2 ring-gray-300">
          During a depressive episode, the person experiences depressed mood
          (feeling sad, irritable, empty) or a loss of pleasure or interest in
          activities, for most of the day, nearly every day, for at least two
          weeks.
          
          <br /> Several other symptoms are also present, which may include poor
          concentration, feelings of excessive guilt or low self-worth,
          hopelessness about the future, thoughts about dying or suicide,
          disrupted sleep, changes in appetite or weight, and feeling especially
          tired or low in energy.
        
          <br />
          In some cultural contexts, some people may express their mood changes
          more readily in the form of bodily symptoms (e.g. pain, fatigue,
          weakness). Yet, these physical symptoms are not due to another medical
          condition.
     
          <br />
          During a depressive episode, the person experiences significant
          difficulty in personal, family, social, educational, occupational,
          and/or other important areas of functioning.
     
          <br />
          A depressive episode can be categorised as mild, moderate, or severe
          depending on the number and severity of symptoms, as well as the
          impact on the individuals functioning.
      
          <br />
          There are different patterns of mood disorders including:
        </p>


        <div className="py-8 mx-10    transition-all text-center text-white ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Single episode depressive disorder, meaning the persons first and only episode  recurrent depressive disorder, meaning the person has a history of  at least two depressive episodes   bipolar disorder, meaning that depressive episodes alternate with periods of manic symptoms, which include euphoria or irritability, increased activity or energy, and other symptoms such as increased talkativeness, racing thoughts, increased self-esteem, decreased need for sleep, distractibility, and impulsive reckless behaviour ")
                    .start()
                     
              
                }}
                options={{ loop: false }}
              />
            </div>
         
         
    
      </div>
      <div className="flex flex-row space-x-20 mx-20 py-10 ">
      <img
        src="./images/sad-lonely-woman-in-depression-with-flying-hair.jpeg"
        height="300"
        width="400"
        class="img_depression_page_1"
      />
     
       <div className="mx-5 text-2xl text-white  font-extrabold grid place-items-center py-2"><i>Prevention</i></div>
      <div className="py-8 mx-10  px-4 mt-20  hover:shadow-blue-500 hover:ring-blue-400 transition-all text-center ring-2 ring-gray-300 text-white ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("  Take steps to control stress , to increase your resilience and boost your self-esteem. Reach out to family and friends , especially in times of crisis, to help you weather rough spells.    Get treatment at the earliest sign of a problem  to help prevent depression from worsening. Consider getting long-term maintenance treatment  to help prevent a relapse of symptoms.")
                    .start()
  
                }}
                options={{ loop: false }}
              />
         
         </div>
          
   
          
          
        
      </div>
    </div>
  );
}
