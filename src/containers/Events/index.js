import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();
  const [type, setType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
                                                                                                                                                         
  const eventsByType = type 
    ? data?.events.filter(event => event.type === type) 
    : data?.events || [];
                                                                                      
  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const displayedEvents = eventsByType.slice(startIndex, endIndex);

  const changeType = (evtType) => {
    setCurrentPage(1);
    setType(evtType);
  };

  const pageNumber = Math.ceil(eventsByType.length / PER_PAGE);
  const typeList = new Set(data?.events.map((event) => event.type));

  return (
    <>
      {error ? <div>An error occured</div> : null}
      {data === null ? "loading" : (
        <>
          <h3 className="SelectTitle">Catégories</h3>
          <Select
            selection={Array.from(typeList)}
            onChange={(value) => changeType(value || null)}
          />
          <div id="events" className="ListContainer">
            {displayedEvents.map((event) => (
              <Modal key={event.id} Content={<ModalEvent event={event} />}>
                {({ setIsOpened }) => (
                  <EventCard
                    onClick={() => setIsOpened(true)}
                    imageSrc={event.cover}
                    title={event.title}
                    date={new Date(event.date)}
                    label={event.type}
                  />
                )}
              </Modal>
            ))}
          </div>
          <div className="Pagination">
          {[...Array(pageNumber)].map((_, n) => (
            <a key={`page-${n + 1}`} href="#events" onClick={() => setCurrentPage(n + 1)}>
              {n + 1}
            </a>
          ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;