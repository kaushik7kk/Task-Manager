import React from 'react';
import "../../styles/Dashboard.css";
import DashNav from './DashNav';
import DashTable from './DashTable';

export default function Dashboard() {
  return (
    <>
        <div className="dashContainer">
            <DashNav />
            <DashTable />
        </div>
    </>
  )
}
