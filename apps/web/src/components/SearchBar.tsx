import { Button, Input, Select } from "@seavora/ui";

export function SearchBar() {
  return (
    <form className="search-bar" role="search">
      <Input size="lg" variant="outline" placeholder="Where to?" aria-label="Destination" />
      <Input size="lg" variant="outline" placeholder="Check in – check out" aria-label="Dates" />
      <Select.Root size="lg" variant="outline">
        <Select.Label>Guests</Select.Label>
        <Select.Trigger>
          <Select.ValueText>2 guests</Select.ValueText>
        </Select.Trigger>
      </Select.Root>
      <Button size="lg" variant="solid" colorPalette="teal" type="submit">
        Search
      </Button>
    </form>
  );
}
