

//  Spread / Rest props
function Input({ label, ...inputProps }) {
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps} />
        </div>
    )
}

// Children Props

function Button({ children }) {
    return (
        <button> {children} </button>
    )
}

// Render Props


    // Thuong dung kieu nay
function List ( {data} ) {
    return (
        <ul>
            {data.map((item) => <li key={item}>{item}</li>)}
        </ul>
    )
}

  
function List2 ( {data, children} ) {
    return (
        <ul>
            {/* {data.map(item => children(item))} */}
            {data.map((...props) => children(...props))}
        </ul>
    )
}

//  ----------------
function B5ChildrenRenderProps() {
    const data = ['Java', 'PHP', 'C Sharp']
    return (
        <div>
            <Input
                label="Label la"
                type="text"
                placeholder="This is a Placeholder"
                title="This is a Textbox"
                onFocus={() => { console.log(Math.random()); }}
                onBlur={() => { console.log('Da Blur'); }}
                onChange={(event) => { console.log(event.target.value); }}
            />

            <Button>
                Click me
            </Button>

            <List data = {data} />

            <List2 data = {data}>
                {(item, index) => <li key={index}>{item}</li>}
            </List2>
        </div>

    )
}


export default B5ChildrenRenderProps;