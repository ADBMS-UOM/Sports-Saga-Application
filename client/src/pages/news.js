import React, { useEffect } from "react";

import NewsStatus from "../components/news/NewsStatus";
import News from "../components/news/News";

import { useSelector } from "react-redux";
import LoadIcon from "../images/loading.gif";

let scroll = 0;

const Newses = () => {
  const { homePosts, auth  } = useSelector((state) => state);
 
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
      {auth.user.role === "admin"?   <NewsStatus /> :null }
      
        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <h2 className="text-center">No News</h2>
        ) : (
          <News />
        )}
      </div>
    </div>
  );
};

export default Newses;
