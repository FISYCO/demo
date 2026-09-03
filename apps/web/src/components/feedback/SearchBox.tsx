import { IconButton, Input, Popover } from "@demo/ui";

import { Search } from "../../../../../src/assets/icons/search";

/** Поиск с подсказкой на устаревшем `Popover`. */
export function SearchBox({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <Popover placement="bottom" trigger={<Input placeholder="Найти проект, участника или счёт" size="md" value={value} onChange={onChange} />}>
      Введите хотя бы три символа.
      <IconButton label="Искать" size="xs" variant="ghost">
        <Search />
      </IconButton>
    </Popover>
  );
}
