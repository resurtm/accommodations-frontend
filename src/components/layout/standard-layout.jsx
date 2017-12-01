import React from 'react';

export default function StandardLayout(WrappedComponent) {
  return props => (
    <section className="section">
      <div className="container">
        <WrappedComponent {...props}/>
      </div>
    </section>
  );
}
