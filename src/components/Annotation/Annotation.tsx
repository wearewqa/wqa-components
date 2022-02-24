import React from "react";
//import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import Icon from "../Icon/Icon";
import "./Annotation.scss";

type AnnotationProps = {
  direction: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  code?: boolean;
  children: React.ReactNode;
};

function Annotation({ direction, code, children }: AnnotationProps): JSX.Element {
  const baseClassName = "annotation";
  const directionClassName = direction ? `${baseClassName}--${direction}` : "";
  const classNames = classnames(baseClassName, directionClassName);
  const html = (
    <>
      <div className={`${classNames}`}>
        <span className="annotation__text">{children}</span>
        <Icon name="hand-drawn-arrow" className="annotation__arrow" />
      </div>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default Annotation;
