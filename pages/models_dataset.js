import React from "react";
import Models from "../components/Models";
import Navbar from "../components/Navbar";

export default function Model() {
  return (
    <div className="">
      <div className="sticky top-0 z-100">
        <Navbar
          links={[
            {
              title: "Home",
              link: "/",
            },
            {
              title: "Dataset",
              link: "#dataset",
            },
            {
              title: "Accuracy",
              link: "#accuracy",
            },
            {
              title: "Models",
              link: "#models",
            },
          ]}
        />
      </div>
      <Models />
    </div>
  );
}
