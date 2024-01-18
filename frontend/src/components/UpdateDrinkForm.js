import React, { useState, useEffect } from 'react';



const UpdateDrinkForm = ({ onSubmit, initialData, drinkId }) => {

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: initialData,
      });
  

      useEffect(() => {
        setValue(initialData);
      }, [initialData, setValue]);


  const handleFormSubmit = (data) => {
    // Call the onSubmit function with the form values
    onSubmit(drinkId, data);
  };

  return (
    <div>
    <h3>Update the Car</h3>
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label>Name</label>
      <Controller as={<input />} name="name" control={control} />

      <label>Category</label>
      <Controller as={<input />} name="category" control={control} />

      <label>Distillery</label>
      <Controller as={<input />} name="distillery" control={control} />

      <label>Bottler</label>
      <Controller as={<input />} name="bottler" control={control} />

      <label>Bottling Series</label>
      <Controller as={<input />} name="bottlingSeries" control={control} />

      <label>Year Bottled</label>
      <Controller as={<input />} name="yearBottled" control={control} />

      <label>Size</label>
      <Controller as={<input />} name="size" control={control} />

      <label>Notes</label>
      <Controller
        as={<input />}
        name="notes"
        control={control}
        rules={{ required: 'Enter some notes - taste and flavor' }}
      />

      <label>Strength</label>
      <Controller
        as={<input />}
        name="strength"
        control={control}
        rules={{ required: 'Please enter Strength in percentage' }}
      />

      <button type="submit">Update Car</button>
    </form>
  </div>
  );
};

export default UpdateDrinkForm;