import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProfileState {
    profileImage?: string | null; // URL of the profile image
    firstName: string;
    lastName: string;
    email?: string;
}

const isBrowser = typeof window !== 'undefined';

const loadFromLocalStorage = (): IProfileState => {
    if (isBrowser) {
        const savedProfile = localStorage.getItem("profile");
        return savedProfile ? JSON.parse(savedProfile) : { profileImage: null, firstName: '', lastName: '', email: '' };
    }
    return { profileImage: null, firstName: '', lastName: '', email: '' }; // Default state
};

const saveProfileToLocalStorage = (state: IProfileState): void => {
    if (isBrowser) {
        localStorage.setItem("profile", JSON.stringify(state));
    }
};

const initialState: IProfileState = loadFromLocalStorage();

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfileImage: (state, action: PayloadAction<string | null>) => {
            state.profileImage = action.payload;
            saveProfileToLocalStorage(state);
        }
    }
});

export const { updateProfileImage } = profileSlice.actions;
export default profileSlice.reducer;