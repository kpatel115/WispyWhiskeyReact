import React from 'react';
// import { server_calls } from '../api/server';
import { useForm } from 'react-hook-form'
// import axios from 'axios'
const AddDrinkForm = ({onSubmit}) => {

  const { register, handleSubmit } = useForm()

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post("'http://127.0.0.1:5000/api/whiskeys", data)
  //     console.log(response)
  //   } catch (error) {

  //   }
  // };

  return (
    <div>
      <h3>Add a Whiskey</h3>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("name", { required: true, maxLength: 20 })} />


        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <input className="block text-gray-700 text-sm font-bold mb-2" {...register("category", { required: true, maxLength: 20 })} />


        <label className="block text-gray-700 text-sm font-bold mb-2">Distillery</label>
        <input className="block text-gray-700 text-sm font-bold mb-2" {...register("distillery", { required: true, maxLength: 20 })} />


        <label className="block text-gray-700 text-sm font-bold mb-2">Bottler</label>
        <input className="block text-gray-700 text-sm font-bold mb-2" {...register("bottler", { required: true, maxLength: 20 })} />

        <label className="block text-gray-700 text-sm font-bold mb-2">Bottling Series</label>
        <input className="block text-gray-700 text-sm font-bold mb-2" {...register("bottling_series", { required: true, maxLength: 20 })} />

        <label className="block text-gray-700 text-sm font-bold mb-2">Year Bottled</label>
        <input className="block text-gray-700 text-sm font-bold mb-2" {...register("year_bottled", { required: true, maxLength: 20 })} />

        <label className="block text-gray-700 text-sm font-bold mb-2">Size</label>
        <input className="block text-gray-700 text-sm font-bold mb-2" {...register("size", { required: true, maxLength: 20 })} />

        <label className="block text-gray-700 text-sm font-bold mb-2">Notes</label>
        <input className="block text-gray-700 text-sm font-bold mb-2" {...register("notes", { required: true, maxLength: 20 })} />


        <label className="block text-gray-700 text-sm font-bold mb-2">Strength</label>
        <input className="block text-gray-700 text-sm font-bold mb-2" {...register("strength", { required: true, maxLength: 20 })} />


        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Drink</button>
      </form>
    </div>
  );
};

export default AddDrinkForm;

