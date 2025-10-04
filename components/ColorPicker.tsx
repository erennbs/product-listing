import { useEffect } from "react";

interface ColorPickerProps {
    colors: {[key: string]: string}
    onSelect: (img: string) => void
}

export default function ColorPicker({ colors, onSelect }: ColorPickerProps) {
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
          className={`w-6 h-6 rounded-full ${backgroundColorMap[color]}`}
          onClick={() => onSelect(color)}
        />
      ))}
    </div>
  );
}