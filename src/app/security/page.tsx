import React from "react";

const Security = () => {
  return (
    <div className="flex h-full flex-col items-center p-24">
      <h2 className="font-semibold items-center text-center mb-10 text-2xl">
        Security
      </h2>
      <div>
        <ul className="flex gap-2 flex-col">
          <li className="margin-bottom: 8px; line-height: 1.5;">
            • Our server can only be accessed with whitelisted SSH Keys
          </li>
          <li className="margin-bottom: 8px; line-height: 1.5;">
            • Our withdraw authority is assigned to a Squad with 2 owners
          </li>
          <li className="margin-bottom: 8px; line-height: 1.5;">
            • We enforce an active set of ufw rules
          </li>
          <li className="margin-bottom: 8px; line-height: 1.5;">
            • A Watchtower bot notifies us in case of any abnormalities
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Security;
