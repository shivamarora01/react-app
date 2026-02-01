//by using const, now its a arrow function
export const ExtraButton = (props) => {
    return (
        <p>Hi, I'm that extra button, {props.children}</p>
    )
}