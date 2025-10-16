import WeaponOverlay from "./WeaponOverlay";

interface Weapon {
  name: string;
  strength: number;
  dexterity: number;
  faith: number;
  arcane: number;
  intelligence: number;
  image: string;
  scaling: Scaling;
}

interface Scaling {
  strength: string;
  dexterity: string;
  faith: string;
  arcane: string;
  intelligence: string;
}

interface Props {
  weapon: Weapon;
}

const Weapon = ({ weapon }: Props) => {
  return (
    <div className="weaponBox">
      <div>⚔️</div>
      <div>{weapon.name}</div>
      <div className="weaponOverlay">
        <WeaponOverlay weapon={weapon} />
      </div>
    </div>
  );
};

export default Weapon;
