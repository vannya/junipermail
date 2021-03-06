import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS, UPDATE_USER, UPDATE_SURVEY } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateUser = (updatedUser, id) => async dispatch => {
  const res = await axios.put(`/api/current_user/${id}`, updatedUser);

  dispatch({ type: UPDATE_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history, replyTo) => async dispatch => {
  values["fromfield"] = replyTo;
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const deleteSurvey = (survey, surveyId) => async dispatch => {
  const res = await axios.put(`/api/surveys/delete/${surveyId}`, survey);

  dispatch({ type: UPDATE_SURVEY, payload: res.data});
};
