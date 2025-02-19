import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiPage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    apiFecth();
  }, []);
  const apiFecth = async () => {
    setLoading(true)
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    // console.log(result);
    setLoading(false)
    setData(result?.data)
  };
  console.log(data);

  return
    {/* {data.map((item) => <li>{item.title}</li>)} */}
    {loading === true ? <div class="spinner-border text-primary"></div> : "data showing"}
 
};

export default ApiPage;
