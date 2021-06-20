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
import MyLoader from "../MyLoader/MyLoader";
import { useDispatch, useSelector } from "react-redux";
import { postsSelector, postsIsLoadingSelector } from "../../redux/selectors";
import { postsGetData } from "../../redux/PostsRedux/actionsPosts";

const RenderPosts = () => {
  const { theme } = useContext(themeContext);

  const dispatch = useDispatch();

  const posts = useSelector(postsSelector);
  const loading = useSelector(postsIsLoadingSelector);

  useEffect(() => {
    dispatch(postsGetData());
  }, [dispatch]);

  const [numberOfShown, setNumberOfShown] = useState(5);
  const shownPosts = useMemo(() => {
    return posts.slice(0, numberOfShown);
  }, [posts, numberOfShown]);

  let disabled = false;
  if (shownPosts.length >= posts.length) {
    disabled = true;
  }
  const showMore = useCallback(
    () => setNumberOfShown(numberOfShown + 10),
    [numberOfShown]
  );

  return loading ? (
    <MyLoader />
  ) : (
    <div className={`${theme}-background`}>
      <div className={style.container}>
        <PostsBlock posts={shownPosts}></PostsBlock>
        <Button onClick={showMore} disabled={disabled}>
          Show more
        </Button>
      </div>
    </div>
  );
};

export default RenderPosts;
