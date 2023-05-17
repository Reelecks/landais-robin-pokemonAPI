import React, {useState} from "react";
import PokemonList from "./components/PokemonList";

const App = () => {

  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div style={{
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
     }}>
    <div >
      <input onChange={handleChange} style={{
          margin: '20px 0',
          padding: '10px',
          width: '300px',
          borderRadius: '5px',
          border: 'none',
          outline: 'none',
        }} />
</div>
      <PokemonList searchTerm={search} />
    </div>
  );
};

export default App;
