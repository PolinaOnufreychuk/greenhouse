export interface ButtonProps {
  /** Button label text */
  children: React.ReactNode;
  /** Visual style */
  variant?: "primary" | "secondary" | "ghost";
  /** Size */
  size?: "md" | "lg";
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}
