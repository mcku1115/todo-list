import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

const TodoListItem = ({id, done, content, onChangeStatus}) => {
    const onClickCheck = (e) => {
        const newChecked = e.target.checked;
        onChangeStatus(id, newChecked)
    }
    return (
        <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
              </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={() => {}} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={done}
                  tabIndex={-1}
                  onChange={onClickCheck}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText 
                id={""} 
                primary={content} 
                primaryTypographyProps={{ sx: {color:"white"}}}/>
            </ListItemButton>
        </ListItem>       
    );
};

export default TodoListItem