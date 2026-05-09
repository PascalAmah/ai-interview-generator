const QuestionList = ({ questions }) => {
  if (!questions) return null;

  return (
    <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Interview Questions</h2>

      <div className="whitespace-pre-wrap text-slate-700">{questions}</div>
    </div>
  );
};

export default QuestionList;
