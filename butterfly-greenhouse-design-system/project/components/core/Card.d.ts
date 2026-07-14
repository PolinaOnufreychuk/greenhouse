export interface CardProps {
  /** Background image URL */
  image: string;
  /** Small eyebrow label above title */
  eyebrow?: string;
  /** Card headline */
  title: React.ReactNode;
  /** Supporting copy */
  description?: React.ReactNode;
  /** Card aspect — portrait for gallery grids, wide for feature rows */
  aspect?: "portrait" | "wide" | "square";
}
