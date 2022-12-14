import react, { useState } from "react";

function Item({ model, result, count }) {
  return (
    <div className="py-1 text-gray-400 px-3 flex flex-row justify-center">
      <div className="text-lg font-bold font-sans">
        {count}. {model} -{" "}
      </div>
      <div className={`text-${result ? "red-500" : "blue-500"}`}>
        {result ? " Depressed" : " Not Depressed"}
      </div>
    </div>
  );
}

export default function DetailedResult({ response }) {
  console.log("response", response);
  var newResponse = [];
  for (let i = 0; i < response.length; i++) {
    var temp = Object.keys(response[i]);
    newResponse.push({
      model: temp,
      result: response[i][temp],
    });
  }
  return (
    <div>
      <div className="my-4 mx-3">
        {newResponse.map((item, index) => {
          return (
            <Item
              key={index}
              count={index + 1}
              model={item.model}
              result={item.result}
            />
          );
        })}
      </div>
    </div>
  );
}
