import { Link } from "react-router-dom";
import userType from "../data/UserTypes.json";

function Home() {
  return (
    <>
      <div className="mt-20">
        {userType.map((user) => (
          <Link to={`/recipes/${user.UserCode}`} key={user.UserId}>
            <div className="text-white bg-gradient-to-r from-[rgb(43,189,13)] to-green-400  h-14  shadow-lg flex items-center justify-center mt-5 rounded-full p-4 space-x-1">
              <h2>{user.UserMMType}</h2>
              <h2>({user.UserEngType})</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
