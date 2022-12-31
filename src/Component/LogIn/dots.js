const Dots = () => {
    let dot = [1,2,3,4,5,6]
    return (
        <>
            {dot.map((i)=>
            <span class="dot"></span>
            )}
        </>
    )
}
export default Dots