import React from "react";

const DesktopAlert = () => {
  return (
    <div className="desktop-only-alert">
      <div className="alert-content">
        <div className="nike-logo">
          <svg height="60px" width="60px" fill="#fff" viewBox="0 0 69 32">
            <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
          </svg>
        </div>
        <h2>Desktop View Only</h2>
        <p>This website is optimized for desktop viewing.</p>
        <p>
          Please access this site on a desktop or laptop computer for the best
          experience.
        </p>
      </div>
    </div>
  );
};

export default DesktopAlert;
