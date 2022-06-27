import { memo } from "react";

function Content( {onIncreace} ) {
    console.log('Re-render ...');
    return (
        <div>
            <h2>Content</h2>
            <button onClick={onIncreace}>Increace</button>
        </div>

    )
}

export default memo(Content)