"use client";

import { InputBig } from "@/app/components/Input";
import { useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { FaStar } from 'react-icons/fa'

function PostReviewButton() {
	const { pending } = useFormStatus();
	return (
    <button type="submit">
      {pending ? "Posting Review..." : "Post Review"}
    </button>
	);
}

function tryPostReview(state: string, payload: FormData): string | Promise<string> {
    throw new Error("Function not implemented.");
}

export default function Review() {
  let [error, formAction] = useActionState<string, FormData>(tryPostReview, "");
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  };

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <div className="box">
      <h1> Leave a Review </h1>

      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{ marginRight: 10, cursor: "pointer" }}
            />
          )
        })}
      </div>

      <InputBig
        label=""
        id="review"
        name="review"
        placeholder="Please leave a review!"
      />

      <PostReviewButton />
    </div>
  );
};
      
      
const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "1em",
    paddingBottom: "1em"
  },
};