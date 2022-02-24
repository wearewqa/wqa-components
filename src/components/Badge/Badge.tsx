import React from "react";
//import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Badge.scss";

type BadgeProps = {
  color?: "gray" | "primary" | "error" | "warning" | "gray" | "success" | "blue-gray" | "blue-light" | "blue" | "indigo" | "purple" | "pink" | "rose" | "orange";
  size?: "small" | "medium" | "large"; // | "xlarge" | "xxlarge";
  iconReverse?: boolean;
  groupItem?: boolean;
  highlighted?: boolean;
  code?: boolean;
  children: React.ReactNode;
};

function Badge({ color, size, iconReverse, groupItem, highlighted, code, children }: BadgeProps): JSX.Element {
  const baseClassName = "badge";
  const colorClassName = color ? `${baseClassName}--${color}` : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const groupItemClassName = groupItem ? "badge-group__item" : "";
  const iconReverseClassName = iconReverse ? `${baseClassName}--rev` : "";
  const highlightedClassName = highlighted ? "badge-group__item--highlighted" : "";
  const classNames = classnames(groupItemClassName, highlightedClassName, baseClassName, colorClassName, sizeClassName, iconReverseClassName);
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
