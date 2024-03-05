import { Link } from 'react-router-dom'
import Logo from './Logo'


const LogoLink = () => {
  return (
    <Link to='/'>
        <Logo/>
    </Link>
  )
}

export default LogoLink