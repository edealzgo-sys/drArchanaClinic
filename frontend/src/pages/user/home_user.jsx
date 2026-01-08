import React, { useEffect, useState } from "react";

import bg1 from "../../assets/h1.png";
import bg2 from "../../assets/h2.png";
import bg3 from "../../assets/h3.png";

const HomeUser = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // show welcome message on page load
    setShowWelcome(true);
  }, []);

  return (
    <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">

      {/* Section 1 */}
      <section
        className="h-screen snap-start bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        {showWelcome && (
          <div className="bg-black/60 p-10 rounded-2xl animate-fadeIn">
            <h1 className="text-white text-5xl font-bold mb-4">
              Welcome 👋
            </h1>
            <p className="text-gray-200 text-lg">
              We’re happy to have you here
            </p>
          </div>
        )}
      </section>

      {/* Section 2 */}
      <section
        className="h-screen snap-start bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="bg-black/50 p-8 rounded-xl">
          <h2 className="text-white text-4xl font-semibold">
            Book Your Appointment
          </h2>
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="h-screen snap-start bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="bg-black/50 p-8 rounded-xl">
          <h2 className="text-white text-4xl font-semibold">
            Explore Treatments
          </h2>
        </div>
      </section>

    </div>
  );
};

export default HomeUser;
