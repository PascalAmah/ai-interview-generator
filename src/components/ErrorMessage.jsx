const ErrorMessage = ({ message }) => {
  return (
    <div className="rounded-lg bg-red-100 px-4 py-3 text-sm text-red-700">
      {message}
    </div>
  );
};

export default ErrorMessage;
