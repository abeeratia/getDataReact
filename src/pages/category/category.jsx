import React, { useEffect, useState } from "react";
import Menu from "./menu";
import data from "./data";
import Navbar from "../../Component/navbar/navbar";
function Category() {
  // const items = (new set((data)=>data.category))
  const [items, setitems] = useState([]);

  const [category, setCategory] = useState("");

  function filteritems(category) {
    setCategory(category);
  }
  console.log(filteritems);
  useEffect(() => {
    console.log(category);
    if (category === "all") {
      setitems(data);
    } else {
      setitems(data?.filter((item) => item.category === category));
    }
  }, [category]);
  useEffect(() => {
    setitems(data);
  }, []);
  console.log(items);

  return (
    <div>
        <Navbar/>
      <main>
        <section className="menu section">
          <div className="title">
            <button className="btn" onClick={() => filteritems("all")}>
              all
            </button>
            <button className="btn" onClick={() => filteritems("breakfast")}>
              breakfast
            </button>
            <button className="btn" onClick={() => filteritems("lunch")}>
              lunch
            </button>
            <button className="btn" onClick={() => filteritems("shakes")}>
              shakes
            </button>

            <h2>our menu</h2>
            <div className="underline"></div>
          </div>

          <Menu items={items} />
        </section>
      </main>
    
    </div>
    
  );
}

export default Category;
