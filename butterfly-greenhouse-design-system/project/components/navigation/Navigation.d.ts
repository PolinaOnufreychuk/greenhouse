export interface NavigationProps {
  /** Nav link labels */
  links?: string[];
  /** true once page has scrolled — switches to solid sticky treatment */
  scrolled?: boolean;
  /** Label for the ticket CTA button */
  ctaLabel?: string;
}
