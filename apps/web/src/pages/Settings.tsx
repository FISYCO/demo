import { Alert, Btn, Card, Checkbox, Select, Switch } from "@demo/ui";

/** Настройки проекта. */
export function Settings() {
  return (
    <Card title="Настройки">
      <Alert status="warning" title="Уведомления выключены">
        Пока они выключены, о ломающих изменениях никто не узнает.
      </Alert>
      <Switch checked size="md" />
      <Checkbox checked label="Присылать сводку по понедельникам" />
      <Select
        options={[
          { label: "Каждый push", value: "push" },
          { label: "Раз в день", value: "daily" },
        ]}
        value="daily"
        size="md"
      />
      <Btn style="primary" size="md">
        Сохранить
      </Btn>
    </Card>
  );
}
