import React from 'react'
import { useFetch } from '../../Hooks/useFetch';


export const RecyclingStations = () => {

    const { data } = useFetch("http://localhost:3000/orgs?attributes=id,name,address,zipcode,city");

    console.log("data", data);

  return (
    <section>
        <h1>Genbrugsstationer</h1>
    </section>
  )
}
