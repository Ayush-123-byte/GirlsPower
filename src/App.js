import { useState } from "react";
import TableData from "./component/TableData";

function App() {
  const [search, setSearch] = useState("");
  const handlesearch=(e)=>{
    setSearch(e.target.value)
  }

  return (
    <div className="  text-2xl">
      <TableData setSearch={handlesearch} search={search}/>
    </div>
  );
}

export default App;
