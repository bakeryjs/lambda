export class ScriptArgument {
  constructor(name: string, type: string, description: string);
}

export class ScriptResult {
  constructor(type: string, description: string);
}

export class Script {
  constructor(
    title: string,
    code: Function,
    args: [ScriptArgument],
    result: ScriptResult,
  );
  static Builder(): ScriptBuilder;
}

export class ScriptBuilder {
  title(value: string): ScriptBuilder;
  code(value: string): ScriptBuilder;
  argument(name: string, type: string, description: string): ScriptBuilder;
  result(type: string, description: string): ScriptBuilder;
  build(): Script;
}
