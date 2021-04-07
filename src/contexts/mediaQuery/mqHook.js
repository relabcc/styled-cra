import { useMediaQuery } from 'react-responsive'

const useMq = bp => useMediaQuery({ query: `(min-width: ${bp})` })

export default useMq
