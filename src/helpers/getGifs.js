

export const getGifs = async (categoria) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=PtagoWQQpNtN0Ac9gNr6Z7LSyT5wZonQ`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    
    return gifs;
  };
