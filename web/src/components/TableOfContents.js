import React from 'react'
import { Link } from 'gatsby'

export default function TableOfContents({ data }) {
    // console.log('ToC data: ', data)
    return (
        <div id="toc">
            <h2>Table of Contents</h2>
            <nav>
                <ul>
                    {data.map(({ node }) => {
                        // console.log('node map', node)
                        return (
                            <li key={node._id}>
                                <Link 
                                    to={`#${node.anchor_id}`}
                                    className={node.section_active  
                                        ? '' 
                                        : 'incomplete_section'
                                    }
                                >
                                    {node.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}