import { Card as BaseCard } from "@chakra-ui/react";

import { Root } from "./elements/Root";

export const Card = {
  Root,
  Body: BaseCard.Body,
  Header: BaseCard.Header,
  Footer: BaseCard.Footer,
  Title: BaseCard.Title,
  Description: BaseCard.Description,
};

export type { CardRootProps } from "./Card.types";
