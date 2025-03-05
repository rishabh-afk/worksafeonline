import { Fetch, Post } from "@/utils/axios";
import { getDeviceData } from "./generateDeviceId";

export interface Product {
  ID?: string;
  Quantity?: number;
  Size_Sequence_No?: number;
  Colour_Sequence_No?: number;
  Fitting_Sequence_No?: number;
}

/**
 * Adds a product to the cart.
 * @async
 * @param {Product} product - The product details to add to the cart.
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The response from the API.
 */
export const addToCart = async (product: any): Promise<any> => {
  try {
    const response = await Post(`api/AddToCart12`, product);
    return response;
  } catch (error: any) {
    console.log("Error adding product to cart:", error.message);
    throw new Error("Failed to add product to the cart.");
  }
};

/**
 * Removes a product from the cart.
 * @async
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The response from the API.
 */
export const removeProduct = async (data: any): Promise<any> => {
  try {
    const response = await Post(`api/RemoveProduct`, data);
    return response;
  } catch (error: any) {
    console.log("Error removing product from cart:", error.message);
    throw new Error("Failed to remove product from the cart.");
  }
};

/**
 * Updates the quantity of a product in the cart.
 * @async
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The response from the API.
 */
export const updateQuantity = async (data: any): Promise<any> => {
  try {
    const response = await Post(`api/CartQtyCh`, data, 5000, true);
    return response;
  } catch (error: any) {
    console.log("Error updating product quantity:", error.message);
    throw new Error("Failed to update product quantity in the cart.");
  }
};

/**
 * Retrieves the details of the cart.
 * @async
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The cart details from the API.
 */
export const getCartDetails = async (): Promise<any> => {
  try {
    const deviceData = getDeviceData();
    const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
    if (!deviceData?.deviceId && !token) return;

    const param: any = { DeviceID: "" };
    if (deviceData?.deviceId) param.DeviceID = deviceData?.deviceId;
    const response = await Fetch("api/Cart", param, 5000, true, false);
    return response;
  } catch (error: any) {
    console.log("Error fetching cart details:", error.message);
    throw new Error("Failed to fetch cart details.");
  }
};
