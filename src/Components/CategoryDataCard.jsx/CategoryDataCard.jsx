import React from 'react'
import { useFetch } from '../../Hooks/useFetch'

export const CategoryDataCard = () => {

    const { data: categories } = useFetch(`http://localhost:4000/category/details/${id}`);
    console.log("data", categories);
    

  return (
    <div>
        {data.categories.map((item) => {
          return (
            <FoldOut
              data={item}
              key={item.id}
            />
          )
        })}
    </div>
  )
}
