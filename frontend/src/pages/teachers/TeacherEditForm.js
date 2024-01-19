import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import { useHistory, useParams } from "react-router-dom";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { axiosReq } from "../../api/axiosDefaults";

const TeacherEditForm = () => {
  const [errors, ] = useState({});

  const [teacherData, setTeacherData] = useState({
    teacher: " ",
    school: " ",
    location: " ",
    email: " ",
  });
  const { teacher, school, location, email, } = teacherData;

  const history = useHistory();
  const { id } = useParams();


  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/teachers/${id}/`);
        const {
            teacher, school, location, email, is_owner,
        } = data;

        is_owner ? setTeacherData({ teacher, school, location, email }) : history.push("/");
      } catch (err) {
      }
    };

    handleMount();
  }, [history, id]);

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
  };

  const textFields = (
    <div className="text-center">

      <Form.Group>
        <Form.Label>Teacher</Form.Label>
        <Form.Control
          type="text"
          name="teacher"
          value={teacher}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>School</Form.Label>
        <Form.Control
          type="text"
          name="school"
          value={school}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
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
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

<Button className={btnStyles.Button} onClick={() => history.goBack()}>
        Cancel
      </Button>
      <Button className={btnStyles.Button} type="submit">
        Save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container className={appStyles.Content}>{textFields}</Container>
    </Form>
  );
};

export default TeacherEditForm;