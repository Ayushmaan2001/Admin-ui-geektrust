import React from 'react'
import '../Styles/Table.css'

const Table = ({name,email,role}) => {
  return (
    <div>
      <table>
      <tbody>
        <td className="td">
        <input type="checkbox" />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>
          <button onClick={() => {console.log('edit')}}>
          <ion-icon name="create-outline" ></ion-icon>
          </button>
          {" "}
          <button  onClick={() => {}}>
          <ion-icon name="trash-outline"></ion-icon>
          </button>
        </td>
      </tbody>
    </table>
    </div>
  )
}

export default Table