import React, { useState, useEffect } from "react";
// import axios from "axios";
import { defaultPerson } from "./utils/defaultPerson";
import { createNewBio } from "./utils/utils";

const methicalURL = "https://methical-api.herokuapp.com/api/person/";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(defaultPerson);

  const getPerson = async () => {
    setLoading(true);

    try {
      const methicalResponse = await fetch(methicalURL);
      const data = await methicalResponse.json();
      const { name, city, hobbies, traits, photo } = data;

      const newPerson = {
        name: `${name.first} ${name.last}`,
        city,
        hobbies,
        bio: createNewBio(traits),
        img: photo,
      };

      setPerson(newPerson);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <>
      <div className="sticky">
        <p>
          By{" "}
          <a href="https://gmlunesa.com" target="_blank" rel="noreferrer">
            gmlunesa
          </a>{" "}
          ✨{" "}
          <a
            href="https://this-person-does-not-exist.com"
            target="_blank"
            rel="noreferrer"
          >
            photos
          </a>
        </p>
      </div>
      <div className="card">
        <div className="button">
          <button className="primary" onClick={getPerson}>
            {loading
              ? "Creating someone nonexistent"
              : "Generate a methical person"}
          </button>
        </div>
        <img className="profile-photo" src={person.img} alt={person.name} />
        <h1>{person.name}</h1>
        <h2>{person.city}</h2>
        <div className="bio">
          <p>{person.bio}</p>
        </div>
        <div className="hobbies">
          <h2>Hobbies</h2>
          <ul>
            {person.hobbies.map((hobby, index) => {
              return <li key={index}>{hobby}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
