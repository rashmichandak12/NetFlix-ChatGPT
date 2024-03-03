import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchbar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //call openai n get movie results

    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". only give me names of top 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Shole, Don, Dhoom, Kuch kuch hota hai, Koi mil gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" bg-black grid grid-cols-12 w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 rounded-sm col-span-9"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 rounded-lg bg-red-700 text-white col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
