import React, { useEffect } from "react";

import AddsStatus from "../components/adds/AddsStatus";
import Adds from "../components/adds/Adds";

import { useSelector } from "react-redux";
import LoadIcon from "../images/loading.gif";

let scroll = 0;

const Advertisement = () => {
  const { homePosts } = useSelector((state) => state);

  window.addEventListener("scroll", () => {
    if (window.location.pathname === "/") {
      scroll = window.pageYOffset;
      return scroll;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);

    return (
      
    <div className="home row mx-0">
      <div className="col-md-12">
        <AddsStatus />

        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <h2 className="text-center">No Post</h2>
        ) : (
          <Adds />
        )}
      </div>
    </div>
  );
};

export default Advertisement;
