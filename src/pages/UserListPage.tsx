import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import { fetchUsers } from "../services/api";

type User = {
  id: number;
  name: string;
  surname: string;
  email: string;
};

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-gray-600">Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">User Management</h1>

    <UserForm onUserCreated={() => window.location.reload()} />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  </div>
);
}
