import React from "react";
//import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Checklist.scss";
import { Theme } from "../../enums/Theme";

type ChecklistProps = {
  theme: Theme;
  type: "primary" | "success";
  size?: "small" | "medium" | "large" | "xlarge";
  contextClassName?: string; // check approach w JC
  code?: boolean;
  children: React.ReactNode;
};

function Checklist({ theme, type, size, contextClassName, code, children }: ChecklistProps): JSX.Element {
  const baseClassName = "checklist";
  const themeClassName = theme ? `is-${theme}` : "";
  const typeClassName = type ? `${baseClassName}--${type}` : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const classNames = classnames(baseClassName, typeClassName, sizeClassName, contextClassName, themeClassName);
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
