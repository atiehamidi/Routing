import React from "react";
import { Switch, Route, Router, Link, NavLink, NavBar } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <main>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">AboutPage</NavLink>
        <NavLink to="/discover">DiscoverMoviesPage</NavLink>
      </main>

      <Route path="/discover" component={DiscoverMoviesPage} />
      <Route path="/about/:me" component={AboutPage} />
      <Route exact path="/" component={HomePage} />
    </div>
  );
}
