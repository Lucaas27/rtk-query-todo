const SpinnerLoader = () => {
  return (
    <div className="my-8 flex w-full flex-col items-center justify-center" role="status">
      <span
        className="h-16 w-16 animate-spin rounded-full border-4 border-solid
      border-cyan-500 border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
      ></span>
      <p className="mt-4 text-center">Loading...</p>
    </div>
  );
};
export default SpinnerLoader;
