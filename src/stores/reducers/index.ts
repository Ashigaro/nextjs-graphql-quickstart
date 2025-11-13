import mainSlice from '@/stores/reducers/mainSlice';
import themeSlice from '@/stores/reducers/themeSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	mainStore: mainSlice.reducer,
	themeStore: themeSlice.reducer,
});
export default rootReducer;
