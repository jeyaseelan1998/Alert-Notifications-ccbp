import Notification from '../Notification'
import { AiFillCheckCircle } from 'react-icons/ai'
import { RiErrorWarningFill } from 'react-icons/ri'
import { MdWarning, MdInfo } from 'react-icons/md'

import './index.css'

const AlertNotifications = () => {
    return (
        <div className='alert-notifications-container'>
            <h1 className='main-heading'>Alert Notifications</h1>
            <ul className='alert-notifications-list'>
                <Notification>
                    <AiFillCheckCircle className='notification-icon success' />
                    <h1 className='notification-heading success'>Success</h1>
                    <p className='notification-description'>You can access all the files in the folder</p>
                </Notification>
                <Notification>
                    <RiErrorWarningFill className='notification-icon error' />
                    <h1 className='notification-heading error'>Error</h1>
                    <p className='notification-description'>Sorry, you are not authorized to have access to
                        delete the file</p>
                </Notification>
                <Notification>
                    <MdWarning className='notification-icon warning' />
                    <h1 className='notification-heading warning'>Warning</h1>
                    <p className='notification-description'>Viewers of this file can see comments and
                        suggestions</p>
                </Notification>
                <Notification>
                    <MdInfo className='notification-icon info' />
                    <h1 className='notification-heading info'>Info</h1>
                    <p className='notification-description'>Anyone on the internet can view these files</p>
                </Notification>
            </ul>
        </div>
    )
}

export default AlertNotifications