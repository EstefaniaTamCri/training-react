import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  return (
    <>
      <h2>Blog Content</h2>
      <div>
        {id && (
          <>
            <h3>Publication{id}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </>
        )}
        {!id && (
          <>
            <h3>Publication{id}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </>
        )}
      </div>
    </>
  );
};
export default Blog;
