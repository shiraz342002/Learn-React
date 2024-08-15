import React, { useState } from 'react';
const ProfilePicture = () => {
    const [imgUrl, setImgUrl] = useState("https://xsgames.co/randomusers/assets/avatars/male/46.jpg");
    const imageUrls = [
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/200/300?grayscale',
        'https://picsum.photos/200/300/?blur=2',
    ];
    const handleClickfunc=(e)=>{
        const random_num = Math.floor(Math.random() * imageUrls.length);
        setImgUrl(imageUrls[random_num]);
        e.target.display= "none";
        
    }
    return (
        <>
        <img onClick={(e)=>handleClickfunc(e)} src={imgUrl} alt="Profile Picture" />
        </>
  )
}

export default ProfilePicture
