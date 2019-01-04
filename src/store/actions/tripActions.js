export const createTrip = (trip) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('trips').add({
      ...trip,
      userID: 1,
      userName: 'Thommson',
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_TRIP', trip});
    }).catch((err) => {
      dispatch({ type: 'CREATE_TRIP_ERROR', err});
    })
  }
};
