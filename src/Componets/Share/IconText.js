import React from "react";
import { Icon } from "@iconify/react";

const IconText = ({ iconName, displayText, active }) => {
  return (
    <>
      <div className="flex items-center justify-start mb-6">
        <div className="px-4">
          <Icon
            icon={iconName}
            color={active ? "white" : "gray"}
            fontSize={24}
          />
        </div>
        <div
          className={`${
            active ? "text-white" : "text-gray-400"} 
            text-sm font-semibold hover-text-white hover:text-white`}
        >
          {displayText}
        </div>
      </div>
    </>
  );
};

export default IconText;
