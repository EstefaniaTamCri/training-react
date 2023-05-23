import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (searchParams.has("page")) {
        let page=parseInt(searchParams.get("page"));
        if (page<2) {
            setPage(1);
        }
    }
    if (page>8) {
        setPage(8);
    }
  }, [searchParams]);

  return (
    <>
      <h2>Home</h2>
      <p>Page: {page}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        accusamus.
      </p>
    
     
    </>
  );
};
export default Home;
