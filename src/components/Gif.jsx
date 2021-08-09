const Gif = ({ 
    imageUrl, 
    title,
    saveFavorites,
    id 
 })  => {
    const onClickHandler = (gifId) => {
        if(!gifId) return;
        saveFavorites(gifId);
     }
    return(
        <img 
        src={imageUrl} 
        alt={title}
        onClick={() => onClickHandler(id)}/>
    );
};

export default Gif;