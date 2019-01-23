import React from 'react';
import WelcomeMessage from '../Settings/WelcomeMessage';
import ConfirmButton from '../Settings/ConfirmButton';
import Page from '../Shared/Page';
export default function(){
    return (
    <Page name="settings">
        <WelcomeMessage/>
        <ConfirmButton/>
    </Page>)
};