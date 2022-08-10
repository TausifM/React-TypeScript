type StatusProps = {
    status: 'loading' |'error' | 'success'
}

export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
    }else if(props.status  ==='success'){
        message = 'Success'
    }else if (props.status === 'error'){
        message = 'Error'
    }
    return (
        <div>
            <h1>Status - {message}</h1>
        </div>
    )
}