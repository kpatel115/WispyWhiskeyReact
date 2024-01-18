import { server_calls } from '../api/server';
import { useState, useEffect } from 'react'
// just to get the details data from server.ts 
export const useGetData = (id) => {

    const [ drinkData, setData ] = useState(null)

    async function handleDataFetch(){
      try {
        const response = await server_calls.get();
        setData(response.data)
      } catch (error) {
        console.error("error fetching data: ", error)
      }
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

  return {
    drinkData, getData:handleDataFetch,
  };
};