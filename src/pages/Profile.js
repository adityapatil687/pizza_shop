import { useEffect } from "react";
const ProfileScreen = () => {
  useEffect(() => {
    let element = document.getElementById("root");
    element.classList.add("my-auto");

    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Profile";
  }, []);
  return (
    <>
      <div className="text-center">
        <p>This is Profile</p>
      </div>
    </>
  );
};

export default ProfileScreen;
