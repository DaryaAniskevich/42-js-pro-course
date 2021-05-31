import style from "./EmojiCOntainer.module.css";
import EmojiRow from "./EmojiRow";

const EmojiCOntainer = (props) => {
  return (
    <div>
      <div className={style.emoji}>
        {props.filteredEmojis.map((emoji, index) => {
          return <EmojiRow emoji={emoji} key={emoji.title} />;
        })}
      </div>
    </div>
  );
};

export default EmojiCOntainer;
