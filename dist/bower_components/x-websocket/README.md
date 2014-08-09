# &lt;x-websocket&gt; ![Bower Version](https://badge.fury.io/bo/element-boilerplate.svg)

> A Polymer/WebComponent wrapper of WebSocket client.

<!-- ## Demo

[Check it live!](http://webcomponents.github.io/element-boilerplate) -->

## Usage

1. Install the component using [Bower](http://bower.io/):

    ```sh
    $ bower install x-websocket --save
    ```

2. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

3. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/x-websocket/dist/x-websocket.html">
    ```

4. Start using it!

    ```html
    <x-websocket url="ws://echo.websocket.org"></x-websocket>
    ```

## Options

Attribute       | Options                   | Default             | Description
---             | ---                       | ---                 | ---
`url`           | *string*                  | `undefined`         | WebSocket server endpoint to connect to. Usually starts with `ws://` or `wss://`.
`json`          | *bool*                    | `false`             | Automatically JSON-encode sent messages and JSON-decode received messages.
`jsonSend`      | *bool*                    | `false`             | Automatically JSON-encode sent messages, even if `json` is `false`.
`jsonReceive`   | *bool*                    | `false`             | Automatically JSON-decode recieved messages, even if `json` is `false`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/elierotenberg/x-websocket/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
