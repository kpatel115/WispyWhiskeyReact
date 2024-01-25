import React, { useState, useEffect } from 'react';
import AddDrinkForm from './AddDrinkForm';
import UpdateDrinkForm from './UpdateDrinkForm';
import { Modal } from  'antd'
import { server_calls } from '../api/server';
import DataCard from './DataCard';



// const drinkData = server_calls.get()
// const drinkId = drinkData[0]



const Dashboard = () => {

  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState(null);

  const getData = async () => {
    const result = await server_calls.get();
    setData(result);
  };



  useEffect(() => {
    getData();
  }, [])

  const handleAddDrink = async (newDrink) => {
    try {
      const createdDrink = await server_calls.create(newDrink);
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
      const updatedDrinkData = await server_calls.update( drinkId, updatedDrink);
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
      await server_calls.delete(drinkId);

      // Assuming deletion is successful, update the state
      setData(data.filter((drink) => drink.id !== drinkId));
      setIsModalVisible(false);
      setSelectedDrink(null);
    } catch (error) {
      console.error('Error deleting Drink: ', error);
    }
  };

  return (
    <div className='flex-row align-center justify-center container w-full h-full mx-auto'>

      {/* Add or Update Drink */}
      <div className='text-slate-500 text-center justify-center'>
        
        <button className=' bg-slate-500 hover:bg-slate-700 text-white text-center p-3 m-9 rounded-lg' onClick={() => setIsModalVisible(true)}>
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
          <UpdateDrinkForm onSubmit={handleUpdateDrink} initialData={selectedDrink} drinkId={selectedDrink.id} />
        ) : (
          <AddDrinkForm onSubmit={handleAddDrink} />
        )
        }

      </Modal>
      <div className='flex items-center justify-center'>
      {data && data.map((item, index) => (
        <DataCard className='flex justify-center bg-slate-200 text-black max-w-md mx-auto' data={item} key={index} getData={getData}

          onEdit={(data) => {
            setSelectedDrink(data);
            setIsModalVisible(true);
          }}

          onDelete={(data) => {
            if (window.confirm(`Are you sure you want to delete ${data.name}?`)) {
              setSelectedDrink(data);
              handleDeleteDrink(data.id);
            }
          }}
        />
      ))}
      </div>


    </div>
  );

};







export default Dashboard;