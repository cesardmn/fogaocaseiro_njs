import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    borderBottom: '1px solid #e2e2e2',
  },
  id: {
    color: theme.palette.secondary.main,
  },
  salePrice: {
    color: theme.palette.primary.main,
    marginTop: 5,
  },
  displayItem: {
    border: `1px solid ${theme.palette.complementary.main}70`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.complementary.main,
  },
}))
