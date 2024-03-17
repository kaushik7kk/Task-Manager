import React from 'react';
import "../../styles/Dashboard.css";
import ControlPanel from './ControlPanel';
import DashTable from './DashTable';

export default function Dashboard() {
  return (
    <>
        <div className="dashContainer">
          <ControlPanel />
          <DashTable />
        </div>
    </>
  )
}
