"use server";

import { getUserRating, getSingleItem, getItemReviews } from "../ItemServe";
import { formatDate } from "@/app/Types";
import StartRental from "./StartRental";


export default async function ItemPage( {params}: { params:{ id:number } } ) {
  let id = (await params).id;
  let item = await getSingleItem(id);
  let reviews = await getItemReviews(id);

  if (!id || typeof id !== "string") {
    return <div>Loading...</div>;
  }
  if (!item) {
    return <div>Loading item details...</div>;
  }

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto", padding: "2rem 1rem" }}>
      <div style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "0.5rem", boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "1rem" }}>{item.Name}</h1>
        <p style={{ color: "#4b5563", marginBottom: "0.5rem" }}><strong>Category:</strong> {item.Category}</p>
        <p style={{ color: "#4b5563", marginBottom: "0.5rem" }}><strong>Owner:</strong> {item.Owner}</p>
        <p style={{ color: "#4b5563", marginBottom: "0.5rem" }}><strong>Rating:</strong> {await getUserRating(item.Owner)}</p>
        <p style={{ color: "#374151", marginBottom: "0.5rem" }}><strong>Description:</strong> {item.Description}</p>
      </div>
      {item.Owner != "dhollema@pnw.edu" &&
        <StartRental itemid={id} owner={item.Owner} />
      }
      
      {reviews.length > 0 &&
      <>
        <h1 style={{ paddingTop: "2rem" }}>Reviews:</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, minmax(0, 1fr))", gap: "1.5rem"}}>
          {await reviews.map(async (f) => (
            <div className="item-card" key={f.Time.getTime()}>
              <p><strong>Author:</strong> {f.Author}</p>
              <p><strong>Rating:</strong> {f.Rating}</p>
              <p><strong>Time:</strong> {formatDate(f.Time)}</p>
              <p><strong>Content:</strong> {f.Content}</p>
            </div>
          ))}
        </div>
      </>}
    </div>
  );
}