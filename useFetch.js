import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  API_REQUEST: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function reducer(state, { type, payload }) {
  console.log(payload);
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: payload.data, loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], error: payload };
    default:
      return state;
  }
}

function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchdata = async () => {
    const result = await fetch(url);
    const res = await result.json();
    dispatch({ type: ACTIONS.FETCH_DATA, payload: res });
  }
  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    fetchdata();
  }, [url]);
  return state;
}

export default useFetch;