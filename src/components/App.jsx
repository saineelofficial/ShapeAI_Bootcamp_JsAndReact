import React from "react";
import Header from "./header"
import Footer from "./footer"
import Note from "./note"

import "../styles.css";

export default function App() {
  return (
    <div className="App">
        <Header />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />


        <Footer/>
    </div>
  );
}
 