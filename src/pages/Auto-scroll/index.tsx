import React, { useMemo } from "react";
import CardAutoScroll from "./components/card-auto-scroll";
import { dataQueue } from "./dummy/dummyQueue";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const AutoScroll = () => {
  const data = dataQueue;

  const renderAutoScroll = useMemo(() => {
    return (
      <>
        <div className="px-6 w-screen h-screen overflow-hidden font-fontAtkinson">
          <Link to="/" className="flex items-center text-xl">
            <FiArrowLeft />
            <p className="ml-2">Back</p>
          </Link>
          <h1 className="text-[50px] 2xl:text-8xl font-bold text-center mb-12 font-fontAtkinson">
            Auto Scroll DISPLAY
          </h1>
          <div className="w-full flex justify-evenly items-center">
            <div className="w-1/4">
              <CardAutoScroll
                title="ON PROCESS"
                dataQueue={data}
                idElem="on-process"
              />
            </div>
            <div className="w-1/4">
              <CardAutoScroll
                title="READY TO PICKUP"
                dataQueue={data}
                idElem="ready-to-pick-up"
              />
            </div>
          </div>
        </div>
      </>
    );
  }, [data]);

  return renderAutoScroll;
};

export default AutoScroll;
