import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Navbar } from "../src/components/Navbar/Navbar";
import { Footer } from "../src/components/Footer/Footer";
import Donation from "../src/components/donation_and_need_form/donation-form.js";
import Need from "../src/components/donation_and_need_form/need-form.js";
import MyBook from "./components/home/book";
import Stories from "./components/home/stories";
import User from "./components/User-profile/User.js";
import { Loginpage } from "./components/Login-page/Login-page";
import Homepage from "./pages/Homepage";
import Event from "./components/Event/Event.js";
import Carousel from "./components/carousel/carousel.js";
import Events from "./components/Event Page/Events";
import LookingIndividualSignup from "./components/signup/lookingIndividual/lookingIndividualSignup";
import LookingOrganisationSignup from "./components/signup/lookingOrganisation/lookingOrganisationSignup";
import WillingIndividualSignup from "./components/signup/willingIndividual/willingIndividualSignup";
import WillingOrganisationSignup from "./components/signup/willingOrganisation/willingOrganisationSignup";
import Feedback from "./components/Feed Page/Feedback";

function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <br />

        <Carousel />

        <a
          href="/donate"
          className="btn btn-info"
          style={{ float: "left", margin: "1rem" }}
        >
          Donate
        </a>
        <a
          href="/need"
          className="btn btn-info"
          style={{ float: "right", margin: "1rem" }}
        >
          Need
        </a>
        <br />
        <br />
        <Navbar />

        <center>
          <Switch>
            <Route path="/createevent" component={Event} />
            <Route path="/" exact component={Homepage} />
            <Route path="/aboutus" component={MyBook} />
            <Route path="/faqs" component={Stories} />
            <Route path="/signup" component={Homepage} />
            <Route path="/login" component={Loginpage} />
            <Route path="/donate" component={Donation} />
            <Route path="/need" component={Need} />
            <Route path="/userprofile" component={User} />
            <Route path="/events" component={Events} />
            <Route
              path="/lookingindividualsignup"
              component={LookingIndividualSignup}
            />
            <Route
              path="/lookingorganisationsignup"
              component={LookingOrganisationSignup}
            />
            <Route
              path="/willingindividualsignup"
              component={WillingIndividualSignup}
            />
            <Route
              path="/willingorganisationsignup"
              component={WillingOrganisationSignup}
            />
          </Switch>
        </center>
        <br />
        <Feedback />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
