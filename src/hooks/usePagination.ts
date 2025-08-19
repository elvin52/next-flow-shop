import { useMemo } from 'react';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

export const usePagination = ({ totalItems, itemsPerPage, currentPage }: UsePaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  }, [currentPage, itemsPerPage]);

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return {
    totalPages,
    hasPreviousPage,
    hasNextPage,
    startIndex: paginatedData.startIndex,
    endIndex: paginatedData.endIndex,
  };
};