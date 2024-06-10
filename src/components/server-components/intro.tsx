import React from "react";

const Intro = () => {
  return (
    <main className="flex flex-col py-8 border-4">
      <p className="text-[#1F1F1F4D] text-xl font-bold">What is dat?</p>
      <p className="w-[1114px] text-[color:var(--Colors-Gray-500,#6B7280)] text-lg font-normal leading-6">
        Moving generative AI applications to production often requires using
        Vector stores to provide them with relevant context. Keeping these
        vector stores up-to-date with changes in your data is critical for the
        continued performance of these applications. dat makes this possible by
        setting up pipelines to update your vector stores as your source data
        changes.
      </p>
    </main>
  );
};

export default Intro;
