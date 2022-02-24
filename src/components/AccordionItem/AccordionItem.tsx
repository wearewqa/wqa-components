import React from "react";
//import ReactDOMServer from "react-dom/server";
import Icon from "../Icon/Icon";

type AccordionItemProps = {
  id: number;
  active?: boolean;
  title: string;
  content?: string;
  code?: boolean;
};

function AccordionItem({ id, active, title, content, code }: AccordionItemProps): JSX.Element {
  const baseClassName = "accordion";
  const html = (
    <>
      <dt className={`${baseClassName}__title`}>
        <button aria-expanded="false" aria-controls={`${baseClassName}-${id}`} className="accordion__button">
          {title}
          {active ? <Icon name="minus-circle" /> : <Icon name="plus-circle" />}
        </button>
      </dt>
      <dd className={active ? "accordion__content--active" : "accordion__content"}>
        <p id={`${baseClassName}-${id}`} className="accordion__text">
          {content}
        </p>
      </dd>
    </>
  );
  // const htmlString = ReactDOMServer.renderToStaticMarkup(html);
  // if (code) {
  //   return <code>{`${htmlString}`}</code>;
  // }
  return html;
}

export default AccordionItem;
