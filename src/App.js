import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Content from "./Content";
import experience from "./experience";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newData = await response.json();
    setData(newData);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleClick = (id) => {
    let newValue = data.findIndex((company) => company.id === id);
    setValue(newValue);
  };

  if (loading) {
    return "";
  }

  return (
    <main>
      <section>
        <h1>Experience</h1>
        <NavBar value={value} data={data} handleClick={handleClick} />
        <Content {...data[value]} />
        <button>MORE INFO</button>
      </section>
    </main>
  );
}

export default App;
