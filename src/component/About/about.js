import React from 'react';
import Image from 'next/image';

export default function About() {
  const dataInterest = [
    '/Interest/js.png',
    '/Interest/react.png',
    '/Interest/node.png',
    '/Interest/next.png',
    '/Interest/tailwind.png',
    '/Interest/figma.png'
  ];

  return (
    <div className="pb-20">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-1 px-20">
        <div />
        <div>
          <div className="font-semibold text-1xl text-white text-3xl">
            Muhammad <span className="text-yellow-400">Aziz</span> Syafryadi
          </div>
          <div className="font-normal text-gray-500 pt-10">
            I&apos;m a Mobile Developer based in Jakarta, and currently working at AIA SG based in
            Batam. I&apos;m a Mobile developer with focus on the React Native, but still exploring
            other technologies and frameworks that catch my interest!
          </div>
        </div>
        <div />
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-1 px-20 pt-20 text-right lg:mr-40">
        <div />
        <div />
        <div>
          <div className="font-semibold text-1xl text-white text-3xl">Interest</div>
          <div className="flex flex-wrap flex-row-reverse -mx-px overflow-hidden sm:-mx-px">
            {dataInterest.map((item, index) => {
              return (
                <div key={index} className="w-auto overflow-hidden h-full my-3 px-3">
                  {/* <Image loader={imageLoader} src={dataInterest[index]} height={50} width={50} /> */}
                  <Image src={dataInterest[index]} height={50} width={50} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
