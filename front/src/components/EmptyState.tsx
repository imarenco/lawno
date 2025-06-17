export const EmptyState: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-full text-center text-gray-400 px-4 py-8 ${
        isLoading ? "min-h-84" : ""
      }`}
    >
      <p className="text-base font-semibold">{isLoading ? "Searching..." : "There are zero matches."}</p>

      {!isLoading && (
        <p className="text-sm">Use the form to search for People or Movies.</p>
      )}
    </div>
  );
};
