import React, { useState, useEffect } from "react";

function ChildComponent() {
  const [color, setColor] = useState("red");

  // If the `color` state were moved to the parent component and passed as a
  // prop to <ChildComponent />, no side effect cleanup would be necessary.

  useEffect(() => {
    let unmounted = false;

    setTimeout(() => {
      if (!unmounted) {
        setColor("green");
      }
    }, 3000);

    return () => {
      unmounted = true;
    };
  }, []);

  return <p style={{ color }}>{color}</p>;
}

export default ChildComponent;
