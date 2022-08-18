import classes from "./DropDown.module.css";
// import Select from "react-select";
const DropDown = (props) => {
  return (
    <select onChange={props.onChange}>
      <option>{props.placeholder}</option>
      {props.filter?.items?.map((item) => (
        <option value={item.value} key={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
