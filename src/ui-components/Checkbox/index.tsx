import React from "react";
import { CheckboxProps, CheckboxState } from "./interface";
import './style.css';

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  constructor(props: CheckboxProps) {
    super(props);
    this.state = {
      value: props.initialValue || false,
    }
  }

  handleCheckboxClick = () => {
    const newValue = !this.state.value;
    this.setState({value: newValue})

    this.props.onChange(newValue);
  }
  
  render() {
    const {value} = this.state
    const iconClassname = value ? "fas fa-check-square" : "far fa-square-o"
    return (
      <label className="checkbox-container" onClick={this.handleCheckboxClick}>
        <i className={`${iconClassname} checkbox-icon`} />
        <span className="checkbox-children">{this.props.children}</span>
      </label>
    )
  }
}

export default Checkbox