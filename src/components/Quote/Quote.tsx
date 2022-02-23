import React, { Children } from "react";
import ReactDOMServer from "react-dom/server";
import Avatar from "../Avatar";
import classnames from "classnames";
import { TextAlign } from "../../enums/TextAlign";
import "./Quote.scss";

type QuoteProps = {
  align?: TextAlign;
  text: string;
  authorName: string;
  authorPosition?: string;
  authorAvatar?: string;
  starRating?: "1" | "2" | "3" | "4" | "5";
  code?: boolean;
};

function Quote({ align, text, authorName, authorPosition, authorAvatar, code }: QuoteProps): JSX.Element {
  const baseClassName = "quote";
  const alignClassName = align ? `${align}` : "";
  const avatarAlt = "Avatar for " + authorName;
  const classNames = classnames(baseClassName, alignClassName);

  const html = (
    <>
      <figure className={`${classNames}`}>
        <blockquote className="quote__text">
          <p>{text}</p>
        </blockquote>

        <figcaption className="quote__author">
          {authorName}
          <span className="quote__position">{authorPosition}</span>
          <div className="quote__avatar">
            <Avatar size="xlarge" image={authorAvatar} imageAlt={avatarAlt} />
          </div>
        </figcaption>
      </figure>
    </>
  );
  const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  if (code) {
    return <code>{`${htmlString}`}</code>;
  }
  return html;
}

export default Quote;
