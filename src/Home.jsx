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

  const [currentLink, setCurrentLink] = useState({});

  const [link, setLinks] = useState([]);

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

  // links
  const handleIndexLinks = () => {
    console.log("handleIndexLinks");
    axios.get("http://localhost:3000/links.json").then((response) => {
      console.log(response.data);
      setLinks(response.data);
    });
  };

  const handleShowLink = (link) => {
    console.log("handleShowLink", link);
    setIsLinksShowVisible(true);
    setCurrentLink(link);
  };

  const handleLinkClose = () => {
    console.log("handleLinkClose");
    setIsLinksShowVisisble(false);
  };

  useEffect(handleIndexLinks, []);

  return (
    <div>
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
