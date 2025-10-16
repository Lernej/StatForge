import weapons from "./weapons.json";
import Weapon from "./Weapon";

interface Props {
  strength: number;
  dexterity: number;
  faith: number;
  arcane: number;
  intelligence: number;
}

const WeaponsList = ({
  strength,
  dexterity,
  faith,
  arcane,
  intelligence,
}: Props) => {
  const usableWeapons = weapons.filter(
    (weapon) =>
      strength >= weapon.strength &&
      dexterity >= weapon.dexterity &&
      faith >= weapon.faith &&
      arcane >= weapon.arcane &&
      intelligence >= weapon.intelligence
  );

  return (
    <div className="weaponsList">
      {usableWeapons.length > 0 ? (
        usableWeapons.map((weapon) => (
          <Weapon key={weapon.name} weapon={weapon} />
        ))
      ) : (
        <div>You currently cannot use any remembrance boss weapons.</div>
      )}
    </div>
  );
};

export default WeaponsList;
