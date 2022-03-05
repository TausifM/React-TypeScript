type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <>
        {props.names.map((name, index) => {
            return (<h5 key={index}>{name.first} {name.last}</h5>)
        })}
        </>
    )
}