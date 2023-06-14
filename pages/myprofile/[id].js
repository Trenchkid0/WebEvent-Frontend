import React from 'react'
import { getData } from '../../utils/fetchData';
import Navbar from '../../components/Navbar';

export default function MyProfile({data}) {
  return (
    <>  
        <div className='header bg-navy'>
            <Navbar data={data}/>
        </div>
        <div>{data.role}</div>
    
    </>
  )
}

export async function getServerSideProps(context) {
    const req = await getData(`api/v1/participants/${context.params.id}`);
    
    const res = req.data;

    console.log(res)
  
    return {
      props: { data: res},
    };
  }