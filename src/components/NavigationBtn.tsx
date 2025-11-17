import { Home, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavigationBtnProps {
  goTo: string;
}

const NavigationBtn = (props: NavigationBtnProps) => {
  const navigate = useNavigate();

  let titleBtn = props.goTo === "" ? "Home" : "Lottery management";

  return (
    <button
      className="hover:bg-muted/50 p-2 border rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
      onClick={() => navigate("/" + props.goTo)}
      title={titleBtn}
    >
      {props.goTo == "" ? <Home size={20} /> : <Settings size={20} />}
    </button>
  );
};

export default NavigationBtn;
