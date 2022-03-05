
export type PersonProps = {
    name: {
        first: string,
        last: string
    }
}
export type PersonProps02 = {
    name: PersonProps
}

// You can export this and use in other components