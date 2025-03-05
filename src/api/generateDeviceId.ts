// import { Fetch } from "@/utils/axios";
import { Get } from "./generalApi";

/**
 * Generates a unique device ID.
 * @async
 * @throws Will throw an error if the API request fails.
 * @returns {Promise<string>} The generated device ID.
 */
export const generateDeviceId = async (): Promise<string> => {
  try {
    const url = `api/DeviceID?app=Worksafe`;
    const response: any = await Get(url);
    // const response: any = await Fetch(url, {}, 5000, true, false);
    if (response.status) return response.deviceID;
    else return "";
  } catch (error: any) {
    console.log("Error generating device ID:", error.message);
    throw new Error("Failed to generate device ID.");
  }
};

const getPlatform = (): string => {
  const userAgent = navigator.userAgent;
  if (/Windows NT/.test(userAgent)) {
    return "Windows";
  } else if (/Macintosh/.test(userAgent)) {
    return "Mac";
  } else if (/Linux/.test(userAgent)) {
    return "Linux";
  } else if (/Android/.test(userAgent)) {
    return "Android";
  } else if (/iPhone|iPad|iPod/.test(userAgent)) {
    return "iOS";
  }
  return "Unknown";
};

export const storeDeviceData = async () => {
  try {
    const deviceId = await generateDeviceId();
    if (deviceId) {
      const deviceData = {
        deviceId: deviceId, // Unique device ID
        platform: getPlatform(), // Platform (e.g., Windows, Mac)
        deviceType: navigator.userAgent, // User agent (browser's type and version)
        timestamp: new Date().toISOString(), // Current timestamp
        screenResolution: `${window.innerWidth}x${window.innerHeight}`, // Screen resolution
      };
      localStorage.setItem("deviceData", JSON.stringify(deviceData));
    }
    return true;
  } catch (error) {
    console.log("Store DeviceData failed: " + error);
    return false;
  }
};

export const getDeviceData = (): any => {
  const storedData = localStorage.getItem("deviceData");
  if (storedData) return JSON.parse(storedData);
  return null;
};

export const updateDeviceData = (newData: Partial<any>) => {
  const existingData = getDeviceData();
  if (existingData) {
    const updatedData = { ...existingData, ...newData };
    localStorage.setItem("deviceData", JSON.stringify(updatedData));
  }
};

export const getDeviceCheck = () => {
  let deviceId: any = "";
  const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
  if (!token) {
    deviceId = getDeviceData();
    deviceId = deviceId?.deviceId;
  } else deviceId = "";

  return deviceId;
};

export const isTokenExist = () => {
  const token =
    typeof window !== "undefined" &&
    localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
  if (token) return true;
  else return null;
};
