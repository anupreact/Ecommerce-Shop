
import React, { useState } from "react";

const Club = (Player , shot ,runs) => {
  const GoodPlayer = (props) => {
    const [shots, setShots] = useState(0);
    const handleShots = () => {
      setShots(shots + runs);
    };
    return (
      <Player
        hocShotName={shot}
        hocHandleShot={handleShots}
        hocShot={shots}
        {...props}
      />
    );
  };
  return GoodPlayer;
};
export default Club;
