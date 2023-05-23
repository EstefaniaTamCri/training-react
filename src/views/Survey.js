import {Link} from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
const Survey = () => {
  const outletContext = useOutletContext();
  return (
    <>
      <h2>Survey <Link to="/contact">Contact</Link></h2>
      <p>{outletContext}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        accusamus.
      </p>
    </>
  );
};
export default Survey;
