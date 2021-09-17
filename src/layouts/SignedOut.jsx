import React from 'react'
import { Button } from 'semantic-ui-react'
export default function SignedOut({props}) {
    return (
        <div>
            <Button onClick={props.signIn} primary style={{marginLeft:'0.5em', marginTop:'0.5em'}}>Giriş yap</Button>
            <Button primary style={{marginLeft:'0.5em', marginTop:'0.5em'}}>Kayıt ol</Button>
        </div>
    )
}
