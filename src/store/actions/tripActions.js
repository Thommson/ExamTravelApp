export const createTrip = (trip) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('trips').add({
      ...trip,
      authorId: authorId,
      username: profile.username,
      createdAt: new Date(),
      likes: 0,
      pins: 0
    }).then(() => {
      dispatch({ type: 'CREATE_TRIP', trip});
    }).catch((err) => {
      dispatch({ type: 'CREATE_TRIP_ERROR', err});
    })
  }
};
