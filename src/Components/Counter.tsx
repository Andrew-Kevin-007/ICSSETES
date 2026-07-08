import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const FALLBACK_COUNT = 5782;

function Counter() {
  const [count, setCount] = useState(FALLBACK_COUNT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://counter-production-c269.up.railway.app/api/v1/IncrementCounter")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCount(data.data.counter);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching visitor counter:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <BeatLoader />
      </div>
    );
  }

  return <div className="text-7xl font-bold">{count.toLocaleString()}</div>;
}

export default Counter;
