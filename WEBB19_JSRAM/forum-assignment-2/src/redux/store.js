import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import Reducer from "redux/reducers";

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["authentication", "posts", "categories", "countries"],
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
