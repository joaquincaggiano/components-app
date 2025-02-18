import ThemeCard from "@/components/ui/ThemeCard";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import ThemeView from "@/components/ui/ThemeView";
import { useState } from "react";
import { Switch } from "react-native";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemeView margin className="mt-2">
      <ThemeCard>
        <ThemeSwitch
          text="Activo"
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className="mb-5"
        />

        <ThemeSwitch
          text="Hambriento"
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className="mb-5"
        />
        <ThemeSwitch
          text="Feliz"
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
        />
      </ThemeCard>
    </ThemeView>
  );
};
export default Switches;
