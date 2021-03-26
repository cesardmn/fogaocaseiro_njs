import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
  },
}))

export default function FormDialog({ date, setDate }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  function setNewDate(e) {
    const date = new Date(e.target.value)
    date.setDate(date.getDate() + 1)
    setDate(date)
    handleClose()
  }

  const classes = useStyles()

  return (
    <div>
      <Button
        className={classes.button}
        variant="text"
        color="primary"
        onClick={handleClickOpen}
      >
        <Typography variant="body2">Válido para pedidos até {date}</Typography>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="validade"
            type="date"
            fullWidth
            onChange={(e) => {
              setNewDate(e)
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
