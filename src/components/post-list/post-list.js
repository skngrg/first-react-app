import React from 'react';
import PostListItem from '../post-list-item/post-list-item'
import { ListGroup } from 'reactstrap';

import './post-list.css'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map(elem =>{
        const {id, ...elemProps} = elem;
        return (
            
            <PostListItem 
                {...elemProps} 
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)} 
                onToggleLiked ={() => onToggleLiked(id)}
            />
     
            // <li key={id} classNames="list-group-item">
            //      <PostListItem {...elemProps} onDelete={() => onDelete(id)}
            //      onToggleImportant={() => onToggleImportant(id)} 
            //      onToggleLiked ={() => onToggleLiked(id)}/>
            // </li>
        )
    });

    
    return (
        <ListGroup className="app-list ">
            {elements}
        </ListGroup>
    )
}

export default PostList;

