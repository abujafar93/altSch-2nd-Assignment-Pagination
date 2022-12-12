import { Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import UsersDetails from "./Components/UsersDetails";
import DesignedNav from "./Components/DesignedNav";
import NoMatch from "./Components/NoMatch";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <div className="container">
      <DesignedNav />
      <ErrorBoundary>
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
      </ErrorBoundary>
    </div>
  );
}

export default App;
