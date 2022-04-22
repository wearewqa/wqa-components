import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Input.scss";
import Icon from "../Icon/Icon";
import { IconSize } from "../../enums/IconSize";
import { Themes } from "../../enums/Themes";

type InputProps = {
  theme: Themes;
  labelText: string;
  hideLabel?: boolean;
  name: string;
  value?: string;
  hintText?: string;
  placeholder?: string;
  disabledAttr?: boolean;
  errorMessage?: string;
  cssModifier?: string;
  code?: boolean;
};

function Input({ theme, labelText, hideLabel, name, value, hintText, placeholder, disabledAttr, errorMessage, cssModifier, code }: InputProps): JSX.Element {
  const baseClassName = "input";
  const themeClassName = theme ? `is-${theme}` : "";
  const hidden = hideLabel ? " visuallyhidden" : "";
  const modifierClassName = cssModifier ? `${baseClassName}--${cssModifier}` : "";
  const classNames = classnames(baseClassName, modifierClassName, themeClassName);
  const html = (
    <>
      <label className={`${classNames}`}>
        <span className={`${baseClassName}__label ${hidden}`}>{labelText}:</span>

        <span className={`${baseClassName}__field-wrap`}>
          {errorMessage ? <Icon name="alert-circle" className={`${baseClassName}__icon`} size={IconSize.xsmall} /> : ""}
          <input type="text" className={`${baseClassName}__field`} placeholder={placeholder} disabled={disabledAttr} name={name} value={value} />
        </span>
        {hintText ? <span className={`${baseClassName}__hint`}>{hintText}</span> : ""}
        {errorMessage ? <span className={`${baseClassName}__hint`}>{errorMessage}</span> : ""}
      </label>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default Input;
