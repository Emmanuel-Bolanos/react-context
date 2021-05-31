export const DisplayUserInfo = ({ className, userData }) => {
  return (
    <div className={className}>
      <h3> Welcome, {userData.name} </h3>
      <img className='avatar' src={userData.avatar} alt="user avatar" />
      <p> {userData.biography} </p>
    </div>
  )
}