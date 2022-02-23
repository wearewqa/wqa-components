import React from "react";
import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Stat.scss";

type StatProps = {
  color?: "primary-light" | "primary-dark" | "gray-light" | "gray-dark";
  value: string;
  title: string;
  text?: string;
  code?: boolean;
};

function Stat({ color, value, title, text, code }: StatProps): JSX.Element {
  const baseClassName = "stat";
  const typeClassName = color ? `${baseClassName}--${color}` : "";
  const classNames = classnames(baseClassName, typeClassName);
  const html = (
    <>
      <div className={`${classNames}`}>
        <h3 className={`${baseClassName}__title`}>{title}</h3>
        <div className={`${baseClassName}__value`}>{value}</div>
        <p className={`${baseClassName}__text`}>{text}</p>
      </div>
    </>
  );
  const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  if (code) {
    return <code>{`${htmlString}`}</code>;
  }
  return html;
}

export default Stat;
