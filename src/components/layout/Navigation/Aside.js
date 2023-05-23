import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <>
      <h2>Blog Posts</h2>
      <ul>
       
       <li><Link to="/blog1">Blog1</Link></li>
       <li><Link to="/blog2">Blog2</Link></li>
       <li><Link to="/blog3">Blog3</Link></li>
      </ul>
    </>
  );
};

export default Aside;
