interface Props {
  weapon: Weapon;
}

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

const WeaponOverlay = ({ weapon }: Props) => {
  return (
    <>
      <div>Strength: {weapon.scaling.strength}</div>
      <div>Dexterity: {weapon.scaling.dexterity}</div>
      <div>Faith: {weapon.scaling.faith}</div>
      <div>Arcane: {weapon.scaling.arcane}</div>
      <div>Intelligence: {weapon.scaling.intelligence}</div>
    </>
  );
};

export default WeaponOverlay;
