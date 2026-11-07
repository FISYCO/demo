import { Checkbox, RadioGroup, Separator, Slider } from "@seavora/ui";

const AMENITIES = ["Wifi", "Kitchen", "Free parking", "Pool", "Air conditioning"];

export function FilterSidebar() {
  return (
    <aside className="filters">
      <h3>Price per night</h3>
      <Slider.Root size="md" colorPalette="teal">
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb />
        </Slider.Control>
      </Slider.Root>
      <Separator />
      <h3>Amenities</h3>
      {AMENITIES.map((amenity) => (
        <Checkbox.Root key={amenity} size="sm" colorPalette="teal">
          <Checkbox.Control />
          <Checkbox.Label>{amenity}</Checkbox.Label>
        </Checkbox.Root>
      ))}
      <Separator />
      <h3>Sort by</h3>
      <RadioGroup.Root size="sm" colorPalette="teal">
        {["Recommended", "Price: low to high", "Rating"].map((option) => (
          <RadioGroup.Item key={option}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{option}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </aside>
  );
}
