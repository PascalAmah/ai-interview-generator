import { useState } from "react";

const JobForm = ({ onGenerate, loading }) => {
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobTitle.trim()) return;

    onGenerate(jobTitle);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-white p-6 shadow-sm">
      <label className="mb-2 block text-sm font-medium">Job Title</label>

      <input
        type="text"
        placeholder="e.g. Product Manager"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Questions"}
      </button>
    </form>
  );
};

export default JobForm;
