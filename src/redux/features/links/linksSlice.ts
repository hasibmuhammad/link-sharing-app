import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILink {
    id: number;
    link: string;
    selectedItem: number;
    isDropdownOpen: boolean;
    url: string;
}

interface ILinksState {
    links: ILink[];
    nextId: number;
}

// Helper function to check if we're running in the browser
const isBrowser = typeof window !== 'undefined';

const loadFromLocalStorage = (): ILinksState => {
    if (isBrowser) {
        const savedLinks = localStorage?.getItem("links");
        return savedLinks ? JSON.parse(savedLinks) : { links: [], nextId: 1 };
    }
    return { links: [], nextId: 1 }; // Return default state if not in the browser
};

const saveLinksToLocalStorage = (state: ILinksState): void => {
    if (isBrowser) {
        localStorage.setItem("links", JSON.stringify(state));
    }
};

const initialState: ILinksState = loadFromLocalStorage();

const linksSlice = createSlice({
    name: "links",
    initialState,
    reducers: {
        addLink: (state) => {
            const newLink: ILink = {
                id: state.nextId,
                link: `Link #${state.nextId}`,
                selectedItem: 1,
                isDropdownOpen: false,
                url: ""
            };

            state.links.push(newLink);
            state.nextId++;
            saveLinksToLocalStorage(state);
        },

        removeLink: (state, action: PayloadAction<number>) => {
            state.links = state.links.filter(link => {
                return link.id !== action.payload
            }
            );
            saveLinksToLocalStorage(state);
        },

        toggleDropDownRedux: (state, action: PayloadAction<number>) => {
            state.links = state.links.map(link => {
                return link.id === action.payload ? { ...link, isDropdownOpen: !link.isDropdownOpen } : link
            }
            );
        },

        handlePlatformSelectRedux: (state, action: PayloadAction<{ id: number; selectedItem: number }>) => {
            state.links = state.links.map(link => {
                return link.id === action.payload.id
                    ? { ...link, selectedItem: action.payload.selectedItem, isDropdownOpen: false }
                    : link
            });
        },

        updateLink: (state, action: PayloadAction<{ id: number; newLink: string }>) => {
            const { id, newLink } = action.payload;
            const link = state.links.find(link => {
                return link.id === id
            });

            if (link) {
                link.url = newLink; // Update the URL directly
                saveLinksToLocalStorage(state);
            }
        },

        update: (state) => {
            saveLinksToLocalStorage(state);
        }
    }
});

export const { addLink, removeLink, toggleDropDownRedux, handlePlatformSelectRedux, updateLink, update } = linksSlice.actions;
export default linksSlice.reducer;
