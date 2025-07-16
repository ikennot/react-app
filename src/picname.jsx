import sample from './pictures/sample.jpg'

export function Profile(){
const style ={
    width: '300px',
    height: '300px'
}
return(
    <img 
    src={sample} alt="Profile picture"
    style={style}
    />
)
}

export default Profile