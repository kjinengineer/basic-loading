import React, { useCallback, useState } from "react";

const CountEx = () => {
  const [count, setCount] = useState(0);
  const onIncrease = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const onDecrease = useCallback(() => {
    setCount((count) => count - 1);
  }, []);
  return (
    <div>
      <button type="button" onClick={onIncrease}>
        increase
      </button>
      <button type="button" onClick={onDecrease}>
        decrease
      </button>
      <div data-testid="count">{count}</div>
    </div>
  );
};

export default CountEx;
