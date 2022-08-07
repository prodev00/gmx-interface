import { useContext } from 'react'
import ThemeContext from '../themes/ThemeContext'

const useTheme = () => useContext(ThemeContext)

export default useTheme
