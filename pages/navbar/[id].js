import React from 'react'
import { getData } from '../../utils/fetchData';
import Link from 'next/link';
import NavLink from '../../components/NavLink';
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Brand from '../../components/Brand';
import CardEvent from '../../components/CardEvent';
import Stories from '../../components/Stories';
import Statistics from '../../components/Statistics';
import Footer from '../../components/Footer';

export default function Navbar({data,dataEvents}) {
  return (
    <>
        <Header data={data} />
        <Brand />
        <CardEvent data={dataEvents}/>
        <Stories />
        <Statistics />
        <Footer />
    </>
    
  )
}



export async function getServerSideProps(context) {
    const req = await getData(`api/v1/participants/${context.params.id}`);
    const reqEvents = await getData('api/v1/events');

    const res = req.data;
    const resEvents = reqEvents.data;

    console.log(res)
  
    return {
      props: { data: res,dataEvents:resEvents },
    };
  }