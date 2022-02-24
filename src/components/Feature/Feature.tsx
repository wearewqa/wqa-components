import React from "react";
import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Feature.scss";

type FeatureProps = {
  color?: "primary-light" | "primary-dark" | "gray-light" | "gray-dark";
  layout?: "column" | "row" | "row-indent" | "block" | "block-row";
  modifierClass?: string;
  code?: boolean;
  children: React.ReactNode;
};

function Feature({ color, layout, modifierClass, code, children }: FeatureProps): JSX.Element {
  const baseClassName = "feature";
  const colorClassName = color ? `${baseClassName}--${color}` : "";
  const layoutClassName = layout ? `${baseClassName}--${layout}` : "";
  const classNames = classnames(baseClassName, colorClassName, layoutClassName, modifierClass);
  const html = (
    <>
      <div className={`${classNames}`}>{children}</div>
    </>
  );
  const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  if (code) {
    return <code>{`${htmlString}`}</code>;
  }
  return html;
}

export default Feature;
