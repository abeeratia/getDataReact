import React, { useEffect, useState } from "react";
import Loading from "../loading/loading.jsx";
export default function Tour() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const [count, setCount] = useState(0)

  // getData
  async function getData() {
    setLoading(true);
    try {
      const respose = await fetch("https://course-api.com/react-tours-project");
      const data = await respose.json();
      console.log(data);
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  //    loading
  if (loading) {
    return (
      <>
        <div>
          <Loading />
        </div>
      </>
    );
  }
  //    deleteData
  function deleteData(id,price) {
    const newData = data.filter((datee) => datee.id !== id);
    console.log(price);
    setData(newData);
  }
                 
//   refreshdata
 if (data.length==0) {
    return <div className="text-center">
        <h2>No data</h2>
    <button className="btn btn-success  " onClick={()=>getData()}>refresh</button>
    </div>
    
 }
  return (
    <>
      <div className="text-center container bg-light">
        {data.map((dat, index) => {
          const { image, info, name, price, id } = dat;
          return (
            <>
              <div key={id}>
                <div>
                  <h4>{name}</h4>
                  <p>{price}</p>
                </div>
                <div>
                  <img src={image} width={"500px"} alt="" />
                </div>
                <div className="w-75 text-center">
                  <p>{readMore ? info : `${info.substring(0, 200)}....`}</p>
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? "show less" : "readMore"}
                  </button>
                </div>
              </div>
              <button
                className="btn btn-success"
                onClick={() => deleteData(id, price)}
              >
                No interest{" "}
              </button>
            </>
          );
        })}

        {count}

        <button onClick={() => setCount((old) => old + 1)}>add</button>
      </div>
    </>
  );
}
