import { configureStore, combineReducers, getDefaultMiddleware, ThunkAction, Action } from '@reduxjs/toolkit';
import { firebaseReducer,actionTypes, FirebaseReducer,getFirebase} from 'react-redux-firebase';
import { firestoreReducer,getFirestore } from 'redux-firestore';
import counterReducer,{CounterState} from '../features/counter/counterSlice';

interface Profile {
  name: string,
  email: string,
}

export interface QuestState {
  id: string,
  jenis: string,
  pertanyaan: string,
}


interface FirState {
  counter: CounterState,
  firebase: FirebaseReducer.Reducer<Profile>,
  firestore: any,
}

const rootReducer = combineReducers<FirState>({
  counter: counterReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    thunk: {
      extraArgument:({getFirebase,getFirestore})
    },
    serializableCheck: {
      ignoredActions: [actionTypes.LOGIN],
    }
  })
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
