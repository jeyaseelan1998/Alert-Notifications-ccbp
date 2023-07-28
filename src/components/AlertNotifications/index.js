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
                    <div className='notification-details'>
                        <h1 className='notification-heading success'>Success</h1>
                        <p className='notification-description'>You can access all the files in the folder</p>
                    </div>
                </Notification>
                <Notification>
                    <RiErrorWarningFill className='notification-icon error' />
                    <div className='notification-details'>
                        <h1 className='notification-heading error'>Error</h1>
                        <p className='notification-description'>Sorry, you are not authorized to have access to
                            delete the file</p>
                    </div>
                </Notification>
                <Notification>
                    <MdWarning className='notification-icon warning' />
                    <div className='notification-details'>
                        <h1 className='notification-heading warning'>Warning</h1>
                        <p className='notification-description'>Viewers of this file can see comments and
                            suggestions</p>
                    </div>
                </Notification>
                <Notification>
                    <MdInfo className='notification-icon info' />
                    <div className='notification-details'>
                        <h1 className='notification-heading info'>Info</h1>
                        <p className='notification-description'>Anyone on the internet can view these files</p>
                    </div>
                </Notification>
            </ul>
        </div>
    )
}

export default AlertNotifications