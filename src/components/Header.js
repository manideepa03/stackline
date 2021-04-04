import { makeStyles } from '@material-ui/core/styles'
import logo from '../stackline_logo.svg';
const useStylesTab = makeStyles((theme) => ({

    center: {
      margin: 'auto',
      width: '30%',
      padding: '10px',
      alignItems: 'left',
    },
    backColor: {
      backgroundColor: '#05446A',
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }))
const Header = () => {
    const classes = useStylesTab()
    return (
      <header className={classes.backColor}>
          <img src={logo} className="App-logo"  />
      </header>
  
    )
  
  }
export default Header;
  