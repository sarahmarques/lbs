export const convertToBulletedList = (text) => {
  if (text && text.includes("*")) {
    const jsx = (
      <ul>
        {text?.split("*").map((item, i) => {
          if (item) {
            return <li key={`list-item-${i}`}>{item}</li>;
          }
        })}
      </ul>
    );
    return jsx;
  } else {
    return text;
  }
};
