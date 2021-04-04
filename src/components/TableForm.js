import { makeStyles } from '@material-ui/core/styles'
import {useSelector} from 'react-redux'
import {listOfNumbers} from '../selectors'

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import SearchIcon from "@material-ui/icons/Search";
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

import MaterialTable from "material-table";

const useStyles = makeStyles({
    table: {
      minwidth: 600,
      overflow: "hidden",
      position:'absolute',
      marginLeft:'300px'
    },
    draw: {
      paddingTop:'30px',
    }
  });
  
  
  
  
  
  const TableForm = () => {
    const classes = useStyles()
    const employeeList = useSelector(listOfNumbers)
  
    const columns = [
      {
        title: "WEEK ENDING",
        field: "weekEnding",
      },
      {
        title: "RETAIL SALES",
        field: "retailSales",
      },
      {
        title: "WHOLESALE SALES",
        field: "wholesaleSales",
      },
      {
        title: "UNITS SOLD",
        field: "unitsSold",
      },
      {
        title: "RETAILER MARGIN",
        field: "retailerMargin",
      },
    ];
  
    
    const cl = useStyles();
    return (
  
      
      <div className={cl.table} >
        {employeeList.map((e,k) => {
              return <MaterialTable title= {null}  data={e.sales} 
              columns={columns} 
              icons={{
                Add: props => <AddIcon />,
                Edit: props => <EditIcon />,
                Delete: props => <DeleteIcon />,
                Clear: props => <DeleteIcon />,
                Check: props => <CheckIcon />,
                Search: props => <SearchIcon />,
                ResetSearch: props => <DeleteIcon />,
                FirstPage: props=> <FirstPage />,
                LastPage: props=> <LastPage/>,
                PreviousPage : props=> <ChevronLeft  />,
                NextPage : props=> <ChevronRight />,
                SortArrow : props=> <ArrowDownward  />,
              }}
              options={{ search: true,  exportButton: false }}
              
              />}
        )}
      </div>
  
    )
  
  }

  export default TableForm