import React from "react";
import { LogoAppleAppstore, LogoGooglePlaystore } from "react-ionicons";

const Download = ({ buttonColor, iconColor }) => {
  return (
    <React.Fragment>
      <button
        className={`flex flex-wrap items-center justify-center  gap-2 bg-${buttonColor} text-${iconColor} py-3 px-4 rounded-md`}
      >
        <LogoGooglePlaystore color={iconColor} />
        <p className={`font-bold text-${iconColor}`}> Get it on Google Play</p>
      </button>
      <button
        className={`flex items-center justify-center gap-2 bg-${buttonColor} text-${iconColor} py-3 px-4 rounded-md`}
      >
        <LogoAppleAppstore color={iconColor} />
        <p className={`font-bold text-${iconColor}`}>
          Download on the App Store
        </p>
      </button>
    </React.Fragment>
  );
};

export default Download;
