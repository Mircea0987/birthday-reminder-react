import React from "react";
import "./index.css";
import { birthdays } from "./people";

function App() {
  const [birthday, setBirthday] = React.useState(birthdays);
  const handleButton = () => {
    setBirthday("");
  };
  return (
    <>
      <h1>{birthdays.length} birthdays today!</h1>

      {birthday.map((man) => {
        const { name, age, img } = man;
        return (
          <article key={name}>
            <div>
              <h1>{name}</h1>
              <img src={img} />
              <p>{age}</p>
            </div>
          </article>
        );
      })}
      <button onClick={handleButton}>Clear All</button>
    </>
  );
}
export default App;
