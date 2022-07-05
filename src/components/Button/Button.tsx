import React from "react";
//import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import { Attributes } from "react";
import { Theme } from "../../enums/Theme";
import "./Button.scss";
import "../themes.scss";

export interface Props {
  theme?: Theme;
  type: "primary" | "secondary" | "tertiary"; // | "tertiary-gray" | "secondary-gray";
  size: "small" | "medium" | "large" | "xlarge" | "xxlarge";
  disabled?: boolean;
  href?: string;
  icon?: boolean;
  iconReverse?: boolean;
  fullWidth?: boolean;
  groupItem?: boolean;
  children: React.ReactNode;
  code?: boolean;
}

const Button = ({ theme = Theme.Default, type, size, disabled, href, icon, iconReverse, fullWidth, groupItem, children, code }: Props) => {
  const baseClassName = "button";
  const themeClassName = theme ? `is-${theme}` : "";
  const typeClassName = type ? `${baseClassName}--${type}` : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const disabledClassName = disabled ? "is-disabled" : "";
  const iconClassName = icon ? `${baseClassName}--icon` : "";
  const iconReverseClassName = iconReverse ? `${baseClassName}--rev` : "";
  const fullWidthClassName = fullWidth ? `${baseClassName}--full` : "";
  const groupItemClassName = groupItem ? "button-group__item" : "";
  const link = href;
  const classNames = classnames(groupItemClassName, baseClassName, typeClassName, sizeClassName, disabledClassName, iconClassName, iconReverseClassName, fullWidthClassName, themeClassName);

  const html = (
    <>
      {link && (
        <a href={link} className={`${classNames}`}>
          {children}
        </a>
      )}
      {!link && (
        <button type="button" className={`${classNames}`} disabled={disabled}>
          {children}
        </button>
      )}

      {/* <h2>Buttons</h2>
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
      </div> */}
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
};

export default Button;
