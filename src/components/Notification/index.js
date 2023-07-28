import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
    const {children} = props
    const [NotificationIcon, Heading, Description] = children
    console.log(children);
    return(
        <li className='notification-container'>
            {NotificationIcon}
            <div className='notification-details'>
                {Heading}
                {Description}
            </div>
            <GrFormClose className='close-icon'/>
        </li>
    )
}

export default Notification