import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function Home() {
  // const posts = [
  //   { id: 1, title: "title", subline: "sicksubline", body: "honk" },
  //   { id: 2, title: "title", subline: "sicksubline", body: "honk" },
  // ];
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    console.log("handleShowPost", post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <h1>Welcome to React!</h1>
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
