import React from "react";
//import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Checklist.scss";

type ChecklistProps = {
  color: "primary" | "success";
  size?: "small" | "medium" | "large" | "xlarge";
  contextClassName?: string; // check approach w JC
  code?: boolean;
  children: React.ReactNode;
};

function Checklist({ color, size, contextClassName, code, children }: ChecklistProps): JSX.Element {
  const baseClassName = "checklist";
  const colorClassName = color ? `${baseClassName}--${color}` : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const classNames = classnames(baseClassName, colorClassName, sizeClassName, contextClassName);
  const html = (
    <>
      <ul className={`${classNames}`}>{children}</ul>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default Checklist;
