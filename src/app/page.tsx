"use client";

import {useEffect} from "react";

const Home = () => {
  useEffect(() => {
    window.location.href = 'https://medium.com/@kova98';
  }, []);

  return (
      <div>
          Redirecting...
        <a href={"https://medium.com/@kova98"}> Click here if not redirected</a>
      </div>
  );
};

export default Home;


