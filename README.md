[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/Zhoya0077/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/Zhoya0077/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

# Fortune Cookie Funnies for Engineers

One fortune cookie message for a software engineer, written as a single line
of at most 120 characters. Entry for the
[Fortune Cookie Funnies for Engineers](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
bounty on [make.fun](https://make.fun/?ref=wrbbpgtj).

## The fortune

> You will deploy on Friday and nothing will break — the universe is saving it for Monday.

## How it works

`main.ts` writes the fortune to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back
to `/output/entry.txt`), prints it to stdout, and self-checks before and after
the write: the line must be 1–120 characters, a single line, not only
whitespace, and the file on disk must read back byte-identical to the gated
entry.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
