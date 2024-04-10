import React, { useState } from 'react';

function Navbar({ setValue }) {
  const [searchQuery, setSearchQuery] = useState('Nature');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setValue(searchQuery);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">pi-<span>X</span>-el</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active point" onClick={() => setValue("Nature")} >Nature</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active point" onClick={() => setValue("Animal")} >Animal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active point" onClick={() => setValue("Bird")}>Bird</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active point" onClick={() => setValue("Hindu Lord")}>God</a>
              </li>
            </ul>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
