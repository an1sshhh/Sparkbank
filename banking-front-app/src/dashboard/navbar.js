import React from 'react';
import classNames from 'classnames';

export default function Navbar() {
  const navClasses = classNames('navbar', 'navbar-dark', 'bg-dark');

  return (
    <div>
      <nav className={navClasses}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" style={{ color: '#e64f00' }}>Spark Bank</span>
          <span className="navbar-text"><i>Generating Your Interest...</i></span>
        </div>
      </nav>
    </div>
  );
}
