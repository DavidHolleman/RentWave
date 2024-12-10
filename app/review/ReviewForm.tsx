"use client";

import { InputBig } from "@/app/components/Input";
import { SetStateAction, useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { FaStar } from 'react-icons/fa'
import { tryPostReview } from "./RentalServe";
import { Rental } from "../Types";

function PostReviewButton() {
	const { pending } = useFormStatus();
	return (
    <button type="submit">
        {pending ? "Posting Review..." : "Post Review"}
    </button>
	);
}

export default function ReviewForm({ rentals }: { rentals: Rental[] }) {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = (value: SetStateAction<number>) => {
        setCurrentValue(value)
    }
    const handleMouseOver = (newHoverValue: any) => {
        setHoverValue(newHoverValue)
    };
    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    let [error, formAction] = useActionState<string, FormData>(tryPostReview, "");

    return (
        <div className="form">
            <form action={formAction}>
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={40}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                style={{ marginRight: 10, cursor: "pointer" }}
                            />
                        )
                    })}
                </div>
                <input type="hidden" id="rating" name="rating" value={currentValue}/>

                <label htmlFor="rental">Rental</label>
                <select name="rental" id="rental" defaultValue={""}>
                    <option value="" disabled>Select a rental to review</option>
                    {rentals.map((f:Rental) => (
                        <option key={f.Id} value={f.Id}> {f.Id+" - "+f.ItemId+" - "+f.Owner} </option>
                    ))}
                </select>

                <InputBig
                    label="Review"
                    id="review"
                    name="review"
                    placeholder="Please leave a review!"
                />

                <PostReviewButton />
            </form>
        </div>
    );
};
      
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};  
const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "1em",
    paddingBottom: "1em"
  },
};