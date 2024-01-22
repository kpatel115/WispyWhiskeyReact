import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form'


const UpdateDrinkForm = ({ onSubmit, initialData, drinkId }) => {

  console.log(onSubmit)
  
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: initialData,
  });


  return (
    <div>
      <h3>Update the Drink</h3>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"  onSubmit={onSubmit} >
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <Controller
          name="category"
          control={control}
          render={({ field }) => <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Distillery</label>
        <Controller
          name="distillery"
          control={control}
          render={({ field }) => <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Bottler</label>
        <Controller
          name="bottler"
          control={control}
          render={({ field }) => <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Bottling Series</label>
        <Controller
          name="bottling_series"
          control={control}
          render={({ field }) => <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Year Bottled</label>
        <Controller
          name="year_bottled"
          control={control}
          render={({ field }) => <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Size</label>
        <Controller
          name="size"
          control={control}
          render={({ field }) => <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Strength</label>
        <Controller
          name="strength"
          control={control}
          render={({ field }) => <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Notes</label>
        <Controller
          name="notes"
          control={control}
          render={({ field }) => <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...field} />}
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Update Drink</button>
      </form>
    </div>
  );
};

export default UpdateDrinkForm;