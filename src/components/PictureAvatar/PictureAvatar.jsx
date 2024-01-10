import avatarPic from '../../assets/Leon.png';

import './style.css'


const PictureAvatar = () => {
  return (
    <div className="image-container">
      <img src={avatarPic} alt="imagen cumpleañero" />
    </div>
  )
}

export default PictureAvatar;

