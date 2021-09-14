import Loupe from "../image/loupe.svg"

function Search({ destination, setDate, setVolume, setDeparture, setDestination }) {



  return (
    <div className="postSearch">

      <div>
        <input type="number" onChange={(e) => setVolume(e.target.value)} name="volume" placeholder="Volume en kilogramme" />
        <input type="text" onChange={(e) => setDeparture(e.target.value)} name="departure" placeholder="Depart" />
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} name="destination" placeholder="Destination" />
        <input type="date" onChange={(e) => setDate(e.target.value)} name="date" />
        <button> <img src={Loupe} style={{ width: "20px" }} alt="" /> Rechercher</button>
      </div>


    </div>
  );
}

export default Search;
