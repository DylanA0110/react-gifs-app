import { useState, useRef} from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query-action";


export const useGifs = () => {
    const [previousTerms, setpreviousTerms] = useState<string[]>([]);
    const [gif, setGif] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});


  const handleTermClick = async(term:string) =>{

    if(gifsCache.current[term]){
        setGif(gifsCache.current[term]);
        return;
    }
    const gifs = await getGifsByQuery(term);
    setGif(gifs);
  }

  const handleSearch = async (query:string = '')=>{
    query = query.toLowerCase().trim();
    if(query.trim().length === 0) return;
    if(previousTerms.includes(query)) return;

    setpreviousTerms([query,...previousTerms].slice(0,7));

    const gifs = await getGifsByQuery(query);
    setGif(gifs);

    gifsCache.current[query] = gifs;
    console.log(gifsCache);

  }

  return{
    //Properties
    gif,
    //Methods / actions
    handleTermClick,
    handleSearch,
     previousTerms,
  }
}
