import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import UserForm from "../components/UserForm";
import { fetchUsers } from "../api/apiUser";
import type { User } from "../types/user";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const UserListPage= () => {
const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Later: Change to async await   
  const handleFetchUsers = () => {
    fetchUsers()
    .then((data) => {
      setUsers(data)
    })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    handleFetchUsers();
  }, []);

  const handleEdit = (user: User) => {
    console.log("Edit user:", user);
    // Later: open a modal or something like that
  };


    const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch(API_BASE_URL + `/api/users/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setUsers(users.filter((user) => user.id !== id));
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) return <p className= "text-gray-500">Loading users...</p>;
  if (error) return <p className="text-red-700">{error}</p>;

  return (
    <div className="flex flex-col gap-1 rounded-xl p-1 inset-ring inset-ring-gray-950/5 m-30">
      <h1 className="text-2xl font-bold mb-6 text-gray-500">User Management</h1>
      
      <UserForm onUserCreated={handleFetchUsers} />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-500 w-[100px]">ID</TableHead>
            <TableHead className="text-gray-500 w-60 text-left">Name</TableHead>
            <TableHead className="text-gray-500 w-60 text-left">Surname</TableHead>
            <TableHead className="text-gray-500 text-left">Email</TableHead>
            <TableHead className="text-gray-500 w-34 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="text-left font-medium">{user.id}</TableCell>
              <TableCell className="w-60 text-left">{user.name}</TableCell>
              <TableCell className="w-60 text-left">{user.surname}</TableCell>
              <TableCell className="text-left">{user.email}</TableCell>
              <TableCell className="flex text-right justify-end">
                <button
                  title="Edit"
                  onClick={() => handleEdit}
                  className="flex items-center m-1 gap-1 px-3 py-1 text-sm font-medium text-blue-600 border border-blue-300 rounded-xl hover:bg-blue-50 transition">
                  <Pencil size={16} />
                </button>
                <button
                  title="Delete"
                  onClick={() => handleDelete(user.id)}
                  className="flex items-center m-1 gap-1 px-3 py-1 text-sm font-medium text-red-600 border border-red-300 rounded-xl hover:bg-red-50 transition">
                  <Trash2 size={16} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="text-gray-500 text-left" colSpan={4}>Total of users</TableCell>
            <TableCell className="text-gray-500 text-right">{users.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
};

export default UserListPage;