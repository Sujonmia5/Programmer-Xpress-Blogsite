import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <nav>dashboard navbar</nav>
            {children}
        </div>
    );
};

export default DashboardLayout;