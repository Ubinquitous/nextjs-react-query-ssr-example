"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

const Home = () => {
  const { data } = useQuery({ queryKey: ["query"] });

  return <main>{JSON.stringify(data)}</main>;
};

export default Home;
