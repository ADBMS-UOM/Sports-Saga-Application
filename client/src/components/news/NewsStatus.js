
import React from "react";
import Avatar from "../Avatar";
import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

const NewsStatus = () => {
  const { auth, userType } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="status my-3 d-flex">
      <Avatar src={auth.user.avatar} size="big-avatar" />

      <button
        className="statusBtn flex-fill"
        // {userType === "user"? }
        onClick={
          auth.user.role === "admin"
            ? () => dispatch({ type: GLOBALTYPES.STATUS, payload: true })
            : null
        }
      >
        {auth.user.username}, what are you thinking?
      </button>
    </div>
  );
};

export default NewsStatus;
