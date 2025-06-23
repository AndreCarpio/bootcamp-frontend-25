import { useContext } from "react";
import { MyLanguageContext } from "../../Context";
import { languages } from "../../languages";

export function LanguageToggle() {
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
