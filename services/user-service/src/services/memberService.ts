// /services/user-service/src/services/memberService.ts
import axios from "axios";

export const fetchUserProfile = async (memberId: string) => {
  try {
    // Call the Auth Service API endpoint to fetch the member profile
    const response = await axios.get(`http://localhost:5000/api/auth/profile/${memberId}`);
    // Return the user data from the Auth Service
    return response.data.user;
  } catch (error: any) {
    console.error("Error fetching member profile:", error.message);
    throw new Error("Failed to fetch member profile from Auth Service");
  }
};

export const updateUserProfile = async (memberId: string, data: any) => {
  try {
    // Call the Auth Service API endpoint to update the member profile
    const response = await axios.put(`http://localhost:5001/api/auth/profile/${memberId}`, data);
    // Return the updated user data from the Auth Service
    return response.data.user;
  } catch (error: any) {
    console.error("Error updating member profile:", error.message);
    throw new Error("Failed to update member profile in Auth Service");
  }
};
