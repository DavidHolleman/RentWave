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
        {await ItemSet.map(async (f) => (
          <div className="item-card">
            <h3>{f.Name}</h3>
            <p><strong>Category:</strong> {f.Category}</p>
            <p><strong>Owner:</strong> {f.Owner}</p>
            <p><strong>Rating:</strong> {await getUserRating(f.Owner)}</p>
            <p><strong>Description:</strong> {f.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}