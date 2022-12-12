import { Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import UsersDetails from "./Components/UsersDetails";
import DesignedNav from "./Components/DesignedNav";
import PersonalDetails from "./Components/PersonalDetails";
import Location from "./Components/Location";
import MembershipInfo from "./Components/MembershipInfo";
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <div className="container">
      <DesignedNav />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="userDetails/" element={<UsersDetails />} />
        {/* <Route index element={<PersonalDetails />} />
          <Route exact path="personal" element={<PersonalDetails />} />
          <Route path="location" element={<Location />} />
          <Route path="member" element={<MembershipInfo />} />
          <Route path="*" element={<NoMatch />} /> */}
        {/* </Route> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
