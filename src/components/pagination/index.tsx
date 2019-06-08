export interface IStore<IItem> {
  get: () => IConfig<IItem>;
  set: (data: IConfig<IItem>) => void;
}

export interface ISort<IItem> {
  _id?: string;
  columnId?: string;
  path: string;
  desc: 1 | -1;
}

export interface IColumn<IItem> {
  _id?: string;
  getter: "path";
  value: any;
  type?: string;
  options?: any;
}

export interface IFilter<IItem> {
  _id?: string;
  columnId?: string;

  type?: string;
  value?: any;
  deny?: "server" | "client";

  collectionQuery?: (column: IColumn<IItem>, filters: IFilter<IItem>[]) => any;
  valueQuery?: (column: IColumn<IItem>, filters: IFilter<IItem>[]) => any;
}

export interface IConfig<IItem> {
  page: number;
  pageSize: number;
  query: any;
  sort: any;

  filters: IFilter<IItem>[];
  sorts: ISort<IItem>[];
  columns: IColumn<IItem>[];
  nests: { [nodeId: string]: { [positionId: string]: boolean } };

  [key: string]: any;
}

export interface IStorage<IItem> {
  store: IStore<IItem>;

  config(): IConfig<IItem>;
  query(): any;
  sort(): any;

  setPage(page: number);
  setPageSize(page: number, pageSize: number);

  addFilter(filter: IFilter<IItem>): string;
  setFilters(filters: IFilter<IItem>[]);
  setFilter(filter: IFilter<IItem>);
  delFilter(filter: IFilter<IItem>);
  getFilters(columnId: string): IFilter<IItem>[];

  addSort(sort: ISort<IItem>): string;
  setSorts(sorts: ISort<IItem>[]);
  setSort(sort: ISort<IItem>);
  delSort(sort: ISort<IItem>);
  getSorts(columnId: string): ISort<IItem>[];

  addColumn(column: IColumn<IItem>): string;
  setColumns(columns: IColumn<IItem>[]);
  setColumn(column: IColumn<IItem>);
  delColumn(column: IColumn<IItem>);
  getColumn(columnId: string): IColumn<IItem>;

  isNest(nodeId: string, positionId: string): boolean;
  setNest(nodeId: string, positionId: string);
  unsetNest(nodeId: string, positionId: string);
  unsetNests(nodeId: string);
  getNests(nodeId: string): { [positionId: string]: boolean };
}

export interface IContext<IItem> {}

export interface IViews<IItem> {
  Value: (props: {
    context: IContext<IItem>;
    column: IColumn<IItem>;
    item: IItem;
  }) => JSX.Element;
  Column: (props: {
    context: IContext<IItem>;
    column: IColumn<IItem>;
  }) => JSX.Element;
  Filter: (props: {
    context: IContext<IItem>;
    column: IColumn<IItem>;
    filter: IFilter<IItem>;
    filterIndex: number;
  }) => JSX.Element;
  Filters: (props: {
    context: IContext<IItem>;
    column: IColumn<IItem>;
  }) => JSX.Element;
  FiltersList: (props: {
    context: IContext<IItem>;
    column: IColumn<IItem>;
    filters: IFilter<IItem>[];
  }) => JSX.Element;
  Pagination: (props: { context: IContext<IItem> }) => JSX.Element;
  Selector: (props: { context: IContext<IItem> }) => JSX.Element;
}

export interface IPaginationProps<IItem> {
  storage: IStorage<IItem>;
  views: IViews<IItem>;
}

export default () => {};
