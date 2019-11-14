import React from 'react'
import { Groups } from '../components/Groups'

export const Home = props => {

    return (
        <div>
            <br/>
            
            <Groups groups={props.groups} deleteGroup={props.deleteGroup}/>
        </div>
    )
}