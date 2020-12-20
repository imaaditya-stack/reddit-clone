import React from "react";
import CreatePost from "../../components/create-post";
import "./style.css";
import Post from "../../components/post";

function Posts() {
  return (
    <div className="posts">
      <CreatePost />
      <br />
      <Post
        title="American breakfast, as envisioned by a European"
        channel="r/AskReddit"
        label="Health"
        labelColor="blue"
        votes="0"
        comments="0"
      />
      <Post
        title="'If we annoy everyone, they will support our cause'"
        channel="r/funny"
        votes="2.2k"
        comments="0"
      />
      <Post
        title="[Postgame Thread] Clemson Defeats Notre Dame 34-10"
        channel="r/AskReddit"
        label="Postgame Thread"
        labelColor="#000"
        votes="6k"
        comments="5"
      />
      <Post
        title="Trump contradicts top U.S. officials, suggests without evidence China behind cyberattack"
        channel="r/JusticeServed"
        votes="77"
        comments="200"
      />
      <Post
        title="I mean...have you tried?"
        channel="r/pcmasterrace"
        label="Fan Made"
        labelColor="green"
        votes="0"
        comments="5.5k"
      />
      <Post
        title="Ready to go"
        channel="r/AskReddit"
        votes="0"
        comments="1.2k"
      />
      <Post
        title="'The image they don't want you to see'"
        channel="r/AskReddit"
        label="Coronavirus"
        labelColor="red"
        votes="654"
        comments="6k"
      />
      <Post
        title="Dutch government bans air travel from UK after discovering virus variant"
        channel="r/CFB"
        votes="6"
        comments="8.3k"
      />
      <Post
        title="Rosie looking all cute right after she got caught unwrapping all the gifts under the tree."
        channel="r/WhitePeopleTwitter"
        label="Story"
        labelColor="blue"
        votes="999"
        comments="77"
      />
      <Post
        title="Amazingly well done tattoo to cover up missing fingertips"
        channel="r/gifs"
        votes="657"
        comments="34"
      />
      <Post
        title="Learning how to celebrate Christmas"
        channel="r/AskReddit"
        votes="5"
        comments="0"
      />
      <Post
        title="Dutch government bans air travel from UK after discovering virus variant"
        channel="r/AskReddit"
        votes="12"
        label="Goverment"
        comments="0"
        labelColor="#888"
      />
      <Post
        title="'If we annoy everyone, they will support our cause'"
        channel="r/AskReddit"
        votes="1"
        comments="88"
      />
      <Post
        title="Dutch government bans air travel from UK after discovering virus variant"
        channel="r/CFB"
        votes="2"
        comments="9"
      />
      <Post
        title="Rosie looking all cute right after she got caught unwrapping all the gifts under the tree."
        channel="r/WhitePeopleTwitter"
        label="Story"
        labelColor="blue"
        votes="12"
        comments="13"
      />
      <Post
        title="Amazingly well done tattoo to cover up missing fingertips"
        channel="r/gifs"
        votes="64"
        comments="567"
      />
      <Post
        title="Learning how to celebrate Christmas"
        channel="r/AskReddit"
        votes="12"
        comments="56"
      />
      <Post
        title="Dutch government bans air travel from UK after discovering virus variant"
        channel="r/AskReddit"
        label="Story"
        labelColor="blue"
        votes="90"
        comments="0"
      />
      <Post
        title="'If we annoy everyone, they will support our cause'"
        channel="r/AskReddit"
        votes="69"
        comments="0"
      />
    </div>
  );
}

export default Posts;
