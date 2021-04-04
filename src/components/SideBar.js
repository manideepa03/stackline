import { makeStyles } from '@material-ui/core/styles'
import {useSelector} from 'react-redux'
import {listOfNumbers} from '../selectors'
import { Drawer,Typography,Box,Chip} from '@material-ui/core'
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

const useSideMenuStyles = makeStyles((theme) => ({
  drawer: {
    width: '300px',
   
    flexShrink: 0
  },
  drawerPaper: {
    width:'300px',
    
    background: '#ffffff'
  },

  
}))

const SideBar = () => {
  const classes = useSideMenuStyles()
  
  const classes1 = useStylesTab()
  const employeeList = useSelector(listOfNumbers)

  return (
    <div>
    <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}>
          {employeeList.map((e, k)=>{
          return <div key={k}>
            <img src={e.image} width="150" height="150" />
            <Typography>
          <Box
            fontFamily="Heboo, sans-serif"
            fontSize={36}
            textAlign="center"
            fontWeight="fontWeightBold"
            color="#000000"
          >
          {e.title}
          </Box>
        </Typography>
        <Typography>
          <Box
            fontFamily="Heboo, sans-serif"
            fontSize={12}
            textAlign="center"
            fontWeight="fontWeightNormal"
            color="#000000"
          >
          {e.subtitle}
          </Box>
        </Typography>
        <Typography>
          <Box
            fontFamily="Heboo, sans-serif"
            fontSize={12}
            textAlign="center"
            fontWeight="fontWeightNormal"
            color="#000000"
          >
          {e.tags}
          </Box>
        </Typography>
        {e.tags.map((m,n) => {
          return (
            <Chip className={classes1.chip} label={m} />

          )
        })}
        </div>
        })}
      </Drawer>
      

    
    
    </div>

  )

}
export default SideBar;