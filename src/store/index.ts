
// Redux store setup for future implementation
import { configureStore } from '@reduxjs/toolkit';

// Placeholder slices - to be implemented
const initialState = {
  theme: {
    current: 'system' as 'light' | 'dark' | 'system',
    resolved: 'light' as 'light' | 'dark'
  },
  language: {
    current: 'es' as 'es' | 'en'
  },
  menu: {
    products: [],
    categories: [],
    searchTerm: '',
    selectedCategory: '',
    loading: false
  },
  ui: {
    isMenuOpen: false,
    isModalOpen: false,
    selectedProduct: null
  }
};

// Placeholder reducer
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
