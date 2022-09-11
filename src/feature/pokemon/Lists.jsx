import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const pokeAPI = "https://pokeapi.co/api/v2/pokemon";

function Lists() {
  const [pokeList, setPokeList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(1000);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${pokeAPI}?offset=${offset}&limit=${limit}`
    );
    setPokeList(data?.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pokemonApp">
      <h2>Pokemon</h2>
      <ul>
        {pokeList.length > 0 &&
          pokeList.map((e, i) => {
            return <li key={i}>{e.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default Lists;
