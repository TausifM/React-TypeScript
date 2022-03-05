type PersonProps = {
    personName: {
        first: string,
        last: string
    }
}

export const Person = (props: PersonProps) => {
    return <div>{props.personName.first}</div>
}