import React, { useState } from "react";
import { createUser } from "../api/apiUser";

type Props = {
  onUserCreated: () => void;
};

const UserForm = ({ onUserCreated }: Readonly<Props>) => {
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
      await createUser({ name, surname, email });
      setName("");
      setSurname("");
      setEmail("");
      onUserCreated();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-6 rounded-2xl shadow border border-gray-200  mb-6"
    >
      <h2 className="text-xl font-semibold mb-4  text-gray-500">Create New User</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

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
          className="bg-blue-600 text-gray-500 rounded-lg py-2 px-4 hover:bg-blue-700 disabled:opacity-50 m-1"
        >
          {loading ? "Creating..." : "Add User"}
        </button>
    </form>
  );
}

export default UserForm;
