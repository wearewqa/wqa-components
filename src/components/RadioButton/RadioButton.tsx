import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./RadioButton.scss";

type RadioButtonProps = {
  size: "small" | "medium";
  labelText: string;
  hiddenLabel?: boolean;
  helperText?: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  code?: boolean;
};

function RadioButton({ size, labelText, hiddenLabel, helperText, name, checked, disabled, code }: RadioButtonProps): JSX.Element {
  const baseClassName = "radio-button";
  const disabledClassName = disabled ? "radio-button--disabled" : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  // const disabledAttr = disabled ? "disabled" : "";
  // const checkedAttr = checked ? "checked" : "";
  const classNames = classnames(baseClassName, sizeClassName, disabledClassName);
  const html = (
    <>
      <label className={`${classNames}`}>
        <input type="radio" name={name} className={`${baseClassName}__field`} />
        {/*{disabledAttr} {checkedAttr}*/}
        {!hiddenLabel && (
          <div className={`${baseClassName}__content`}>
            {!hiddenLabel && <span className={`${baseClassName}__label`}>{labelText}</span>}
            {helperText && <span className={`${baseClassName}__helper`}>{helperText}</span>}
          </div>
        )}
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
