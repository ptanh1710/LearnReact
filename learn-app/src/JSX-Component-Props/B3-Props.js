
// Cách 1:
// function B3Props({data}) {
//     return (
//         <ul id="item">
//             {data.map((data, index) => 
//                 <li key={index}>{data.name}</li>
//             )}
//         </ul>
//     );
// }

// Cách 2:
function B3Props({ data, onClick }) {
    return (
        <ul id="item">
            <li
                onClick = {() => {onClick(data)}}
            >
                {data.name}
            </li>
        </ul>
    );
}

export default B3Props;