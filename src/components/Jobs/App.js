import Jobs from "./Jobs.js";
import job from "../../db/db2.json";

const App = (props) => {
  return (
    <>
      {job.map((jobs) => {
        return (
          <Jobs
            name={jobs.name}
            age={jobs.age}
            role={jobs.role}
            job={jobs.job}
          />
        );
      })}
    </>
  );
};
export default App;