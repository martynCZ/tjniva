import React from 'react'

const SocialLink = ({ icon, label, odkaz }) => {
    return (
    <a href={odkaz}>
      <div className="flex items-center gap-4 transition-colors duration-400">       
            {icon}
            <span>{label}</span>       
      </div>
    </a>
    );
  };

export default SocialLink