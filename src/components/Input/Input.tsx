import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Input.scss";
import Icon from "../Icon/Icon";

type InputProps = {
  labelText: string;
  hideLabel?: boolean;
  titleText?: string;
  hintText?: string;
  placeholder?: string;
  disabledAttr?: boolean;
  errorMessage?: string;
  cssModifier?: string;
  code?: boolean;
};

function Input({ labelText, hideLabel, titleText, hintText,  placeholder, disabledAttr, errorMessage, cssModifier, code }: InputProps): JSX.Element {
  const baseClassName = "input";
  const hidden = hideLabel ? " visuallyhidden" : "";
  const modifierClassName = cssModifier ? `${baseClassName}--${cssModifier}` : "";
  const classNames = classnames(baseClassName, modifierClassName);
  const html = (
    <>
      <label className={`${classNames}`}>
        <span className={`${baseClassName}__label-text ${hidden}`}>{labelText}:</span>

        {errorMessage ? <Icon name="minus-circle" /> : ""}
        <input type="text" className={`${baseClassName}__field`} placeholder={placeholder} disabled={disabledAttr} title={titleText} />

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
