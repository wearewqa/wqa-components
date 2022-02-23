import React from "react";
import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Accordion.scss";

interface Props {
  color: "primary" | "success";
  size?: "small" | "medium" | "large" | "xlarge";
  code?: boolean;
  children: React.ReactNode;
}

const Accordion: React.FC<Props> = ({ color, size, code, children }) => {
  const baseClassName = "accordion";
  const colorClassName = color ? `${baseClassName}--${color}` : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const classNames = classnames(baseClassName, colorClassName, sizeClassName);
  const html = (
    <>
      <dl className={`${classNames}`}>{children}</dl>
    </>
  );
  const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  if (code) {
    return <code>{`${htmlString}`}</code>;
  }
  return html;
};

export default Accordion;
