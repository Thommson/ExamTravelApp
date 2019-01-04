const initState = {
  trips: [
    {id: 1, country: 'Canada', city: 'Ottawa'},
    {id: 2, country: 'Germany', city: 'Berlin'},
    {id: 3, country: 'France', city: 'Paris'}
  ]
}

const tripReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_TRIP':
      console.log('created trip', action.trip);
      return state;
    case 'CREATE_TRIP_ERROR':
      console.log('create trip error', action.err);
      return state;
    default:
      return state;
  }
  return state
}

export default tripReducer
