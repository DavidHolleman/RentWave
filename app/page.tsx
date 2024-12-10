"use server";

import RentWaveLogo from "@/app/components/RentWaveLogo";
import SearchBar from "@/app/components/SearchBar";
import { getAllItems, getUserRating } from "./item/ItemServe";

export default async function Home() {
  let ItemSet = await getAllItems();

  return (
    <div>
      <div className="box">
        <RentWaveLogo />
        <h1 className="center">RentWave</h1>
        <h2 className="center">A Global Renting Solution</h2>
        
        <SearchBar />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1.5rem", margin: "1.5rem"}}>
      {await ItemSet.map(async (item) => (
          <a href={"/item/" + item.Id}>
            <div className="item-card">
              <h3>{item.Name}</h3>
              <p><strong>Category:</strong> {item.Category}</p>
              <p><strong>Owner:</strong> {item.Owner}</p>
              <p><strong>Rating:</strong> {await getUserRating(item.Owner)}</p>
              <p><strong>Description:</strong> {item.Description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}