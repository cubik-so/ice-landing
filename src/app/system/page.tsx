import React from "react";

const System = () => {
  return (
    <div className="flex h-full flex-col items-center p-24">
      <h2 className="font-semibold items-center text-center mb-10 text-2xl">
        System Details
      </h2>
      <div>
        <ul className="flex gap-2 flex-col">
          <li className="margin-bottom: 8px; line-height: 1.5;">
            • AMD Milan EPYC 9254, 2.9GHz - 4GHz
          </li>
          <li className="margin-bottom: 8px; line-height: 1.5;">
            • 24 Cores, 48 Threads | 384 GB Memory
          </li>
          <li className="margin-bottom: 8px; line-height: 1.5;">
            • 2 x 480 GB SSD + 2 x 1.92 TB NVMe | Ubuntu 22.X
          </li>
          <li className="margin-bottom: 8px; line-height: 1.5;">• 25 Gbps</li>
          <li className="margin-bottom: 8px; line-height: 1.5;">
            • Location: Madrid, Spain
          </li>
        </ul>
      </div>
    </div>
  );
};

export default System;
