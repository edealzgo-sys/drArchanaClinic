import React from "react";

import t1 from "../../assets/h1.png";
import t2 from "../../assets/h2.png";
import t3 from "../../assets/h3.png";
import t4 from "../../assets/h4.png";
import t5 from "../../assets/pexels-gabby-k-20419196.jpg";
import t6 from "../../assets/pexels-mart-production-8450233.jpg";
import t7 from "../../assets/pexels-pixabay-163186.jpg";

const treatments = [
  {
    title: "Anal Fissures",
    image: t1,
    desc: "Natural homeopathic treatment for pain relief and healing.",
  },
  {
    title: "Arthritis",
    image: t2,
    desc: "Joint pain relief with long-term mobility improvement.",
  },
  {
    title: "Behavioral Issues",
    image: t3,
    desc: "Emotional balance and mental wellness therapies.",
  },
  {
    title: "Bleeding Disorders",
    image: t4,
    desc: "Improves clotting and blood health naturally.",
  },
  {
    title: "Bronchitis",
    image: t5,
    desc: "Respiratory care for chronic breathing problems.",
  },
  {
    title: "Carpal Tunnel Syndrome",
    image: t6,
    desc: "Nerve pain relief and wrist mobility support.",
  },
  {
    title: "Chronic Fatigue Syndrome",
    image: t7,
    desc: "Boosts energy levels and immunity naturally.",
  },
];

const Treatments = () => {
  return (
    <div className="w-full py-12 px-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Specialized Treatments
      </h2>

      {/* Auto vertical scroll container */}
      <div className="h-[520px] overflow-hidden">
        <div className="flex flex-col gap-8 auto-scroll">

          {[...treatments, ...treatments].map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-center perspective"
            >
              {/* Flip Card */}
              <div className="relative w-[320px] h-[220px] preserve-3d transition-transform duration-700 hover:rotate-y-180">

                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-green-700 text-white rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-lg">
                  <h3 className="text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm mb-4">
                    {item.desc}
                  </p>
                  <button className="px-4 py-2 bg-orange-400 rounded-full text-sm font-semibold hover:bg-orange-500">
                    Learn More
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Treatments;
