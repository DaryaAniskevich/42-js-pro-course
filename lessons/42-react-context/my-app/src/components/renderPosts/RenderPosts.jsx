import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import PostsBlock from "./postsBlock/PostsBlock";
import Button from "../Button/Button";
import style from "./RenderPosts.module.css";
import { themeContext } from "../themeContext/ThemeContext";
import ContentLoader from "react-content-loader";
const MyLoader = () => <ContentLoader />;

const RenderPosts = () => {
  const { theme } = useContext(themeContext);

  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      [
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/users",
      ].map((url) => fetch(url))
    )
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((results) => {
        setAuthors(results[1]);
        setPosts(results[0]);
        setLoading(false);
      });
  }, []);

  const [numberOfShown, setNumberOfShown] = useState(5);
  const shownPosts = useMemo(() => {
    return posts.slice(0, numberOfShown);
  }, [posts, numberOfShown]);

  let disabled = false;
  if (shownPosts.length >= posts.length) {
    disabled = true;
  }

  return (
    <>
      <div className={`${theme}-background`}>
        <div className={style.container}>
          {loading && <MyLoader />}
          <PostsBlock posts={shownPosts} authors={authors}></PostsBlock>
          <Button
            onClick={useCallback(
              () => setNumberOfShown(numberOfShown + 10),
              [numberOfShown]
            )}
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
