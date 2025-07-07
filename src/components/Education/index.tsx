import Image from "next/image";
import { useTheme } from "styled-components";
import education from "../../data/education";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Button, Container, Title } from "../../styles/styles";
import { EducationContainer, EducationContent } from "./styles";
import { Student } from "phosphor-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export function Education() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<"en">("en");

  useEffect(() => {
    const { locale } = router;
    setCurrentLang("en"); // Only English supported now
  }, [router.locale]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const theme = useTheme();

  return (
    <Container>
      <Title>
        History
        <span>
          <Student /> Academic
        </span>
      </Title>

      <div>
        <VerticalTimeline lineColor={theme.firstColor} animate={true}>
          {education &&
            education.map((edu) => (
              <VerticalTimelineElement
                key={edu.id}
                contentStyle={{
                  background: theme.backgroundAlt,
                  borderBottom: `7px solid ${theme.backgroundAlt}`,
                  boxShadow: `0px 5px 0px 0px ${theme.firstColor}`,
                }}
                contentArrowStyle={{
                  borderRight: `10px solid ${theme.backgroundAlt}`,
                }}
                date={edu.date}
                icon={
                  <Image
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      borderRadius: "60%",
                    }}
                    width={60}
                    height={60}
                    src={edu.img}
                    alt={edu.title || "Education Logo"}
                    loading="lazy"
                  />
                }
                iconStyle={{
                  boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                  background: theme.backgroundAlt,
                  color: theme.firstColor,
                }}
              >
                <EducationContainer>
                  <EducationContent>
                    <h1>{edu.title}</h1>
                    <h2>{edu.subTitle}</h2>
                    <span>{edu.office}</span>
                    <p>
                      {(edu.description || "")
                        .split("\n")
                        .map((line, i) => (
                          <a key={i}>{line}</a>
                        ))}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "1rem",
                      }}
                    >
                    </div>
                  </EducationContent>
                </EducationContainer>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </div>
    </Container>
  );
}
