import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Welcome from "../components/Welcome";
import Button from "../components/Button";
import Card from "../components/Card";
import Error from "../components/error";

export default function Home() {
  const [welcome, setWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [base64Img, setBase64Img] = useState("");

  const handleClick = async () => {
    welcome && setWelcome(false);
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/Profile/generate`,
        {}
      );

      if (!response.ok) throw "Request unsuccessful.";

      const json = await response.json();

      setIsLoading(false);

      setName(json.name);
      setLocation(json.location);
      setBio(json.bio);
      setBase64Img(json.photoBase64);

      setIsLoading(false);
      setError(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  };
  return (
    <>
      {welcome ? (
        <Welcome />
      ) : (
        (error && <Error />) || (
          <Card {...{ name, location, bio, base64Img, isLoading }} />
        )
      )}

      <Button handleClick={handleClick} isLoading={isLoading} />
    </>
  );
}
