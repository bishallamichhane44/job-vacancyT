import React, { Fragment } from "react";
import PropTypes from "prop-types";

const SeekerProfileData = ({
  profile: {
    location,
    desc,
    portfolio,
    jobInterests,
    currentStatus,
    contactNo,
    workEmail,
    currentJob,
    social,
    user: { name, username, avatar },
  },
  seeker: { email },
}) => {
  return (
    <div>
      <div className="profile-top bg-primary p-2">
        <img className="round-img my-1" src={avatar} alt="" />
        <h1 className="large">{name}</h1>
        <p className="lead">
          <i>{username}</i>
        </p>
        <p>{location && <span>{location}</span>}</p>
        <div className="icons my-1">
          {portfolio && (
            <a href={portfolio} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x"></i>
            </a>
          )}
          {social && social.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
          )}
          {social && social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          )}
          {social && social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          )}
          {social && social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          )}
        </div>
      </div>
      <div className="profile-about bg-light p-2">
        {desc && (
          <Fragment>
            <h2 className="text-primary">Bio</h2>
            <p>{desc}</p>
            <div className="line"></div>
          </Fragment>
        )}

        <h2 className="text-primary">Info</h2>
        <div className="skills">
          <div className="p-1">
            <i className="fa fa-envelope"></i>
            <strong>Email: </strong>
            {workEmail ? (
              <span>{`${workEmail}  | `}</span>
            ) : (
              <span>{`${email}  | `}</span>
            )}
            <i className="fa fa-phone"></i>
            <strong>Contact: </strong>
            {contactNo && <span>{`${contactNo}  | `}</span>}
            <i className="fa fa-user"></i>
            <strong>Status: </strong>
            {currentStatus && <span>{`${currentStatus}  | `} </span>}

            {currentStatus === "Employed" && (
              <Fragment>
                <i className="fa fa-briefcase"></i>
                <strong>Currently: </strong>
              </Fragment>
            )}
            {currentJob && <span>{`${currentJob}`} </span>}
          </div>
        </div>
        <br />
        <div className="profile-about bg-light p-2">
          <div className="skills">
            <strong>Interested In: </strong>
            {jobInterests &&
              jobInterests.map((jobInterest, index) => (
                <div key={index} className="p-1">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>{jobInterest}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SeekerProfileData.propTypes = {
  profile: PropTypes.object.isRequired,
  seeker: PropTypes.object.isRequired,
};

export default SeekerProfileData;
