import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Input.scss";

type InputProps = {
  labelText: string;
  titleText?: string;
  hintText?: string;
  placeholder?: string;
  disabledAttr?: boolean;
  cssModifier?: string;
  code?: boolean;
};

function Input({ labelText, titleText, hintText,  placeholder, disabledAttr, cssModifier, code }: InputProps): JSX.Element {
  const baseClassName = "input";
  const modifierClassName = cssModifier ? `${baseClassName}--${cssModifier}` : "";
  const classNames = classnames(baseClassName, modifierClassName);
  const html = (
    <>
      <label className={`${classNames}`}>
        <span className={`${baseClassName}__label-text`}>{labelText}:</span>
        <input type="text" className={`${baseClassName}__field`} placeholder={placeholder} disabled={disabledAttr} title={titleText} />
        <span className={`${baseClassName}__hint`}>{hintText}</span>
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
