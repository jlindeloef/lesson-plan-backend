import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/SignInUpForm.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Form to gather and post data to database for a new artist registration
const TeacherCreateForm = () => {
  // redirect to home page if user is not logged in
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  
  const currentUser = useCurrentUser();
  const id = currentUser?.profile_id;

  const [teacherData, setTeacherData] = useState({
    teacher: " ",
    school: " ",
    location: " ",
    email: " ",
  });
  const {
    teacher, school, location, email,
  } = teacherData;
  const history = useHistory();

  const handleChange = (event) => {
    setTeacherData({
      ...teacherData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("teacher", teacher);
    formData.append("school", school);
    formData.append("location", location);
    formData.append("email", email);


    try {
      // make request to database to create a new artist
      const { data } = await axiosReq.post("/teachers/", formData);
      // add artist id to the users profile
      await axiosRes.put(`/profiles/${id}/`, { teacherId: data.id });
      // goes back to the page the user was on
      history.goBack(`/teachers/`);
    } catch (err) {
      // display any error for form validation
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">


      <Form.Group>
        <Form.Label>Teacher</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="teacher"
          className={styles.Input}
          value={teacher}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.teacher?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}


      <Form.Group>
        <Form.Label>School</Form.Label>
        <Form.Control
          type="text"
          name="school"
          className={styles.Input}
          value={school}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.school?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}


      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          rows={6}
          name="location"
          className={styles.Input}
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}


      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          className={styles.Input}
          value={email}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.email?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}


      <Button className={`${btnStyles.Button} ${btnStyles.Bright}`} onClick={() => history.goBack()}>
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Bright}`} type="submit">
        Create
      </Button>
    </div>
  );


  return (
    <Form onSubmit={handleSubmit}>
      <Container className={appStyles.Content}>{textFields}</Container>
    </Form>
  );
};


export default TeacherCreateForm;