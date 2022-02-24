import React from "react";
// import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import Icon from "../Icon/Icon";
import "./ProgressLink.scss";

interface ProgressLinkProps {
  href?: string;
  cssClass?: string;
  code?: boolean;
  children: React.ReactNode;
}

const ProgressLink = ({ href, cssClass, code, children }: ProgressLinkProps) => {
  const baseClassName = "progress-link";
  const link = href ? href : "#";
  const classNames = classnames(baseClassName, cssClass);
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
