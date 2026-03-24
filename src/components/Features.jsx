import axios from "axios";
import React, { useEffect, useState } from "react";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    const fetchAllFeatures = async () => {
      const url = `https://openapi.programming-hero.com/api/levels/all`;
      const res = await axios.get(url);
      setFeatures(res.data.data);
    };
    fetchAllFeatures();
  }, []);
  return (
   
  );
};

export default Features;
