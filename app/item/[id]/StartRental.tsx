"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { startRental } from "../ItemServe";

function StartRentalButton() {
	const { pending } = useFormStatus();
	return (
    <button type="submit">
        {pending ? "Renting Item..." : "Rent Item"}
    </button>
	);
}

export default function StartRental( {itemid, owner}: { itemid:number, owner:string } ) {
    let [error, formAction] = useActionState<string, FormData>(startRental, "");

    return (
        <div className="form">
            <form action={formAction}>
                <input type="hidden" id="ItemId" name="ItemId" value={itemid}/>
                <input type="hidden" id="Owner" name="Owner" value={owner}/>
                <StartRentalButton />
            </form>
        </div>
    );
};