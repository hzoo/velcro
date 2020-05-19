<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@velcro/resolver](./resolver.md) &gt; [ResolverContext](./resolver.resolvercontext.md) &gt; [resolveRelative](./resolver.resolvercontext.resolverelative.md)

## ResolverContext.resolveRelative() method

<b>Signature:</b>

```typescript
resolveRelative(spec: string, fromUri?: Uri | string): Thenable<({
        found: false;
        uri: null;
        parentPackageJson?: {
            packageJson: PackageJson;
            uri: Uri;
        } | undefined;
    } & {
        visited: ResolverContext.Visit[];
    }) | ({
        found: true;
        uri: null;
        parentPackageJson?: {
            packageJson: PackageJson;
            uri: Uri;
        } | undefined;
        rootUri: Uri;
    } & {
        visited: ResolverContext.Visit[];
    }) | ({
        found: true;
        uri: Uri;
        parentPackageJson?: {
            packageJson: PackageJson;
            uri: Uri;
        } | undefined;
        rootUri: Uri;
    } & {
        visited: ResolverContext.Visit[];
    })>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  spec | string |  |
|  fromUri | Uri \| string |  |

<b>Returns:</b>

Thenable&lt;({ found: false; uri: null; parentPackageJson?: { packageJson: PackageJson; uri: Uri; } \| undefined; } &amp; { visited: ResolverContext.Visit\[\]; }) \| ({ found: true; uri: null; parentPackageJson?: { packageJson: PackageJson; uri: Uri; } \| undefined; rootUri: Uri; } &amp; { visited: ResolverContext.Visit\[\]; }) \| ({ found: true; uri: Uri; parentPackageJson?: { packageJson: PackageJson; uri: Uri; } \| undefined; rootUri: Uri; } &amp; { visited: ResolverContext.Visit\[\]; })&gt;
