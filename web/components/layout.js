import React from 'react'
import { Link } from 'gatsby'


const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    // TODO: is it problematic getting pathname from window? Better way to do it using Gatsby with Reach Router?
    const path = window.location.pathname
    console.log('path: ', path)
    return (
        <div id='layout'>
            <header>
                <Link to='/'>
                    <h1>Web Dev Student Cheatsheet & Reference</h1>
                </Link>

                <nav>
                    <ul>
                        {path === "/" 
                            ?   <ListLink to='/about'>About</ListLink>
                            :   <ListLink to='/'>Home</ListLink>
                        }
                        
                        
                    </ul>
                </nav>
            </header>
            
            <div>
                {children}
            </div>
            
            
        </div>
    )
}

