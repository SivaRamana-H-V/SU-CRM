import { format, parseISO } from 'date-fns';

/**
 * Format a date string to a human-readable format
 * 
 * @param {string|Date} dateString - The date to format
 * @param {string} formatStr - The format string (default: 'MMM d, yyyy')
 * @returns {string} The formatted date
 */
export const formatDate = (dateString, formatStr = 'MMM d, yyyy') => {
    if (!dateString) return '';

    try {
        const date = typeof dateString === 'string' ? parseISO(dateString) : dateString;
        return format(date, formatStr);
    } catch (error) {
        console.error('Error formatting date:', error);
        return dateString?.toString() || '';
    }
};

/**
 * Format a currency value
 * 
 * @param {number} value - The value to format
 * @param {string} currency - The currency code (default: 'USD')
 * @param {string} locale - The locale (default: 'en-US')
 * @returns {string} The formatted currency
 */
export const formatCurrency = (value, currency = 'INR', locale = 'en-IN') => {
    if (value === null || value === undefined) return '';

    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
        }).format(value);
    } catch (error) {
        console.error('Error formatting currency:', error);
        return value?.toString() || '';
    }
};

/**
 * Format a number with specific decimal places
 * 
 * @param {number} value - The value to format
 * @param {number} decimals - The number of decimal places (default: 2)
 * @param {string} locale - The locale (default: 'en-US')
 * @returns {string} The formatted number
 */
export const formatNumber = (value, decimals = 2, locale = 'en-IN') => {
    if (value === null || value === undefined) return '';

    try {
        return new Intl.NumberFormat(locale, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        }).format(value);
    } catch (error) {
        console.error('Error formatting number:', error);
        return value?.toString() || '';
    }
};

/**
 * Format a percentage
 * 
 * @param {number} value - The value to format (0.1 for 10%)
 * @param {number} decimals - The number of decimal places (default: 1)
 * @param {string} locale - The locale (default: 'en-US')
 * @returns {string} The formatted percentage
 */
export const formatPercent = (value, decimals = 1, locale = 'en-IN') => {
    if (value === null || value === undefined) return '';

    try {
        return new Intl.NumberFormat(locale, {
            style: 'percent',
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        }).format(value);
    } catch (error) {
        console.error('Error formatting percentage:', error);
        return value?.toString() || '';
    }
};

/**
 * Truncate a text to a specific length
 * 
 * @param {string} text - The text to truncate
 * @param {number} length - The max length (default: 100)
 * @param {string} suffix - The suffix to add (default: '...')
 * @returns {string} The truncated text
 */
export const truncateText = (text, length = 100, suffix = '...') => {
    if (!text) return '';

    if (text.length <= length) {
        return text;
    }

    return text.substring(0, length).trim() + suffix;
}; 