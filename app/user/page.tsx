"use client";

import { useFormStatus } from "react-dom";
import {getUserRating} from "./UserServe";
import {getAllItems} from ".././item/ItemServe";

function PasswordButton() {
	const { pending } = useFormStatus();
	return (
        <button type="submit">
            {pending ? "Changing Password..." : "Change Password"}
        </button>
	);
}
function LocationButton() {
	const { pending } = useFormStatus();
	return (
        <button type="submit">
            {pending ? "Changing Location..." : "Change Location"}
        </button>
	);
}

export default function UserSelf() {
    return (
        <div>
            <div className = "box">
                <h2 className = "left">Name</h2>
                <h2 className = "left">Rating</h2>
                <h2 className = "left">email</h2>
                <PasswordButton />
                
                <h2 className = "left">Location</h2>
                <LocationButton />
            </div>

            <h2 className = "left">Current Rentals</h2>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>

            <h2 className = "left">Other Items</h2>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>

            <h2 className = "left">Rental History</h2>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>

            {/*Items you rented */}
            <h2 className = "left">Your rentals</h2>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>

            <h2 className = "left">Your rental History</h2>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
        </div>
    );
}