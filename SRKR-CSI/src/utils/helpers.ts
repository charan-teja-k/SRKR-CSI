/**
 * Format a date string to a readable format
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Truncate text to a specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Generate a slug from a string
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

/**
 * Get initials from a name
 * @param name - Full name
 * @returns Initials (max 2 characters)
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

/**
 * Filter events by year
 * @param events - Array of events
 * @param year - Year to filter by
 * @returns Filtered events
 */
export const filterEventsByYear = <T extends { year: string }>(
  events: T[],
  year: string
): T[] => {
  return events.filter((event) => event.year === year);
};

/**
 * Sort events by date (newest first)
 * @param events - Array of events
 * @returns Sorted events
 */
export const sortEventsByDate = <T extends { date: string }>(events: T[]): T[] => {
  return [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
