"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex text-black font-semibold justify-center pt-4 gap-4">
        <button onClick={() => setCount(count - 1)}>-</button>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
};

export default Counter;
