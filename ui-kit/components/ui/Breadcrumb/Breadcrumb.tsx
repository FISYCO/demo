import { Fragment } from "react";
import { Breadcrumb as BaseBreadcrumb, Icon } from "@chakra-ui/react";

import type { BreadcrumbItem, BreadcrumbProps } from "./Breadcrumb.types";

const renderContent = (item: BreadcrumbItem) => (
  <>
    {item.icon ? <Icon as={item.icon} size="xs" /> : null}
    {item.label}
  </>
);

// Текущее место — только последнее звено: именно оно получает aria-current="page". Промежуточное
// звено без href — это раздел без своего экрана, он остаётся текстом, а не вторым «текущим».
const renderLink = (item: BreadcrumbItem, isLast: boolean) => {
  const content = renderContent(item);
  if (isLast) {
    return <BaseBreadcrumb.CurrentLink>{content}</BaseBreadcrumb.CurrentLink>;
  }
  if (item.href) {
    return <BaseBreadcrumb.Link href={item.href}>{content}</BaseBreadcrumb.Link>;
  }
  return content;
};

export function Breadcrumb({ items, size = "sm", separator, "data-testid": testId = "Breadcrumb" }: BreadcrumbProps) {
  if (!items.length) {
    return null;
  }

  // Ключ — собственная примета звена: ссылка, а если её нет, текстовая подпись. Место в цепочке
  // идёт в ход только для звена без обеих, иначе крошки без ссылок оказались бы неразличимы.
  const trail = items.map((item, index) => ({
    item,
    key: item.href ?? (typeof item.label === "string" ? item.label : `item-${index}`),
    isLast: index === items.length - 1,
  }));

  return (
    <BaseBreadcrumb.Root size={size} data-testid={testId}>
      <BaseBreadcrumb.List data-testid="Breadcrumb__List">
        {trail.map(({ item, key, isLast }) => (
          <Fragment key={key}>
            <BaseBreadcrumb.Item data-testid="Breadcrumb__Item">{renderLink(item, isLast)}</BaseBreadcrumb.Item>
            {isLast ? null : (
              <BaseBreadcrumb.Separator data-testid="Breadcrumb__Separator">{separator}</BaseBreadcrumb.Separator>
            )}
          </Fragment>
        ))}
      </BaseBreadcrumb.List>
    </BaseBreadcrumb.Root>
  );
}
