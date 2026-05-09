import { useState } from "react";
import JobForm from "./components/JobForm";
import Loader from "./components/Loader";
import QuestionList from "./components/QuestionList";
import ErrorMessage from "./components/ErrorMessage";
import { generateQuestions } from "./services/gemini";

function App() {
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async (jobTitle) => {
    try {
      setLoading(true);
      setError("");
      setQuestions("");

      const result = await generateQuestions(jobTitle);

      setQuestions(result);
    } catch (err) {
      setError("Something went wrong. Please try again.", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">
            AI Interview Question Generator
          </h1>

          <p className="mt-3 text-slate-600">
            Generate thoughtful interview questions for any role.
          </p>
        </div>

        <JobForm onGenerate={handleGenerate} loading={loading} />

        {loading && <Loader />}

        {error && (
          <div className="mt-6">
            <ErrorMessage message={error} />
          </div>
        )}

        <QuestionList questions={questions} />
      </div>
    </main>
  );
}

export default App;
