import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./ButtonGroup.scss";

type ButtonGroupProps = {
  direction?: "row" | "column";
  reverse?: "none" | "all" | "mobile" | "desktop";
  align?: "start" | "center" | "end";
  fullWidth?: boolean;
  code?: boolean;
  children: React.ReactNode;
};

function getReverse(value: string): string {
  switch (value) {
    case "all":
      value = "rev";
      break;
    case "mobile":
      value = "rev-xs";
      break;
    case "desktop":
      value = "rev-md";
      break;
    default:
      "none";
  }
  return value;
}

function ButtonGroup({ direction, reverse, align, fullWidth, code, children }: ButtonGroupProps): JSX.Element {
  const baseClassName = "button-group";
  const directionClassName = direction ? `${baseClassName}--${direction}` : "";
  const reverseClassName = reverse ? `${baseClassName}--${getReverse(reverse)}` : "";
  const alignClassName = align ? `${baseClassName}--${align}` : "";
  const fullWidthClassName = fullWidth ? `${baseClassName}--full` : "";
  const classNames = classnames(baseClassName, directionClassName, alignClassName, reverseClassName, fullWidthClassName);
  const html = (
    <>
      <div className={`${classNames}`} role="group">
        {children}
      </div>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default ButtonGroup;
