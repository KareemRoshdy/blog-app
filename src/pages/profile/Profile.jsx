/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { BsCamera, BsFilePerson, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostLists from "../../components/posts/PostLists";
import { posts } from "../../dummyData";
import UpdateProfileModal from "./UpdateProfileModal";
import "./profile.css";
import {
  getUserProfile,
  uploadProfilePhoto,
} from "../../redux/apiCalls/profileApiCall";

const Profile = () => {
  const dispatch = useDispatch();
  const { id: userId } = useParams();
  const { profile } = useSelector((state) => state.profile);

  // States
  const [file, setFile] = useState(null);
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile(userId));
    window.scrollTo(0, 0);
  }, [dispatch, userId]);

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
    }).then((willDelete) => {
      if (willDelete) {
        swal("Account has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
      }
    });
  };

  return (
    <section className="profile">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img
            src={file ? URL.createObjectURL(file) : profile?.profilePhoto.url}
            alt="user-image"
            className="profile-image"
          />

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
        </div>

        <h1 className="profile-username">{profile?.username}</h1>

        <p className="profile-bio">{profile?.bio}</p>

        <div className="user-date-joined">
          <strong>Date Joined: </strong>
          <span>{new Date(profile?.createdAt).toDateString()}</span>
        </div>

        <button
          className="profile-update-btn"
          onClick={() => setUpdateProfile(true)}
        >
          <BsFilePerson />
          <span>Update Profile</span>
        </button>
      </div>

      <div className="profile-container">
        <div className="profile-posts-list">
          <h2 className="profile-post-list-title">{profile?.username} Posts</h2>
          <PostLists posts={posts} />
        </div>

        <button className="delete-account-btn" onClick={deletePostHandler}>
          <BsTrash />
          <span>Delete Account</span>
        </button>
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
