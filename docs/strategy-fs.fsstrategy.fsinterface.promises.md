<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@velcro/strategy-fs](./strategy-fs.md) &gt; [FsStrategy](./strategy-fs.fsstrategy.md) &gt; [FsInterface](./strategy-fs.fsstrategy.fsinterface.md) &gt; [promises](./strategy-fs.fsstrategy.fsinterface.promises.md)

## FsStrategy.FsInterface.promises property

<b>Signature:</b>

```typescript
promises: {
            readdir(path: string, options: {
                encoding: "utf-8";
                withFileTypes: true;
            }): Promise<Dirent[]>;
            readFile(path: string): Promise<ArrayBuffer>;
            realpath(path: string): Promise<string>;
        };
```
