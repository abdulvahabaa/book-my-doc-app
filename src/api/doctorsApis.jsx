import { apiRequest } from "./apiClient";

export const getDoctors = async () => {
    try {
        const doctors = await apiRequest("/doctors");
        return doctors;
    } catch (error) {
        throw new Error(error.message || "Doctors not found");
    }
};

export const getDoctor = async (id) => {
    try {
        const doctor = await apiRequest("/doctors/" + id);
        return doctor;
    } catch (error) {
        throw new Error(error.message || "Doctor not found");
    }
};

export const updateDoctor = async (id, data) => {
    try {
        const response = await apiRequest("/doctors/" + id, "PUT", data);
        return response;
    } catch (error) {
        throw new Error(error.message || "Failed to update doctor");
    }
};

