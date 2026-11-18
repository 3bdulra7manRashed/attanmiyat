import Header from "@/components/Header";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  annokhbahContent,
  certificationsContent,
  clientsContent,
  distinguishesUsContent,
  entitiesSectionContent,
  footerContent,
  heroContent,
  masaratContent,
  rowadContent,
  valuesVisionMissionContent,
  whoWeServeContent,
} from "@/data/siteContent";

export default function HomePage() {
  return (
    <div id="page-container" style={{ backgroundColor: "#ffffff" }}>
      <Header />

      <main id="main-content">
        {/* Section 0: Hero Section */}
        <section
          className="hero-section"
          style={{
            marginTop: "80px",
            padding: "192px 0px 220px 0px",
            backgroundColor: "#c1c1c1",
            backgroundImage: "linear-gradient(212deg, #002e8c 32%, #0097c9 100%)",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}
        >
          <div className="et-row">
            {/* Visual Left Column (2/3) */}
            <div className="et-col et-col-2-3 hero-text-col">
              <div
                className="hero-text-inner"
                style={{
                  marginTop: "59px",
                  textAlign: "right",
                  color: "#ffffff",
                  textShadow: "0em 0.1em 2em rgba(0, 0, 0, 0.4)",
                }}
              >
                <h1
                  style={{
                    fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "42px",
                    fontWeight: 500,
                    lineHeight: "1.2em",
                    color: "#ffffff",
                    paddingBottom: "10px",
                    textAlign: "right",
                  }}
                >
                  {heroContent.title}
                </h1>
                <p
                  style={{
                    fontFamily: '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "29px",
                    fontWeight: 500,
                    lineHeight: "2em",
                    color: "#ffffff",
                    textAlign: "right",
                  }}
                >
                  {heroContent.subtitle}
                </p>
              </div>
            </div>

            {/* Visual Right Column (1/3) */}
            <div className="et-col et-col-1-3 hero-badge-col">
              <div
                style={{
                  maxWidth: "74%",
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroContent.badgeImage}
                  alt={heroContent.badgeAlt}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "inline",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Specialized Entities (كيانات متخصصة في القطاع الخيري) */}
        <section
          style={{
            padding: "49px 0px 27px 0px",
            backgroundColor: "#ffffff",
            backgroundImage: `url("${entitiesSectionContent.bgDecoration}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100% 0%",
            backgroundSize: "auto",
          }}
        >
          {/* Row 1: Heading */}
          <div className="et-row" style={{ padding: "27px 0px" }}>
            <div className="et-col et-col-4-4">
              <h1
                style={{
                  fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                  fontSize: "30px",
                  fontWeight: 500,
                  lineHeight: "30px",
                  color: "#333333",
                  textAlign: "center",
                  paddingBottom: "10px",
                }}
              >
                {entitiesSectionContent.heading}
              </h1>
            </div>
          </div>

          {/* Row 2: 3 Entity Cards (Visual Left to Right) */}
          <div className="et-row" style={{ padding: "27px 0px" }}>
            {entitiesSectionContent.cards.map((card) => (
              <div key={card.id} className="et-col et-col-1-3">
                <div
                  className="animate-fade-in-up"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "6px 6px 50px 0px rgba(0, 0, 0, 0.3)",
                    textAlign: "center",
                    marginBottom: "29.7px",
                    padding: card.cardPadding,
                  }}
                >
                  <div
                    className="animate-slide-top"
                    style={{
                      display: "inline-block",
                      maxWidth: `${card.imageMaxWidthPercent}%`,
                      marginBottom: "30px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "inline",
                      }}
                    />
                  </div>
                  <h2
                    style={{
                      fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      color: "#333333",
                      paddingBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    {card.title}
                  </h2>
                  <div
                    style={{
                      fontFamily: '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "2em",
                      color: "#666666",
                      textAlign: "center",
                    }}
                  >
                    {card.description}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "-50px",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <a
                    href={card.href}
                    className="et-cta-button"
                    style={{
                      display: "inline-block",
                      padding: "6px 20px",
                      borderRadius: "13px",
                      backgroundImage: card.buttonGradient,
                      backgroundSize: "cover",
                      backgroundPosition: "50% 50%",
                      color: "#ffffff",
                      fontFamily: '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "34px",
                      textDecoration: "none",
                      boxShadow: "0px 2px 18px 0px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {card.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Who We Serve (من نخدم) */}
        <section style={{ padding: "0px", backgroundColor: "#ffffff" }}>
          <div className="et-row animate-fade-in-up" style={{ padding: "27px 0px 43px 0px" }}>
            <div className="et-col et-col-4-4">
              <div style={{ maxWidth: "550px", margin: "0 auto", textAlign: "center" }}>
                <h4
                  style={{
                    fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "28px",
                    fontWeight: 500,
                    lineHeight: "1.7em",
                    color: "#000000",
                    textAlign: "center",
                    paddingBottom: "10px",
                  }}
                >
                  {whoWeServeContent.heading}
                </h4>
              </div>
            </div>
          </div>

          <div className="et-row animate-fade-in-up" style={{ padding: "27px 0px" }}>
            {whoWeServeContent.items.map((item) => (
              <div key={item.id} className="et-col et-col-1-5">
                <div style={{ textAlign: "center" }}>
                  <div
                    className="animate-slide-bottom"
                    style={{
                      display: "inline-block",
                      maxWidth: "55%",
                      marginBottom: "30px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "inline",
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "1.5em",
                      color: "#333333",
                      textAlign: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: What Distinguishes Us (ما الذي يميزنا) */}
        <section style={{ padding: "54px 0px", backgroundColor: "#ffffff" }}>
          <div className="et-row" style={{ padding: "27px 0px 43px 0px" }}>
            <div className="et-col et-col-4-4">
              <h1
                style={{
                  fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                  fontSize: "35px",
                  fontWeight: 500,
                  lineHeight: "35px",
                  color: "#333333",
                  textAlign: "center",
                  paddingBottom: "10px",
                }}
              >
                {distinguishesUsContent.heading}
              </h1>
            </div>
          </div>

          <div className="et-row" style={{ padding: "27px 0px" }}>
            {distinguishesUsContent.items.map((item) => (
              <div key={item.id} className="et-col et-col-1-5">
                <div
                  style={{
                    textAlign: "center",
                    marginTop: item.marginTop ?? "0px",
                  }}
                >
                  <div
                    className="animate-slide-bottom"
                    style={{
                      display: "inline-block",
                      maxWidth: "55%",
                      marginBottom: "30px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "inline",
                      }}
                    />
                  </div>
                  <h1
                    style={{
                      fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                      fontSize: "23px",
                      fontWeight: 500,
                      lineHeight: "1.5em",
                      color: "#333333",
                      textAlign: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h1>
                  <div
                    style={{
                      fontFamily: '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                      fontSize: "17px",
                      fontWeight: 500,
                      lineHeight: "23.8px",
                      color: "#666666",
                      textAlign: "center",
                    }}
                  >
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Values, Vision, Mission */}
        <section
          style={{
            padding: "17px 0px 34px 0px",
            backgroundColor: "#c1c1c1",
            backgroundImage: "linear-gradient(212deg, #3C8D54 32%, #98B935 100%)",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}
        >
          <div className="et-row" style={{ padding: "27px 0px" }}>
            {valuesVisionMissionContent.cards.map((card) => (
              <div key={card.id} className="et-col et-col-1-3">
                <div
                  className="blurb-1"
                  style={{
                    padding: card.padding,
                    textAlign: "center",
                  }}
                >
                  <div style={{ marginBottom: "30px" }}>
                    <span
                      className="et-pb-icon animate-slide-top"
                      style={{
                        fontFamily: '"ETmodules"',
                        fontSize: "70px",
                        lineHeight: "70px",
                        fontWeight: 400,
                        color: "#ffffff",
                        display: "inline-block",
                      }}
                    >
                      {card.iconHex}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "18px",
                      color: "#ffffff",
                      textAlign: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    {card.title}
                  </h4>
                  <div>
                    {card.paragraphs.map((text, pIdx) => (
                      <p
                        key={pIdx}
                        style={{
                          fontFamily:
                            '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                          fontSize: "14px",
                          fontWeight: 500,
                          lineHeight: card.lineHeight,
                          color: "#ffffff",
                          textAlign: card.textAlign,
                          paddingBottom: card.paragraphPaddingBottom ?? "0px",
                        }}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Certifications & Awards (الاعتمادات والجوائز) */}
        <section style={{ padding: "26px 0px 54px 0px", backgroundColor: "#ffffff" }}>
          <div className="et-row" style={{ padding: "27px 0px" }}>
            <div className="et-col et-col-4-4">
              <div
                style={{
                  maxWidth: "550px",
                  margin: "0 auto 29.7px auto",
                  textAlign: "center",
                }}
              >
                <div
                  className="animate-slide-top"
                  style={{
                    display: "inline-block",
                    width: "99px",
                    maxWidth: "100%",
                    marginBottom: "30px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={certificationsContent.icon}
                    alt={certificationsContent.heading}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "inline",
                    }}
                  />
                </div>
                <h1
                  style={{
                    fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "23px",
                    fontWeight: 500,
                    lineHeight: "1.5em",
                    color: "#333333",
                    textAlign: "center",
                    paddingBottom: "10px",
                  }}
                >
                  {certificationsContent.heading}
                </h1>
              </div>

              <div
                className="animate-fade-in-up"
                style={{
                  maxWidth: "80%",
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={certificationsContent.image}
                  alt={certificationsContent.imageAlt}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "inline",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Entity 1 – المسارات الرائدة */}
        <section
          id={masaratContent.id}
          style={{
            padding: "54px 0px",
            backgroundColor: "#ffffff",
            scrollMarginTop: "54px",
          }}
        >
          {/* Logo Row */}
          <div className="et-row" style={{ padding: "27px 0px" }}>
            <div className="et-col et-col-4-4">
              <div style={{ maxWidth: "550px", margin: "0 auto", textAlign: "center" }}>
                <div
                  className="animate-slide-top"
                  style={{
                    display: "inline-block",
                    width: `${masaratContent.logoWidth}px`,
                    maxWidth: "100%",
                    marginBottom: "30px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={masaratContent.logo}
                    alt={masaratContent.logoAlt}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "inline",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Counters Row */}
          <div className="et-row" style={{ padding: "27px 0px 0px 0px" }}>
            {masaratContent.counters.map((counter) => (
              <div key={counter.title} className="et-col et-col-1-4">
                <AnimatedCounter
                  value={counter.value}
                  title={counter.title}
                  color={masaratContent.counterColor}
                  titleLineHeight={counter.titleLineHeight}
                />
              </div>
            ))}
          </div>

          {/* Services Heading Row */}
          <div className="et-row" style={{ padding: "0px 0px 27px 0px" }}>
            <div className="et-col et-col-4-4">
              <div
                style={{
                  maxWidth: "550px",
                  margin: "36px auto 0 auto",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "30px",
                    fontWeight: 500,
                    lineHeight: "30px",
                    color: "#333333",
                    textAlign: "center",
                    paddingBottom: "10px",
                  }}
                >
                  {masaratContent.servicesHeading}
                </h1>
              </div>
            </div>
          </div>

          {/* Services Columns Row */}
          <div
            className="et-row"
            style={{
              padding: "27px 0px",
              borderTop: `3px solid ${masaratContent.borderColor}`,
            }}
          >
            {masaratContent.serviceColumns.map((col) => (
              <div key={col.title} className="et-col et-col-1-2">
                <div style={{ marginBottom: "29.69px", textAlign: "center" }}>
                  <div
                    className="animate-slide-top"
                    style={{
                      display: "inline-block",
                      maxWidth: "30%",
                      marginBottom: "30px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={col.image}
                      alt={col.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "inline",
                      }}
                    />
                  </div>
                  <h1
                    style={{
                      fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                      fontSize: "30px",
                      fontWeight: 500,
                      lineHeight: "30px",
                      color: "#333333",
                      textAlign: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    {col.title}
                  </h1>
                </div>

                {col.subgroups.map((subgroup, subIdx) => (
                  <div
                    key={subgroup.heading}
                    className="masarat-sublist"
                    style={{
                      marginBottom: subIdx < col.subgroups.length - 1 ? "29.69px" : "0px",
                      textAlign: "right",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: "18px",
                        color: "#333333",
                        textAlign: "right",
                        paddingBottom: "10px",
                      }}
                    >
                      {subgroup.heading}
                    </h4>
                    {subgroup.items.map((itemText, itemIdx) => (
                      <p
                        key={itemText}
                        style={{
                          fontFamily:
                            '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                          fontSize: "14px",
                          fontWeight: 500,
                          lineHeight: "14px",
                          color: "#666666",
                          textAlign: "right",
                          paddingBottom: itemIdx < subgroup.items.length - 1 ? "14px" : "0px",
                        }}
                      >
                        {itemText}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* CTA Button Row */}
          <div className="et-row" style={{ padding: "27px 0px" }}>
            <div className="et-col et-col-4-4" style={{ textAlign: "center" }}>
              <a
                href={masaratContent.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="et-cta-button"
                style={{
                  display: "inline-block",
                  padding: "6px 20px",
                  borderRadius: "13px",
                  backgroundImage: masaratContent.ctaGradient,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  color: "#ffffff",
                  fontFamily: '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "34px",
                  textDecoration: "none",
                  boxShadow: "0px 2px 18px 0px rgba(0, 0, 0, 0.3)",
                }}
              >
                {masaratContent.ctaText}
              </a>
            </div>
          </div>
        </section>

        {/* Section 7: Entity 2 – النخبة الإدارية */}
        <section
          id={annokhbahContent.id}
          style={{
            padding: "54px 0px",
            backgroundColor: "#ffffff",
            scrollMarginTop: "54px",
          }}
        >
          {/* Logo Row */}
          <div className="et-row" style={{ padding: "27px 0px" }}>
            <div className="et-col et-col-4-4">
              <div style={{ maxWidth: "550px", margin: "0 auto", textAlign: "center" }}>
                <div
                  className="animate-slide-top"
                  style={{
                    display: "inline-block",
                    width: `${annokhbahContent.logoWidth}px`,
                    maxWidth: "100%",
                    marginBottom: "30px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={annokhbahContent.logo}
                    alt={annokhbahContent.logoAlt}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "inline",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Counters Row */}
          <div className="et-row" style={{ padding: "27px 0px 0px 0px" }}>
            {annokhbahContent.counters.map((counter) => (
              <div key={counter.title} className="et-col et-col-1-4">
                <AnimatedCounter
                  value={counter.value}
                  title={counter.title}
                  color={annokhbahContent.counterColor}
                  titleLineHeight={counter.titleLineHeight}
                />
              </div>
            ))}
          </div>

          {/* Services Heading Row */}
          <div className="et-row" style={{ padding: "18px 0px 27px 0px" }}>
            <div className="et-col et-col-4-4">
              <div
                style={{
                  maxWidth: "550px",
                  margin: "36px auto 0 auto",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "30px",
                    fontWeight: 500,
                    lineHeight: "30px",
                    color: "#333333",
                    textAlign: "center",
                    paddingBottom: "10px",
                  }}
                >
                  {annokhbahContent.servicesHeading}
                </h1>
              </div>
            </div>
          </div>

          {/* Services Columns Row */}
          <div
            className="et-row"
            style={{
              padding: "27px 0px",
              borderTop: `3px solid ${annokhbahContent.borderColor}`,
            }}
          >
            {annokhbahContent.serviceColumns.map((col) => (
              <div key={col.title} className="et-col et-col-1-3">
                <div style={{ textAlign: "center" }}>
                  <div
                    className="animate-slide-top"
                    style={{
                      display: "inline-block",
                      maxWidth: "30%",
                      marginBottom: "30px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={col.image}
                      alt={col.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "inline",
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                      fontSize: col.titleFontSize,
                      fontWeight: 500,
                      lineHeight: col.titleFontSize,
                      color: "#333333",
                      textAlign: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    {col.title}
                  </h4>
                  {col.items.map((itemText, idx) => (
                    <p
                      key={itemText}
                      style={{
                        fontFamily:
                          '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "23.8px",
                        color: "#666666",
                        textAlign: "center",
                        paddingBottom: col.items.length > 1 || idx < col.items.length - 1 ? "14px" : "0px",
                      }}
                    >
                      {itemText}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button Row */}
          <div className="et-row" style={{ padding: "27px 0px" }}>
            <div className="et-col et-col-4-4" style={{ textAlign: "center" }}>
              <a
                href={annokhbahContent.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="et-cta-button"
                style={{
                  display: "inline-block",
                  padding: "6px 20px",
                  borderRadius: "13px",
                  backgroundImage: annokhbahContent.ctaGradient,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  color: "#ffffff",
                  fontFamily: '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "34px",
                  textDecoration: "none",
                  boxShadow: "0px 2px 18px 0px rgba(0, 0, 0, 0.3)",
                }}
              >
                {annokhbahContent.ctaText}
              </a>
            </div>
          </div>
        </section>

        {/* Section 8: Entity 3 – مركز رواد القيادة */}
        <section
          id={rowadContent.id}
          style={{
            padding: "54px 0px",
            backgroundColor: "#ffffff",
            scrollMarginTop: "54px",
          }}
        >
          {/* Logo Row */}
          <div className="et-row" style={{ padding: "27px 0px 59px 0px" }}>
            <div className="et-col et-col-4-4">
              <div style={{ maxWidth: "550px", margin: "0 auto", textAlign: "center" }}>
                <div
                  className="animate-slide-top"
                  style={{
                    display: "inline-block",
                    width: `${rowadContent.logoWidth}px`,
                    maxWidth: "100%",
                    marginBottom: "30px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={rowadContent.logo}
                    alt={rowadContent.logoAlt}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "inline",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Counters Row */}
          <div className="et-row" style={{ padding: "27px 0px 0px 0px" }}>
            {rowadContent.counters.map((counter) => (
              <div key={counter.title} className="et-col et-col-1-4">
                <AnimatedCounter
                  value={counter.value}
                  title={counter.title}
                  color={rowadContent.counterColor}
                  titleLineHeight={counter.titleLineHeight}
                />
              </div>
            ))}
          </div>

          {/* Services Heading Row */}
          <div className="et-row" style={{ padding: "0px 0px 27px 0px" }}>
            <div className="et-col et-col-4-4">
              <div
                style={{
                  maxWidth: "550px",
                  margin: "36px auto 0 auto",
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "30px",
                    fontWeight: 500,
                    lineHeight: "30px",
                    color: "#333333",
                    textAlign: "center",
                    paddingBottom: "10px",
                  }}
                >
                  {rowadContent.servicesHeading}
                </h1>
              </div>
            </div>
          </div>

          {/* Services Columns Row */}
          <div
            className="et-row"
            style={{
              padding: "27px 0px",
              borderTop: `3px solid ${rowadContent.borderColor}`,
            }}
          >
            {rowadContent.serviceColumns.map((col) => (
              <div key={col.title} className="et-col et-col-1-3">
                <div style={{ textAlign: "center" }}>
                  <div
                    className="animate-slide-top"
                    style={{
                      display: "inline-block",
                      maxWidth: "30%",
                      marginBottom: "30px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={col.image}
                      alt={col.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "inline",
                      }}
                    />
                  </div>
                  <h1
                    style={{
                      fontFamily: '"NotoKufiArabic Bold", Helvetica, Arial, Lucida, sans-serif',
                      fontSize: col.titleFontSize,
                      fontWeight: 500,
                      lineHeight: col.titleFontSize,
                      color: "#333333",
                      textAlign: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    {col.title}
                  </h1>
                  {col.items.map((itemText, idx) => (
                    <p
                      key={itemText}
                      style={{
                        fontFamily:
                          '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "23.8px",
                        color: "#666666",
                        textAlign: "center",
                        paddingBottom: idx < col.items.length - 1 ? "14px" : "0px",
                      }}
                    >
                      {itemText}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button Row */}
          <div className="et-row" style={{ padding: "27px 0px" }}>
            <div className="et-col et-col-4-4" style={{ textAlign: "center" }}>
              <a
                href={rowadContent.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="et-cta-button"
                style={{
                  display: "inline-block",
                  padding: "6px 20px",
                  borderRadius: "13px",
                  backgroundImage: rowadContent.ctaGradient,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  color: "#ffffff",
                  fontFamily: '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "34px",
                  textDecoration: "none",
                  boxShadow: "0px 2px 18px 0px rgba(0, 0, 0, 0.3)",
                }}
              >
                {rowadContent.ctaText}
              </a>
            </div>
          </div>
        </section>

        {/* Section 9: Our Clients (من عملائنا) */}
        <section style={{ padding: "54px 0px", backgroundColor: "#ffffff" }}>
          <div className="et-row" style={{ padding: "27px 0px" }}>
            <div className="et-col et-col-4-4">
              {clientsContent.images.map((img, idx) => (
                <div
                  key={img.src}
                  className="clients-image-wrap"
                  style={{
                    textAlign: "right",
                    marginBottom: idx < clientsContent.images.length - 1 ? "29.7px" : "0px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: `${img.width}px`,
                      maxWidth: "100%",
                      height: "auto",
                      display: "inline",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Bottom Spacer Section */}
        <section
          aria-hidden="true"
          style={{
            padding: "54px 0px",
            backgroundColor: "#ffffff",
            height: "163px",
          }}
        />
      </main>

      {/* Footer */}
      <footer
        id="main-footer"
        style={{
          backgroundColor: "#222222",
          width: "100%",
        }}
      >
        <div
          id="footer-bottom"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.32)",
            padding: "15px 0px 5px 0px",
          }}
        >
          <div className="et-container" style={{ overflow: "hidden" }}>
            <div
              id="footer-info"
              className="footer-info-box"
              style={{
                float: "right",
                paddingBottom: "10px",
                color: "#666666",
                fontFamily: '"Droid Kufi Arabic - Regular", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "23.8px",
                textAlign: "right",
              }}
            >
              {footerContent.text}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
