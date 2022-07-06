import React from 'react'
import Profile from './Profile'
import styles from "./ProfileList.module.css"
import { profileData } from '../../profile-data'


const ProfileList = () => {
  return (

    <section className={styles.center}>
        <div>
        <h1>Team Members</h1>

        <div className={styles["profile-container"]}>
           {profileData.map((data,index) => {
            //destructuring
            const{img,name,job,company,link} = data;
            return(
              <Profile
              key={index}
              image={img}
              name={name}
              job={job}
              company={company}
              link={link}
              />
            )

           })}
          
        </div>
        </div>

    </section>
    
  )
}

export default ProfileList
