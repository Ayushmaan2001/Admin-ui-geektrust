import { useEffect,useState } from "react"
import axios from 'axios'

const useFetch = () => {

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
    return {data};
}

export default useFetch;