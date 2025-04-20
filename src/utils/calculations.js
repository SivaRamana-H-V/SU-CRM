/**
 * Calculate percentage change between two values
 * 
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {number} Percentage change
 */
export const calculatePercentChange = (current, previous) => {
  if (previous === 0) {
    return current > 0 ? 100 : 0;
  }
  
  return ((current - previous) / Math.abs(previous)) * 100;
};

/**
 * Calculate average from an array of numbers
 * 
 * @param {Array<number>} values - Array of numbers
 * @returns {number} Average value
 */
export const calculateAverage = (values) => {
  if (!values || values.length === 0) return 0;
  
  const sum = values.reduce((acc, val) => acc + (val || 0), 0);
  return sum / values.length;
};

/**
 * Calculate median from an array of numbers
 * 
 * @param {Array<number>} values - Array of numbers
 * @returns {number} Median value
 */
export const calculateMedian = (values) => {
  if (!values || values.length === 0) return 0;
  
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
};

/**
 * Calculate growth rate over a period
 * 
 * @param {number} initial - Initial value
 * @param {number} final - Final value
 * @param {number} periods - Number of periods
 * @returns {number} Growth rate as decimal (0.1 = 10%)
 */
export const calculateGrowthRate = (initial, final, periods = 1) => {
  if (initial === 0) return 0;
  if (periods === 0) return 0;
  
  return Math.pow(final / initial, 1 / periods) - 1;
};

/**
 * Calculate compound annual growth rate (CAGR)
 * 
 * @param {number} initialValue - Initial value
 * @param {number} finalValue - Final value
 * @param {number} years - Number of years
 * @returns {number} CAGR as decimal (0.1 = 10%)
 */
export const calculateCAGR = (initialValue, finalValue, years) => {
  return calculateGrowthRate(initialValue, finalValue, years);
};

/**
 * Calculate return on investment (ROI)
 * 
 * @param {number} cost - Initial investment
 * @param {number} value - Current value or return
 * @returns {number} ROI as decimal (0.1 = 10%)
 */
export const calculateROI = (cost, value) => {
  if (cost === 0) return 0;
  
  return (value - cost) / cost;
};

/**
 * Calculate weighted average
 * 
 * @param {Array<{value: number, weight: number}>} items - Array of items with value and weight
 * @returns {number} Weighted average
 */
export const calculateWeightedAverage = (items) => {
  if (!items || items.length === 0) return 0;
  
  const totalWeight = items.reduce((acc, item) => acc + (item.weight || 0), 0);
  
  if (totalWeight === 0) return 0;
  
  const sum = items.reduce((acc, item) => {
    return acc + (item.value || 0) * (item.weight || 0);
  }, 0);
  
  return sum / totalWeight;
}; 