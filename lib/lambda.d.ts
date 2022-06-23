import { API, APIBuilder } from './api';
import { Script, ScriptBuilder } from './script';

export class Lambda {
  constructor(
    identifier: string,
    title: string,
    description: string,
    author: string,
    url: string,
    freeAccess: boolean,
    scripts: [Script],
    apis: [API],
  );
  static Builder(): LambdaBuilder;
}

export class LambdaBuilder {
  identifier(value: string): LambdaBuilder;
  title(value: string): LambdaBuilder;
  description(value: string): LambdaBuilder;
  author(value: string): LambdaBuilder;
  url(value: URL): LambdaBuilder;
  freeAccess(value: boolean): LambdaBuilder;
  script(callback: (script: ScriptBuilder) => ScriptBuilder): LambdaBuilder;
  api(callback: (api: APIBuilder) => APIBuilder): LambdaBuilder;
  build(): Lambda;
}
