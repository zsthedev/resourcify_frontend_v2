import axios from "axios";
import { server } from "../store";

export const createRoom = (formdata) => async (dispatch) => {
  dispatch({ type: "createRoomRequest" });
  try {
    let { data } = await axios.post(`${server}/room`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

    dispatch({ type: "createRoomSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "createRoomFail", payload: error.response.data.message });
  }
};

export const getAllRooms = () => async (dispatch) => {
  dispatch({ type: "getAllRoomsRequest" });
  try {
    let { data } = await axios.get(`${server}/rooms`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch({ type: "getAllRoomsSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getAllRoomsFail", payload: error.response.data.message });
  }
};

export const getRoomById = (id) => async (dispatch) => {
  dispatch({ type: "getRoomByIdRequest" });
  try {
    let { data } = await axios.get(`${server}/room/${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch({ type: "getRoomByIdSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getRoomByIdFail", payload: error.response.data.message });
  }
};

export const updateRoom = (id, formdata) => async (dispatch) => {
  dispatch({ type: "updateRoomRequest" });
  try {
    let { data } = await axios.put(`${server}/room/${id}`, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });
    dispatch({ type: "updateRoomSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "updateRoomFail", payload: error.response.data.message });
  }
};

export const deleteRoom = (id) => async (dispatch) => {
  dispatch({ type: "deleteRoomRequest" });
  try {
    await axios.delete(`${server}/room/${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch({ type: "deleteRoomSuccess" });
  } catch (error) {
    dispatch({ type: "deleteRoomFail", payload: error.response.data.message });
  }
};

export const getAllBookings = () => async (dispatch) => {
  dispatch({ type: "getAllBookingsRequest" });
  try {
    let { data } = await axios.get(`${server}/bookings`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch({ type: "getAllBookingsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllBookingsFail",
      payload: error.response.data.message,
    });
  }
};

export const changeBookingStatus = (id, status) => async (dispatch) => {
  dispatch({ type: "changeBookingStatusRequest" });
  try {
    let { data } = await axios.put(
      `${server}/booking/${id}`,
      { status },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    dispatch({ type: "changeBookingStatusSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "changeBookingStatusFail",
      payload: error.response.data.message,
    });
  }
};

export const requestBooking =
  (roomId, name, rollNo, email, startTime, endTime, purpose) =>
  async (dispatch) => {
    dispatch({ type: "requestBookingRequest" });
    try {
      let { data } = await axios.post(
        `${server}/booking`,
        { roomId, name, rollNo, email, startTime, endTime, purpose },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      dispatch({ type: "requestBookingSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "requestBookingFail",
        payload: error.response.data.message,
      });
    }
  };
