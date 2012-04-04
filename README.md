# cljs-repl

Just a quick hack. Based on Chris Grangers live-cljs live game editor.

## Usage

```bash
lein run
```
__If you get the "can't recur here" error:__

For some reason on second run the cljs compiler gets AOT compiled and screws everything up. If you get an error when you run, simply

```bash
rm -rf classes/cljs/
```

## License

Copyright (C) 2012 Chris Granger

Distributed under the Eclipse Public License, the same as Clojure.

