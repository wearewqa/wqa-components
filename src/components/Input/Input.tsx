import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Input.scss";

type InputProps = {
  color?: "primary" | "secondary" | "tertiary";
  labelText: string;
  titleText?: string;
  nameText?: string;
  placeholder?: string;
  disabledAttr?: boolean;
  code?: boolean;
};

function Input({ color, labelText, titleText, nameText, placeholder, disabledAttr, code }: InputProps): JSX.Element {
  const baseClassName = "input";
  titleText = "Search";
  nameText = "search";
  disabledAttr = disabledAttr ? true : false;
  const colorClassName = color ? `${baseClassName}--${color}` : "";
  const classNames = classnames(baseClassName, colorClassName);
  const html = (
    <>
      <label className={`${classNames}`}>
        {labelText}:
        <input type="text" className={`${baseClassName}__field` + ""} name={nameText} title={titleText} placeholder={placeholder} disabled={disabledAttr} />
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
