import React, { Component } from "react";
...

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            KAiburr
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/kaiburr"} className="nav-link">
                Kaiburr
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Kaiburr/>} />
            <Route path="findAll" element={<List/>} />
            <Route path="/add" element={<Add/>} />
            <Route path="/tutorials/:id" element={<GetId/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;


