export interface PropertyOptions {
  name: string;
  default: string;
}

export interface DataOptions {
  [key: string]: PropertyOptions;
}
