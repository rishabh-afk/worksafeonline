import { Fetch, Post } from "@/utils/axios";

/**
 * Retrieves the wishlist details for a specific device ID.
 * @async
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The wishlist details from the API.
 */
export const getWishlist = async (): Promise<any> => {
  try {
    const response = await Fetch(`api/ViewWishlist`, {}, 5000, true, false);
    return response;
  } catch (error: any) {
    console.log("Error fetching wishlist details:", error.message);
    throw new Error("Failed to fetch wishlist details.");
  }
};

/**
 * Adds an item to the wishlist.
 * @async
 * @param {any} productId - The data of the item to be added to the wishlist.
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The response from the API after adding the item.
 */
export const addToWishlist = async (productId: any): Promise<any> => {
  try {
    const url = `api/Wishlist?product_id=${productId}`;
    const response = await Fetch(url, {}, 5000, true);
    return response;
  } catch (error: any) {
    console.log("Error adding item to wishlist:", error.message);
    throw new Error("Failed to add item to wishlist.");
  }
};

/**
 * Removes an item from the wishlist.
 * @async
 * @param {string} productId - The ID of the item to be removed from the wishlist.
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<any>} The response from the API after removing the item.
 */
export const removeFromWishlist = async (productId: string): Promise<any> => {
  try {
    const data = { product_id: productId };
    const response = await Post(`api/RemoveWishlist`, data, 5000, true);
    return response;
  } catch (error: any) {
    console.log("Error removing item from wishlist:", error.message);
    throw new Error("Failed to remove item from wishlist.");
  }
};
