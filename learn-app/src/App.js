import './App.css';
// import UseRef from './Hooks/B8-UseRef/index';
// import UseCallback from './Hooks/B9-UseCallback/index';
// import Props3 from './JSX-Component-Props/B3-Props';
import UseMemo from './Hooks/B10-UseMemo/index';

// const data = [
//   {
//     "name": "bulbasaur",
//     "url": "https://pokeapi.co/api/v2/pokemon/1/"
//   },
//   {
//     "name": "ivysaur",
//     "url": "https://pokeapi.co/api/v2/pokemon/2/"
//   },
//   {
//     "name": "venusaur",
//     "url": "https://pokeapi.co/api/v2/pokemon/3/"
//   },
//   {
//     "name": "charmander",
//     "url": "https://pokeapi.co/api/v2/pokemon/4/"
//   },
//   {
//     "name": "charmeleon",
//     "url": "https://pokeapi.co/api/v2/pokemon/5/"
//   },
//   {
//     "name": "charizard",
//     "url": "https://pokeapi.co/api/v2/pokemon/6/"
//   },
//   {
//     "name": "squirtle",
//     "url": "https://pokeapi.co/api/v2/pokemon/7/"
//   },
//   {
//     "name": "wartortle",
//     "url": "https://pokeapi.co/api/v2/pokemon/8/"
//   },
//   {
//     "name": "blastoise",
//     "url": "https://pokeapi.co/api/v2/pokemon/9/"
//   },
//   {
//     "name": "caterpie",
//     "url": "https://pokeapi.co/api/v2/pokemon/10/"
//   },
//   {
//     "name": "metapod",
//     "url": "https://pokeapi.co/api/v2/pokemon/11/"
//   },
//   {
//     "name": "butterfree",
//     "url": "https://pokeapi.co/api/v2/pokemon/12/"
//   },
//   {
//     "name": "weedle",
//     "url": "https://pokeapi.co/api/v2/pokemon/13/"
//   },
//   {
//     "name": "kakuna",
//     "url": "https://pokeapi.co/api/v2/pokemon/14/"
//   },
//   {
//     "name": "beedrill",
//     "url": "https://pokeapi.co/api/v2/pokemon/15/"
//   },
//   {
//     "name": "pidgey",
//     "url": "https://pokeapi.co/api/v2/pokemon/16/"
//   },
//   {
//     "name": "pidgeotto",
//     "url": "https://pokeapi.co/api/v2/pokemon/17/"
//   },
//   {
//     "name": "pidgeot",
//     "url": "https://pokeapi.co/api/v2/pokemon/18/"
//   },
//   {
//     "name": "rattata",
//     "url": "https://pokeapi.co/api/v2/pokemon/19/"
//   },
//   {
//     "name": "raticate",
//     "url": "https://pokeapi.co/api/v2/pokemon/20/"
//   }
// ];



function App() {

  // const handleClick = (data) => {
  //   console.log(data);
  // }

  return (
    <div className="App">
      {/* <header className="App-header">

        <Props3 data={data} />

        {data.map((data, index) =>
          <Props3
            key={index}
            name={data.name}
          />
          <Props3
            key={index}
            data={data}
            onClick = {handleClick}
          />

        )}
      </header> */}

     {/* <UseRef/> */}
     {/* <UseCallback/> */}
     <UseMemo/>

    </div>
  );
}

export default App;
