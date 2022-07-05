import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import Icon from "../Icon/Icon";
import "./ProgressLink.scss";
import { Theme } from "../../enums/Theme";

interface ProgressLinkProps {
  theme: Theme;
  href?: string;
  cssClass?: string;
  code?: boolean;
  children: React.ReactNode;
}

const ProgressLink = ({ theme, href, cssClass, code, children }: ProgressLinkProps) => {
  const baseClassName = "progress-link";
  const themeClassName = theme ? `is-${theme}` : "";
  const link = href ? href : "#";
  const classNames = classnames(baseClassName, cssClass, themeClassName);
  const html = (
    <>
      <a href={link} className={`${classNames}`}>
        {children}
        <Icon name="arrow-right" className="progress-link__icon" />
      </a>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
};

export default ProgressLink;
