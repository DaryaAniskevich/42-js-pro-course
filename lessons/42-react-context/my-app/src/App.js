import "./App.css";
import RenderPosts from "./components/renderPosts/RenderPosts";
import Users from "./components/Users/Users";
import PostDetails from "./components/renderPosts/postsBlock/Post/PostDetails/PostDetails";
import { ThemeProvider } from "./components/themeContext/ThemeContext";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
  useParams,
} from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider>
          <Header />
          <Switch>
            <Route exact path="/posts" component={RenderPosts} />
            <Route exact path="/posts/:postId" component={PostDetails} />
            <Route exact path="/users" component={Users} />
            <Redirect to="/users" />
          </Switch>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
