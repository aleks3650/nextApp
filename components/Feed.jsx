"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import { useSession } from "next-auth/react";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [initialPosts, setInitialPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
      setInitialPosts(data);
    };
    fetchPosts();
  }, []);

  const handleTagClick = (e) => {
    setSearchText(e);
    const arr = [...initialPosts];
    const newPosts = arr.filter((item) => item.tag.includes(e));
    setPosts(newPosts);
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    const arr = [...initialPosts];
    const newPosts = arr.filter(
      (item) =>
        item.prompt.includes(e.target.value) ||
        item.tag.includes(e.target.value)
    );
    setPosts(newPosts);
  };

  return (
    <section className="feed">
      <form className="relative w-full text-center">
        <input
          type="text"
          placeholder="Search for tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {session?.user && (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
