interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  nextPage: () => void;
  prevPage: () => void;
  firstPage: () => void;
  lastPage: () => void;
  changePageSize: (size: number) => void;
  goToPage: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  pageSize,
  nextPage,
  prevPage,
  firstPage,
  lastPage,
  changePageSize,
  goToPage,
}: PaginationProps) => {
  // Generate options for the select element dynamically based on the total number of pages
  const pageOptions = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="m-8">
      <div className="flex flex-row items-center justify-center gap-2">
        <div>
          <label htmlFor="pageSize" className="sr-only">
            Page Size
          </label>
          <select
            value={pageSize}
            onChange={(e) => changePageSize(Number(e.target.value))}
            id="pageSize"
            className="w-sm hidden h-9 rounded-lg border bg-none text-sm
            font-medium shadow-sm transition duration-75 focus:border-cyan-500 focus:ring-1
            focus:ring-inset focus:ring-cyan-500 md:block"
          >
            <option value="6"></option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="20">30</option>
            <option value="20">40</option>
            <option value="20">50</option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-1 md:gap-4">
          <button
            onClick={() => firstPage()}
            type="button"
            disabled={currentPage === 1}
            className="rounded-xl bg-white p-2 disabled:bg-gray-200 disabled:text-slate-300 "
          >
            First
          </button>
          <button
            onClick={() => prevPage()}
            type="button"
            disabled={currentPage === 1}
            className="rounded-xl bg-white p-2 disabled:bg-gray-200 disabled:text-slate-300 "
          >
            Prev
          </button>
        </div>

        <div className="flex items-center justify-center gap-1">
          <label htmlFor="currentPage">Page</label>
          <select
            id="currentPage"
            value={currentPage}
            onChange={(e) => goToPage(Number(e.target.value))}
            className="w-sm h-9 rounded-lg border bg-none text-sm
            font-medium shadow-sm transition duration-75 focus:border-cyan-500 focus:ring-1
            focus:ring-inset focus:ring-cyan-500 "
          >
            {pageOptions.map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
          <span className="hidden md:flex"> of {totalPages}</span>
        </div>
        <div className="flex items-center justify-center gap-1 md:gap-4">
          <button
            onClick={() => nextPage()}
            type="button"
            className="rounded-xl bg-white p-2 disabled:bg-gray-200 disabled:text-slate-300"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <button
            onClick={() => lastPage()}
            className="rounded-xl bg-white p-2 disabled:bg-gray-200 disabled:text-slate-300"
            type="button"
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </div>
      </div>
    </section>
  );
};
export default Pagination;
