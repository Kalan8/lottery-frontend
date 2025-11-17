import PlayerForm from "@/components/PlayerForm";
import ThemeToggle from "@/components/ThemeToggle";
import NavigationBtn from "@/components/NavigationBtn";

const congratulateRegistration = () => {
  confirm("Well done! \nThank you for your registration");
};

const PlayerRegistrationPage = () => {
  return (
    <div>
      <div className="flex flex-col fixed bottom-4 left-4 z-50">
        <NavigationBtn goTo="management" />
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[880px] gap-1 rounded-xl p-1 inset-ring inset-ring-gray-950/5 dark:inset-ring dark:inset-ring-gray-50/5 m-30">
        <h1 className="text-2xl font-bold mb-6">Lottery</h1>

        <PlayerForm
          onPlayerCreated={congratulateRegistration}
          titleForm="Register now and win !"
        />
      </div>
    </div>
  );
};

export default PlayerRegistrationPage;
