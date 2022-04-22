import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import { Themes } from "../../enums/Themes";
import "./RadioButton.scss";

type RadioButtonProps = {
  theme: Themes;
  size: "small" | "medium";
  labelText: string;
  hiddenLabel?: boolean;
  helperText?: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  code?: boolean;
};

function RadioButton({ theme, size, labelText, hiddenLabel, helperText, name, checked, disabled, code }: RadioButtonProps): JSX.Element {
  const baseClassName = "radio-button";
  const themeClassName = theme ? `is-${theme}` : "";
  const disabledClassName = disabled ? "radio-button--disabled" : "";
  const hidden = hiddenLabel ? " visuallyhidden" : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const classNames = classnames(baseClassName, sizeClassName, disabledClassName, themeClassName);
  const html = (
    <>
      <label className={`${classNames}`}>
        <input type="radio" name={name} className={`${baseClassName}__field`} checked={checked} disabled={disabled} />
        <div className={`${baseClassName}__content ${hidden}`}>
          {!hiddenLabel && <span className={`${baseClassName}__label`}>{labelText}</span>}
          {helperText && <span className={`${baseClassName}__helper`}>{helperText}</span>}
        </div>
      </label>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default RadioButton;
