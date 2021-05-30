import style from "./EmojiCOntainer.module.css";
import EmojiRow from "./EmojiRow";

const EmojiCOntainer = (props) => {
  return (
    <div>
      <div className={style.emoji}>
        {props.showEmojis.map((emoji, index) => {
          return <EmojiRow emoji={emoji} key={index} />;
        })}
      </div>
    </div>
  );
};

export default EmojiCOntainer;
