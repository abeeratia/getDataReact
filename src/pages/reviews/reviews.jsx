import React, { useState } from "react";
import people from "../../data/data";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Reviews() {
  const [index, setIndex] = useState(0);
  const { image, age, name } = people[index];

  console.log(image);

  function checkNumber(index) {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  }


  const nextElement = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  function prevElement() {
          
  return setIndex(checkNumber(index-1))
  
  }


     console.log(image);
  return (
    <div>
      <div className="mt-5 bg-light p-5 text-center container bg-light">
        <div className="w-25 m-auto">
          <img src={image} className="w-100" alt="" />
        </div>
        <h2>{age}</h2>
        <p>{name}</p>
        <div>
          <span>
            <button onClick={ nextElement}>
              <AiOutlineArrowRight />
            </button>{" "}
          </span>
          <span>
            {" "}
            <button className="ms-3" onClick={prevElement}>
              <AiOutlineArrowLeft />
            </button>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
