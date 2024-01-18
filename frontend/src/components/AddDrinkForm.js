import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { server_calls } from '../api/server';
import { useForm } from 'react-hook-form'

const AddDrinkForm = ({ onSubmit }) => {
    const { register, handleSubmit, errors } = useForm()


    const onSubmit = (data) => {
        console.log(data)
    };


  return (
    <div>
      <h3>Add a Whiskey</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          name="name"
          ref={register({ required: 'Please enter the name of whiskey' })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Category</label>
        <input
          name="category"
          ref={register({ required: 'Please enter the drink category' })}
        />
        {errors.category && <p>{errors.category.message}</p>}

        <label>Distillery</label>
        <input
          name="distillery"
          ref={register({ required: 'Please enter the drink distillery' })}
        />
        {errors.distillery && <p>{errors.distillery.message}</p>}

        <label>Bottler</label>
        <input name="bottler" ref={register} />

        <label>Bottling Series</label>
        <input name="bottlingSeries" ref={register} />

        <label>Year Bottled</label>
        <input name="yearBottled" ref={register} />

        <label>Size</label>
        <input name="size" ref={register} />

        <label>Notes</label>
        <input
          name="notes"
          ref={register({ required: 'Enter some notes - taste and flavor' })}
        />
        {errors.notes && <p>{errors.notes.message}</p>}

        <label>Strength</label>
        <input
          name="strength"
          ref={register({ required: 'Please enter strength in percentage' })}
        />
        {errors.strength && <p>{errors.strength.message}</p>}

        <button type="submit">Add Drink</button>
      </form>
    </div>
  );
};

export default AddDrinkForm;

