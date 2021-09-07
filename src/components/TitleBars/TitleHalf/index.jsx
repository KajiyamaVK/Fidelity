export default function TitleHalf(props) {


    return (
        <div style={{ backgroundColor: '#5454B8', width: '50%', minWidth: '690px' }}>
            <h1 style={{ color: props.color, paddingLeft: '20px' }}>{props.text}</h1>
        </div>
    )

}