import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import Icon from "../Icon/Icon";

type ChecklistItemProps = {
  color?: "primary" | "success";
  code?: boolean;
  children: React.ReactNode;
};

function ChecklistItem({ color, code, children }: ChecklistItemProps): JSX.Element {
  const baseClassName = "checklist__item";
  const colorClassName = color ? `${baseClassName}--${color}` : "";
  const classNames = classnames(baseClassName, colorClassName);
  const html = (
    <>
      <li className={`${classNames}`}>
        <Icon name="check" className="checklist__icon" />
        {children}
      </li>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default ChecklistItem;
