import React, { useState, useEffect } from 'react';

// import Button from './Button'
import { server_calls } from '../api/server';
import DataCard from './DataCard';

const Dashboard = () => {

  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState(null);

  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    const result = await server_calls.get();
    setData(result);
    console.log(result);
  };


  const handleAddDrink = async (newDrink) => {
    try {

      const createdDrink = await server_calls.post('whiskeys', newDrink);
      setData([...data, createdDrink]);
      setIsModalVisible(false);
      setSelectedDrink(null);
    } catch (error) {
      console.error('Error adding Drink: ', error);
    }
  };

  // Ability to Update A Drink
  const handleUpdateDrink = async (drinkId, updatedDrink) => {
    try {
      const updatedDrinkData = await server_calls.update('whiskeys', drinkId, updatedDrink);
      setData(data.map(drink => (drink.id === drinkId ? updatedDrinkData : drink)));
      setIsModalVisible(false);
      setSelectedDrink(null);
    } catch (error) {
      console.error('Error updating Drink: ', error);
    }
  };

  const handleDeleteDrink = async (drinkId) => {
    try {
      if (!drinkId) {
        console.error('Invalid drinkId:', drinkId);
        return;
      }

      // Use the server_calls.delete method to delete a drink
      await server_calls.delete('whiskeys', drinkId);

      // Assuming deletion is successful, update the state
      setData(data.filter((drink) => drink.id !== drinkId));
      setIsModalVisible(false);
      setSelectedDrink(null);
    } catch (error) {
      console.error('Error deleting Drink: ', error);
    }
  };

  return (
    <div className=''>
      {/* Add or Update Drink */}
      <div className='flex justify-center items-center text-sky-50 text-center mx-9 my-9'>
        <button className='text-sky-50 text-center mx-9' onClick={() => setIsModalVisible(true)}>
          {selectedDrink ? 'Edit Drink' : 'Add Drink'}
        </button>
      </div>

      {/* Modal */}
      <Modal
        title={selectedDrink ? 'Edit Drink' : 'Add Drink'}
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setSelectedDrink(null);
        }}
        footer={null}
      >

        {/* Conditionally render AddCarForm or UpdateCarForm based on selectedCar */}
        {selectedDrink ? (
          <UpdateDrinkForm onSubmit={handleUpdateDrink} initialData={selectedDrink} carId={selectedDrink._id} />
        ) : (
          <AddDrinkForm onSubmit={handleAddDrink} />
        )
        }

      </Modal>
      <button className='w-9 h-9 bg-slate-500 text-slate-300' onClick={getData}>Data</button>
      {data && data.map((item, index) => (
        <DataCard className='m-9' data={item} key={index} getData={getData}

          onEdit={(data) => {
            setSelectedDrink(data);
            setIsModalVisible(true);
          }}

          onDelete={(data) => {
            if (window.confirm(`Are you sure you want to delete ${data.name}?`)) {
              setSelectedDrink(data);
              handleDeleteDrink(data._id);
            }
          }}
        />
      ))}


    </div>
  );

};







export default Dashboard;