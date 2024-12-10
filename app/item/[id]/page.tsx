"use server";

import { getUserRating, getSingleItem } from "../ItemServe";

export default async function ItemPage( {params}: { params:{ id:number } } ) {
  let id = (await params).id;
  let item = await getSingleItem(id);

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
        <p style={{ color: "#4b5563", marginBottom: "0.5rem" }}><strong>Rating:</strong> {await getUserRating(item.Owner)}/5</p>
        <p style={{ color: "#374151", marginBottom: "0.5rem" }}><strong>Description:</strong> {item.Description}</p>
      </div>
    </div>
  );
}