import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"



export const GiffApp = () => {

  const { previousTerms, gif, handleTermClick, handleSearch } = useGifs();

  return (
    <>
      {/** Header */}
      <CustomHeader title = 'Buscador de Gifs' description = 'Descubre y comparte el gif perfecto' />

      {/** Search Bar */}
      <SearchBar placeHolder="Buscar gifs..." onQuery={handleSearch} />

      {/** PreviousSearches */}
     <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClick} />

      {/** GifList: Props => gifs: Gif[] */}
      <GifList gifs={gif} />
    </>
  )
}
