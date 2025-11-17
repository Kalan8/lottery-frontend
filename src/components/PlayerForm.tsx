import React, { useState } from "react";
import { createPlayer } from "../api/apiPlayer";

type Props = {
  titleForm : string;
  onPlayerCreated: () => void;
};

const PlayerForm = ({ onPlayerCreated, titleForm }: Readonly<Props>) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await createPlayer({ name, surname, email });
      setName("");
      setSurname("");
      setEmail("");
      onPlayerCreated();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 p-6 rounded-2xl shadow border border-gray-200 mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">{titleForm}</h2>

      <p className="text-red-500 mb-2">
        {error}
        <br></br>
      </p>

      <input
        type="text"
        minLength={1}
        maxLength={30}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 m-1"
        required
      />
      <input
        type="text"
        minLength={1}
        maxLength={30}
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 m-1"
        required
      />
      <input
        type="email"
        maxLength={50}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 m-1"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-gray-200 dark:bg-gray-800 hover:bg-muted/50 border rounded-lg w-24 py-2 px-4 disabled:opacity-50 m-1"
      >
        {loading ? "Creating..." : "Create"}
      </button>
    </form>
  );
}

export default PlayerForm;
