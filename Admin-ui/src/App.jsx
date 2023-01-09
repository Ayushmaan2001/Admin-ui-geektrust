import React,{useEffect,useState} from 'react'
import './App.css'
import { Edit,Delete } from './Functions'
import { table } from './Components'
import axios from 'axios'


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
    .then((response) => {
      setData(response.data);
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <React.Fragment>
      {
        console.log(data)
      }
      Hello
    </React.Fragment>
  )
}

export default App
