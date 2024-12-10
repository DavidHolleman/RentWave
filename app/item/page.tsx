'use client';

import { Input } from "@/app/components/Input";
import { useState } from "react";

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <input
      className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      type="submit"
      value={isPending ? "Searching..." : "Search"}
    />
  );
}

async function trySearch(query: string): Promise<string> {
  // Simulate an API call or search logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Search completed successfully.");
    }, 1000);
  });
}

export default function ItemSearch() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form reload
    setIsPending(true);
    setError(null);

    try {
      const result = await trySearch(query);
      console.log(result); // Handle successful search logic
    } catch (err) {
      setError("An error occurred while searching.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="bg-gray-100 p-6 rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Search for Items</h1>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Input
            label=""
            type="text"
            id="search"
            name="search"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search items by name, category, or owner"
            className="flex-1 p-3 border border-gray-300 rounded"
          />
          <SubmitButton isPending={isPending} />
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {/* Results Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Item Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Item Name</h3>
            <p className="text-gray-600 mb-1">
              <strong>Category:</strong> Electronics
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Owner:</strong> John Doe
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Rating:</strong> 4.5/5
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Description:</strong> This is a placeholder description for the item. Add more details about the item here.
            </p>
          </div>
          {/* Add more dynamically rendered items */}
        </div>
      </div>
    </div>
  );
}
