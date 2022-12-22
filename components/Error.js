import React from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
const Error = () => {
  return (
    <div className="my-4 rounded-xl border bg-gray-100 px-4 py-6 shadow-xl">
      <WrenchScrewdriverIcon className="flex-shrink-0 h-12 w-12 text-orange-600" />

      <h3 className="mt-3 text-xl font-bold text-gray-800">Oops!</h3>

      <p className="mt-4 text-sm text-gray-600">
        The robots encountered an error while trying to generate a methical
        profile.
      </p>
    </div>
  );
};

export default Error;
