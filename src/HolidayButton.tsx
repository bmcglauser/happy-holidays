import * as React from "react";
import type { Holiday } from "./App";

type HolidayButtonProps = {
  holiday: Holiday;
  setHoliday: React.Dispatch<React.SetStateAction<Holiday>>;
};

export const HolidayButton: React.FC<HolidayButtonProps> = ({
  holiday,
  setHoliday,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setHoliday(holiday);
      }}
    >
      <img src={holiday.icon} height="100px" width="100px" />
    </button>
  );
};
