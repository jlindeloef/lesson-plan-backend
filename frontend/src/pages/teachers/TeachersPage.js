import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Teacher from "./Teacher";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { Link } from "react-router-dom";
import NoResults from "../../assets/no-results.png";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const TeachersPage = ({ message, filter = "" }) => {
  const [teachers, setTeachers] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const { data } = await axiosReq.get(`/teachers/?${filter}search=${query}`);
        setTeachers(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTeachers();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <h1>Teachers</h1>
        <p>As a teacher you register to the teachers list so other teacher can find you for colaboration.<br />
          Aren't you a registered teacher?
          <Link className={styles.Link}  to="/teachers/create">
            <span> <strong> Sign up now!</strong></span>
          </Link>
        </p>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
      
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search teachers by name, location or school"
          />
        </Form>
        
        {hasLoaded ? (
          <>
            {teachers.results.length ? (
              <InfiniteScroll
                children={teachers.results.map((teacher) => (
                  <Teacher key={teacher.id} {...teacher} showAll />
                ))}
                dataLength={teachers.results.length}
                loader={<Asset spinner />}
                hasMore={!!teachers.next}
                next={() => fetchMoreData(teachers, setTeachers)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.ContentWhite}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
};

export default TeachersPage;