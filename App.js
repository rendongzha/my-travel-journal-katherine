import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  console.log(<Card />);
  const journal = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <div className="app">
      <Navbar />
      <section className="card--list">
        {journal}
      </section>
    </div>
  );
}
