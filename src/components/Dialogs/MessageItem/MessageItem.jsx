import React from 'react'
import classes from './MessageItem.module.css'


const MessageItem = (props) => {
    return (
        <div className={classes.messageItem}>{props.message}</div>
    )
}
export default MessageItem