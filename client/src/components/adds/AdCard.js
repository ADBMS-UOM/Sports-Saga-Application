import React from "react";
import CardHeader from "./post_card/CardHeader";
import CardBody from "./post_card/CardBody";
import CardFooter from "./post_card/CardFooter";

const AdCard = ({ post, theme }) => {
  return (
    <div class="card my-3 col-6 col-md-4">
      <CardHeader post={post} />
      <CardBody post={post} theme={theme} />
      <CardFooter post={post} />
    </div>
  );
};

export default AdCard;
