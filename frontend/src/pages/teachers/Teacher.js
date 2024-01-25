import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { axiosRes } from "../../api/axiosDefaults";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import TeachersPage from "./TeachersPage";
import { TeacherDropdown } from "../../components/MoreDropdown";
import appStyles from "../../App.module.css";

// component renders artist information and statistics
const Teacher = (props) => {
  const {
    owner,
    id,
    profile_id,
    profile_image,
    teacher,
    school,
    location,
    email,
    isProfilePage,
  } = props;


  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();


  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/teachers/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        {!isProfilePage && (
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={100} />
              {owner}
            </Link>
            {is_owner && TeachersPage && (
              <TeacherDropdown
                handleDelete={handleDelete}
              />
            )}
          </Media>
        )}
        <p className="text-center">
          <strong>Teacher: </strong>
          {teacher}
        </p>
        <p className="text-center">
          <strong>School: </strong>
          {school}
        </p>
        <p className="text-center">
          <strong>Location: </strong>
          {location}
        </p>
        <p className="text-center">
          <strong>Email: </strong>
          {email}
        </p>
      </Card.Body>
    </Card>
  );
};

export default Teacher;