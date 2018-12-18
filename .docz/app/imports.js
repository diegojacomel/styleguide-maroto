export const imports = {
  'src/components/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-button" */ 'src/components/Button/Button.mdx'),
  'src/components/Dropdown/Dropdown.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-dropdown-dropdown" */ 'src/components/Dropdown/Dropdown.mdx'),
  'src/components/Icon/Icon.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-icon-icon" */ 'src/components/Icon/Icon.mdx'),
  'src/components/Input/Input.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-input-input" */ 'src/components/Input/Input.mdx'),
}
