import axios from 'axios';
import {getToken} from "./auth.js";
export const API_URL = 'http://192.168.18.6:8000/api'

export const secureApiFetch = async (url, options = {}) => {
    // Get token from localStorage (or sessionStorage)
    const token = getToken();

    // Default headers
    const defaultHeaders = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }) // Add token only if exists
    };

    // Merge custom options with defaults
    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers, // Allow overriding
        }
    };

    try {
        const response = await fetch(url, config);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("secureApiFetch error:", error);
        throw error;
    }
};
