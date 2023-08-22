import React from "react";

// practice advice card
function Card() {
  const card = [
    {
      name: "A single source of truth ",
      p: "Newton thought that light was made up of particles, but then it was discovered",
      src: "cover (1)",
    },
    {
      name: "Fatest way to organize ",
      p: "“Quantum mechanics” is the description of the behaviour of matter",
      src: "cover (2)",
    },
    {
      name: "Fastest way to take action ",
      p: "They describe a universe consisting of bodies moving",
      src: "cover (3)",
    },
    {
      name: "Work better  together ",
      p: "They finally obtained a consistent description of the behaviour ",
      src: "cover (4)",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {card.map(({ name, p, src }, index) => (
          <div key={index} className="bg-white w-[230px] h-[341px] ">
            <div className="flex flex-col text-left p-8 gap-3">
              <h5 className="text-[16px] font-semibold leading-6">{name}</h5>
              <p className="text-[14px] font-medium leading-5 opacity-50">
                {p}
              </p>
            </div>
            <img className="" src={`../Assets/${src}.png`} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
