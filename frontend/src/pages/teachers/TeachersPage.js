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
    <Row className="h-100 d-flex justify-content-center">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p className="text-center">Most followed profiles.</p>
        <PopularProfiles />
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
            <h1>Teachers</h1>
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
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
};

export default TeachersPage;