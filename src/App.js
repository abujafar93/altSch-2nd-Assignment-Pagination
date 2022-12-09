import Users from "./Components/Users";
import UsersDetails from "./Components/UsersDetails";
import DesignedNav from "./Components/DesignedNav";

function App() {
  return (
    <div className="container">
      <DesignedNav />
      <Users />
      {/* <UsersDetails /> */}
    </div>
  );
}

export default App;
