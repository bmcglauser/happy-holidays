import * as React from "react";
import tree from "./assets/tree.svg";
import star from "./assets/star.svg";
import candles from "./assets/candles.svg";
import { HolidayButton } from "./HolidayButton";
// import { useParams } from "react-router-dom";

export type Holiday = {
  name: string;
  icon: string;
  primary: string;
  secondary: string;
  tertiary: string;
  yMargins: [string, string];
};
const christmas: Holiday = {
  name: "christmas",
  icon: tree,
  primary: "rgb(22, 163, 74)",
  secondary: "rgb(182, 32, 39)",
  tertiary: "rgb(255, 255, 232)",
  yMargins: ["-50px", "-175px"],
};
const hannukah: Holiday = {
  name: "hannukah",
  icon: star,
  primary: "rgb(51,76,150)",
  secondary: "rgb(240,232,214)",
  tertiary: "rgb(240,198,52)",
  yMargins: ["-120px", "-175px"],
};
const kwanzaa: Holiday = {
  name: "kwanzaa",
  icon: candles,
  primary: "#d40000",
  secondary: "#ffba00",
  tertiary: "#00000000",
  yMargins: ["0px", "50px"],
};
const ALL_HOLIDAYS = [christmas, hannukah, kwanzaa];

const App: React.FC<{}> = () => {
  const [currentHoliday, setCurrentHoliday] = React.useState(christmas);

  // const { name } = useParams();

  // const decryptedName = name
  //   ?.split("x")
  //   .map((hex) => parseInt(hex, 16))
  //   .map((code) => String.fromCharCode(+code))
  //   .join("");

  return (
    <div
      className="relative border-8"
      style={{
        borderColor: currentHoliday.primary,
        background: currentHoliday.secondary,
      }}
    >
      <div className="h-full w-full flex flex-col ">
        <div className="flex w-full items-center  justify-around absolute -mt-16 scale-50">
          {ALL_HOLIDAYS.map((holiday) => (
            <HolidayButton
              key={holiday.name}
              holiday={holiday}
              setHoliday={setCurrentHoliday}
            />
          ))}
        </div>
        <div className="flex h-full flex-col items-center">
          <div
            className="flex flex-col items-center justify-between mt-40 p-4 px-12 rounded-xl"
            style={{
              background: currentHoliday.tertiary,
              color: currentHoliday.primary,
            }}
          >
            <span className="text-5xl">Happy</span>
            <span className="text-5xl mt-4">Holidays!</span>
            {/* <span className="text-6xl mt-4">{decryptedName}!</span> */}
          </div>
          <span
            className="cake"
            style={{
              marginTop: currentHoliday.yMargins[0],
              marginBottom: currentHoliday.yMargins[1],
            }}
          >
            <img src={currentHoliday.icon} width="300px" />
          </span>
          <p
            className="text-4xl text-center p-4 rounded-xl mx-4 mb-8"
            style={{
              background: currentHoliday.tertiary,
              color: currentHoliday.primary,
            }}
          >
            May your New Year
            <br />
            be full of joy!
          </p>
          {/* <div className="flex flex-col items-center justify-between -mt-8 mb-64">
            <span className="text-5xl">I love you</span>
            <span className="text-5xl mt-4">So much!!</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
