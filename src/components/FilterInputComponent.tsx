import { ChangeEventHandler, MouseEventHandler } from "react";
import { instructions, titles } from "../constants";

interface FilterInputComponentProps {
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  handleOnClick: MouseEventHandler<HTMLButtonElement>;
  value: string;
}

const FilterInputComponent = ({
  handleOnChange,
  handleOnClick,
  value,
}: FilterInputComponentProps) => (
  <div>
    <div className="over-background">
      <br></br>
      <h1>{titles.filterResults}</h1>
      <br></br>
    </div>
    <input
      type="text"
      name="filterTerm"
      style={{ width: "280px" }}
      onChange={handleOnChange}
      placeholder={instructions.typeFilterInput}
      value={value}
    />
    <button onClick={handleOnClick}>Clear Search</button>
    <br></br>
    <br />
  </div>
);

export default FilterInputComponent;
