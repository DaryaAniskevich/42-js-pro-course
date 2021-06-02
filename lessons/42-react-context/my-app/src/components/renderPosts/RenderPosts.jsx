import React, { useState, useEffect, useContext } from "react";
import PostsBlock from "../postsBlock/PostsBlock";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./RenderPosts.module.css";
import { themeContext } from "../themeContext/ThemeContext";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const AUTHORS_URL = "https://jsonplaceholder.typicode.com/users";

const RenderPosts = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  let styleTheme = "light";
  if (theme === "dark") {
    styleTheme = "dark";
  }

  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  const urls = [POSTS_URL, AUTHORS_URL];

  let requests = urls.map((url) => fetch(url));

  useEffect(() => {
    setLoading(true);
    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((results) => {
        return [setAuthors(results[1]), setPosts(results[0])];
      })
      .then(() => setLoading(false));
  }, []);

  const [numberOfShown, setNumberOfShown] = useState(5);
  const shownPosts = posts.slice(0, numberOfShown);

  let disabled = false;
  if (shownPosts.length >= posts.length) {
    disabled = true;
  }

  return (
    <>
      <div className={`${styleTheme}-background`}>
        <header className={styleTheme}>
          <div className={style.container}>
            <div className={style.header}>
              <h1 className={styleTheme}>Posts</h1>
              <Button
                variant={styleTheme}
                onClick={toggleTheme}
                className={style.button_change}
              >
                Try {theme === "light" ? "dark" : "light"} theme
              </Button>
            </div>
          </div>
        </header>
        {loading && (
          <Spinner
            animation="border"
            variant="dark"
            className={style.loading}
          />
        )}
        <div className={style.container}>
          <PostsBlock
            posts={shownPosts}
            authors={authors}
            styleTheme={styleTheme}
          ></PostsBlock>
          <Button
            variant={styleTheme}
            onClick={() => setNumberOfShown(numberOfShown + 10)}
            disabled={disabled}
          >
            Show more
          </Button>
        </div>
      </div>
    </>
  );
};

export default RenderPosts;
