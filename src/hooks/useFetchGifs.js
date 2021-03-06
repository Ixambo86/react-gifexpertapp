import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(categoria).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [categoria]);

  return state;
};

export default useFetchGifs;
