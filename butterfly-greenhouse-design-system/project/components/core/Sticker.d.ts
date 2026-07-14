export interface StickerProps {
  /** Sticker text content */
  children: React.ReactNode;
  /** Background color token or hex */
  color?: "orange" | "green" | "magenta" | "yellow" | "sky";
  /** Rotation in degrees, for the hand-placed sticker feel */
  rotate?: number;
}
