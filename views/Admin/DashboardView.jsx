import React from "react";

const UploadPostView = () => {
  return (
    <main className="grid gap-5 lg:grid-cols-4 lg:row-start-auto auto-rows-[minmax(120px,auto)] sm:grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] ">
      <div className="p-5 rounded-lg border border-solid bg-black col-span-1 row-span-3">
        box1
      </div>
      <div className="p-5 rounded-lg border border-solid bg-black">box1</div>
      <div className="p-5 rounded-lg border border-solid bg-black">box1</div>
      <div className="p-5 rounded-lg border border-solid bg-black col-span-1 row-span-3">
        box1
      </div>
      <div className="p-5 rounded-lg border border-solid bg-black">box1</div>
      <div className="p-5 rounded-lg border border-solid bg-black">box1</div>
      <div className="p-5 rounded-lg border border-solid bg-black lg:col-span-2 lg:row-span-2 hidden">
        box1
      </div>
      <div className="p-5 rounded-lg border border-solid bg-black">box1</div>
      <div className="p-5 rounded-lg border border-solid bg-black">box1</div>
    </main>
  );
};

export default UploadPostView;
