import "./App.css";
import patternBackgroundDesktop from "./assets/images/pattern-background-desktop.svg";
import illustrationHero from "./assets/images/illustration-hero.svg";
import musicIcon from "./assets/images/icon-music.svg";

function App() {
  return (
    <div className="h-927 overflow-hidden relative p-5">
      <img
        className=" w-full absolute top-0"
        src={patternBackgroundDesktop}
        alt=""
      />
      <div className="overflow-hidden relative max-w-96 rounded-2xl bg-white mx-auto center">
        <img className="object-cover" src={illustrationHero} alt="" />
        <div className="text-center p-5 2sm:p-10 flex flex-col gap-5">
          <h1 className="font-bold text-2xl text-darkBlue">Order Summary</h1>
          <p className="text-sm text-desaturated font-medium">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex justify-between p-5 items-center rounded-lg bg-veryPale">
            <img src={musicIcon} alt="" />
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-darkBlue">Annual Plan</h3>
              <p className="text-sm font-medium text-desaturated">
                $59.99/year
              </p>
            </div>
            <a
              className="underline text-sm font-bold text-brightBlue hover:linkHover"
              href="#"
            >
              Change
            </a>
          </div>
          <button className="bg-brightBlue py-3 rounded-lg text-white font-bold text-sm shadow-lg shadow-[#3829e091] hover:bg-buttonHover transition">
            Proceed to Payment
          </button>
          <button className="text-sm font-bold text-desaturated hover:text-darkBlue transition">
            Cancel order
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
