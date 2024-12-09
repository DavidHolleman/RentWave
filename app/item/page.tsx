'use client';

import { Input } from "@/app/components/Input";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <input
      className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      type="submit"
      value={pending ? "Searching..." : "Search"}
    />
  );
}

function trySearch(state: string, payload: FormData): string | Promise<string> {
  return "Search results placeholder"; // Replace this with actual logic
}

export default function ItemSearch() {
  const [error, formAction] = useFormState<string, FormData>(trySearch, "");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="bg-gray-100 p-6 rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Search for Items</h1>
        <form action={formAction} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Input
            label=""
            type="text"
            id="search"
            name="search"
            required={true}
            placeholder="Search items by name, category, or owner"
            className="flex-1 p-3 border border-gray-300 rounded"
          />
          <SubmitButton />
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
            <p className="text-gray-600 mb-1"><strong>Category:</strong> Electronics</p>
            <p className="text-gray-600 mb-1"><strong>Owner:</strong> John Doe</p>
            <p className="text-gray-600 mb-1"><strong>Rating:</strong> 4.5/5</p>
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



/* "use client";
import { Input } from "@/app/components/Input";
import RentWaveLogo from "@/app/components/RentWaveLogo";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<input
			className="mb-0"
			type="submit"
			value={pending ? "Searching" : "Search"}
		/>
	);
}

function trySearch(state: string, payload: FormData): string | Promise<string> {
  throw new Error("Function not implemented.");
}

export default function ItemSearch() {
  let [error, formAction] = useFormState<string, FormData>(trySearch, "");

  return (
    <div>
      <div className="box">
            
        <div className="form">
          <form action={formAction} className="search">
            <Input
              label=" "
              type="text"
              id="search"
              name="search"
              required={true}
              placeholder="Search"
            />
            <SubmitButton />
            <p> {error} </p>
          </form>
        </div>
      </div>

      <div className="box">
        <h2>Name</h2>
        <h2>Category</h2>
        <h2>Description</h2>
      </div>
    </div>
  );
} */