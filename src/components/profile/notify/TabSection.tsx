import { NAV_NOTIFY, NOTIFY } from "@/data/profile/notify";
import { INotify } from "@/models";
import React, { useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const TabSection = ({
  setNotify,
}: {
  setNotify: (notify: INotify[]) => void;
}) => {
  const [currentTab, setCurrentTab] = useState(NAV_NOTIFY[0].name);

  const onClickTab = (tabName: string) => {
    setCurrentTab(tabName);
    const filter = NOTIFY.filter((notify) => notify.type.name === tabName);
    setNotify(filter);
  };

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 justify-between items-center">
      {NAV_NOTIFY.map((nav, index) => (
        <div
          onClick={() => onClickTab(nav.name)}
          className="cursor-pointer flex flex-row gap-3 items-center justify-between group"
          key={index}
        >
          <div
            className={`flex flex-row justify-between gap-3 group-hover:text-[#FFC535] ${
              currentTab === nav.name ? "text-[#FFC535]" : ""
            }`}
          >
            {nav.icon}
            <div>{nav.name}</div>
          </div>
          <div className="group-hover:text-[#FFC535] sm:hidden flex items-center">
            <KeyboardArrowRightOutlinedIcon fontSize="small" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabSection;
