import loadable from '@loadable/component'

const AsyncComponent = loadable((props) =>
  import(`../components/${props.name}`)
)

export default AsyncComponent

export function lazy(path) {
  return loadable(() => import(`../${path}`))
}
