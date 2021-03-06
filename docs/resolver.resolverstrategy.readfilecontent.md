<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@velcro/resolver](./resolver.md) &gt; [ResolverStrategy](./resolver.resolverstrategy.md) &gt; [readFileContent](./resolver.resolverstrategy.readfilecontent.md)

## ResolverStrategy.readFileContent() method

Read the content at the uri as an `ArrayBuffer`

ArrayBuffers are the lowest-common-denominator across the web and node and can easily be decoded with standard web apis like `StringDecoder`<!-- -->. In Node.js, `Buffer` objects are also `ArrayBuffer`<!-- -->s, allowing the tooling to be built on that primitive.

This is helpful for the understanding that not all uris are expected to produce meaningful text representations.

<b>Signature:</b>

```typescript
readFileContent(ctx: ResolverContext, uri: Uri): MaybeThenable<ResolverStrategy.ReadFileContentResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  ctx | ResolverContext | A <code>ResolverContext</code> that should be used for making calls to other strategy methods |
|  uri | Uri | The uri at which to read the content |

<b>Returns:</b>

MaybeThenable&lt;ResolverStrategy.ReadFileContentResult&gt;

