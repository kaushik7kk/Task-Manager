import React from 'react';
import "../../styles/DashTable.css";
import TableItem from './TableItem';

export default function DashTable() {
  return (
    <>
        <table className="dashTable">
            <thead>
                <tr>
                    <th>Task Description</th>
                    <th>Actions</th>
                    <th>Time Left</th>
                </tr>
            </thead>
            <tbody>
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
            </tbody>
        </table>
    </>
  )
}
