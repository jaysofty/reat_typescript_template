import React from "react";

import LineIcon from "./LineIcon";
import ExpandableText from "./ExpandableText";
interface TestimonialCardProps {
  imageSrc: string;
  imageAlt?: string;
  quote: React.ReactNode;
  author: string;
  company: string;
  quoteIconHref?: string; // e.g., "images/sprite.svg#quotes"
  lineIconHref?: string; // e.g., "images/sprite.svg#line"
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  imageAlt = "Customer image",
  quote,
  author,
  company,
}) => {
  return (
    <div className="card testimonial">
      <div className="grid grid--1x2">
        <div className="testimonial__image">
          <img src={imageSrc} alt={imageAlt} />
          <span className="icon-container icon-container--accent">
            {/* <svg className="icon icon--white icon--small">
              <use xlinkHref="../../assets/quotes.svg" />
            </svg> */}
            <svg
              className="icon--white"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 6h4v4H8v4H6V8a2 2 0 012-2zm7 0h4v4h-3v4h-2V8a2 2 0 012-2z" />
            </svg>
          </span>
        </div>
        <blockquote className="quote">
          <p className="quote__text">{quote}</p>
          <footer>
            <div className="media">
              <div className="media__image">
                <span className="icon icon--primary quote__line">
                  <LineIcon />
                </span>
              </div>
              <div className="media__body">
                <h3 className="media__title quote__author">{author}</h3>
                <p className="quote__company">
                  <ExpandableText>{company}</ExpandableText>
                </p>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
