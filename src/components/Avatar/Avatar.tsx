import React from "react";
import ReactDOMServer from "react-dom/server";
import classnames from "classnames";
import "./Avatar.scss";

type AvatarProps = {
  className?: string;
  size: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
  image?: string;
  imageAlt?: string;
  code?: boolean;
};

function Avatar({ className, size, image, imageAlt, code }: AvatarProps): JSX.Element {
  const baseClassName = "avatar";
  const sizeClassName = size ? `${baseClassName}--${size}` : "";
  const classNames = classnames(className, baseClassName, sizeClassName);
  const html = (
    <>
      <div className={`${classNames}`}>{image && <img src={image} className={`${baseClassName}__image`} alt={imageAlt} />}</div>
    </>
  );
  const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  if (code) {
    return <code>{`${htmlString}`}</code>;
  }
  return html;
}

export default Avatar;
