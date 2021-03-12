import { useMediaQuery } from 'react-responsive'

const useMq = bp => useMediaQuery({ query: `(min-width: ${bp}px)` })

export default useMq
