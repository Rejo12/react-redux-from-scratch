import React from 'react';


function Node({ data, depth, pos }) {

    let newDepth = depth + 1
    let leftPos = pos === 'left' ? newDepth * 2.5 : newDepth * 5;
    console.log(depth, data.value)
    return (
        <div style={{}}>
            <div className='binary-root' style={{ top: `${depth * 75}px`, left: 'calc(50vh - `${letPos}` + px)' }} >
                {data.value}
            </div>
            {(data.left) &&
                <Node data={data.left} depth={depth + 1} pos="left" />
            }
            {(data.right) &&
                <Node data={data.right} depth={depth + 1} pos="right" />
            }
        </div>
    )
}

const BinaryTree = () => {
    const root = {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 4
            },
            right: {
                value: 5
            }
        },
        right: {
            value: 3
        }
    }

    return (
        <div className='centered' >
            <Node data={root} depth={1} />
        </div>
    )
}

export default BinaryTree