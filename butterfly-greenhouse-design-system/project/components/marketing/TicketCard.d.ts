export interface TicketCardProps {
  /** Ticket tier name */
  name: string;
  /** Price display string, e.g. "$24" */
  price: string;
  /** Per what unit, e.g. "per adult" */
  unit?: string;
  /** List of included perks */
  perks?: string[];
  /** Highlight this tier as the recommended one */
  featured?: boolean;
}
