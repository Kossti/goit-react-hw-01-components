import user from "./Profile/user.json"
import Profile from "./Profile/Profile";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: 'auto',
        padding: 20
      }}
    >
      <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
      React homework template
    </div>
  );
};
