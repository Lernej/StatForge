import StatInput from "./StatInput";
import WeaponsList from "./WeaponsList";

import { useState } from "react";

const StatInputGroup = () => {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [faith, setFaith] = useState(0);
  const [arcane, setArcane] = useState(0);
  const [intelligence, setIntelligence] = useState(0);

  return (
    <>
      <StatInput stat="Strength" value={strength} setValue={setStrength} />
      <StatInput stat="Dexterity" value={dexterity} setValue={setDexterity} />
      <StatInput stat="Faith" value={faith} setValue={setFaith} />
      <StatInput stat="Arcane" value={arcane} setValue={setArcane} />
      <StatInput
        stat="Intelligence"
        value={intelligence}
        setValue={setIntelligence}
      />
      <WeaponsList
        strength={strength}
        dexterity={dexterity}
        faith={faith}
        arcane={arcane}
        intelligence={intelligence}
      />
    </>
  );
};

export default StatInputGroup;
