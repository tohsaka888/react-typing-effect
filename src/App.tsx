import React from "react";
import "@/style/global.css";
import { Typing } from "@source/index";

function App() {
  return (
    <>
      <Typing interval={300} existTime={1000} textStyle={{ fontSize: "2rem" }}>
        技术宅拯救世界!
      </Typing>
      <Typing
        interval={100}
        existTime={2000}
        textStyle={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
        symbolStyle={{
          borderColor: "red",
        }}
      >
        Technology geeks save the world!
      </Typing>
    </>
  );
}

export default App;
