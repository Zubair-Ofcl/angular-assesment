export interface Pager {
  page: number;
  num_pages: number;
  count: number;
  results: any;
  has_total_row?: boolean;
  summary_row?: object
}
