import React from 'react'

const TableHeader = () => {
  return (
    <div>
        <table>
      <tbody>
        <th>
          <input type="checkbox" />
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tbody>
      </table>
    </div>
  )
}

export default TableHeader