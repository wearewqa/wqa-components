import React from "react";
import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./BadgeGroup.scss";

type BadgeGroupProps = {
  color: "primary";
  shade?: "mid" | "dark";
  size?: "small";
  code?: boolean;
  children: React.ReactNode;
};

function BadgeGroup({ color, shade, size, code, children }: BadgeGroupProps): JSX.Element {
  const baseClassName = "badge-group";
  const colorClassName = color ? `${baseClassName}--${color}` : "";
  const shadeClassName = shade ? `${baseClassName}--${shade}` : "";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const classNames = classnames(baseClassName, colorClassName, shadeClassName, sizeClassName);
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

export default BadgeGroup;
