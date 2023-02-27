import React, { useEffect, useMemo, useState } from "react";

type cardQueueProps = {
  title: string;
  dataQueue: any;
  idElem: string;
};

const CardAutoScroll = (props: cardQueueProps) => {
  const { title, dataQueue, idElem } = props;
  const [dataFilterQueue, setDataFilterQueue] = useState([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);

  useEffect(() => {
    if (dataQueue) {
      if (title === "ON PROCESS") {
        setDataFilterQueue(
          dataQueue.filter((data: any) => data.status === "ON_PROCESS")
        );
      }
      if (title === "READY TO PICKUP") {
        setDataFilterQueue(
          dataQueue.filter((data: any) => data.status === "READY_TO_PICK_UP")
        );
      }
    }
  }, [dataQueue, title]);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (isScrollingUp) {
        setScrollPosition((prevPosition) => prevPosition - 1);
      } else {
        setScrollPosition((prevPosition) => prevPosition + 1);
      }
    }, 15);

    return () => clearInterval(scrollInterval);
  }, [isScrollingUp]);

  useEffect(() => {
    const container = document.getElementById(idElem);
    if (container) {
      if (scrollPosition <= 0) {
        setIsScrollingUp(false);
      } else if (
        scrollPosition >=
        container.scrollHeight - container.offsetHeight
      ) {
        setIsScrollingUp(true);
      }
    }
  }, [idElem, scrollPosition]);

  const renderCardAutoScroll = useMemo(() => {
    return (
      <>
        <div
          className={`flex flex-col w-full max-h-[100vh] rounded-3xl h-4/5 font-fontAtkinson ${
            title === "ON PROCESS" ? "bg-sky-50" : "bg-green-50"
          }`}
        >
          <div
            className={`px-2 pt-6 pb-2 space-x-2 flex justify-center items-center text-center rounded-t-3xl 
                      border-t-4 font-fontAtkinson font-bold ${
                        title === "ON PROCESS"
                          ? "border-blue-600 text-blue-600"
                          : "border-green-600 text-green-600"
                      } text-[35px] 2xl:text-5xl`}
          >
            {title}
          </div>
          <div
            id={idElem}
            className="relative overflow-hidden p-4 space-y-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {dataFilterQueue.length > 7
              ? dataFilterQueue?.map((item: any, index: number) => {
                  return (
                    <div
                      className={`bg-white rounded-3xl py-8 text-center font-bold text-[35px] 2xl:text-[64px] truncate ${
                        title === "ON PROCESS"
                          ? "text-blue-900"
                          : "text-green-900"
                      }`}
                      style={{
                        top: `${index * 120}px`,
                        transform: `translateY(-${scrollPosition}px)`,
                      }}
                      key={item.id}
                    >
                      <p className="font-fontAtkinson">{item.name}</p>
                    </div>
                  );
                })
              : dataFilterQueue?.map((item: any) => {
                  return (
                    <div
                      className={`bg-white rounded-3xl py-8 text-center font-bold text-[35px] 2xl:text-[64px] truncate ${
                        title === "ON PROCESS"
                          ? "text-blue-900"
                          : "text-green-900"
                      }`}
                      key={item.id}
                    >
                      <p className="font-fontAtkinson">{item.name}</p>
                    </div>
                  );
                })}
          </div>
        </div>
      </>
    );
  }, [dataFilterQueue, idElem, scrollPosition, title]);

  return renderCardAutoScroll;
};

export default CardAutoScroll;
