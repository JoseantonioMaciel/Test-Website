import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Grid from '@material-ui/core/Grid';


function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;
}

function QuiltedImageList() {
    return (
        
        <ImageList
            sx={{  
                width:['100%'] , 
                bgcolor: 'common.white', 
            }}
            
            variant="quilted"
            cols={4}
            rowHeight={161}
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
                    title={item.title}
                    subtitle={item.author}
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