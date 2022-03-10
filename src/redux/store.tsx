import { createStore } from "redux";

const initialValues: any = {
  allData: [],
  getData: [],
  searchCount: 0,
};

const counterReducer = (state = initialValues, action: any) => {
  switch (action.type) {
    case "initialPage":
      return {
        ...state,
        allData: [...state.allData, ...action.payload],
      };

    case "search":
      const filterObjArray = state?.allData?.filter((entry: any) =>
        Object.values(entry).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(action?.payload.toLowerCase())
        )
      );

      return {
        ...state,
        getData: action.payload.length === 0 ? state.allData : filterObjArray,
        searchCount: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
