import React from 'react'
import {useFetch} from '../Hooks'
import {Table,TableHeader} from './index';

const Home = () => {
    const {data} = useFetch();
  return (
    <div>
        <TableHeader />
        {
            data.map((item) => {
                return (
                    <Table name={item.name} email={item.email} role={item.role} key={item.id}/>
                )
            })
        }
    </div>
  )
}

export default Home