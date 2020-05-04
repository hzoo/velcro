export enum SourceModuleDependencyKind {
  Require = 'Require',
  RequireResolve = 'RequireResolve',
  GlobalObject = 'GlobalObject',
}

interface SourceModuleOptions {
  exportName?: string;
}

type SourceLocation = { start: number; end: number };

export class SourceModuleDependency {
  private constructor(
    readonly kind: SourceModuleDependencyKind,
    readonly spec: string,
    readonly locations: ReadonlyArray<SourceLocation>,
    readonly options: SourceModuleOptions = {}
  ) {}

  static fromGloblaObject(spec: string, locations: SourceLocation[], exportName?: string) {
    return new SourceModuleDependency(SourceModuleDependencyKind.GlobalObject, spec, locations, {
      exportName,
    });
  }

  static fromRequire(spec: string, locations: SourceLocation[]) {
    return new SourceModuleDependency(SourceModuleDependencyKind.Require, spec, locations);
  }

  static fromRequireResolve(spec: string, locations: SourceLocation[]) {
    return new SourceModuleDependency(SourceModuleDependencyKind.RequireResolve, spec, locations);
  }
}
