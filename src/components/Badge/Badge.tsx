import React from "react";
//import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Badge.scss";
import { Theme } from "../../enums/Theme";

type BadgeProps = {
  theme: Theme;
  type?: "error" | "warning" | "success";
  // color?: "gray" | "primary" | "error" | "warning" | "gray" | "success" | "blue-gray" | "blue-light" | "blue" | "indigo" | "purple" | "pink" | "rose" | "orange";
  size?: "small" | "medium" | "large"; // | "xlarge" | "xxlarge";
  iconReverse?: boolean;
  groupItem?: boolean;
  highlighted?: boolean;
  code?: boolean;
  children: React.ReactNode;
};

function Badge({ /*color*/ theme, type, size, iconReverse, groupItem, highlighted, code, children }: BadgeProps): JSX.Element {
  const baseClassName = "badge";
  const themeClassName = theme ? `is-${theme}` : "";
  const typeClassName = type ? `${baseClassName}--${type}` : "";
  // const colorClassName = color ? `${baseClassName}--${color}` : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const groupItemClassName = groupItem ? "badge-group__item" : "";
  const iconReverseClassName = iconReverse ? `${baseClassName}--rev` : "";
  const highlightedClassName = highlighted ? "badge-group__item--highlighted" : "";
  const classNames = classnames(groupItemClassName, highlightedClassName, baseClassName, /*colorClassName,*/ typeClassName, sizeClassName, iconReverseClassName, themeClassName);
  const html = (
    <>
      <span className={`${classNames}`}>{children}</span>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default Badge;
