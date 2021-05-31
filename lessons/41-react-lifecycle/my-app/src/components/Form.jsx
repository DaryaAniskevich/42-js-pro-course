import React, { useState, useEffect, useMemo } from "react";
import EmojiCOntainer from "./EmojiCOntainer";
import style from "./Form.module.css";

const Form = () => {
  const [emojis, setEmojis] = useState([]);
  const getEmojis = () => {
    fetch(
      "https://raw.githubusercontent.com/asimonok/42-js-pro-course/lesson/41-react-lifecycle/lessons/41-react-lifecycle/emojiList.json"
    )
      .then((response) => response.json())
      .then((emoji) => {
        setEmojis(emoji);
      });
  };

  useEffect(() => {
    getEmojis();
  }, []);

  const [value, setValue] = useState("");

  const filteredEmojis = useMemo(() => {
    if (value.length === 0) {
      return emojis;
    } else {
      const filteredEmojis = emojis.filter((emoji) => {
        return (
          emoji.title.toLowerCase().includes(value.toLowerCase()) ||
          emoji.keywords.toLowerCase().includes(value.toLowerCase())
        );
      });
      filteredEmojis.length = 15;
      return filteredEmojis;
    }
  }, [value, emojis]);

  return (
    <div className={style.search}>
      <form className={style.search__form}>
        <input
          type="text"
          className={style.search__input}
          onChange={(event) => {
            return setValue(event.target.value);
          }}
        ></input>
      </form>
      <EmojiCOntainer filteredEmojis={filteredEmojis} emojis={emojis} />
    </div>
  );
};

export default Form;
