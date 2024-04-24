import React, { useEffect, useState } from "react";
import Header from "./Header";
import {
  FaSortAlphaUp,
  FaSortAlphaUpAlt,
  FaSortNumericUp,
  FaSortNumericUpAlt,
} from "react-icons/fa";
const TableData = () => {
  const [data, setData] = useState([]);

  const coinLore = async () => {
    try {
      const response = await fetch("https://api.coinlore.net/api/tickers/");
      const resdata = await response.json();
      console.log(resdata.data);
      setData(resdata.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const assendingEvent = () => {
    let tempData = [...data];
    if (tempData.length > 0) {
      let sortedData = tempData.sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedData);
    }
  };
  const descendingEvent = () => {
    let tempData = [...data];
    if (tempData.length > 0) {
      let sortedData = tempData.sort((a, b) => b.name.localeCompare(a.name));
      setData(sortedData);
    }
  };

  const sortRankDes = () => {
    let tempData = [...data];
    if (tempData.length > 0) {
      let sortedData = tempData.sort((a, b) => b.rank - a.rank);
      setData(sortedData);
    }
  };
  const sortRankAsc = () => {
    let tempData = [...data];
    if (tempData.length > 0) {
      let sortedData = tempData.sort((a, b) => a.rank - b.rank);
      setData(sortedData);
    }
  };
  const sortIdAsc = () => {
    let tempData = [...data];
    if (tempData.length > 0) {
      let sortedData = tempData.sort((a, b) => a.id - b.id);
      setData(sortedData);
    }
  };
  const sortIdDes = () => {
    let tempData = [...data];
    if (tempData.length > 0) {
      let sortedData = tempData.sort((a, b) => b.id - a.id);
      setData(sortedData);
    }
  };

  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    coinLore();
  }, []);
  return (
    <>
      <Header
        assendingEvent={assendingEvent}
        descendingEvent={descendingEvent}
        sortRankDes={sortRankDes}
        sortRankAsc={sortRankAsc}
        sortIdAsc={sortIdAsc}
        sortIdDes={sortIdDes}
      />
      <input
        className="px-4 m-3 py-2 mx-5 w-1/2 text-lg text-black bg-white rounded-md shadow-inner shadow-purple-500 focus:outline-none"
        type="text"
        placeholder="Search Name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className=" table-auto w-full">
          <thead className="overflow-auto bg-slate-300 text-black text-center text-lg w-full ">
            <tr className=" grid grid-cols-7  ">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 name flex justify-center py-2 items-center gap-2">
                Name
                <FaSortAlphaUp onClick={assendingEvent} />
                <FaSortAlphaUpAlt onClick={descendingEvent} />
              </th>
              <th className="px-4 flex justify-center py-2 items-center gap-2 ">
                Rank
                <FaSortNumericUp onClick={sortRankAsc} />
                <FaSortNumericUpAlt onClick={sortRankDes} />
              </th>
              <th className="px-4 py-2">Priceusd</th>
              <th className="px-4 py-2">Percent24h</th>
              <th className="px-4 py-2">Price_btc</th>
              <th className="px-4 py-2">market_cap</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-lg text-center overflow-auto">
            {data &&
              data
                // .sort((a, b) => a.id - b.id)
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search);
                })
                .map((ele, index) => (
                  <tr key={index} className="grid grid-cols-7">
                    <td className="border-t px-4 py-2 ">{ele.id}</td>
                    <td className="border-t px-4 py-2 ">{ele.name}</td>
                    <td className="border-t px-4 py-2 ">{ele.rank}</td>
                    <td className="border-t px-4 py-2 ">{ele.price_usd}</td>
                    <td className="border-t px-4 py-2 ">
                      {ele.percent_change_24h}
                    </td>
                    <td className="border-t px-4 py-2 ">{ele.price_btc}</td>
                    <td className="border-t px-4 py-2 ">
                      {ele.market_cap_usd}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableData;
