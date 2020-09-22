<img src="https://bedware.github.io/blog/favicon.ico" width="32px" height="32px" />

This is my blog: [http://surin.blog](http://surin.blog)

Command for build (Windows env):
```
docker run --rm -v %cd%:/srv/jekyll -v jekyll_cache:/usr/local/bundle -e JEKYLL_ENV=development -p 80:4000 -it jekyll/builder:3.8 jekyll serve
```

## License

Copyright (c) 2019 Dmitry Surin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so. The Software doesn't include files with .md and .markdown extension.
That files you are not allowed to copy, distribute, modify, publish, or sell.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
