import { useEffect } from "react";

interface ColorPickerProps {
    selected: string
    colors: {[key: string]: string}
    onSelect: (img: string) => void
}

export default function ColorPicker({ selected, colors, onSelect }: ColorPickerProps) {
  const backgroundColorMap: {[key: string]: string} = {
    "rose": "bg-rose-gold",
    "white": "bg-white-gold",
    "yellow": "bg-yellow-gold"
  }
  
  return (
    <div className="flex gap-2">
      {Object.keys(colors).map((color, i) => (
        <button
          key={i}
          className={`w-5 h-5 rounded-full ${selected == color && "outline outline-offset-3"} ${backgroundColorMap[color]}`}
          onClick={() => onSelect(color)}
        />
      ))}
    </div>
  );
}