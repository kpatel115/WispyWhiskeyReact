import {createSlice} from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        user: {
        first_name: "First Name",
        last_name: "Last Name", 
        email: "Email",
        password: "Password",
    }, 
        whiskey: {
            name: "Name",
            category: "Category", 
            distillery: "Distillery",
            bottler: "Bottler",
            bottling_series: "Bottling Series",
            year_bottled: "Year Bottled", 
            strength: "Strength",
            size: "Size",
            notes: "Notes",

        },
    },
    reducers: {
        // functions that say what are we allowed to do to the data
        // state
        // information from the website 
        // funciton that takes data as a parameter and does something

        // action is submitted somewhere - written to state.name
        // User
        chooseFName: (state, action) => { state.first_name  = action.payload },
        chooseLName: (state, action) => { state.last_name  = action.payload }, 
        chooseEmail: (state, action) => { state.email  = action.payload },
        choosePassword: (state, action) => { state.password  = action.payload },
        
        // Whiskey
        chooseName: (state, action) => { state.name  = action.payload },
        chooseCategory: (state, action) => { state.category  = action.payload }, 
        chooseDistillery: (state, action) => { state.distillery  = action.payload },
        chooseBottler: (state, action) => { state.bottler = action.payload },
        chooseBottlingSeries: (state, action) => { state.bottling_series  = action.payload },
        chooseYearBottled: (state, action) => { state.year_bottled  = action.payload }, 
        chooseStrength: (state, action) => { state.strength  = action.payload },
        chooseSize: (state, action) => { state.size  = action.payload },
        chooseNotes: (state, action) => { state.notes  = action.payload },
    }

})

export const reducer = rootSlice.reducer;

export const { chooseFName, chooseLName, chooseEmail, choosePassword, chooseName, chooseCategory, chooseDistillery, chooseBottler, chooseBottlingSeries, chooseYearBottled, chooseStrength, chooseSize, chooseNotes } = rootSlice.actions