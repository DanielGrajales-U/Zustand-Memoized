import { create } from "zustand";

const initialUser = ''

export const userStore = create ((set) => ({
    user: initialUser,
    newUser: (newUser) => set({user: newUser}),
    resetUser: () => set({user: initialUser})
}))