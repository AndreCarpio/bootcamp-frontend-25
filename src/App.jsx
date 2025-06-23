/**
 *
 * Your goal is to modify the application so that when you click the toggle button,
 * the favorite programming language toggles between the items in the languages array.
 * The default value should be the first item in the array.
 *
 * You must use the Context API for this challenge, which means you have to use the createContext
 * and Context.Provider functions. You are free to add classes and styles,
 * but make sure you leave the component ID's and clases provided as they are.
 *
 * Also is important move component and context to a separate files.
 * Submit your code once it is complete.
 */

import { useContext, useState } from "react";
import { MyLanguageContext } from "./Context";

const languages = ["JavaScript", "Python"];

export default function App() {
  const [languageIndex, setLanguageIndex] = useState(0);
  return (
    <>
      <MyLanguageContext.Provider value={{ languageIndex, setLanguageIndex }}>
        <MainSection />
      </MyLanguageContext.Provider>
    </>
  );
}

function MainSection() {
  const { languageIndex, setLanguageIndex } = useContext(MyLanguageContext);
  return (
    <div>
      <p id="favoriteLanguage">
        favorite programing language: {languages[languageIndex]}
      </p>
      <button
        id="changeFavorite"
        onClick={() => {
          setLanguageIndex((prev) => (prev == 0 ? 1 : 0));
        }}
      >
        toggle language
      </button>
    </div>
  );
}
