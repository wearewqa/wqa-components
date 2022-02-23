import React from "react";
//import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Button.scss";

interface Props {
  color:
    | "primary"
    | "secondary"
    | "secondary-gray"
    | "tertiary"
    | "tertiary-gray";
  size: "small" | "medium" | "large" | "xlarge" | "xxlarge";
  href?: string;
  icon?: boolean;
  iconReverse?: boolean;
  fullWidth?: boolean;
  groupItem?: boolean;
  children: React.ReactNode;
  code?: boolean;
}

const Button = ({
  color,
  size,
  href,
  icon,
  iconReverse,
  fullWidth,
  groupItem,
  children,
  code,
}: Props) => {
  const baseClassName = "button";
  const colorClassName = color ? `${baseClassName}--${color}` : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const iconClassName = icon ? `${baseClassName}--icon` : "";
  const iconReverseClassName = iconReverse ? `${baseClassName}--rev` : "";
  const fullWidthClassName = fullWidth ? `${baseClassName}--full` : "";
  const groupItemClassName = groupItem ? "button-group__item" : "";
  const link = href ? href : "#";
  const classNames = classnames(
    groupItemClassName,
    baseClassName,
    colorClassName,
    sizeClassName,
    iconClassName,
    iconReverseClassName,
    fullWidthClassName
  );
  const html = (
    <>
      <a href={link} className={`${classNames}`}>
        {children}
      </a>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
};

export default Button;
