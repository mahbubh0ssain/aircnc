import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Components/Button/PrimaryButton";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import SearchForm from "../Components/Form/SearchForm";
import Spinner from "../Components/Spinner/Spinner";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        setExperience(data);
      });
  }, []);
  return (
    <div className="md:flex justify-start gap-10px-4md:px-10 lg:px-20">
      {/* <Spinner /> */}
      <div>
        <SearchForm />
      </div>
      <div className="flex-1">
        <div>
          <HomeCard />
        </div>
        <div>
          <div className="flex justify-between">
            <h2 className="font-bold">Experience</h2>
            <Link>
              <button className="font-bold">See all</button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-between pr-4">
            {experience.slice(0, 4).map((exp, i) => (
              <ExpCard key={i} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
