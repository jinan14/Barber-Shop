import { create } from 'zustand';

export const useStore = create(set => ({
    barbers: [], //: An array to store barber information.
    setBarbers: (barbers) => set({ barbers }),
    addBarber: (barber) => set(state => ({ barbers: [...state.barbers, barber] })), //add a new barber to the existing array.
    reservations: [], //store reservation information.
    addReservation: (reservation) => set(state => ({ reservations: [...state.reservations, reservation] })),
}));

//The set function provided by Zustand is used to update the state. When called with an object, it merges that object with the current state. When called with a function, that function receives the current state and should return an object to merge.
