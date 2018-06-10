### [map](https://aotu.io/notes/2015/12/09/an-introduction-to-sass-maps/index.html) 的使用
  ```
    $map: (
      key-1: value-1,
      ...
      key-N: value-2
    )

    map-get($map, key)

  ```

  ```
    // 具体的例子
    
    $layer: (
      offcanvas: 1,
      lightbox: 500,
      dropdown: 10,
      tooltip: 15
    );

    @function layer($name) {
      @if map-has-key($layer, $name) {
        @return map-get($layer, $name);
      }
      @warn "The key #{$name} is not in the map '$layer'";
      @return null;
    };
  ```
