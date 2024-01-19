import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { axiosRes } from "../../api/axiosDefaults";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import TeachersPage from "./TeachersPage";
import { MoreDropdown } from "../../components/MoreDropdown";

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

  const handleEdit = () => {
    history.push(`/teachers/${id}/edit`);
  };

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
          <MoreDropdown
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )}
          </Media>
        )}
        <p className="text-center">
          Teacher: 
           {teacher}
        </p>
        <p className="text-center">
          School:
          {school}
        </p>
        <p className="text-center">
          Location:
          {location}
        </p>
        <p className="text-center">
          Email:
          {email}
        </p> 
      </Card.Body>
    </Card>
  );
};

export default Teacher;