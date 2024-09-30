import React from "react";
import TitleContainer from "./TitleContainer";
import HeadTitle from "./HeadTitle";
import RedirectTitle from "./RedirectTitle";

const TitleSection = ({
  title,
  redirectMore,
  children,
}: {
  title: string;
  redirectMore?: string;
  children?: React.ReactNode;
}) => {
  return (
    <TitleContainer
      startContent={<HeadTitle title={title} />}
      centerContent={children}
      endContent={
        redirectMore ? (
          <RedirectTitle href={redirectMore} />
        ) : (
          <React.Fragment />
        )
      }
    />
  );
};

export default TitleSection;
