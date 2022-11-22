import { makeStyles } from '@material-ui/core/styles'
import { red, blue, green, lightGreen } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#ffffff',
    backgroundColor: "#00ff0080",
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}))