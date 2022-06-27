import React, { useEffect, useState } from 'react'

function B7UseEffect() {

    const [title, setTitle] = useState('effect no [deps]')
    const [datas, setDatas] = useState([])
    const types = ['posts', 'comments', 'albums', 'users']
    const [type, setType] = useState('posts')

    const [scrollToTop, setScrollToTop] = useState(false)

    const [width, setWidth] = useState(window.innerWidth)

    // useEffect(() => {
    //     document.title = title
    // })

    // Chỉ gọi 1 lần
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => {
    //             setDatas(data)
    //         })
    // }, [])

    // Chỉ gọi 1 lần
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data)
            })
    }, [type])

    // Scroll to show
    // Tất cả các sự kiện chỉ diễn ra 1 lần khi gọi và sẽ callback khi sk đó diễn ra
    useEffect(() => {

        const handleSroll = () => {
            if (window.scrollY >= 200) {
                //show
                setScrollToTop(true);
            }
            else {
                //Hide
                setScrollToTop(false);
            }
        }
        window.addEventListener('scroll', handleSroll);

        // Cleanup funciton
        return () => {
            window.removeEventListener('scroll', handleSroll);
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)

        // Cleanup funciton
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);


    // setTimeout, setInterval
    // Closure
    

    return (
        <div>
            <h4>B7 UseEffect</h4>
            <h5>{width}</h5>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <br />
            {types.map(type => (
                <button
                    key={type}
                    onClick={() => setType(type)}
                >
                    {type}
                </button>
            ))}
            <ul>
                {datas.map(data => (
                    <li key={data.id}>{data.title || data.name}</li>
                ))}
            </ul>
            {scrollToTop &&
                <button
                    style = {{
                        position: 'fixed',
                        right: 10,
                        bottom: 10
                    }}
                >
                    Go to top
                </button>
            }
        </div>
    )
}

export default B7UseEffect