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

  /**
   *
   * @param {Object} meanTrl - mean value of each TRL in an object
   * @param {String} megatrend - current megatrend, defaul to AI
   * @param {Objet} stats - Object consisting of macrotrend as key and total records as value
   */
  countRecords(meanTrl, megatrend, stats) {
    megatrend.forEach((trend) => {
      const macrotrend = trend.macrotrend;
      const technologyReadinessLevel = trend.technology_readiness_level ? trend.technology_readiness_level.toLowerCase() : null;

      if (technologyReadinessLevel && meanTrl[technologyReadinessLevel] !== undefined) {
        if (!stats[macrotrend]) {
          stats[macrotrend] = { total: 0, count: 0 };
        }

        stats[macrotrend].total += meanTrl[technologyReadinessLevel];
        stats[macrotrend].count += 1;
      }
    });
  },

  /**
   *
   * @param {Object} stats - Object consisting of macrotrend as key and total records as value
   * @returns total number of records and the average of TRL
   */
  getStatistics(stats) {
    const macro = Object.keys(stats);
    return macro.map((macro) => {
      const group = stats[macro];
      return group.count > 0 ? parseFloat((group.total / group.count).toFixed(2)) : 0;
    });
  },
};
