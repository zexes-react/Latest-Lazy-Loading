import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import User from './containers/User';
import Welcome from './containers/Welcome';

// import Posts from './containers/Posts';
const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {



  render() {
    return (

      <BrowserRouter>
        <React.Fragment>{/* same as aux*/}
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User} />
          <Route path="/posts" render={() => (
              <Suspense fallback={<div>Loading...</div>}>{/*we can use a spinner here too*/}
                <Posts/>
              </Suspense>
          )} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
