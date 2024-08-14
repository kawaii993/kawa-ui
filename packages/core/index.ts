import { makeInstaller } from '@kawa-ui/utils'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from './components'
import '@kawa-ui/theme/index.css'

library.add(fas)
const installer = makeInstaller(components)

export * from '@kawa-ui/components'
export default installer;
