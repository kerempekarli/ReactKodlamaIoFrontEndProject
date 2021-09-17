import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { Image } from "semantic-ui-react";

export default function SignedIn(prototo) {
  return (
    <div> 
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://pbs.twimg.com/profile_images/1395358968755757061/sfsaIG17_400x400.jpg"
        />
        <Dropdown>
          <Dropdown.Menu>
            <Dropdown.Item  text="Bilgilerim" icon="info" />
            <Dropdown.Item  onClick={prototo.signOut} text="Çıkış yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
