import React from "react";
//import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import { Themes } from "../../enums/Themes";
import "./Button.scss";
import "../themes.scss";

interface Props {
  theme: Themes;
  //   type: "primary" | "secondary" | "tertiary"; // | "tertiary-gray" | "secondary-gray";
  size: "small" | "medium" | "large" | "xlarge" | "xxlarge";
  href?: string;
  icon?: boolean;
  iconReverse?: boolean;
  fullWidth?: boolean;
  groupItem?: boolean;
  children: React.ReactNode;
  code?: boolean;
}

const Button = ({ /* type,*/ size, theme, href, icon, iconReverse, fullWidth, groupItem, children, code }: Props) => {
  const baseClassName = "button";
  //   const typeClassName = type ? `${baseClassName}--${type}` : "";
  const themeClassName = theme ? `is-${theme}` : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const iconClassName = icon ? `${baseClassName}--icon` : "";
  const iconReverseClassName = iconReverse ? `${baseClassName}--rev` : "";
  const fullWidthClassName = fullWidth ? `${baseClassName}--full` : "";
  const groupItemClassName = groupItem ? "button-group__item" : "";
  const link = href ? href : "#";
  const classNames = classnames(groupItemClassName, baseClassName, /*typeClassName,*/ sizeClassName, iconClassName, iconReverseClassName, fullWidthClassName, themeClassName);
  const html = (
    <>
      {/* <a href={link} className={`${classNames}`}>
        {children}
      </a> */}

      <h2>Buttons</h2>
      <div className="button-group">
        <a href={link} className={`${classNames}` + " button-group__item button--primary"}>
          Primary button
        </a>
        <a href={link} className={`${classNames}` + " button-group__item button--secondary"}>
          Secondary button
        </a>
        <a href={link} className={`${classNames}` + " button-group__item button--tertiary"}>
          Tertiary button
        </a>
      </div>
      <br />
      <h2>Disabled buttons</h2>
      <div className="button-group">
        <button type="button" className={`${classNames}` + " button-group__item button--primary is-disabled"}>
          Primary button
        </button>
        <button type="button" className={`${classNames}` + " button-group__item button--secondary is-disabled"}>
          Secondary button
        </button>
        <button type="button" className={`${classNames}` + " button-group__item button--tertiary is-disabled"}>
          Tertiary button
        </button>
      </div>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
};

export default Button;
