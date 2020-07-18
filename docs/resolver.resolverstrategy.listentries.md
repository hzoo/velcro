<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@velcro/resolver](./resolver.md) &gt; [ResolverStrategy](./resolver.resolverstrategy.md) &gt; [listEntries](./resolver.resolverstrategy.listentries.md)

## ResolverStrategy.listEntries() method

Produce a list of resolved entries that are direct children of the given uri.

This is the moral equivalent to something like non-recursive `fs.readdir()`<!-- -->. It is only designed to show files and folders (for now).

<b>Signature:</b>

```typescript
listEntries(ctx: ResolverContext, uri: Uri): MaybeThenable<ResolverStrategy.ListEntriesResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  ctx | ResolverContext | A <code>ResolverContext</code> that should be used for making calls to other strategy methods |
|  uri | Uri | The uri at which to list entries |

<b>Returns:</b>

MaybeThenable&lt;ResolverStrategy.ListEntriesResult&gt;
