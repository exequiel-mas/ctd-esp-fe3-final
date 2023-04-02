import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

export const initialState = {
  dentists: { data: [], loading: false, hasError: false, error: null },
  dentist: { data: {}, loading: false, hasError: false, error: null },
  favourites: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DENTISTS_REQUEST':
      return { ...state, dentists: { ...state.dentists, loading: true } };
    case 'GET_DENTISTS_SUCCESS':
      return { ...state, dentists: { data: action.payload, loading: false, hasError: false, error: null } };
    case 'GET_DENTISTS_FAILURE':
      return { ...state, dentists: { ...state.dentists, hasError: true, error: action.payload, loading: false } };
    case 'GET_DENTIST_REQUEST':
      return { ...state, dentist: { ...state.dentist, loading: true } };
    case 'GET_DENTIST_SUCCESS':
      return { ...state, dentist: { data: action.payload, loading: false, hasError: false, error: null } };
    case 'GET_DENTIST_FAILURE':
      return { ...state, dentist: { ...state.dentist, hasError: true, error: action.payload, loading: false } };
    case 'TOGGLE_FAVOURITE':
      return { ...state, dentists: { ...state.dentists, data: state.dentists.data.map((dentist) => dentist.id === action.payload ? ({ ...dentist, isFavourite: !dentist.isFavourite }) : dentist)}};
    case 'ADD_FAVOURITE':
      return { ...state, favourites: [...state.favourites, {...action.payload, isFavourite: true}] };
    case 'REMOVE_FAVOURITE':
      return { ...state, favourites: state.favourites.filter((favourite) => favourite.id !== action.payload) };
    case 'GET_FAVOURITES':
        const favourites = localStorage.getItem('favourites');
        return { ...state, favourites: favourites ? JSON.parse(favourites) : [] };  
    case 'SET_FAVOURITES':
        localStorage.setItem('favourites', JSON.stringify(action.payload));
        return { ...state, favourites: action.payload };
      default:
      return state;
  }
};

export const DataContext = createContext(undefined);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getDentists = async () => {
      dispatch({ type: 'GET_DENTISTS_REQUEST' });
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({ type: 'GET_DENTISTS_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'GET_DENTISTS_FAILURE', payload: error });
      }
    };

    getDentists();
  }, []);

  const getDentist = async (id) => {
    dispatch({ type: 'GET_DENTIST_REQUEST' });
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'GET_DENTIST_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'GET_DENTIST_FAILURE', payload: error });
    }
  };

  const addFavourite = (dentist) => {
    dispatch({ type: 'ADD_FAVOURITE', payload: dentist });
    dispatch({ type: 'SET_FAVOURITES', payload: [...state.favourites, {...dentist, isFavourite: true}] });
  };
  
  const removeFavourite = (id) => {
    dispatch({ type: 'REMOVE_FAVOURITE', payload: id });
    dispatch({ type: 'SET_FAVOURITES', payload: state.favourites.filter((favourite) => favourite.id !== id) });
  };
  
  const toggleFavourite = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
    dispatch({ type: 'SET_FAVOURITES', payload: state.dentists.data.filter((dentist) => dentist.isFavourite) });
  };
  
  const handleFavourite = (event, dentist) => {
    event.stopPropagation();
    if (getIsFavourite(dentist.id)) {
      removeFavourite(dentist.id);
    } else {
      addFavourite(dentist);
    }
  };
  
  const getIsFavourite = (id) => {
    return state.favourites.some((favourite) => favourite.id === id);
  };


  return (
    <DataContext.Provider value={{ ...state, getDentist, getIsFavourite, handleFavourite, toggleFavourite }}>
      {children}
    </DataContext.Provider>
  );
};
