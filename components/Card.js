import React from "react";
import Image from "next/image";
import { InformationCircleIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Card = ({ name, location, bio, base64Img, isLoading }) => {
  return (
    <div className="justify-center items-center p-6 rounded-lg lg:text-left">
      <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md ">
        {/* Start */}
        <div className="flex flex-col p-4 gap-2">
          <div className="flex flex-row">
            <div className="flex flex-1 gap-4 items-center p-4 select-none rounded-lg border-4 ">
              <div className="h-20 w-20">
                <div className="block relative">
                  <Image
                    alt="methical profile"
                    src={
                      (isLoading && `/images/profile.jpg`) ||
                      base64Img ||
                      `/images/profile.jpg`
                    }
                    loading="eager"
                    className="mx-auto object-cover rounded-full h-20 w-20"
                    height={20}
                    width={20}
                  />
                </div>
              </div>
              <div className="">
                <div className="text-xl font-medium text-indigo-900 mb-1">
                  {isLoading ? (
                    <div className="animate-pulse h-1 w-1 px-12 py-4 bg-purple-200 rounded-md"></div>
                  ) : (
                    name
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row">
            <div className="py-3 pl-2 flex gap-4 rounded-md bg-gray-100">
              <MapPinIcon
                className="flex-shrink-0 h-6 w-6 text-orange-600"
                aria-hidden="true"
              />
              <div className="text-base  text-gray-900 ">
                {isLoading ? (
                  <div className="animate-pulse h-1 w-1 px-12 py-3 bg-purple-200 rounded"></div>
                ) : (
                  location
                )}
              </div>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex gap-4 py-3 pl-2 rounded-md bg-gray-100">
              <InformationCircleIcon
                className="flex-shrink-0 h-6 w-6 text-orange-600"
                aria-hidden="true"
              />
              <div className="text-base  text-gray-900">
                {isLoading ? (
                  <div className="animate-pulse h-1 w-1 px-20 py-8 bg-purple-200 rounded"></div>
                ) : (
                  bio
                )}
              </div>
            </div>
          </div>
        </div>
        {/* End */}
      </div>
    </div>
  );
};

export default Card;
