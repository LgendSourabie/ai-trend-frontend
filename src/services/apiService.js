import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

/**
 * Get the authentication credentials for request requiring users to be authenticated
 * @param {string} token - token of current user
 * @returns {object} Dictionary containing the Authorization and the content type
 */
function getAuthHeaders(token) {
  return {
    Authorization: `Token ${token}`,
    'Content-Type': 'application/json',
  };
}

const httpClient = axios.create({ baseURL: BASE_URL });

export default {
  /**
   * Get trend data from backend through REST API communication
   * @param {string} endpoint - Endpoint for the requested data
   * @param {object} header - header for the request containing authentication credential or/and content type
   * @returns {Promise} promise of whether the request was accepted or rejected
   */
  getTrend(endpoint, header) {
    return httpClient.get(endpoint, header);
  },

  /**
   * Post new csv file to the  backend through REST API communication
   * which will be imported to the database at a scheduled time
   * @param {string} endpoint - Endpoint to processed the file upload in the backend
   * @param {object} header - header for the request containing authentication credential or/and content type
   * @returns {Promise} promise of whether the request was accepted or rejected
   */
  postTrend(endpoint, payload, header) {
    return httpClient.post(endpoint, JSON.stringify(payload), {
      header,
    });
  },

  /**
   * Update trend through REST API communication
   * @param {string} endpoint - Endpoint to processed the file upload in the backend
   * @param {string} token - token of the user for getting the header containing authentication credential or/and content type
   * @returns {Promise} promise of whether the request was accepted or rejected
   */
  putTrend(endpoint, payload, token) {
    return httpClient.put(endpoint, JSON.stringify(payload), {
      headers: getAuthHeaders(token),
    });
  },

  /**
   * Delete trend through REST API communication
   * @param {string} endpoint - Endpoint to processed the file upload in the backend
   * @param {string} token - token of the user for getting the header containing authentication credential or/and content type
   * @returns {Promise} promise of whether the request was accepted or rejected
   */
  deleteTrend(endpoint, token) {
    return httpClient.delete(endpoint, {
      headers: getAuthHeaders(token),
    });
  },

  /**
   * Single field Update of csv file through REST API communication
   * @param {string} endpoint - Endpoint to processed the file upload in the backend
   * @param {string} token - token of the user for getting the header containing authentication credential or/and content type
   * @returns {Promise} promise of whether the request was accepted or rejected
   */
  patchTrend(endpoint, payload, token) {
    return httpClient.patch(endpoint, JSON.stringify(payload), {
      headers: getAuthHeaders(token),
    });
  },
};
