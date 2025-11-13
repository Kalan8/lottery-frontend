import { ThemeToggle } from "./components/ThemeToggle";
import UserListPage from "./pages/UserListPage";

function App() {
  return (
    <main className="min-h-screen">
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <UserListPage />
    </main>
  );
}
export default App;