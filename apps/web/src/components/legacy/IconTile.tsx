/** Иконка картинкой вместо компонента из библиотеки. */
export function IconTile({ src, label }: { src: string; label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "gray.700", fontSize: 13 }}>
      <img src={src} width={16} height={16} alt="" />
      {label}
    </span>
  );
}
