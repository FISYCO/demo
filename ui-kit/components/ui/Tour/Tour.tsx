"use client";
import { Tour as BaseTour } from "@ark-ui/react/tour";
import { Box, CloseButton, Heading, HStack, Portal, Text, VStack } from "@chakra-ui/react";

import styles from "./Tour.module.css";
import { Button } from "../Button";
import { Card } from "../Card";
import type { TourProps } from "./Tour.types";

export function Tour({ "data-testid": testId = "Tour", ...props }: TourProps) {
  return (
    <BaseTour.Root data-testid={testId} lazyMount unmountOnExit {...props}>
      <Portal>
        <Box
          as={BaseTour.Backdrop}
          className={styles.backdrop}
          data-testid="Tour__Backdrop"
          bg="bg/70"
          backdropFilter="auto"
          backdropBlur="sm"
          zIndex="overlay"
        >
          <Box as={BaseTour.Spotlight} data-testid="Tour__Spotlight" borderRadius="l2" />
          <BaseTour.Positioner data-testid="Tour__Positioner" className={styles.positioner}>
            <BaseTour.Content data-testid="Tour__Content" className={styles.content}>
              <Box as={BaseTour.Arrow} data-testid="Tour__Arrow" zIndex="1">
                <Box as={BaseTour.ArrowTip} css={{ "--arrow-background": "colors.bg.panel" }} />
              </Box>

              <BaseTour.CloseTrigger asChild>
                <CloseButton className={styles.closeTrigger} size="xs" variant="ghost" zIndex="1" />
              </BaseTour.CloseTrigger>
              <Card.Root>
                <Card.Body>
                  <VStack gap="3" alignItems="stretch">
                    <Text data-testid="Tour__ProgressText" fontSize="xs" color="fg.subtle" as={BaseTour.ProgressText} />
                    <Heading data-testid="Tour__Title" size="md" as={BaseTour.Title} />
                    <Text data-testid="Tour__Description" fontSize="sm" color="fg.subtle" as={BaseTour.Description} />
                    <BaseTour.Actions>
                      {(actions) => (
                        <HStack gap="2" data-testid="Tour__Actions">
                          {actions.map((action) => (
                            <BaseTour.ActionTrigger key={action.label} action={action} asChild>
                              {/* Ark вешает на кнопку свой `aria-label` по типу действия — `next
                                  step`, `previous step`. Он перекрывает содержимое, и читалка
                                  объявляет шаг по-английски независимо от локали. Своя подпись
                                  ставится после, чтобы победить при слиянии. */}
                              <Button
                                size="xs"
                                variant={action.action === "prev" ? "ghost" : "solid"}
                                aria-label={typeof action.label === "string" ? action.label : undefined}
                              >
                                {action.label}
                              </Button>
                            </BaseTour.ActionTrigger>
                          ))}
                        </HStack>
                      )}
                    </BaseTour.Actions>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </BaseTour.Content>
          </BaseTour.Positioner>
        </Box>
      </Portal>
    </BaseTour.Root>
  );
}
