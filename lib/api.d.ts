import { Lambda } from './lambda';

export abstract class API {
  abstract getLambda(): Promise<Lambda>;
  static Builder(): APIBuilder;
}

export class InternalAPI extends API {
  constructor(lambda: Lambda);
  getLambda(): Promise<Lambda>;
}

export class RemoteAPI extends API {
  constructor(url: URL);
  getLambda(): Promise<Lambda>;
}

export class APIBuilder {
  internal(lambda: Lambda): APIBuilder;
  remote(url: URL): APIBuilder;
  build(): API;
}
