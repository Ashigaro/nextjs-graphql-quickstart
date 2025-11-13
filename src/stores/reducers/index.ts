import { combineReducers } from '@reduxjs/toolkit';
import mainSlice from '@/stores/reducers/mainSlice';
import themeSlice from '@/stores/reducers/themeSlice';

const rootReducer = combineReducers({
	mainStore: mainSlice.reducer,
	themeStore: themeSlice.reducer,
});
export default rootReducer;
