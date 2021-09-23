export interface PaginationState {
  selectedPage: number;
}
export interface PaginationProps {
  numberOfPages: number
  onChange(selectedPage: number): void;
  overrideSelectedPage?: number;
}