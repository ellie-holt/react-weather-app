export const initialState = {
  weather: {
    data: null,
    loading: false,
    error: null,
  },
  forecast: {
    data: null,
    loading: false,
    error: null,
  },
  unit: "metric",
};

export function weatherReducer(state, action) {
  switch (action.type) {
    case "WEATHER/FETCH_START":
      return {
        ...state,
        weather: {
          ...state.weather,
          loading: true,
          error: null,
        },
      };
    case "WEATHER/FETCH_SUCCESS":
      return {
        ...state,
        weather: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case "WEATHER/FETCH_ERROR":
      return {
        ...state,
        weather: {
          ...state.weather,
          loading: false,
          error: action.payload,
        },
      };
    case "FORECAST/FETCH_START":
      return {
        ...state,
        forecast: {
          ...state.forecast,
          loading: true,
          error: null,
        },
      };
    case "FORECAST/FETCH_SUCCESS":
      return {
        ...state,
        forecast: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case "FORECAST/FETCH_ERROR":
      return {
        ...state,
        forecast: {
          ...state.forecast,
          loading: false,
          error: action.payload,
        },
      };
    case "UNIT/CHANGE":
      return {
        ...state,
        unit: action.payload,
      };
    default:
      return state;
  }
}
