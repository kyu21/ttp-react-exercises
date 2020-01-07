import React from "react";
import ContactCard from "./ContactCard";
import Decrement from "./Decrement";
import "./App.css";

function App() {
  return (
    <div>
      <div className="Cards">
        <div className="Title">
          <h1>Contact Cards</h1>
        </div>
        <div className="Card">
          <ContactCard
            name="Bob"
            mobileNumber="12345"
            workNumber="54321"
            email="bob@gmail.com"
          />
        </div>
        <div className="Card">
          <ContactCard
            name="Jake"
            mobileNumber="23456"
            workNumber="65432"
            email="jake@gmail.com"
          />
        </div>
        <div className="Card">
          <ContactCard
            name="Sally"
            mobileNumber="34567"
            workNumber="76543"
            email="sally@gmail.com"
          />
        </div>
      </div>
      <div className="Decrement">
        <div className="Title">
          <h1>Decrement Number!</h1>
        </div>
        <div>
          <Decrement startNumber={10} />
        </div>
      </div>
    </div>
  );
}

export default App;
