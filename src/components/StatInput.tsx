interface Props {
  stat: string;
  value: number;
  setValue: (val: number) => void;
}

const StatInput = ({ stat, value, setValue }: Props) => {
  return (
    <>
      <div className="statBox">
        <div className="statLabel">{stat}</div>
        <input
          value={value}
          onChange={(e) => {
            const val = Number(e.target.value);

            setValue(isNaN(val) ? value : val);
          }}
        ></input>
      </div>
    </>
  );
};

export default StatInput;
