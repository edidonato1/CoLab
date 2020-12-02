import styled from 'styled-components';

 const ProfileStyles = styled.div`
#profile-pic {
  width: 100px;
  height: 100px;
  background-image: ${({loggedInUser}) =>  (loggedInUser?.img_url ? loggedInUser.img_url : "url('https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')")};
  border-radius: 50%;
  background-size: cover;
}
`

export default ProfileStyles;