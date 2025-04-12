export default {
  /**
   * Set header of requests which doesn't require any authentication
   * @returns {object} Dictionary containing the content type
   */
  setUnAuthHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  },

  /**
   * Check if the current user is authenticated or not
   * @returns {boolean} - true if the user is authenticated and false if not
   */
  isAuthenticated() {
    const token = sessionStorage.getItem('token');
    return !!token;
  },

  /**
   * Get the token of the current user from the session storage
   * @returns {string} - Token of the user
   */
  getToken() {
    return sessionStorage.getItem('token');
  },
};
