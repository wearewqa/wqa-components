import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import Icon from "../Icon/Icon";
import { Theme } from "../../enums/Theme";

type ChecklistItemProps = {
  theme?: Theme;
  type?: "primary" | "success";
  code?: boolean;
  children: React.ReactNode;
};

function ChecklistItem({ theme, type, code, children }: ChecklistItemProps): JSX.Element {
  const baseClassName = "checklist__item";
  const themeClassName = theme ? `is-${theme}` : "";
  const typeClassName = type ? `${baseClassName}--${type}` : "";
  const classNames = classnames(baseClassName, typeClassName, themeClassName);
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
