export interface FAQItemProps {
  /** Question text */
  question: string;
  /** Answer text, shown when expanded */
  answer: string;
  /** Initially expanded */
  defaultOpen?: boolean;
}
