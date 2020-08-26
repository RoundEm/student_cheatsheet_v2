import React from 'react'
import styled from 'styled-components'

const NavMenuPanel = styled.nav`
    background-color: rgb(16, 16, 16);
    opacity: .9;
    position: fixed;
    top: 0;
    width: 100%;
    text-align: center;
    /* TODO: how does scroll work when menu expands beyond bottom of window? (scroll currently operates on the content behind the menu) */
    font-size: 1.2em;
`
const A = styled.a`
    color: rgb(255, 159, 128);
    &:hover {
       border-bottom: 2px solid rgb(144, 210, 245);
    }
`

export default function NavMenu({ data, handleNavMenuToggle, activeSection }) {
    // console.log('menu props: ', data)
    return (
        <NavMenuPanel>
            <ul id="navmenu_list">
                <li>
                    <A href='#top-of-page'>Home</A>
                </li>
                {data.map(({ node }) => {
                    return node.section_active && (
                        <li key={node._id}>
                            <A 
                                href={`#${node.anchor_id}`}
                                onClick={handleNavMenuToggle}
                                // TODO: instead of keeping current-section class in css file is there a way to do it with styled-components props and Gatsby
                                className={node.anchor_id === activeSection && 'current-section'}
                            >
                                {node.name}
                            </A>
                        </li>
                    )
                })}
            </ul>
        </NavMenuPanel>
    )
}