import React from 'react'
import Ownmessage from './Ownmessage'
import Othersmessage from './Othersmessage'

const Messages = () => {
    return (
        <>
            <div className="message-container">
                <Ownmessage />
                <Othersmessage />
            </div>
            <form action="post" className="Message-box">
                <input type="text" name="message" id="message-text" placeholder="Write your message"/>
                <button type="submit" className="message-button">Send</button>
            </form>
        </>
    )
}

export default Messages
