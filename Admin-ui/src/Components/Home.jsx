import React,{useState} from 'react'
import {useFetch} from '../Hooks'
import {Table,TableHeader} from './index';
import SearchBar from './SearchBar';

const Home = () => {
    let {data} = useFetch();
  return (
    <div className='App'>
        <SearchBar />
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