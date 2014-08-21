# &lt;polymer-github-card&gt;

> A bare minimum custom element starter-kit using [Polymer](http://www.polymer-project.org/).

Original VanillaJS version: https://github.com/pazguille/github-card

## Demo

[Check it live!](http://iamolivinius.github.io/polymer-github-card)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install polymer-github-card --save
```

Or [download as ZIP](https://github.com/iamolivinius/polymer-github-card/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/polymer-github-card/dist/polymer-github-card.html">
    ```

3. Start using it!

    ```html
    <polymer-github-card user="iamolivinius"></polymer-github-card>
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`user`        | *string*    | `iamolivinius` | Lorem ipsum dolor.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/iamolivinius/polymer-github-card/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
