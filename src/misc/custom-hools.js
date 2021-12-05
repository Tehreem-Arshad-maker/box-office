import { useReducer, useEffect } from 'react';

function showsReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.showId];
    }

    case 'REMOVE': {
      return prevState.filter(showId => showId !== action.showId);
    }

    default:
      return prevState;
  }
}

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]); // this code to achieve synchronisation with local storage
  return [state, dispatch];
}
export function useShows(key = 'shows') {
  return usePersistedReducer(showsReducer, [], key);
}
// persisted ? to get if persisted really exixt because when we read value from local storage it can be undefined or donot exist
// we use json.parse() becz when we store data inside local storage we store only
// strings an dwhen we store objects we need to convert them from string to object
