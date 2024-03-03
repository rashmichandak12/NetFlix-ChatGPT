import React from 'react'
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchbar from "./GptSearchbar"
import { BG_URL } from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
            <img src={BG_URL} alt="body_logo"/>
        </div>
      <GptSearchbar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch