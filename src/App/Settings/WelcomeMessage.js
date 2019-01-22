import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

export default function WelcomeMessage({firstVisit}){
    
    return (
        
        <AppContext.Consumer>
            {({firstVisit})=>firstVisit?
                <div>Welcome to Cryptodash, please select your favorite coins to begin.{''}</div>:
                null
            }
        </AppContext.Consumer>
    )
}
