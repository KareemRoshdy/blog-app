import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { Oval } from "react-loader-spinner";
import { BsCamera, BsFilePerson, BsTrash } from "react-icons/bs";
import UpdateProfileModal from "./UpdateProfileModal";
import {
  deleteProfile,
  getUserProfile,
  uploadProfilePhoto,
} from "../../redux/apiCalls/profileApiCall";
import PostItem from "../../components/posts/PostItem";
import { logoutUser } from "../../redux/apiCalls/authApiCall";
import "./profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id: userId } = useParams();
  const { profile, loading, isProfileDeleted } = useSelector(
    (state) => state.profile
  );
  const { user } = useSelector((state) => state.auth);

  // States
  const [file, setFile] = useState(null);
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile(userId));
    window.scrollTo(0, 0);
  }, [dispatch, userId]);

  useEffect(() => {
    if (isProfileDeleted) {
      navigate("/");
    }
  }, [isProfileDeleted, navigate]);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("There is no image!");
    const formData = new FormData();
    formData.append("image", file);
    dispatch(uploadProfilePhoto(formData));
  };

  //   Delete Account Handler
  const deletePostHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover profile!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(deleteProfile(user?._id));
        dispatch(logoutUser());
      }
    });
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <Oval
          height={80}
          width={80}
          color="#27ae60"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel=""
          secondaryColor="gray"
          strokeWidth={3}
          strokeWidthSecondary={3}
        />
      </div>
    );
  }

  return (
    <section className="profile">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img
            src={file ? URL.createObjectURL(file) : profile?.profilePhoto.url}
            alt="userImage"
            className="profile-image"
          />

          {user?._id === profile?._id && (
            <form onSubmit={formSubmitHandler}>
              <abbr title="choose profile photo">
                <label htmlFor="file" className="upload-profile-photo-icon">
                  <BsCamera />
                </label>
              </abbr>
              <input
                hidden
                type="file"
                name="file"
                id="file"
                onChange={({ target }) => setFile(target.files[0])}
              />

              <button className="upload-profile-photo-btn">Upload</button>
            </form>
          )}
        </div>

        <h1 className="profile-username">{profile?.username}</h1>

        <p className="profile-bio">{profile?.bio}</p>

        <div className="user-date-joined">
          <strong>Date Joined: </strong>
          <span>{new Date(profile?.createdAt).toDateString()}</span>
        </div>

        {user?._id === profile?._id && (
          <div className="profile-update-sittings">
            <button
              className="profile-update-btn"
              onClick={() => setUpdateProfile(true)}
            >
              <BsFilePerson />
              <span>Update Profile</span>
            </button>

            <button className="delete-account-btn" onClick={deletePostHandler}>
              <BsTrash />
              <span>Delete Account</span>
            </button>
          </div>
        )}
      </div>

      <div className="profile-container">
        <div className="profile-posts-list">
          <h2 className="profile-post-list-title">{profile?.username} Posts</h2>

          {profile?.posts?.map((post) => (
            <PostItem
              key={post._id}
              post={post}
              username={profile?.username}
              userId={profile?._id}
              profileImage={profile?.profilePhoto.url}
            />
          ))}
        </div>
      </div>
      {updateProfile && (
        <UpdateProfileModal
          profile={profile}
          setUpdateProfile={setUpdateProfile}
        />
      )}
    </section>
  );
};

export default Profile;
