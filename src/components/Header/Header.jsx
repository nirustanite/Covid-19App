import React from 'react';
import logo from '../../assets/logo.png';
import { Menu, Image } from 'semantic-ui-react';

export default function Header(){

    return (
        <Menu fixed="top" borderless>
            <Menu.Item>
                <Image src={logo} size="mini" />
                &nbsp; <p>COVID</p>
            </Menu.Item>
        </Menu>
    )
}