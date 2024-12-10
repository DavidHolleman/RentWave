"use server";

import RentWaveLogo from "../components/RentWaveLogo";
import { getRentals } from "./RentalServe";
import ReviewForm from "./ReviewForm";

export default async function Review() {
  let rentalSet = await getRentals();

  return (
    <div className="box">
      <RentWaveLogo />
      <h1> Leave a Review </h1>

      <ReviewForm rentals={rentalSet}/>
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