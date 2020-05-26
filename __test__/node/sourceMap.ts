import Wreck from '@hapi/wreck';
import { build } from '@velcro/runner';
import { getLocator } from 'locate-character';
import { SourceMapConsumer } from 'source-map';

async function readUrl(href: string) {
  const { payload } = await Wreck.get(href, {});
  return payload as Buffer;
}

describe('SourceMap support', () => {
  it('will work for in-memory builds', async () => {
    const buildResult = await build(`console.log(42)`, {
      readUrl,
    });

    const sourceMap = buildResult.output.sourceMapString;
    const consumer = await new SourceMapConsumer(sourceMap);
    const locator = getLocator(buildResult.output.code, { offsetLine: 1 });

    const loc1 = locator('42');
    const pos1 = consumer.originalPositionFor(loc1);

    expect(pos1).toStrictEqual({
      source: 'memory:/index.js',
      line: 1,
      column: 12,
      name: null,
    });
  });

  it('will produce a correct map for preact', async () => {
    const buildResult = await build(`module.exports = require('preact');`, {
      readUrl,
      dependencies: {
        preact: '10.4.4',
      },
      nodeEnv: 'development',
    });

    const sourceMap = buildResult.output.sourceMapString;
    const consumer = await new SourceMapConsumer(sourceMap);
    const locator = getLocator(buildResult.output.code, { offsetLine: 1 });

    const loc1 = locator('render');
    const pos1 = consumer.originalPositionFor(loc1);

    // https://github.com/preactjs/preact/blob/1834cd70adf5758541d6167ba8c2c42778443d04/src/diff/index.js#L66
    expect(pos1).toStrictEqual({
      source: '../src/diff/index.js',
      line: 66,
      column: 52,
      name: 'render',
    });

    const loc2 = locator('render', loc1.character + 1);
    const pos2 = consumer.originalPositionFor(loc2);

    // https://github.com/preactjs/preact/blob/1834cd70adf5758541d6167ba8c2c42778443d04/src/diff/index.js#L71
    expect(pos2).toStrictEqual({
      source: '../src/diff/index.js',
      line: 71,
      column: 7,
      name: 'render',
    });
  });
});
