import React from "react";

interface HeroSectionProps {
  heading: string;
  tagline: string;
  buttonLabel: string;
  buttonHref: string;
  imageAlt?: string;
  imageSources: {
    webp1x: string;
    webp2x: string;
    png1x: string;
    png2x: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading,
  tagline,
  buttonLabel,
  buttonHref,
  imageAlt = "",
  imageSources,
}) => {
  return (
    <section className="block block--dark block--skewed-left hero">
      <div className="container grid grid--1x2">
        <header className="block__header hero__content">
          <h1 className="block__heading">{heading}</h1>
          <p className="hero__tagline">{tagline}</p>
          <a href={buttonHref} className="btn btn--accent btn--stretched">
            {buttonLabel}
          </a>
        </header>
        <picture>
          <source
            type="image/webp"
            srcSet={`${imageSources.webp1x} 1x, ${imageSources.webp2x} 2x`}
          />
          <source
            type="image/png"
            srcSet={`${imageSources.png1x} 1x, ${imageSources.png2x} 2x`}
          />
          <img
            className="hero__image"
            src={imageSources.png1x}
            alt={imageAlt}
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;
