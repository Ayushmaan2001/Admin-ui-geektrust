import React,{useState} from 'react'
import '../Styles/Table.css'

const Table = ({name,email,role}) => {
  const [isCheck, setIsCheck] = useState(false);
  const handleChange = (event) => {
    setIsCheck(event.target.checked)
  }
  return (
    <div>
      {!isCheck ? <table>
      <tbody>
        <td className="td">
        <input type="checkbox" name='checkbox' onChange={handleChange}/>
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
    :
    <table style={{backgroundColor:'grey'}}>
    <tbody>
      <td className="td">
      <input type="checkbox" name='checkbox' onChange={handleChange}/>
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
    }
      

    </div>
  )
}

export default Table