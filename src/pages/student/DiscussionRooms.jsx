import React from 'react'
import { styles } from '../../select/styles'
import Select from "react-select"
const DiscussionRooms = () => {
  return (
    <section>
      <div className="filter-row bg-white rounded-lg p-[16px] my-[16px] grid grid-cols-3 gap-[8px] ">
        <label htmlFor="">
          <span className="inline-block mb-[4px]">Title</span>
          <input type="text" placeholder="Search Here" />
        </label>
        <label htmlFor="">
          <span className="inline-block mb-[4px]">Resource Type</span>
          <Select styles={styles} placeholder="Filter Category" />
        </label>

        <label htmlFor="">
          <span className="inline-block mb-[4px]">Status</span>
          <Select styles={styles} placeholder="Filter Status" />
        </label>
      </div>

      
    </section>
  )
}

export default DiscussionRooms
