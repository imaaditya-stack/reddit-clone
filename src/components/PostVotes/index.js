import React from "react";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import { Wrapper } from "../../theme/Wrapper";
import { useSelector } from "react-redux";
import "./style.css";

function PostVotes({ votes }) {
  const darkThemeEnabled = useSelector((state) => state?.darkThemeEnabled);
  return (
    <Wrapper
      className="votes"
      style={{
        borderRight: darkThemeEnabled ? "1px solid #222" : "1px solid #eee",
      }}
    >
      <ArrowUpwardRoundedIcon
        style={{ fontSize: 20, color: "rgb(135, 138, 140)" }}
      />
      <span className="font-weight-bold pt-1 votes__count">{votes}</span>
      <ArrowDownwardRoundedIcon
        style={{ fontSize: 20, color: "rgb(135, 138, 140)" }}
      />
    </Wrapper>
  );
}

export default PostVotes;
