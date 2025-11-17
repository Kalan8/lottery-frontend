import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PlayerForm from "../components/PlayerForm";
import { fetchPlayers, PLAYER_API } from "../api/apiPlayer";
import type { Player } from "../types/player";
import ThemeToggle from "@/components/ThemeToggle";
import NavigationBtn from "@/components/NavigationBtn";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PlayerListPage = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleFetchPlayers = () => {
    fetchPlayers()
      .then((data) => {
        setPlayers(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleFetchPlayers();
  }, []);

  const handleEdit = (player: Player) => {
    console.log("Edit player:", player);
    // TODO: open a modal or something like that
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this player?")) return;

    try {
      const res = await fetch(API_BASE_URL + PLAYER_API + `/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setPlayers(players.filter((player) => player.id !== id));
      } else {
        console.error("Failed to delete player");
      }
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  if (loading) return <p>Loading players...</p>;
  if (error) return <p className="text-red-700">{error}</p>;

  return (
    <div>
      <div className="flex flex-col fixed bottom-4 left-4 z-50">
        <NavigationBtn goTo="" />
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[880px] gap-1 rounded-xl p-1 inset-ring inset-ring-gray-950/5 dark:inset-ring dark:inset-ring-gray-50/5 m-30">
        <h1 className="text-2xl font-bold mb-6">Player Management</h1>

        <PlayerForm
          onPlayerCreated={handleFetchPlayers}
          titleForm="Create Players"
        />

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead className="w-60 text-left">Name</TableHead>
              <TableHead className="w-60 text-left">Surname</TableHead>
              <TableHead className="text-left">Email</TableHead>
              {/* TODO : Align label with buttons */}
              <TableHead className="w-34 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.id}>
                <TableCell className="text-left font-medium">
                  {player.id}
                </TableCell>
                <TableCell className="w-60 text-left">{player.name}</TableCell>
                <TableCell className="w-60 text-left">
                  {player.surname}
                </TableCell>
                <TableCell className="text-left">{player.email}</TableCell>
                <TableCell className="flex text-right justify-end">
                  <button
                    title="Edit"
                    onClick={() => handleEdit}
                    className="flex items-center m-1 gap-1 px-3 py-1 text-sm font-medium text-blue-600 border  rounded-xl transition"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    title="Delete"
                    onClick={() => handleDelete(player.id)}
                    className="flex items-center m-1 gap-1 px-3 py-1 text-sm font-medium text-red-600 border rounded-xl transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="text-left" colSpan={4}>
                Total of players
              </TableCell>
              <TableCell className="text-right">{players.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default PlayerListPage;
