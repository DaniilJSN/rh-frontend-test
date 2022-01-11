import React from "react";
import "./UserAvatar.scss";

const UserAvatar = ({ photo, name }) => (
  <div className="user-avatar">
    <img
      src={photo.src}
      width={photo.width}
      height={photo.height}
      alt={name}
      className="user-avatar-picture"
      loading="lazy"
    />
    <div className="user-avatar-name">{name}</div>
  </div>
);

export default UserAvatar;
