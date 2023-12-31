import React from "react";

const ViewPlaylist = ({ textTitle, cardData }) => {
  return (
    <>
      <div className="text-white">
        <div className="text-2xl font-semibold h-45 mt-4">{textTitle}</div>
        <div className="w-full flex justify-between space-x-4 rounded-lg">
          {cardData.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <>
      <div className="w-1/5  p-4 bg-gray-10 bg-opacity-100 rounded-lg">
        <div className="mb-4">
          <img
            className="w-full rounded-md"
            alt="Song thumbnail"
            src={imgUrl}
          />
        </div>
        <div className="Title text-white font-semibold py-2">{title}</div>
        <div className="description text-gray-500">{description}</div>
      </div>
      {/* 180 261 */}
    </>
  );
};
export { ViewPlaylist, Card };
