import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Planner = () => {
  const { register } = useForm();
  return (
    <div>
      <form>
        <input placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Planner;
