import Typical from 'react-typical';

export const FirstContent = () => {
  const typeString = [
    'Hi, I am Aziz',
    1500,
    'Never stop to try to be a good developer',
    2000,
    'Love to Design and Dev specialy in javascript framework',
    2000,
    'Thank for visit !',
    8000
  ];

  return (
    <div className="grid lg:grid-cols-1 gap-1">
      <div className="m-3 p-2 rounded-lg w-full text-white ">
        <div className="align-middle">
          <h1 className="font-semibold text-7xl text-white">
            Hello <span className="text-yellow-400">World !</span>
          </h1>
          <div className="font-normal text-1xl text-white pt-10">
            <Typical steps={typeString} loop={Infinity} wrapper="div" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstContent;
