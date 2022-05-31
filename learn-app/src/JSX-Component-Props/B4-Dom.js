
// B4 Dom


// const Form = {
//     Input() {
//         return <input />
//     },

//     Radio() {
//         return <input type="radio" />
//     },

//     CheckBox() {
//         return <input type="checkbox" />
//     },
// }

function Component(
    { 
        title,
        href,
        onClick = () => {console.log(Math.random())},
        style
    }
) {
    let Component = 'button'
    const props = {}

    if (href) {
        Component = 'a'
        props.href = href;
    }

    if (onClick) {
        props.onClick = onClick;
    }



    return (
        <Component {...props} style={style}> {title} </Component>
    );
}

const style = {
    backgroundColor: 'orange',
    color: '#fff',
    padding: '10px',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
}

function B4Dom() {
    // const type = 'CheckBox';
    // const Component = Form[type]
    return (
        <div id="ws">
            {/* <Component /> */}
            <Component
                style={style}
                title="Click me"
            // href = "https://www.google.com.vn/"
            onClick={() => {console.log('Heelo')}}
            />
        </div>
    )
}

export default B4Dom;