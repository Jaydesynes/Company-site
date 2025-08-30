
import { Moon } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="rounded-full p-2 bg-background border border-border">
      <Moon className="h-4 w-4 text-foreground" />
    </div>
  );
}
