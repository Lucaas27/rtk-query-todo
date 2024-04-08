import { useState } from 'react';

/**
 * A custom hook for handling client side pagination.
 *
 * @param {T[]} totalItems - The array of items to paginate
 * @param {number} initialPageSize - The initial page size (default: 6)
 * @return {{ currentPage: number, pageSize: number, totalPages: number, nextPage: () => void, prevPage: () => void, firstPage: () => void, lastPage: () => void, changePageSize: (size: number) => void, goToPage: (page: number) => void, generatePaginatedItems: () => T[] }} An object containing current page, page size, total pages, and functions for pagination control
 */

const usePagination = <T>(totalItems: T[], initialPageSize = 6) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const totalPages = Math.ceil(totalItems.length / initialPageSize);

  /**
   * A function that sets the current page to the next page.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  /**
   * A function that sets the current page to the previous page.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /**
   * A function that sets the current page to the first page.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  const firstPage = () => {
    setCurrentPage(1);
  };

  /**
   * A function that sets the current page to the last page.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  const lastPage = () => {
    setCurrentPage(totalPages);
  };

  /**
   * A function that navigates to the specified page if it is within the valid range.
   *
   * @param {number} page - the page number to navigate to
   * @return {void}
   */
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  /**
   * Change the page size and reset to the first page.
   *
   * @param {number} size - The new page size
   * @return {void}
   */
  const changePageSize = (size: number) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  /**
   * A function that generates paginated items.
   *
   * @return {T[]} the paginated items
   */
  const generatePaginatedItems = (): T[] => {
    return totalItems.slice(indexOfFirstItem, indexOfLastItem);
  };

  return {
    currentPage,
    pageSize,
    totalPages,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    changePageSize,
    goToPage,
    generatePaginatedItems,
  };
};

export default usePagination;
