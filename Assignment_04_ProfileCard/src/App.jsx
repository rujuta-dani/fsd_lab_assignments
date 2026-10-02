import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {

    return (
        <div className="app">

            <h1>My Profile</h1>

            <ProfileCard
                name="Aarav Sharma"
                image="https://i.pravatar.cc/300?img=12"
                description="I am learning JavaScript and React and building frontend projects."
            />

        </div>
    );
}

export default App;