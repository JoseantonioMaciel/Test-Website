import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme } from '@material-ui/core/styles';



function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;
}

//

function QuiltedImageList() {
    const theme = createTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        
        <ImageList
            variant="quilted"
            cols={  matches ? '2 ':'4' } 
            rowHeight={matches ? ' 70':'150'}
            gap={25}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        srcSet={srcset(item.img, 141, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                        
                    />
                    
                    <ImageListItemBar
                    title={item.author}
                    subtitle={item.title}
                    />
                    </ImageListItem>
                    
                ))}
        
        </ImageList>
        
    );
    }




    const itemData = [
    {
        img: 'images/img-1.jpg',
        title: 'Fire Damage',
        rows: 4,
        cols: 2,
    },
    {
        img: 'images/img-2.jpg',
        title: 'New Home',
        cols: 2,
    },
    {
        img: 'images/img-3.jpg',
        title: 'Commercial Tenant Improvement',
    },
    {
        img: 'images/img-4.jpg',
        title: 'Remodel Multifamily Duplex',
    },
    {
        img: 'images/img-5.jpg',
        title: 'AS-Built Drawings',
        rows: 2,
        cols: 2,
    },
    
    ];
    export default QuiltedImageList;