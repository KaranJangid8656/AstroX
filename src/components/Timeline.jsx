"use client";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="c-space section-spacing">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-heading">My Skill Curve</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-20 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:max-w-none md:flex-row top-40 md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-row hidden gap-4 items-center text-xl font-bold md:flex md:pl-20 ml-[2cm] text-neutral-300">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.job || item.title}
                    className={`object-contain shrink-0 relative ${
                      item.image.includes("paytm") || item.image.includes("sv-") ? "w-36 h-36 -left-[2cm]" : "w-24 h-24 -left-[1cm]"
                    } ${item.image.includes("sv-") ? "scale-[1.2]" : ""}`}
                  />
                )}
                <div className={`flex flex-col gap-1 max-w-[24rem] relative ${
                  item.image?.includes("paytm") || item.image?.includes("sv-") ? "-left-[1cm]" : ""
                }`}>
                  <h3 className="md:text-4xl whitespace-nowrap">{item.date}</h3>
                  <h3 className="text-3xl text-neutral-400 whitespace-pre-line">{item.title}</h3>
                  <h3 className="text-3xl text-[#25A36F] mt-4">{item.job}</h3>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-2xl pl-20 pr-4 md:pl-4 md:ml-[5cm] ml-0">
              <div className="block mb-4 text-left md:hidden">
                <h3 className="text-2xl font-bold text-neutral-300">{item.date}</h3>
                <h3 className="text-xl text-neutral-400 font-medium whitespace-pre-line mt-1">{item.title}</h3>
                <h3 className="text-xl text-[#25A36F] font-semibold mt-1">{item.job}</h3>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.job || item.title}
                    className={`mt-2 object-contain ${
                      item.image.includes("paytm") || item.image.includes("sv-") ? "w-28 h-28" : "w-20 h-20"
                    } ${item.image.includes("sv-") ? "scale-[1.2]" : ""}`}
                  />
                )}
              </div>
              {item.contents.map((content, index) => (
                <p className="mb-3 font-normal text-neutral-400" key={index}>
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        />
      </div>
      </div>
    </div>
  );
};
