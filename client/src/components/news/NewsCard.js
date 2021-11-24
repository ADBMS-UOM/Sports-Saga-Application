import React from "react";
import CardHeader from "./post_card/CardHeader";
import CardBody from "./post_card/CardBody";
import CardFooter from "./post_card/CardFooter";

const NewsCard = ({ post, theme }) => {
  return (
    <div className="card my-3">
      <CardHeader post={post} />
      <CardBody post={post} theme={theme} />
      <CardFooter post={post} />

    </div>
  );
};

export default NewsCard;
