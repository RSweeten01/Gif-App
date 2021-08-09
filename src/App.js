import {useEffect, useState} from 'react';
import Gif from './components/Gif';
import axios from 'axios';
import bootstrap from 'react';
import SearchGif from './components/SearchGif';


function App() {
  const [gifs, setGifs] = useState([]);
  const [favoriteGifs, setFavoriteGifs] = useState([]);

 
  useEffect(() => {
    const getTrendingGifs = async () => {
    const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=2u3Zc50gbiOJ5gagNChofsGujDrF5LHk')
    setGifs(response.data.data);
    console.log(response)
    }
    getTrendingGifs();
  }, []);

  const searchGifs = async (searchText) => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=2u3Zc50gbiOJ5gagNChofsGujDrF5LHk&q=${searchText}`);
    setGifs(response.data.data);
  }

  const handleFavorites = (gifId) => {
    const favGif = gifs.find(gif => gif.id === gifId);
    setFavoriteGifs([...favoriteGifs, favGif]);
  }

  const style = {
    backgroundColor: 'blue',
    boarderStyle: 'solid',
    boarderWidth: '2px',
  }

  return (
    <>
    <h1>Giphy App</h1>
    <SearchGif searchGifs={searchGifs} />
    <p>Favorites:</p>

    {favoriteGifs.map((gif, index) => (
      <Gif 
      // onClick={handleFavorites}
      key={gif.id} 
      imageUrl={gif.images.fixed_height.url}
      title={gif.images.title}
      style={style}/>
     ) ) }
     <br/>
     <hr style={style}/>
     
    {gifs.map((gif, index)  => (
      <Gif 
      key={gif.id} 
      imageUrl={gif.images.fixed_height.url}
      title={gif.images.title}
      id={gif.id}
      saveFavorites={handleFavorites}/>
    ))}
    {/* componet to capture the search form
    componet to render all the trending gifs
    componet to render the favorit gifs */}
    </>
  );
}

export default App;
