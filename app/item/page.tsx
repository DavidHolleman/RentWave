"use server";

import SearchBar from "@/app/components/SearchBar";
import { getSomeItems, getUserRating } from "./ItemServe";

export default async function ItemSearch( params:any ) {
  let ItemSet = await getSomeItems((await params.searchParams).p);

  return (
    <div>
      <div className="box">
        <h1>Search for Items</h1>
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