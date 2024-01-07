"use client";

import React from "react";
import CustomButton from "~/components/common/buttonOrLink/CustomButton";

const ReadMoreButton = () => {
  return (
    <CustomButton
      label="Read more"
      type="submit"
      onClick={() => console.log("submitted")}
    />
  );
};

export default ReadMoreButton;
