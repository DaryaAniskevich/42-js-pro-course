import style from "./EmojiRow.module.css";

const EmojiRow = (props) => {
  const codePointHex = props.emoji.symbol.codePointAt(0).toString(16);

  return (
    <div className={style.emoji}>
      <img
        src={`//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`}
        className={style.emoji__image}
        alt={props.emoji.title}
      />
      <span className={style.emoji__name}>{props.emoji.title}</span>
    </div>
  );
};

export default EmojiRow;
