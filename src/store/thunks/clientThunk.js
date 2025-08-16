import axiosInstance from "../../api/axiosInstance";
import * as clientActions from "../actions/clientActions";

let rolesInFlight = false;

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const currentRoles = getState().client.roles;
    if (Array.isArray(currentRoles) && currentRoles.length > 0) return;
    if (rolesInFlight) return;

    rolesInFlight = true;
    try {
      const res = await axiosInstance.get("/roles");
      const roles = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data?.roles)
        ? res.data.roles
        : [];

      dispatch(clientActions.setRoles(roles));
    } catch (err) {
      console.error("fetchRolesIfNeeded failed:", err);

    } finally {
      rolesInFlight = false;
    }
  };
};
