interface ColorPickerProps {
    colors: {[key: string]: string}
    onSelect: (img: string) => void
}

export default function ColorPicker({ colors, onSelect }: ColorPickerProps) {
  return (
    <div className="flex gap-2 mt-2">
      {Object.keys(colors).map((key, i) => (
        <button
          key={i}
          className="w-6 h-6 rounded-full border"
          style={{ backgroundColor: "red" }}
          onClick={() => onSelect(key)}
        />
      ))}
    </div>
  );
}