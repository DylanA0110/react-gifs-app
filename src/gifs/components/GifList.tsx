import type { Gif } from "../interfaces/gif.interface";

interface Props{
    gifs: Gif[];
}
const formatBytes = (bytes: string | number) => {
  const size = typeof bytes === 'string' ? parseInt(bytes) : bytes;
  if (size >= 1024 * 1024) return (size / (1024 * 1024)).toFixed(2) + ' MB';
  if (size >= 1024) return (size / 1024).toFixed(2) + ' KB';
  return size + ' B';
}
export const GifList = ({gifs}: Props) => {
  return (
    <div className="gifs-container">
      {
        gifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>{gif.width} x {gif.height} ({formatBytes(gif.size)})</p>
          </div>
        ))
      }
    </div>
  )
}
