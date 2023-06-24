import { categoryActions } from "../slices/categorySlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// Get All Categories
export function getCategories() {
  return async (dispatch) => {
    try {
      const { data } = await request.get("/api/categories");
      dispatch(categoryActions.stateCategories(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}