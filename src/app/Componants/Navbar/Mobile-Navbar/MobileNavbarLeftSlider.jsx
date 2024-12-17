'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { my_context } from '@/app/GlobalDataShere/ContextProvider';
import { RxCross1 } from 'react-icons/rx';
import TopCategories from '../Top-Categories/TopCategories';
import Categories from '../Top-Categories/Categories';

export default function MobileNavbarLeftSlider() {
  // const [open, setOpen] = React.useState(false);
const {leftSliderData,setLeftSliderData}=React.useContext(my_context)


  const toggleDrawer = (newOpen) => () => {
    setLeftSliderData(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >

      <p  onClick={toggleDrawer(false)} className=' border-b mb-2 border-gray-300 flex justify-end px-3 pt-3 pb-1 w-full '>

      <RxCross1 className='text-gray-400' size={20} />

      </p>
      <p className=''>
      <TopCategories/>

      <p>
        <Categories/>
      </p>

      </p>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div >
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={leftSliderData} onClose={toggleDrawer(false)}>
      
        {DrawerList}
      </Drawer>
    </div>
  );
}
