'use client';

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface ItemDetails {
  id: string;
  name: string;
  category: string;
  owner: string;
  rating: number;
  description: string;
}

/*const fetchItemDetails = async (id: string): Promise<ItemDetails> => {
  const response = await fetch(`/api/items/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch item details.");
  }
  return response.json();
};*/

export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query; // Get the 'id' parameter from the URL

  const [item, setItem] = useState<ItemDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || typeof id !== "string") return;

    //fetchItemDetails(id)
      //.then((data) => setItem(data))
      //.catch(() => setError("Failed to load item details."));
  }, [id]);

  if (!id || typeof id !== "string") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!item) {
    return <div>Loading item details...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
        <p className="text-gray-600 mb-2">
          <strong>Category:</strong> {item.category}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Owner:</strong> {item.owner}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Rating:</strong> {item.rating}/5
        </p>
        <p className="text-gray-700 mt-4">
          <strong>Description:</strong> {item.description}
        </p>
      </div>
    </div>
  );
}
