import { makeInstaller } from '@kawa-ui/utils'
import components from './components'
import '@kawa-ui/theme/dist/index.css'

const installer = makeInstaller(components)

export * from '@kawa-ui/components'
export default installer;